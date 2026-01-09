// ===========================================
// Admin V2 - Header Component
// ===========================================

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminStore';
import { SITES, LANGUAGES, LanguageCode, SiteId } from '../../types';
import { cn } from '@/lib/utils';
import {
  Bell,
  Moon,
  Sun,
  Monitor,
  User,
  LogOut,
  Settings,
  ChevronDown,
  Check,
  Globe,
  Languages
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Header() {
  const {
    user,
    currentSite,
    setCurrentSite,
    currentContentLanguage,
    setContentLanguage,
    adminLanguage,
    setAdminLanguage,
    theme,
    setTheme,
    notifications,
    unreadCount,
    markAllNotificationsRead,
    logout,
    t,
    getDirection,
    getSiteSupportedLanguages
  } = useAdmin();

  const navigate = useNavigate();
  const direction = getDirection();
  const isRTL = direction === 'rtl';
  const siteConfig = SITES[currentSite];
  const supportedContentLanguages = getSiteSupportedLanguages();

  const ThemeIcon = theme === 'dark' ? Moon : theme === 'light' ? Sun : Monitor;

  return (
    <header 
      className={cn(
        "fixed top-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-30 transition-all duration-300",
        isRTL ? "right-64 left-0" : "left-64 right-0"
      )}
    >
      <div className="h-full flex items-center justify-between px-6">
        {/* Left Side - Site Selector & Content Language */}
        <div className="flex items-center gap-4">
          {/* Site Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <div 
                  className="w-5 h-5 rounded flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: siteConfig.primaryColor }}
                >
                  {siteConfig.name.charAt(0)}
                </div>
                <span className="hidden sm:inline">{isRTL ? siteConfig.nameAr : siteConfig.name}</span>
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isRTL ? 'end' : 'start'}>
              <DropdownMenuLabel>{t('sites.selectSite')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {Object.values(SITES).map((site) => (
                <DropdownMenuItem
                  key={site.id}
                  onClick={() => setCurrentSite(site.id)}
                  className="gap-2"
                >
                  <div 
                    className="w-5 h-5 rounded flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: site.primaryColor }}
                  >
                    {site.name.charAt(0)}
                  </div>
                  <span>{isRTL ? site.nameAr : site.name}</span>
                  {currentSite === site.id && <Check size={16} className="ml-auto" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Content Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe size={16} />
                <span className="text-sm">{LANGUAGES[currentContentLanguage].flag}</span>
                <span className="hidden sm:inline text-sm">
                  {LANGUAGES[currentContentLanguage].nativeName}
                </span>
                <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isRTL ? 'end' : 'start'}>
              <DropdownMenuLabel>{t('sites.currentLanguage')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {supportedContentLanguages.map((langCode) => {
                const lang = LANGUAGES[langCode];
                return (
                  <DropdownMenuItem
                    key={langCode}
                    onClick={() => setContentLanguage(langCode)}
                    className="gap-2"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                    {currentContentLanguage === langCode && <Check size={16} className="ml-auto" />}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-2">
          {/* Admin Language */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Languages size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isRTL ? 'start' : 'end'}>
              <DropdownMenuLabel>{t('settings.language')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {Object.values(LANGUAGES).map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setAdminLanguage(lang.code)}
                  className="gap-2"
                >
                  <span>{lang.flag}</span>
                  <span>{lang.nativeName}</span>
                  {adminLanguage === lang.code && <Check size={16} className="ml-auto" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <ThemeIcon size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isRTL ? 'start' : 'end'}>
              <DropdownMenuLabel>{t('settings.theme')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setTheme('light')} className="gap-2">
                <Sun size={16} />
                <span>{t('settings.light')}</span>
                {theme === 'light' && <Check size={16} className="ml-auto" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')} className="gap-2">
                <Moon size={16} />
                <span>{t('settings.dark')}</span>
                {theme === 'dark' && <Check size={16} className="ml-auto" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')} className="gap-2">
                <Monitor size={16} />
                <span>{t('settings.system')}</span>
                {theme === 'system' && <Check size={16} className="ml-auto" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isRTL ? 'start' : 'end'} className="w-80">
              <div className="flex items-center justify-between px-2 py-1.5">
                <DropdownMenuLabel className="p-0">{t('notifications.title')}</DropdownMenuLabel>
                {unreadCount > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-auto py-1 px-2 text-xs"
                    onClick={markAllNotificationsRead}
                  >
                    {t('notifications.markAllRead')}
                  </Button>
                )}
              </div>
              <DropdownMenuSeparator />
              {notifications.length === 0 ? (
                <div className="py-6 text-center text-gray-500 text-sm">
                  {t('notifications.noNotifications')}
                </div>
              ) : (
                <div className="max-h-64 overflow-y-auto">
                  {notifications.slice(0, 5).map((notif) => (
                    <div 
                      key={notif.id}
                      className={cn(
                        "px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer",
                        !notif.read && "bg-blue-50 dark:bg-blue-900/20"
                      )}
                    >
                      <div className="flex items-start gap-2">
                        <div className={cn(
                          "w-2 h-2 rounded-full mt-1.5 flex-shrink-0",
                          notif.type === 'success' && "bg-green-500",
                          notif.type === 'error' && "bg-red-500",
                          notif.type === 'warning' && "bg-yellow-500",
                          notif.type === 'info' && "bg-blue-500"
                        )} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {notif.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {notif.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {notifications.length > 5 && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="justify-center text-sm text-blue-600 dark:text-blue-400"
                    onClick={() => navigate('/admin-v2/notifications')}
                  >
                    {isRTL ? 'عرض الكل' : 'View All'}
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                  <User size={18} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="hidden sm:inline text-sm font-medium">
                  {user?.name || 'Admin'}
                </span>
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isRTL ? 'start' : 'end'}>
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span>{user?.name}</span>
                  <span className="text-xs font-normal text-gray-500">{user?.email}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/admin-v2/settings/general')} className="gap-2">
                <Settings size={16} />
                <span>{t('admin.settings')}</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout} className="gap-2 text-red-600 dark:text-red-400">
                <LogOut size={16} />
                <span>{t('admin.logout')}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
