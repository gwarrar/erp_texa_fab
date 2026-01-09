// ===========================================
// Admin V2 - Main Admin Shell Layout
// ===========================================

import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAdmin } from '../../context/AdminStore';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';

export function AdminShell() {
  const { isAuthenticated, sidebarCollapsed, getDirection, theme } = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated && !location.pathname.includes('/admin-v2/login')) {
      navigate('/admin-v2/login');
    }
  }, [isAuthenticated, navigate, location.pathname]);

  // Don't render shell for login page
  if (location.pathname.includes('/admin-v2/login')) {
    return <Outlet />;
  }

  if (!isAuthenticated) {
    return null;
  }

  const direction = getDirection();

  return (
    <div 
      className={cn(
        "min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200",
        direction === 'rtl' && "font-arabic"
      )}
      dir={direction}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div 
        className={cn(
          "transition-all duration-300",
          sidebarCollapsed 
            ? (direction === 'rtl' ? 'mr-16' : 'ml-16')
            : (direction === 'rtl' ? 'mr-64' : 'ml-64')
        )}
      >
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="p-6 pt-20">
          <Outlet />
        </main>
      </div>

      {/* Toast Notifications */}
      <Toaster 
        position={direction === 'rtl' ? 'top-left' : 'top-right'}
        richColors
        closeButton
      />
    </div>
  );
}
