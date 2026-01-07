// Admin Dashboard Types

export interface HeroContent {
  id: string;
  title: Record<string, string>;
  subtitle: Record<string, string>;
  description: Record<string, string>;
  ctaPrimary: Record<string, string>;
  ctaSecondary: Record<string, string>;
  backgroundImage?: string;
  updatedAt: string;
}

export interface SolutionItem {
  id: string;
  icon: string;
  label: Record<string, string>;
  description: Record<string, string>;
  href: string;
  isActive: boolean;
  order: number;
}

export interface StatCounter {
  id: string;
  value: number;
  suffix: string;
  label: Record<string, string>;
  icon: string;
  isAnimated: boolean;
  isDynamic: boolean;
}

export interface FooterLink {
  id: string;
  label: Record<string, string>;
  href: string;
  section: 'solutions' | 'company' | 'support' | 'legal';
  order: number;
}

export interface SocialLink {
  id: string;
  platform: 'twitter' | 'linkedin' | 'facebook' | 'instagram' | 'youtube';
  url: string;
  isActive: boolean;
}

export interface ContactInfo {
  address: Record<string, string>;
  phone: string;
  email: string;
  workingHours: Record<string, string>;
}

// Pricing Types
export interface PricingPlan {
  id: string;
  name: Record<string, string>;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
  };
  features: PricingFeature[];
  roi: ROIData;
  isPopular: boolean;
  isEnterprise: boolean;
  order: number;
  isActive: boolean;
}

export interface PricingFeature {
  id: string;
  label: Record<string, string>;
  isIncluded: boolean;
  category: 'core' | 'advanced' | 'enterprise' | 'support';
}

export interface ROIData {
  salesIncrease: string;
  customerRetention: string;
  netProfit: string;
  roi: string;
  competitiveEdge?: string;
}

// Content Manager Types (Admin Team)
export interface ContentManager {
  id: string;
  fullName: string;
  email: string;
  role: 'super_admin' | 'admin' | 'editor' | 'viewer';
  permissions: string[];
  isActive: boolean;
  createdAt: string;
  lastLogin?: string;
  avatar?: string;
}

// Legacy User Type (for backward compatibility)
export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  companyName: string;
  status: 'trial' | 'active' | 'expired' | 'suspended';
  plan: string;
  createdAt: string;
  lastLogin?: string;
  trialEndDate?: string;
}

export interface AuthSettings {
  allowRegistration: boolean;
  requireEmailVerification: boolean;
  requirePhoneVerification: boolean;
  passwordMinLength: number;
  enableSocialLogin: boolean;
  socialProviders: string[];
}

// SEO Types
export interface SEOSettings {
  metaTitle: Record<string, string>;
  metaDescription: Record<string, string>;
  ogImage: string;
  keywords: string[];
  canonicalUrl: string;
}

export interface AnalyticsSettings {
  googleAnalyticsId?: string;
  facebookPixelId?: string;
  searchConsoleVerification?: string;
  customScripts: string[];
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'video' | 'document';
  size: number;
  uploadedAt: string;
  altText: Record<string, string>;
}

// System Types
export interface SystemStatus {
  serverHealth: 'healthy' | 'degraded' | 'down';
  apiLatency: number;
  databaseStatus: 'connected' | 'disconnected';
  lastBackup: string;
  uptime: number;
}

export interface LanguageSettings {
  availableLanguages: Language[];
  defaultLanguage: string;
  useEnglishNumerals: boolean;
  rtlLanguages: string[];
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  isActive: boolean;
  isRTL: boolean;
}

// Dashboard Stats
export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  trialUsers: number;
  monthlyRevenue: number;
  pageViews: number;
  conversionRate: number;
}

// News & Announcements
export interface NewsItem {
  id: string;
  title: Record<string, string>;
  content: Record<string, string>;
  excerpt: Record<string, string>;
  type: 'news' | 'update' | 'promotion' | 'announcement';
  isPublished: boolean;
  isPinned: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  author: string;
  image?: string;
}

export interface AnnouncementBar {
  id: string;
  text: Record<string, string>;
  link?: string;
  linkText?: Record<string, string>;
  backgroundColor: string;
  textColor: string;
  isActive: boolean;
  startDate?: string;
  endDate?: string;
}

// Feature/Testimonial Types
export interface Feature {
  id: string;
  icon: string;
  title: Record<string, string>;
  description: Record<string, string>;
  isActive: boolean;
  order: number;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: Record<string, string>;
  rating: number;
  avatar?: string;
  isActive: boolean;
  order: number;
}

export interface FAQItem {
  id: string;
  question: Record<string, string>;
  answer: Record<string, string>;
  category: string;
  isActive: boolean;
  order: number;
}
