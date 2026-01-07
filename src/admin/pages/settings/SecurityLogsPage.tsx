import { useState, useEffect } from 'react';
import {
  Shield,
  Clock,
  User,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RefreshCw,
  Monitor,
  Globe,
  Trash2,
  Download,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAuth } from '../../context/AuthContext';
import { getSecurityLogs } from '../../utils/security';

export function SecurityLogsPage() {
  const { securityLogs, refreshLogs } = useAuth();
  const [filter, setFilter] = useState('all');
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    refreshLogs();
    setLogs(getSecurityLogs());
  }, []);

  const filteredLogs = logs.filter((log) => {
    if (filter === 'all') return true;
    return log.type === filter;
  });

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'login_success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'login_failed':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'logout':
        return <User className="h-4 w-4 text-blue-500" />;
      case 'session_expired':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'rate_limited':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      default:
        return <Shield className="h-4 w-4 text-gray-500" />;
    }
  };

  const getEventBadge = (type: string) => {
    switch (type) {
      case 'login_success':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'login_failed':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'logout':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'session_expired':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'rate_limited':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getEventLabel = (type: string) => {
    switch (type) {
      case 'login_success':
        return 'تسجيل دخول ناجح';
      case 'login_failed':
        return 'محاولة دخول فاشلة';
      case 'logout':
        return 'تسجيل خروج';
      case 'session_expired':
        return 'انتهاء الجلسة';
      case 'rate_limited':
        return 'تقييد المعدل';
      default:
        return type;
    }
  };

  const stats = {
    total: logs.length,
    successful: logs.filter((l) => l.type === 'login_success').length,
    failed: logs.filter((l) => l.type === 'login_failed').length,
    rateLimited: logs.filter((l) => l.type === 'rate_limited').length,
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Security Logs</h1>
          <p className="text-gray-500 dark:text-gray-400">
            مراقبة جميع أحداث الأمان ومحاولات الوصول
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => setLogs(getSecurityLogs())}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.total}</p>
                <p className="text-sm text-gray-500">إجمالي الأحداث</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.successful}</p>
                <p className="text-sm text-gray-500">تسجيل دخول ناجح</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.failed}</p>
                <p className="text-sm text-gray-500">محاولات فاشلة</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.rateLimited}</p>
                <p className="text-sm text-gray-500">تقييد المعدل</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Filter by:</span>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Events</SelectItem>
                <SelectItem value="login_success">Successful Logins</SelectItem>
                <SelectItem value="login_failed">Failed Logins</SelectItem>
                <SelectItem value="logout">Logouts</SelectItem>
                <SelectItem value="session_expired">Session Expired</SelectItem>
                <SelectItem value="rate_limited">Rate Limited</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Security Events</CardTitle>
          <CardDescription>آخر {filteredLogs.length} حدث أمني</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Event Type</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>User Agent</TableHead>
                <TableHead className="w-[180px]">Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                    <Shield className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>لا توجد سجلات أمنية حتى الآن</p>
                  </TableCell>
                </TableRow>
              ) : (
                filteredLogs.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getEventIcon(log.type)}
                        <Badge className={getEventBadge(log.type)}>
                          {getEventLabel(log.type)}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {log.details || '-'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Monitor className="h-3 w-3" />
                        <span className="max-w-[200px] truncate">{log.userAgent || '-'}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-500">
                        {log.timestamp
                          ? new Date(log.timestamp).toLocaleString('ar-SA')
                          : '-'}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Security Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-teal-500" />
            Security Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <span>تم تفعيل الحماية من هجمات Brute Force (5 محاولات كحد أقصى)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <span>انتهاء صلاحية الجلسة تلقائياً بعد 30 دقيقة من عدم النشاط</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <span>تشفير كلمات المرور باستخدام SHA-256</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
              <span>استخدام Session Storage لمنع الوصول من نوافذ أخرى</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
