import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import {
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  ChevronDown,
  Phone,
  Building2,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Announcement bar configuration (can be moved to admin later)
interface AnnouncementConfig {
  enabled: boolean;
  text: Record<string, string>;
  speed: number; // pixels per second
  bgColor: string;
  textColor: string;
}

const defaultAnnouncement: AnnouncementConfig = {
  enabled: true,
  text: {
    uk: "🔥 Знижка 15% на всі послуги до кінця місяця! | ⭐ Безкоштовна консультація | 📞 Телефонуйте зараз!",
    ru: "🔥 Скидка 15% на все услуги до конца месяца! | ⭐ Бесплатная консультация | 📞 Звоните сейчас!",
    en: "🔥 15% OFF all services until month end! | ⭐ Free consultation | 📞 Call now!",
    ar: "🔥 خصم 15% على جميع الخدمات حتى نهاية الشهر! | ⭐ استشارة مجانية | 📞 اتصل الآن!",
  },
  speed: 50,
  bgColor: "bg-gradient-to-r from-amber-500 to-amber-600",
  textColor: "text-white",
};

const translations = {
  uk: {
    home: "Головна",
    services: "Послуги",
    portfolio: "Портфоліо",
    pricing: "Ціни",
    news: "Новини",
    contact: "Контакти",
    getQuote: "Замовити розрахунок",
    phone: "+380 67 484 80 29",
  },
  ru: {
    home: "Главная",
    services: "Услуги",
    portfolio: "Портфолио",
    pricing: "Цены",
    news: "Новости",
    contact: "Контакты",
    getQuote: "Заказать расчёт",
    phone: "+380 67 484 80 29",
  },
  en: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    pricing: "Pricing",
    news: "News",
    contact: "Contact",
    getQuote: "Get Quote",
    phone: "+380 67 484 80 29",
  },
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    portfolio: "أعمالنا",
    pricing: "الأسعار",
    news: "الأخبار",
    contact: "اتصل بنا",
    getQuote: "احصل على عرض سعر",
    phone: "+380 67 484 80 29",
  },
};

const languages = [
  { code: "uk", label: "UA", flag: "🇺🇦" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ar", label: "AR", flag: "🇸🇦" },
];

export function DSHeader() {
  const { language, setLanguage, dir } = useLanguage();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [announcement, setAnnouncement] = useState<AnnouncementConfig>(defaultAnnouncement);

  const t = translations[language as keyof typeof translations] || translations.ru;
  const isRTL = dir === "rtl";

  // Load announcement config from JSON
  useEffect(() => {
    fetch("/data/dubai-stroy/announcement.json")
      .then((res) => res.json())
      .then((data) => {
        setAnnouncement(data);
      })
      .catch(() => {
        // Keep default if fetch fails
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate animation duration based on text length and speed
  const announcementText = announcement.text[language] || announcement.text["ru"];
  const animationDuration = Math.max(announcementText.length / announcement.speed * 10, 15);

  const navLinks = [
    { href: "/dubai-stroy", label: t.home },
    { href: "/dubai-stroy/services", label: t.services },
    { href: "/dubai-stroy/portfolio", label: t.portfolio },
    { href: "/dubai-stroy/pricing", label: t.pricing },
    { href: "/dubai-stroy/news", label: t.news },
    { href: "/dubai-stroy/contact", label: t.contact },
  ];

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const currentLang = languages.find((l) => l.code === language) || languages[1];

  return (
    <>
      {/* Announcement Bar - Fixed at absolute top */}
      {announcement.enabled && (
        <div className={cn(
          "fixed top-0 left-0 right-0 z-[60] overflow-hidden py-2",
          announcement.bgColor
        )}>
          <div 
            className={cn("whitespace-nowrap animate-marquee", announcement.textColor)}
            style={{
              animationDuration: `${animationDuration}s`,
              animationDirection: isRTL ? "reverse" : "normal",
            }}
          >
            <span className="inline-block px-4">{announcementText}</span>
            <span className="inline-block px-4">{announcementText}</span>
            <span className="inline-block px-4">{announcementText}</span>
            <span className="inline-block px-4">{announcementText}</span>
          </div>
        </div>
      )}

      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300",
          announcement.enabled ? "top-9" : "top-0",
          isScrolled
            ? "bg-white dark:bg-slate-900 shadow-lg shadow-slate-900/10 dark:shadow-black/20"
            : "bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-md"
        )}
      >
        {/* Top Bar */}
        <div className="hidden md:block bg-slate-800 dark:bg-slate-900 text-white py-2 border-b border-slate-700/50">
          <div className="container mx-auto px-4 flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+380674848029" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4 text-amber-500" />
                {t.phone}
              </a>
              <span className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-500" />
                {language === "ar" ? "أوديسا، شارع جينويزسكايا 5" : "Одеса, Генуезька 5, офіс 10"}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-amber-400 text-xs">
                {language === "ar" ? "الاثنين-السبت: 9:00-18:00" : language === "ru" ? "Пн-Сб: 9:00-18:00" : language === "uk" ? "Пн-Сб: 9:00-18:00" : "Mon-Sat: 9:00-18:00"}
              </span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 bg-transparent">
          <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            to="/dubai-stroy"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-shadow">
              <Building2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-lg md:text-xl font-bold transition-colors",
                isScrolled ? "text-slate-900 dark:text-white" : "text-white drop-shadow-sm"
              )}>
                Dubai Stroy
              </span>
              <span className={cn(
                "text-[10px] md:text-xs font-medium transition-colors hidden sm:block",
                isScrolled ? "text-amber-600 dark:text-amber-400" : "text-amber-300"
              )}>
                {language === "ar" ? "ابني مستقبلك معنا" : language === "ru" ? "Строй будущее с нами" : language === "uk" ? "Будуй майбутнє з нами" : "Build Your Future"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  location.pathname === link.href
                    ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                    : isScrolled
                    ? "text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-500/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all",
                  isScrolled
                    ? "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    : "text-white hover:bg-white/10"
                )}
              >
                <span>{currentLang.flag}</span>
                <span className="hidden sm:inline">{currentLang.label}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {isLangMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsLangMenuOpen(false)}
                  />
                  <div className={cn(
                    "absolute top-full mt-2 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 z-50 min-w-[120px]",
                    isRTL ? "left-0" : "right-0"
                  )}>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={cn(
                          "w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors",
                          language === lang.code
                            ? "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400"
                            : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                        )}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-lg transition-all",
                isScrolled
                  ? "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  : "text-white hover:bg-white/10"
              )}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              to="/dubai-stroy/contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
            >
              {t.getQuote}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-all",
                isScrolled
                  ? "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  : "text-white hover:bg-white/10"
              )}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-lg font-medium transition-all",
                      location.pathname === link.href
                        ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/dubai-stroy/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all"
                >
                  {t.getQuote}
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Add custom styles for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee linear infinite;
        }
      `}</style>
    </>
  );
}
