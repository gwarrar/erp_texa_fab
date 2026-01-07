import { Server, Database, Clock, Activity, Globe } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { cn } from '@/lib/utils';

export function StatusBar() {
  const { systemStatus, languageSettings } = useAdmin();

  if (!systemStatus) return null;

  const statusColor = {
    healthy: 'text-green-500',
    degraded: 'text-yellow-500',
    down: 'text-red-500',
  };

  const dbStatusColor = {
    connected: 'text-green-500',
    disconnected: 'text-red-500',
  };

  return (
    <footer className="fixed bottom-0 left-64 right-0 h-10 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-6 z-20">
      <div className="h-full flex items-center justify-between text-xs">
        {/* Left side - Server info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Server className={cn('h-3.5 w-3.5', statusColor[systemStatus.serverHealth])} />
            <span className="text-gray-600 dark:text-gray-400">
              Hetzner Germany
            </span>
            <span
              className={cn(
                'px-1.5 py-0.5 rounded text-[10px] font-medium uppercase',
                systemStatus.serverHealth === 'healthy'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : systemStatus.serverHealth === 'degraded'
                  ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              )}
            >
              {systemStatus.serverHealth}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Activity className="h-3.5 w-3.5 text-blue-500" />
            <span className="text-gray-600 dark:text-gray-400">
              API Latency: <span className="font-medium text-gray-900 dark:text-white">{systemStatus.apiLatency}ms</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Database className={cn('h-3.5 w-3.5', dbStatusColor[systemStatus.databaseStatus])} />
            <span className="text-gray-600 dark:text-gray-400">
              Database: <span className="font-medium capitalize">{systemStatus.databaseStatus}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-gray-400" />
            <span className="text-gray-600 dark:text-gray-400">
              Uptime: <span className="font-medium text-gray-900 dark:text-white">{systemStatus.uptime}%</span>
            </span>
          </div>
        </div>

        {/* Right side - Languages */}
        <div className="flex items-center gap-2">
          <Globe className="h-3.5 w-3.5 text-gray-400" />
          <span className="text-gray-600 dark:text-gray-400">
            Active Languages:
          </span>
          <div className="flex items-center gap-1">
            {languageSettings?.availableLanguages
              .filter((lang) => lang.isActive)
              .map((lang) => (
                <span
                  key={lang.code}
                  className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-[10px] font-medium uppercase"
                >
                  {lang.code}
                </span>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
