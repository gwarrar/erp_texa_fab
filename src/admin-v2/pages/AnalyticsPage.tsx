// ===========================================
// Admin V2 - Analytics Page
// ===========================================

import React from 'react';
import { useAdmin } from '../context/AdminStore';
import { SITES } from '../types';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  Clock,
  Globe,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AnalyticsPage() {
  const { getDirection, currentSite } = useAdmin();
  const direction = getDirection();
  const isRTL = direction === 'rtl';

  // Mock analytics data
  const stats = [
    {
      title: isRTL ? 'إجمالي الزيارات' : 'Total Visits',
      value: '24,521',
      change: '+12.5%',
      isPositive: true,
      icon: Eye,
      color: 'bg-blue-500'
    },
    {
      title: isRTL ? 'المستخدمون النشطون' : 'Active Users',
      value: '1,234',
      change: '+8.2%',
      isPositive: true,
      icon: Users,
      color: 'bg-emerald-500'
    },
    {
      title: isRTL ? 'متوسط مدة الجلسة' : 'Avg. Session',
      value: '3:42',
      change: '-2.1%',
      isPositive: false,
      icon: Clock,
      color: 'bg-purple-500'
    },
    {
      title: isRTL ? 'معدل الارتداد' : 'Bounce Rate',
      value: '42.3%',
      change: '-5.4%',
      isPositive: true,
      icon: TrendingDown,
      color: 'bg-orange-500'
    }
  ];

  // Mock traffic by site
  const siteTraffic = Object.values(SITES).map((site, index) => ({
    site,
    visits: [15234, 8521, 6432, 4521][index] || 1000,
    percentage: [42, 24, 18, 16][index] || 10
  }));

  // Mock top pages
  const topPages = [
    { page: '/', name: isRTL ? 'الصفحة الرئيسية' : 'Home Page', visits: 8521 },
    { page: '/features', name: isRTL ? 'الميزات' : 'Features', visits: 4232 },
    { page: '/pricing', name: isRTL ? 'الأسعار' : 'Pricing', visits: 3421 },
    { page: '/contact', name: isRTL ? 'التواصل' : 'Contact', visits: 2154 },
    { page: '/about', name: isRTL ? 'عن الشركة' : 'About', visits: 1876 },
  ];

  // Mock traffic sources
  const trafficSources = [
    { source: 'Google', percentage: 45, color: 'bg-blue-500' },
    { source: isRTL ? 'مباشر' : 'Direct', percentage: 25, color: 'bg-emerald-500' },
    { source: isRTL ? 'وسائل التواصل' : 'Social', percentage: 18, color: 'bg-purple-500' },
    { source: isRTL ? 'إحالات' : 'Referral', percentage: 12, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <BarChart3 size={28} />
          {isRTL ? 'التحليلات' : 'Analytics'}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          {isRTL ? 'نظرة عامة على أداء المواقع' : 'Overview of your sites performance'}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <Card key={idx}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white", stat.color)}>
                  <stat.icon size={20} />
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-sm font-medium",
                  stat.isPositive ? "text-emerald-600" : "text-red-600"
                )}>
                  {stat.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  {stat.change}
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic by Site */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe size={20} />
              {isRTL ? 'الزيارات حسب الموقع' : 'Traffic by Site'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {siteTraffic.map((item) => (
                <div key={item.site.id}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                        style={{ backgroundColor: item.site.primaryColor }}
                      >
                        {item.site.name.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {isRTL ? item.site.nameAr : item.site.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {item.visits.toLocaleString()} ({item.percentage}%)
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all"
                      style={{ 
                        width: `${item.percentage}%`,
                        backgroundColor: item.site.primaryColor
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp size={20} />
              {isRTL ? 'مصادر الزيارات' : 'Traffic Sources'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {source.source}
                    </span>
                    <span className="text-sm text-gray-500">
                      {source.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full rounded-full transition-all", source.color)}
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye size={20} />
            {isRTL ? 'الصفحات الأكثر زيارة' : 'Top Pages'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className={cn(
                    "py-3 text-sm font-medium text-gray-500 dark:text-gray-400",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    {isRTL ? 'الصفحة' : 'Page'}
                  </th>
                  <th className={cn(
                    "py-3 text-sm font-medium text-gray-500 dark:text-gray-400",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    {isRTL ? 'المسار' : 'Path'}
                  </th>
                  <th className={cn(
                    "py-3 text-sm font-medium text-gray-500 dark:text-gray-400",
                    isRTL ? "text-left" : "text-right"
                  )}>
                    {isRTL ? 'الزيارات' : 'Visits'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((page, idx) => (
                  <tr key={idx} className="border-b border-gray-50 dark:border-gray-800 last:border-0">
                    <td className="py-3">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {page.name}
                      </span>
                    </td>
                    <td className="py-3">
                      <code className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                        {page.page}
                      </code>
                    </td>
                    <td className={cn("py-3", isRTL ? "text-left" : "text-right")}>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {page.visits.toLocaleString()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Note */}
      <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
        <CardContent className="py-4">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            {isRTL 
              ? '⚠️ هذه بيانات تجريبية. قم بربط Google Analytics أو أي خدمة تحليلات لعرض البيانات الحقيقية.'
              : '⚠️ This is sample data. Connect Google Analytics or another analytics service to view real data.'}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
