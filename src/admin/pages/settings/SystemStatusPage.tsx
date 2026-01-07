import {
  Server,
  Database,
  Clock,
  Activity,
  HardDrive,
  Wifi,
  Shield,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Download,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useAdmin } from '../../context/AdminContext';

export function SystemStatusPage() {
  const { systemStatus, dashboardStats } = useAdmin();

  const statusIcon = {
    healthy: <CheckCircle className="h-5 w-5 text-green-500" />,
    degraded: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
    down: <XCircle className="h-5 w-5 text-red-500" />,
  };

  const statusColor = {
    healthy: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    degraded: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    down: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };

  // Mock data for demonstration
  const serverMetrics = {
    cpuUsage: 35,
    memoryUsage: 62,
    diskUsage: 45,
    networkIn: '2.4 GB/day',
    networkOut: '1.8 GB/day',
    activeConnections: 127,
  };

  const recentBackups = [
    { id: 1, type: 'Full', date: '2024-12-20 03:00', size: '2.4 GB', status: 'success' },
    { id: 2, type: 'Incremental', date: '2024-12-19 15:00', size: '156 MB', status: 'success' },
    { id: 3, type: 'Incremental', date: '2024-12-19 03:00', size: '142 MB', status: 'success' },
    { id: 4, type: 'Full', date: '2024-12-18 03:00', size: '2.3 GB', status: 'success' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">System Status</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Monitor server health, performance, and backups
          </p>
        </div>
        <Button variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh Status
        </Button>
      </div>

      {/* Overall Status */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {statusIcon[systemStatus?.serverHealth || 'healthy']}
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  All Systems Operational
                </h2>
                <p className="text-gray-500">
                  Last checked: {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
            <Badge className={statusColor[systemStatus?.serverHealth || 'healthy']}>
              {systemStatus?.serverHealth?.toUpperCase() || 'HEALTHY'}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Activity className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-2xl font-bold">{systemStatus?.apiLatency || 45}ms</span>
            </div>
            <p className="text-sm text-gray-500">API Latency</p>
            <p className="text-xs text-green-500 mt-1">↓ 5ms from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-2xl font-bold">{systemStatus?.uptime || 99.99}%</span>
            </div>
            <p className="text-sm text-gray-500">Uptime (30 days)</p>
            <p className="text-xs text-gray-400 mt-1">99.9% SLA target</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Wifi className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-2xl font-bold">{serverMetrics.activeConnections}</span>
            </div>
            <p className="text-sm text-gray-500">Active Connections</p>
            <p className="text-xs text-green-500 mt-1">↑ 12% from average</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <Database className="h-5 w-5 text-orange-600" />
              </div>
              <Badge className="bg-green-100 text-green-700">Connected</Badge>
            </div>
            <p className="text-sm text-gray-500">Database Status</p>
            <p className="text-xs text-gray-400 mt-1">PostgreSQL 15</p>
          </CardContent>
        </Card>
      </div>

      {/* Server Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5 text-teal-500" />
            Server Resources
          </CardTitle>
          <CardDescription>Hetzner Germany • CPX41 Instance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">CPU Usage</span>
                <span className="text-sm text-gray-500">{serverMetrics.cpuUsage}%</span>
              </div>
              <Progress value={serverMetrics.cpuUsage} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Memory Usage</span>
                <span className="text-sm text-gray-500">{serverMetrics.memoryUsage}%</span>
              </div>
              <Progress value={serverMetrics.memoryUsage} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Disk Usage</span>
                <span className="text-sm text-gray-500">{serverMetrics.diskUsage}%</span>
              </div>
              <Progress value={serverMetrics.diskUsage} className="h-2" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                <HardDrive className="h-4 w-4" />
                Network In
              </div>
              <p className="text-lg font-semibold">{serverMetrics.networkIn}</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                <HardDrive className="h-4 w-4" />
                Network Out
              </div>
              <p className="text-lg font-semibold">{serverMetrics.networkOut}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Backups */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              Recent Backups
            </CardTitle>
            <CardDescription>Automatic daily backups to secure storage</CardDescription>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Create Backup
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentBackups.map((backup) => (
              <div
                key={backup.id}
                className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">{backup.type} Backup</p>
                    <p className="text-sm text-gray-500">{backup.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{backup.size}</span>
                  <Badge className="bg-green-100 text-green-700">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Success
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Service Status */}
      <Card>
        <CardHeader>
          <CardTitle>Service Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'API Gateway', status: 'healthy' },
              { name: 'Authentication', status: 'healthy' },
              { name: 'Database', status: 'healthy' },
              { name: 'Storage (S3)', status: 'healthy' },
              { name: 'Email Service', status: 'healthy' },
              { name: 'CDN', status: 'healthy' },
            ].map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <span className="font-medium">{service.name}</span>
                <div className="flex items-center gap-2">
                  {statusIcon[service.status as keyof typeof statusIcon]}
                  <span className="text-sm text-gray-500 capitalize">{service.status}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
