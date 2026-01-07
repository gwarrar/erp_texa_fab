import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, languageNames, Language } from "@/components/landing/LanguageContext";
import { useTheme, Theme } from "@/components/landing/ThemeContext";
import { Button } from "@/components/ui/button";
import { 
  Globe, Menu, X, ChevronDown, Sun, Moon, Monitor,
  Building2, Code2, Shield, Cpu, Server, Banknote,
  ArrowRight, ArrowLeft, Sparkles
} from "lucide-react";

// Translations for Next Revolution Header
const headerTranslations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    products: "Products",
    investments: "Investments",
    blog: "News",
    contact: "Contact",
    getInTouch: "Get in Touch",
    backToTexaFab: "TexaFab ERP",
    servicesMenu: {
      software: "Software Development",
      fintech: "FinTech & Banking",
      enterprise: "Enterprise Solutions",
      cybersecurity: "Cybersecurity",
      ai: "AI & Data Science",
      infrastructure: "Infrastructure",
      telecom: "Telecommunications"
    }
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    products: "منتجاتنا",
    investments: "استثماراتنا",
    blog: "الأخبار",
    contact: "تواصل معنا",
    getInTouch: "تواصل معنا",
    backToTexaFab: "TexaFab ERP",
    servicesMenu: {
      software: "تطوير البرمجيات",
      fintech: "التقنية المالية والبنوك",
      enterprise: "حلول المؤسسات",
      cybersecurity: "الأمن السيبراني",
      ai: "الذكاء الاصطناعي",
      infrastructure: "البنية التحتية",
      telecom: "الاتصالات"
    }
  },
  ru: {
    home: "Главная",
    about: "О нас",
    services: "Услуги",
    products: "Продукты",
    investments: "Инвестиции",
    blog: "Новости",
    contact: "Контакты",
    getInTouch: "Связаться",
    backToTexaFab: "TexaFab ERP",
    servicesMenu: {
      software: "Разработка ПО",
      fintech: "FinTech и Банкинг",
      enterprise: "Корпоративные решения",
      cybersecurity: "Кибербезопасность",
      ai: "ИИ и Data Science",
      infrastructure: "Инфраструктура",
      telecom: "Телекоммуникации"
    }
  },
  uk: {
    home: "Головна",
    about: "Про нас",
    services: "Послуги",
    products: "Продукти",
    investments: "Інвестиції",
    blog: "Новини",
    contact: "Контакти",
    getInTouch: "Зв'язатися",
    backToTexaFab: "TexaFab ERP",
    servicesMenu: {
      software: "Розробка ПЗ",
      fintech: "FinTech та Банкінг",
      enterprise: "Корпоративні рішення",
      cybersecurity: "Кібербезпека",
      ai: "ШІ та Data Science",
      infrastructure: "Інфраструктура",
      telecom: "Телекомунікації"
    }
  },
  tr: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    products: "Ürünler",
    investments: "Yatırımlar",
    blog: "Haberler",
    contact: "İletişim",
    getInTouch: "İletişime Geç",
    backToTexaFab: "TexaFab ERP",
    servicesMenu: {
      software: "Yazılım Geliştirme",
      fintech: "FinTech ve Bankacılık",
      enterprise: "Kurumsal Çözümler",
      cybersecurity: "Siber Güvenlik",
      ai: "AI ve Veri Bilimi",
      infrastructure: "Altyapı",
      telecom: "Telekomünikasyon"
    }
  },
  pl: {
    home: "Strona główna",
    about: "O nas",
    services: "Usługi",
    products: "Produkty",
    investments: "Inwestycje",
    blog: "Aktualności",
    contact: "Kontakt",
    getInTouch: "Skontaktuj się",
    backToTexaFab: "TexaFab ERP",
    servicesMenu: {
      software: "Rozwój oprogramowania",
      fintech: "FinTech i Bankowość",
      enterprise: "Rozwiązania dla firm",
      cybersecurity: "Cyberbezpieczeństwo",
      ai: "AI i Data Science",
      infrastructure: "Infrastruktura",
      telecom: "Telekomunikacja"
    }
  },
  ro: {
    home: "Acasă",
    about: "Despre noi",
    services: "Servicii",
    products: "Produse",
    investments: "Investiții",
    blog: "Știri",
    contact: "Contact",
    getInTouch: "Contactează-ne",
    backToTexaFab: "TexaFab ERP",
    servicesMenu: {
      software: "Dezvoltare software",
      fintech: "FinTech și Banking",
      enterprise: "Soluții enterprise",
      cybersecurity: "Securitate cibernetică",
      ai: "AI și Data Science",
      infrastructure: "Infrastructură",
      telecom: "Telecomunicații"
    }
  },
  it: {
    home: "Home",
    about: "Chi Siamo",
    services: "Servizi",
    products: "Prodotti",
    investments: "Investimenti",
    contact: "Contatti",
    getInTouch: "Contattaci",
    backToTexaFab: "TexaFab ERP",
    servicesMenu: {
      software: "Sviluppo Software",
      fintech: "FinTech e Banking",
      enterprise: "Soluzioni Enterprise",
      cybersecurity: "Sicurezza Informatica",
      ai: "AI e Data Science",
      infrastructure: "Infrastruttura",
      telecom: "Telecomunicazioni"
    }
  }
};

export function NRHeader() {
  const { language, setLanguage, dir } = useLanguage();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const t = headerTranslations[language as keyof typeof headerTranslations] || headerTranslations.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  const themeOptions: { value: Theme; label: string; icon: typeof Sun }[] = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "Auto", icon: Monitor },
  ];

  const serviceLinks = [
    { href: "/next-revolution/services/software", label: t.servicesMenu.software, icon: Code2 },
    { href: "/next-revolution/services/fintech", label: t.servicesMenu.fintech, icon: Banknote },
    { href: "/next-revolution/services/enterprise", label: t.servicesMenu.enterprise, icon: Building2 },
    { href: "/next-revolution/services/cybersecurity", label: t.servicesMenu.cybersecurity, icon: Shield },
    { href: "/next-revolution/services/ai", label: t.servicesMenu.ai, icon: Cpu },
    { href: "/next-revolution/services/infrastructure", label: t.servicesMenu.infrastructure, icon: Server },
  ];

  const navLinks = [
    { href: "/next-revolution", label: t.home },
    { href: "/next-revolution/about", label: t.about },
    { href: "/next-revolution/products", label: t.products },
    { href: "/next-revolution/investments", label: t.investments },
    { href: "/next-revolution/blog", label: t.blog },
    { href: "/next-revolution/contact", label: t.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.services-dropdown') && !target.closest('.services-trigger')) {
        setIsServicesMenuOpen(false);
      }
      if (!target.closest('.language-dropdown') && !target.closest('.language-trigger')) {
        setIsLanguageMenuOpen(false);
      }
      if (!target.closest('.theme-dropdown') && !target.closest('.theme-trigger')) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsThemeMenuOpen(false);
  };

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-slate-900/20 border-b border-slate-800/50" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/next-revolution" className="flex items-center gap-3 group">
            <div className="relative">
              {/* NR Logo */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight">
                Next Revolution
              </span>
              <span className="text-xs text-slate-400 font-medium -mt-0.5">
                Software Development
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  location.pathname === link.href
                    ? "text-white bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className={`services-trigger flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  location.pathname.includes("/services")
                    ? "text-white bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
              >
                {t.services}
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesMenuOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isServicesMenuOpen && (
                <div className="services-dropdown absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-xl shadow-black/30 overflow-hidden">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      onClick={() => setIsServicesMenuOpen(false)}
                    >
                      <link.icon className="w-5 h-5 text-blue-400" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* TexaFab Link */}
            <Link
              to="/"
              className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 hover:border-emerald-500/50 rounded-full transition-all"
            >
              <span>{t.backToTexaFab}</span>
            </Link>

            {/* Theme Toggle */}
            <div className="relative">
              <button
                className="theme-trigger p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              >
                {resolvedTheme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              
              {isThemeMenuOpen && (
                <div className="theme-dropdown absolute top-full right-0 mt-2 w-40 bg-slate-900 border border-slate-700 rounded-xl shadow-xl overflow-hidden">
                  {themeOptions.map((option) => (
                    <button
                      key={option.value}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        theme === option.value
                          ? "text-blue-400 bg-blue-500/10"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                      onClick={() => handleThemeChange(option.value)}
                    >
                      <option.icon className="w-4 h-4" />
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Toggle */}
            <div className="relative">
              <button
                className="language-trigger p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              >
                <Globe className="w-5 h-5" />
              </button>
              
              {isLanguageMenuOpen && (
                <div className="language-dropdown absolute top-full right-0 mt-2 w-44 bg-slate-900 border border-slate-700 rounded-xl shadow-xl overflow-hidden max-h-80 overflow-y-auto">
                  {(Object.keys(languageNames) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        language === lang
                          ? "text-blue-400 bg-blue-500/10"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                      onClick={() => handleLanguageChange(lang)}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/next-revolution/contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
            >
              {t.getInTouch}
              <ArrowIcon className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-slate-800 mt-2 pt-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                    location.pathname === link.href
                      ? "text-white bg-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Services in Mobile */}
              <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mt-2">
                {t.services}
              </div>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon className="w-4 h-4 text-blue-400" />
                  {link.label}
                </Link>
              ))}
              
              {/* TexaFab Link - Mobile */}
              <Link
                to="/"
                className="flex items-center gap-2 mx-4 mt-4 px-4 py-2.5 text-sm font-medium text-emerald-400 border border-emerald-500/30 rounded-lg justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.backToTexaFab}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
