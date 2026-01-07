import React, { useState } from 'react';
import { 
  Zap, 
  Plus, 
  Edit, 
  Trash2, 
  GripVertical,
  Eye,
  Save,
  RefreshCw,
  Check,
  X,
  Image
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
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Feature {
  id: string;
  icon: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  enabled: boolean;
  order: number;
}

const mockFeatures: Feature[] = [
  {
    id: '1',
    icon: '📦',
    titleEn: 'Fabric Inventory Management',
    titleAr: 'إدارة مخزون الأقمشة',
    descriptionEn: 'Track fabric rolls, colors, patterns with RFID technology',
    descriptionAr: 'تتبع لفات الأقمشة والألوان والأنماط بتقنية RFID',
    enabled: true,
    order: 1
  },
  {
    id: '2',
    icon: '🏭',
    titleEn: 'Warehouse Management',
    titleAr: 'إدارة المستودعات',
    descriptionEn: 'Multi-location inventory with real-time stock levels',
    descriptionAr: 'مخزون متعدد المواقع مع مستويات المخزون الفعلية',
    enabled: true,
    order: 2
  },
  {
    id: '3',
    icon: '💳',
    titleEn: 'Point of Sale (POS)',
    titleAr: 'نقاط البيع',
    descriptionEn: 'Touch-friendly interface for retail operations',
    descriptionAr: 'واجهة سهلة اللمس لعمليات البيع بالتجزئة',
    enabled: true,
    order: 3
  },
  {
    id: '4',
    icon: '🚢',
    titleEn: 'Container Tracking',
    titleAr: 'تتبع الحاويات',
    descriptionEn: 'Track shipments from port to warehouse',
    descriptionAr: 'تتبع الشحنات من الميناء إلى المستودع',
    enabled: true,
    order: 4
  },
  {
    id: '5',
    icon: '👥',
    titleEn: 'Employee Management',
    titleAr: 'إدارة الموظفين',
    descriptionEn: 'HR, attendance, and performance tracking',
    descriptionAr: 'الموارد البشرية والحضور وتتبع الأداء',
    enabled: true,
    order: 5
  },
  {
    id: '6',
    icon: '🛒',
    titleEn: 'E-commerce Integration',
    titleAr: 'التكامل مع التجارة الإلكترونية',
    descriptionEn: 'Sync inventory with online stores',
    descriptionAr: 'مزامنة المخزون مع المتاجر الإلكترونية',
    enabled: true,
    order: 6
  },
  {
    id: '7',
    icon: '📊',
    titleEn: 'AI Analytics',
    titleAr: 'تحليلات الذكاء الاصطناعي',
    descriptionEn: 'Smart insights and predictive analytics',
    descriptionAr: 'رؤى ذكية وتحليلات تنبؤية',
    enabled: true,
    order: 7
  },
  {
    id: '8',
    icon: '📱',
    titleEn: 'Mobile App',
    titleAr: 'تطبيق الجوال',
    descriptionEn: 'Access your business from anywhere',
    descriptionAr: 'الوصول إلى عملك من أي مكان',
    enabled: false,
    order: 8
  },
];

export function FeaturesEditorPage() {
  const { t, isRTL, language } = useI18n();
  const [features, setFeatures] = useState<Feature[]>(mockFeatures);
  const [isEditing, setIsEditing] = useState(false);
  const [editingFeature, setEditingFeature] = useState<Feature | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const openEditDialog = (feature: Feature) => {
    setEditingFeature({ ...feature });
    setIsEditing(true);
  };

  const openNewDialog = () => {
    setEditingFeature({
      id: `new-${Date.now()}`,
      icon: '⭐',
      titleEn: '',
      titleAr: '',
      descriptionEn: '',
      descriptionAr: '',
      enabled: true,
      order: features.length + 1
    });
    setIsEditing(true);
  };

  const saveFeature = () => {
    if (!editingFeature) return;
    
    setIsSaving(true);
    setTimeout(() => {
      if (features.find(f => f.id === editingFeature.id)) {
        setFeatures(prev => prev.map(f => f.id === editingFeature.id ? editingFeature : f));
      } else {
        setFeatures(prev => [...prev, editingFeature]);
      }
      setIsEditing(false);
      setEditingFeature(null);
      setIsSaving(false);
    }, 500);
  };

  const deleteFeature = (id: string) => {
    setFeatures(prev => prev.filter(f => f.id !== id));
  };

  const toggleFeature = (id: string) => {
    setFeatures(prev => prev.map(f => 
      f.id === id ? { ...f, enabled: !f.enabled } : f
    ));
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t.cms.features}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {language === 'ar' ? 'إدارة الميزات المعروضة في الصفحة الرئيسية' : 'Manage features displayed on the landing page'}
          </p>
        </div>
        <Button onClick={openNewDialog} className="bg-teal-600 hover:bg-teal-700">
          <Plus className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
          {t.common.add} {language === 'ar' ? 'ميزة' : 'Feature'}
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.sort((a, b) => a.order - b.order).map((feature) => (
          <Card 
            key={feature.id}
            className={`relative ${!feature.enabled ? 'opacity-60' : ''}`}
          >
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{feature.icon}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {language === 'ar' ? feature.titleAr : feature.titleEn}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {language === 'ar' ? feature.descriptionAr : feature.descriptionEn}
                      </p>
                    </div>
                    {!feature.enabled && (
                      <Badge variant="secondary">
                        {t.common.disabled}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => openEditDialog(feature)}
                    >
                      <Edit className="h-3 w-3 mr-1" />
                      {t.common.edit}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toggleFeature(feature.id)}
                    >
                      {feature.enabled ? (
                        <>
                          <X className="h-3 w-3 mr-1" />
                          {t.common.disable}
                        </>
                      ) : (
                        <>
                          <Check className="h-3 w-3 mr-1" />
                          {t.common.enable}
                        </>
                      )}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => deleteFeature(feature.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {editingFeature?.id.startsWith('new') 
                ? (language === 'ar' ? 'إضافة ميزة جديدة' : 'Add New Feature')
                : (language === 'ar' ? 'تعديل الميزة' : 'Edit Feature')}
            </DialogTitle>
          </DialogHeader>
          {editingFeature && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>{language === 'ar' ? 'الأيقونة (Emoji)' : 'Icon (Emoji)'}</Label>
                <Input 
                  value={editingFeature.icon}
                  onChange={(e) => setEditingFeature({ ...editingFeature, icon: e.target.value })}
                  className="text-2xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>{language === 'ar' ? 'العنوان (إنجليزي)' : 'Title (English)'}</Label>
                  <Input 
                    value={editingFeature.titleEn}
                    onChange={(e) => setEditingFeature({ ...editingFeature, titleEn: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>{language === 'ar' ? 'العنوان (عربي)' : 'Title (Arabic)'}</Label>
                  <Input 
                    value={editingFeature.titleAr}
                    onChange={(e) => setEditingFeature({ ...editingFeature, titleAr: e.target.value })}
                    dir="rtl"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>{language === 'ar' ? 'الوصف (إنجليزي)' : 'Description (English)'}</Label>
                  <Textarea 
                    value={editingFeature.descriptionEn}
                    onChange={(e) => setEditingFeature({ ...editingFeature, descriptionEn: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>{language === 'ar' ? 'الوصف (عربي)' : 'Description (Arabic)'}</Label>
                  <Textarea 
                    value={editingFeature.descriptionAr}
                    onChange={(e) => setEditingFeature({ ...editingFeature, descriptionAr: e.target.value })}
                    dir="rtl"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Switch 
                  checked={editingFeature.enabled}
                  onCheckedChange={(checked) => setEditingFeature({ ...editingFeature, enabled: checked })}
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
              onClick={saveFeature} 
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
