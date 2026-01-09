import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { supabase } from '@/lib/supabase';
import { cn } from '@/lib/utils';

interface AnnouncementBarData {
  id: string;
  text: Record<string, string>;
  link?: string;
  linkText?: Record<string, string>;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  fontSize: string;
  animationSpeed: number;
  animationType: 'scroll' | 'static' | 'blink';
  isActive: boolean;
}

export function AnnouncementBar() {
  const { language, dir, siteId } = useLanguage();
  const isRTL = dir === 'rtl';
  const [announcement, setAnnouncement] = useState<AnnouncementBarData | null>(null);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isHiddenByScroll, setIsHiddenByScroll] = useState(false);
  const loadedRef = useRef(false);

  useEffect(() => {
    // Prevent double loading
    if (loadedRef.current) return;
    loadedRef.current = true;

    const loadAnnouncement = async () => {
      // Try Supabase first
      try {
        const { data, error } = await supabase
          .from('announcement_settings')
          .select('*')
          .eq('site_id', siteId)
          .eq('language', language)
          .single();

        if (data && !error && data.is_enabled) {
          setAnnouncement({
            id: data.id,
            text: { [language]: data.text },
            link: data.link || undefined,
            linkText: undefined,
            backgroundColor: data.background_color || '#047857',
            textColor: data.text_color || '#ffffff',
            fontFamily: data.font_family || 'inherit',
            fontSize: data.font_size || '14px',
            animationSpeed: data.animation_speed || 30,
            animationType: data.animation_type || 'scroll',
            isActive: data.is_enabled,
          });
          return;
        }
      } catch (err) {
        console.log('Supabase announcement not available, falling back to JSON');
      }

      // Fallback to JSON
      try {
        const res = await fetch('/data/announcement.json');
        const data = await res.json();
        const langData = data[language] || data.en;
        if (langData && langData.isActive) {
          setAnnouncement({
            id: '1',
            text: { [language]: langData.text, en: data.en?.text },
            link: langData.link,
            linkText: { [language]: langData.linkText, en: data.en?.linkText },
            backgroundColor: langData.backgroundColor || '#047857',
            textColor: '#ffffff',
            fontFamily: 'inherit',
            fontSize: '14px',
            animationSpeed: 30,
            animationType: 'scroll',
            isActive: langData.isActive,
          });
        }
      } catch (e) {
        // Default announcement
        setAnnouncement({
          id: '1',
          text: { 
            ar: '🎉 احصل على خصم 20% على جميع الباقات السنوية!', 
            en: '🎉 Get 20% off on all annual plans!' 
          },
          link: '/pricing',
          linkText: { ar: 'اشترك الآن', en: 'Subscribe Now' },
          backgroundColor: '#047857',
          textColor: '#ffffff',
          fontFamily: 'inherit',
          fontSize: '14px',
          animationSpeed: 30,
          animationType: 'scroll',
          isActive: true,
        });
      }
    };

    loadAnnouncement();

    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem(`announcement_dismissed_${siteId}`);
    if (dismissed) {
      setIsDismissed(true);
    }

    return () => {
      loadedRef.current = false;
    };
  }, [language, siteId]);

  // Hide announcement bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHiddenByScroll(true);
        // Dispatch event for header to adjust
        window.dispatchEvent(new CustomEvent('announcement-dismissed'));
      } else {
        setIsHiddenByScroll(false);
        // Dispatch event for header to adjust back
        window.dispatchEvent(new CustomEvent('announcement-shown'));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem(`announcement_dismissed_${siteId}`, 'true');
    window.dispatchEvent(new CustomEvent('announcement-dismissed'));
  };

  if (!announcement || !announcement.isActive) {
    return null;
  }

  const text = announcement.text[language] || announcement.text.en || '';
  const linkText = announcement.linkText?.[language] || announcement.linkText?.en;

  // Render content based on animation type
  const renderContent = () => {
    if (announcement.animationType === 'scroll') {
      return (
        <div className="flex items-center justify-center gap-3">
          <span>{text}</span>
          {announcement.link && linkText && (
            <Link
              to={announcement.link}
              className="underline underline-offset-2 hover:opacity-90 transition-opacity font-semibold"
              style={{ color: announcement.textColor }}
            >
              {linkText}
            </Link>
          )}
        </div>
      );
    }

    if (announcement.animationType === 'blink') {
      return (
        <div className="flex items-center justify-center gap-3 animate-pulse">
          <span>{text}</span>
          {announcement.link && linkText && (
            <Link
              to={announcement.link}
              className="underline underline-offset-2 hover:opacity-90 transition-opacity font-semibold"
              style={{ color: announcement.textColor }}
            >
              {linkText}
            </Link>
          )}
        </div>
      );
    }

    // Static
    return (
      <div className="flex items-center justify-center gap-3">
        <span>{text}</span>
        {announcement.link && linkText && (
          <Link
            to={announcement.link}
            className="underline underline-offset-2 hover:opacity-90 transition-opacity font-semibold"
            style={{ color: announcement.textColor }}
          >
            {linkText}
          </Link>
        )}
      </div>
    );
  };

  return (
    <div
      className={cn(
        'relative w-full py-2.5 px-4 text-center font-medium transition-all z-50',
        isRTL ? 'rtl' : 'ltr'
      )}
      style={{
        backgroundColor: announcement.backgroundColor,
        color: announcement.textColor,
        fontFamily: announcement.fontFamily,
        fontSize: announcement.fontSize,
      }}
    >
      <div className="container mx-auto flex items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
}
