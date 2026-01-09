// ===========================================
// Admin V2 - Unified Admin Store Context
// ===========================================

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { 
  SiteId, 
  LanguageCode, 
  ThemeMode, 
  Notification,
  SITES,
  LANGUAGES,
  SiteFeature
} from '../types';
import { adminTranslations } from '../i18n/translations';
import { cms, type Language } from '@/lib/cms';
import { supabase } from '@/lib/supabase';

// ===========================================
// Types
// ===========================================

interface AdminState {
  // Auth
  isAuthenticated: boolean;
  user: {
    email: string;
    name: string;
    role: string;
  } | null;

  // Site Management
  currentSite: SiteId;
  currentContentLanguage: LanguageCode;

  // UI State
  adminLanguage: LanguageCode;
  theme: ThemeMode;
  sidebarCollapsed: boolean;

  // Notifications
  notifications: Notification[];
  unreadCount: number;

  // Loading States
  isLoading: boolean;
  isSaving: boolean;
  error: string | null;
}

interface AdminActions {
  // Auth
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;

  // Site Management
  setCurrentSite: (site: SiteId) => void;
  setContentLanguage: (lang: LanguageCode) => void;
  getSiteFeatures: () => SiteFeature[];
  getSiteSupportedLanguages: () => LanguageCode[];

  // UI
  setAdminLanguage: (lang: LanguageCode) => void;
  setTheme: (theme: ThemeMode) => void;
  toggleSidebar: () => void;

  // Notifications
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  clearNotifications: () => void;

  // Content Operations (Supabase)
  loadSiteContent: (contentType: string) => Promise<any>;
  saveSiteContent: (contentType: string, data: any) => Promise<boolean>;
  loadContentFromSupabase: (contentType: string, language?: LanguageCode) => Promise<any>;
  saveContentToSupabase: (contentType: string, data: any, language?: LanguageCode) => Promise<boolean>;
  deleteContentFromSupabase: (contentType: string, id: string) => Promise<boolean>;

  // Media Operations
  uploadFile: (file: File, folder?: string) => Promise<string | null>;
  deleteFile: (url: string) => Promise<boolean>;

  // Translation Helper
  t: (key: string) => string;
  getDirection: () => 'ltr' | 'rtl';
}

type AdminContextType = AdminState & AdminActions;

// ===========================================
// Context
// ===========================================

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// ===========================================
// Provider
// ===========================================

export function AdminStoreProvider({ children }: { children: ReactNode }) {
  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AdminState['user']>(null);

  // Site State
  const [currentSite, setCurrentSiteState] = useState<SiteId>('texafab');
  const [currentContentLanguage, setCurrentContentLanguage] = useState<LanguageCode>('en');

  // UI State
  const [adminLanguage, setAdminLanguageState] = useState<LanguageCode>('en');
  const [theme, setThemeState] = useState<ThemeMode>('system');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Notifications
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Loading States
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ===========================================
  // Initialize from localStorage
  // ===========================================

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('admin_token');
    const savedUser = localStorage.getItem('admin_user');
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
      } catch {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
      }
    }

    // Load preferences
    const savedSite = localStorage.getItem('admin_current_site') as SiteId;
    if (savedSite && SITES[savedSite]) {
      setCurrentSiteState(savedSite);
    }

    const savedAdminLang = localStorage.getItem('admin_language') as LanguageCode;
    if (savedAdminLang && LANGUAGES[savedAdminLang]) {
      setAdminLanguageState(savedAdminLang);
    }

    const savedTheme = localStorage.getItem('admin_theme') as ThemeMode;
    if (savedTheme) {
      setThemeState(savedTheme);
    }

    const savedSidebar = localStorage.getItem('admin_sidebar_collapsed');
    if (savedSidebar) {
      setSidebarCollapsed(savedSidebar === 'true');
    }
  }, []);

  // ===========================================
  // Theme Effect
  // ===========================================

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      // System preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }

    localStorage.setItem('admin_theme', theme);
  }, [theme]);

  // ===========================================
  // Auth Actions
  // ===========================================

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Verify against environment variables
      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
      const adminPasswordHash = import.meta.env.VITE_ADMIN_PASSWORD_HASH;

      if (!adminEmail || !adminPasswordHash) {
        setError('Admin credentials not configured');
        return false;
      }

      // Compare password directly (not hashed) for compatibility
      // Also try hash comparison as fallback
      const inputHash = await hashPassword(password);
      const passwordMatches = password === adminPasswordHash || inputHash === adminPasswordHash;
      
      if (email === adminEmail && passwordMatches) {
        const userData = {
          email,
          name: 'Administrator',
          role: 'super_admin'
        };

        const token = btoa(JSON.stringify({ email, timestamp: Date.now() }));
        
        localStorage.setItem('admin_token', token);
        localStorage.setItem('admin_user', JSON.stringify(userData));
        
        setUser(userData);
        setIsAuthenticated(true);

        addNotification({
          type: 'success',
          title: 'Login Successful',
          message: `Welcome back, ${userData.name}!`
        });

        return true;
      } else {
        setError('Invalid email or password');
        return false;
      }
    } catch (err) {
      setError('Login failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  // ===========================================
  // Site Management Actions
  // ===========================================

  const setCurrentSite = useCallback((site: SiteId) => {
    setCurrentSiteState(site);
    localStorage.setItem('admin_current_site', site);
    
    // Reset content language to site's default if current is not supported
    const siteConfig = SITES[site];
    if (!siteConfig.supportedLanguages.includes(currentContentLanguage)) {
      setCurrentContentLanguage(siteConfig.defaultLanguage);
    }
  }, [currentContentLanguage]);

  const setContentLanguage = useCallback((lang: LanguageCode) => {
    setCurrentContentLanguage(lang);
  }, []);

  const getSiteFeatures = useCallback((): SiteFeature[] => {
    return SITES[currentSite].features;
  }, [currentSite]);

  const getSiteSupportedLanguages = useCallback((): LanguageCode[] => {
    return SITES[currentSite].supportedLanguages;
  }, [currentSite]);

  // ===========================================
  // UI Actions
  // ===========================================

  const setAdminLanguage = useCallback((lang: LanguageCode) => {
    setAdminLanguageState(lang);
    localStorage.setItem('admin_language', lang);
    
    // Update document direction
    document.documentElement.dir = LANGUAGES[lang].direction;
    document.documentElement.lang = lang;
  }, []);

  const setTheme = useCallback((newTheme: ThemeMode) => {
    setThemeState(newTheme);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed(prev => {
      localStorage.setItem('admin_sidebar_collapsed', (!prev).toString());
      return !prev;
    });
  }, []);

  // ===========================================
  // Notification Actions
  // ===========================================

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notification,
      id: `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      read: false
    };

    setNotifications(prev => [newNotification, ...prev].slice(0, 50)); // Keep max 50
  }, []);

  const markNotificationRead = useCallback((id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  }, []);

  const markAllNotificationsRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }, []);

  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  // ===========================================
  // Content Operations
  // ===========================================

  // Legacy JSON file operations (kept for backward compatibility)
  const loadSiteContent = useCallback(async (contentType: string): Promise<any> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/data/${currentSite}/${contentType}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load ${contentType}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      setError(`Failed to load ${contentType}`);
      console.error(`Error loading ${contentType}:`, err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [currentSite]);

  const saveSiteContent = useCallback(async (contentType: string, data: any): Promise<boolean> => {
    setIsSaving(true);
    setError(null);

    try {
      const response = await fetch('/api/save.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          site: currentSite,
          file: `${contentType}.json`,
          data
        })
      });

      if (!response.ok) {
        throw new Error('Save failed');
      }

      addNotification({
        type: 'success',
        title: adminTranslations[adminLanguage]['msg.saveSuccess'] || 'Saved',
        message: `${contentType} saved successfully`
      });

      return true;
    } catch (err) {
      setError(`Failed to save ${contentType}`);
      addNotification({
        type: 'error',
        title: adminTranslations[adminLanguage]['msg.saveFailed'] || 'Error',
        message: `Failed to save ${contentType}`
      });
      return false;
    } finally {
      setIsSaving(false);
    }
  }, [currentSite, adminLanguage, addNotification]);

  // ===========================================
  // Supabase Content Operations (NEW)
  // ===========================================

  const loadContentFromSupabase = useCallback(async (contentType: string, language: LanguageCode = currentContentLanguage): Promise<any> => {
    setIsLoading(true);
    setError(null);

    try {
      const siteId = currentSite as 'texafab' | 'fincore' | 'dubai-stroy' | 'nextrev';
      const lang = language as Language;
      
      let data: any = null;

      switch (contentType) {
        case 'hero':
          data = await cms.hero.get(siteId, lang);
          break;
        case 'features':
          // Include inactive items for admin editing
          data = await cms.features.getAll(siteId, lang, true);
          break;
        case 'pricing':
          // Include inactive items for admin editing
          data = await cms.pricing.getAll(siteId, lang, true);
          break;
        case 'testimonials':
          data = await cms.testimonials.getAll(siteId, lang);
          break;
        case 'news':
          data = await cms.news.getAll(siteId, lang);
          break;
        case 'solutions':
          data = await cms.solutions.getAll(siteId, lang);
          break;
        case 'faq':
          data = await cms.faq.getAll(siteId, lang);
          break;
        case 'contact':
          data = await cms.contact.get(siteId, lang);
          break;
        case 'chat':
          data = await cms.chat.get(siteId);
          break;
        default:
          throw new Error(`Unknown content type: ${contentType}`);
      }

      return data;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : `Failed to load ${contentType}`;
      setError(errorMsg);
      console.error(`Error loading ${contentType} from Supabase:`, err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [currentSite, currentContentLanguage]);

  const saveContentToSupabase = useCallback(async (contentType: string, data: any, language: LanguageCode = currentContentLanguage): Promise<boolean> => {
    setIsSaving(true);
    setError(null);

    try {
      const siteId = currentSite as 'texafab' | 'fincore' | 'dubai-stroy' | 'nextrev';
      const lang = language as Language;

      switch (contentType) {
        case 'hero':
          await cms.hero.upsert(siteId, lang, data);
          break;
        case 'features':
          if (data.id) {
            await cms.features.update(data.id, data);
          } else {
            await cms.features.create({ ...data, site_id: siteId, language: lang });
          }
          break;
        case 'pricing':
          if (data.id) {
            await cms.pricing.update(data.id, data, data.features);
          } else {
            await cms.pricing.create({ ...data, site_id: siteId, language: lang }, data.features);
          }
          break;
        case 'testimonials':
          if (data.id) {
            await cms.testimonials.update(data.id, data);
          } else {
            await cms.testimonials.create({ ...data, site_id: siteId, language: lang });
          }
          break;
        case 'news':
          if (data.id) {
            await cms.news.update(data.id, data);
          } else {
            await cms.news.create({ ...data, site_id: siteId, language: lang });
          }
          break;
        case 'solutions':
          if (data.id) {
            await cms.solutions.update(data.id, data);
          } else {
            await cms.solutions.create({ ...data, site_id: siteId, language: lang });
          }
          break;
        case 'faq':
          if (data.id) {
            await cms.faq.update(data.id, data);
          } else {
            await cms.faq.create({ ...data, site_id: siteId, language: lang });
          }
          break;
        case 'contact':
          await cms.contact.upsert(siteId, lang, data);
          break;
        case 'chat':
          await cms.chat.upsert(siteId, data);
          break;
        default:
          throw new Error(`Unknown content type: ${contentType}`);
      }

      addNotification({
        type: 'success',
        title: adminTranslations[adminLanguage]['msg.saveSuccess'] || 'Saved',
        message: `${contentType} saved successfully`
      });

      return true;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : `Failed to save ${contentType}`;
      setError(errorMsg);
      addNotification({
        type: 'error',
        title: adminTranslations[adminLanguage]['msg.saveFailed'] || 'Error',
        message: errorMsg
      });
      return false;
    } finally {
      setIsSaving(false);
    }
  }, [currentSite, currentContentLanguage, adminLanguage, addNotification]);

  const deleteContentFromSupabase = useCallback(async (contentType: string, id: string): Promise<boolean> => {
    setIsSaving(true);
    setError(null);

    try {
      switch (contentType) {
        case 'features':
          await cms.features.delete(id);
          break;
        case 'pricing':
          await cms.pricing.delete(id);
          break;
        case 'testimonials':
          await cms.testimonials.delete(id);
          break;
        case 'news':
          await cms.news.delete(id);
          break;
        case 'solutions':
          await cms.solutions.delete(id);
          break;
        case 'faq':
          await cms.faq.delete(id);
          break;
        default:
          throw new Error(`Cannot delete content type: ${contentType}`);
      }

      addNotification({
        type: 'success',
        title: adminTranslations[adminLanguage]['msg.deleteSuccess'] || 'Deleted',
        message: `${contentType} item deleted successfully`
      });

      return true;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : `Failed to delete ${contentType}`;
      setError(errorMsg);
      addNotification({
        type: 'error',
        title: adminTranslations[adminLanguage]['msg.deleteFailed'] || 'Error',
        message: errorMsg
      });
      return false;
    } finally {
      setIsSaving(false);
    }
  }, [adminLanguage, addNotification]);

  // ===========================================
  // Media Operations
  // ===========================================

  const uploadFile = useCallback(async (file: File, folder?: string): Promise<string | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const siteId = currentSite as 'texafab' | 'fincore' | 'dubai-stroy' | 'nextrev';
      const result = await cms.media.uploadAndSave(file, siteId, folder || 'images', file.name);
      
      addNotification({
        type: 'success',
        title: adminTranslations[adminLanguage]['msg.uploadSuccess'] || 'Uploaded',
        message: `File uploaded successfully`
      });

      return result.url;
    } catch (err) {
      console.error('Upload error:', err);
      setError('Upload failed');
      addNotification({
        type: 'error',
        title: adminTranslations[adminLanguage]['msg.uploadFailed'] || 'Error',
        message: 'Failed to upload file'
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [currentSite, adminLanguage, addNotification]);

  const deleteFile = useCallback(async (url: string): Promise<boolean> => {
    try {
      await cms.media.deleteFromStorage(url);

      addNotification({
        type: 'success',
        title: adminTranslations[adminLanguage]['msg.deleteSuccess'] || 'Deleted',
        message: 'File deleted successfully'
      });

      return true;
    } catch (err) {
      console.error('Delete error:', err);
      addNotification({
        type: 'error',
        title: adminTranslations[adminLanguage]['msg.deleteFailed'] || 'Error',
        message: 'Failed to delete file'
      });
      return false;
    }
  }, [adminLanguage, addNotification]);

  // ===========================================
  // Translation Helper
  // ===========================================

  const t = useCallback((key: string): string => {
    return adminTranslations[adminLanguage]?.[key] || adminTranslations['en']?.[key] || key;
  }, [adminLanguage]);

  const getDirection = useCallback((): 'ltr' | 'rtl' => {
    return LANGUAGES[adminLanguage].direction;
  }, [adminLanguage]);

  // ===========================================
  // Computed Values
  // ===========================================

  const unreadCount = notifications.filter(n => !n.read).length;

  // ===========================================
  // Context Value
  // ===========================================

  const value: AdminContextType = {
    // State
    isAuthenticated,
    user,
    currentSite,
    currentContentLanguage,
    adminLanguage,
    theme,
    sidebarCollapsed,
    notifications,
    unreadCount,
    isLoading,
    isSaving,
    error,

    // Actions
    login,
    logout,
    setCurrentSite,
    setContentLanguage,
    getSiteFeatures,
    getSiteSupportedLanguages,
    setAdminLanguage,
    setTheme,
    toggleSidebar,
    addNotification,
    markNotificationRead,
    markAllNotificationsRead,
    clearNotifications,
    loadSiteContent,
    saveSiteContent,
    loadContentFromSupabase,
    saveContentToSupabase,
    deleteContentFromSupabase,
    uploadFile,
    deleteFile,
    t,
    getDirection
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

// ===========================================
// Hook
// ===========================================

export function useAdmin(): AdminContextType {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminStoreProvider');
  }
  return context;
}

// ===========================================
// Helper Functions
// ===========================================

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
