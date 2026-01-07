import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { cn } from '@/lib/utils';

interface AnnouncementBarData {
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

export function AnnouncementBar() {
  const { language, isRTL } = useLanguage();
  const [announcement, setAnnouncement] = useState<AnnouncementBarData | null>(null);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isHiddenByScroll, setIsHiddenByScroll] = useState(false);

  useEffect(() => {
    // First try to load from JSON file (CMS)
    fetch('/data/announcement.json')
      .then(res => res.json())
      .then(data => {
        const langData = data[language] || data.en;
        if (langData && langData.isActive) {
          setAnnouncement({
            id: '1',
            text: { [language]: langData.text, en: data.en?.text },
            link: langData.link,
            linkText: { [language]: langData.linkText, en: data.en?.linkText },
            backgroundColor: langData.backgroundColor || '#047857',
            textColor: '#ffffff',
            isActive: langData.isActive,
          });
        }
      })
      .catch(() => {
        // Fallback to localStorage
        const savedData = localStorage.getItem('texacore_admin_data');
        if (savedData) {
          try {
            const parsed = JSON.parse(savedData);
            if (parsed.announcementBar && parsed.announcementBar.isActive) {
              setAnnouncement(parsed.announcementBar);
            }
          } catch (e) {
            console.error('Failed to load announcement:', e);
          }
        } else {
          // Default announcement if no data
          setAnnouncement({
            id: '1',
            text: { ar: '🎉 احصل على خصم 20% على جميع الباقات السنوية!', en: '🎉 Get 20% off on all annual plans!' },
            link: '/pricing',
            linkText: { ar: 'اشترك الآن', en: 'Subscribe Now' },
            backgroundColor: '#047857',
            textColor: '#ffffff',
            isActive: true,
          });
        }
      });

    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem('announcement_dismissed');
    if (dismissed) {
      setIsDismissed(true);
    }
  }, [language]);

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
    sessionStorage.setItem('announcement_dismissed', 'true');
    // Dispatch custom event for same-tab updates
    window.dispatchEvent(new CustomEvent('announcement-dismissed'));
  };

  if (!announcement || !announcement.isActive || isDismissed || isHiddenByScroll) {
    return null;
  }

  const text = announcement.text[language] || announcement.text.en;
  const linkText = announcement.linkText?.[language] || announcement.linkText?.en;

  return (
    <div
      className={cn(
        'relative w-full py-2.5 px-4 text-center text-sm font-medium transition-all z-50',
        isRTL ? 'rtl' : 'ltr'
      )}
      style={{
        backgroundColor: announcement.backgroundColor,
        color: announcement.textColor,
      }}
    >
      <div className="container mx-auto flex items-center justify-center gap-3">
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
      <button
        onClick={handleDismiss}
        className={cn(
          'absolute top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors',
          isRTL ? 'left-3' : 'right-3'
        )}
        style={{ color: announcement.textColor }}
        aria-label="Dismiss announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
