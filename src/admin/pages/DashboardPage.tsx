import {
  Users,
  DollarSign,
  Eye,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Activity,
  Building,
  UserPlus,
  ExternalLink,
  Globe,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAdmin } from '../context/AdminContext';
import { useSite } from '../context/SiteContext';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';

export function DashboardPage() {
  const { pricingPlans, systemStatus } = useAdmin();
  const { currentSite, siteInfo } = useSite();
  const { t, isRTL, language } = useI18n();

  // Load content managers count from localStorage
  const getContentManagersCount = () => {
    try {
      const managers = localStorage.getItem('texacore_content_managers');
      if (managers) {
        const parsed = JSON.parse(managers);
        return Array.isArray(parsed) ? parsed.length : 0;
      }
    } catch (e) {}
    return 1; // At least the main admin
  };

  const stats = [
    {
      title: isRTL ? 'مدراء المحتوى' : 'Content Managers',
      value: getContentManagersCount(),
      change: '+1',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: isRTL ? 'صفحات المحتوى' : 'Content Pages',
      value: 15,
      change: '+3',
      trend: 'up',
      icon: Building,
      color: 'bg-green-500',
    },
    {
      title: isRTL ? 'خطط الأسعار' : 'Pricing Plans',
      value: pricingPlans?.length || 3,
      change: '0',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-teal-500',
    },
    {
      title: isRTL ? 'حالة النظام' : 'System Status',
      value: systemStatus?.serverHealth === 'healthy' ? (isRTL ? 'سليم' : 'Healthy') : (isRTL ? 'تحقق' : 'Check'),
      change: '99.9%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Active Site Banner */}
      <div 
        className="rounded-xl border-2 p-4 flex items-center justify-between"
        style={{ 
          borderColor: `${siteInfo.primaryColor}40`,
          backgroundColor: `${siteInfo.primaryColor}08`
        }}
      >
        <div className="flex items-center gap-4">
          <div 
            className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
            style={{ backgroundColor: `${siteInfo.primaryColor}20` }}
          >
            {siteInfo.logo}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                {language === 'ar' ? siteInfo.nameAr : siteInfo.name}
              </h2>
              <Badge 
                className="text-white text-xs"
                style={{ backgroundColor: siteInfo.primaryColor }}
              >
                {isRTL ? 'نشط' : 'Active'}
              </Badge>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {language === 'ar' ? siteInfo.descriptionAr : siteInfo.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm"
            asChild
            className="border-gray-300"
          >
            <a href={siteInfo.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {isRTL ? 'فتح الموقع' : 'Open Site'}
            </a>
          </Button>
        </div>
      </div>

      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t.dashboard.title}</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {t.dashboard.welcome}! {t.dashboard.overview}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link to="/admin/users/directory">{isRTL ? 'مدراء المحتوى' : 'Content Managers'}</Link>
          </Button>
          <Button 
            className="text-white" 
            style={{ backgroundColor: siteInfo.primaryColor }}
            asChild
          >
            <Link to={siteInfo.url} target="_blank">
              <Eye className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {isRTL ? 'عرض الموقع' : 'View Site'}
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Users */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>{isRTL ? 'إدارة المحتوى' : 'Content Management'}</CardTitle>
              <CardDescription>{isRTL ? 'الأقسام القابلة للتحرير في الموقع' : 'Editable sections of your website'}</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/admin/cms/hero">{isRTL ? 'عرض الكل' : 'View All'}</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Link to="/admin/cms/hero" className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-medium">
                    H
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{isRTL ? 'قسم البطل' : 'Hero Section'}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{isRTL ? 'العنوان الرئيسي والصور' : 'Main headline & imagery'}</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700">{isRTL ? 'نشط' : 'Active'}</Badge>
              </Link>
              
              <Link to="/admin/cms/features" className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-medium">
                    F
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{isRTL ? 'المميزات' : 'Features'}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{isRTL ? 'مميزات المنتج' : 'Product features'}</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700">{isRTL ? 'نشط' : 'Active'}</Badge>
              </Link>
              
              <Link to="/admin/pricing/plans" className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-medium">
                    P
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{isRTL ? 'الأسعار' : 'Pricing'}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{isRTL ? 'خطط الأسعار' : 'Pricing plans'}</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700">{pricingPlans?.length || 3} {isRTL ? 'خطط' : 'Plans'}</Badge>
              </Link>
              
              <Link to="/admin/cms/testimonials" className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-medium">
                    T
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{isRTL ? 'الشهادات' : 'Testimonials'}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{isRTL ? 'آراء العملاء' : 'Customer reviews'}</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700">{isRTL ? 'نشط' : 'Active'}</Badge>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions & Stats */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/admin/cms/hero">
                  <Activity className="h-4 w-4 mr-2" />
                  {isRTL ? 'تحرير قسم البطل' : 'Edit Hero Section'}
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/admin/pricing/plans">
                  <DollarSign className="h-4 w-4 mr-2" />
                  {isRTL ? 'إدارة الأسعار' : 'Manage Pricing'}
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/admin/seo/meta">
                  <Eye className="h-4 w-4 mr-2" />
                  {isRTL ? 'تحديث SEO' : 'Update SEO'}
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/admin/users/directory">
                  <Users className="h-4 w-4 mr-2" />
                  {isRTL ? 'مدراء المحتوى' : 'Content Managers'}
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pricing Plans Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Active Plans</CardTitle>
              <CardDescription>Current pricing tiers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        plan.isPopular ? 'bg-teal-500' : 'bg-gray-400'
                      }`}
                    />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {plan.name.en}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    €{plan.price.monthly}/mo
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* System Health */}
          <Card>
            <CardHeader>
              <CardTitle>System Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Server Status</span>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Healthy
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">API Latency</span>
                  <span className="text-sm font-medium">{systemStatus?.apiLatency}ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Uptime</span>
                  <span className="text-sm font-medium">{systemStatus?.uptime}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Last Backup</span>
                  <span className="text-sm font-medium">2 hours ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Managed Sites Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-gray-500" />
            {isRTL ? 'المواقع المُدارة' : 'Managed Sites'}
          </CardTitle>
          <CardDescription>
            {isRTL ? 'جميع المواقع المتصلة بلوحة التحكم' : 'All websites connected to this admin panel'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* TexaFab Card */}
            <div 
              className={`p-4 rounded-xl border-2 transition-all ${
                currentSite === 'texafab' 
                  ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-xl">
                    🏭
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">TexaFab ERP</h3>
                    <p className="text-xs text-gray-500">
                      {isRTL ? 'نظام ERP لصناعة النسيج' : 'Textile Industry ERP'}
                    </p>
                  </div>
                </div>
                {currentSite === 'texafab' && (
                  <Badge className="bg-emerald-500 text-white">
                    {isRTL ? 'نشط' : 'Active'}
                  </Badge>
                )}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{isRTL ? 'الصفحات' : 'Pages'}: 12</span>
                <a 
                  href="/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                >
                  {isRTL ? 'زيارة' : 'Visit'}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Next Revolution Card */}
            <div 
              className={`p-4 rounded-xl border-2 transition-all ${
                currentSite === 'nextrevolution' 
                  ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/20' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xl">
                    ✨
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Next Revolution</h3>
                    <p className="text-xs text-gray-500">
                      {isRTL ? 'موقع الشركة الأم' : 'Parent Company Website'}
                    </p>
                  </div>
                </div>
                {currentSite === 'nextrevolution' && (
                  <Badge className="bg-blue-500 text-white">
                    {isRTL ? 'نشط' : 'Active'}
                  </Badge>
                )}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{isRTL ? 'الصفحات' : 'Pages'}: 5</span>
                <a 
                  href="/next-revolution" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  {isRTL ? 'زيارة' : 'Visit'}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
