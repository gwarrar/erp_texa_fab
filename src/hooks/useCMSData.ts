import { useState, useEffect, useCallback } from 'react';
import { fetchData, saveData, DataFile, getLocalizedData } from '@/lib/api';

interface UseCMSDataOptions {
  language?: string;
  autoFetch?: boolean;
}

interface UseCMSDataReturn<T> {
  data: T | null;
  localizedData: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  save: (newData: T) => Promise<boolean>;
  updateField: <K extends keyof T>(field: K, value: T[K]) => void;
}

export function useCMSData<T>(
  file: DataFile,
  options: UseCMSDataOptions = {}
): UseCMSDataReturn<T> {
  const { language = 'en', autoFetch = true } = options;
  
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await fetchData<T>(file);
      if (result) {
        setData(result);
      } else {
        setError(`Failed to load ${file}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [file]);

  const save = useCallback(async (newData: T): Promise<boolean> => {
    try {
      const success = await saveData(file, newData);
      if (success) {
        setData(newData);
      }
      return success;
    } catch (err) {
      console.error('Save error:', err);
      return false;
    }
  }, [file]);

  const updateField = useCallback(<K extends keyof T>(field: K, value: T[K]) => {
    setData(prev => {
      if (!prev) return prev;
      return { ...prev, [field]: value };
    });
  }, []);

  useEffect(() => {
    if (autoFetch) {
      refetch();
    }
  }, [autoFetch, refetch]);

  // Get localized version of data
  const localizedData = data ? getLocalizedData(data as Record<string, unknown>, language) as T | null : null;

  return {
    data,
    localizedData,
    loading,
    error,
    refetch,
    save,
    updateField,
  };
}

// Specific hooks for each data type
export function useHeroData(language: string) {
  return useCMSData<HeroData>('hero', { language });
}

export function useFeaturesData(language: string) {
  return useCMSData<FeaturesData>('features', { language });
}

export function useTestimonialsData(language: string) {
  return useCMSData<TestimonialsData>('testimonials', { language });
}

export function usePricingData(language: string) {
  return useCMSData<PricingData>('pricing', { language });
}

export function useFAQData(language: string) {
  return useCMSData<FAQData>('faq', { language });
}

export function useFooterData(language: string) {
  return useCMSData<FooterData>('footer', { language });
}

export function useTrustData(language: string) {
  return useCMSData<TrustData>('trust', { language });
}

export function useStatsData(language: string) {
  return useCMSData<StatsData>('stats', { language });
}

export function useSolutionsData(language: string) {
  return useCMSData<SolutionsData>('solutions', { language });
}

export function useSettingsData() {
  return useCMSData<SettingsData>('settings', { autoFetch: true });
}

export function usePagesData() {
  return useCMSData<PagesData>('pages', { autoFetch: true });
}

export function useNewsData(language: string) {
  return useCMSData<NewsData>('news', { language });
}

// Type definitions
export interface HeroData {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  stats: Array<{ value: string; label: string }>;
}

export interface FeaturesData {
  title: string;
  subtitle: string;
  items: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  items: Array<{
    id: string;
    name: string;
    role: string;
    company: string;
    location: string;
    content: string;
    rating: number;
    image: string;
  }>;
}

export interface PricingData {
  title: string;
  subtitle: string;
  currency: string;
  period: string;
  plans: Array<{
    id: string;
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted: boolean;
    cta: string;
  }>;
}

export interface FAQData {
  title: string;
  subtitle: string;
  items: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export interface FooterData {
  companyName: string;
  tagline: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  links: {
    product: Array<{ label: string; href: string }>;
    company: Array<{ label: string; href: string }>;
    resources: Array<{ label: string; href: string }>;
    legal: Array<{ label: string; href: string }>;
  };
  social: {
    linkedin: string;
    twitter: string;
    facebook: string;
  };
  copyright: string;
  developedBy: string;
}

export interface TrustData {
  title: string;
  subtitle: string;
  badges: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  partners: Array<{
    name: string;
    logo: string;
  }>;
}

export interface StatsData {
  title: string;
  items: Array<{
    value: string;
    label: string;
    description: string;
  }>;
}

export interface SolutionsData {
  title: string;
  subtitle: string;
  items: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
    href: string;
  }>;
}

export interface SettingsData {
  siteName: string;
  siteDescription: string;
  defaultLanguage: string;
  supportedLanguages: string[];
  logo: {
    type: string;
    primaryColor: string;
    secondaryColor: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    address: {
      street: string;
      city: string;
      country: string;
      postalCode: string;
    };
  };
  social: {
    linkedin: string;
    twitter: string;
    facebook: string;
    youtube: string;
  };
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    keywords: string[];
  };
  analytics: {
    googleAnalyticsId: string;
    facebookPixelId: string;
  };
  features: {
    trialDays: number;
    showPricing: boolean;
    enableChat: boolean;
    enableNewsletter: boolean;
  };
}

export interface PagesData {
  pages: Array<{
    id: string;
    slug: string;
    enabled: boolean;
    title: Record<string, string>;
  }>;
}

export interface NewsData {
  title: string;
  subtitle: string;
  items: Array<{
    id: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    href: string;
  }>;
}

export default useCMSData;
