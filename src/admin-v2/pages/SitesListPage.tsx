// ===========================================
// Admin V2 - Sites List Page
// ===========================================

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminStore';
import { SITES, SiteId } from '../types';
import { cn } from '@/lib/utils';
import {
  Globe,
  ArrowRight,
  ArrowLeft,
  Settings,
  ExternalLink,
  Languages
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function SitesListPage() {
  const { setCurrentSite, getDirection, currentSite } = useAdmin();
  const navigate = useNavigate();
  
  const direction = getDirection();
  const isRTL = direction === 'rtl';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const handleSelectSite = (siteId: SiteId) => {
    setCurrentSite(siteId);
    navigate(`/admin-v2/sites/${siteId}`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <Globe size={28} />
          {isRTL ? 'المواقع' : 'Sites'}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          {isRTL ? 'اختر موقعًا لإدارة محتواه' : 'Select a site to manage its content'}
        </p>
      </div>

      {/* Sites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.values(SITES).map((site) => (
          <Card 
            key={site.id}
            className={cn(
              "cursor-pointer transition-all hover:shadow-lg group",
              currentSite === site.id && "ring-2 ring-emerald-500"
            )}
            onClick={() => handleSelectSite(site.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: site.primaryColor }}
                >
                  {site.name.charAt(0)}
                </div>
                {currentSite === site.id && (
                  <Badge className="bg-emerald-500">
                    {isRTL ? 'الحالي' : 'Current'}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {isRTL ? site.nameAr : site.name}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Languages size={14} />
                <span>
                  {site.supportedLanguages.length} {isRTL ? 'لغات' : 'languages'}
                </span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {site.supportedLanguages.slice(0, 4).map((lang) => (
                  <Badge key={lang} variant="secondary" className="text-xs">
                    {lang.toUpperCase()}
                  </Badge>
                ))}
                {site.supportedLanguages.length > 4 && (
                  <Badge variant="secondary" className="text-xs">
                    +{site.supportedLanguages.length - 4}
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                <span className="text-sm text-gray-500">
                  {site.features.length} {isRTL ? 'أقسام' : 'sections'}
                </span>
                <ArrowIcon 
                  size={18} 
                  className="text-gray-400 group-hover:text-emerald-500 transition-colors"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sites Overview */}
      <Card>
        <CardHeader>
          <CardTitle>{isRTL ? 'نظرة عامة على المواقع' : 'Sites Overview'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className={cn(
                    "py-3 text-sm font-medium text-gray-500",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    {isRTL ? 'الموقع' : 'Site'}
                  </th>
                  <th className={cn(
                    "py-3 text-sm font-medium text-gray-500",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    {isRTL ? 'اللغات' : 'Languages'}
                  </th>
                  <th className={cn(
                    "py-3 text-sm font-medium text-gray-500",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    {isRTL ? 'الأقسام' : 'Sections'}
                  </th>
                  <th className="py-3 text-sm font-medium text-gray-500 w-32"></th>
                </tr>
              </thead>
              <tbody>
                {Object.values(SITES).map((site) => (
                  <tr 
                    key={site.id} 
                    className="border-b border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: site.primaryColor }}
                        >
                          {site.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {isRTL ? site.nameAr : site.name}
                          </p>
                          <p className="text-sm text-gray-500">/{site.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex flex-wrap gap-1">
                        {site.supportedLanguages.map((lang) => (
                          <Badge key={lang} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {site.features.length}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2 justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectSite(site.id);
                          }}
                        >
                          <Settings size={16} className="mr-1" />
                          {isRTL ? 'إدارة' : 'Manage'}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(`/${site.id}`, '_blank');
                          }}
                        >
                          <ExternalLink size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
