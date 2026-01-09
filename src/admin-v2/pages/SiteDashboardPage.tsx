// ===========================================
// Admin V2 - Site Dashboard Page
// ===========================================

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminStore';
import { SITES, SiteId, SiteFeature } from '../types';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Image,
  Star,
  DollarSign,
  MessageSquare,
  Newspaper,
  FolderOpen,
  Briefcase,
  HelpCircle,
  Mail,
  BookOpen,
  Package,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  Globe,
  ExternalLink
} from 'lucide-react';

const featureIcons: Record<SiteFeature, React.ElementType> = {
  hero: Image,
  features: Star,
  pricing: DollarSign,
  testimonials: MessageSquare,
  news: Newspaper,
  portfolio: FolderOpen,
  services: Briefcase,
  products: Package,
  solutions: Lightbulb,
  faq: HelpCircle,
  contact: Mail,
  blog: BookOpen,
  chat: MessageSquare,
};

const featureLabels: Record<SiteFeature, { en: string; ar: string }> = {
  hero: { en: 'Hero Section', ar: 'البانر الرئيسي' },
  features: { en: 'Features', ar: 'الميزات' },
  pricing: { en: 'Pricing', ar: 'الأسعار' },
  testimonials: { en: 'Testimonials', ar: 'آراء العملاء' },
  news: { en: 'News', ar: 'الأخبار' },
  portfolio: { en: 'Portfolio', ar: 'المعرض' },
  services: { en: 'Services', ar: 'الخدمات' },
  products: { en: 'Products', ar: 'المنتجات' },
  solutions: { en: 'Solutions', ar: 'الحلول' },
  faq: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
  contact: { en: 'Contact', ar: 'التواصل' },
  blog: { en: 'Blog', ar: 'المدونة' },
  chat: { en: 'Chat Settings', ar: 'إعدادات المحادثة' },
};

export function SiteDashboardPage() {
  const { siteId } = useParams<{ siteId: string }>();
  const { setCurrentSite, currentSite, getDirection, getSiteFeatures } = useAdmin();
  const navigate = useNavigate();
  const direction = getDirection();
  const isRTL = direction === 'rtl';

  // Set current site based on URL param
  useEffect(() => {
    if (siteId && SITES[siteId as SiteId]) {
      setCurrentSite(siteId as SiteId);
    }
  }, [siteId, setCurrentSite]);

  const site = SITES[siteId as SiteId];
  
  if (!site) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">{isRTL ? 'الموقع غير موجود' : 'Site not found'}</p>
      </div>
    );
  }

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const features = site.features;

  return (
    <div className="space-y-6">
      {/* Site Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div 
            className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
            style={{ backgroundColor: site.primaryColor }}
          >
            {site.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {isRTL ? site.nameAr : site.name}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <Globe size={14} className="text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {site.supportedLanguages.length} {isRTL ? 'لغات مدعومة' : 'supported languages'}
              </span>
            </div>
          </div>
        </div>
        <Button 
          variant="outline" 
          className="gap-2"
          onClick={() => window.open(`/${site.id === 'texafab' ? '' : site.id}`, '_blank')}
        >
          <ExternalLink size={16} />
          {isRTL ? 'زيارة الموقع' : 'Visit Site'}
        </Button>
      </div>

      {/* Supported Languages */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            {isRTL ? 'اللغات المدعومة' : 'Supported Languages'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {site.supportedLanguages.map(lang => (
              <Badge 
                key={lang} 
                variant={lang === site.defaultLanguage ? 'default' : 'secondary'}
                className="text-sm"
              >
                {lang.toUpperCase()}
                {lang === site.defaultLanguage && (
                  <span className="ml-1 text-xs opacity-70">
                    ({isRTL ? 'افتراضي' : 'default'})
                  </span>
                )}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Content Sections Grid */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {isRTL ? 'أقسام المحتوى' : 'Content Sections'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature) => {
            const Icon = featureIcons[feature];
            const label = featureLabels[feature];
            
            return (
              <Card 
                key={feature}
                className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 group"
                onClick={() => navigate(`/admin-v2/sites/${site.id}/content/${feature}`)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                        style={{ backgroundColor: site.primaryColor }}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {isRTL ? label.ar : label.en}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isRTL ? 'انقر للتعديل' : 'Click to edit'}
                        </p>
                      </div>
                    </div>
                    <ArrowIcon 
                      size={18} 
                      className="text-gray-300 group-hover:text-emerald-500 transition-colors" 
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Site Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {isRTL ? 'معلومات الموقع' : 'Site Information'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">{isRTL ? 'المعرف' : 'ID'}</span>
              <span className="font-mono text-sm">{site.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">{isRTL ? 'اللون الرئيسي' : 'Primary Color'}</span>
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: site.primaryColor }}
                />
                <span className="font-mono text-sm">{site.primaryColor}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">{isRTL ? 'عدد الأقسام' : 'Sections'}</span>
              <span>{features.length}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {isRTL ? 'إجراءات سريعة' : 'Quick Actions'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2"
              onClick={() => navigate(`/admin-v2/sites/${site.id}/content/hero`)}
            >
              <Image size={16} />
              {isRTL ? 'تعديل البانر' : 'Edit Hero'}
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2"
              onClick={() => navigate(`/admin-v2/sites/${site.id}/content/pricing`)}
            >
              <DollarSign size={16} />
              {isRTL ? 'تعديل الأسعار' : 'Edit Pricing'}
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2"
              onClick={() => navigate('/admin-v2/media')}
            >
              <FolderOpen size={16} />
              {isRTL ? 'مكتبة الوسائط' : 'Media Library'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
