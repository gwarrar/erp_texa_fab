// ===========================================
// Admin V2 - Language Settings Page
// ===========================================

import React from 'react';
import { useAdmin } from '../../context/AdminStore';
import { LANGUAGES, LanguageCode } from '../../types';
import { cn } from '@/lib/utils';
import {
  Languages,
  Check,
  Globe
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function LanguageSettingsPage() {
  const { adminLanguage, setAdminLanguage, t, getDirection } = useAdmin();
  const direction = getDirection();
  const isRTL = direction === 'rtl';

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {isRTL ? 'إعدادات اللغة' : 'Language Settings'}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          {isRTL ? 'تغيير لغة واجهة لوحة التحكم' : 'Change the admin panel interface language'}
        </p>
      </div>

      {/* Admin Language Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages size={20} />
            {isRTL ? 'لغة لوحة التحكم' : 'Admin Panel Language'}
          </CardTitle>
          <CardDescription>
            {isRTL 
              ? 'هذه اللغة تؤثر على واجهة لوحة التحكم فقط، وليس محتوى المواقع' 
              : 'This affects the admin interface only, not the site content'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Object.values(LANGUAGES).map((lang) => (
              <div
                key={lang.code}
                onClick={() => setAdminLanguage(lang.code)}
                className={cn(
                  "relative p-4 rounded-xl border-2 cursor-pointer transition-all",
                  adminLanguage === lang.code
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                )}
              >
                {adminLanguage === lang.code && (
                  <div className={cn(
                    "absolute top-2",
                    lang.direction === 'rtl' ? "left-2" : "right-2"
                  )}>
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </div>
                  </div>
                )}
                
                <div className="text-3xl mb-2">{lang.flag}</div>
                
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {lang.nativeName}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {lang.name}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {lang.direction === 'rtl' ? 'RTL' : 'LTR'}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Language Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe size={20} />
            {isRTL ? 'معلومات اللغات' : 'Language Information'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
                {isRTL ? 'لغة لوحة التحكم' : 'Admin Panel Language'}
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                {isRTL 
                  ? 'تؤثر على القوائم والأزرار والرسائل في لوحة التحكم فقط'
                  : 'Affects menus, buttons, and messages in the admin panel only'}
              </p>
            </div>
            
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <h4 className="font-medium text-amber-800 dark:text-amber-300 mb-2">
                {isRTL ? 'لغة المحتوى' : 'Content Language'}
              </h4>
              <p className="text-sm text-amber-600 dark:text-amber-400">
                {isRTL 
                  ? 'يمكنك تغيير لغة المحتوى من شريط الرأس عند تعديل محتوى أي موقع'
                  : 'You can change content language from the header bar when editing any site content'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
