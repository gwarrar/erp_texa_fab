/**
 * Chat Settings Page
 * Configure chat widgets (WhatsApp, Tawk.to, Crisp, Intercom)
 */
import { useState, useEffect } from 'react';
import { Save, RefreshCw, AlertCircle, Check, MessageCircle, ExternalLink, TestTube, Eye, EyeOff } from 'lucide-react';
import { useAdmin } from '@/admin-v2/context/AdminStore';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ChatSettings {
  id?: string;
  site_id: string;
  chat_type: string;
  is_enabled: boolean;
  position: string;
  show_on_mobile: boolean;
  delay_seconds: number;
  tawkto_property_id: string;
  tawkto_widget_id: string;
  whatsapp_number: string;
  whatsapp_default_message: string;
  whatsapp_default_message_ar: string;
  crisp_website_id: string;
  intercom_app_id: string;
  custom_script: string;
  button_color: string;
  button_text_color: string;
  greeting_message: string;
  greeting_message_ar: string;
  office_hours_enabled: boolean;
  office_hours_start: string;
  office_hours_end: string;
  office_hours_timezone: string;
  offline_message: string;
  offline_message_ar: string;
}

const defaultSettings: ChatSettings = {
  site_id: '',
  chat_type: 'none',
  is_enabled: false,
  position: 'bottom-right',
  show_on_mobile: true,
  delay_seconds: 3,
  tawkto_property_id: '',
  tawkto_widget_id: '',
  whatsapp_number: '',
  whatsapp_default_message: 'Hello! I have a question about your services.',
  whatsapp_default_message_ar: 'مرحباً! لدي سؤال حول خدماتكم.',
  crisp_website_id: '',
  intercom_app_id: '',
  custom_script: '',
  button_color: '#25D366',
  button_text_color: '#ffffff',
  greeting_message: 'Hi! How can we help you today?',
  greeting_message_ar: 'مرحباً! كيف يمكننا مساعدتك اليوم؟',
  office_hours_enabled: false,
  office_hours_start: '09:00',
  office_hours_end: '18:00',
  office_hours_timezone: 'UTC',
  offline_message: 'We are currently offline. Please leave a message.',
  offline_message_ar: 'نحن غير متصلين حالياً. يرجى ترك رسالة.',
};

const chatTypeOptions = [
  { value: 'none', label: 'None', icon: '🚫', description: 'No chat widget' },
  { value: 'whatsapp', label: 'WhatsApp', icon: '📱', description: 'Popular messaging app' },
  { value: 'tawkto', label: 'Tawk.to', icon: '💬', description: 'Free live chat' },
  { value: 'crisp', label: 'Crisp', icon: '🗨️', description: 'Modern chat platform' },
  { value: 'intercom', label: 'Intercom', icon: '💼', description: 'Customer messaging' },
  { value: 'custom', label: 'Custom Script', icon: '⚙️', description: 'Your own chat code' },
];

export function ChatSettingsPage() {
  const { currentSite: selectedSite } = useAdmin();
  const [settings, setSettings] = useState<ChatSettings>({
    ...defaultSettings,
    site_id: selectedSite || 'texafab',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!selectedSite) return;
    loadSettings();
  }, [selectedSite]);

  const loadSettings = async () => {
    setIsLoading(true);
    setError('');

    try {
      const { data, error } = await supabase
        .from('chat_settings')
        .select('*')
        .eq('site_id', selectedSite)
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

  const handleSave = async () => {
    setIsSaving(true);
    setError('');
    setSaveSuccess(false);

    try {
      const { error } = await supabase
        .from('chat_settings')
        .upsert({
          ...settings,
          site_id: selectedSite,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'site_id',
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

  const updateField = (field: keyof ChatSettings, value: any) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const selectedChatType = chatTypeOptions.find(opt => opt.value === settings.chat_type);

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          Chat Widget Settings
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Configure chat widgets for customer support - {selectedSite}
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
            Chat settings saved successfully!
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6">
        {/* Enable/Disable */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {settings.is_enabled ? (
                  <Eye className="w-5 h-5 text-green-500" />
                ) : (
                  <EyeOff className="w-5 h-5 text-slate-400" />
                )}
                <div>
                  <Label className="text-base font-medium">
                    {settings.is_enabled ? 'Chat Enabled' : 'Chat Disabled'}
                  </Label>
                  <p className="text-sm text-slate-500 mt-0.5">
                    {settings.is_enabled 
                      ? 'Chat widget is visible on the website' 
                      : 'Chat widget is hidden from visitors'}
                  </p>
                </div>
              </div>
              <Switch
                checked={settings.is_enabled}
                onCheckedChange={(checked) => updateField('is_enabled', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Chat Type Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Chat Provider</CardTitle>
            <CardDescription>
              Choose your preferred chat service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {chatTypeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateField('chat_type', option.value)}
                  className={`p-4 border-2 rounded-xl text-left transition-all ${
                    settings.chat_type === option.value
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                      : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="text-2xl mb-2">{option.icon}</div>
                  <div className="font-medium text-slate-900 dark:text-white">{option.label}</div>
                  <div className="text-xs text-slate-500">{option.description}</div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Provider-specific Settings */}
        {settings.chat_type === 'whatsapp' && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="whatsapp-number">WhatsApp Number</Label>
                <Input
                  id="whatsapp-number"
                  value={settings.whatsapp_number}
                  onChange={(e) => updateField('whatsapp_number', e.target.value)}
                  placeholder="+971501234567"
                  className="mt-1 font-mono"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Include country code without spaces or dashes
                </p>
              </div>
              <div>
                <Label htmlFor="wa-msg-en">Default Message (English)</Label>
                <Textarea
                  id="wa-msg-en"
                  value={settings.whatsapp_default_message}
                  onChange={(e) => updateField('whatsapp_default_message', e.target.value)}
                  placeholder="Hello! I have a question..."
                  className="mt-1"
                  rows={2}
                />
              </div>
              <div>
                <Label htmlFor="wa-msg-ar">Default Message (Arabic)</Label>
                <Textarea
                  id="wa-msg-ar"
                  value={settings.whatsapp_default_message_ar}
                  onChange={(e) => updateField('whatsapp_default_message_ar', e.target.value)}
                  placeholder="مرحباً! لدي سؤال..."
                  className="mt-1"
                  rows={2}
                  dir="rtl"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {settings.chat_type === 'tawkto' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Tawk.to Settings</CardTitle>
                <a
                  href="https://dashboard.tawk.to/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                >
                  Get your IDs <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="tawkto-property">Property ID</Label>
                <Input
                  id="tawkto-property"
                  value={settings.tawkto_property_id}
                  onChange={(e) => updateField('tawkto_property_id', e.target.value)}
                  placeholder="e.g., 1234567890abcdef"
                  className="mt-1 font-mono"
                />
              </div>
              <div>
                <Label htmlFor="tawkto-widget">Widget ID</Label>
                <Input
                  id="tawkto-widget"
                  value={settings.tawkto_widget_id}
                  onChange={(e) => updateField('tawkto_widget_id', e.target.value)}
                  placeholder="e.g., default"
                  className="mt-1 font-mono"
                />
              </div>
              <Alert>
                <AlertDescription className="text-sm">
                  Find these IDs in your Tawk.to Dashboard → Administration → Chat Widget
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        )}

        {settings.chat_type === 'crisp' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Crisp Settings</CardTitle>
                <a
                  href="https://app.crisp.chat/settings/website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                >
                  Get Website ID <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="crisp-id">Website ID</Label>
                <Input
                  id="crisp-id"
                  value={settings.crisp_website_id}
                  onChange={(e) => updateField('crisp_website_id', e.target.value)}
                  placeholder="e.g., abc12345-def6-7890-ghij-klmnopqrstuv"
                  className="mt-1 font-mono"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {settings.chat_type === 'intercom' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Intercom Settings</CardTitle>
                <a
                  href="https://app.intercom.com/a/apps/_/settings/messenger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                >
                  Get App ID <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="intercom-id">App ID</Label>
                <Input
                  id="intercom-id"
                  value={settings.intercom_app_id}
                  onChange={(e) => updateField('intercom_app_id', e.target.value)}
                  placeholder="e.g., abc12345"
                  className="mt-1 font-mono"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {settings.chat_type === 'custom' && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Custom Script</CardTitle>
              <CardDescription>
                Paste your custom chat widget script
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="custom-script">JavaScript Code</Label>
                <Textarea
                  id="custom-script"
                  value={settings.custom_script}
                  onChange={(e) => updateField('custom_script', e.target.value)}
                  placeholder="// Your custom chat script here..."
                  className="mt-1 font-mono text-sm"
                  rows={8}
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Appearance Settings */}
        {settings.chat_type !== 'none' && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Appearance & Behavior</CardTitle>
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
                  <Label>Position</Label>
                  <Select
                    value={settings.position}
                    onValueChange={(v) => updateField('position', v)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bottom-right">Bottom Right</SelectItem>
                      <SelectItem value="bottom-left">Bottom Left</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Delay (seconds)</Label>
                  <Input
                    type="number"
                    min="0"
                    max="60"
                    value={settings.delay_seconds}
                    onChange={(e) => updateField('delay_seconds', parseInt(e.target.value) || 0)}
                    className="mt-1"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Wait before showing the widget
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-6">
                  <Switch
                    checked={settings.show_on_mobile}
                    onCheckedChange={(checked) => updateField('show_on_mobile', checked)}
                  />
                  <Label>Show on Mobile</Label>
                </div>
              </div>

              <div>
                <Label htmlFor="greeting-en">Greeting Message (English)</Label>
                <Textarea
                  id="greeting-en"
                  value={settings.greeting_message}
                  onChange={(e) => updateField('greeting_message', e.target.value)}
                  placeholder="Hi! How can we help you?"
                  className="mt-1"
                  rows={2}
                />
              </div>
              <div>
                <Label htmlFor="greeting-ar">Greeting Message (Arabic)</Label>
                <Textarea
                  id="greeting-ar"
                  value={settings.greeting_message_ar}
                  onChange={(e) => updateField('greeting_message_ar', e.target.value)}
                  placeholder="مرحباً! كيف يمكننا مساعدتك؟"
                  className="mt-1"
                  rows={2}
                  dir="rtl"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Office Hours */}
        {settings.chat_type !== 'none' && settings.chat_type !== 'whatsapp' && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Office Hours</CardTitle>
              <CardDescription>
                Set when your team is available
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Switch
                  checked={settings.office_hours_enabled}
                  onCheckedChange={(checked) => updateField('office_hours_enabled', checked)}
                />
                <Label>Enable Office Hours</Label>
              </div>

              {settings.office_hours_enabled && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Start Time</Label>
                      <Input
                        type="time"
                        value={settings.office_hours_start}
                        onChange={(e) => updateField('office_hours_start', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>End Time</Label>
                      <Input
                        type="time"
                        value={settings.office_hours_end}
                        onChange={(e) => updateField('office_hours_end', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="offline-en">Offline Message (English)</Label>
                    <Textarea
                      id="offline-en"
                      value={settings.offline_message}
                      onChange={(e) => updateField('offline_message', e.target.value)}
                      placeholder="We're offline. Leave a message..."
                      className="mt-1"
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label htmlFor="offline-ar">Offline Message (Arabic)</Label>
                    <Textarea
                      id="offline-ar"
                      value={settings.offline_message_ar}
                      onChange={(e) => updateField('offline_message_ar', e.target.value)}
                      placeholder="نحن غير متصلين. اترك رسالة..."
                      className="mt-1"
                      rows={2}
                      dir="rtl"
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        )}
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
    </div>
  );
}

export default ChatSettingsPage;
