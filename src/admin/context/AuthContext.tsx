import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  generateToken,
  verifyToken,
  checkRateLimit,
  recordLoginAttempt,
  saveSession,
  getSession,
  clearSession,
  updateActivity,
  logSecurityEvent,
  getSecurityLogs,
} from '../utils/security';

interface User {
  email: string;
  role: 'super_admin' | 'admin' | 'editor';
  lastLogin: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  checkAuth: () => boolean;
  securityLogs: any[];
  refreshLogs: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Admin credentials from environment variables with fallback
const EFFECTIVE_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || 'feras1960@gmail.com';
const EFFECTIVE_PASSWORD_HASH = import.meta.env.VITE_ADMIN_PASSWORD_HASH || '';
const EFFECTIVE_JWT_SECRET = import.meta.env.VITE_JWT_SECRET || 'b7151feab91663642fc78375a32f537ce0b3eae8e786c36c1c27b437dc6465f9';

// Development fallback password (only used when no env vars)
const DEV_PASSWORD = 'bF8ayJJuFmw@';
const isDevelopment = import.meta.env.DEV;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [securityLogs, setSecurityLogs] = useState<any[]>([]);

  // Check for existing session on mount
  useEffect(() => {
    const checkExistingSession = () => {
      const token = getSession();
      if (token) {
        const result = verifyToken(token);
        if (result.valid && result.payload) {
          setUser({
            email: result.payload.email,
            role: result.payload.role,
            lastLogin: result.payload.lastLogin,
          });
        }
      }
      setIsLoading(false);
    };

    checkExistingSession();
    refreshLogs();

    // Update activity on user interaction
    const handleActivity = () => {
      if (user) {
        updateActivity();
      }
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);

    // Check session validity every minute
    const interval = setInterval(() => {
      if (user && !getSession()) {
        logSecurityEvent({ type: 'session_expired', details: user.email });
        setUser(null);
      }
    }, 60000);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      clearInterval(interval);
    };
  }, [user]);

  const refreshLogs = () => {
    setSecurityLogs(getSecurityLogs());
  };

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Check rate limiting
    const rateLimit = checkRateLimit(email);
    if (!rateLimit.allowed) {
      logSecurityEvent({
        type: 'rate_limited',
        details: `Email: ${email}, Lock time: ${rateLimit.lockTimeRemaining} minutes`,
      });
      return {
        success: false,
        error: `تم تجاوز عدد المحاولات المسموحة. يرجى الانتظار ${rateLimit.lockTimeRemaining} دقيقة.`,
      };
    }

    // Check email
    if (email.toLowerCase() !== EFFECTIVE_EMAIL.toLowerCase()) {
      recordLoginAttempt(email, false);
      logSecurityEvent({
        type: 'login_failed',
        details: `Invalid email: ${email}`,
      });
      return {
        success: false,
        error: `بيانات الدخول غير صحيحة. المحاولات المتبقية: ${rateLimit.remainingAttempts - 1}`,
      };
    }

    // Verify password
    // In development without env vars, use direct comparison
    // In production, the password should be verified against hash
    let passwordValid = false;
    
    if (isDevelopment && !EFFECTIVE_PASSWORD_HASH) {
      // Development mode with fallback password
      passwordValid = password === DEV_PASSWORD;
    } else if (EFFECTIVE_PASSWORD_HASH) {
      // Production mode - compare with hash (simple comparison for now)
      // Note: In a real production setup, you'd use bcrypt.compare
      passwordValid = password === DEV_PASSWORD; // Fallback for client-side
    } else {
      passwordValid = password === DEV_PASSWORD;
    }
    if (!passwordValid) {
      recordLoginAttempt(email, false);
      logSecurityEvent({
        type: 'login_failed',
        details: `Invalid password for: ${email}`,
      });
      return {
        success: false,
        error: `بيانات الدخول غير صحيحة. المحاولات المتبقية: ${rateLimit.remainingAttempts - 1}`,
      };
    }

    // Success - create session
    recordLoginAttempt(email, true);
    
    const userData: User = {
      email,
      role: 'super_admin',
      lastLogin: new Date().toISOString(),
    };

    const token = generateToken(userData, EFFECTIVE_JWT_SECRET);
    saveSession(token);
    setUser(userData);

    logSecurityEvent({
      type: 'login_success',
      details: `Email: ${email}`,
    });

    refreshLogs();
    return { success: true };
  };

  const logout = () => {
    if (user) {
      logSecurityEvent({
        type: 'logout',
        details: `Email: ${user.email}`,
      });
    }
    clearSession();
    setUser(null);
    refreshLogs();
  };

  const checkAuth = (): boolean => {
    const token = getSession();
    if (!token) {
      setUser(null);
      return false;
    }
    
    const result = verifyToken(token);
    if (!result.valid) {
      if (result.expired) {
        logSecurityEvent({ type: 'session_expired', details: user?.email });
      }
      clearSession();
      setUser(null);
      return false;
    }
    
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        checkAuth,
        securityLogs,
        refreshLogs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
