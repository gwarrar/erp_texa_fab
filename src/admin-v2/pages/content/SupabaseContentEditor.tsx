// ===========================================
// Supabase Content Editor - Generic Editor for all content types
// ===========================================

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useAdmin } from '../../context/AdminStore';
import { SITES, SiteId, LanguageCode } from '../../types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Save, 
  Plus, 
  Trash2, 
  ArrowLeft, 
  GripVertical,
  Star,
  Eye,
  EyeOff,
  Upload,
  Image as ImageIcon,
  AlertCircle,
  CheckCircle2,
  Loader2
} from 'lucide-react';

// Content type configurations
const CONTENT_CONFIGS: Record<string, {
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  hasItems: boolean;
  fields: Array<{
    name: string;
    label: { en: string; ar: string };
    type: 'text' | 'textarea' | 'number' | 'switch' | 'image' | 'select' | 'rating';
    required?: boolean;
    options?: { value: string; label: { en: string; ar: string } }[];
  }>;
}> = {
  testimonials: {
    title: { en: 'Testimonials', ar: 'آراء العملاء' },
    description: { en: 'Manage customer testimonials', ar: 'إدارة آراء العملاء' },
    hasItems: true,
    fields: [
      { name: 'author_name', label: { en: 'Author Name', ar: 'اسم الكاتب' }, type: 'text', required: true },
      { name: 'author_role', label: { en: 'Role/Position', ar: 'المنصب' }, type: 'text' },
      { name: 'author_company', label: { en: 'Company', ar: 'الشركة' }, type: 'text' },
      { name: 'content', label: { en: 'Testimonial', ar: 'الشهادة' }, type: 'textarea', required: true },
      { name: 'author_avatar', label: { en: 'Avatar URL', ar: 'صورة الكاتب' }, type: 'image' },
      { name: 'rating', label: { en: 'Rating (1-5)', ar: 'التقييم' }, type: 'number' },
      { name: 'featured', label: { en: 'Featured', ar: 'مميز' }, type: 'switch' },
      { name: 'active', label: { en: 'Active', ar: 'مفعل' }, type: 'switch' },
    ]
  },
  news: {
    title: { en: 'News & Articles', ar: 'الأخبار والمقالات' },
    description: { en: 'Manage news and blog posts', ar: 'إدارة الأخبار والمقالات' },
    hasItems: true,
    fields: [
      { name: 'title', label: { en: 'Title', ar: 'العنوان' }, type: 'text', required: true },
      { name: 'slug', label: { en: 'URL Slug', ar: 'الرابط' }, type: 'text' },
      { name: 'excerpt', label: { en: 'Excerpt', ar: 'مقتطف' }, type: 'textarea' },
      { name: 'content', label: { en: 'Content', ar: 'المحتوى' }, type: 'textarea', required: true },
      { name: 'image', label: { en: 'Image', ar: 'الصورة' }, type: 'image' },
      { name: 'category', label: { en: 'Category', ar: 'التصنيف' }, type: 'text' },
      { name: 'author', label: { en: 'Author', ar: 'الكاتب' }, type: 'text' },
      { name: 'featured', label: { en: 'Featured', ar: 'مميز' }, type: 'switch' },
      { name: 'active', label: { en: 'Published', ar: 'منشور' }, type: 'switch' },
    ]
  },
  solutions: {
    title: { en: 'Solutions', ar: 'الحلول' },
    description: { en: 'Manage solutions and services', ar: 'إدارة الحلول والخدمات' },
    hasItems: true,
    fields: [
      { name: 'title', label: { en: 'Title', ar: 'العنوان' }, type: 'text', required: true },
      { name: 'description', label: { en: 'Description', ar: 'الوصف' }, type: 'textarea' },
      { name: 'icon', label: { en: 'Icon', ar: 'الأيقونة' }, type: 'text' },
      { name: 'image', label: { en: 'Image', ar: 'الصورة' }, type: 'image' },
      { name: 'link', label: { en: 'Link', ar: 'الرابط' }, type: 'text' },
      { name: 'active', label: { en: 'Active', ar: 'مفعل' }, type: 'switch' },
    ]
  },
  faq: {
    title: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
    description: { en: 'Manage frequently asked questions', ar: 'إدارة الأسئلة الشائعة' },
    hasItems: true,
    fields: [
      { name: 'question', label: { en: 'Question', ar: 'السؤال' }, type: 'text', required: true },
      { name: 'answer', label: { en: 'Answer', ar: 'الجواب' }, type: 'textarea', required: true },
      { name: 'category', label: { en: 'Category', ar: 'التصنيف' }, type: 'text' },
      { name: 'active', label: { en: 'Active', ar: 'مفعل' }, type: 'switch' },
    ]
  },
  contact: {
    title: { en: 'Contact Information', ar: 'معلومات التواصل' },
    description: { en: 'Manage contact details', ar: 'إدارة معلومات التواصل' },
    hasItems: false,
    fields: [
      { name: 'email', label: { en: 'Email', ar: 'البريد الإلكتروني' }, type: 'text' },
      { name: 'phone', label: { en: 'Phone', ar: 'الهاتف' }, type: 'text' },
      { name: 'address', label: { en: 'Address', ar: 'العنوان' }, type: 'textarea' },
      { name: 'working_hours', label: { en: 'Working Hours', ar: 'ساعات العمل' }, type: 'text' },
      { name: 'map_url', label: { en: 'Map URL', ar: 'رابط الخريطة' }, type: 'text' },
      { name: 'facebook', label: { en: 'Facebook', ar: 'فيسبوك' }, type: 'text' },
      { name: 'twitter', label: { en: 'Twitter/X', ar: 'تويتر' }, type: 'text' },
      { name: 'linkedin', label: { en: 'LinkedIn', ar: 'لينكد إن' }, type: 'text' },
      { name: 'instagram', label: { en: 'Instagram', ar: 'انستغرام' }, type: 'text' },
      { name: 'whatsapp', label: { en: 'WhatsApp', ar: 'واتساب' }, type: 'text' },
    ]
  },
  chat: {
    title: { en: 'Chat Settings', ar: 'إعدادات المحادثة' },
    description: { en: 'Configure chat widget', ar: 'تكوين أداة المحادثة' },
    hasItems: false,
    fields: [
      { name: 'enabled', label: { en: 'Enabled', ar: 'مفعل' }, type: 'switch' },
      { name: 'provider', label: { en: 'Provider', ar: 'المزود' }, type: 'select', options: [
        { value: 'whatsapp', label: { en: 'WhatsApp', ar: 'واتساب' } },
        { value: 'tawk', label: { en: 'Tawk.to', ar: 'Tawk.to' } },
        { value: 'crisp', label: { en: 'Crisp', ar: 'Crisp' } },
      ]},
      { name: 'whatsapp_number', label: { en: 'WhatsApp Number', ar: 'رقم الواتساب' }, type: 'text' },
      { name: 'welcome_message_en', label: { en: 'Welcome Message (EN)', ar: 'رسالة الترحيب (إنجليزي)' }, type: 'textarea' },
      { name: 'welcome_message_ar', label: { en: 'Welcome Message (AR)', ar: 'رسالة الترحيب (عربي)' }, type: 'textarea' },
      { name: 'auto_reply_enabled', label: { en: 'Auto Reply', ar: 'الرد التلقائي' }, type: 'switch' },
    ]
  },
};

export default function SupabaseContentEditor() {
  const { siteId } = useParams<{ siteId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract content type from URL path (e.g., /admin-v2/sites/texafab/content/testimonials -> testimonials)
  const pathParts = location.pathname.split('/');
  const contentType = pathParts[pathParts.length - 1];
  const { 
    setCurrentSite, 
    currentContentLanguage,
    setContentLanguage,
    getSiteSupportedLanguages,
    loadContentFromSupabase,
    saveContentToSupabase,
    deleteContentFromSupabase,
    isLoading,
    isSaving,
    getDirection,
    adminLanguage,
    t
  } = useAdmin();

  const [items, setItems] = useState<any[]>([]);
  const [singleData, setSingleData] = useState<any>({});
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const config = contentType ? CONTENT_CONFIGS[contentType] : null;
  const site = siteId ? SITES[siteId as SiteId] : null;
  const supportedLanguages = getSiteSupportedLanguages();
  const direction = getDirection();
  const isRTL = direction === 'rtl';

  // Load content on mount and when language changes
  useEffect(() => {
    if (siteId && SITES[siteId as SiteId] && contentType && config) {
      setCurrentSite(siteId as SiteId);
      loadContent();
    }
  }, [siteId, contentType, currentContentLanguage]);

  const loadContent = async () => {
    if (!contentType) return;
    
    try {
      const data = await loadContentFromSupabase(contentType, currentContentLanguage);
      
      if (config?.hasItems) {
        setItems(Array.isArray(data) ? data : []);
      } else {
        setSingleData(data || {});
      }
      setStatusMessage(null);
    } catch (error) {
      console.error('Error loading content:', error);
      setStatusMessage({ type: 'error', message: 'Failed to load content' });
    }
  };

  const handleSave = async (data: any) => {
    if (!contentType) return;

    const success = await saveContentToSupabase(contentType, data, currentContentLanguage);
    
    if (success) {
      setStatusMessage({ type: 'success', message: isRTL ? 'تم الحفظ بنجاح' : 'Saved successfully' });
      setShowForm(false);
      setEditingItem(null);
      await loadContent();
    } else {
      setStatusMessage({ type: 'error', message: isRTL ? 'فشل الحفظ' : 'Failed to save' });
    }
  };

  const handleDelete = async (id: string) => {
    if (!contentType) return;
    
    if (!confirm(isRTL ? 'هل أنت متأكد من الحذف؟' : 'Are you sure you want to delete this item?')) {
      return;
    }

    const success = await deleteContentFromSupabase(contentType, id);
    
    if (success) {
      setStatusMessage({ type: 'success', message: isRTL ? 'تم الحذف بنجاح' : 'Deleted successfully' });
      await loadContent();
    } else {
      setStatusMessage({ type: 'error', message: isRTL ? 'فشل الحذف' : 'Failed to delete' });
    }
  };

  const handleAddNew = () => {
    const defaultData: any = { active: true };
    config?.fields.forEach(field => {
      if (field.type === 'switch') {
        defaultData[field.name] = field.name === 'active' ? true : false;
      } else if (field.type === 'number') {
        defaultData[field.name] = field.name === 'rating' ? 5 : 0;
      } else {
        defaultData[field.name] = '';
      }
    });
    setEditingItem(defaultData);
    setShowForm(true);
  };

  const handleEdit = (item: any) => {
    setEditingItem({ ...item });
    setShowForm(true);
  };

  if (!config || !site) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">
          {isRTL ? 'نوع المحتوى غير موجود' : 'Content type not found'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6" dir={direction}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">
              {config.title[adminLanguage as 'en' | 'ar'] || config.title.en}
            </h1>
            <p className="text-muted-foreground">
              {site.name} • {config.description[adminLanguage as 'en' | 'ar'] || config.description.en}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Tabs */}
          <Tabs value={currentContentLanguage} onValueChange={(v) => setContentLanguage(v as LanguageCode)}>
            <TabsList>
              {supportedLanguages.map((lang) => (
                <TabsTrigger key={lang} value={lang}>
                  {lang.toUpperCase()}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {config.hasItems && (
            <Button onClick={handleAddNew}>
              <Plus className="h-4 w-4 mr-2" />
              {isRTL ? 'إضافة جديد' : 'Add New'}
            </Button>
          )}
        </div>
      </div>

      {/* Status Message */}
      {statusMessage && (
        <div className={`flex items-center gap-2 p-4 rounded-lg ${
          statusMessage.type === 'success' 
            ? 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300' 
            : 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300'
        }`}>
          {statusMessage.type === 'success' ? (
            <CheckCircle2 className="h-5 w-5" />
          ) : (
            <AlertCircle className="h-5 w-5" />
          )}
          <span>{statusMessage.message}</span>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      {/* Content */}
      {!isLoading && (
        <>
          {config.hasItems ? (
            // Items List
            <div className="space-y-4">
              {items.length === 0 ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <p className="text-muted-foreground mb-4">
                      {isRTL ? 'لا توجد عناصر بعد' : 'No items yet'}
                    </p>
                    <Button onClick={handleAddNew}>
                      <Plus className="h-4 w-4 mr-2" />
                      {isRTL ? 'إضافة أول عنصر' : 'Add First Item'}
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                items.map((item) => (
                  <Card key={item.id} className={`${!item.active ? 'opacity-60' : ''}`}>
                    <CardContent className="flex items-center justify-between py-4">
                      <div className="flex items-center gap-4">
                        <GripVertical className="h-5 w-5 text-muted-foreground cursor-move" />
                        
                        {item.image || item.author_avatar ? (
                          <img 
                            src={item.image || item.author_avatar} 
                            alt="" 
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                            <ImageIcon className="h-6 w-6 text-muted-foreground" />
                          </div>
                        )}
                        
                        <div>
                          <h3 className="font-medium">
                            {item.title || item.author_name || item.question || 'Untitled'}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {item.excerpt || item.content || item.description || item.answer || ''}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {item.featured && (
                          <Badge variant="secondary">
                            <Star className="h-3 w-3 mr-1" />
                            {isRTL ? 'مميز' : 'Featured'}
                          </Badge>
                        )}
                        
                        {item.active ? (
                          <Eye className="h-4 w-4 text-green-500" />
                        ) : (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        )}

                        <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>
                          {isRTL ? 'تعديل' : 'Edit'}
                        </Button>
                        
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-destructive"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          ) : (
            // Single Form (contact, chat)
            <Card>
              <CardHeader>
                <CardTitle>{config.title[adminLanguage as 'en' | 'ar'] || config.title.en}</CardTitle>
                <CardDescription>
                  {config.description[adminLanguage as 'en' | 'ar'] || config.description.en}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContentForm
                  fields={config.fields}
                  data={singleData}
                  onSave={handleSave}
                  isSaving={isSaving}
                  adminLanguage={adminLanguage}
                  isRTL={isRTL}
                />
              </CardContent>
            </Card>
          )}
        </>
      )}

      {/* Edit/Add Modal */}
      {showForm && editingItem && config.hasItems && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>
                {editingItem.id 
                  ? (isRTL ? 'تعديل' : 'Edit')
                  : (isRTL ? 'إضافة جديد' : 'Add New')
                }
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ContentForm
                fields={config.fields}
                data={editingItem}
                onSave={handleSave}
                onCancel={() => {
                  setShowForm(false);
                  setEditingItem(null);
                }}
                isSaving={isSaving}
                adminLanguage={adminLanguage}
                isRTL={isRTL}
              />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

// Form Component
function ContentForm({ 
  fields, 
  data, 
  onSave, 
  onCancel, 
  isSaving, 
  adminLanguage,
  isRTL 
}: {
  fields: any[];
  data: any;
  onSave: (data: any) => void;
  onCancel?: () => void;
  isSaving: boolean;
  adminLanguage: string;
  isRTL: boolean;
}) {
  const [formData, setFormData] = useState(data);

  const handleChange = (name: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <Label htmlFor={field.name}>
            {field.label[adminLanguage as 'en' | 'ar'] || field.label.en}
            {field.required && <span className="text-destructive ml-1">*</span>}
          </Label>

          {field.type === 'text' && (
            <Input
              id={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
              required={field.required}
              dir={isRTL ? 'rtl' : 'ltr'}
            />
          )}

          {field.type === 'textarea' && (
            <Textarea
              id={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
              required={field.required}
              rows={4}
              dir={isRTL ? 'rtl' : 'ltr'}
            />
          )}

          {field.type === 'number' && (
            <Input
              id={field.name}
              type="number"
              value={formData[field.name] || 0}
              onChange={(e) => handleChange(field.name, parseInt(e.target.value) || 0)}
              min={field.name === 'rating' ? 1 : 0}
              max={field.name === 'rating' ? 5 : undefined}
            />
          )}

          {field.type === 'switch' && (
            <div className="flex items-center gap-2">
              <Switch
                id={field.name}
                checked={formData[field.name] || false}
                onCheckedChange={(checked) => handleChange(field.name, checked)}
              />
              <span className="text-sm text-muted-foreground">
                {formData[field.name] 
                  ? (isRTL ? 'مفعل' : 'Enabled')
                  : (isRTL ? 'معطل' : 'Disabled')
                }
              </span>
            </div>
          )}

          {field.type === 'image' && (
            <div className="space-y-2">
              <Input
                id={field.name}
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={isRTL ? 'رابط الصورة' : 'Image URL'}
              />
              {formData[field.name] && (
                <img 
                  src={formData[field.name]} 
                  alt="" 
                  className="w-32 h-32 object-cover rounded-lg"
                />
              )}
            </div>
          )}

          {field.type === 'select' && (
            <select
              id={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2"
            >
              <option value="">{isRTL ? 'اختر...' : 'Select...'}</option>
              {field.options?.map((opt: any) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label[adminLanguage as 'en' | 'ar'] || opt.label.en}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}

      <div className="flex gap-4 pt-4">
        <Button type="submit" disabled={isSaving}>
          {isSaving ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              {isRTL ? 'جاري الحفظ...' : 'Saving...'}
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              {isRTL ? 'حفظ' : 'Save'}
            </>
          )}
        </Button>
        
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            {isRTL ? 'إلغاء' : 'Cancel'}
          </Button>
        )}
      </div>
    </form>
  );
}
