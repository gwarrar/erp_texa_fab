import React, { useState, useEffect, useRef } from 'react';
import { 
  Bell, 
  Users, 
  Eye, 
  Mail, 
  Star, 
  AlertCircle,
  Globe,
  Clock,
  MapPin,
  Monitor,
  Smartphone,
  Tablet,
  Settings,
  Volume2,
  VolumeX,
  Trash2,
  Filter,
  RefreshCw,
  X,
  Check,
  MessageSquare,
  ShoppingCart,
  FileText,
  ExternalLink
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useI18n } from '@/lib/i18n';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Notification {
  id: string;
  type: 'visitor' | 'page_view' | 'form_submit' | 'trial_signup' | 'error' | 'contact';
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  timestamp: Date;
  metadata: {
    country?: string;
    city?: string;
    page?: string;
    device?: 'desktop' | 'mobile' | 'tablet';
    browser?: string;
    email?: string;
    company?: string;
    ip?: string;
  };
  read: boolean;
}

interface NotificationSettings {
  soundEnabled: boolean;
  visitorNotifications: boolean;
  pageViewNotifications: boolean;
  formNotifications: boolean;
  trialNotifications: boolean;
  errorNotifications: boolean;
}

// Countries with flags
const countryFlags: Record<string, string> = {
  'UAE': '🇦🇪',
  'Saudi Arabia': '🇸🇦',
  'Egypt': '🇪🇬',
  'Germany': '🇩🇪',
  'Turkey': '🇹🇷',
  'Poland': '🇵🇱',
  'Romania': '🇷🇴',
  'Ukraine': '🇺🇦',
  'Russia': '🇷🇺',
  'United Kingdom': '🇬🇧',
  'United States': '🇺🇸',
  'France': '🇫🇷',
  'Italy': '🇮🇹',
  'Spain': '🇪🇸',
  'Netherlands': '🇳🇱',
  'Ireland': '🇮🇪',
  'Unknown': '🌍'
};

// Generate realistic mock notifications
const generateMockNotifications = (): Notification[] => {
  const countries = ['UAE', 'Saudi Arabia', 'Egypt', 'Germany', 'Turkey', 'Poland', 'Romania', 'Ukraine', 'Russia'];
  const cities: Record<string, string[]> = {
    'UAE': ['Dubai', 'Abu Dhabi', 'Sharjah'],
    'Saudi Arabia': ['Riyadh', 'Jeddah', 'Dammam'],
    'Egypt': ['Cairo', 'Alexandria', 'Giza'],
    'Germany': ['Berlin', 'Munich', 'Hamburg'],
    'Turkey': ['Istanbul', 'Ankara', 'Izmir'],
    'Poland': ['Warsaw', 'Krakow', 'Gdansk'],
    'Romania': ['Bucharest', 'Cluj', 'Timisoara'],
    'Ukraine': ['Kyiv', 'Lviv', 'Odessa'],
    'Russia': ['Moscow', 'St. Petersburg', 'Kazan']
  };
  const pages = ['/', '/pricing', '/solutions', '/features', '/contact', '/fabric-management', '/warehouse-management', '/pos-system'];
  const devices: ('desktop' | 'mobile' | 'tablet')[] = ['desktop', 'mobile', 'tablet'];
  const browsers = ['Chrome', 'Safari', 'Firefox', 'Edge'];
  
  const notifications: Notification[] = [];
  
  for (let i = 0; i < 20; i++) {
    const country = countries[Math.floor(Math.random() * countries.length)];
    const city = cities[country][Math.floor(Math.random() * cities[country].length)];
    const types: Notification['type'][] = ['visitor', 'page_view', 'form_submit', 'trial_signup', 'contact'];
    const type = types[Math.floor(Math.random() * types.length)];
    const page = pages[Math.floor(Math.random() * pages.length)];
    const device = devices[Math.floor(Math.random() * devices.length)];
    const browser = browsers[Math.floor(Math.random() * browsers.length)];
    
    let title = '';
    let titleAr = '';
    let description = '';
    let descriptionAr = '';
    let email = '';
    let company = '';

    switch (type) {
      case 'visitor':
        title = `New visitor from ${city}, ${country}`;
        titleAr = `زائر جديد من ${city}، ${country}`;
        description = `Landed on ${page}`;
        descriptionAr = `وصل إلى ${page}`;
        break;
      case 'page_view':
        title = `Page view: ${page}`;
        titleAr = `مشاهدة صفحة: ${page}`;
        description = `Visitor from ${country}`;
        descriptionAr = `زائر من ${country}`;
        break;
      case 'form_submit':
        email = `user${i}@company.com`;
        title = `New contact form submission`;
        titleAr = `نموذج تواصل جديد`;
        description = email;
        descriptionAr = email;
        break;
      case 'trial_signup':
        email = `sales${i}@textile-company.com`;
        company = `Textile Corp ${i}`;
        title = `🎉 New trial signup!`;
        titleAr = `🎉 تسجيل تجريبي جديد!`;
        description = `${company} - ${email}`;
        descriptionAr = `${company} - ${email}`;
        break;
      case 'contact':
        email = `inquiry${i}@business.com`;
        title = `Sales inquiry received`;
        titleAr = `استفسار مبيعات جديد`;
        description = email;
        descriptionAr = email;
        break;
    }

    notifications.push({
      id: `notif-${i}`,
      type,
      title,
      titleAr,
      description,
      descriptionAr,
      timestamp: new Date(Date.now() - Math.random() * 3600000 * 24), // Random time in last 24h
      metadata: {
        country,
        city,
        page,
        device,
        browser,
        email: email || undefined,
        company: company || undefined,
        ip: `${Math.floor(Math.random() * 255)}.xxx.xxx.${Math.floor(Math.random() * 255)}`
      },
      read: Math.random() > 0.7
    });
  }

  return notifications.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

export function LiveNotificationsPage() {
  const { t, isRTL, language } = useI18n();
  const [notifications, setNotifications] = useState<Notification[]>(generateMockNotifications());
  const [filterType, setFilterType] = useState<string>('all');
  const [isLive, setIsLive] = useState(true);
  const [activeVisitors, setActiveVisitors] = useState(Math.floor(Math.random() * 50) + 10);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const [settings, setSettings] = useState<NotificationSettings>({
    soundEnabled: true,
    visitorNotifications: true,
    pageViewNotifications: false,
    formNotifications: true,
    trialNotifications: true,
    errorNotifications: true,
  });

  // Simulate real-time notifications
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      // Randomly add new notification
      if (Math.random() > 0.7) {
        const newNotification = generateMockNotifications()[0];
        newNotification.id = `notif-${Date.now()}`;
        newNotification.timestamp = new Date();
        newNotification.read = false;
        
        setNotifications(prev => [newNotification, ...prev.slice(0, 49)]);
        
        // Play sound if enabled
        if (settings.soundEnabled) {
          // In a real app, you would play a notification sound
          console.log('🔔 New notification sound');
        }
      }

      // Update active visitors
      setActiveVisitors(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(5, Math.min(100, prev + change));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isLive, settings.soundEnabled]);

  const filteredNotifications = notifications.filter(n => {
    if (filterType === 'all') return true;
    return n.type === filterType;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'visitor': return <Users className="h-4 w-4 text-blue-600" />;
      case 'page_view': return <Eye className="h-4 w-4 text-purple-600" />;
      case 'form_submit': return <Mail className="h-4 w-4 text-green-600" />;
      case 'trial_signup': return <Star className="h-4 w-4 text-yellow-600" />;
      case 'error': return <AlertCircle className="h-4 w-4 text-red-600" />;
      case 'contact': return <MessageSquare className="h-4 w-4 text-teal-600" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const getDeviceIcon = (device?: string) => {
    switch (device) {
      case 'desktop': return <Monitor className="h-3 w-3" />;
      case 'mobile': return <Smartphone className="h-3 w-3" />;
      case 'tablet': return <Tablet className="h-3 w-3" />;
      default: return <Globe className="h-3 w-3" />;
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (seconds < 60) return language === 'ar' ? `${seconds} ثانية` : `${seconds}s ago`;
    if (minutes < 60) return language === 'ar' ? `${minutes} دقيقة` : `${minutes}m ago`;
    if (hours < 24) return language === 'ar' ? `${hours} ساعة` : `${hours}h ago`;
    return date.toLocaleDateString();
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Bell className="h-6 w-6 text-orange-600" />
            {language === 'ar' ? 'الإشعارات الفورية' : 'Live Notifications'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {language === 'ar' 
              ? 'مراقبة نشاط الزوار والإشعارات في الوقت الفعلي' 
              : 'Monitor visitor activity and notifications in real-time'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isLive ? 'bg-green-100 dark:bg-green-900/30' : 'bg-gray-100 dark:bg-gray-800'}`}>
            <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
            <span className={`text-sm font-medium ${isLive ? 'text-green-700 dark:text-green-400' : 'text-gray-600'}`}>
              {isLive ? (language === 'ar' ? 'مباشر' : 'Live') : (language === 'ar' ? 'متوقف' : 'Paused')}
            </span>
          </div>
          <Button 
            variant={isLive ? 'outline' : 'default'}
            onClick={() => setIsLive(!isLive)}
          >
            {isLive ? (language === 'ar' ? 'إيقاف' : 'Pause') : (language === 'ar' ? 'تشغيل' : 'Resume')}
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {language === 'ar' ? 'الزوار النشطون الآن' : 'Active Visitors Now'}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {activeVisitors}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {language === 'ar' ? 'إشعارات غير مقروءة' : 'Unread Notifications'}
                </p>
                <p className="text-3xl font-bold text-orange-600">
                  {unreadCount}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <Bell className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {language === 'ar' ? 'نماذج اليوم' : 'Forms Today'}
                </p>
                <p className="text-3xl font-bold text-green-600">
                  {notifications.filter(n => n.type === 'form_submit' || n.type === 'contact').length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {language === 'ar' ? 'تسجيلات تجريبية' : 'Trial Signups'}
                </p>
                <p className="text-3xl font-bold text-yellow-600">
                  {notifications.filter(n => n.type === 'trial_signup').length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Notifications List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  {language === 'ar' ? 'سجل الإشعارات' : 'Notification Feed'}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-[150px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{language === 'ar' ? 'الكل' : 'All'}</SelectItem>
                      <SelectItem value="visitor">{language === 'ar' ? 'الزوار' : 'Visitors'}</SelectItem>
                      <SelectItem value="page_view">{language === 'ar' ? 'المشاهدات' : 'Page Views'}</SelectItem>
                      <SelectItem value="form_submit">{language === 'ar' ? 'النماذج' : 'Forms'}</SelectItem>
                      <SelectItem value="trial_signup">{language === 'ar' ? 'التسجيلات' : 'Signups'}</SelectItem>
                      <SelectItem value="contact">{language === 'ar' ? 'الاستفسارات' : 'Inquiries'}</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm" onClick={markAllAsRead}>
                    <Check className="h-4 w-4 mr-1" />
                    {language === 'ar' ? 'قراءة الكل' : 'Mark all read'}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {filteredNotifications.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <Bell className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>{language === 'ar' ? 'لا توجد إشعارات' : 'No notifications'}</p>
                  </div>
                ) : (
                  filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                        notification.read 
                          ? 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800' 
                          : 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800'
                      }`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className={`p-2 rounded-lg ${
                        notification.type === 'trial_signup' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                        notification.type === 'form_submit' || notification.type === 'contact' ? 'bg-green-100 dark:bg-green-900/30' :
                        notification.type === 'visitor' ? 'bg-blue-100 dark:bg-blue-900/30' :
                        'bg-gray-100 dark:bg-gray-800'
                      }`}>
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {language === 'ar' ? notification.titleAr : notification.title}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              {language === 'ar' ? notification.descriptionAr : notification.description}
                            </p>
                          </div>
                          {!notification.read && (
                            <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                          )}
                        </div>
                        <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {formatTimestamp(notification.timestamp)}
                          </span>
                          {notification.metadata.country && (
                            <span className="flex items-center gap-1">
                              <span>{countryFlags[notification.metadata.country] || '🌍'}</span>
                              {notification.metadata.city}
                            </span>
                          )}
                          {notification.metadata.device && (
                            <span className="flex items-center gap-1">
                              {getDeviceIcon(notification.metadata.device)}
                              {notification.metadata.browser}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Settings & Active Visitors */}
        <div className="space-y-6">
          {/* Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                {language === 'ar' ? 'إعدادات الإشعارات' : 'Notification Settings'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {settings.soundEnabled ? (
                    <Volume2 className="h-4 w-4 text-gray-600" />
                  ) : (
                    <VolumeX className="h-4 w-4 text-gray-400" />
                  )}
                  <Label>{language === 'ar' ? 'الصوت' : 'Sound'}</Label>
                </div>
                <Switch 
                  checked={settings.soundEnabled}
                  onCheckedChange={(checked) => setSettings(prev => ({ ...prev, soundEnabled: checked }))}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label>{language === 'ar' ? 'الزوار الجدد' : 'New Visitors'}</Label>
                <Switch 
                  checked={settings.visitorNotifications}
                  onCheckedChange={(checked) => setSettings(prev => ({ ...prev, visitorNotifications: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label>{language === 'ar' ? 'مشاهدات الصفحات' : 'Page Views'}</Label>
                <Switch 
                  checked={settings.pageViewNotifications}
                  onCheckedChange={(checked) => setSettings(prev => ({ ...prev, pageViewNotifications: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label>{language === 'ar' ? 'نماذج التواصل' : 'Contact Forms'}</Label>
                <Switch 
                  checked={settings.formNotifications}
                  onCheckedChange={(checked) => setSettings(prev => ({ ...prev, formNotifications: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label>{language === 'ar' ? 'التسجيلات التجريبية' : 'Trial Signups'}</Label>
                <Switch 
                  checked={settings.trialNotifications}
                  onCheckedChange={(checked) => setSettings(prev => ({ ...prev, trialNotifications: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label>{language === 'ar' ? 'الأخطاء' : 'Errors'}</Label>
                <Switch 
                  checked={settings.errorNotifications}
                  onCheckedChange={(checked) => setSettings(prev => ({ ...prev, errorNotifications: checked }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Active Visitors by Country */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                {language === 'ar' ? 'الزوار حسب الدولة' : 'Visitors by Country'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { country: 'UAE', visitors: 12, flag: '🇦🇪' },
                  { country: 'Saudi Arabia', visitors: 8, flag: '🇸🇦' },
                  { country: 'Egypt', visitors: 6, flag: '🇪🇬' },
                  { country: 'Germany', visitors: 5, flag: '🇩🇪' },
                  { country: 'Turkey', visitors: 4, flag: '🇹🇷' },
                  { country: 'Poland', visitors: 3, flag: '🇵🇱' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{item.flag}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.country}</span>
                    </div>
                    <Badge variant="outline">{item.visitors}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>{language === 'ar' ? 'إجراءات سريعة' : 'Quick Actions'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start" onClick={clearAll}>
                <Trash2 className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {language === 'ar' ? 'مسح جميع الإشعارات' : 'Clear All Notifications'}
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="/" target="_blank">
                  <ExternalLink className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {language === 'ar' ? 'فتح الموقع' : 'Open Website'}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
