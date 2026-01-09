// ===========================================
// Admin V2 - Hero Section Editor
// ===========================================

import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useAdmin } from '../../context/AdminStore';
import { SITES, SiteId, LANGUAGES, LanguageCode } from '../../types';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Save, 
  Upload, 
  Image as ImageIcon, 
  Video, 
  Link, 
  Loader2,
  Eye,
  RefreshCw,
  Database
} from 'lucide-react';
import { toast } from 'sonner';

export function HeroEditorPage() {
  const { siteId } = useParams<{ siteId: string }>();
  const { 
    setCurrentSite, 
    currentContentLanguage,
    getSiteSupportedLanguages,
    loadSiteContent,
    saveSiteContent,
    loadContentFromSupabase,
    saveContentToSupabase,
    uploadFile,
    isLoading,
    isSaving,
    getDirection,
    t
  } = useAdmin();

  const direction = getDirection();
  const isRTL = direction === 'rtl';
  const supportedLanguages = getSiteSupportedLanguages();
  const site = SITES[siteId as SiteId];

  // Form state
  const [heroData, setHeroData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<LanguageCode>(currentContentLanguage);
  const [hasChanges, setHasChanges] = useState(false);
  const [useSupabase, setUseSupabase] = useState(true);

  // Set current site when siteId changes
  useEffect(() => {
    if (siteId && SITES[siteId as SiteId]) {
      setCurrentSite(siteId as SiteId);
    }
  }, [siteId, setCurrentSite]);

  // Load hero data when site is set
  useEffect(() => {
    if (siteId && SITES[siteId as SiteId]) {
      loadHeroData();
    }
  }, [siteId, useSupabase]);

  const loadHeroData = async () => {
    const emptyLangData = {
      title: '',
      subtitle: '',
      ctaDemo: '',
      ctaTrial: '',
      badge: '',
      tagline: '',
      image: ''
    };
    
    if (useSupabase) {
      // Load from Supabase - load all languages
      const allData: any = {};
      let hasData = false;
      
      for (const lang of supportedLanguages) {
        const data = await loadContentFromSupabase('hero', lang);
        if (data && data.title) {
          hasData = true;
          allData[lang] = {
            title: data.title || '',
            subtitle: data.subtitle || '',
            ctaDemo: data.cta_demo_text || data.cta_primary_text || '',
            ctaTrial: data.cta_trial_text || data.cta_secondary_text || '',
            badge: data.badge || '',
            tagline: data.description || '',
            image: data.image || data.background_image || '',
            ctaPrimaryLink: data.cta_demo_link || data.cta_primary_link || '',
            ctaSecondaryLink: data.cta_trial_link || data.cta_secondary_link || ''
          };
        } else {
          allData[lang] = { ...emptyLangData };
        }
      }
      
      // If no data in Supabase, fallback to JSON
      if (!hasData) {
        const jsonData = await loadSiteContent('hero');
        if (jsonData) {
          setHeroData(jsonData);
          toast.info(isRTL ? 'تم تحميل البيانات من ملفات JSON - احفظ لنقلها إلى Supabase' : 'Loaded data from JSON files - save to sync to Supabase');
          return;
        }
      }
      
      setHeroData(allData);
    } else {
      // Load from JSON files (legacy)
      const data = await loadSiteContent('hero');
      if (data) {
        setHeroData(data);
      } else {
        const initialData: any = {};
        supportedLanguages.forEach(lang => {
          initialData[lang] = { ...emptyLangData };
        });
        setHeroData(initialData);
      }
    }
  };

  // Load from JSON and sync to form
  const loadFromJSON = async () => {
    const jsonData = await loadSiteContent('hero');
    if (jsonData) {
      setHeroData(jsonData);
      setHasChanges(true);
      toast.success(isRTL ? 'تم تحميل البيانات من JSON - احفظ لنقلها إلى Supabase' : 'Loaded from JSON - save to sync to Supabase');
    } else {
      toast.error(isRTL ? 'لا توجد بيانات JSON' : 'No JSON data found');
    }
  };

  const handleChange = useCallback((field: string, value: any, lang?: LanguageCode) => {
    setHeroData((prev: any) => {
      if (!prev) return prev;
      
      const updated = { ...prev };
      
      if (lang) {
        // Data structure is language-keyed: { "en": { field: value }, "ar": { field: value } }
        if (!updated[lang]) {
          updated[lang] = {};
        }
        
        if (field.includes('.')) {
          const [parent, child] = field.split('.');
          updated[lang][parent] = {
            ...updated[lang][parent],
            [child]: value
          };
        } else {
          updated[lang][field] = value;
        }
      } else {
        // Non-multilingual field (apply to all languages or root)
        if (field.includes('.')) {
          const [parent, child] = field.split('.');
          updated[parent] = {
            ...updated[parent],
            [child]: value
          };
        } else {
          updated[field] = value;
        }
      }
      
      return updated;
    });
    setHasChanges(true);
  }, []);

  const handleSave = async () => {
    let success = false;
    
    if (useSupabase) {
      // Save to Supabase - save all languages
      for (const lang of supportedLanguages) {
        const langData = heroData[lang];
        if (langData) {
          const supabaseData = {
            title: langData.title || '',
            subtitle: langData.subtitle || '',
            description: langData.tagline || '',
            cta_primary_text: langData.ctaDemo || '',
            cta_primary_link: langData.ctaPrimaryLink || '/contact',
            cta_secondary_text: langData.ctaTrial || '',
            cta_secondary_link: langData.ctaSecondaryLink || '/pricing',
            badge: langData.badge || '',
            background_image: langData.image || ''
          };
          success = await saveContentToSupabase('hero', supabaseData, lang);
          if (!success) break;
        }
      }
    } else {
      success = await saveSiteContent('hero', heroData);
    }
    
    if (success) {
      setHasChanges(false);
      toast.success(isRTL ? 'تم الحفظ بنجاح' : 'Saved successfully');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    toast.loading(isRTL ? 'جاري رفع الصورة...' : 'Uploading image...');
    const url = await uploadFile(file, 'hero');
    toast.dismiss();
    
    if (url) {
      // Update image for all languages
      supportedLanguages.forEach(lang => {
        handleChange('image', url, lang);
      });
      toast.success(isRTL ? 'تم رفع الصورة بنجاح' : 'Image uploaded successfully');
    } else {
      toast.error(isRTL ? 'فشل رفع الصورة' : 'Failed to upload image');
    }
  };

  if (!site) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">{isRTL ? 'الموقع غير موجود' : 'Site not found'}</p>
      </div>
    );
  }

  if (isLoading || !heroData) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {isRTL ? 'تعديل البانر الرئيسي' : 'Edit Hero Section'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {isRTL ? site.nameAr : site.name}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={useSupabase ? "default" : "outline"}
            size="sm"
            onClick={() => setUseSupabase(!useSupabase)}
            className={useSupabase ? "bg-emerald-600 hover:bg-emerald-700" : ""}
          >
            <Database size={14} className="mr-1" />
            {useSupabase ? (isRTL ? 'Supabase' : 'Supabase') : (isRTL ? 'JSON' : 'JSON')}
          </Button>
          <Button 
            variant="outline" 
            onClick={loadHeroData}
            disabled={isLoading}
          >
            <RefreshCw size={16} className={cn("mr-2", isLoading && "animate-spin")} />
            {isRTL ? 'تحديث' : 'Refresh'}
          </Button>
          <Button 
            onClick={loadFromJSON}
            variant="outline"
            disabled={isLoading}
          >
            <Database size={16} className="mr-2" />
            {isRTL ? 'من JSON' : 'From JSON'}
          </Button>
          <Button 
            onClick={handleSave}
            disabled={isSaving || !hasChanges}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            {isSaving ? (
              <Loader2 size={16} className="mr-2 animate-spin" />
            ) : (
              <Save size={16} className="mr-2" />
            )}
            {isRTL ? 'حفظ التغييرات' : 'Save Changes'}
          </Button>
        </div>
      </div>

      {/* Language Tabs */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as LanguageCode)}>
        <TabsList className="mb-4">
          {supportedLanguages.map(lang => (
            <TabsTrigger key={lang} value={lang} className="gap-2">
              <span>{LANGUAGES[lang].flag}</span>
              <span className="hidden sm:inline">{LANGUAGES[lang].nativeName}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {supportedLanguages.map(lang => (
          <TabsContent key={lang} value={lang} className="space-y-6">
            {/* Text Content */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {isRTL ? 'المحتوى النصي' : 'Text Content'} - {LANGUAGES[lang].nativeName}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Title */}
                <div className="space-y-2">
                  <Label>{isRTL ? 'العنوان الرئيسي' : 'Main Title'}</Label>
                  <Input
                    value={heroData[lang]?.title || ''}
                    onChange={(e) => handleChange('title', e.target.value, lang)}
                    placeholder={isRTL ? 'أدخل العنوان...' : 'Enter title...'}
                    dir={LANGUAGES[lang].direction}
                  />
                </div>

                {/* Subtitle */}
                <div className="space-y-2">
                  <Label>{isRTL ? 'العنوان الفرعي' : 'Subtitle'}</Label>
                  <Input
                    value={heroData[lang]?.subtitle || ''}
                    onChange={(e) => handleChange('subtitle', e.target.value, lang)}
                    placeholder={isRTL ? 'أدخل العنوان الفرعي...' : 'Enter subtitle...'}
                    dir={LANGUAGES[lang].direction}
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label>{isRTL ? 'الوصف' : 'Description'}</Label>
                  <Textarea
                    value={heroData[lang]?.tagline || ''}
                    onChange={(e) => handleChange('tagline', e.target.value, lang)}
                    placeholder={isRTL ? 'أدخل الوصف...' : 'Enter description...'}
                    rows={4}
                    dir={LANGUAGES[lang].direction}
                  />
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {isRTL ? 'أزرار الدعوة للإجراء' : 'Call to Action Buttons'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Primary CTA */}
                <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium">{isRTL ? 'الزر الرئيسي' : 'Primary Button'}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>{isRTL ? 'نص الزر' : 'Button Text'}</Label>
                      <Input
                        value={heroData[lang]?.ctaDemo || ''}
                        onChange={(e) => handleChange('ctaDemo', e.target.value, lang)}
                        placeholder={isRTL ? 'مثال: ابدأ الآن' : 'e.g., Get Started'}
                        dir={LANGUAGES[lang].direction}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>{isRTL ? 'الرابط' : 'Link'}</Label>
                      <Input
                        value={heroData.primaryCTA?.link || ''}
                        onChange={(e) => handleChange('primaryCTA.link', e.target.value)}
                        placeholder="/contact"
                        dir="ltr"
                      />
                    </div>
                  </div>
                </div>

                {/* Secondary CTA */}
                <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium">{isRTL ? 'الزر الثانوي' : 'Secondary Button'}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>{isRTL ? 'نص الزر' : 'Button Text'}</Label>
                      <Input
                        value={heroData[lang]?.ctaTrial || ''}
                        onChange={(e) => handleChange('ctaTrial', e.target.value, lang)}
                        placeholder={isRTL ? 'مثال: اعرف المزيد' : 'e.g., Learn More'}
                        dir={LANGUAGES[lang].direction}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>{isRTL ? 'الشارة' : 'Badge'}</Label>
                      <Input
                        value={heroData[lang]?.badge || ''}
                        onChange={(e) => handleChange('badge', e.target.value, lang)}
                        placeholder={isRTL ? 'مثال: الأول في المنطقة' : 'e.g., #1 in Region'}
                        dir={LANGUAGES[lang].direction}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Media Section (Shared across languages) */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ImageIcon size={20} />
            {isRTL ? 'الوسائط' : 'Media'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Background Image */}
          <div className="space-y-4">
            <Label>{isRTL ? 'صورة الخلفية' : 'Background Image'}</Label>
            <div className="flex flex-col md:flex-row gap-4">
              {(heroData.en?.image || heroData.ar?.image) && (
                <div className="relative w-full md:w-64 h-40 rounded-lg overflow-hidden border">
                  <img 
                    src={heroData.en?.image || heroData.ar?.image} 
                    alt="Background" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1 space-y-2">
                <Input
                  value={heroData.en?.image || heroData.ar?.image || ''}
                  onChange={(e) => {
                    // Update image for all languages
                    supportedLanguages.forEach(lang => {
                      handleChange('image', e.target.value, lang);
                    });
                  }}
                  placeholder={isRTL ? 'رابط الصورة أو رفع ملف' : 'Image URL or upload file'}
                  dir="ltr"
                />
                <div className="flex gap-2">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, 'backgroundImage')}
                    />
                    <Button type="button" variant="outline" size="sm" asChild>
                      <span>
                        <Upload size={14} className="mr-1" />
                        {isRTL ? 'رفع صورة' : 'Upload Image'}
                      </span>
                    </Button>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Background Video */}
          <div className="space-y-4">
            <Label className="flex items-center gap-2">
              <Video size={16} />
              {isRTL ? 'فيديو الخلفية (اختياري)' : 'Background Video (Optional)'}
            </Label>
            <div className="space-y-2">
              <Input
                value={heroData.backgroundVideo || ''}
                onChange={(e) => handleChange('backgroundVideo', e.target.value)}
                placeholder={isRTL ? 'رابط الفيديو' : 'Video URL'}
                dir="ltr"
              />
              <p className="text-xs text-gray-500">
                {isRTL 
                  ? 'يدعم روابط YouTube, Vimeo, أو روابط مباشرة للفيديو' 
                  : 'Supports YouTube, Vimeo, or direct video URLs'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preview Button */}
      <div className="flex justify-end">
        <Button 
          variant="outline" 
          onClick={() => window.open(`/${siteId === 'texafab' ? '' : siteId}`, '_blank')}
        >
          <Eye size={16} className="mr-2" />
          {isRTL ? 'معاينة الموقع' : 'Preview Site'}
        </Button>
      </div>
    </div>
  );
}
