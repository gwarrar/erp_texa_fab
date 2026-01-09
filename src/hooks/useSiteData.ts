import { useState, useEffect, useCallback } from 'react';

// Cache for loaded data to avoid repeated fetches
const dataCache: Record<string, { data: any; timestamp: number }> = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache

// Generic data fetching hook for site content
export function useSiteData<T>(file: string, language: string = 'en') {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Check cache first
      const cacheKey = `${file}_${language}`;
      const cached = dataCache[file];
      const now = Date.now();
      
      let allData: any;
      
      if (cached && (now - cached.timestamp) < CACHE_DURATION) {
        allData = cached.data;
      } else {
        try {
          const response = await fetch(`/data/${file}.json?t=${now}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch ${file}`);
          }
          const contentType = response.headers.get("content-type");
          if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Response is not JSON");
          }
          allData = await response.json();
          
          // Update cache
          dataCache[file] = { data: allData, timestamp: now };
        } catch (fetchErr) {
          // Use empty object as fallback
          allData = {};
        }
      }
      
      // Get language-specific data - always try to get the data
      // Components will handle fallback to static translations if needed
      const langData = allData[language] || allData['en'] || allData;
      setData(langData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      // Silently fail on fetch errors
    } finally {
      setLoading(false);
    }
  }, [file, language]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Function to refresh data (invalidate cache)
  const refresh = useCallback(() => {
    delete dataCache[file];
    fetchData();
  }, [file, fetchData]);

  return { data, loading, error, refresh };
}

// Get raw data without language filtering (for CMS editor)
export function useRawSiteData<T>(file: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/data/${file}.json?t=${Date.now()}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${file}`);
      }
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response is not JSON");
      }
      const allData = await response.json();
      setData(allData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setData(null);
      // Silently fail on fetch errors
    } finally {
      setLoading(false);
    }
  }, [file]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refresh = useCallback(() => {
    delete dataCache[file];
    fetchData();
  }, [file, fetchData]);

  return { data, loading, error, refresh };
}

// Clear all cache
export function clearSiteDataCache() {
  Object.keys(dataCache).forEach(key => delete dataCache[key]);
}

// Specific hooks for each data type
export function useHeroContent(language: string) {
  return useSiteData<HeroContent>('hero', language);
}

export function useFeaturesContent(language: string) {
  return useSiteData<FeaturesContent>('features', language);
}

export function useTestimonialsContent(language: string) {
  return useSiteData<TestimonialsContent>('testimonials', language);
}

export function usePricingContent(language: string) {
  return useSiteData<PricingContent>('pricing', language);
}

export function useFAQContent(language: string) {
  return useSiteData<FAQContent>('faq', language);
}

export function useFooterContent(language: string) {
  return useSiteData<FooterContent>('footer', language);
}

export function useTrustContent(language: string) {
  return useSiteData<TrustContent>('trust', language);
}

export function useStatsContent(language: string) {
  return useSiteData<StatsContent>('stats', language);
}

export function useSolutionsContent(language: string) {
  return useSiteData<SolutionsContent>('solutions', language);
}

export function useNewsContent(language: string) {
  return useSiteData<NewsContent>('news', language);
}

export function useCTAContent(language: string) {
  return useSiteData<CTAContent>('cta', language);
}

export function useAnnouncementContent(language: string) {
  return useSiteData<AnnouncementContent>('announcement', language);
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  
  useEffect(() => {
    fetch('/data/settings.json')
      .then(res => res.json())
      .then(setSettings)
      .catch(console.error);
  }, []);
  
  return settings;
}

// Type definitions
export interface HeroContent {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  stats: Array<{ value: string; label: string }>;
}

export interface FeaturesContent {
  title: string;
  subtitle: string;
  items: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface TestimonialsContent {
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

export interface PricingContent {
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

export interface FAQContent {
  title: string;
  subtitle: string;
  items: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export interface FooterContent {
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

export interface TrustContent {
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

export interface StatsContent {
  title: string;
  items: Array<{
    value: string;
    label: string;
    description: string;
  }>;
}

export interface SolutionsContent {
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

export interface NewsContent {
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

export interface CTAContent {
  badge: string;
  title: string;
  subtitle: string;
  primaryButton: string;
  secondaryButton: string;
  benefits: string[];
}

export interface AnnouncementContent {
  isActive: boolean;
  text: string;
  link: string;
  linkText: string;
  backgroundColor: string;
}

export interface SiteSettings {
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

export default useSiteData;
