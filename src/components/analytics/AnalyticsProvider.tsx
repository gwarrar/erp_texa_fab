/**
 * Analytics Provider Component
 * Loads Meta Pixel, Google Analytics, and GTM scripts based on Supabase settings
 */
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useLanguage, type SiteId } from '@/components/landing/LanguageContext';

interface AnalyticsSettings {
  meta_pixel_id?: string;
  google_analytics_id?: string;
  google_tag_manager_id?: string;
  is_enabled: boolean;
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const { siteId } = useLanguage();
  const [settings, setSettings] = useState<AnalyticsSettings | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadAnalyticsSettings = async () => {
      try {
        const { data, error } = await supabase
          .from('analytics_settings')
          .select('*')
          .eq('site_id', siteId)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error loading analytics settings:', error);
          return;
        }

        if (data) {
          setSettings(data);
        }
      } catch (error) {
        console.error('Analytics settings error:', error);
      }
    };

    loadAnalyticsSettings();
  }, [siteId]);

  useEffect(() => {
    if (!settings || !settings.is_enabled || loaded) return;

    // Load Meta Pixel
    if (settings.meta_pixel_id) {
      loadMetaPixel(settings.meta_pixel_id);
    }

    // Load Google Analytics (GA4)
    if (settings.google_analytics_id) {
      loadGoogleAnalytics(settings.google_analytics_id);
    }

    // Load Google Tag Manager
    if (settings.google_tag_manager_id) {
      loadGoogleTagManager(settings.google_tag_manager_id);
    }

    setLoaded(true);
  }, [settings, loaded]);

  return <>{children}</>;
}

// Meta Pixel (Facebook Pixel)
function loadMetaPixel(pixelId: string) {
  if (typeof window === 'undefined' || (window as any).fbq) return;

  const script = document.createElement('script');
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);

  // Add noscript fallback
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"/>`;
  document.body.appendChild(noscript);
}

// Google Analytics 4
function loadGoogleAnalytics(measurementId: string) {
  if (typeof window === 'undefined' || (window as any).gtag) return;

  // Load gtag.js
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(gtagScript);

  // Initialize gtag
  const initScript = document.createElement('script');
  initScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(initScript);
}

// Google Tag Manager
function loadGoogleTagManager(containerId: string) {
  if (typeof window === 'undefined') return;
  if (document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${containerId}"]`)) return;

  // GTM Script
  const script = document.createElement('script');
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${containerId}');
  `;
  document.head.appendChild(script);

  // GTM noscript (for body)
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.insertBefore(noscript, document.body.firstChild);
}

// Utility function to track custom events
export function trackEvent(eventName: string, params?: Record<string, any>) {
  // Facebook Pixel
  if ((window as any).fbq) {
    (window as any).fbq('track', eventName, params);
  }

  // Google Analytics
  if ((window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }

  // GTM DataLayer
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...params,
    });
  }
}
