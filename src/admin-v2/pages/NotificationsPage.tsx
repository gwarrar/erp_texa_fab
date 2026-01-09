// ===========================================
// Admin V2 - Notifications Page
// ===========================================

import React from 'react';
import { useAdmin } from '../context/AdminStore';
import { cn } from '@/lib/utils';
import {
  Bell,
  Check,
  Trash2,
  CheckCheck,
  Info,
  AlertTriangle,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function NotificationsPage() {
  const { 
    notifications, 
    unreadCount, 
    markNotificationRead, 
    markAllNotificationsRead, 
    clearNotifications,
    getDirection 
  } = useAdmin();
  
  const direction = getDirection();
  const isRTL = direction === 'rtl';

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return CheckCircle2;
      case 'error': return AlertCircle;
      case 'warning': return AlertTriangle;
      default: return Info;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20';
      case 'error': return 'text-red-500 bg-red-50 dark:bg-red-900/20';
      case 'warning': return 'text-amber-500 bg-amber-50 dark:bg-amber-900/20';
      default: return 'text-blue-500 bg-blue-50 dark:bg-blue-900/20';
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return isRTL ? 'الآن' : 'Just now';
    if (diffMins < 60) return isRTL ? `منذ ${diffMins} دقيقة` : `${diffMins}m ago`;
    if (diffHours < 24) return isRTL ? `منذ ${diffHours} ساعة` : `${diffHours}h ago`;
    if (diffDays < 7) return isRTL ? `منذ ${diffDays} يوم` : `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Bell size={28} />
            {isRTL ? 'الإشعارات' : 'Notifications'}
            {unreadCount > 0 && (
              <span className="px-2 py-0.5 text-sm bg-red-500 text-white rounded-full">
                {unreadCount}
              </span>
            )}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {isRTL ? 'جميع الإشعارات والتنبيهات' : 'All your notifications and alerts'}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={markAllNotificationsRead}
            >
              <CheckCheck size={18} />
              {isRTL ? 'تعليم الكل كمقروء' : 'Mark All Read'}
            </Button>
          )}
          {notifications.length > 0 && (
            <Button 
              variant="outline" 
              className="gap-2 text-red-500 hover:text-red-600"
              onClick={clearNotifications}
            >
              <Trash2 size={18} />
              {isRTL ? 'مسح الكل' : 'Clear All'}
            </Button>
          )}
        </div>
      </div>

      {/* Notifications List */}
      {notifications.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <Bell size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {isRTL ? 'لا توجد إشعارات' : 'No notifications'}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {isRTL ? 'ستظهر الإشعارات الجديدة هنا' : 'New notifications will appear here'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = getNotificationIcon(notification.type);
            const colorClass = getNotificationColor(notification.type);
            
            return (
              <Card 
                key={notification.id}
                className={cn(
                  "transition-all",
                  !notification.read && "border-l-4 border-l-emerald-500"
                )}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0", colorClass)}>
                      <Icon size={20} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className={cn(
                            "font-semibold text-gray-900 dark:text-white",
                            !notification.read && "font-bold"
                          )}>
                            {notification.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                            {formatTime(notification.timestamp)}
                          </p>
                        </div>
                        
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex-shrink-0"
                            onClick={() => markNotificationRead(notification.id)}
                          >
                            <Check size={16} />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
