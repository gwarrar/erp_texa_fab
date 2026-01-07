import { Navigate, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

// Get secret path from environment
const getSecretPath = () => {
  const path = import.meta.env.VITE_ADMIN_SECRET_PATH || '/admin-portal';
  return path.startsWith('/') ? path : `/${path}`;
};
const SECRET_PATH = getSecretPath();

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, checkAuth } = useAuth();
  const location = useLocation();

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="text-center">
          <Loader2 className="h-10 w-10 animate-spin text-teal-500 mx-auto mb-4" />
          <p className="text-gray-400">جاري التحقق من الصلاحيات...</p>
        </div>
      </div>
    );
  }

  // Check if session is still valid
  if (!isAuthenticated || !checkAuth()) {
    // Redirect to login page with return URL
    return (
      <Navigate
        to={SECRET_PATH}
        state={{ from: location }}
        replace
      />
    );
  }

  return <>{children}</>;
}

export function getAdminLoginPath(): string {
  return SECRET_PATH;
}
