/**
 * Announcement Bar Settings Page
 * Manage announcement bar appearance, text, and animation
 */
import { useState, useEffect } from 'react';
import { Save, RefreshCw, Eye, EyeOff, AlertCircle, Check } from 'lucide-react';
import { useAdmin } from '@/admin-v2/context/AdminStore';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AnnouncementSettings {
  id?: string;
  site_id: string;
  language: string;
  text: string;
  background_color: string;
  text_color: string;
  font_family: string;
  font_size: string;
  animation_speed: number;
  animation_type: 'scroll' | 'static' | 'blink';
  is_enabled: boolean;
  link: string;
}

const defaultSettings: AnnouncementSettings = {
  site_id: '',
  language: 'en',
  text: '',
  background_color: '#10b981',
  text_color: '#ffffff',
  font_family: 'inherit',
  font_size: '14px',
  animation_speed: 30,
  animation_type: 'scroll',
  is_enabled: true,
  link: '',
};

const fontOptions = [
  { value: 'inherit', label: 'Default' },
  { value: 'Inter, sans-serif', label: 'Inter' },
  { value: 'Roboto, sans-serif', label: 'Roboto' },
  { value: 'Cairo, sans-serif', label: 'Cairo (Arabic)' },
  { value: 'Tajawal, sans-serif', label: 'Tajawal (Arabic)' },
  { value: 'Georgia, serif', label: 'Georgia' },
  { value: 'monospace', label: 'Monospace' },
];

const fontSizeOptions = [
  { value: '12px', label: '12px - Small' },
  { value: '14px', label: '14px - Default' },
  { value: '16px', label: '16px - Medium' },
  { value: '18px', label: '18px - Large' },
  { value: '20px', label: '20px - X-Large' },
];

export function AnnouncementBarPage() {
  const { currentSite: selectedSite } = useAdmin();
  const [activeLanguage, setActiveLanguage] = useState<'en' | 'ar'>('en');
  const [settings, setSettings] = useState<AnnouncementSettings>({
    ...defaultSettings,
    site_id: selectedSite || 'texafab',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [error, setError] = useState('');

  // Load settings
  useEffect(() => {
    if (!selectedSite) return;
    loadSettings();
  }, [selectedSite, activeLanguage]);

  const loadSettings = async () => {
    setIsLoading(true);
    setError('');

    try {
      const { data, error } = await supabase
        .from('announcement_settings')
        .select('*')
        .eq('site_id', selectedSite)
        .eq('language', activeLanguage)
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
          language: activeLanguage,
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
        .from('announcement_settings')
        .upsert({
          ...settings,
          site_id: selectedSite,
          language: activeLanguage,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'site_id,language',
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

  const updateField = (field: keyof AnnouncementSettings, value: any) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Announcement Bar Settings
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Configure the announcement bar appearance and behavior for {selectedSite}
        </p>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2 text-red-700 dark:text-red-400">
          <AlertCircle className="w-5 h-5" />
          {error}
        </div>
      )}

      {saveSuccess && (
        <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-2 text-green-700 dark:text-green-400">
          <Check className="w-5 h-5" />
          Settings saved successfully!
        </div>
      )}

      {/* Language Tabs */}
      <Tabs value={activeLanguage} onValueChange={(v) => setActiveLanguage(v as 'en' | 'ar')}>
        <TabsList className="mb-4">
          <TabsTrigger value="en">English</TabsTrigger>
          <TabsTrigger value="ar">العربية</TabsTrigger>
        </TabsList>

        <TabsContent value={activeLanguage}>
          {/* Preview */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  backgroundColor: settings.background_color,
                  color: settings.text_color,
                  fontFamily: settings.font_family,
                  fontSize: settings.font_size,
                }}
              >
                <div className="py-2 px-4 text-center">
                  {settings.animation_type === 'scroll' ? (
                    <div className="overflow-hidden">
                      <div 
                        className="whitespace-nowrap animate-marquee"
                        style={{
                          animationDuration: `${settings.animation_speed}s`,
                        }}
                      >
                        {settings.text || 'Your announcement text will appear here...'}
                      </div>
                    </div>
                  ) : settings.animation_type === 'blink' ? (
                    <div className="animate-pulse">
                      {settings.text || 'Your announcement text will appear here...'}
                    </div>
                  ) : (
                    <div>
                      {settings.text || 'Your announcement text will appear here...'}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            {/* Enable/Disable */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {settings.is_enabled ? (
                      <Eye className="w-5 h-5 text-green-500" />
                    ) : (
                      <EyeOff className="w-5 h-5 text-slate-400" />
                    )}
                    <div>
                      <Label className="text-base">
                        {settings.is_enabled ? 'Enabled' : 'Disabled'}
                      </Label>
                      <p className="text-sm text-slate-500">
                        {settings.is_enabled 
                          ? 'Announcement bar is visible on the website' 
                          : 'Announcement bar is hidden'}
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

            {/* Content */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Content</CardTitle>
                <CardDescription>
                  Set the announcement text and optional link
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="text">
                    Announcement Text ({activeLanguage === 'ar' ? 'Arabic' : 'English'})
                  </Label>
                  <Input
                    id="text"
                    value={settings.text}
                    onChange={(e) => updateField('text', e.target.value)}
                    placeholder={activeLanguage === 'ar' ? 'أدخل نص الإعلان...' : 'Enter announcement text...'}
                    dir={activeLanguage === 'ar' ? 'rtl' : 'ltr'}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="link">Link URL (optional)</Label>
                  <Input
                    id="link"
                    value={settings.link}
                    onChange={(e) => updateField('link', e.target.value)}
                    placeholder="https://..."
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Appearance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Appearance</CardTitle>
                <CardDescription>
                  Customize colors, font, and size
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="bg-color">Background Color</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <input
                        type="color"
                        id="bg-color"
                        value={settings.background_color}
                        onChange={(e) => updateField('background_color', e.target.value)}
                        className="w-10 h-10 rounded border cursor-pointer"
                      />
                      <Input
                        value={settings.background_color}
                        onChange={(e) => updateField('background_color', e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="text-color">Text Color</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <input
                        type="color"
                        id="text-color"
                        value={settings.text_color}
                        onChange={(e) => updateField('text_color', e.target.value)}
                        className="w-10 h-10 rounded border cursor-pointer"
                      />
                      <Input
                        value={settings.text_color}
                        onChange={(e) => updateField('text_color', e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Font Family</Label>
                    <Select
                      value={settings.font_family}
                      onValueChange={(v) => updateField('font_family', v)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {fontOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Font Size</Label>
                    <Select
                      value={settings.font_size}
                      onValueChange={(v) => updateField('font_size', v)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {fontSizeOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Animation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Animation</CardTitle>
                <CardDescription>
                  Configure animation type and speed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Animation Type</Label>
                  <Select
                    value={settings.animation_type}
                    onValueChange={(v) => updateField('animation_type', v)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="scroll">Scrolling (Marquee)</SelectItem>
                      <SelectItem value="static">Static (No Animation)</SelectItem>
                      <SelectItem value="blink">Blinking (Pulse)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {settings.animation_type === 'scroll' && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label>Animation Speed</Label>
                      <span className="text-sm text-slate-500">{settings.animation_speed}s</span>
                    </div>
                    <Slider
                      value={[settings.animation_speed]}
                      onValueChange={([v]) => updateField('animation_speed', v)}
                      min={5}
                      max={60}
                      step={5}
                    />
                    <p className="text-xs text-slate-500 mt-1">
                      Lower = faster, Higher = slower
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

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

export default AnnouncementBarPage;
