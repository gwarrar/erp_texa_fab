// ===========================================
// Admin V2 - Features Editor Page
// ===========================================

import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useAdmin } from '../../context/AdminStore';
import { SITES, SiteId, LANGUAGES, LanguageCode, Feature } from '../../types';
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
  Loader2, 
  Plus, 
  Trash2, 
  GripVertical,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Database
} from 'lucide-react';
import { toast } from 'sonner';

export function FeaturesEditorPage() {
  const { siteId } = useParams<{ siteId: string }>();
  const { 
    setCurrentSite, 
    currentContentLanguage,
    getSiteSupportedLanguages,
    loadSiteContent,
    saveSiteContent,
    loadContentFromSupabase,
    saveContentToSupabase,
    deleteContentFromSupabase,
    uploadFile,
    isLoading,
    isSaving,
    getDirection
  } = useAdmin();

  const direction = getDirection();
  const isRTL = direction === 'rtl';
  const supportedLanguages = getSiteSupportedLanguages();
  const site = SITES[siteId as SiteId];

  // Form state
  const [featuresData, setFeaturesData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<LanguageCode>(currentContentLanguage);
  const [hasChanges, setHasChanges] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [useSupabase, setUseSupabase] = useState(true);

  // Set current site when siteId changes
  useEffect(() => {
    if (siteId && SITES[siteId as SiteId]) {
      setCurrentSite(siteId as SiteId);
    }
  }, [siteId, setCurrentSite]);

  // Load features data when site is set
  useEffect(() => {
    if (siteId && SITES[siteId as SiteId]) {
      loadFeaturesData();
    }
  }, [siteId, useSupabase]);

  const loadFeaturesData = async () => {
    const emptyLangData = {
      title: '',
      subtitle: '',
      items: []
    };

    if (useSupabase) {
      // Load from Supabase
      const allData: any = {};
      let hasData = false;
      
      for (const lang of supportedLanguages) {
        const data = await loadContentFromSupabase('features', lang);
        if (data && Array.isArray(data) && data.length > 0) {
          hasData = true;
          allData[lang] = {
            title: '',
            subtitle: '',
            items: data.map((f: any) => ({
              id: f.id,
              icon: f.icon || 'Star',
              title: f.title || '',
              description: f.description || '',
              stat: f.stat_value || ''
            }))
          };
        } else {
          allData[lang] = { ...emptyLangData };
        }
      }
      
      // If no data in Supabase, fallback to JSON
      if (!hasData) {
        const jsonData = await loadSiteContent('features');
        if (jsonData) {
          setFeaturesData(jsonData);
          toast.info(isRTL ? 'تم تحميل البيانات من ملفات JSON - قم بالمزامنة لنقلها إلى Supabase' : 'Loaded data from JSON files - sync to move to Supabase');
          return;
        }
      }
      
      setFeaturesData(allData);
    } else {
      // Load from JSON files (legacy)
      const data = await loadSiteContent('features');
      if (data) {
        setFeaturesData(data);
      } else {
        const initialData: any = {};
        supportedLanguages.forEach(lang => {
          initialData[lang] = { ...emptyLangData };
        });
        setFeaturesData(initialData);
      }
    }
  };

  // Load from JSON and sync to form
  const loadFromJSON = async () => {
    const jsonData = await loadSiteContent('features');
    if (jsonData) {
      setFeaturesData(jsonData);
      setHasChanges(true);
      toast.success(isRTL ? 'تم تحميل البيانات من JSON - احفظ لنقلها إلى Supabase' : 'Loaded from JSON - save to sync to Supabase');
    } else {
      toast.error(isRTL ? 'لا توجد بيانات JSON' : 'No JSON data found');
    }
  };

  const handleSectionChange = useCallback((field: string, value: any, lang?: LanguageCode) => {
    setFeaturesData((prev: any) => {
      if (!prev) return prev;
      
      const updated = { ...prev };
      
      if (lang) {
        // Data structure is language-keyed: { "en": { field: value }, "ar": { field: value } }
        if (!updated[lang]) {
          updated[lang] = {};
        }
        updated[lang][field] = value;
      } else {
        updated[field] = value;
      }
      
      return updated;
    });
    setHasChanges(true);
  }, []);

  const handleFeatureChange = useCallback((featureId: string, field: string, value: any, lang?: LanguageCode) => {
    setFeaturesData((prev: any) => {
      if (!prev) return prev;
      
      const updated = { ...prev };
      
      if (lang) {
        // Data structure is language-keyed: { "en": { items: [...] }, "ar": { items: [...] } }
        if (!updated[lang]) {
          updated[lang] = { items: [] };
        }
        const items = [...(updated[lang]?.items || [])];
        const featureIndex = items.findIndex((f: any) => f.id === featureId);
        
        if (featureIndex === -1) return prev;
        
        items[featureIndex] = {
          ...items[featureIndex],
          [field]: value
        };
        updated[lang].items = items;
      }
      
      return updated;
    });
    setHasChanges(true);
  }, []);

  const addSampleFeatures = () => {
    const sampleFeaturesEn = [
      { id: `feature_${Date.now()}_1`, icon: 'Package', title: 'Inventory Management', description: 'Track and manage your inventory in real-time with advanced tools', stat: '99.9%' },
      { id: `feature_${Date.now()}_2`, icon: 'BarChart3', title: 'Advanced Analytics', description: 'Get insights with powerful analytics and reporting', stat: '50+' },
      { id: `feature_${Date.now()}_3`, icon: 'Users', title: 'Multi-User Access', description: 'Collaborate with your team with role-based permissions', stat: 'Unlimited' },
      { id: `feature_${Date.now()}_4`, icon: 'Globe', title: 'Multi-Language', description: 'Support for multiple languages including RTL', stat: '10+' },
      { id: `feature_${Date.now()}_5`, icon: 'Shield', title: 'Enterprise Security', description: 'Bank-level security to protect your data', stat: '256-bit' },
      { id: `feature_${Date.now()}_6`, icon: 'Zap', title: 'Fast Performance', description: 'Blazing fast performance with optimized codebase', stat: '<100ms' },
    ];

    const sampleFeaturesAr = [
      { id: `feature_${Date.now()}_1`, icon: 'Package', title: 'إدارة المخزون', description: 'تتبع وإدارة المخزون الخاص بك في الوقت الفعلي مع أدوات متقدمة', stat: '99.9%' },
      { id: `feature_${Date.now()}_2`, icon: 'BarChart3', title: 'تحليلات متقدمة', description: 'احصل على رؤى مع تحليلات وتقارير قوية', stat: '50+' },
      { id: `feature_${Date.now()}_3`, icon: 'Users', title: 'وصول متعدد المستخدمين', description: 'تعاون مع فريقك مع صلاحيات قائمة على الأدوار', stat: 'غير محدود' },
      { id: `feature_${Date.now()}_4`, icon: 'Globe', title: 'متعدد اللغات', description: 'دعم للغات متعددة بما في ذلك RTL', stat: '10+' },
      { id: `feature_${Date.now()}_5`, icon: 'Shield', title: 'أمان المؤسسات', description: 'أمان على مستوى البنوك لحماية بياناتك', stat: '256-bit' },
      { id: `feature_${Date.now()}_6`, icon: 'Zap', title: 'أداء سريع', description: 'أداء سريع للغاية مع قاعدة برمجية محسّنة', stat: '<100ms' },
    ];

    setFeaturesData((prev: any) => {
      const updated = { ...prev };
      supportedLanguages.forEach(lang => {
        if (!updated[lang]) {
          updated[lang] = { title: '', subtitle: '', items: [] };
        }
        updated[lang].title = lang === 'ar' ? 'ميزاتنا' : 'Our Features';
        updated[lang].subtitle = lang === 'ar' ? 'كل ما تحتاجه لإدارة أعمالك' : 'Everything you need to manage your business';
        updated[lang].items = lang === 'ar' ? sampleFeaturesAr : sampleFeaturesEn;
      });
      return updated;
    });
    setHasChanges(true);
    toast.success(isRTL ? 'تم إضافة ميزات تجريبية' : 'Sample features added');
  };

  const addFeature = () => {
    const newFeature = {
      id: `feature_${Date.now()}`,
      icon: 'Star',
      title: '',
      description: '',
      stat: ''
    };

    // Add to all languages
    setFeaturesData((prev: any) => {
      const updated = { ...prev };
      supportedLanguages.forEach(lang => {
        if (!updated[lang]) {
          updated[lang] = { title: '', subtitle: '', items: [] };
        }
        updated[lang].items = [...(updated[lang]?.items || []), { ...newFeature }];
      });
      return updated;
    });
    setExpandedFeature(newFeature.id);
    setHasChanges(true);
  };

  const removeFeature = async (featureId: string) => {
    // Delete from Supabase if using it and it's a real ID (not temp)
    if (useSupabase && !featureId.startsWith('feature_')) {
      await deleteContentFromSupabase('features', featureId);
    }
    
    setFeaturesData((prev: any) => {
      const updated = { ...prev };
      supportedLanguages.forEach(lang => {
        if (updated[lang]?.items) {
          updated[lang].items = updated[lang].items.filter((f: any) => f.id !== featureId);
        }
      });
      return updated;
    });
    setHasChanges(true);
  };

  const moveFeature = (featureId: string, direction: 'up' | 'down') => {
    setFeaturesData((prev: any) => {
      const updated = { ...prev };
      supportedLanguages.forEach(lang => {
        if (!updated[lang]?.items) return;
        const items = [...updated[lang].items];
        const index = items.findIndex((f: any) => f.id === featureId);
        
        if (direction === 'up' && index > 0) {
          [items[index], items[index - 1]] = [items[index - 1], items[index]];
        } else if (direction === 'down' && index < items.length - 1) {
          [items[index], items[index + 1]] = [items[index + 1], items[index]];
        }
        updated[lang].items = items;
      });
      
      return updated;
    });
    setHasChanges(true);
  };

  const handleSave = async () => {
    let success = false;
    
    if (useSupabase) {
      // Save to Supabase - save features for each language
      for (const lang of supportedLanguages) {
        const langData = featuresData[lang];
        if (langData?.items) {
          for (let i = 0; i < langData.items.length; i++) {
            const item = langData.items[i];
            const supabaseData = {
              id: item.id?.startsWith('feature_') ? undefined : item.id,
              icon: item.icon || 'Star',
              title: item.title || '',
              description: item.description || '',
              stat_value: item.stat || '',
              order_index: i
            };
            success = await saveContentToSupabase('features', supabaseData, lang);
            if (!success) break;
          }
        }
      }
    } else {
      success = await saveSiteContent('features', featuresData);
    }
    
    if (success) {
      setHasChanges(false);
      toast.success(isRTL ? 'تم الحفظ بنجاح' : 'Saved successfully');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, featureId: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = await uploadFile(file, 'features');
    if (url) {
      handleFeatureChange(featureId, 'image', url);
    }
  };

  if (!site) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">{isRTL ? 'الموقع غير موجود' : 'Site not found'}</p>
      </div>
    );
  }

  if (isLoading || !featuresData) {
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
            {isRTL ? 'تعديل الميزات' : 'Edit Features'}
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
            {useSupabase ? 'Supabase' : 'JSON'}
          </Button>
          <Button 
            variant="outline" 
            onClick={loadFeaturesData}
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
            {/* Section Header */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {isRTL ? 'عنوان القسم' : 'Section Header'} - {LANGUAGES[lang].nativeName}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>{isRTL ? 'العنوان' : 'Title'}</Label>
                  <Input
                    value={featuresData[lang]?.title || ''}
                    onChange={(e) => handleSectionChange('title', e.target.value, lang)}
                    placeholder={isRTL ? 'عنوان قسم الميزات' : 'Features section title'}
                    dir={LANGUAGES[lang].direction}
                  />
                </div>
                <div className="space-y-2">
                  <Label>{isRTL ? 'العنوان الفرعي' : 'Subtitle'}</Label>
                  <Input
                    value={featuresData[lang]?.subtitle || ''}
                    onChange={(e) => handleSectionChange('subtitle', e.target.value, lang)}
                    placeholder={isRTL ? 'وصف مختصر للقسم' : 'Brief section description'}
                    dir={LANGUAGES[lang].direction}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {isRTL ? 'الميزات' : 'Features'} ({featuresData[lang]?.items?.length || 0})
                </h3>
                <Button onClick={addFeature} size="sm">
                  <Plus size={16} className="mr-1" />
                  {isRTL ? 'إضافة ميزة' : 'Add Feature'}
                </Button>
              </div>

              {(!featuresData[lang]?.items || featuresData[lang]?.items?.length === 0) && (
                <Card className="p-8 text-center">
                  <Database className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 mb-4">
                    {isRTL ? 'لا توجد ميزات حالياً. يمكنك تحميل البيانات من ملفات JSON أو إضافة ميزة جديدة.' : 'No features yet. Load data from JSON files or add a new feature.'}
                  </p>
                  <div className="flex gap-2 justify-center flex-wrap">
                    <Button onClick={loadFromJSON} variant="default" className="bg-emerald-600 hover:bg-emerald-700">
                      <RefreshCw size={16} className="mr-1" />
                      {isRTL ? 'تحميل من JSON' : 'Load from JSON'}
                    </Button>
                    <Button onClick={addFeature} variant="outline">
                      <Plus size={16} className="mr-1" />
                      {isRTL ? 'إضافة ميزة' : 'Add Feature'}
                    </Button>
                    <Button onClick={addSampleFeatures} variant="outline">
                      <Database size={16} className="mr-1" />
                      {isRTL ? 'بيانات تجريبية' : 'Sample Data'}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    {isRTL ? 'بعد التحميل، اضغط على حفظ لنقل البيانات إلى قاعدة البيانات' : 'After loading, click Save to sync data to database'}
                  </p>
                </Card>
              )}

              {featuresData[lang]?.items?.map((feature: any, index: number) => (
                <Card key={feature.id} className="overflow-hidden">
                  <div 
                    className="p-4 bg-gray-50 dark:bg-gray-800 cursor-pointer flex items-center justify-between"
                    onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                  >
                    <div className="flex items-center gap-3">
                      <GripVertical size={18} className="text-gray-400" />
                      <span className="font-medium">
                        {feature.title || `${isRTL ? 'ميزة' : 'Feature'} ${index + 1}`}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={(e) => { e.stopPropagation(); moveFeature(feature.id, 'up'); }}
                        disabled={index === 0}
                      >
                        <ChevronUp size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={(e) => { e.stopPropagation(); moveFeature(feature.id, 'down'); }}
                        disabled={index === (featuresData[lang]?.items?.length || 0) - 1}
                      >
                        <ChevronDown size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-red-500 hover:text-red-700"
                        onClick={(e) => { e.stopPropagation(); removeFeature(feature.id); }}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>

                  {expandedFeature === feature.id && (
                    <CardContent className="p-4 space-y-4">
                      {/* Icon */}
                      <div className="space-y-2">
                        <Label>{isRTL ? 'الأيقونة' : 'Icon'}</Label>
                        <Input
                          value={feature.icon || ''}
                          onChange={(e) => handleFeatureChange(feature.id, 'icon', e.target.value)}
                          placeholder="Star, Shield, Zap, etc."
                          dir="ltr"
                        />
                        <p className="text-xs text-gray-500">
                          {isRTL ? 'استخدم أسماء أيقونات Lucide' : 'Use Lucide icon names'}
                        </p>
                      </div>

                      {/* Title */}
                      <div className="space-y-2">
                        <Label>{isRTL ? 'العنوان' : 'Title'}</Label>
                        <Input
                          value={feature.title || ''}
                          onChange={(e) => handleFeatureChange(feature.id, 'title', e.target.value, lang)}
                          placeholder={isRTL ? 'عنوان الميزة' : 'Feature title'}
                          dir={LANGUAGES[lang].direction}
                        />
                      </div>

                      {/* Description */}
                      <div className="space-y-2">
                        <Label>{isRTL ? 'الوصف' : 'Description'}</Label>
                        <Textarea
                          value={feature.description || ''}
                          onChange={(e) => handleFeatureChange(feature.id, 'description', e.target.value, lang)}
                          placeholder={isRTL ? 'وصف الميزة' : 'Feature description'}
                          rows={3}
                          dir={LANGUAGES[lang].direction}
                        />
                      </div>

                      {/* Image */}
                      <div className="space-y-2">
                        <Label>{isRTL ? 'الصورة (اختياري)' : 'Image (Optional)'}</Label>
                        <div className="flex gap-4 items-start">
                          {feature.image && (
                            <img 
                              src={feature.image} 
                              alt="" 
                              className="w-20 h-20 object-cover rounded-lg border"
                            />
                          )}
                          <div className="flex-1 space-y-2">
                            <Input
                              value={feature.image || ''}
                              onChange={(e) => handleFeatureChange(feature.id, 'image', e.target.value)}
                              placeholder={isRTL ? 'رابط الصورة' : 'Image URL'}
                              dir="ltr"
                            />
                            <label className="cursor-pointer">
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleImageUpload(e, feature.id)}
                              />
                              <Button type="button" variant="outline" size="sm" asChild>
                                <span>
                                  <Upload size={14} className="mr-1" />
                                  {isRTL ? 'رفع' : 'Upload'}
                                </span>
                              </Button>
                            </label>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}

              {(!featuresData[lang]?.items || featuresData[lang]?.items?.length === 0) && (
                <Card className="p-8 text-center">
                  <p className="text-gray-500 mb-4">
                    {isRTL ? 'لا توجد ميزات بعد' : 'No features yet'}
                  </p>
                  <Button onClick={addFeature}>
                    <Plus size={16} className="mr-1" />
                    {isRTL ? 'إضافة أول ميزة' : 'Add First Feature'}
                  </Button>
                </Card>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
