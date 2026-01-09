// ===========================================
// Admin V2 - Dashboard Page
// ===========================================

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminStore';
import { SITES } from '../types';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Globe,
  Image,
  FileText,
  Users,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  ExternalLink
} from 'lucide-react';

export function DashboardPage() {
  const { t, getDirection, currentSite, setCurrentSite, user } = useAdmin();
  const navigate = useNavigate();
  const direction = getDirection();
  const isRTL = direction === 'rtl';

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  // Stats cards data
  const stats = [
    { 
      label: isRTL ? 'المواقع' : 'Sites', 
      value: Object.keys(SITES).length, 
      icon: Globe, 
      color: 'bg-blue-500',
      change: '+0%'
    },
    { 
      label: isRTL ? 'الصفحات' : 'Pages', 
      value: 24, 
      icon: FileText, 
      color: 'bg-emerald-500',
      change: '+12%'
    },
    { 
      label: isRTL ? 'الوسائط' : 'Media Files', 
      value: 156, 
      icon: Image, 
      color: 'bg-purple-500',
      change: '+8%'
    },
    { 
      label: isRTL ? 'المستخدمين' : 'Users', 
      value: 1, 
      icon: Users, 
      color: 'bg-orange-500',
      change: '+0%'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {isRTL ? `مرحباً، ${user?.name || 'مدير'}` : `Welcome, ${user?.name || 'Admin'}`}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {isRTL ? 'إليك نظرة عامة على لوحة التحكم' : 'Here\'s an overview of your admin panel'}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1 flex items-center gap-1">
                    <TrendingUp size={12} />
                    {stat.change}
                  </p>
                </div>
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", stat.color)}>
                  <stat.icon size={24} className="text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sites Grid */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {isRTL ? 'المواقع المتاحة' : 'Available Sites'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.values(SITES).map((site) => (
            <Card 
              key={site.id} 
              className={cn(
                "cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1",
                currentSite === site.id && "ring-2 ring-emerald-500"
              )}
              onClick={() => {
                setCurrentSite(site.id);
                navigate(`/admin-v2/sites/${site.id}`);
              }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: site.primaryColor }}
                  >
                    {site.name.charAt(0)}
                  </div>
                  <ExternalLink size={16} className="text-gray-400" />
                </div>
                <CardTitle className="text-lg mt-2">
                  {isRTL ? site.nameAr : site.name}
                </CardTitle>
                <CardDescription>
                  {site.supportedLanguages.length} {isRTL ? 'لغات' : 'languages'} • {site.features.length} {isRTL ? 'ميزات' : 'features'}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1">
                  {site.supportedLanguages.slice(0, 4).map(lang => (
                    <span 
                      key={lang}
                      className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {lang.toUpperCase()}
                    </span>
                  ))}
                  {site.supportedLanguages.length > 4 && (
                    <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full">
                      +{site.supportedLanguages.length - 4}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {isRTL ? 'إجراءات سريعة' : 'Quick Actions'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all group"
            onClick={() => navigate(`/admin-v2/sites/${currentSite}/content/hero`)}
          >
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {isRTL ? 'تعديل البانر الرئيسي' : 'Edit Hero Section'}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {isRTL ? SITES[currentSite].nameAr : SITES[currentSite].name}
                </p>
              </div>
              <ArrowIcon size={20} className="text-gray-400 group-hover:text-emerald-500 transition-colors" />
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all group"
            onClick={() => navigate('/admin-v2/media')}
          >
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {isRTL ? 'مكتبة الوسائط' : 'Media Library'}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {isRTL ? 'رفع وإدارة الصور' : 'Upload and manage images'}
                </p>
              </div>
              <ArrowIcon size={20} className="text-gray-400 group-hover:text-emerald-500 transition-colors" />
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all group"
            onClick={() => navigate('/admin-v2/settings/appearance')}
          >
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {isRTL ? 'إعدادات المظهر' : 'Appearance Settings'}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {isRTL ? 'تخصيص اللغة والمظهر' : 'Customize language and theme'}
                </p>
              </div>
              <ArrowIcon size={20} className="text-gray-400 group-hover:text-emerald-500 transition-colors" />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>{isRTL ? 'النشاط الأخير' : 'Recent Activity'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: isRTL ? 'تم تحديث البانر الرئيسي' : 'Hero section updated', time: '2 hours ago', site: 'TexaFab' },
              { action: isRTL ? 'تم رفع صورة جديدة' : 'New image uploaded', time: '5 hours ago', site: 'FinCore' },
              { action: isRTL ? 'تم تحديث الأسعار' : 'Pricing updated', time: '1 day ago', site: 'Dubai Stroy' },
            ].map((activity, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.site}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
