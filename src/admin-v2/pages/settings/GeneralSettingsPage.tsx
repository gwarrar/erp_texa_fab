// ===========================================
// Admin V2 - General Settings Page
// ===========================================

import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminStore';
import { SITES, SiteId } from '../../types';
import { cn } from '@/lib/utils';
import {
  Settings,
  Globe,
  Bell,
  Mail,
  Save,
  Loader2,
  ExternalLink,
  Check
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

export function GeneralSettingsPage() {
  const { t, getDirection, currentSite, setCurrentSite } = useAdmin();
  const direction = getDirection();
  const isRTL = direction === 'rtl';

  const [isSaving, setIsSaving] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [defaultSite, setDefaultSite] = useState<SiteId>(currentSite);

  const handleSave = async () => {
    setIsSaving(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (defaultSite !== currentSite) {
      setCurrentSite(defaultSite);
    }
    
    toast.success(isRTL ? 'تم حفظ الإعدادات' : 'Settings saved');
    setIsSaving(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {isRTL ? 'الإعدادات العامة' : 'General Settings'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {isRTL ? 'تخصيص إعدادات لوحة التحكم' : 'Customize your admin panel preferences'}
          </p>
        </div>
        
        <Button 
          onClick={handleSave}
          disabled={isSaving}
          className="gap-2 bg-emerald-600 hover:bg-emerald-700"
        >
          {isSaving ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Save size={18} />
          )}
          {t('admin.save')}
        </Button>
      </div>

      {/* Default Site */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe size={20} />
            {isRTL ? 'الموقع الافتراضي' : 'Default Site'}
          </CardTitle>
          <CardDescription>
            {isRTL ? 'اختر الموقع الذي يظهر افتراضياً عند فتح لوحة التحكم' : 'Choose the site to show by default when opening the admin panel'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.values(SITES).map((site) => (
              <div
                key={site.id}
                onClick={() => setDefaultSite(site.id)}
                className={cn(
                  "relative p-4 rounded-xl border-2 cursor-pointer transition-all",
                  defaultSite === site.id
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                )}
              >
                {defaultSite === site.id && (
                  <div className="absolute top-2 right-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </div>
                  </div>
                )}
                
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mb-2"
                  style={{ backgroundColor: site.primaryColor }}
                >
                  {site.name.charAt(0)}
                </div>
                
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {isRTL ? site.nameAr : site.name}
                </h3>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell size={20} />
            {isRTL ? 'الإشعارات' : 'Notifications'}
          </CardTitle>
          <CardDescription>
            {isRTL ? 'إدارة تفضيلات الإشعارات' : 'Manage your notification preferences'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">
                {isRTL ? 'إشعارات البريد الإلكتروني' : 'Email Notifications'}
              </Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {isRTL ? 'استلام إشعارات عبر البريد الإلكتروني' : 'Receive notifications via email'}
              </p>
            </div>
            <Switch
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">
                {isRTL ? 'إشعارات المتصفح' : 'Push Notifications'}
              </Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {isRTL ? 'استلام إشعارات في المتصفح' : 'Receive browser push notifications'}
              </p>
            </div>
            <Switch
              checked={pushNotifications}
              onCheckedChange={setPushNotifications}
            />
          </div>
        </CardContent>
      </Card>

      {/* Editor Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings size={20} />
            {isRTL ? 'إعدادات المحرر' : 'Editor Settings'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">
                {isRTL ? 'الحفظ التلقائي' : 'Auto Save'}
              </Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {isRTL ? 'حفظ التغييرات تلقائياً أثناء التحرير' : 'Automatically save changes while editing'}
              </p>
            </div>
            <Switch
              checked={autoSave}
              onCheckedChange={setAutoSave}
            />
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle>{isRTL ? 'روابط سريعة' : 'Quick Links'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.values(SITES).map((site) => (
              <a
                key={site.id}
                href={`/${site.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: site.primaryColor }}
                  >
                    {site.name.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {isRTL ? site.nameAr : site.name}
                  </span>
                </div>
                <ExternalLink size={16} className="text-gray-400" />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Info */}
      <Card>
        <CardHeader>
          <CardTitle>{isRTL ? 'معلومات النظام' : 'System Information'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              <span className="text-gray-500">{isRTL ? 'الإصدار' : 'Version'}</span>
              <span className="font-medium text-gray-900 dark:text-white">2.0.0</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              <span className="text-gray-500">{isRTL ? 'البيئة' : 'Environment'}</span>
              <span className="font-medium text-gray-900 dark:text-white">Production</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">{isRTL ? 'آخر تحديث' : 'Last Updated'}</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {new Date().toLocaleDateString()}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
