import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, Language } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { Button } from "@/components/ui/button";
import { NCLogo } from "@/components/nexacore/NCLogo";
import { 
  Menu, X, Globe, ChevronDown, Sun, Moon, Monitor,
  ArrowRight, ShoppingCart, Package, Warehouse, 
  Users, Calculator, BarChart3, Brain, Building2, Layers
} from "lucide-react";

const translations = {
  en: {
    home: "Home",
    solutions: "Solutions",
    features: "Features",
    workflow: "Workflow",
    whyNexaCore: "Why NexaCore?",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    requestDemo: "Request Demo",
    startFree: "Start Free",
    login: "Login",
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    sales: "Sales Management",
    purchases: "Purchases & Procurement",
    inventory: "Inventory & Warehouse",
    accounting: "Financial Accounting",
    crm: "Customer Relations",
    hr: "Human Resources",
    ai: "AI Intelligence",
    branches: "Multi-Branch",
    allSolutions: "View All Solutions",
  },
  ar: {
    home: "الرئيسية",
    solutions: "الحلول",
    features: "المميزات",
    workflow: "سير العمل",
    whyNexaCore: "لماذا NexaCore؟",
    pricing: "الأسعار",
    about: "عن الشركة",
    contact: "تواصل معنا",
    requestDemo: "طلب عرض",
    startFree: "ابدأ مجاناً",
    login: "تسجيل الدخول",
    language: "اللغة",
    theme: "المظهر",
    light: "فاتح",
    dark: "داكن",
    system: "تلقائي",
    sales: "إدارة المبيعات",
    purchases: "المشتريات والتوريد",
    inventory: "المخازن والمستودعات",
    accounting: "المحاسبة المالية",
    crm: "إدارة العملاء",
    hr: "الموارد البشرية",
    ai: "الذكاء الاصطناعي",
    branches: "الفروع المتعددة",
    allSolutions: "عرض جميع الحلول",
  },
  tr: {
    home: "Ana Sayfa",
    solutions: "Çözümler",
    features: "Özellikler",
    workflow: "İş Akışı",
    whyNexaCore: "Neden NexaCore?",
    pricing: "Fiyatlar",
    about: "Hakkımızda",
    contact: "İletişim",
    requestDemo: "Demo Talep",
    startFree: "Başla",
    login: "Giriş",
    language: "Dil",
    theme: "Tema",
    light: "Açık",
    dark: "Koyu",
    system: "Otomatik",
    sales: "Satış Yönetimi",
    purchases: "Satın Alma ve Tedarik",
    inventory: "Envanter ve Depo",
    accounting: "Mali Muhasebe",
    crm: "Müşteri İlişkileri",
    hr: "İnsan Kaynakları",
    ai: "Yapay Zeka",
    branches: "Çok Şubeli",
    allSolutions: "Tüm Çözümler",
  },
  ru: {
    home: "Главная",
    solutions: "Решения",
    features: "Функции",
    workflow: "Рабочий процесс",
    whyNexaCore: "Почему NexaCore?",
    pricing: "Цены",
    about: "О нас",
    contact: "Контакты",
    requestDemo: "Запросить демо",
    startFree: "Начать",
    login: "Вход",
    language: "Язык",
    theme: "Тема",
    light: "Светлая",
    dark: "Тёмная",
    system: "Авто",
    sales: "Управление продажами",
    purchases: "Закупки и снабжение",
    inventory: "Склад и инвентарь",
    accounting: "Финансовый учёт",
    crm: "Управление клиентами",
    hr: "Кадры",
    ai: "Искусственный интеллект",
    branches: "Мультифилиалы",
    allSolutions: "Все решения",
  },
  de: {
    home: "Startseite",
    solutions: "Lösungen",
    features: "Funktionen",
    workflow: "Arbeitsablauf",
    whyNexaCore: "Warum NexaCore?",
    pricing: "Preise",
    about: "Über uns",
    contact: "Kontakt",
    requestDemo: "Demo anfordern",
    startFree: "Starten",
    login: "Anmelden",
    language: "Sprache",
    theme: "Design",
    light: "Hell",
    dark: "Dunkel",
    system: "Auto",
    sales: "Vertriebsmanagement",
    purchases: "Einkauf und Beschaffung",
    inventory: "Lager und Bestand",
    accounting: "Finanzbuchhaltung",
    crm: "Kundenbeziehungen",
    hr: "Personalwesen",
    ai: "Künstliche Intelligenz",
    branches: "Multi-Filiale",
    allSolutions: "Alle Lösungen",
  },
  pl: {
    home: "Strona główna",
    solutions: "Rozwiązania",
    features: "Funkcje",
    workflow: "Przepływ pracy",
    whyNexaCore: "Dlaczego NexaCore?",
    pricing: "Cennik",
    about: "O nas",
    contact: "Kontakt",
    requestDemo: "Zamów demo",
    startFree: "Rozpocznij",
    login: "Zaloguj",
    language: "Język",
    theme: "Motyw",
    light: "Jasny",
    dark: "Ciemny",
    system: "Auto",
    sales: "Zarządzanie sprzedażą",
    purchases: "Zakupy i zaopatrzenie",
    inventory: "Magazyn i inwentarz",
    accounting: "Księgowość finansowa",
    crm: "Relacje z klientami",
    hr: "Kadry",
    ai: "Sztuczna inteligencja",
    branches: "Multi-oddziały",
    allSolutions: "Wszystkie rozwiązania",
  },
  ro: {
    home: "Acasă",
    solutions: "Soluții",
    features: "Funcții",
    workflow: "Flux de lucru",
    whyNexaCore: "De ce NexaCore?",
    pricing: "Prețuri",
    about: "Despre noi",
    contact: "Contact",
    requestDemo: "Solicită demo",
    startFree: "Începe",
    login: "Conectare",
    language: "Limbă",
    theme: "Temă",
    light: "Luminos",
    dark: "Întunecat",
    system: "Auto",
    sales: "Managementul vânzărilor",
    purchases: "Achiziții și aprovizionare",
    inventory: "Depozit și inventar",
    accounting: "Contabilitate financiară",
    crm: "Relații cu clienții",
    hr: "Resurse umane",
    ai: "Inteligență artificială",
    branches: "Multi-sucursale",
    allSolutions: "Toate soluțiile",
  },
};

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "ro", name: "Română", flag: "🇷🇴" },
];

export function NCHeader() {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const location = useLocation();

  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLangDropdownOpen(false);
      setIsThemeDropdownOpen(false);
      setIsSolutionsDropdownOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/nexacore", label: t.home },
    { href: "/nexacore/features", label: t.features },
    { href: "/nexacore/workflow", label: t.workflow },
    { href: "/nexacore/pricing", label: t.pricing },
    { href: "/nexacore/contact", label: t.contact },
  ];

  // Business Solutions for dropdown
  const businessSolutions = [
    { href: "/nexacore/solutions/sales", label: t.sales, icon: ShoppingCart },
    { href: "/nexacore/solutions/purchases", label: t.purchases, icon: Package },
    { href: "/nexacore/solutions/inventory", label: t.inventory, icon: Warehouse },
    { href: "/nexacore/solutions/accounting", label: t.accounting, icon: Calculator },
    { href: "/nexacore/solutions/crm", label: t.crm, icon: Users },
    { href: "/nexacore/solutions/hr", label: t.hr, icon: Users },
    { href: "/nexacore/solutions/ai", label: t.ai, icon: Brain },
    { href: "/nexacore/solutions/branches", label: t.branches, icon: Building2 },
  ];

  const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

  // Check if on a page with dark hero - always show background
  const isOnDarkHeroPage = location.pathname !== "/nexacore";
  const showBackground = isScrolled || isOnDarkHeroPage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showBackground
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-700/50"
          : "bg-transparent"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/nexacore" className="flex-shrink-0">
            <NCLogo showSlogan={true} animated={true} language={language as any} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home Link */}
            <Link
              to="/nexacore"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === "/nexacore"
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                  : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {t.home}
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
                }}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname.includes("/solutions")
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                    : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {t.solutions}
                <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isSolutionsDropdownOpen && (
                <div className={`absolute top-full ${isRTL ? "right-0" : "left-0"} mt-2 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-50 max-h-[70vh] overflow-y-auto`}>
                  <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {language === "ar" ? "الحلول المتكاملة" : "Integrated Solutions"}
                    </span>
                  </div>
                  {businessSolutions.map((link, index) => (
                    <Link
                      key={link.href + index}
                      to={link.href}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                      onClick={() => setIsSolutionsDropdownOpen(false)}
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                        <link.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{link.label}</span>
                    </Link>
                  ))}
                  <div className="border-t border-slate-200 dark:border-slate-700 mt-2 pt-2">
                    <Link
                      to="/nexacore/solutions"
                      className="flex items-center gap-2 px-4 py-3 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                      onClick={() => setIsSolutionsDropdownOpen(false)}
                    >
                      <Layers className="w-4 h-4" />
                      <span className="text-sm font-medium">{t.allSolutions}</span>
                      <ArrowRight className={`w-4 h-4 ${isRTL ? "mr-auto rotate-180" : "ml-auto"}`} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.href
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                    : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Theme Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsThemeDropdownOpen(!isThemeDropdownOpen);
                }}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={t.theme}
              >
                <ThemeIcon className="w-5 h-5" />
              </button>
              
              {isThemeDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-1 z-50">
                  <button
                    onClick={() => { setTheme("light"); setIsThemeDropdownOpen(false); }}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm ${theme === "light" ? "text-blue-600 bg-blue-50 dark:bg-blue-900/30" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`}
                  >
                    <Sun className="w-4 h-4" />
                    {t.light}
                  </button>
                  <button
                    onClick={() => { setTheme("dark"); setIsThemeDropdownOpen(false); }}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm ${theme === "dark" ? "text-blue-600 bg-blue-50 dark:bg-blue-900/30" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`}
                  >
                    <Moon className="w-4 h-4" />
                    {t.dark}
                  </button>
                  <button
                    onClick={() => { setTheme("system"); setIsThemeDropdownOpen(false); }}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm ${theme === "system" ? "text-blue-600 bg-blue-50 dark:bg-blue-900/30" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`}
                  >
                    <Monitor className="w-4 h-4" />
                    {t.system}
                  </button>
                </div>
              )}
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangDropdownOpen(!isLangDropdownOpen);
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{languages.find(l => l.code === language)?.flag}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-1 z-50 max-h-80 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setIsLangDropdownOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-sm ${language === lang.code ? "text-blue-600 bg-blue-50 dark:bg-blue-900/30" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/nexacore/login">
              <Button variant="ghost" size="sm" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-blue-900/30">
                {t.login}
              </Button>
            </Link>
            
            <Link to="/nexacore/register">
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white">
                {t.startFree}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                  location.pathname === link.href
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
              <p className="px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">{t.solutions}</p>
              {businessSolutions.map((link, index) => (
                <Link
                  key={link.href + index}
                  to={link.href}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon className="w-4 h-4 text-blue-600" />
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4 flex gap-2">
              <Link to="/nexacore/login" className="flex-1">
                <Button variant="outline" className="w-full hover:text-blue-600 hover:border-blue-600">{t.login}</Button>
              </Link>
              <Link to="/nexacore/register" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">{t.startFree}</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
