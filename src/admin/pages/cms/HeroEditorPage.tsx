import React, { useState } from 'react';
import { Save, Eye, Upload, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAdmin } from '@/admin/context/AdminContext';
import { Badge } from '@/components/ui/badge';

const languages = [
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
];

export function HeroEditorPage() {
  const { heroContent, setHeroContent, saveChanges, isSaving } = useAdmin();
  const [activeTab, setActiveTab] = useState('ar');
  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = (field: string, value: string) => {
    if (!heroContent) return;
    
    setHeroContent({
      ...heroContent,
      [field]: {
        ...heroContent[field as keyof typeof heroContent],
        [activeTab]: value,
      },
      updatedAt: new Date().toISOString(),
    });
    setHasChanges(true);
  };

  const handleSave = async () => {
    await saveChanges();
    setHasChanges(false);
  };

  if (!heroContent) return null;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Hero Section Editor</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage the main hero section content and visuals
          </p>
        </div>
        <div className="flex items-center gap-3">
          {hasChanges && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
              Unsaved Changes
            </Badge>
          )}
          <Button variant="outline" asChild>
            <a href="/" target="_blank">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </a>
          </Button>
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
              <span className="hidden sm:inline">{lang.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {languages.map((lang) => (
          <TabsContent key={lang.code} value={lang.code} className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Content Editor */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Main Title</CardTitle>
                    <CardDescription>The primary headline displayed in the hero</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Input
                      value={(heroContent.title as Record<string, string>)[lang.code] || ''}
                      onChange={(e) => handleChange('title', e.target.value)}
                      placeholder="Enter main title..."
                      className="text-lg"
                      dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Subtitle / Brand</CardTitle>
                    <CardDescription>Secondary text or brand name</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Input
                      value={(heroContent.subtitle as Record<string, string>)[lang.code] || ''}
                      onChange={(e) => handleChange('subtitle', e.target.value)}
                      placeholder="Enter subtitle..."
                      dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Description</CardTitle>
                    <CardDescription>Supporting text under the headline</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={(heroContent.description as Record<string, string>)[lang.code] || ''}
                      onChange={(e) => handleChange('description', e.target.value)}
                      placeholder="Enter description..."
                      rows={4}
                      dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Call to Action Buttons</CardTitle>
                    <CardDescription>Primary and secondary button labels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Primary CTA</Label>
                      <Input
                        value={(heroContent.ctaPrimary as Record<string, string>)[lang.code] || ''}
                        onChange={(e) => handleChange('ctaPrimary', e.target.value)}
                        placeholder="e.g., Start Free Trial"
                        dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Secondary CTA</Label>
                      <Input
                        value={(heroContent.ctaSecondary as Record<string, string>)[lang.code] || ''}
                        onChange={(e) => handleChange('ctaSecondary', e.target.value)}
                        placeholder="e.g., Book a Demo"
                        dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Preview */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Live Preview</CardTitle>
                    <CardDescription>How it will appear on the website</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div
                      className="bg-gradient-to-br from-teal-900 via-gray-900 to-emerald-900 rounded-xl p-8 text-center min-h-[400px] flex flex-col items-center justify-center"
                      dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                    >
                      <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                        <span className="text-teal-300 text-sm font-medium">
                          {(heroContent.subtitle as Record<string, string>)[lang.code] || 'Brand'}
                        </span>
                      </div>
                      <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                        {(heroContent.title as Record<string, string>)[lang.code] || 'Main Title'}
                      </h1>
                      <p className="text-gray-300 text-lg max-w-md mb-8">
                        {(heroContent.description as Record<string, string>)[lang.code] || 'Description text goes here'}
                      </p>
                      <div className="flex gap-4 flex-wrap justify-center">
                        <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-semibold transition-colors">
                          {(heroContent.ctaPrimary as Record<string, string>)[lang.code] || 'Primary CTA'}
                        </button>
                        <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold border border-white/20 transition-colors">
                          {(heroContent.ctaSecondary as Record<string, string>)[lang.code] || 'Secondary CTA'}
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Background Image</CardTitle>
                    <CardDescription>Upload or select hero background</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center">
                      <Upload className="h-10 w-10 mx-auto text-gray-400 mb-4" />
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        Drag and drop an image, or click to browse
                      </p>
                      <p className="text-xs text-gray-400">
                        Recommended: 1920x1080px, JPG or PNG
                      </p>
                      <Button variant="outline" className="mt-4">
                        Choose File
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
