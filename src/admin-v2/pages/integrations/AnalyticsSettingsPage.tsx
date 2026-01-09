/**
 * Analytics Settings Page
 * Configure Meta Pixel, Google Analytics, and Google Tag Manager
 */
import { useState, useEffect } from 'react';
import { Save, RefreshCw, AlertCircle, Check, ExternalLink, Info } from 'lucide-react';
import { useAdmin } from '@/admin-v2/context/AdminStore';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AnalyticsSettings {
  id?: string;
  site_id: string;
  meta_pixel_id: string;
  google_analytics_id: string;
  google_tag_manager_id: string;
  is_enabled: boolean;
}

const defaultSettings: AnalyticsSettings = {
  site_id: '',
  meta_pixel_id: '',
  google_analytics_id: '',
  google_tag_manager_id: '',
  is_enabled: true,
};

export function AnalyticsSettingsPage() {
  const { currentSite: selectedSite } = useAdmin();
  const [settings, setSettings] = useState<AnalyticsSettings>({
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
        .from('analytics_settings')
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
        .from('analytics_settings')
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

  const updateField = (field: keyof AnalyticsSettings, value: any) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Analytics & Tracking
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Configure analytics and tracking pixels for {selectedSite}
        </p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="w-4 h-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {saveSuccess && (
        <Alert className="mb-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <Check className="w-4 h-4 text-green-600" />
          <AlertDescription className="text-green-700 dark:text-green-400">
            Settings saved successfully! Changes will take effect on the next page load.
          </AlertDescription>
        </Alert>
      )}

      {/* Master Switch */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base font-medium">Enable Analytics</Label>
              <p className="text-sm text-slate-500 mt-1">
                Master switch to enable or disable all tracking scripts
              </p>
            </div>
            <Switch
              checked={settings.is_enabled}
              onCheckedChange={(checked) => updateField('is_enabled', checked)}
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {/* Meta Pixel */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
                  </svg>
                  Meta Pixel (Facebook)
                </CardTitle>
                <CardDescription>
                  Track conversions and build audiences for Facebook & Instagram ads
                </CardDescription>
              </div>
              <a
                href="https://business.facebook.com/events_manager"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline flex items-center gap-1"
              >
                Get Pixel ID <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="meta-pixel">Pixel ID</Label>
              <Input
                id="meta-pixel"
                value={settings.meta_pixel_id}
                onChange={(e) => updateField('meta_pixel_id', e.target.value)}
                placeholder="e.g., 123456789012345"
                className="mt-1 font-mono"
              />
              <p className="text-xs text-slate-500 mt-1">
                Find your Pixel ID in Meta Events Manager → Data Sources
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Google Analytics */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.84 2.02a1.91 1.91 0 0 0-2.7 0l-8.62 8.62a5.52 5.52 0 1 0 2.7 2.7l8.62-8.62a1.91 1.91 0 0 0 0-2.7ZM7 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                  </svg>
                  Google Analytics 4
                </CardTitle>
                <CardDescription>
                  Track website traffic, user behavior, and conversions
                </CardDescription>
              </div>
              <a
                href="https://analytics.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline flex items-center gap-1"
              >
                Get Measurement ID <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="ga-id">Measurement ID</Label>
              <Input
                id="ga-id"
                value={settings.google_analytics_id}
                onChange={(e) => updateField('google_analytics_id', e.target.value)}
                placeholder="e.g., G-XXXXXXXXXX"
                className="mt-1 font-mono"
              />
              <p className="text-xs text-slate-500 mt-1">
                Find your Measurement ID in GA4 → Admin → Data Streams → Web
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Google Tag Manager */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m12 2-8 8 4 4V9h8v5l4-4-8-8Z"/>
                    <path d="m12 22 8-8-4-4v5H8v-5l-4 4 8 8Z"/>
                  </svg>
                  Google Tag Manager
                </CardTitle>
                <CardDescription>
                  Manage all your tracking tags from one place
                </CardDescription>
              </div>
              <a
                href="https://tagmanager.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline flex items-center gap-1"
              >
                Get Container ID <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="gtm-id">Container ID</Label>
              <Input
                id="gtm-id"
                value={settings.google_tag_manager_id}
                onChange={(e) => updateField('google_tag_manager_id', e.target.value)}
                placeholder="e.g., GTM-XXXXXXX"
                className="mt-1 font-mono"
              />
              <p className="text-xs text-slate-500 mt-1">
                Find your Container ID in GTM → Admin → Container Settings
              </p>
            </div>

            <Alert className="mt-4">
              <Info className="w-4 h-4" />
              <AlertDescription>
                If you're using GTM, you can manage GA4 and Meta Pixel through GTM tags instead of entering them here directly.
              </AlertDescription>
            </Alert>
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
    </div>
  );
}

export default AnalyticsSettingsPage;
