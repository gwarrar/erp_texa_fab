// ===========================================
// Admin V2 - Pricing Editor Page
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
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Save, 
  Loader2, 
  Plus, 
  Trash2, 
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Star,
  DollarSign,
  Database
} from 'lucide-react';
import { toast } from 'sonner';

export function PricingEditorPage() {
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
    isLoading,
    isSaving,
    getDirection
  } = useAdmin();

  const direction = getDirection();
  const isRTL = direction === 'rtl';
  const supportedLanguages = getSiteSupportedLanguages();
  const site = SITES[siteId as SiteId];

  // Form state
  const [pricingData, setPricingData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<LanguageCode>(currentContentLanguage);
  const [hasChanges, setHasChanges] = useState(false);
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  const [useSupabase, setUseSupabase] = useState(true);

  // Set current site when siteId changes
  useEffect(() => {
    if (siteId && SITES[siteId as SiteId]) {
      setCurrentSite(siteId as SiteId);
    }
  }, [siteId, setCurrentSite]);

  // Load pricing data when site is set
  useEffect(() => {
    if (siteId && SITES[siteId as SiteId]) {
      loadPricingData();
    }
  }, [siteId, useSupabase]);

  const loadPricingData = async () => {
    if (useSupabase) {
      // Load from Supabase
      const allData: any = {};
      let hasData = false;
      
      for (const lang of supportedLanguages) {
        const data = await loadContentFromSupabase('pricing', lang);
        if (data && Array.isArray(data) && data.length > 0) {
          hasData = true;
          allData[lang] = {
            title: '',
            subtitle: '',
            plans: data.map((p: any) => ({
              id: p.id,
              name: p.name || '',
              description: p.description || '',
              price: p.price || 0,
              currency: p.currency || '$',
              period: p.billing_period || 'month',
              features: p.pricing_features?.map((f: any) => f.feature_text) || p.features || [],
              isPopular: p.popular || p.is_popular || false,
            }))
          };
        } else {
          allData[lang] = { title: '', subtitle: '', plans: [] };
        }
      }
      
      // If no data in Supabase, fallback to JSON
      if (!hasData) {
        const jsonData = await loadSiteContent('pricing');
        if (jsonData) {
          setPricingData(jsonData);
          toast.info(isRTL ? 'تم تحميل البيانات من ملفات JSON - قم بالمزامنة لنقلها إلى Supabase' : 'Loaded data from JSON files - sync to move to Supabase');
          return;
        }
      }
      
      setPricingData(allData);
    } else {
      const data = await loadSiteContent('pricing');
      if (data) {
        setPricingData(data);
      } else {
        const initialData: any = {};
        supportedLanguages.forEach(lang => {
          initialData[lang] = { title: '', subtitle: '', plans: [] };
        });
        setPricingData(initialData);
      }
    }
  };

  // Load from JSON and sync to form
  const loadFromJSON = async () => {
    const jsonData = await loadSiteContent('pricing');
    if (jsonData) {
      setPricingData(jsonData);
      setHasChanges(true);
      toast.success(isRTL ? 'تم تحميل البيانات من JSON - احفظ لنقلها إلى Supabase' : 'Loaded from JSON - save to sync to Supabase');
    } else {
      toast.error(isRTL ? 'لا توجد بيانات JSON' : 'No JSON data found');
    }
  };

  // Legacy loading function for JSON fallback
  const loadPricingDataLegacy = async () => {
    const data = await loadSiteContent('pricing');
    if (data) {
      // Data structure is language-keyed: { "en": { title, subtitle, plans: [...] }, "ar": { ... } }
      setPricingData(data);
    } else {
      // Initialize with language-keyed structure
      const initialData: any = {};
      supportedLanguages.forEach(lang => {
        initialData[lang] = {
          title: '',
          subtitle: '',
          plans: []
        };
      });
      setPricingData(initialData);
    }
  };

  const handleSectionChange = useCallback((field: string, value: any, lang?: LanguageCode) => {
    setPricingData((prev: any) => {
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

  const handlePlanChange = useCallback((planId: string, field: string, value: any, lang?: LanguageCode) => {
    setPricingData((prev: any) => {
      if (!prev) return prev;
      
      const updated = { ...prev };
      
      if (lang) {
        // Data structure is language-keyed: { "en": { plans: [...] }, "ar": { plans: [...] } }
        if (!updated[lang]) {
          updated[lang] = { plans: [] };
        }
        const plans = [...(updated[lang]?.plans || [])];
        const planIndex = plans.findIndex((p: any) => p.id === planId);
        
        if (planIndex === -1) return prev;
        
        if (field.includes('.')) {
          const [parent, child] = field.split('.');
          plans[planIndex] = {
            ...plans[planIndex],
            [parent]: {
              ...plans[planIndex][parent],
              [child]: value
            }
          };
        } else {
          plans[planIndex] = {
            ...plans[planIndex],
            [field]: value
          };
        }
        updated[lang].plans = plans;
      }
      
      return updated;
    });
    setHasChanges(true);
  }, []);

  const addSamplePlans = () => {
    const samplePlansEn = [
      {
        id: `plan_${Date.now()}_1`,
        name: 'Starter',
        description: 'Perfect for small businesses',
        price: 49,
        currency: '$',
        period: 'month',
        features: ['Up to 1,000 products', 'Basic reporting', 'Email support', '1 user'],
        isPopular: false,
      },
      {
        id: `plan_${Date.now()}_2`,
        name: 'Professional',
        description: 'Best for growing businesses',
        price: 99,
        currency: '$',
        period: 'month',
        features: ['Up to 10,000 products', 'Advanced reporting', 'Priority support', '5 users', 'API access'],
        isPopular: true,
      },
      {
        id: `plan_${Date.now()}_3`,
        name: 'Enterprise',
        description: 'For large organizations',
        price: 249,
        currency: '$',
        period: 'month',
        features: ['Unlimited products', 'Custom reporting', '24/7 support', 'Unlimited users', 'Full API access', 'Custom integrations'],
        isPopular: false,
      },
    ];

    const samplePlansAr = [
      {
        id: `plan_${Date.now()}_1`,
        name: 'المبتدئ',
        description: 'مثالي للأعمال الصغيرة',
        price: 49,
        currency: '$',
        period: 'month',
        features: ['حتى 1,000 منتج', 'تقارير أساسية', 'دعم البريد الإلكتروني', 'مستخدم واحد'],
        isPopular: false,
      },
      {
        id: `plan_${Date.now()}_2`,
        name: 'الاحترافي',
        description: 'الأفضل للأعمال النامية',
        price: 99,
        currency: '$',
        period: 'month',
        features: ['حتى 10,000 منتج', 'تقارير متقدمة', 'دعم ذو أولوية', '5 مستخدمين', 'وصول API'],
        isPopular: true,
      },
      {
        id: `plan_${Date.now()}_3`,
        name: 'المؤسسات',
        description: 'للمنظمات الكبيرة',
        price: 249,
        currency: '$',
        period: 'month',
        features: ['منتجات غير محدودة', 'تقارير مخصصة', 'دعم على مدار الساعة', 'مستخدمين غير محدود', 'وصول API كامل', 'تكاملات مخصصة'],
        isPopular: false,
      },
    ];

    setPricingData((prev: any) => {
      const updated = { ...prev };
      supportedLanguages.forEach(lang => {
        if (!updated[lang]) {
          updated[lang] = { title: '', subtitle: '', plans: [] };
        }
        updated[lang].title = lang === 'ar' ? 'خطط الأسعار' : 'Pricing Plans';
        updated[lang].subtitle = lang === 'ar' ? 'اختر الخطة المناسبة لاحتياجاتك' : 'Choose the plan that fits your needs';
        updated[lang].plans = lang === 'ar' ? samplePlansAr : samplePlansEn;
      });
      return updated;
    });
    setHasChanges(true);
    toast.success(isRTL ? 'تم إضافة خطط تجريبية' : 'Sample plans added');
  };

  const addPlan = () => {
    const newPlan = {
      id: `plan_${Date.now()}`,
      name: '',
      description: '',
      price: 0,
      currency: '$',
      period: 'month',
      features: [],
      isPopular: false,
    };

    // Add to all languages
    setPricingData((prev: any) => {
      const updated = { ...prev };
      supportedLanguages.forEach(lang => {
        if (!updated[lang]) {
          updated[lang] = { title: '', subtitle: '', plans: [] };
        }
        updated[lang].plans = [...(updated[lang]?.plans || []), { ...newPlan }];
      });
      return updated;
    });
    setExpandedPlan(newPlan.id);
    setHasChanges(true);
  };

  const removePlan = async (planId: string) => {
    // Delete from Supabase if using it and it's a real ID
    if (useSupabase && !planId.startsWith('plan_')) {
      await deleteContentFromSupabase('pricing', planId);
    }
    
    setPricingData((prev: any) => {
      const updated = { ...prev };
      supportedLanguages.forEach(lang => {
        if (updated[lang]?.plans) {
          updated[lang].plans = updated[lang].plans.filter((p: any) => p.id !== planId);
        }
      });
      return updated;
    });
    setHasChanges(true);
  };

  const movePlan = (planId: string, direction: 'up' | 'down') => {
    setPricingData((prev: any) => {
      const updated = { ...prev };
      supportedLanguages.forEach(lang => {
        if (!updated[lang]?.plans) return;
        const plans = [...updated[lang].plans];
        const index = plans.findIndex((p: any) => p.id === planId);
        
        if (direction === 'up' && index > 0) {
          [plans[index], plans[index - 1]] = [plans[index - 1], plans[index]];
        } else if (direction === 'down' && index < plans.length - 1) {
          [plans[index], plans[index + 1]] = [plans[index + 1], plans[index]];
        }
        updated[lang].plans = plans;
      });
      return updated;
    });
    setHasChanges(true);
  };

  const handleSave = async () => {
    let success = false;
    
    if (useSupabase) {
      // Save to Supabase
      for (const lang of supportedLanguages) {
        const langData = pricingData[lang];
        if (langData?.plans) {
          for (let i = 0; i < langData.plans.length; i++) {
            const plan = langData.plans[i];
            const supabaseData = {
              id: plan.id?.startsWith('plan_') ? undefined : plan.id,
              name: plan.name || '',
              description: plan.description || '',
              price: plan.price || 0,
              currency: plan.currency || '$',
              billing_period: plan.period || 'month',
              is_popular: plan.isPopular || false,
              order_index: i,
              features: plan.features || []
            };
            success = await saveContentToSupabase('pricing', supabaseData, lang);
            if (!success) break;
          }
        }
      }
    } else {
      success = await saveSiteContent('pricing', pricingData);
    }
    
    if (success) {
      setHasChanges(false);
      toast.success(isRTL ? 'تم الحفظ بنجاح' : 'Saved successfully');
    }
  };

  if (!site) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">{isRTL ? 'الموقع غير موجود' : 'Site not found'}</p>
      </div>
    );
  }

  if (isLoading || !pricingData) {
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
            {isRTL ? 'تعديل الأسعار' : 'Edit Pricing'}
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
            onClick={loadPricingData}
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

      {/* Currency Setting */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <DollarSign size={20} />
            {isRTL ? 'إعدادات العملة' : 'Currency Settings'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label>{isRTL ? 'العملة' : 'Currency'}</Label>
            <Input
              value={pricingData.currency || 'USD'}
              onChange={(e) => handleSectionChange('currency', e.target.value)}
              placeholder="USD, EUR, SAR, etc."
              className="max-w-xs"
              dir="ltr"
            />
          </div>
        </CardContent>
      </Card>

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
                    value={pricingData[lang]?.title || ''}
                    onChange={(e) => handleSectionChange('title', e.target.value, lang)}
                    placeholder={isRTL ? 'عنوان قسم الأسعار' : 'Pricing section title'}
                    dir={LANGUAGES[lang].direction}
                  />
                </div>
                <div className="space-y-2">
                  <Label>{isRTL ? 'العنوان الفرعي' : 'Subtitle'}</Label>
                  <Input
                    value={pricingData[lang]?.subtitle || ''}
                    onChange={(e) => handleSectionChange('subtitle', e.target.value, lang)}
                    placeholder={isRTL ? 'وصف مختصر للقسم' : 'Brief section description'}
                    dir={LANGUAGES[lang].direction}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Pricing Plans */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {isRTL ? 'خطط الأسعار' : 'Pricing Plans'} ({pricingData[lang]?.plans?.length || 0})
                </h3>
                <Button onClick={addPlan} size="sm">
                  <Plus size={16} className="mr-1" />
                  {isRTL ? 'إضافة خطة' : 'Add Plan'}
                </Button>
              </div>

              {(!pricingData[lang]?.plans || pricingData[lang]?.plans?.length === 0) && (
                <Card className="p-8 text-center">
                  <DollarSign className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 mb-4">
                    {isRTL ? 'لا توجد خطط أسعار حالياً. يمكنك تحميل البيانات من ملفات JSON أو إضافة خطة جديدة.' : 'No pricing plans yet. Load data from JSON files or add a new plan.'}
                  </p>
                  <div className="flex gap-2 justify-center flex-wrap">
                    <Button onClick={loadFromJSON} variant="default" className="bg-emerald-600 hover:bg-emerald-700">
                      <RefreshCw size={16} className="mr-1" />
                      {isRTL ? 'تحميل من JSON' : 'Load from JSON'}
                    </Button>
                    <Button onClick={addPlan} variant="outline">
                      <Plus size={16} className="mr-1" />
                      {isRTL ? 'إضافة خطة جديدة' : 'Add New Plan'}
                    </Button>
                    <Button onClick={addSamplePlans} variant="outline">
                      <Database size={16} className="mr-1" />
                      {isRTL ? 'بيانات تجريبية' : 'Sample Data'}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    {isRTL ? 'بعد التحميل، اضغط على حفظ لنقل البيانات إلى قاعدة البيانات' : 'After loading, click Save to sync data to database'}
                  </p>
                </Card>
              )}

              {pricingData[lang]?.plans?.map((plan: any, index: number) => (
                <Card key={plan.id} className={cn("overflow-hidden", plan.popular && "ring-2 ring-emerald-500")}>
                  <div 
                    className="p-4 bg-gray-50 dark:bg-gray-800 cursor-pointer flex items-center justify-between"
                    onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                  >
                    <div className="flex items-center gap-3">
                      {(plan.popular || plan.isPopular) && <Star size={16} className="text-yellow-500 fill-yellow-500" />}
                      <span className="font-medium">
                        {plan.name || `${isRTL ? 'خطة' : 'Plan'} ${index + 1}`}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-sm text-gray-500">
                          {plan.currency || '$'}{plan.price}/{plan.period || (isRTL ? 'شهر' : 'mo')}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={(e) => { e.stopPropagation(); movePlan(plan.id, 'up'); }}
                        disabled={index === 0}
                      >
                        <ChevronUp size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={(e) => { e.stopPropagation(); movePlan(plan.id, 'down'); }}
                        disabled={index === (pricingData[lang]?.plans?.length || 0) - 1}
                      >
                        <ChevronDown size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-red-500 hover:text-red-700"
                        onClick={(e) => { e.stopPropagation(); removePlan(plan.id); }}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>

                  {expandedPlan === plan.id && (
                    <CardContent className="p-4 space-y-4">
                      {/* Popular Toggle */}
                      <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                        <Label className="flex items-center gap-2">
                          <Star size={16} className="text-yellow-500" />
                          {isRTL ? 'خطة مميزة' : 'Popular Plan'}
                        </Label>
                        <Switch
                          checked={plan.isPopular || plan.popular || false}
                          onCheckedChange={(checked) => handlePlanChange(plan.id, 'isPopular', checked, lang)}
                        />
                      </div>

                      {/* Name */}
                      <div className="space-y-2">
                        <Label>{isRTL ? 'اسم الخطة' : 'Plan Name'}</Label>
                        <Input
                          value={plan.name || ''}
                          onChange={(e) => handlePlanChange(plan.id, 'name', e.target.value, lang)}
                          placeholder={isRTL ? 'مثال: الخطة الأساسية' : 'e.g., Basic Plan'}
                          dir={LANGUAGES[lang].direction}
                        />
                      </div>

                      {/* Description */}
                      <div className="space-y-2">
                        <Label>{isRTL ? 'الوصف' : 'Description'}</Label>
                        <Textarea
                          value={plan.description || ''}
                          onChange={(e) => handlePlanChange(plan.id, 'description', e.target.value, lang)}
                          placeholder={isRTL ? 'وصف مختصر للخطة' : 'Brief plan description'}
                          rows={2}
                          dir={LANGUAGES[lang].direction}
                        />
                      </div>

                      {/* Pricing */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>{isRTL ? 'السعر' : 'Price'}</Label>
                          <Input
                            type="number"
                            value={plan.price || 0}
                            onChange={(e) => handlePlanChange(plan.id, 'price', parseFloat(e.target.value) || 0, lang)}
                            dir="ltr"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{isRTL ? 'العملة' : 'Currency'}</Label>
                          <Input
                            value={plan.currency || '$'}
                            onChange={(e) => handlePlanChange(plan.id, 'currency', e.target.value, lang)}
                            dir="ltr"
                          />
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        <Label>{isRTL ? 'الميزات (سطر واحد لكل ميزة)' : 'Features (one per line)'}</Label>
                        <Textarea
                          value={Array.isArray(plan.features) ? plan.features.join('\n') : ''}
                          onChange={(e) => handlePlanChange(plan.id, 'features', e.target.value.split('\n').filter(Boolean), lang)}
                          placeholder={isRTL ? 'أدخل الميزات...' : 'Enter features...'}
                          rows={5}
                          dir={LANGUAGES[lang].direction}
                        />
                      </div>

                      {/* CTA */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>{isRTL ? 'نص الزر' : 'Button Text'}</Label>
                          <Input
                            value={plan.ctaText || ''}
                            onChange={(e) => handlePlanChange(plan.id, 'ctaText', e.target.value, lang)}
                            placeholder={isRTL ? 'مثال: ابدأ الآن' : 'e.g., Get Started'}
                            dir={LANGUAGES[lang].direction}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{isRTL ? 'الفترة' : 'Period'}</Label>
                          <Input
                            value={plan.period || 'month'}
                            onChange={(e) => handlePlanChange(plan.id, 'period', e.target.value, lang)}
                            placeholder="month / year"
                            dir="ltr"
                          />
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}


            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
