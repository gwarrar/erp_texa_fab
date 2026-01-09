/**
 * Analytics Hook
 * Track page views and custom events with Meta Pixel, GA4, and GTM
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from '@/components/analytics/AnalyticsProvider';

// Track page views automatically
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    trackEvent('page_view', {
      page_path: location.pathname,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location.pathname]);
}

// Track conversion events
export function useConversionTracking() {
  const trackLead = (data?: Record<string, any>) => {
    trackEvent('generate_lead', {
      currency: 'USD',
      value: 0,
      ...data,
    });
  };

  const trackPurchase = (value: number, currency = 'USD', transactionId?: string) => {
    trackEvent('purchase', {
      currency,
      value,
      transaction_id: transactionId,
    });
  };

  const trackSignUp = (method?: string) => {
    trackEvent('sign_up', { method });
  };

  const trackContact = (method?: string) => {
    trackEvent('contact', { method });
  };

  const trackAddToCart = (item: { id: string; name: string; price: number }) => {
    trackEvent('add_to_cart', {
      currency: 'USD',
      value: item.price,
      items: [item],
    });
  };

  const trackBeginCheckout = (value: number, currency = 'USD') => {
    trackEvent('begin_checkout', {
      currency,
      value,
    });
  };

  const trackSearch = (searchTerm: string) => {
    trackEvent('search', { search_term: searchTerm });
  };

  const trackViewContent = (contentType: string, contentId: string) => {
    trackEvent('view_content', {
      content_type: contentType,
      content_id: contentId,
    });
  };

  const trackCallbackRequest = (phoneNumber: string) => {
    trackEvent('callback_request', {
      phone_number: phoneNumber,
      event_category: 'engagement',
    });
  };

  return {
    trackLead,
    trackPurchase,
    trackSignUp,
    trackContact,
    trackAddToCart,
    trackBeginCheckout,
    trackSearch,
    trackViewContent,
    trackCallbackRequest,
  };
}
