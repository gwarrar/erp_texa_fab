// ===========================================
// Admin V2 - Type Definitions
// ===========================================

// Site Types
export type SiteId = 'texafab' | 'fincore' | 'dubai-stroy' | 'nextrev' | 'exchange';

export interface SiteConfig {
  id: SiteId;
  name: string;
  nameAr: string;
  logo: string;
  primaryColor: string;
  supportedLanguages: LanguageCode[];
  defaultLanguage: LanguageCode;
  features: SiteFeature[];
}

export type SiteFeature = 
  | 'hero'
  | 'features' 
  | 'pricing'
  | 'testimonials'
  | 'news'
  | 'portfolio'
  | 'services'
  | 'products'
  | 'solutions'
  | 'faq'
  | 'contact'
  | 'blog'
  | 'chat';

// Language Types
export type LanguageCode = 'en' | 'ar' | 'tr' | 'ru' | 'uk' | 'pl' | 'ro';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  flag: string;
}

export const LANGUAGES: Record<LanguageCode, Language> = {
  en: { code: 'en', name: 'English', nativeName: 'English', direction: 'ltr', flag: '🇬🇧' },
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', direction: 'rtl', flag: '🇸🇦' },
  tr: { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', direction: 'ltr', flag: '🇹🇷' },
  ru: { code: 'ru', name: 'Russian', nativeName: 'Русский', direction: 'ltr', flag: '🇷🇺' },
  uk: { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', direction: 'ltr', flag: '🇺🇦' },
  pl: { code: 'pl', name: 'Polish', nativeName: 'Polski', direction: 'ltr', flag: '🇵🇱' },
  ro: { code: 'ro', name: 'Romanian', nativeName: 'Română', direction: 'ltr', flag: '🇷🇴' },
};

// Site Configurations
export const SITES: Record<SiteId, SiteConfig> = {
  texafab: {
    id: 'texafab',
    name: 'TexaCore ERP',
    nameAr: 'تيكسا كور',
    logo: '/images/texafab-logo.png',
    primaryColor: '#047857',
    supportedLanguages: ['en', 'ar', 'tr', 'ru', 'uk', 'pl', 'ro'],
    defaultLanguage: 'en',
    features: ['hero', 'features', 'pricing', 'testimonials', 'news', 'solutions', 'faq', 'contact', 'chat'],
  },
  fincore: {
    id: 'fincore',
    name: 'FinCore',
    nameAr: 'فين كور',
    logo: '/images/fincore-logo.png',
    primaryColor: '#1e40af',
    supportedLanguages: ['en', 'ar'],
    defaultLanguage: 'en',
    features: ['hero', 'features', 'pricing', 'solutions', 'contact', 'chat'],
  },
  'dubai-stroy': {
    id: 'dubai-stroy',
    name: 'Dubai Stroy',
    nameAr: 'دبي ستروي',
    logo: '/images/dubai-stroy-logo.png',
    primaryColor: '#b45309',
    supportedLanguages: ['en', 'ar', 'ru'],
    defaultLanguage: 'en',
    features: ['hero', 'features', 'pricing', 'portfolio', 'services', 'news', 'contact', 'chat'],
  },
  nextrev: {
    id: 'nextrev',
    name: 'Next Revolution',
    nameAr: 'الثورة القادمة',
    logo: '/images/nextrev-logo.png',
    primaryColor: '#7c3aed',
    supportedLanguages: ['en', 'ar'],
    defaultLanguage: 'en',
    features: ['hero', 'features', 'pricing', 'products', 'services', 'blog', 'contact', 'chat'],
  },
  exchange: {
    id: 'exchange',
    name: 'Exchange Core',
    nameAr: 'نواة الصرف',
    logo: '/images/exchange-logo.png',
    primaryColor: '#10b981',
    supportedLanguages: ['en', 'ar'],
    defaultLanguage: 'ar',
    features: ['hero', 'features', 'contact', 'chat'],
  },
};

// Content Types
export interface HeroContent {
  title: Record<LanguageCode, string>;
  subtitle: Record<LanguageCode, string>;
  description: Record<LanguageCode, string>;
  primaryCTA: {
    text: Record<LanguageCode, string>;
    link: string;
  };
  secondaryCTA: {
    text: Record<LanguageCode, string>;
    link: string;
  };
  backgroundImage: string;
  backgroundVideo?: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: Record<LanguageCode, string>;
  description: Record<LanguageCode, string>;
  image?: string;
}

export interface PricingPlan {
  id: string;
  name: Record<LanguageCode, string>;
  description: Record<LanguageCode, string>;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
  };
  features: Record<LanguageCode, string[]>;
  popular?: boolean;
  cta: {
    text: Record<LanguageCode, string>;
    link: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: Record<LanguageCode, string>;
  content: Record<LanguageCode, string>;
  avatar: string;
  rating: number;
}

export interface NewsItem {
  id: string;
  title: Record<LanguageCode, string>;
  excerpt: Record<LanguageCode, string>;
  content: Record<LanguageCode, string>;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface PortfolioItem {
  id: string;
  title: Record<LanguageCode, string>;
  description: Record<LanguageCode, string>;
  category: string;
  images: string[];
  client?: string;
  date?: string;
  link?: string;
}

export interface ServiceItem {
  id: string;
  title: Record<LanguageCode, string>;
  description: Record<LanguageCode, string>;
  icon: string;
  image?: string;
  features: Record<LanguageCode, string[]>;
}

export interface FAQItem {
  id: string;
  question: Record<LanguageCode, string>;
  answer: Record<LanguageCode, string>;
  category?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: Record<LanguageCode, string>;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface ChatSettings {
  enabled: boolean;
  provider: 'whatsapp' | 'tawk' | 'crisp' | 'custom';
  whatsappNumber?: string;
  tawkId?: string;
  crispId?: string;
  welcomeMessage: Record<LanguageCode, string>;
  offlineMessage: Record<LanguageCode, string>;
}

// User Types
export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'super_admin' | 'admin' | 'editor';
  permissions: string[];
  avatar?: string;
  lastLogin?: string;
  createdAt: string;
}

// Notification Types
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

// Theme Types
export type ThemeMode = 'light' | 'dark' | 'system';

// Upload Types
export interface UploadedFile {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'video' | 'document';
  size: number;
  uploadedAt: string;
  uploadedBy: string;
}
