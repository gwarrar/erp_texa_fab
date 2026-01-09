// ===========================================
// Admin V2 - Sidebar Navigation
// ===========================================

import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAdmin } from '../../context/AdminStore';
import { SITES, SiteFeature } from '../../types';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Globe,
  Image,
  FileText,
  DollarSign,
  MessageSquare,
  Users,
  Star,
  Newspaper,
  FolderOpen,
  Briefcase,
  HelpCircle,
  Mail,
  BookOpen,
  Settings,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Palette,
  Bell,
  Shield,
  Languages,
  BarChart,
  Package,
  Lightbulb,
  Megaphone,
  LineChart,
  Search,
  PhoneCall,
  Plug,
  MessageCircle,
  Database
} from 'lucide-react';

// Feature to navigation mapping
const featureNavItems: Record<SiteFeature, { label: string; labelAr: string; icon: React.ElementType; path: string }> = {
  hero: { label: 'Hero Section', labelAr: 'البانر الرئيسي', icon: Image, path: 'hero' },
  features: { label: 'Features', labelAr: 'الميزات', icon: Star, path: 'features' },
  pricing: { label: 'Pricing', labelAr: 'الأسعار', icon: DollarSign, path: 'pricing' },
  testimonials: { label: 'Testimonials', labelAr: 'آراء العملاء', icon: MessageSquare, path: 'testimonials' },
  news: { label: 'News', labelAr: 'الأخبار', icon: Newspaper, path: 'news' },
  portfolio: { label: 'Portfolio', labelAr: 'المعرض', icon: FolderOpen, path: 'portfolio' },
  services: { label: 'Services', labelAr: 'الخدمات', icon: Briefcase, path: 'services' },
  products: { label: 'Products', labelAr: 'المنتجات', icon: Package, path: 'products' },
  solutions: { label: 'Solutions', labelAr: 'الحلول', icon: Lightbulb, path: 'solutions' },
  faq: { label: 'FAQ', labelAr: 'الأسئلة الشائعة', icon: HelpCircle, path: 'faq' },
  contact: { label: 'Contact', labelAr: 'التواصل', icon: Mail, path: 'contact' },
  blog: { label: 'Blog', labelAr: 'المدونة', icon: BookOpen, path: 'blog' },
  chat: { label: 'Chat Settings', labelAr: 'إعدادات المحادثة', icon: MessageSquare, path: 'chat' },
};

interface NavSection {
  title: string;
  titleAr: string;
  items: NavItem[];
  collapsible?: boolean;
}

interface NavItem {
  label: string;
  labelAr: string;
  icon: React.ElementType;
  path: string;
  badge?: number;
}

export function Sidebar() {
  const { 
    currentSite, 
    sidebarCollapsed, 
    toggleSidebar, 
    t, 
    getDirection,
    adminLanguage,
    getSiteFeatures,
    unreadCount 
  } = useAdmin();
  
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['content']);
  const direction = getDirection();
  const isRTL = direction === 'rtl';
  const siteConfig = SITES[currentSite];
  const siteFeatures = getSiteFeatures();

  // Build dynamic content section based on site features
  const contentItems: NavItem[] = siteFeatures
    .filter(feature => featureNavItems[feature])
    .map(feature => ({
      ...featureNavItems[feature],
      path: `/admin-v2/sites/${currentSite}/content/${featureNavItems[feature].path}`
    }));

  // Navigation sections
  const sections: NavSection[] = [
    {
      title: 'Main',
      titleAr: 'الرئيسية',
      items: [
        { 
          label: 'Dashboard', 
          labelAr: 'لوحة التحكم', 
          icon: LayoutDashboard, 
          path: '/admin-v2' 
        },
        { 
          label: 'Sites', 
          labelAr: 'المواقع', 
          icon: Globe, 
          path: '/admin-v2/sites' 
        },
      ]
    },
    {
      title: `${siteConfig.name} Content`,
      titleAr: `محتوى ${siteConfig.nameAr}`,
      collapsible: true,
      items: contentItems
    },
    {
      title: 'Integrations',
      titleAr: 'التكاملات',
      collapsible: true,
      items: [
        { 
          label: 'Overview', 
          labelAr: 'نظرة عامة', 
          icon: Plug, 
          path: `/admin-v2/sites/${currentSite}/integrations` 
        },
        { 
          label: 'Announcement Bar', 
          labelAr: 'الشريط الإخباري', 
          icon: Megaphone, 
          path: `/admin-v2/sites/${currentSite}/integrations/announcement` 
        },
        { 
          label: 'Analytics & Pixels', 
          labelAr: 'التحليلات والبكسل', 
          icon: LineChart, 
          path: `/admin-v2/sites/${currentSite}/integrations/analytics` 
        },
        { 
          label: 'SEO Settings', 
          labelAr: 'إعدادات SEO', 
          icon: Search, 
          path: `/admin-v2/sites/${currentSite}/integrations/seo` 
        },
        { 
          label: 'Callback Widget', 
          labelAr: 'ويدجت الاتصال', 
          icon: PhoneCall, 
          path: `/admin-v2/sites/${currentSite}/integrations/callback-widget` 
        },
        { 
          label: 'Chat Widget', 
          labelAr: 'ويدجت الشات', 
          icon: MessageCircle, 
          path: `/admin-v2/sites/${currentSite}/integrations/chat` 
        },
      ]
    },
    {
      title: 'Media',
      titleAr: 'الوسائط',
      items: [
        { 
          label: 'Media Library', 
          labelAr: 'مكتبة الوسائط', 
          icon: Image, 
          path: '/admin-v2/media' 
        },
      ]
    },
    {
      title: 'Data',
      titleAr: 'البيانات',
      items: [
        { 
          label: 'Sync Data', 
          labelAr: 'مزامنة البيانات', 
          icon: Database, 
          path: '/admin-v2/sync' 
        },
      ]
    },
    {
      title: 'System',
      titleAr: 'النظام',
      items: [
        { 
          label: 'Users', 
          labelAr: 'المستخدمون', 
          icon: Users, 
          path: '/admin-v2/users' 
        },
        { 
          label: 'Analytics', 
          labelAr: 'التحليلات', 
          icon: BarChart, 
          path: '/admin-v2/analytics' 
        },
        { 
          label: 'Notifications', 
          labelAr: 'الإشعارات', 
          icon: Bell, 
          path: '/admin-v2/notifications',
          badge: unreadCount > 0 ? unreadCount : undefined
        },
      ]
    },
    {
      title: 'Settings',
      titleAr: 'الإعدادات',
      items: [
        { 
          label: 'Appearance', 
          labelAr: 'المظهر', 
          icon: Palette, 
          path: '/admin-v2/settings/appearance' 
        },
        { 
          label: 'Languages', 
          labelAr: 'اللغات', 
          icon: Languages, 
          path: '/admin-v2/settings/languages' 
        },
        { 
          label: 'Security', 
          labelAr: 'الأمان', 
          icon: Shield, 
          path: '/admin-v2/settings/security' 
        },
        { 
          label: 'General', 
          labelAr: 'عام', 
          icon: Settings, 
          path: '/admin-v2/settings/general' 
        },
      ]
    },
  ];

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(s => s !== title)
        : [...prev, title]
    );
  };

  const isActive = (path: string) => {
    if (path === '/admin-v2') {
      return location.pathname === '/admin-v2';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside 
      className={cn(
        "fixed top-0 h-screen bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 z-40 transition-all duration-300 shadow-lg",
        isRTL ? "right-0 border-l" : "left-0 border-r",
        sidebarCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo / Brand */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700">
        {!sidebarCollapsed && (
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: siteConfig.primaryColor }}
            >
              {siteConfig.name.charAt(0)}
            </div>
            <span className="font-semibold text-gray-900 dark:text-white truncate">
              {isRTL ? 'لوحة التحكم' : 'Admin Panel'}
            </span>
          </div>
        )}
        
        <button
          onClick={toggleSidebar}
          className={cn(
            "p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400",
            sidebarCollapsed && "mx-auto"
          )}
        >
          {sidebarCollapsed 
            ? (isRTL ? <ChevronLeft size={18} /> : <ChevronRight size={18} />)
            : (isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />)
          }
        </button>
      </div>

      {/* Navigation */}
      <nav className="h-[calc(100vh-4rem)] overflow-y-auto py-4 px-2">
        {sections.map((section, idx) => (
          <div key={section.title} className={cn(idx > 0 && "mt-4")}>
            {/* Section Header */}
            {!sidebarCollapsed && (
              <div 
                className={cn(
                  "flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                  section.collapsible && "cursor-pointer hover:text-gray-700 dark:hover:text-gray-300"
                )}
                onClick={() => section.collapsible && toggleSection(section.title)}
              >
                <span>{isRTL ? section.titleAr : section.title}</span>
                {section.collapsible && (
                  <ChevronDown 
                    size={14} 
                    className={cn(
                      "transition-transform",
                      !expandedSections.includes(section.title) && "-rotate-90"
                    )}
                  />
                )}
              </div>
            )}

            {/* Section Items */}
            {(!section.collapsible || expandedSections.includes(section.title) || sidebarCollapsed) && (
              <div className="space-y-1">
                {section.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive: active }) => cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors relative",
                      "hover:bg-gray-100 dark:hover:bg-gray-700",
                      (active || isActive(item.path))
                        ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400"
                        : "text-gray-700 dark:text-gray-300",
                      sidebarCollapsed && "justify-center"
                    )}
                    title={sidebarCollapsed ? (isRTL ? item.labelAr : item.label) : undefined}
                  >
                    <item.icon size={20} className="flex-shrink-0" />
                    {!sidebarCollapsed && (
                      <>
                        <span className="truncate">{isRTL ? item.labelAr : item.label}</span>
                        {item.badge && (
                          <span className="absolute right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                    {sidebarCollapsed && item.badge && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        {item.badge > 9 ? '9+' : item.badge}
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
