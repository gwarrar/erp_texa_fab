import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './components/AdminSidebar';
import { AdminHeader } from './components/AdminHeader';
import { StatusBar } from './components/StatusBar';
import { AdminProvider } from './context/AdminContext';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';

function AdminLayoutContent() {
  const { isRTL } = useI18n();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <AdminSidebar />
      <div className={cn(
        'pb-10 transition-all duration-300',
        isRTL ? 'mr-64' : 'ml-64'
      )}>
        <AdminHeader />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
      <StatusBar />
    </div>
  );
}

export function AdminLayout() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <AdminProvider>
          <AdminLayoutContent />
        </AdminProvider>
      </ProtectedRoute>
    </AuthProvider>
  );
}
