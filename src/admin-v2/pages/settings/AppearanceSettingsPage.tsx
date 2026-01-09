// ===========================================
// Admin V2 - Appearance Settings Page
// ===========================================

import React from 'react';
import { useAdmin } from '../../context/AdminStore';
import { cn } from '@/lib/utils';
import {
  Sun,
  Moon,
  Monitor,
  Palette,
  Check
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export function AppearanceSettingsPage() {
  const { theme, setTheme, t, getDirection } = useAdmin();
  const direction = getDirection();
  const isRTL = direction === 'rtl';

  const themes = [
    {
      id: 'light',
      icon: Sun,
      label: isRTL ? 'فاتح' : 'Light',
      description: isRTL ? 'وضع الإضاءة الكامل' : 'Full brightness mode'
    },
    {
      id: 'dark',
      icon: Moon,
      label: isRTL ? 'داكن' : 'Dark',
      description: isRTL ? 'مريح للعينين في الليل' : 'Easy on the eyes at night'
    },
    {
      id: 'system',
      icon: Monitor,
      label: isRTL ? 'النظام' : 'System',
      description: isRTL ? 'يتبع إعدادات جهازك' : 'Follows your device settings'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {isRTL ? 'إعدادات المظهر' : 'Appearance Settings'}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          {isRTL ? 'تخصيص مظهر لوحة التحكم' : 'Customize how your admin panel looks'}
        </p>
      </div>

      {/* Theme Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette size={20} />
            {isRTL ? 'السمة' : 'Theme'}
          </CardTitle>
          <CardDescription>
            {isRTL ? 'اختر سمة لوحة التحكم المفضلة لديك' : 'Choose your preferred admin panel theme'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {themes.map((themeOption) => (
              <div
                key={themeOption.id}
                onClick={() => setTheme(themeOption.id as 'light' | 'dark' | 'system')}
                className={cn(
                  "relative p-4 rounded-xl border-2 cursor-pointer transition-all",
                  theme === themeOption.id
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                )}
              >
                {theme === themeOption.id && (
                  <div className="absolute top-2 right-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </div>
                  </div>
                )}
                
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-3",
                  theme === themeOption.id
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                )}>
                  <themeOption.icon size={24} />
                </div>
                
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {themeOption.label}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {themeOption.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Preview */}
      <Card>
        <CardHeader>
          <CardTitle>{isRTL ? 'معاينة' : 'Preview'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold">
                T
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {isRTL ? 'عنوان تجريبي' : 'Sample Title'}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {isRTL ? 'هذا نص تجريبي لمعاينة المظهر' : 'This is sample text to preview appearance'}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium">
                {isRTL ? 'زر رئيسي' : 'Primary Button'}
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">
                {isRTL ? 'زر ثانوي' : 'Secondary Button'}
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
