import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Language, LANGUAGES, AdminTranslations, LanguageConfig } from './types';
import { translations } from './translations';

// i18n Context Types
interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: AdminTranslations;
  direction: 'ltr' | 'rtl';
  isRTL: boolean;
  languageConfig: LanguageConfig;
  availableLanguages: LanguageConfig[];
}

// Create Context
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Storage key for language preference
const LANGUAGE_STORAGE_KEY = 'texafab_admin_language';

// Get initial language from storage or browser
const getInitialLanguage = (): Language => {
  // Check localStorage first
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && stored in LANGUAGES) {
      return stored as Language;
    }
    
    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang in LANGUAGES) {
      return browserLang as Language;
    }
  }
  
  // Default to English
  return 'en';
};

// Provider Props
interface I18nProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

// I18n Provider Component
export function I18nProvider({ children, defaultLanguage }: I18nProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    return defaultLanguage || getInitialLanguage();
  });

  // Update document direction and lang attribute
  useEffect(() => {
    const config = LANGUAGES[language];
    document.documentElement.dir = config.direction;
    document.documentElement.lang = language;
    
    // Save to localStorage
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    
    // Add RTL class for styling
    if (config.direction === 'rtl') {
      document.documentElement.classList.add('rtl');
      document.body.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
      document.body.classList.remove('rtl');
    }
  }, [language]);

  // Set language function
  const setLanguage = useCallback((lang: Language) => {
    if (lang in LANGUAGES) {
      setLanguageState(lang);
    }
  }, []);

  // Get current language config
  const languageConfig = LANGUAGES[language];

  // Context value
  const value: I18nContextType = {
    language,
    setLanguage,
    t: translations[language],
    direction: languageConfig.direction,
    isRTL: languageConfig.direction === 'rtl',
    languageConfig,
    availableLanguages: Object.values(LANGUAGES),
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

// Hook to use i18n
export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// Hook to get translations only
export function useTranslations() {
  const { t } = useI18n();
  return t;
}

// Hook to get language
export function useLanguage() {
  const { language, setLanguage, availableLanguages } = useI18n();
  return { language, setLanguage, availableLanguages };
}

// Hook to check RTL
export function useDirection() {
  const { direction, isRTL } = useI18n();
  return { direction, isRTL };
}

// Export types and config
export { LANGUAGES } from './types';
export type { Language, AdminTranslations, LanguageConfig } from './types';
