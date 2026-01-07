import React from 'react';
import { useSite, SiteType } from '../context/SiteContext';
import { ChevronDown, Check, ExternalLink } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function SiteSelector() {
  const { currentSite, setCurrentSite, siteInfo, sites } = useSite();
  const { isRTL, language } = useI18n();

  const handleSiteChange = (siteId: SiteType) => {
    setCurrentSite(siteId);
  };

  const handleOpenSite = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "h-10 px-3 gap-2 border-2 transition-all",
            currentSite === 'texafab' 
              ? "border-emerald-500/50 hover:border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20"
              : "border-blue-500/50 hover:border-blue-500 bg-blue-50/50 dark:bg-blue-950/20"
          )}
        >
          <span className="text-lg">{siteInfo.logo}</span>
          <span className="font-semibold hidden sm:inline">
            {language === 'ar' ? siteInfo.nameAr : siteInfo.name}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align={isRTL ? "start" : "end"} className="w-72">
        <DropdownMenuLabel className="text-xs text-gray-500 uppercase tracking-wider">
          {language === 'ar' ? 'اختر الموقع للإدارة' : 'Select Site to Manage'}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {sites.map((site) => (
          <DropdownMenuItem
            key={site.id}
            onClick={() => handleSiteChange(site.id)}
            className={cn(
              "flex items-start gap-3 p-3 cursor-pointer",
              currentSite === site.id && "bg-gray-100 dark:bg-gray-800"
            )}
          >
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
              style={{ backgroundColor: `${site.primaryColor}20` }}
            >
              {site.logo}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">
                  {language === 'ar' ? site.nameAr : site.name}
                </span>
                {currentSite === site.id && (
                  <Check className="h-4 w-4 text-emerald-500" />
                )}
              </div>
              <p className="text-xs text-gray-500 truncate">
                {language === 'ar' ? site.descriptionAr : site.description}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenSite(site.url);
              }}
              className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600"
              title={language === 'ar' ? 'فتح الموقع' : 'Open Site'}
            >
              <ExternalLink className="h-4 w-4" />
            </button>
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        
        <div className="p-2">
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
            <span className="text-amber-600 dark:text-amber-400 text-xs">
              {language === 'ar' 
                ? `أنت تدير: ${siteInfo.nameAr}` 
                : `Managing: ${siteInfo.name}`
              }
            </span>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
