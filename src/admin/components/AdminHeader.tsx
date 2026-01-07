import { Bell, Search, Sun, Moon, User, Save, RefreshCw, LogOut, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAdmin } from '../context/AdminContext';
import { useAuth } from '../context/AuthContext';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/components/landing/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

export function AdminHeader() {
  const { saveChanges, isSaving, systemStatus } = useAdmin();
  const { user, logout } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const { t, isRTL } = useI18n();

  const handleLogout = () => {
    logout();
    const path = import.meta.env.VITE_ADMIN_SECRET_PATH || '/admin-portal';
    navigate(path.startsWith('/') ? path : `/${path}`);
  };

  const handleSave = async () => {
    try {
      await saveChanges();
    } catch (e) {
      console.error('Failed to save:', e);
    }
  };

  return (
    <header className="sticky top-0 z-30 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6">
      <div className="h-full flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400`} />
            <Input
              placeholder={t.common.search}
              className={`${isRTL ? 'pr-10' : 'pl-10'} bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700`}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* System Status */}
          {systemStatus && (
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800">
              <div
                className={`w-2 h-2 rounded-full ${
                  systemStatus.serverHealth === 'healthy'
                    ? 'bg-green-500'
                    : systemStatus.serverHealth === 'degraded'
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
              />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Hetzner DE • {systemStatus.apiLatency}ms
              </span>
            </div>
          )}

          {/* Save Button */}
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-teal-600 hover:bg-teal-700"
          >
            {isSaving ? (
              <RefreshCw className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} animate-spin`} />
            ) : (
              <Save className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            )}
            {isSaving ? t.common.loading : t.common.save}
          </Button>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className={`absolute -top-1 ${isRTL ? '-left-1' : '-right-1'} h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs`}>
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isRTL ? 'start' : 'end'} className="w-80">
              <DropdownMenuLabel>{t.settings.notifications}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                <span className="font-medium">New user registration</span>
                <span className="text-xs text-gray-500">Ahmed from Egypt signed up 2 hours ago</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                <span className="font-medium">Trial expiring soon</span>
                <span className="text-xs text-gray-500">5 trials expiring in the next 3 days</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                <span className="font-medium">System backup complete</span>
                <span className="text-xs text-gray-500">Daily backup completed successfully</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white">
                    {user?.email?.charAt(0).toUpperCase() || 'A'}
                  </AvatarFallback>
                </Avatar>
                <div className={`hidden md:block ${isRTL ? 'text-right' : 'text-left'}`}>
                  <span className="text-sm font-medium block">{user?.email?.split('@')[0] || 'Admin'}</span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    {user?.role === 'super_admin' ? t.users.roles.admin : user?.role || t.users.roles.admin}
                  </span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isRTL ? 'start' : 'end'} className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{user?.email || 'Admin'}</p>
                  <p className="text-xs text-gray-500">
                    {t.users.lastLogin}: {user?.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t.settings.general}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Shield className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t.security.logs}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
                <LogOut className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t.auth.logout}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
