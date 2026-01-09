// ===========================================
// Admin V2 - Generic Content Editor
// Handles: testimonials, news, portfolio, services, products, solutions, faq, contact, blog, chat
// ===========================================

import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useAdmin } from '../../context/AdminStore';
import { SITES, SiteId, LANGUAGES, LanguageCode, SiteFeature } from '../../types';
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
  Upload, 
  Loader2, 
  Plus, 
  Trash2, 
  RefreshCw,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Newspaper,
  FolderOpen,
  Briefcase,
  Package,
  Lightbulb,
  HelpCircle,
  Mail,
  BookOpen,
  Database
} from 'lucide-react';
import { toast } from 'sonner';

// Content type configurations
const contentConfigs: Record<string, {
  icon: React.ElementType;
  titleEn: string;
  titleAr: string;
  hasItems: boolean;
  itemFields: { key: string; labelEn: string; labelAr: string; type: 'text' | 'textarea' | 'image' | 'number' | 'url'; multilingual?: boolean }[];
  sectionFields?: { key: string; labelEn: string; labelAr: string; type: 'text' | 'textarea' | 'switch'; multilingual?: boolean }[];
}> = {
  testimonials: {
    icon: MessageSquare,
    titleEn: 'Testimonials',
    titleAr: 'آراء العملاء',
    hasItems: true,
    itemFields: [
      { key: 'name', labelEn: 'Name', labelAr: 'الاسم', type: 'text' },
      { key: 'company', labelEn: 'Company', labelAr: 'الشركة', type: 'text' },
      { key: 'role', labelEn: 'Role', labelAr: 'المنصب', type: 'text', multilingual: true },
      { key: 'content', labelEn: 'Content', labelAr: 'المحتوى', type: 'textarea', multilingual: true },
      { key: 'avatar', labelEn: 'Avatar', labelAr: 'الصورة', type: 'image' },
      { key: 'rating', labelEn: 'Rating (1-5)', labelAr: 'التقييم (1-5)', type: 'number' },
    ]
  },
  news: {
    icon: Newspaper,
    titleEn: 'News',
    titleAr: 'الأخبار',
    hasItems: true,
    itemFields: [
      { key: 'title', labelEn: 'Title', labelAr: 'العنوان', type: 'text', multilingual: true },
      { key: 'excerpt', labelEn: 'Excerpt', labelAr: 'المقتطف', type: 'textarea', multilingual: true },
      { key: 'content', labelEn: 'Content', labelAr: 'المحتوى', type: 'textarea', multilingual: true },
      { key: 'image', labelEn: 'Image', labelAr: 'الصورة', type: 'image' },
      { key: 'date', labelEn: 'Date', labelAr: 'التاريخ', type: 'text' },
      { key: 'author', labelEn: 'Author', labelAr: 'الكاتب', type: 'text' },
      { key: 'category', labelEn: 'Category', labelAr: 'الفئة', type: 'text' },
    ]
  },
  portfolio: {
    icon: FolderOpen,
    titleEn: 'Portfolio',
    titleAr: 'المعرض',
    hasItems: true,
    itemFields: [
      { key: 'title', labelEn: 'Title', labelAr: 'العنوان', type: 'text', multilingual: true },
      { key: 'description', labelEn: 'Description', labelAr: 'الوصف', type: 'textarea', multilingual: true },
      { key: 'category', labelEn: 'Category', labelAr: 'الفئة', type: 'text' },
      { key: 'image', labelEn: 'Main Image', labelAr: 'الصورة الرئيسية', type: 'image' },
      { key: 'client', labelEn: 'Client', labelAr: 'العميل', type: 'text' },
      { key: 'date', labelEn: 'Date', labelAr: 'التاريخ', type: 'text' },
      { key: 'link', labelEn: 'Link', labelAr: 'الرابط', type: 'url' },
    ]
  },
  services: {
    icon: Briefcase,
    titleEn: 'Services',
    titleAr: 'الخدمات',
    hasItems: true,
    itemFields: [
      { key: 'title', labelEn: 'Title', labelAr: 'العنوان', type: 'text', multilingual: true },
      { key: 'description', labelEn: 'Description', labelAr: 'الوصف', type: 'textarea', multilingual: true },
      { key: 'icon', labelEn: 'Icon', labelAr: 'الأيقونة', type: 'text' },
      { key: 'image', labelEn: 'Image', labelAr: 'الصورة', type: 'image' },
    ]
  },
  products: {
    icon: Package,
    titleEn: 'Products',
    titleAr: 'المنتجات',
    hasItems: true,
    itemFields: [
      { key: 'title', labelEn: 'Title', labelAr: 'العنوان', type: 'text', multilingual: true },
      { key: 'description', labelEn: 'Description', labelAr: 'الوصف', type: 'textarea', multilingual: true },
      { key: 'icon', labelEn: 'Icon', labelAr: 'الأيقونة', type: 'text' },
      { key: 'image', labelEn: 'Image', labelAr: 'الصورة', type: 'image' },
      { key: 'link', labelEn: 'Link', labelAr: 'الرابط', type: 'url' },
    ]
  },
  solutions: {
    icon: Lightbulb,
    titleEn: 'Solutions',
    titleAr: 'الحلول',
    hasItems: true,
    itemFields: [
      { key: 'title', labelEn: 'Title', labelAr: 'العنوان', type: 'text', multilingual: true },
      { key: 'description', labelEn: 'Description', labelAr: 'الوصف', type: 'textarea', multilingual: true },
      { key: 'icon', labelEn: 'Icon', labelAr: 'الأيقونة', type: 'text' },
      { key: 'image', labelEn: 'Image', labelAr: 'الصورة', type: 'image' },
    ]
  },
  faq: {
    icon: HelpCircle,
    titleEn: 'FAQ',
    titleAr: 'الأسئلة الشائعة',
    hasItems: true,
    itemFields: [
      { key: 'question', labelEn: 'Question', labelAr: 'السؤال', type: 'text', multilingual: true },
      { key: 'answer', labelEn: 'Answer', labelAr: 'الإجابة', type: 'textarea', multilingual: true },
      { key: 'category', labelEn: 'Category', labelAr: 'الفئة', type: 'text' },
    ]
  },
  contact: {
    icon: Mail,
    titleEn: 'Contact Info',
    titleAr: 'معلومات التواصل',
    hasItems: false,
    itemFields: [],
    sectionFields: [
      { key: 'email', labelEn: 'Email', labelAr: 'البريد الإلكتروني', type: 'text' },
      { key: 'phone', labelEn: 'Phone', labelAr: 'الهاتف', type: 'text' },
      { key: 'whatsapp', labelEn: 'WhatsApp', labelAr: 'واتساب', type: 'text' },
      { key: 'address', labelEn: 'Address', labelAr: 'العنوان', type: 'textarea', multilingual: true },
    ]
  },
  blog: {
    icon: BookOpen,
    titleEn: 'Blog',
    titleAr: 'المدونة',
    hasItems: true,
    itemFields: [
      { key: 'title', labelEn: 'Title', labelAr: 'العنوان', type: 'text', multilingual: true },
      { key: 'excerpt', labelEn: 'Excerpt', labelAr: 'المقتطف', type: 'textarea', multilingual: true },
      { key: 'content', labelEn: 'Content', labelAr: 'المحتوى', type: 'textarea', multilingual: true },
      { key: 'image', labelEn: 'Image', labelAr: 'الصورة', type: 'image' },
      { key: 'date', labelEn: 'Date', labelAr: 'التاريخ', type: 'text' },
      { key: 'author', labelEn: 'Author', labelAr: 'الكاتب', type: 'text' },
      { key: 'category', labelEn: 'Category', labelAr: 'الفئة', type: 'text' },
    ]
  },
  chat: {
    icon: MessageSquare,
    titleEn: 'Chat Settings',
    titleAr: 'إعدادات المحادثة',
    hasItems: false,
    itemFields: [],
    sectionFields: [
      { key: 'enabled', labelEn: 'Enable Chat', labelAr: 'تفعيل المحادثة', type: 'switch' },
      { key: 'provider', labelEn: 'Provider (whatsapp/tawk/crisp)', labelAr: 'المزود', type: 'text' },
      { key: 'whatsappNumber', labelEn: 'WhatsApp Number', labelAr: 'رقم واتساب', type: 'text' },
      { key: 'tawkId', labelEn: 'Tawk.to ID', labelAr: 'معرف Tawk.to', type: 'text' },
      { key: 'crispId', labelEn: 'Crisp ID', labelAr: 'معرف Crisp', type: 'text' },
      { key: 'welcomeMessage', labelEn: 'Welcome Message', labelAr: 'رسالة الترحيب', type: 'textarea', multilingual: true },
      { key: 'offlineMessage', labelEn: 'Offline Message', labelAr: 'رسالة عدم الاتصال', type: 'textarea', multilingual: true },
    ]
  },
};

export function GenericContentEditor() {
  const { siteId, contentType } = useParams<{ siteId: string; contentType: string }>();
  const { 
    setCurrentSite, 
    currentContentLanguage,
    getSiteSupportedLanguages,
    saveSiteContent,
    uploadFile,
    isLoading,
    isSaving,
    getDirection
  } = useAdmin();

  const direction = getDirection();
  const isRTL = direction === 'rtl';
  const supportedLanguages = getSiteSupportedLanguages();
  const site = SITES[siteId as SiteId];
  const config = contentConfigs[contentType || ''];

  // Form state
  const [contentData, setContentData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<LanguageCode>(currentContentLanguage);
  const [hasChanges, setHasChanges] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Set current site and load data when siteId or contentType changes
  useEffect(() => {
    const loadData = async () => {
      if (siteId && SITES[siteId as SiteId] && contentType) {
        // Set the current site first
        setCurrentSite(siteId as SiteId);
        
        // Then load the content directly using fetch
        console.log('Loading content for:', contentType, 'site:', siteId);
        try {
          const response = await fetch(`/data/${siteId}/${contentType}.json`);
          if (response.ok) {
            const data = await response.json();
            console.log('Loaded data:', data);
            setContentData(data);
          } else {
            console.log('No data found, initializing empty structure');
            if (config?.hasItems) {
              setContentData({
                sectionTitle: {},
                sectionSubtitle: {},
                items: []
              });
            } else {
              setContentData({});
            }
          }
        } catch (error) {
          console.error('Error loading content:', error);
          if (config?.hasItems) {
            setContentData({
              sectionTitle: {},
              sectionSubtitle: {},
              items: []
            });
          } else {
            setContentData({});
          }
        }
      }
    };
    loadData();
  }, [siteId, contentType, config?.hasItems, setCurrentSite]);

  // Manual load from JSON
  const loadFromJSON = async () => {
    if (!siteId || !contentType) return;
    try {
      const response = await fetch(`/data/${siteId}/${contentType}.json`);
      if (response.ok) {
        const data = await response.json();
        setContentData(data);
        setHasChanges(true);
        toast.success(direction === 'rtl' ? 'تم تحميل البيانات من JSON - احفظ لنقلها إلى Supabase' : 'Loaded from JSON - save to sync to Supabase');
      } else {
        toast.error(direction === 'rtl' ? 'لا توجد بيانات JSON' : 'No JSON data found');
      }
    } catch (error) {
      toast.error(direction === 'rtl' ? 'فشل تحميل البيانات' : 'Failed to load data');
    }
  };

  const handleFieldChange = useCallback((field: string, value: any, lang?: LanguageCode) => {
    setContentData((prev: any) => {
      if (!prev) return prev;
      
      const updated = { ...prev };
      
      if (lang) {
        // Multilingual field: { fieldName: { en: value, ar: value } }
        updated[field] = {
          ...updated[field],
          [lang]: value
        };
      } else {
        // Non-multilingual field
        updated[field] = value;
      }
      
      return updated;
    });
    setHasChanges(true);
  }, []);

  const handleItemChange = useCallback((itemId: string, field: string, value: any, lang?: LanguageCode) => {
    setContentData((prev: any) => {
      if (!prev) return prev;
      
      const updated = { ...prev };
      const items = [...(updated.items || [])];
      const itemIndex = items.findIndex((i: any) => i.id === itemId);
      
      if (itemIndex === -1) return prev;
      
      if (lang) {
        // Multilingual field within item: { items: [{ field: { en, ar } }] }
        items[itemIndex] = {
          ...items[itemIndex],
          [field]: {
            ...items[itemIndex][field],
            [lang]: value
          }
        };
      } else {
        // Non-multilingual field
        items[itemIndex] = {
          ...items[itemIndex],
          [field]: value
        };
      }
      
      updated.items = items;
      return updated;
    });
    setHasChanges(true);
  }, []);

  const addItem = () => {
    const newItem: any = {
      id: `${contentType}_${Date.now()}`,
    };
    
    // Initialize fields
    config?.itemFields.forEach(field => {
      if (field.multilingual) {
        newItem[field.key] = {};
      } else if (field.type === 'number') {
        newItem[field.key] = 0;
      } else {
        newItem[field.key] = '';
      }
    });

    setContentData((prev: any) => {
      const updated = { ...prev };
      updated.items = [...(updated.items || []), newItem];
      return updated;
    });
    setExpandedItem(newItem.id);
    setHasChanges(true);
  };

  const removeItem = (itemId: string) => {
    setContentData((prev: any) => ({
      ...prev,
      items: prev.items.filter((i: any) => i.id !== itemId)
    }));
    setHasChanges(true);
  };

  const moveItem = (itemId: string, direction: 'up' | 'down') => {
    setContentData((prev: any) => {
      const items = [...prev.items];
      const index = items.findIndex((i: any) => i.id === itemId);
      
      if (direction === 'up' && index > 0) {
        [items[index], items[index - 1]] = [items[index - 1], items[index]];
      } else if (direction === 'down' && index < items.length - 1) {
        [items[index], items[index + 1]] = [items[index + 1], items[index]];
      }
      
      return { ...prev, items };
    });
    setHasChanges(true);
  };

  const handleSave = async () => {
    if (!contentType) return;
    const success = await saveSiteContent(contentType, contentData);
    if (success) {
      setHasChanges(false);
      toast.success(isRTL ? 'تم الحفظ بنجاح' : 'Saved successfully');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, itemId: string, field: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = await uploadFile(file, contentType);
    if (url) {
      handleItemChange(itemId, field, url);
    }
  };

  if (!site || !config) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">{isRTL ? 'المحتوى غير موجود' : 'Content not found'}</p>
      </div>
    );
  }

  if (isLoading || !contentData) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
      </div>
    );
  }

  const Icon = config.icon;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
            style={{ backgroundColor: site.primaryColor }}
          >
            <Icon size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {isRTL ? config.titleAr : config.titleEn}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              {isRTL ? site.nameAr : site.name}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            onClick={loadContentData}
            disabled={isLoading}
          >
            <RefreshCw size={16} className={cn("mr-2", isLoading && "animate-spin")} />
            {isRTL ? 'تحديث' : 'Refresh'}
          </Button>
          <Button 
            variant="outline" 
            onClick={loadFromJSON}
            disabled={isLoading}
          >
            <FolderOpen size={16} className="mr-2" />
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

      {config.hasItems ? (
        // Content with items (testimonials, news, etc.)
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
                    {isRTL ? 'عنوان القسم' : 'Section Header'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>{isRTL ? 'العنوان' : 'Title'}</Label>
                    <Input
                      value={contentData.sectionTitle?.[lang] || ''}
                      onChange={(e) => handleFieldChange('sectionTitle', e.target.value, lang)}
                      dir={LANGUAGES[lang].direction}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>{isRTL ? 'العنوان الفرعي' : 'Subtitle'}</Label>
                    <Input
                      value={contentData.sectionSubtitle?.[lang] || ''}
                      onChange={(e) => handleFieldChange('sectionSubtitle', e.target.value, lang)}
                      dir={LANGUAGES[lang].direction}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Items List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {isRTL ? config.titleAr : config.titleEn} ({contentData.items?.length || 0})
                  </h3>
                  <Button onClick={addItem} size="sm">
                    <Plus size={16} className="mr-1" />
                    {isRTL ? 'إضافة' : 'Add'}
                  </Button>
                </div>

                {contentData.items?.map((item: any, index: number) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div 
                      className="p-4 bg-gray-50 dark:bg-gray-800 cursor-pointer flex items-center justify-between"
                      onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                    >
                      <span className="font-medium">
                        {item.title?.[lang] || item.name || item.question?.[lang] || `#${index + 1}`}
                      </span>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={(e) => { e.stopPropagation(); moveItem(item.id, 'up'); }}
                          disabled={index === 0}
                        >
                          <ChevronUp size={16} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={(e) => { e.stopPropagation(); moveItem(item.id, 'down'); }}
                          disabled={index === contentData.items.length - 1}
                        >
                          <ChevronDown size={16} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-red-500 hover:text-red-700"
                          onClick={(e) => { e.stopPropagation(); removeItem(item.id); }}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>

                    {expandedItem === item.id && (
                      <CardContent className="p-4 space-y-4">
                        {config.itemFields.map(field => (
                          <div key={field.key} className="space-y-2">
                            <Label>{isRTL ? field.labelAr : field.labelEn}</Label>
                            {field.type === 'textarea' ? (
                              <Textarea
                                value={field.multilingual ? item[field.key]?.[lang] || '' : item[field.key] || ''}
                                onChange={(e) => handleItemChange(item.id, field.key, e.target.value, field.multilingual ? lang : undefined)}
                                rows={3}
                                dir={field.multilingual ? LANGUAGES[lang].direction : 'ltr'}
                              />
                            ) : field.type === 'image' ? (
                              <div className="flex gap-4 items-start">
                                {item[field.key] && (
                                  <img src={item[field.key]} alt="" className="w-16 h-16 object-cover rounded-lg border" />
                                )}
                                <div className="flex-1 space-y-2">
                                  <Input
                                    value={item[field.key] || ''}
                                    onChange={(e) => handleItemChange(item.id, field.key, e.target.value)}
                                    dir="ltr"
                                  />
                                  <label className="cursor-pointer">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="hidden"
                                      onChange={(e) => handleImageUpload(e, item.id, field.key)}
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
                            ) : (
                              <Input
                                type={field.type === 'number' ? 'number' : 'text'}
                                value={field.multilingual ? item[field.key]?.[lang] || '' : item[field.key] || ''}
                                onChange={(e) => handleItemChange(
                                  item.id, 
                                  field.key, 
                                  field.type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value, 
                                  field.multilingual ? lang : undefined
                                )}
                                dir={field.multilingual ? LANGUAGES[lang].direction : 'ltr'}
                              />
                            )}
                          </div>
                        ))}
                      </CardContent>
                    )}
                  </Card>
                ))}

                {(!contentData.items || contentData.items.length === 0) && (
                  <Card className="p-8 text-center">
                    <p className="text-gray-500 mb-4">
                      {isRTL ? 'لا توجد عناصر بعد' : 'No items yet'}
                    </p>
                    <Button onClick={addItem}>
                      <Plus size={16} className="mr-1" />
                      {isRTL ? 'إضافة الأول' : 'Add First'}
                    </Button>
                  </Card>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        // Content without items (contact, chat settings)
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
            <TabsContent key={lang} value={lang}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {isRTL ? config.titleAr : config.titleEn}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {config.sectionFields?.map(field => (
                    <div key={field.key} className="space-y-2">
                      <Label>{isRTL ? field.labelAr : field.labelEn}</Label>
                      {field.type === 'textarea' ? (
                        <Textarea
                          value={field.multilingual ? contentData[field.key]?.[lang] || '' : contentData[field.key] || ''}
                          onChange={(e) => handleFieldChange(field.key, e.target.value, field.multilingual ? lang : undefined)}
                          rows={3}
                          dir={field.multilingual ? LANGUAGES[lang].direction : 'ltr'}
                        />
                      ) : field.type === 'switch' ? (
                        <Switch
                          checked={contentData[field.key] || false}
                          onCheckedChange={(checked) => handleFieldChange(field.key, checked)}
                        />
                      ) : (
                        <Input
                          value={field.multilingual ? contentData[field.key]?.[lang] || '' : contentData[field.key] || ''}
                          onChange={(e) => handleFieldChange(field.key, e.target.value, field.multilingual ? lang : undefined)}
                          dir={field.multilingual ? LANGUAGES[lang].direction : 'ltr'}
                        />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}
