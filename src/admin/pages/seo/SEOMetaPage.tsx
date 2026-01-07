import { useState } from 'react';
import {
  Save,
  RefreshCw,
  Search,
  Globe,
  Image,
  Eye,
  Code,
  Copy,
  Check,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAdmin } from '../../context/AdminContext';
import { Badge } from '@/components/ui/badge';

const languages = [
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];

export function SEOMetaPage() {
  const { seoSettings, setSeoSettings, saveChanges, isSaving } = useAdmin();
  const [hasChanges, setHasChanges] = useState(false);
  const [activeTab, setActiveTab] = useState('en');
  const [copied, setCopied] = useState(false);

  // Initialize with default values if null
  const currentSettings = seoSettings || {
    metaTitle: { ar: 'تكسافاب - نظام ERP للأقمشة', en: 'TexaFab - Textile ERP System' },
    metaDescription: {
      ar: 'نظام ERP متكامل لإدارة تجارة الأقمشة بالجملة والتجزئة',
      en: 'Complete ERP system for wholesale and retail fabric trade management',
    },
    ogImage: '',
    keywords: ['ERP', 'textile', 'fabric', 'warehouse', 'management'],
    canonicalUrl: 'https://texafab.com',
  };

  const handleChange = (field: string, value: any) => {
    setSeoSettings({
      ...currentSettings,
      [field]: value,
    });
    setHasChanges(true);
  };

  const handleTitleChange = (lang: string, value: string) => {
    setSeoSettings({
      ...currentSettings,
      metaTitle: { ...currentSettings.metaTitle, [lang]: value },
    });
    setHasChanges(true);
  };

  const handleDescriptionChange = (lang: string, value: string) => {
    setSeoSettings({
      ...currentSettings,
      metaDescription: { ...currentSettings.metaDescription, [lang]: value },
    });
    setHasChanges(true);
  };

  const handleSave = async () => {
    await saveChanges();
    setHasChanges(false);
  };

  const copyMetaTags = () => {
    const metaTags = `<title>${currentSettings.metaTitle[activeTab]}</title>
<meta name="description" content="${currentSettings.metaDescription[activeTab]}" />
<meta property="og:title" content="${currentSettings.metaTitle[activeTab]}" />
<meta property="og:description" content="${currentSettings.metaDescription[activeTab]}" />
<meta property="og:image" content="${currentSettings.ogImage}" />
<link rel="canonical" href="${currentSettings.canonicalUrl}" />`;
    
    navigator.clipboard.writeText(metaTags);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const titleLength = (currentSettings.metaTitle[activeTab] || '').length;
  const descLength = (currentSettings.metaDescription[activeTab] || '').length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">SEO Meta Tags</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Configure meta tags for search engine optimization
          </p>
        </div>
        <div className="flex items-center gap-3">
          {hasChanges && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
              Unsaved Changes
            </Badge>
          )}
          <Button
            onClick={handleSave}
            disabled={isSaving || !hasChanges}
            className="bg-teal-600 hover:bg-teal-700"
          >
            {isSaving ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            Save Changes
          </Button>
        </div>
      </div>

      {/* Language Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-gray-100 dark:bg-gray-800">
          {languages.map((lang) => (
            <TabsTrigger key={lang.code} value={lang.code} className="gap-2">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {languages.map((lang) => (
          <TabsContent key={lang.code} value={lang.code} className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Meta Tags Editor */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-blue-500" />
                      Meta Title
                    </CardTitle>
                    <CardDescription>
                      The title shown in search results and browser tabs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Input
                        value={currentSettings.metaTitle[lang.code] || ''}
                        onChange={(e) => handleTitleChange(lang.code, e.target.value)}
                        placeholder="Enter meta title..."
                        dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                        maxLength={60}
                      />
                      <div className="flex justify-between text-xs">
                        <span className={titleLength > 60 ? 'text-red-500' : 'text-gray-500'}>
                          {titleLength}/60 characters
                        </span>
                        {titleLength > 50 && titleLength <= 60 && (
                          <span className="text-green-500">✓ Optimal length</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-green-500" />
                      Meta Description
                    </CardTitle>
                    <CardDescription>
                      The description shown in search results
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Textarea
                        value={currentSettings.metaDescription[lang.code] || ''}
                        onChange={(e) => handleDescriptionChange(lang.code, e.target.value)}
                        placeholder="Enter meta description..."
                        dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                        rows={3}
                        maxLength={160}
                      />
                      <div className="flex justify-between text-xs">
                        <span className={descLength > 160 ? 'text-red-500' : 'text-gray-500'}>
                          {descLength}/160 characters
                        </span>
                        {descLength > 120 && descLength <= 160 && (
                          <span className="text-green-500">✓ Optimal length</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Image className="h-5 w-5 text-purple-500" />
                      Open Graph Image
                    </CardTitle>
                    <CardDescription>
                      Image shown when shared on social media
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Input
                        value={currentSettings.ogImage}
                        onChange={(e) => handleChange('ogImage', e.target.value)}
                        placeholder="https://example.com/og-image.jpg"
                      />
                      {currentSettings.ogImage && (
                        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                          <img
                            src={currentSettings.ogImage}
                            alt="OG Preview"
                            className="w-full h-40 object-cover"
                          />
                        </div>
                      )}
                      <p className="text-xs text-gray-500">Recommended: 1200x630 pixels</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Preview */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5 text-teal-500" />
                      Google Search Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div
                      className="p-4 bg-white rounded-lg border border-gray-200"
                      dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded bg-teal-500 flex items-center justify-center text-white text-xs font-bold">
                          T
                        </div>
                        <span className="text-sm text-gray-600">{currentSettings.canonicalUrl}</span>
                      </div>
                      <h3 className="text-xl text-blue-800 hover:underline cursor-pointer mb-1">
                        {currentSettings.metaTitle[lang.code] || 'Meta Title'}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {currentSettings.metaDescription[lang.code] || 'Meta description will appear here...'}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-orange-500" />
                      Generated HTML
                    </CardTitle>
                    <CardDescription>Copy these tags to your HTML head</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg text-xs overflow-x-auto">
{`<title>${currentSettings.metaTitle[lang.code] || ''}</title>
<meta name="description" content="${currentSettings.metaDescription[lang.code] || ''}" />
<meta property="og:title" content="${currentSettings.metaTitle[lang.code] || ''}" />
<meta property="og:description" content="${currentSettings.metaDescription[lang.code] || ''}" />
<meta property="og:image" content="${currentSettings.ogImage}" />
<link rel="canonical" href="${currentSettings.canonicalUrl}" />`}
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyMetaTags}
                        className="absolute top-2 right-2 text-white hover:bg-gray-700"
                      >
                        {copied ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Keywords</CardTitle>
                    <CardDescription>Keywords for search optimization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {currentSettings.keywords.map((keyword, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="px-3 py-1 cursor-pointer hover:bg-red-100 hover:text-red-700"
                          onClick={() => {
                            handleChange(
                              'keywords',
                              currentSettings.keywords.filter((_, i) => i !== index)
                            );
                          }}
                        >
                          {keyword} ×
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Input
                        placeholder="Add keyword..."
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && e.currentTarget.value) {
                            handleChange('keywords', [
                              ...currentSettings.keywords,
                              e.currentTarget.value,
                            ]);
                            e.currentTarget.value = '';
                          }
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Canonical URL */}
      <Card>
        <CardHeader>
          <CardTitle>Canonical URL</CardTitle>
          <CardDescription>The primary URL for your website</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            value={currentSettings.canonicalUrl}
            onChange={(e) => handleChange('canonicalUrl', e.target.value)}
            placeholder="https://texafab.com"
          />
        </CardContent>
      </Card>
    </div>
  );
}
