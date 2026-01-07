import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Globe,
  DollarSign,
  Users,
  Search,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Palette,
  FileText,
  Image,
  BarChart3,
  Languages,
  Server,
  Menu,
  Bell,
  Bot,
  Activity,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

export function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const { t, isRTL } = useI18n();

  // Navigation items with translations
  const sidebarItems = [
    {
      icon: LayoutDashboard,
      label: t.navigation.dashboard,
      href: '/admin',
    },
    {
      icon: Globe,
      label: t.navigation.cms,
      href: '/admin/cms',
      children: [
        { label: t.cms.pages, href: '/admin/cms/pages' },
        { label: t.cms.hero, href: '/admin/cms/hero' },
        { label: t.cms.features, href: '/admin/cms/features' },
        { label: t.cms.solutions, href: '/admin/cms/solutions' },
        { label: t.cms.stats, href: '/admin/cms/stats' },
        { label: t.cms.testimonials, href: '/admin/cms/testimonials' },
        { label: 'FAQ', href: '/admin/cms/faq' },
        { label: t.cms.footer, href: '/admin/cms/footer' },
        { label: 'News & Announcements', href: '/admin/cms/news' },
      ],
    },
    {
      icon: DollarSign,
      label: t.pricing.title,
      href: '/admin/pricing',
      children: [
        { label: t.pricing.plans, href: '/admin/pricing/plans' },
      ],
    },
    {
      icon: Users,
      label: isRTL ? 'مدراء المحتوى' : 'Content Managers',
      href: '/admin/users',
      children: [
        { label: isRTL ? 'فريق الإدارة' : 'Admin Team', href: '/admin/users/directory' },
      ],
    },
    {
      icon: Search,
      label: t.seo.title,
      href: '/admin/seo',
      children: [
        { label: t.seo.metaTags, href: '/admin/seo/meta' },
        { label: 'AI SEO', href: '/admin/seo/ai-seo' },
        { label: t.seo.sitemap, href: '/admin/seo/sitemap' },
      ],
    },
    {
      icon: BarChart3,
      label: t.analytics.title,
      href: '/admin/analytics',
      children: [
        { label: t.analytics.overview, href: '/admin/analytics/overview' },
        { label: t.system.serverStatus, href: '/admin/analytics/server' },
        { label: t.analytics.visitors, href: '/admin/analytics/visitors' },
      ],
    },
    {
      icon: Bell,
      label: t.settings.notifications,
      href: '/admin/notifications',
    },
    {
      icon: Settings,
      label: t.settings.title,
      href: '/admin/settings',
      children: [
        { label: t.navigation.languages, href: '/admin/settings/languages' },
        { label: t.system.status, href: '/admin/settings/status' },
        { label: t.security.logs, href: '/admin/settings/security' },
      ],
    },
  ];

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
    );
  };

  return (
    <aside
      className={cn(
        'fixed top-0 z-40 h-screen bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 transition-all duration-300 flex flex-col',
        isRTL ? 'right-0 border-l' : 'left-0 border-r',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white">TexaCore Admin</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8"
        >
          {isCollapsed ? (
            <Menu className="h-4 w-4" />
          ) : isRTL ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 min-h-0">
        <ul className="space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.href}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleExpanded(item.href)}
                    className={cn(
                      'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
                      expandedItems.includes(item.href) && 'bg-gray-100 dark:bg-gray-800'
                    )}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    {!isCollapsed && (
                      <>
                        <span className={`flex-1 ${isRTL ? 'text-right' : 'text-left'} text-sm font-medium`}>{item.label}</span>
                        {isRTL ? (
                          <ChevronLeft
                            className={cn(
                              'h-4 w-4 transition-transform',
                              expandedItems.includes(item.href) && 'rotate-90'
                            )}
                          />
                        ) : (
                          <ChevronLeft
                            className={cn(
                              'h-4 w-4 transition-transform',
                              expandedItems.includes(item.href) && '-rotate-90'
                            )}
                          />
                        )}
                      </>
                    )}
                  </button>
                  {!isCollapsed && expandedItems.includes(item.href) && (
                    <ul className={cn(
                      'mt-1 space-y-1 border-gray-200 dark:border-gray-700',
                      isRTL ? 'mr-6 border-r-2 pr-3' : 'ml-6 border-l-2 pl-3'
                    )}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavLink
                            to={child.href}
                            className={({ isActive }) =>
                              cn(
                                'block px-3 py-2 rounded-lg text-sm transition-colors',
                                isActive
                                  ? 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 font-medium'
                                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                              )
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink
                  to={item.href}
                  end
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors',
                      isActive
                        ? 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    )
                  }
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-gray-800 p-4">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          {!isCollapsed && <span className="text-sm font-medium">{t.auth.logout}</span>}
        </NavLink>
      </div>
    </aside>
  );
}
