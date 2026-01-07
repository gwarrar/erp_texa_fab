import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  HeroContent,
  SolutionItem,
  StatCounter,
  PricingPlan,
  User,
  SEOSettings,
  SystemStatus,
  LanguageSettings,
  DashboardStats,
  ContactInfo,
  FooterLink,
  SocialLink,
  AnalyticsSettings,
  MediaItem,
  AuthSettings,
  NewsItem,
  AnnouncementBar,
  Feature,
  Testimonial,
  FAQItem,
} from '../types';

interface AdminContextType {
  // Hero & Landing
  heroContent: HeroContent | null;
  setHeroContent: (content: HeroContent) => void;
  solutions: SolutionItem[];
  setSolutions: (solutions: SolutionItem[]) => void;
  stats: StatCounter[];
  setStats: (stats: StatCounter[]) => void;
  features: Feature[];
  setFeatures: (features: Feature[]) => void;
  testimonials: Testimonial[];
  setTestimonials: (testimonials: Testimonial[]) => void;
  faqItems: FAQItem[];
  setFaqItems: (items: FAQItem[]) => void;
  
  // Footer
  contactInfo: ContactInfo | null;
  setContactInfo: (info: ContactInfo) => void;
  footerLinks: FooterLink[];
  setFooterLinks: (links: FooterLink[]) => void;
  socialLinks: SocialLink[];
  setSocialLinks: (links: SocialLink[]) => void;
  
  // Pricing
  pricingPlans: PricingPlan[];
  setPricingPlans: (plans: PricingPlan[]) => void;
  
  // Users
  users: User[];
  setUsers: (users: User[]) => void;
  authSettings: AuthSettings | null;
  setAuthSettings: (settings: AuthSettings) => void;
  
  // SEO
  seoSettings: SEOSettings | null;
  setSeoSettings: (settings: SEOSettings) => void;
  analyticsSettings: AnalyticsSettings | null;
  setAnalyticsSettings: (settings: AnalyticsSettings) => void;
  mediaLibrary: MediaItem[];
  setMediaLibrary: (items: MediaItem[]) => void;
  
  // News & Announcements
  newsItems: NewsItem[];
  setNewsItems: (items: NewsItem[]) => void;
  announcementBar: AnnouncementBar | null;
  setAnnouncementBar: (bar: AnnouncementBar | null) => void;
  
  // System
  systemStatus: SystemStatus | null;
  languageSettings: LanguageSettings | null;
  setLanguageSettings: (settings: LanguageSettings) => void;
  dashboardStats: DashboardStats | null;
  setDashboardStats: (stats: DashboardStats) => void;
  
  // Actions
  saveChanges: () => Promise<void>;
  isLoading: boolean;
  isSaving: boolean;
  error: string | null;
}

const AdminContext = createContext<AdminContextType | null>(null);

// Mock initial data
const initialHeroContent: HeroContent = {
  id: '1',
  title: {
    ar: 'نظام ERP الأول للأقمشة',
    en: 'The #1 ERP System for Textiles',
  },
  subtitle: {
    ar: 'تكسافاب',
    en: 'TexaFab',
  },
  description: {
    ar: 'حل متكامل لإدارة تجارة الأقمشة بالجملة والتجزئة',
    en: 'Complete solution for wholesale and retail fabric trade management',
  },
  ctaPrimary: {
    ar: 'ابدأ تجربة مجانية',
    en: 'Start Free Trial',
  },
  ctaSecondary: {
    ar: 'احجز عرض توضيحي',
    en: 'Book a Demo',
  },
  updatedAt: new Date().toISOString(),
};

const initialSolutions: SolutionItem[] = [
  {
    id: '1',
    icon: 'Container',
    label: { ar: 'تتبع الكونتينرات', en: 'Container Tracking' },
    description: { ar: 'تتبع شحناتك في الوقت الفعلي', en: 'Track your shipments in real-time' },
    href: '/container-tracking',
    isActive: true,
    order: 1,
  },
  {
    id: '2',
    icon: 'Scroll',
    label: { ar: 'إدارة الرولونات', en: 'Roll Management' },
    description: { ar: 'إدارة مخزون الأقمشة بكفاءة', en: 'Manage fabric inventory efficiently' },
    href: '/roll-management',
    isActive: true,
    order: 2,
  },
  {
    id: '3',
    icon: 'CreditCard',
    label: { ar: 'نظام نقاط البيع', en: 'POS System' },
    description: { ar: 'نظام بيع متكامل', en: 'Complete point of sale system' },
    href: '/pos-system',
    isActive: true,
    order: 3,
  },
];

const initialStats: StatCounter[] = [
  {
    id: '1',
    value: 500,
    suffix: '+',
    label: { ar: 'شركة', en: 'Companies' },
    icon: 'Building',
    isAnimated: true,
    isDynamic: false,
  },
  {
    id: '2',
    value: 10,
    suffix: 'M+',
    label: { ar: 'رولون', en: 'Rolls' },
    icon: 'Layers',
    isAnimated: true,
    isDynamic: true,
  },
];

const initialContactInfo: ContactInfo = {
  address: {
    ar: 'دبلن، أيرلندا',
    en: 'Dublin, Ireland',
  },
  phone: '+353 1 234 5678',
  email: 'info@texafab.com',
  workingHours: {
    ar: 'الأحد - الخميس: 9 صباحاً - 6 مساءً',
    en: 'Sun - Thu: 9AM - 6PM',
  },
};

const initialPricingPlans: PricingPlan[] = [
  {
    id: '1',
    name: { ar: 'الباقة الأساسية', en: 'Basic Plan' },
    price: { monthly: 99, yearly: 990, currency: 'EUR' },
    features: [],
    roi: {
      salesIncrease: '+15%',
      customerRetention: '+20%',
      netProfit: '$12,000+',
      roi: '320%',
    },
    isPopular: false,
    isEnterprise: false,
    order: 1,
    isActive: true,
  },
  {
    id: '2',
    name: { ar: 'الباقة الاحترافية', en: 'Professional Plan' },
    price: { monthly: 199, yearly: 1990, currency: 'EUR' },
    features: [],
    roi: {
      salesIncrease: '+35%',
      customerRetention: '+40%',
      netProfit: '$39,000+',
      roi: '520%',
    },
    isPopular: true,
    isEnterprise: false,
    order: 2,
    isActive: true,
  },
  {
    id: '3',
    name: { ar: 'باقة المؤسسات', en: 'Enterprise Plan' },
    price: { monthly: 499, yearly: 4990, currency: 'EUR' },
    features: [],
    roi: {
      salesIncrease: '+50%',
      customerRetention: '+60%',
      netProfit: '$120,000+',
      roi: '780%',
      competitiveEdge: '+45%',
    },
    isPopular: false,
    isEnterprise: true,
    order: 3,
    isActive: true,
  },
];

// Users will be loaded from JSON file - starting empty
const initialUsers: User[] = [];

const initialLanguageSettings: LanguageSettings = {
  availableLanguages: [
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', isActive: true, isRTL: true },
    { code: 'en', name: 'English', nativeName: 'English', isActive: true, isRTL: false },
    { code: 'ru', name: 'Russian', nativeName: 'Русский', isActive: true, isRTL: false },
    { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', isActive: true, isRTL: false },
    { code: 'pl', name: 'Polish', nativeName: 'Polski', isActive: true, isRTL: false },
    { code: 'ro', name: 'Romanian', nativeName: 'Română', isActive: true, isRTL: false },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', isActive: true, isRTL: false },
  ],
  defaultLanguage: 'ar',
  useEnglishNumerals: true,
  rtlLanguages: ['ar'],
};

const initialSystemStatus: SystemStatus = {
  serverHealth: 'healthy',
  apiLatency: 45,
  databaseStatus: 'connected',
  lastBackup: new Date().toISOString(),
  uptime: 99.99,
};

// Dashboard stats for website analytics (not customer tracking)
const initialDashboardStats: DashboardStats = {
  totalUsers: 0, // Content managers count
  activeUsers: 0, // Active editors
  trialUsers: 0, // Not used - customers managed by SaaS backend
  monthlyRevenue: 0, // Not used - managed by SaaS backend
  pageViews: 0, // Website page views
  conversionRate: 0, // Landing page conversion rate
};

const initialFeatures: Feature[] = [
  {
    id: '1',
    icon: 'Layers',
    title: { ar: 'إدارة المخزون', en: 'Inventory Management' },
    description: { ar: 'تتبع الأقمشة والرولونات بدقة', en: 'Track fabrics and rolls with precision' },
    isActive: true,
    order: 1,
  },
  {
    id: '2',
    icon: 'BarChart3',
    title: { ar: 'التقارير والتحليلات', en: 'Reports & Analytics' },
    description: { ar: 'رؤى مفصلة لأعمالك', en: 'Detailed insights for your business' },
    isActive: true,
    order: 2,
  },
];

const initialTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'محمد أحمد',
    company: 'شركة الأقمشة الذهبية',
    role: 'المدير التنفيذي',
    content: { ar: 'نظام ممتاز ساعدنا على زيادة الإنتاجية', en: 'Excellent system that helped us increase productivity' },
    rating: 5,
    isActive: true,
    order: 1,
  },
];

const initialFaqItems: FAQItem[] = [
  {
    id: '1',
    question: { ar: 'كيف يمكنني البدء؟', en: 'How can I get started?' },
    answer: { ar: 'يمكنك التسجيل للحصول على تجربة مجانية لمدة 14 يوم', en: 'You can sign up for a free 14-day trial' },
    category: 'general',
    isActive: true,
    order: 1,
  },
];

const initialNewsItems: NewsItem[] = [
  {
    id: '1',
    title: { ar: 'إطلاق الإصدار 2.0', en: 'Version 2.0 Released' },
    content: { ar: 'نحن سعداء بالإعلان عن إطلاق الإصدار الجديد', en: 'We are excited to announce the release of version 2.0' },
    excerpt: { ar: 'ميزات جديدة وتحسينات', en: 'New features and improvements' },
    type: 'update',
    isPublished: true,
    isPinned: true,
    publishedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: 'Admin',
  },
];

const initialAnnouncementBar: AnnouncementBar = {
  id: '1',
  text: { ar: '🎉 احصل على خصم 20% على جميع الباقات السنوية!', en: '🎉 Get 20% off on all annual plans!' },
  link: '/pricing',
  linkText: { ar: 'اشترك الآن', en: 'Subscribe Now' },
  backgroundColor: '#047857',
  textColor: '#ffffff',
  isActive: true,
};

export function AdminProvider({ children }: { children: ReactNode }) {
  const [heroContent, setHeroContent] = useState<HeroContent | null>(initialHeroContent);
  const [solutions, setSolutions] = useState<SolutionItem[]>(initialSolutions);
  const [stats, setStats] = useState<StatCounter[]>(initialStats);
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(initialContactInfo);
  const [footerLinks, setFooterLinks] = useState<FooterLink[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>(initialPricingPlans);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [authSettings, setAuthSettings] = useState<AuthSettings | null>(null);
  const [seoSettings, setSeoSettings] = useState<SEOSettings | null>(null);
  const [analyticsSettings, setAnalyticsSettings] = useState<AnalyticsSettings | null>(null);
  const [mediaLibrary, setMediaLibrary] = useState<MediaItem[]>([]);
  const [languageSettings, setLanguageSettings] = useState<LanguageSettings | null>(initialLanguageSettings);
  const [systemStatus] = useState<SystemStatus | null>(initialSystemStatus);
  const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(initialDashboardStats);
  const [features, setFeatures] = useState<Feature[]>(initialFeatures);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [faqItems, setFaqItems] = useState<FAQItem[]>(initialFaqItems);
  const [newsItems, setNewsItems] = useState<NewsItem[]>(initialNewsItems);
  const [announcementBar, setAnnouncementBar] = useState<AnnouncementBar | null>(initialAnnouncementBar);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load data from JSON files on mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // Try to fetch from JSON files first
        const [heroRes, featuresRes, testimonialsRes, pricingRes, faqRes, footerRes, statsRes, solutionsRes, newsRes, settingsRes, usersRes, announcementRes] = await Promise.all([
          fetch('/data/hero.json').catch(() => null),
          fetch('/data/features.json').catch(() => null),
          fetch('/data/testimonials.json').catch(() => null),
          fetch('/data/pricing.json').catch(() => null),
          fetch('/data/faq.json').catch(() => null),
          fetch('/data/footer.json').catch(() => null),
          fetch('/data/stats.json').catch(() => null),
          fetch('/data/solutions.json').catch(() => null),
          fetch('/data/news.json').catch(() => null),
          fetch('/data/settings.json').catch(() => null),
          fetch('/data/users.json').catch(() => null),
          fetch('/data/announcement.json').catch(() => null),
        ]);

        // Parse JSON responses
        if (heroRes?.ok) {
          const heroData = await heroRes.json();
          // Convert to admin format
          const convertedHero: HeroContent = {
            id: '1',
            title: Object.fromEntries(Object.entries(heroData).map(([lang, data]: [string, any]) => [lang, data?.title || ''])),
            subtitle: Object.fromEntries(Object.entries(heroData).map(([lang, data]: [string, any]) => [lang, data?.titleHighlight || ''])),
            description: Object.fromEntries(Object.entries(heroData).map(([lang, data]: [string, any]) => [lang, data?.subtitle || ''])),
            ctaPrimary: Object.fromEntries(Object.entries(heroData).map(([lang, data]: [string, any]) => [lang, data?.primaryCta || ''])),
            ctaSecondary: Object.fromEntries(Object.entries(heroData).map(([lang, data]: [string, any]) => [lang, data?.secondaryCta || ''])),
            updatedAt: new Date().toISOString(),
          };
          setHeroContent(convertedHero);
        }

        if (featuresRes?.ok) {
          const featuresData = await featuresRes.json();
          // Convert to admin format
          const enFeatures = featuresData.en?.items || [];
          const convertedFeatures: Feature[] = enFeatures.map((item: any, index: number) => ({
            id: item.id || String(index + 1),
            icon: item.icon || 'Package',
            title: Object.fromEntries(Object.entries(featuresData).map(([lang, data]: [string, any]) => 
              [lang, data?.items?.[index]?.title || '']
            )),
            description: Object.fromEntries(Object.entries(featuresData).map(([lang, data]: [string, any]) => 
              [lang, data?.items?.[index]?.description || '']
            )),
            isActive: true,
            order: index + 1,
          }));
          setFeatures(convertedFeatures);
        }

        if (testimonialsRes?.ok) {
          const testimonialsData = await testimonialsRes.json();
          const enTestimonials = testimonialsData.en?.items || [];
          const convertedTestimonials: Testimonial[] = enTestimonials.map((item: any, index: number) => ({
            id: item.id || String(index + 1),
            name: item.name || '',
            company: item.company || '',
            role: item.role || '',
            content: Object.fromEntries(Object.entries(testimonialsData).map(([lang, data]: [string, any]) => 
              [lang, data?.items?.[index]?.content || '']
            )),
            rating: item.rating || 5,
            avatar: item.image || '',
            isActive: true,
            order: index + 1,
          }));
          setTestimonials(convertedTestimonials);
        }

        if (pricingRes?.ok) {
          const pricingData = await pricingRes.json();
          const enPlans = pricingData.en?.plans || [];
          const convertedPricing: PricingPlan[] = enPlans.map((item: any, index: number) => ({
            id: item.id || String(index + 1),
            name: Object.fromEntries(Object.entries(pricingData).map(([lang, data]: [string, any]) => 
              [lang, data?.plans?.[index]?.name || '']
            )),
            price: { 
              monthly: parseInt(item.price) || 0, 
              yearly: parseInt(item.price) * 10 || 0, 
              currency: pricingData.en?.currency || 'USD' 
            },
            features: item.features?.map((f: string, fi: number) => ({
              id: String(fi + 1),
              text: Object.fromEntries(Object.entries(pricingData).map(([lang, data]: [string, any]) => 
                [lang, data?.plans?.[index]?.features?.[fi] || f]
              )),
              included: true,
            })) || [],
            roi: {},
            isPopular: item.highlighted || false,
            isEnterprise: item.id === 'enterprise',
            order: index + 1,
            isActive: true,
          }));
          setPricingPlans(convertedPricing);
        }

        if (faqRes?.ok) {
          const faqData = await faqRes.json();
          const enFaq = faqData.en?.items || [];
          const convertedFaq: FAQItem[] = enFaq.map((item: any, index: number) => ({
            id: item.id || String(index + 1),
            question: Object.fromEntries(Object.entries(faqData).map(([lang, data]: [string, any]) => 
              [lang, data?.items?.[index]?.question || '']
            )),
            answer: Object.fromEntries(Object.entries(faqData).map(([lang, data]: [string, any]) => 
              [lang, data?.items?.[index]?.answer || '']
            )),
            isActive: true,
            order: index + 1,
          }));
          setFaqItems(convertedFaq);
        }

        if (footerRes?.ok) {
          const footerData = await footerRes.json();
          const enFooter = footerData.en || {};
          setContactInfo({
            address: Object.fromEntries(Object.entries(footerData).map(([lang, data]: [string, any]) => 
              [lang, data?.contact?.address || '']
            )),
            phone: enFooter.contact?.phone || '',
            email: enFooter.contact?.email || '',
            workingHours: Object.fromEntries(Object.entries(footerData).map(([lang]: [string, any]) => 
              [lang, 'Sun - Thu: 9AM - 6PM']
            )),
          });

          // Social links
          setSocialLinks([
            { id: '1', platform: 'linkedin', url: enFooter.social?.linkedin || '', isActive: true },
            { id: '2', platform: 'twitter', url: enFooter.social?.twitter || '', isActive: true },
            { id: '3', platform: 'facebook', url: enFooter.social?.facebook || '', isActive: true },
          ]);
        }

        if (statsRes?.ok) {
          const statsData = await statsRes.json();
          const enStats = statsData.en?.items || [];
          const convertedStats: StatCounter[] = enStats.map((item: any, index: number) => ({
            id: String(index + 1),
            value: parseInt(item.value.replace(/\D/g, '')) || 0,
            suffix: item.value.replace(/[0-9]/g, '') || '',
            label: Object.fromEntries(Object.entries(statsData).map(([lang, data]: [string, any]) => 
              [lang, data?.items?.[index]?.label || '']
            )),
            icon: 'Building',
            isAnimated: true,
            isDynamic: false,
          }));
          setStats(convertedStats);
        }

        if (solutionsRes?.ok) {
          const solutionsData = await solutionsRes.json();
          const enSolutions = solutionsData.en?.items || [];
          const convertedSolutions: SolutionItem[] = enSolutions.map((item: any, index: number) => ({
            id: item.id || String(index + 1),
            icon: item.icon || 'Package',
            label: Object.fromEntries(Object.entries(solutionsData).map(([lang, data]: [string, any]) => 
              [lang, data?.items?.[index]?.title || '']
            )),
            description: Object.fromEntries(Object.entries(solutionsData).map(([lang, data]: [string, any]) => 
              [lang, data?.items?.[index]?.description || '']
            )),
            href: item.href || '',
            isActive: true,
            order: index + 1,
          }));
          setSolutions(convertedSolutions);
        }

        if (newsRes?.ok) {
          const newsData = await newsRes.json();
          const enNews = newsData.en?.items || [];
          const convertedNews: NewsItem[] = enNews.map((item: any, index: number) => ({
            id: item.id || String(index + 1),
            title: Object.fromEntries(Object.entries(newsData).map(([lang, data]: [string, any]) => 
              [lang, data?.items?.[index]?.title || '']
            )),
            excerpt: Object.fromEntries(Object.entries(newsData).map(([lang, data]: [string, any]) => 
              [lang, data?.items?.[index]?.excerpt || '']
            )),
            date: item.date || new Date().toISOString(),
            image: item.image || '',
            href: item.href || '',
            isActive: true,
          }));
          setNewsItems(convertedNews);
        }

        // Note: User/customer registration is handled by the external SaaS backend
        // This admin panel only manages website content and content managers

        // Load announcement bar from JSON
        if (announcementRes?.ok) {
          const announcementData = await announcementRes.json();
          if (announcementData) {
            setAnnouncementBar({
              id: '1',
              text: Object.fromEntries(Object.entries(announcementData).map(([lang, data]: [string, any]) => 
                [lang, data?.text || '']
              )),
              link: announcementData.en?.link || '/pricing',
              linkText: Object.fromEntries(Object.entries(announcementData).map(([lang, data]: [string, any]) => 
                [lang, data?.linkText || '']
              )),
              backgroundColor: announcementData.en?.backgroundColor || '#047857',
              textColor: announcementData.en?.textColor || '#ffffff',
              isActive: announcementData.en?.isActive !== false,
            });
          }
        }

        // Also try to load from localStorage as fallback (for language settings only)
        const savedData = localStorage.getItem('texacore_admin_data');
        if (savedData) {
          try {
            const parsed = JSON.parse(savedData);
            if (parsed.languageSettings) setLanguageSettings(parsed.languageSettings);
          } catch (e) {
            console.error('Failed to load admin data from localStorage:', e);
          }
        }
      } catch (e) {
        console.error('Failed to load CMS data:', e);
        // Fallback to localStorage
        const savedData = localStorage.getItem('texacore_admin_data');
        if (savedData) {
          try {
            const parsed = JSON.parse(savedData);
            if (parsed.heroContent) setHeroContent(parsed.heroContent);
            if (parsed.solutions) setSolutions(parsed.solutions);
            if (parsed.stats) setStats(parsed.stats);
            if (parsed.pricingPlans) setPricingPlans(parsed.pricingPlans);
            if (parsed.contactInfo) setContactInfo(parsed.contactInfo);
            if (parsed.languageSettings) setLanguageSettings(parsed.languageSettings);
            if (parsed.users) setUsers(parsed.users);
            if (parsed.footerLinks) setFooterLinks(parsed.footerLinks);
            if (parsed.socialLinks) setSocialLinks(parsed.socialLinks);
            if (parsed.features) setFeatures(parsed.features);
            if (parsed.testimonials) setTestimonials(parsed.testimonials);
            if (parsed.faqItems) setFaqItems(parsed.faqItems);
            if (parsed.newsItems) setNewsItems(parsed.newsItems);
            if (parsed.announcementBar) setAnnouncementBar(parsed.announcementBar);
          } catch (e) {
            console.error('Failed to load admin data from localStorage:', e);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Save to both JSON API (in production) and localStorage (as backup)
  const saveChanges = async () => {
    setIsSaving(true);
    setError(null);
    try {
      // Prepare data for JSON format
      const languages = ['en', 'ar', 'tr', 'ru', 'uk', 'pl', 'ro'];
      
      // Convert hero content to JSON format
      if (heroContent) {
        const heroJsonData: Record<string, any> = {};
        languages.forEach(lang => {
          heroJsonData[lang] = {
            badge: '🚀 #1 Textile ERP in Europe & Gulf',
            title: heroContent.title?.[lang] || heroContent.title?.en || '',
            titleHighlight: heroContent.subtitle?.[lang] || heroContent.subtitle?.en || '',
            subtitle: heroContent.description?.[lang] || heroContent.description?.en || '',
            primaryCta: heroContent.ctaPrimary?.[lang] || heroContent.ctaPrimary?.en || '',
            secondaryCta: heroContent.ctaSecondary?.[lang] || heroContent.ctaSecondary?.en || '',
            stats: stats.map(s => ({
              value: `${s.value}${s.suffix || ''}`,
              label: s.label?.[lang] || s.label?.en || '',
            })),
          };
        });
        await saveToAPI('hero', heroJsonData);
      }

      // Convert features to JSON format
      if (features.length > 0) {
        const featuresJsonData: Record<string, any> = {};
        languages.forEach(lang => {
          featuresJsonData[lang] = {
            title: lang === 'ar' ? 'ميزات قوية' : 'Powerful Features',
            subtitle: lang === 'ar' ? 'كل ما تحتاجه لإدارة أعمالك في الأقمشة بكفاءة' : 'Everything you need to manage your textile business efficiently',
            items: features.map(f => ({
              id: f.id,
              icon: f.icon,
              title: f.title?.[lang] || f.title?.en || '',
              description: f.description?.[lang] || f.description?.en || '',
            })),
          };
        });
        await saveToAPI('features', featuresJsonData);
      }

      // Convert testimonials to JSON format
      if (testimonials.length > 0) {
        const testimonialsJsonData: Record<string, any> = {};
        languages.forEach(lang => {
          testimonialsJsonData[lang] = {
            title: lang === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say',
            subtitle: lang === 'ar' ? 'موثوق به من قبل شركات الأقمشة حول العالم' : 'Trusted by textile businesses worldwide',
            items: testimonials.map(t => ({
              id: t.id,
              name: t.name,
              role: t.role,
              company: t.company,
              location: '',
              content: t.content?.[lang] || t.content?.en || '',
              rating: t.rating,
              image: t.avatar || '',
            })),
          };
        });
        await saveToAPI('testimonials', testimonialsJsonData);
      }

      // Convert pricing to JSON format
      if (pricingPlans.length > 0) {
        const pricingJsonData: Record<string, any> = {};
        languages.forEach(lang => {
          pricingJsonData[lang] = {
            title: lang === 'ar' ? 'أسعار بسيطة وشفافة' : 'Simple, Transparent Pricing',
            subtitle: lang === 'ar' ? 'اختر الخطة التي تناسب احتياجات عملك' : 'Choose the plan that fits your business needs',
            currency: '$',
            period: lang === 'ar' ? '/شهرياً' : '/month',
            plans: pricingPlans.map(p => ({
              id: p.id,
              name: p.name?.[lang] || p.name?.en || '',
              price: String(p.price?.monthly || 0),
              description: '',
              features: p.features?.map(f => f.text?.[lang] || f.text?.en || '') || [],
              highlighted: p.isPopular,
              cta: lang === 'ar' ? 'ابدأ الآن' : 'Get Started',
            })),
          };
        });
        await saveToAPI('pricing', pricingJsonData);
      }

      // Convert FAQ to JSON format
      if (faqItems.length > 0) {
        const faqJsonData: Record<string, any> = {};
        languages.forEach(lang => {
          faqJsonData[lang] = {
            title: lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
            subtitle: lang === 'ar' ? 'اعثر على إجابات للأسئلة الشائعة حول TexaCore' : 'Find answers to common questions about TexaCore',
            items: faqItems.map(f => ({
              id: f.id,
              question: f.question?.[lang] || f.question?.en || '',
              answer: f.answer?.[lang] || f.answer?.en || '',
            })),
          };
        });
        await saveToAPI('faq', faqJsonData);
      }

      // Note: Users/customers are managed by the external SaaS backend
      // This admin panel manages content managers separately via ContentManagersPage

      // Save announcement bar to JSON
      if (announcementBar) {
        const languages = ['en', 'ar', 'tr', 'ru', 'uk', 'pl', 'ro'];
        const announcementJsonData: Record<string, any> = {};
        languages.forEach(lang => {
          announcementJsonData[lang] = {
            text: announcementBar.text?.[lang] || announcementBar.text?.en || '',
            link: announcementBar.link || '/pricing',
            linkText: announcementBar.linkText?.[lang] || announcementBar.linkText?.en || '',
            backgroundColor: announcementBar.backgroundColor || '#047857',
            textColor: announcementBar.textColor || '#ffffff',
            isActive: announcementBar.isActive,
          };
        });
        await saveToAPI('announcement', announcementJsonData);
      }

      // Save to localStorage as backup (CMS data only)
      const dataToSave = {
        heroContent,
        solutions,
        stats,
        pricingPlans,
        contactInfo,
        languageSettings,
        footerLinks,
        socialLinks,
        features,
        testimonials,
        faqItems,
        newsItems,
        announcementBar,
      };
      localStorage.setItem('texacore_admin_data', JSON.stringify(dataToSave));
      
    } catch (e) {
      setError('Failed to save changes');
      console.error('Save error:', e);
      throw e;
    } finally {
      setIsSaving(false);
    }
  };

  // Helper function to save to API
  const saveToAPI = async (file: string, data: any) => {
    const isDevelopment = import.meta.env.DEV;
    
    if (isDevelopment) {
      // In development, just save to localStorage with file prefix
      localStorage.setItem(`texacore_${file}`, JSON.stringify(data));
      console.log(`[DEV] Saved ${file} to localStorage`);
      return true;
    }
    
    // In production, call PHP API
    const token = localStorage.getItem('texacore_admin_token');
    const response = await fetch('/api/save.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ file, data }),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to save ${file}`);
    }
    
    return true;
  };

  return (
    <AdminContext.Provider
      value={{
        heroContent,
        setHeroContent,
        solutions,
        setSolutions,
        stats,
        setStats,
        features,
        setFeatures,
        testimonials,
        setTestimonials,
        faqItems,
        setFaqItems,
        contactInfo,
        setContactInfo,
        footerLinks,
        setFooterLinks,
        socialLinks,
        setSocialLinks,
        pricingPlans,
        setPricingPlans,
        users,
        setUsers,
        authSettings,
        setAuthSettings,
        seoSettings,
        setSeoSettings,
        analyticsSettings,
        setAnalyticsSettings,
        mediaLibrary,
        setMediaLibrary,
        newsItems,
        setNewsItems,
        announcementBar,
        setAnnouncementBar,
        systemStatus,
        languageSettings,
        setLanguageSettings,
        dashboardStats,
        setDashboardStats,
        saveChanges,
        isLoading,
        isSaving,
        error,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
