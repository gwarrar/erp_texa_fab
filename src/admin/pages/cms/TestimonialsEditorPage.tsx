import React, { useState } from 'react';
import { 
  MessageSquare, 
  Plus, 
  Edit, 
  Trash2, 
  Star,
  Save,
  RefreshCw,
  User,
  Building,
  Quote
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useI18n } from '@/lib/i18n';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Testimonial {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  companyEn: string;
  companyAr: string;
  quoteEn: string;
  quoteAr: string;
  rating: number;
  enabled: boolean;
  avatarColor: string;
}

const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    nameEn: 'Ahmed Al-Rashid',
    nameAr: 'أحمد الراشد',
    roleEn: 'Operations Director',
    roleAr: 'مدير العمليات',
    companyEn: 'Gulf Textiles LLC',
    companyAr: 'غولف للنسيج',
    quoteEn: 'TexaFab transformed our warehouse operations. We reduced inventory errors by 95% and improved order fulfillment by 40%.',
    quoteAr: 'غيّر TexaFab عمليات المستودع لدينا. قللنا أخطاء المخزون بنسبة 95% وحسّنا تلبية الطلبات بنسبة 40%.',
    rating: 5,
    enabled: true,
    avatarColor: 'from-blue-500 to-cyan-500'
  },
  {
    id: '2',
    nameEn: 'Sarah Mueller',
    nameAr: 'سارة مولر',
    roleEn: 'CEO',
    roleAr: 'الرئيس التنفيذي',
    companyEn: 'European Fabric House',
    companyAr: 'بيت الأقمشة الأوروبي',
    quoteEn: 'The best investment we made in 10 years. ROI was achieved in just 6 months.',
    quoteAr: 'أفضل استثمار قمنا به في 10 سنوات. تم تحقيق العائد على الاستثمار في 6 أشهر فقط.',
    rating: 5,
    enabled: true,
    avatarColor: 'from-purple-500 to-pink-500'
  },
  {
    id: '3',
    nameEn: 'Mohammed Hassan',
    nameAr: 'محمد حسن',
    roleEn: 'Supply Chain Manager',
    roleAr: 'مدير سلسلة التوريد',
    companyEn: 'Cairo Fabric Trading',
    companyAr: 'القاهرة لتجارة الأقمشة',
    quoteEn: 'Container tracking feature alone saved us thousands in demurrage fees.',
    quoteAr: 'ميزة تتبع الحاويات وحدها وفرت لنا آلاف الدولارات في رسوم التأخير.',
    rating: 5,
    enabled: true,
    avatarColor: 'from-emerald-500 to-teal-500'
  },
  {
    id: '4',
    nameEn: 'Fatima Al-Sayed',
    nameAr: 'فاطمة السيد',
    roleEn: 'Retail Manager',
    roleAr: 'مديرة التجزئة',
    companyEn: 'Saudi Fabric Center',
    companyAr: 'مركز الأقمشة السعودي',
    quoteEn: 'The POS system is incredibly fast and our staff learned it in just one day.',
    quoteAr: 'نظام نقاط البيع سريع بشكل لا يصدق وتعلمه فريقنا في يوم واحد فقط.',
    rating: 4,
    enabled: true,
    avatarColor: 'from-orange-500 to-red-500'
  },
];

export function TestimonialsEditorPage() {
  const { t, isRTL, language } = useI18n();
  const [testimonials, setTestimonials] = useState<Testimonial[]>(mockTestimonials);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const avatarColors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-emerald-500 to-teal-500',
    'from-orange-500 to-red-500',
    'from-yellow-500 to-orange-500',
    'from-indigo-500 to-purple-500',
  ];

  const openEditDialog = (testimonial: Testimonial) => {
    setEditingTestimonial({ ...testimonial });
    setIsEditing(true);
  };

  const openNewDialog = () => {
    setEditingTestimonial({
      id: `new-${Date.now()}`,
      nameEn: '',
      nameAr: '',
      roleEn: '',
      roleAr: '',
      companyEn: '',
      companyAr: '',
      quoteEn: '',
      quoteAr: '',
      rating: 5,
      enabled: true,
      avatarColor: avatarColors[Math.floor(Math.random() * avatarColors.length)]
    });
    setIsEditing(true);
  };

  const saveTestimonial = () => {
    if (!editingTestimonial) return;
    
    setIsSaving(true);
    setTimeout(() => {
      if (testimonials.find(t => t.id === editingTestimonial.id)) {
        setTestimonials(prev => prev.map(t => t.id === editingTestimonial.id ? editingTestimonial : t));
      } else {
        setTestimonials(prev => [...prev, editingTestimonial]);
      }
      setIsEditing(false);
      setEditingTestimonial(null);
      setIsSaving(false);
    }, 500);
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  const toggleTestimonial = (id: string) => {
    setTestimonials(prev => prev.map(t => 
      t.id === id ? { ...t, enabled: !t.enabled } : t
    ));
  };

  const renderStars = (rating: number, interactive = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={() => {
              if (interactive && editingTestimonial) {
                setEditingTestimonial({ ...editingTestimonial, rating: star });
              }
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t.cms.testimonials}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {language === 'ar' ? 'إدارة آراء العملاء وشهاداتهم' : 'Manage customer testimonials and reviews'}
          </p>
        </div>
        <Button onClick={openNewDialog} className="bg-teal-600 hover:bg-teal-700">
          <Plus className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
          {t.common.add} {language === 'ar' ? 'شهادة' : 'Testimonial'}
        </Button>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <Card 
            key={testimonial.id}
            className={`relative ${!testimonial.enabled ? 'opacity-60' : ''}`}
          >
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                {/* Quote */}
                <div className="relative">
                  <Quote className={`absolute ${isRTL ? '-right-1' : '-left-1'} -top-2 h-8 w-8 text-teal-200 dark:text-teal-800`} />
                  <p className={`text-gray-600 dark:text-gray-300 italic ${isRTL ? 'pr-8' : 'pl-8'}`}>
                    "{language === 'ar' ? testimonial.quoteAr : testimonial.quoteEn}"
                  </p>
                </div>

                {/* Rating */}
                <div className={isRTL ? 'pr-8' : 'pl-8'}>
                  {renderStars(testimonial.rating)}
                </div>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className={`bg-gradient-to-br ${testimonial.avatarColor} text-white`}>
                        {(language === 'ar' ? testimonial.nameAr : testimonial.nameEn).charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {language === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                      </p>
                      <p className="text-sm text-gray-500">
                        {language === 'ar' ? testimonial.roleAr : testimonial.roleEn} - {language === 'ar' ? testimonial.companyAr : testimonial.companyEn}
                      </p>
                    </div>
                  </div>
                  {!testimonial.enabled && (
                    <Badge variant="secondary">{t.common.disabled}</Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => openEditDialog(testimonial)}
                  >
                    <Edit className="h-3 w-3 mr-1" />
                    {t.common.edit}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => toggleTestimonial(testimonial.id)}
                  >
                    {testimonial.enabled ? t.common.disable : t.common.enable}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => deleteTestimonial(testimonial.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingTestimonial?.id.startsWith('new') 
                ? (language === 'ar' ? 'إضافة شهادة جديدة' : 'Add New Testimonial')
                : (language === 'ar' ? 'تعديل الشهادة' : 'Edit Testimonial')}
            </DialogTitle>
          </DialogHeader>
          {editingTestimonial && (
            <div className="grid gap-4 py-4">
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {language === 'ar' ? 'الاسم (إنجليزي)' : 'Name (English)'}
                  </Label>
                  <Input 
                    value={editingTestimonial.nameEn}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, nameEn: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {language === 'ar' ? 'الاسم (عربي)' : 'Name (Arabic)'}
                  </Label>
                  <Input 
                    value={editingTestimonial.nameAr}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, nameAr: e.target.value })}
                    dir="rtl"
                  />
                </div>
              </div>

              {/* Role */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>{language === 'ar' ? 'المنصب (إنجليزي)' : 'Role (English)'}</Label>
                  <Input 
                    value={editingTestimonial.roleEn}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, roleEn: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>{language === 'ar' ? 'المنصب (عربي)' : 'Role (Arabic)'}</Label>
                  <Input 
                    value={editingTestimonial.roleAr}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, roleAr: e.target.value })}
                    dir="rtl"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    {language === 'ar' ? 'الشركة (إنجليزي)' : 'Company (English)'}
                  </Label>
                  <Input 
                    value={editingTestimonial.companyEn}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, companyEn: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    {language === 'ar' ? 'الشركة (عربي)' : 'Company (Arabic)'}
                  </Label>
                  <Input 
                    value={editingTestimonial.companyAr}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, companyAr: e.target.value })}
                    dir="rtl"
                  />
                </div>
              </div>

              {/* Quote */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2">
                    <Quote className="h-4 w-4" />
                    {language === 'ar' ? 'الشهادة (إنجليزي)' : 'Quote (English)'}
                  </Label>
                  <Textarea 
                    value={editingTestimonial.quoteEn}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, quoteEn: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2">
                    <Quote className="h-4 w-4" />
                    {language === 'ar' ? 'الشهادة (عربي)' : 'Quote (Arabic)'}
                  </Label>
                  <Textarea 
                    value={editingTestimonial.quoteAr}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, quoteAr: e.target.value })}
                    dir="rtl"
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              {/* Rating */}
              <div className="grid gap-2">
                <Label>{language === 'ar' ? 'التقييم' : 'Rating'}</Label>
                {renderStars(editingTestimonial.rating, true)}
              </div>

              {/* Enabled */}
              <div className="flex items-center gap-2">
                <Switch 
                  checked={editingTestimonial.enabled}
                  onCheckedChange={(checked) => setEditingTestimonial({ ...editingTestimonial, enabled: checked })}
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
              onClick={saveTestimonial} 
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
