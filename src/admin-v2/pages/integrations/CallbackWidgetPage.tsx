/**
 * Callback Widget Settings Page
 * Configure the callback/call-me-back widget with n8n integration
 */
import { useState, useEffect } from 'react';
import { Save, RefreshCw, AlertCircle, Check, Phone, Clock, Link, ExternalLink, TestTube, PhoneCall } from 'lucide-react';
import { useAdmin } from '@/admin-v2/context/AdminStore';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface WidgetSettings {
  id?: string;
  site_id: string;
  widget_type: string;
  is_enabled: boolean;
  delay_seconds: number;
  n8n_webhook_url: string;
  message_en: string;
  message_ar: string;
  button_color: string;
  button_text_color: string;
  position: string;
}

interface CallbackRequest {
  id: string;
  name: string;
  phone_number: string;
  status: string;
  created_at: string;
  notes: string;
}

const defaultSettings: WidgetSettings = {
  site_id: '',
  widget_type: 'callback',
  is_enabled: true,
  delay_seconds: 30,
  n8n_webhook_url: '',
  message_en: "Need help? We'll call you back in 30 seconds!",
  message_ar: 'تحتاج مساعدة؟ سنتصل بك خلال 30 ثانية!',
  button_color: '#10b981',
  button_text_color: '#ffffff',
  position: 'bottom-left',
};

const positionOptions = [
  { value: 'bottom-left', label: 'Bottom Left' },
  { value: 'bottom-right', label: 'Bottom Right' },
  { value: 'top-left', label: 'Top Left' },
  { value: 'top-right', label: 'Top Right' },
];

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  called: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
  no_answer: 'bg-orange-100 text-orange-800',
  cancelled: 'bg-red-100 text-red-800',
};

export function CallbackWidgetPage() {
  const { currentSite: selectedSite } = useAdmin();
  const [activeTab, setActiveTab] = useState('settings');
  const [settings, setSettings] = useState<WidgetSettings>({
    ...defaultSettings,
    site_id: selectedSite || 'texafab',
  });
  const [requests, setRequests] = useState<CallbackRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [error, setError] = useState('');
  const [testResult, setTestResult] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    if (!selectedSite) return;
    loadSettings();
    loadRequests();
  }, [selectedSite]);

  const loadSettings = async () => {
    setIsLoading(true);
    setError('');

    try {
      const { data, error } = await supabase
        .from('widget_settings')
        .select('*')
        .eq('site_id', selectedSite)
        .eq('widget_type', 'callback')
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setSettings(data);
      } else {
        setSettings({
          ...defaultSettings,
          site_id: selectedSite || 'texafab',
        });
      }
    } catch (err: any) {
      console.error('Error loading settings:', err);
      setError(err.message || 'Failed to load settings');
    } finally {
      setIsLoading(false);
    }
  };

  const loadRequests = async () => {
    try {
      const { data, error } = await supabase
        .from('callback_requests')
        .select('*')
        .eq('site_id', selectedSite)
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      setRequests(data || []);
    } catch (err) {
      console.error('Error loading requests:', err);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setError('');
    setSaveSuccess(false);

    try {
      const { error } = await supabase
        .from('widget_settings')
        .upsert({
          ...settings,
          site_id: selectedSite,
          widget_type: 'callback',
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'site_id,widget_type',
        });

      if (error) throw error;

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err: any) {
      console.error('Error saving settings:', err);
      setError(err.message || 'Failed to save settings');
    } finally {
      setIsSaving(false);
    }
  };

  const testWebhook = async () => {
    if (!settings.n8n_webhook_url) {
      setError('Please enter a webhook URL first');
      return;
    }

    try {
      const response = await fetch(settings.n8n_webhook_url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          site_id: selectedSite,
          phone_number: '+1234567890',
          name: 'Test User',
          language: 'en',
          timestamp: new Date().toISOString(),
          source: 'Admin Panel Test',
          test: true,
        }),
      });

      if (response.ok) {
        setTestResult('success');
      } else {
        setTestResult('error');
      }
    } catch (err) {
      setTestResult('error');
    }

    setTimeout(() => setTestResult(null), 3000);
  };

  const updateRequestStatus = async (id: string, status: string) => {
    try {
      await supabase
        .from('callback_requests')
        .update({
          status,
          updated_at: new Date().toISOString(),
          called_at: status === 'called' || status === 'completed' ? new Date().toISOString() : null,
        })
        .eq('id', id);

      loadRequests();
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const updateField = (field: keyof WidgetSettings, value: any) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-6 max-w-5xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <PhoneCall className="w-6 h-6" />
          Callback Widget
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Configure the call-me-back widget and manage requests - {selectedSite}
        </p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="w-4 h-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {saveSuccess && (
        <Alert className="mb-4 bg-green-50 dark:bg-green-900/20 border-green-200">
          <Check className="w-4 h-4 text-green-600" />
          <AlertDescription className="text-green-700 dark:text-green-400">
            Settings saved successfully!
          </AlertDescription>
        </Alert>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="settings">Widget Settings</TabsTrigger>
          <TabsTrigger value="requests">
            Callback Requests
            {requests.filter(r => r.status === 'pending').length > 0 && (
              <Badge variant="destructive" className="ml-2">
                {requests.filter(r => r.status === 'pending').length}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="settings">
          {/* Preview */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-32 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <div
                  className={`absolute ${settings.position.includes('bottom') ? 'bottom-4' : 'top-4'} ${settings.position.includes('left') ? 'left-4' : 'right-4'}`}
                >
                  <button
                    className="flex items-center gap-2 px-4 py-3 rounded-full shadow-lg"
                    style={{
                      backgroundColor: settings.button_color,
                      color: settings.button_text_color,
                    }}
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium text-sm">Call Me Back</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            {/* Enable/Disable */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Enable Widget</Label>
                    <p className="text-sm text-slate-500 mt-1">
                      Show the callback widget on your website
                    </p>
                  </div>
                  <Switch
                    checked={settings.is_enabled}
                    onCheckedChange={(checked) => updateField('is_enabled', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Timing */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Display Timing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Show widget after</Label>
                    <span className="text-sm font-medium">{settings.delay_seconds} seconds</span>
                  </div>
                  <Slider
                    value={[settings.delay_seconds]}
                    onValueChange={([v]) => updateField('delay_seconds', v)}
                    min={5}
                    max={120}
                    step={5}
                  />
                  <p className="text-xs text-slate-500 mt-2">
                    The widget will appear after the visitor has been on the page for this duration
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Messages */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Widget Messages</CardTitle>
                <CardDescription>
                  Customize the message shown to visitors
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="message-en">English Message</Label>
                  <Textarea
                    id="message-en"
                    value={settings.message_en}
                    onChange={(e) => updateField('message_en', e.target.value)}
                    placeholder="Need help? We'll call you back!"
                    className="mt-1"
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="message-ar">Arabic Message</Label>
                  <Textarea
                    id="message-ar"
                    value={settings.message_ar}
                    onChange={(e) => updateField('message_ar', e.target.value)}
                    placeholder="تحتاج مساعدة؟ سنتصل بك!"
                    className="mt-1"
                    rows={2}
                    dir="rtl"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Appearance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Appearance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Button Color</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <input
                        type="color"
                        value={settings.button_color}
                        onChange={(e) => updateField('button_color', e.target.value)}
                        className="w-10 h-10 rounded border cursor-pointer"
                      />
                      <Input
                        value={settings.button_color}
                        onChange={(e) => updateField('button_color', e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Text Color</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <input
                        type="color"
                        value={settings.button_text_color}
                        onChange={(e) => updateField('button_text_color', e.target.value)}
                        className="w-10 h-10 rounded border cursor-pointer"
                      />
                      <Input
                        value={settings.button_text_color}
                        onChange={(e) => updateField('button_text_color', e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Label>Position</Label>
                  <Select
                    value={settings.position}
                    onValueChange={(v) => updateField('position', v)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {positionOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* n8n Integration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Link className="w-5 h-5" />
                  n8n Webhook Integration
                </CardTitle>
                <CardDescription>
                  Connect to n8n for automated callback workflows
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="webhook-url">Webhook URL</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      id="webhook-url"
                      value={settings.n8n_webhook_url}
                      onChange={(e) => updateField('n8n_webhook_url', e.target.value)}
                      placeholder="https://your-n8n-instance.com/webhook/..."
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      onClick={testWebhook}
                      disabled={!settings.n8n_webhook_url}
                    >
                      <TestTube className="w-4 h-4 mr-2" />
                      Test
                    </Button>
                  </div>
                  {testResult === 'success' && (
                    <p className="text-sm text-green-600 mt-1">✓ Webhook test successful!</p>
                  )}
                  {testResult === 'error' && (
                    <p className="text-sm text-red-600 mt-1">✗ Webhook test failed</p>
                  )}
                </div>
                <Alert>
                  <AlertDescription className="text-sm">
                    Create an n8n workflow with a Webhook trigger. The callback request data will be sent as JSON including: phone_number, name, site_id, language, timestamp
                  </AlertDescription>
                </Alert>
                <a
                  href="https://n8n.io/workflows"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                >
                  Learn more about n8n webhooks <ExternalLink className="w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t">
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Settings
                </>
              )}
            </Button>
            <Button variant="outline" onClick={loadSettings} disabled={isLoading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Reload
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="requests">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Recent Callback Requests</CardTitle>
                  <CardDescription>
                    Manage incoming callback requests from visitors
                  </CardDescription>
                </div>
                <Button variant="outline" onClick={loadRequests}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {requests.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <Phone className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>No callback requests yet</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>{request.name || '-'}</TableCell>
                        <TableCell className="font-mono">{request.phone_number}</TableCell>
                        <TableCell>
                          {new Date(request.created_at).toLocaleDateString()} {new Date(request.created_at).toLocaleTimeString()}
                        </TableCell>
                        <TableCell>
                          <Badge className={statusColors[request.status] || 'bg-gray-100'}>
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Select
                            value={request.status}
                            onValueChange={(v) => updateRequestStatus(request.id, v)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="called">Called</SelectItem>
                              <SelectItem value="no_answer">No Answer</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                              <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default CallbackWidgetPage;
