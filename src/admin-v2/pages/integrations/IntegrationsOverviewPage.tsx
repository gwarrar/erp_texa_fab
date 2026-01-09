/**
 * Integrations Overview Page
 * Dashboard showing all integration statuses
 */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Megaphone, 
  LineChart, 
  Search, 
  PhoneCall, 
  Check, 
  X, 
  ChevronRight,
  RefreshCw,
  Plug,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { useAdmin } from '@/admin-v2/context/AdminStore';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface IntegrationStatus {
  announcement: { enabled: boolean; configured: boolean };
  analytics: { enabled: boolean; configured: boolean; services: string[] };
  seo: { configured: boolean; pagesCount: number };
  callback: { enabled: boolean; configured: boolean; pendingCount: number };
  chat: { enabled: boolean; configured: boolean; type: string };
}

const defaultStatus: IntegrationStatus = {
  announcement: { enabled: false, configured: false },
  analytics: { enabled: false, configured: false, services: [] },
  seo: { configured: false, pagesCount: 0 },
  callback: { enabled: false, configured: false, pendingCount: 0 },
  chat: { enabled: false, configured: false, type: 'none' },
};

export function IntegrationsOverviewPage() {
  const { currentSite } = useAdmin();
  const [status, setStatus] = useState<IntegrationStatus>(defaultStatus);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!currentSite) return;
    loadStatus();
  }, [currentSite]);

  const loadStatus = async () => {
    setIsLoading(true);
    try {
      // Load announcement settings
      const { data: announcementData } = await supabase
        .from('announcement_settings')
        .select('is_enabled, text')
        .eq('site_id', currentSite)
        .limit(1)
        .single();

      // Load analytics settings
      const { data: analyticsData } = await supabase
        .from('analytics_settings')
        .select('*')
        .eq('site_id', currentSite)
        .single();

      // Load SEO settings count
      const { count: seoCount } = await supabase
        .from('seo_settings')
        .select('*', { count: 'exact', head: true })
        .eq('site_id', currentSite);

      // Load callback settings and pending count
      const { data: callbackSettings } = await supabase
        .from('widget_settings')
        .select('is_enabled, n8n_webhook_url')
        .eq('site_id', currentSite)
        .eq('widget_type', 'callback')
        .single();

      const { count: pendingCount } = await supabase
        .from('callback_requests')
        .select('*', { count: 'exact', head: true })
        .eq('site_id', currentSite)
        .eq('status', 'pending');

      // Load chat settings
      const { data: chatSettings } = await supabase
        .from('chat_settings')
        .select('is_enabled, chat_type')
        .eq('site_id', currentSite)
        .single();

      // Build services list
      const services: string[] = [];
      if (analyticsData?.meta_pixel_id) services.push('Meta Pixel');
      if (analyticsData?.google_analytics_id) services.push('GA4');
      if (analyticsData?.google_tag_manager_id) services.push('GTM');

      setStatus({
        announcement: {
          enabled: announcementData?.is_enabled || false,
          configured: !!announcementData?.text,
        },
        analytics: {
          enabled: analyticsData?.is_enabled || false,
          configured: services.length > 0,
          services,
        },
        seo: {
          configured: (seoCount || 0) > 0,
          pagesCount: seoCount || 0,
        },
        callback: {
          enabled: callbackSettings?.is_enabled || false,
          configured: !!callbackSettings?.n8n_webhook_url,
          pendingCount: pendingCount || 0,
        },
        chat: {
          enabled: chatSettings?.is_enabled || false,
          configured: chatSettings?.chat_type && chatSettings.chat_type !== 'none',
          type: chatSettings?.chat_type || 'none',
        },
      });
    } catch (error) {
      console.error('Error loading integration status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const integrations = [
    {
      id: 'announcement',
      title: 'Announcement Bar',
      titleAr: 'الشريط الإخباري',
      description: 'Display promotional messages and announcements',
      icon: Megaphone,
      path: `/admin-v2/sites/${currentSite}/integrations/announcement`,
      status: status.announcement.enabled ? 'active' : 'inactive',
      configured: status.announcement.configured,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
    {
      id: 'analytics',
      title: 'Analytics & Pixels',
      titleAr: 'التحليلات والبكسل',
      description: 'Track visitors with Meta Pixel, GA4, and GTM',
      icon: LineChart,
      path: `/admin-v2/sites/${currentSite}/integrations/analytics`,
      status: status.analytics.enabled ? 'active' : 'inactive',
      configured: status.analytics.configured,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      extra: status.analytics.services.length > 0 
        ? `${status.analytics.services.join(', ')} configured` 
        : undefined,
    },
    {
      id: 'seo',
      title: 'SEO Settings',
      titleAr: 'إعدادات SEO',
      description: 'Optimize your pages for search engines',
      icon: Search,
      path: `/admin-v2/sites/${currentSite}/integrations/seo`,
      status: status.seo.pagesCount > 0 ? 'active' : 'inactive',
      configured: status.seo.configured,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      extra: status.seo.pagesCount > 0 
        ? `${status.seo.pagesCount} pages configured` 
        : undefined,
    },
    {
      id: 'callback',
      title: 'Callback Widget',
      titleAr: 'ويدجت الاتصال',
      description: 'Let visitors request a callback with n8n automation',
      icon: PhoneCall,
      path: `/admin-v2/sites/${currentSite}/integrations/callback-widget`,
      status: status.callback.enabled ? 'active' : 'inactive',
      configured: status.callback.configured,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      badge: status.callback.pendingCount > 0 
        ? { text: `${status.callback.pendingCount} pending`, variant: 'destructive' as const }
        : undefined,
    },
    {
      id: 'chat',
      title: 'Chat Widget',
      titleAr: 'ويدجت الشات',
      description: 'WhatsApp, Tawk.to, Crisp, or Intercom chat integration',
      icon: MessageCircle,
      path: `/admin-v2/sites/${currentSite}/integrations/chat`,
      status: status.chat.enabled ? 'active' : 'inactive',
      configured: status.chat.configured,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      extra: status.chat.type !== 'none' ? `${status.chat.type} configured` : undefined,
    },
  ];

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Plug className="w-6 h-6" />
            Integrations
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Manage analytics, SEO, widgets, and other integrations for {currentSite}
          </p>
        </div>
        <Button variant="outline" onClick={loadStatus} disabled={isLoading}>
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-green-600">
              {integrations.filter(i => i.status === 'active').length}
            </div>
            <div className="text-sm text-slate-500">Active Integrations</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-blue-600">
              {status.analytics.services.length}
            </div>
            <div className="text-sm text-slate-500">Analytics Services</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-purple-600">
              {status.seo.pagesCount}
            </div>
            <div className="text-sm text-slate-500">SEO Pages</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-orange-600">
              {status.callback.pendingCount}
            </div>
            <div className="text-sm text-slate-500">Pending Callbacks</div>
          </CardContent>
        </Card>
      </div>

      {/* Integration Cards */}
      <div className="grid gap-4">
        {integrations.map((integration) => (
          <Link key={integration.id} to={integration.path}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${integration.bgColor} flex items-center justify-center`}>
                    <integration.icon className={`w-6 h-6 ${integration.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {integration.title}
                      </h3>
                      {integration.badge && (
                        <Badge variant={integration.badge.variant}>
                          {integration.badge.text}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {integration.description}
                    </p>
                    {integration.extra && (
                      <p className="text-xs text-slate-400 mt-1">
                        {integration.extra}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      {integration.status === 'active' ? (
                        <>
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-sm text-green-600">Active</span>
                        </>
                      ) : (
                        <>
                          <div className="w-2 h-2 rounded-full bg-slate-300" />
                          <span className="text-sm text-slate-400">Inactive</span>
                        </>
                      )}
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* External Integrations */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Coming Soon</CardTitle>
          <CardDescription>
            More integrations are being developed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Hotjar', icon: '🔥' },
              { name: 'Crisp Chat', icon: '💬' },
              { name: 'Mailchimp', icon: '📧' },
              { name: 'Zapier', icon: '⚡' },
            ].map((item) => (
              <div key={item.name} className="p-3 border rounded-lg text-center opacity-50">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-sm text-slate-500">{item.name}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default IntegrationsOverviewPage;
