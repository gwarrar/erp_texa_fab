import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Cpu, 
  HardDrive, 
  MemoryStick, 
  Wifi, 
  Clock,
  Activity,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Globe,
  Database,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useI18n } from '@/lib/i18n';

interface ServerMetric {
  name: string;
  nameAr: string;
  value: number;
  max: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  icon: React.ElementType;
}

interface RequestLog {
  id: string;
  path: string;
  method: string;
  status: number;
  duration: number;
  timestamp: string;
  ip: string;
  country: string;
}

export function ServerAnalyticsPage() {
  const { t, isRTL, language } = useI18n();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simulated server metrics
  const [serverMetrics, setServerMetrics] = useState<ServerMetric[]>([
    {
      name: 'CPU Usage',
      nameAr: 'استخدام المعالج',
      value: 34,
      max: 100,
      unit: '%',
      status: 'good',
      trend: 'stable',
      icon: Cpu
    },
    {
      name: 'Memory Usage',
      nameAr: 'استخدام الذاكرة',
      value: 2.4,
      max: 4,
      unit: 'GB',
      status: 'good',
      trend: 'up',
      icon: MemoryStick
    },
    {
      name: 'Disk Usage',
      nameAr: 'استخدام القرص',
      value: 18.5,
      max: 50,
      unit: 'GB',
      status: 'good',
      trend: 'up',
      icon: HardDrive
    },
    {
      name: 'Bandwidth',
      nameAr: 'عرض النطاق',
      value: 124,
      max: 500,
      unit: 'GB',
      status: 'good',
      trend: 'up',
      icon: Wifi
    }
  ]);

  const [performanceStats] = useState({
    uptime: 99.98,
    uptimeDays: 45,
    responseTime: 145,
    requestsPerSecond: 1247,
    errorRate: 0.02,
    activeConnections: 342,
    totalRequests24h: 1847293,
    cachedRequests: 78.5
  });

  const [recentRequests] = useState<RequestLog[]>([
    { id: '1', path: '/', method: 'GET', status: 200, duration: 45, timestamp: '2 sec ago', ip: '185.xxx.xxx.xxx', country: 'UAE' },
    { id: '2', path: '/api/contact', method: 'POST', status: 200, duration: 234, timestamp: '5 sec ago', ip: '82.xxx.xxx.xxx', country: 'Germany' },
    { id: '3', path: '/pricing', method: 'GET', status: 200, duration: 67, timestamp: '8 sec ago', ip: '41.xxx.xxx.xxx', country: 'Egypt' },
    { id: '4', path: '/solutions', method: 'GET', status: 200, duration: 52, timestamp: '12 sec ago', ip: '31.xxx.xxx.xxx', country: 'Saudi Arabia' },
    { id: '5', path: '/static/js/main.js', method: 'GET', status: 304, duration: 12, timestamp: '15 sec ago', ip: '185.xxx.xxx.xxx', country: 'UAE' },
    { id: '6', path: '/api/trial', method: 'POST', status: 201, duration: 456, timestamp: '18 sec ago', ip: '176.xxx.xxx.xxx', country: 'Turkey' },
    { id: '7', path: '/features', method: 'GET', status: 200, duration: 78, timestamp: '22 sec ago', ip: '89.xxx.xxx.xxx', country: 'Poland' },
    { id: '8', path: '/api/health', method: 'GET', status: 200, duration: 8, timestamp: '25 sec ago', ip: '127.0.0.1', country: 'Server' },
  ]);

  const refreshMetrics = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setServerMetrics(prev => prev.map(metric => ({
        ...metric,
        value: metric.value + (Math.random() - 0.5) * 5
      })));
      setLastUpdate(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'good': 
        return <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
          <CheckCircle className="h-3 w-3 mr-1" /> {language === 'ar' ? 'جيد' : 'Good'}
        </Badge>;
      case 'warning': 
        return <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
          <AlertTriangle className="h-3 w-3 mr-1" /> {language === 'ar' ? 'تحذير' : 'Warning'}
        </Badge>;
      case 'critical': 
        return <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
          <AlertTriangle className="h-3 w-3 mr-1" /> {language === 'ar' ? 'حرج' : 'Critical'}
        </Badge>;
      default: return null;
    }
  };

  const getMethodBadge = (method: string) => {
    const colors: Record<string, string> = {
      GET: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      POST: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      PUT: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      DELETE: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    };
    return <Badge className={colors[method] || 'bg-gray-100'}>{method}</Badge>;
  };

  const getStatusCodeBadge = (status: number) => {
    if (status >= 200 && status < 300) {
      return <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">{status}</Badge>;
    } else if (status >= 300 && status < 400) {
      return <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">{status}</Badge>;
    } else if (status >= 400 && status < 500) {
      return <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">{status}</Badge>;
    } else {
      return <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Server className="h-6 w-6 text-teal-600" />
            {language === 'ar' ? 'تحليلات الخادم' : 'Server Analytics'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {language === 'ar' 
              ? `آخر تحديث: ${lastUpdate.toLocaleTimeString('ar-SA')}` 
              : `Last updated: ${lastUpdate.toLocaleTimeString()}`}
          </p>
        </div>
        <Button 
          onClick={refreshMetrics} 
          disabled={isRefreshing}
          className="bg-teal-600 hover:bg-teal-700"
        >
          <RefreshCw className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} ${isRefreshing ? 'animate-spin' : ''}`} />
          {t.common.refresh}
        </Button>
      </div>

      {/* Server Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {serverMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${getStatusColor(metric.status)}/10`}>
                  <metric.icon className={`h-5 w-5 ${
                    metric.status === 'good' ? 'text-green-600' : 
                    metric.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
                  }`} />
                </div>
                {getStatusBadge(metric.status)}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {language === 'ar' ? metric.nameAr : metric.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {metric.value.toFixed(1)}
                  </span>
                  <span className="text-sm text-gray-500">
                    / {metric.max} {metric.unit}
                  </span>
                </div>
                <Progress 
                  value={(metric.value / metric.max) * 100} 
                  className="h-2"
                />
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  {metric.trend === 'up' && <TrendingUp className="h-3 w-3 text-yellow-500" />}
                  {metric.trend === 'down' && <TrendingDown className="h-3 w-3 text-green-500" />}
                  {metric.trend === 'stable' && <Activity className="h-3 w-3 text-blue-500" />}
                  <span>
                    {metric.trend === 'up' ? (language === 'ar' ? 'يرتفع' : 'Increasing') :
                     metric.trend === 'down' ? (language === 'ar' ? 'ينخفض' : 'Decreasing') :
                     (language === 'ar' ? 'مستقر' : 'Stable')}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Performance Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-teal-600" />
              {language === 'ar' ? 'إحصائيات الأداء' : 'Performance Stats'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-2 text-green-600 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Uptime</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {performanceStats.uptime}%
                </p>
                <p className="text-xs text-gray-500">
                  {performanceStats.uptimeDays} {language === 'ar' ? 'يوم' : 'days'}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{language === 'ar' ? 'وقت الاستجابة' : 'Response Time'}</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {performanceStats.responseTime}ms
                </p>
                <p className="text-xs text-gray-500">{language === 'ar' ? 'المتوسط' : 'Average'}</p>
              </div>

              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-2 text-purple-600 mb-2">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm font-medium">{language === 'ar' ? 'الطلبات/ثانية' : 'Requests/sec'}</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {performanceStats.requestsPerSecond.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">{language === 'ar' ? 'الذروة' : 'Peak'}</p>
              </div>

              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-2 text-red-600 mb-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm font-medium">{language === 'ar' ? 'معدل الأخطاء' : 'Error Rate'}</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {performanceStats.errorRate}%
                </p>
                <p className="text-xs text-gray-500">{language === 'ar' ? 'آخر 24 ساعة' : 'Last 24h'}</p>
              </div>

              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-2 text-orange-600 mb-2">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">{language === 'ar' ? 'اتصالات نشطة' : 'Active Connections'}</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {performanceStats.activeConnections}
                </p>
                <p className="text-xs text-gray-500">{language === 'ar' ? 'الآن' : 'Now'}</p>
              </div>

              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <Database className="h-4 w-4" />
                  <span className="text-sm font-medium">{language === 'ar' ? 'نسبة التخزين المؤقت' : 'Cache Hit Rate'}</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {performanceStats.cachedRequests}%
                </p>
                <p className="text-xs text-gray-500">{language === 'ar' ? 'من الطلبات' : 'Of requests'}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Requests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-teal-600" />
              {language === 'ar' ? 'آخر الطلبات' : 'Recent Requests'}
            </CardTitle>
            <CardDescription>
              {language === 'ar' ? 'الطلبات في الوقت الفعلي' : 'Real-time request log'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {recentRequests.map((request) => (
                <div 
                  key={request.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {getMethodBadge(request.method)}
                    <div>
                      <code className="text-sm text-gray-900 dark:text-white" dir="ltr">
                        {request.path}
                      </code>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <span>{request.country}</span>
                        <span>•</span>
                        <span>{request.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusCodeBadge(request.status)}
                    <span className="text-xs text-gray-500">{request.duration}ms</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Total Requests Card */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {language === 'ar' ? 'إجمالي الطلبات (24 ساعة)' : 'Total Requests (24h)'}
              </h3>
              <p className="text-3xl font-bold text-teal-600 mt-2">
                {performanceStats.totalRequests24h.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">
                {language === 'ar' ? 'متوسط الطلبات في الدقيقة' : 'Avg requests/minute'}
              </p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {Math.round(performanceStats.totalRequests24h / 1440).toLocaleString()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
