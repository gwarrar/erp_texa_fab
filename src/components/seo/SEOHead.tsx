/**
 * SEO Head Component
 * Manages meta tags, Open Graph, Twitter Cards, and structured data
 */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useLanguage, type SiteId } from '@/components/landing/LanguageContext';

interface SEOSettings {
  meta_title?: string;
  meta_description?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_card?: string;
  canonical_url?: string;
  robots?: string;
  structured_data?: any;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export function SEOHead({ title, description, image, type = 'website' }: SEOHeadProps) {
  const { siteId, language } = useLanguage();
  const location = useLocation();
  const [settings, setSettings] = useState<SEOSettings | null>(null);

  // Default values per site
  const siteDefaults: Record<string, { name: string; description: string; image: string }> = {
    texafab: {
      name: 'TexaFab ERP',
      description: 'Enterprise ERP Solution for Global Textile Industry',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    },
    fincore: {
      name: 'FinCore',
      description: 'Modern Banking & Financial Solutions',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
    },
    'dubai-stroy': {
      name: 'Dubai Stroy',
      description: 'Premium Construction & Building Materials',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    },
    nextrev: {
      name: 'Next Revolution',
      description: 'Software Development & Digital Solutions',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    },
  };

  const defaults = siteDefaults[siteId] || siteDefaults.texafab;

  useEffect(() => {
    const loadSEOSettings = async () => {
      try {
        const { data, error } = await supabase
          .from('seo_settings')
          .select('*')
          .eq('site_id', siteId)
          .eq('language', language)
          .eq('page_path', location.pathname)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error loading SEO settings:', error);
        }

        if (data) {
          setSettings(data);
        }
      } catch (error) {
        console.error('SEO settings error:', error);
      }
    };

    loadSEOSettings();
  }, [siteId, language, location.pathname]);

  useEffect(() => {
    // Final values (prop > settings > defaults)
    const finalTitle = title || settings?.meta_title || defaults.name;
    const finalDescription = description || settings?.meta_description || defaults.description;
    const finalImage = image || settings?.og_image || defaults.image;
    const finalOgTitle = settings?.og_title || finalTitle;
    const finalOgDescription = settings?.og_description || finalDescription;
    const canonicalUrl = settings?.canonical_url || window.location.href;
    const robots = settings?.robots || 'index, follow';
    const twitterCard = settings?.twitter_card || 'summary_large_image';

    // Update document title
    document.title = finalTitle;

    // Update or create meta tags
    updateMetaTag('description', finalDescription);
    updateMetaTag('robots', robots);

    // Open Graph
    updateMetaTag('og:title', finalOgTitle, 'property');
    updateMetaTag('og:description', finalOgDescription, 'property');
    updateMetaTag('og:image', finalImage, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:site_name', defaults.name, 'property');

    // Twitter Card
    updateMetaTag('twitter:card', twitterCard, 'name');
    updateMetaTag('twitter:title', finalOgTitle, 'name');
    updateMetaTag('twitter:description', finalOgDescription, 'name');
    updateMetaTag('twitter:image', finalImage, 'name');

    // Canonical URL
    updateCanonicalLink(canonicalUrl);

    // Structured Data (JSON-LD)
    if (settings?.structured_data) {
      updateStructuredData(settings.structured_data);
    } else {
      // Default structured data
      updateStructuredData({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: defaults.name,
        description: finalDescription,
        url: canonicalUrl,
      });
    }

    // Language meta
    updateMetaTag('og:locale', language === 'ar' ? 'ar_SA' : 'en_US', 'property');
    updateLangAttribute(language);

  }, [settings, title, description, image, type, siteId, language, defaults]);

  return null; // This component only updates the head, doesn't render anything
}

// Helper functions
function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  
  meta.content = content;
}

function updateCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  
  link.href = url;
}

function updateStructuredData(data: any) {
  let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
  
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  
  script.textContent = JSON.stringify(data);
}

function updateLangAttribute(language: string) {
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
}
