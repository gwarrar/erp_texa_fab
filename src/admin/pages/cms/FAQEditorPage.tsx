import React, { useState } from 'react';
import { 
  HelpCircle, 
  Plus, 
  Edit, 
  Trash2, 
  GripVertical,
  Save,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Search
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useI18n } from '@/lib/i18n';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
  id: string;
  questionEn: string;
  questionAr: string;
  answerEn: string;
  answerAr: string;
  category: string;
  enabled: boolean;
  order: number;
}

const categories = [
  { id: 'general', nameEn: 'General', nameAr: 'عام' },
  { id: 'pricing', nameEn: 'Pricing', nameAr: 'التسعير' },
  { id: 'features', nameEn: 'Features', nameAr: 'الميزات' },
  { id: 'support', nameEn: 'Support', nameAr: 'الدعم' },
  { id: 'integration', nameEn: 'Integration', nameAr: 'التكامل' },
];

const mockFAQs: FAQ[] = [
  {
    id: '1',
    questionEn: 'What is TexaFab?',
    questionAr: 'ما هو TexaFab؟',
    answerEn: 'TexaFab is a comprehensive Enterprise Resource Planning (ERP) solution designed specifically for the textile and fabric industry. It helps wholesalers and retailers manage inventory, sales, warehouses, and more.',
    answerAr: 'TexaFab هو حل شامل لتخطيط موارد المؤسسات (ERP) مصمم خصيصًا لصناعة النسيج والأقمشة. يساعد تجار الجملة والتجزئة في إدارة المخزون والمبيعات والمستودعات والمزيد.',
    category: 'general',
    enabled: true,
    order: 1
  },
  {
    id: '2',
    questionEn: 'How much does TexaFab cost?',
    questionAr: 'كم تكلفة TexaFab؟',
    answerEn: 'TexaFab offers flexible pricing starting at €299/month for the Starter plan, €599/month for Business, and custom pricing for Enterprise. All plans include a 14-day free trial.',
    answerAr: 'يقدم TexaFab أسعارًا مرنة تبدأ من 299 يورو/شهر للخطة المبتدئة، و599 يورو/شهر للأعمال، وأسعار مخصصة للمؤسسات. تتضمن جميع الخطط تجربة مجانية لمدة 14 يومًا.',
    category: 'pricing',
    enabled: true,
    order: 2
  },
  {
    id: '3',
    questionEn: 'Does TexaFab support RFID tracking?',
    questionAr: 'هل يدعم TexaFab تتبع RFID؟',
    answerEn: 'Yes! TexaFab fully supports RFID technology for tracking fabric rolls, inventory movements, and warehouse operations. This feature is available in Business and Enterprise plans.',
    answerAr: 'نعم! يدعم TexaFab بالكامل تقنية RFID لتتبع لفات الأقمشة وحركات المخزون وعمليات المستودعات. هذه الميزة متاحة في خطط الأعمال والمؤسسات.',
    category: 'features',
    enabled: true,
    order: 3
  },
  {
    id: '4',
    questionEn: 'What kind of support do you offer?',
    questionAr: 'ما نوع الدعم الذي تقدمونه؟',
    answerEn: 'We offer 24/7 email support for all plans, live chat support for Business plans, and dedicated account managers with priority phone support for Enterprise customers.',
    answerAr: 'نقدم دعم البريد الإلكتروني على مدار الساعة طوال أيام الأسبوع لجميع الخطط، ودعم الدردشة المباشرة لخطط الأعمال، ومديري حسابات مخصصين مع دعم هاتفي ذي أولوية لعملاء المؤسسات.',
    category: 'support',
    enabled: true,
    order: 4
  },
  {
    id: '5',
    questionEn: 'Can TexaFab integrate with my existing systems?',
    questionAr: 'هل يمكن لـ TexaFab التكامل مع أنظمتي الحالية؟',
    answerEn: 'TexaFab offers REST APIs and pre-built integrations with popular accounting software, e-commerce platforms, and shipping providers. Custom integrations are available for Enterprise customers.',
    answerAr: 'يقدم TexaFab واجهات برمجة تطبيقات REST وتكاملات جاهزة مع برامج المحاسبة الشائعة ومنصات التجارة الإلكترونية ومزودي الشحن. التكاملات المخصصة متاحة لعملاء المؤسسات.',
    category: 'integration',
    enabled: true,
    order: 5
  },
  {
    id: '6',
    questionEn: 'Is there a mobile app?',
    questionAr: 'هل يوجد تطبيق جوال؟',
    answerEn: 'Yes, TexaFab has native mobile apps for iOS and Android. The mobile app allows you to manage inventory, process sales, and track shipments on the go.',
    answerAr: 'نعم، لدى TexaFab تطبيقات أصلية للهواتف المحمولة لنظامي iOS و Android. يتيح لك التطبيق إدارة المخزون ومعالجة المبيعات وتتبع الشحنات أثناء التنقل.',
    category: 'features',
    enabled: true,
    order: 6
  },
];

export function FAQEditorPage() {
  const { t, isRTL, language } = useI18n();
  const [faqs, setFAQs] = useState<FAQ[]>(mockFAQs);
  const [isEditing, setIsEditing] = useState(false);
  const [editingFAQ, setEditingFAQ] = useState<FAQ | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = 
      faq.questionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.questionAr.includes(searchQuery) ||
      faq.answerEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answerAr.includes(searchQuery);
    
    const matchesCategory = filterCategory === 'all' || faq.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  const openEditDialog = (faq: FAQ) => {
    setEditingFAQ({ ...faq });
    setIsEditing(true);
  };

  const openNewDialog = () => {
    setEditingFAQ({
      id: `new-${Date.now()}`,
      questionEn: '',
      questionAr: '',
      answerEn: '',
      answerAr: '',
      category: 'general',
      enabled: true,
      order: faqs.length + 1
    });
    setIsEditing(true);
  };

  const saveFAQ = () => {
    if (!editingFAQ) return;
    
    setIsSaving(true);
    setTimeout(() => {
      if (faqs.find(f => f.id === editingFAQ.id)) {
        setFAQs(prev => prev.map(f => f.id === editingFAQ.id ? editingFAQ : f));
      } else {
        setFAQs(prev => [...prev, editingFAQ]);
      }
      setIsEditing(false);
      setEditingFAQ(null);
      setIsSaving(false);
    }, 500);
  };

  const deleteFAQ = (id: string) => {
    setFAQs(prev => prev.filter(f => f.id !== id));
  };

  const toggleFAQ = (id: string) => {
    setFAQs(prev => prev.map(f => 
      f.id === id ? { ...f, enabled: !f.enabled } : f
    ));
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return language === 'ar' ? category?.nameAr : category?.nameEn;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-teal-600" />
            {language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ Management'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {language === 'ar' ? 'إدارة الأسئلة والأجوبة الشائعة' : 'Manage frequently asked questions'}
          </p>
        </div>
        <Button onClick={openNewDialog} className="bg-teal-600 hover:bg-teal-700">
          <Plus className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
          {t.common.add} {language === 'ar' ? 'سؤال' : 'Question'}
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400`} />
              <Input
                placeholder={t.common.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={isRTL ? 'pr-10' : 'pl-10'}
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={language === 'ar' ? 'الفئة' : 'Category'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{language === 'ar' ? 'جميع الفئات' : 'All Categories'}</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {language === 'ar' ? category.nameAr : category.nameEn}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* FAQs List */}
      <Card>
        <CardHeader>
          <CardTitle>{language === 'ar' ? 'قائمة الأسئلة' : 'Questions List'} ({filteredFAQs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="space-y-2">
            {filteredFAQs.sort((a, b) => a.order - b.order).map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className={`border rounded-lg px-4 ${!faq.enabled ? 'opacity-60' : ''}`}
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex-1 text-left">
                      <p className="font-medium text-gray-900 dark:text-white">
                        {language === 'ar' ? faq.questionAr : faq.questionEn}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {getCategoryName(faq.category)}
                        </Badge>
                        {!faq.enabled && (
                          <Badge variant="secondary" className="text-xs">
                            {t.common.disabled}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2 pb-4">
                    <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
                      {language === 'ar' ? faq.answerAr : faq.answerEn}
                    </p>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => openEditDialog(faq)}
                      >
                        <Edit className="h-3 w-3 mr-1" />
                        {t.common.edit}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => toggleFAQ(faq.id)}
                      >
                        {faq.enabled ? t.common.disable : t.common.enable}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => deleteFAQ(faq.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingFAQ?.id.startsWith('new') 
                ? (language === 'ar' ? 'إضافة سؤال جديد' : 'Add New Question')
                : (language === 'ar' ? 'تعديل السؤال' : 'Edit Question')}
            </DialogTitle>
          </DialogHeader>
          {editingFAQ && (
            <div className="grid gap-4 py-4">
              {/* Question */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>{language === 'ar' ? 'السؤال (إنجليزي)' : 'Question (English)'}</Label>
                  <Input 
                    value={editingFAQ.questionEn}
                    onChange={(e) => setEditingFAQ({ ...editingFAQ, questionEn: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>{language === 'ar' ? 'السؤال (عربي)' : 'Question (Arabic)'}</Label>
                  <Input 
                    value={editingFAQ.questionAr}
                    onChange={(e) => setEditingFAQ({ ...editingFAQ, questionAr: e.target.value })}
                    dir="rtl"
                  />
                </div>
              </div>

              {/* Answer */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>{language === 'ar' ? 'الإجابة (إنجليزي)' : 'Answer (English)'}</Label>
                  <Textarea 
                    value={editingFAQ.answerEn}
                    onChange={(e) => setEditingFAQ({ ...editingFAQ, answerEn: e.target.value })}
                    className="min-h-[150px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label>{language === 'ar' ? 'الإجابة (عربي)' : 'Answer (Arabic)'}</Label>
                  <Textarea 
                    value={editingFAQ.answerAr}
                    onChange={(e) => setEditingFAQ({ ...editingFAQ, answerAr: e.target.value })}
                    dir="rtl"
                    className="min-h-[150px]"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="grid gap-2">
                <Label>{language === 'ar' ? 'الفئة' : 'Category'}</Label>
                <Select 
                  value={editingFAQ.category} 
                  onValueChange={(value) => setEditingFAQ({ ...editingFAQ, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.id} value={category.id}>
                        {language === 'ar' ? category.nameAr : category.nameEn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Enabled */}
              <div className="flex items-center gap-2">
                <Switch 
                  checked={editingFAQ.enabled}
                  onCheckedChange={(checked) => setEditingFAQ({ ...editingFAQ, enabled: checked })}
                />
                <Label>{t.common.enabled}</Label>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              {t.common.cancel}
            </Button>
            <Button 
              onClick={saveFAQ} 
              disabled={isSaving}
              className="bg-teal-600 hover:bg-teal-700"
            >
              {isSaving ? (
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              {t.common.save}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
