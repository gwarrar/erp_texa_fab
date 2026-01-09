/**
 * SEO Settings Page
 * Configure meta tags, Open Graph, and structured data per page
 */
import { useState, useEffect } from 'react';
import { Save, RefreshCw, AlertCircle, Check, Plus, Trash2, Eye, Globe, Search } from 'lucide-react';
import { useAdmin } from '@/admin-v2/context/AdminStore';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface SEOSettings {
  id?: string;
  site_id: string;
  language: string;
  page_path: string;
  meta_title: string;
  meta_description: string;
  og_title: string;
  og_description: string;
  og_image: string;
  twitter_card: string;
  canonical_url: string;
  robots: string;
  structured_data: any;
}

const defaultSettings: SEOSettings = {
  site_id: '',
  language: 'en',
  page_path: '/',
  meta_title: '',
  meta_description: '',
  og_title: '',
  og_description: '',
  og_image: '',
  twitter_card: 'summary_large_image',
  canonical_url: '',
  robots: 'index, follow',
  structured_data: null,
};

const commonPages = [
  { path: '/', label: 'Home' },
  { path: '/features', label: 'Features' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
  { path: '/about', label: 'About' },
  { path: '/solutions', label: 'Solutions' },
  { path: '/faq', label: 'FAQ' },
];

const robotsOptions = [
  { value: 'index, follow', label: 'Index, Follow (Default)' },
  { value: 'index, nofollow', label: 'Index, No Follow' },
  { value: 'noindex, follow', label: 'No Index, Follow' },
  { value: 'noindex, nofollow', label: 'No Index, No Follow' },
];

const twitterCardOptions = [
  { value: 'summary', label: 'Summary (Small Image)' },
  { value: 'summary_large_image', label: 'Summary Large Image' },
  { value: 'app', label: 'App Card' },
  { value: 'player', label: 'Player Card' },
];

export function SEOSettingsPage() {
  const { currentSite: selectedSite } = useAdmin();
  const [activeLanguage, setActiveLanguage] = useState<'en' | 'ar'>('en');
  const [selectedPage, setSelectedPage] = useState('/');
  const [allSettings, setAllSettings] = useState<SEOSettings[]>([]);
  const [settings, setSettings] = useState<SEOSettings>({
    ...defaultSettings,
    site_id: selectedSite || 'texafab',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!selectedSite) return;
    loadAllSettings();
  }, [selectedSite]);

  useEffect(() => {
    loadPageSettings();
  }, [selectedPage, activeLanguage, allSettings]);

  const loadAllSettings = async () => {
    setIsLoading(true);
    setError('');

    try {
      const { data, error } = await supabase
        .from('seo_settings')
        .select('*')
        .eq('site_id', selectedSite);

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      setAllSettings(data || []);
    } catch (err: any) {
      console.error('Error loading settings:', err);
      setError(err.message || 'Failed to load settings');
    } finally {
      setIsLoading(false);
    }
  };

  const loadPageSettings = () => {
    const pageSettings = allSettings.find(
      s => s.page_path === selectedPage && s.language === activeLanguage
    );

    if (pageSettings) {
      setSettings(pageSettings);
    } else {
      setSettings({
        ...defaultSettings,
        site_id: selectedSite || 'texafab',
        language: activeLanguage,
        page_path: selectedPage,
      });
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setError('');
    setSaveSuccess(false);

    try {
      const { error } = await supabase
        .from('seo_settings')
        .upsert({
          ...settings,
          site_id: selectedSite,
          language: activeLanguage,
          page_path: selectedPage,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'site_id,language,page_path',
        });

      if (error) throw error;

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
      await loadAllSettings();
    } catch (err: any) {
      console.error('Error saving settings:', err);
      setError(err.message || 'Failed to save settings');
    } finally {
      setIsSaving(false);
    }
  };

  const updateField = (field: keyof SEOSettings, value: any) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  // Generate Google Search preview
  const getSearchPreview = () => {
    const title = settings.meta_title || 'Page Title';
    const description = settings.meta_description || 'Page description will appear here...';
    const url = settings.canonical_url || `https://example.com${selectedPage}`;
    
    return { title, description, url };
  };

  const preview = getSearchPreview();

  return (
    <div className="p-6 max-w-5xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          SEO Settings
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Optimize your pages for search engines - {selectedSite}
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
            SEO settings saved successfully!
          </AlertDescription>
        </Alert>
      )}

      {/* Page Selector */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Label>Select Page</Label>
              <Select value={selectedPage} onValueChange={setSelectedPage}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {commonPages.map((page) => (
                    <SelectItem key={page.path} value={page.path}>
                      {page.label} ({page.path})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Language</Label>
              <Tabs value={activeLanguage} onValueChange={(v) => setActiveLanguage(v as 'en' | 'ar')} className="mt-1">
                <TabsList>
                  <TabsTrigger value="en">EN</TabsTrigger>
                  <TabsTrigger value="ar">AR</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Google Search Preview */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Search className="w-5 h-5" />
            Google Search Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg p-4 bg-white dark:bg-slate-900">
            <div className="text-sm text-green-700 dark:text-green-400 truncate">
              {preview.url}
            </div>
            <div className="text-xl text-blue-700 dark:text-blue-400 hover:underline cursor-pointer truncate mt-1">
              {preview.title}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
              {preview.description}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {/* Basic Meta Tags */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Basic Meta Tags</CardTitle>
            <CardDescription>
              Title and description that appear in search results
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="meta-title">Meta Title</Label>
                <span className={`text-xs ${(settings.meta_title?.length || 0) > 60 ? 'text-red-500' : 'text-slate-500'}`}>
                  {settings.meta_title?.length || 0}/60
                </span>
              </div>
              <Input
                id="meta-title"
                value={settings.meta_title}
                onChange={(e) => updateField('meta_title', e.target.value)}
                placeholder="Page title for search engines"
                className="mt-1"
                dir={activeLanguage === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="meta-description">Meta Description</Label>
                <span className={`text-xs ${(settings.meta_description?.length || 0) > 160 ? 'text-red-500' : 'text-slate-500'}`}>
                  {settings.meta_description?.length || 0}/160
                </span>
              </div>
              <Textarea
                id="meta-description"
                value={settings.meta_description}
                onChange={(e) => updateField('meta_description', e.target.value)}
                placeholder="Brief description of the page content"
                className="mt-1"
                rows={3}
                dir={activeLanguage === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>
          </CardContent>
        </Card>

        {/* Open Graph */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Open Graph (Social Sharing)
            </CardTitle>
            <CardDescription>
              How your page appears when shared on Facebook, LinkedIn, etc.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="og-title">OG Title</Label>
              <Input
                id="og-title"
                value={settings.og_title}
                onChange={(e) => updateField('og_title', e.target.value)}
                placeholder="Leave empty to use Meta Title"
                className="mt-1"
                dir={activeLanguage === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>
            <div>
              <Label htmlFor="og-description">OG Description</Label>
              <Textarea
                id="og-description"
                value={settings.og_description}
                onChange={(e) => updateField('og_description', e.target.value)}
                placeholder="Leave empty to use Meta Description"
                className="mt-1"
                rows={2}
                dir={activeLanguage === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>
            <div>
              <Label htmlFor="og-image">OG Image URL</Label>
              <Input
                id="og-image"
                value={settings.og_image}
                onChange={(e) => updateField('og_image', e.target.value)}
                placeholder="https://example.com/image.jpg (1200x630px recommended)"
                className="mt-1"
              />
              {settings.og_image && (
                <img
                  src={settings.og_image}
                  alt="OG Preview"
                  className="mt-2 max-h-32 rounded border"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              )}
            </div>
          </CardContent>
        </Card>

        {/* Twitter Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Twitter Card</CardTitle>
            <CardDescription>
              How your page appears when shared on Twitter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label>Card Type</Label>
              <Select
                value={settings.twitter_card}
                onValueChange={(v) => updateField('twitter_card', v)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {twitterCardOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Advanced */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Advanced Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="canonical">Canonical URL</Label>
              <Input
                id="canonical"
                value={settings.canonical_url}
                onChange={(e) => updateField('canonical_url', e.target.value)}
                placeholder="https://example.com/page (leave empty for auto)"
                className="mt-1"
              />
              <p className="text-xs text-slate-500 mt-1">
                Use this to specify the preferred URL for duplicate content
              </p>
            </div>
            <div>
              <Label>Robots Meta Tag</Label>
              <Select
                value={settings.robots}
                onValueChange={(v) => updateField('robots', v)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {robotsOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
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
              Save SEO Settings
            </>
          )}
        </Button>
        <Button variant="outline" onClick={loadAllSettings} disabled={isLoading}>
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Reload
        </Button>
      </div>
    </div>
  );
}

export default SEOSettingsPage;
