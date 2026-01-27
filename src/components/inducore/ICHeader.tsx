import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, Language } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { Button } from "@/components/ui/button";
import { ICLogo } from "@/components/inducore/ICLogo";
import { 
  Menu, X, Globe, ChevronDown, Sun, Moon, Monitor,
  ArrowRight, Factory, Package, Boxes, 
  Warehouse, Receipt, BarChart3, Calendar, Settings, Layers, Cpu, Cog
} from "lucide-react";

const translations = {
  en: {
    home: "Home",
    solutions: "Solutions",
    features: "Features",
    workflow: "Workflow",
    whyInduCore: "Why InduCore?",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    security: "Security",
    requestDemo: "Request Demo",
    startFree: "Start Free",
    login: "Login",
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    production: "Production Management",
    inventory: "Raw Materials",
    warehouse: "Warehouses",
    orders: "Orders & Reservations",
    costing: "Costing & Pricing",
    analytics: "Analytics",
    hr: "HR & Payroll",
    allSolutions: "View All Solutions",
  },
  ar: {
    home: "الرئيسية",
    solutions: "الحلول",
    features: "المميزات",
    workflow: "سير العمل",
    whyInduCore: "لماذا InduCore؟",
    pricing: "الأسعار",
    about: "عن الشركة",
    contact: "تواصل معنا",
    security: "الأمان",
    requestDemo: "طلب عرض",
    startFree: "ابدأ مجاناً",
    login: "تسجيل الدخول",
    language: "اللغة",
    theme: "المظهر",
    light: "فاتح",
    dark: "داكن",
    system: "تلقائي",
    production: "إدارة الإنتاج",
    inventory: "المواد الأولية",
    warehouse: "المستودعات",
    orders: "الطلبات والحجوزات",
    costing: "التكلفة والتسعير",
    analytics: "التحليلات",
    hr: "الموارد البشرية والرواتب",
    allSolutions: "عرض جميع الحلول",
  },
  tr: {
    home: "Ana Sayfa",
    solutions: "Çözümler",
    features: "Özellikler",
    workflow: "İş Akışı",
    whyInduCore: "Neden InduCore?",
    pricing: "Fiyatlar",
    about: "Hakkımızda",
    contact: "İletişim",
    security: "Güvenlik",
    requestDemo: "Demo Talep",
    startFree: "Başla",
    login: "Giriş",
    language: "Dil",
    theme: "Tema",
    light: "Açık",
    dark: "Koyu",
    system: "Otomatik",
    production: "Üretim Yönetimi",
    inventory: "Hammaddeler",
    warehouse: "Depolar",
    orders: "Siparişler ve Rezervasyonlar",
    costing: "Maliyet ve Fiyatlandırma",
    analytics: "Analitik",
    hr: "İK ve Bordro",
    allSolutions: "Tüm Çözümler",
  },
  ru: {
    home: "Главная",
    solutions: "Решения",
    features: "Функции",
    workflow: "Рабочий процесс",
    whyInduCore: "Почему InduCore?",
    pricing: "Цены",
    about: "О нас",
    contact: "Контакты",
    security: "Безопасность",
    requestDemo: "Запросить демо",
    startFree: "Начать",
    login: "Вход",
    language: "Язык",
    theme: "Тема",
    light: "Светлая",
    dark: "Тёмная",
    system: "Авто",
    production: "Управление производством",
    inventory: "Сырьё",
    warehouse: "Склады",
    orders: "Заказы и бронирования",
    costing: "Себестоимость и цены",
    analytics: "Аналитика",
    hr: "HR и зарплаты",
    allSolutions: "Все решения",
  },
  fr: {
    home: "Accueil",
    solutions: "Solutions",
    features: "Fonctionnalités",
    workflow: "Flux de travail",
    whyInduCore: "Pourquoi InduCore?",
    pricing: "Tarifs",
    about: "À propos",
    contact: "Contact",
    security: "Sécurité",
    requestDemo: "Demander une démo",
    startFree: "Commencer",
    login: "Connexion",
    language: "Langue",
    theme: "Thème",
    light: "Clair",
    dark: "Sombre",
    system: "Auto",
    production: "Gestion de production",
    inventory: "Matières premières",
    warehouse: "Entrepôts",
    orders: "Commandes et réservations",
    costing: "Coûts et tarification",
    analytics: "Analytique",
    hr: "RH et paie",
    allSolutions: "Toutes les solutions",
  },
  de: {
    home: "Startseite",
    solutions: "Lösungen",
    features: "Funktionen",
    workflow: "Arbeitsablauf",
    whyInduCore: "Warum InduCore?",
    pricing: "Preise",
    about: "Über uns",
    contact: "Kontakt",
    security: "Sicherheit",
    requestDemo: "Demo anfordern",
    startFree: "Starten",
    login: "Anmelden",
    language: "Sprache",
    theme: "Design",
    light: "Hell",
    dark: "Dunkel",
    system: "Auto",
    production: "Produktionsmanagement",
    inventory: "Rohstoffe",
    warehouse: "Lager",
    orders: "Bestellungen und Reservierungen",
    costing: "Kalkulation und Preise",
    analytics: "Analytik",
    hr: "HR und Gehaltsabrechnung",
    allSolutions: "Alle Lösungen",
  },
  nl: {
    home: "Home",
    solutions: "Oplossingen",
    features: "Functies",
    workflow: "Werkstroom",
    whyInduCore: "Waarom InduCore?",
    pricing: "Prijzen",
    about: "Over ons",
    contact: "Contact",
    security: "Beveiliging",
    requestDemo: "Demo aanvragen",
    startFree: "Start",
    login: "Inloggen",
    language: "Taal",
    theme: "Thema",
    light: "Licht",
    dark: "Donker",
    system: "Auto",
    production: "Productiebeheer",
    inventory: "Grondstoffen",
    warehouse: "Magazijnen",
    orders: "Bestellingen en reserveringen",
    costing: "Kosten en prijzen",
    analytics: "Analyse",
    hr: "HR en salarissen",
    allSolutions: "Alle oplossingen",
  },
  it: {
    home: "Home",
    solutions: "Soluzioni",
    features: "Funzionalità",
    workflow: "Flusso di lavoro",
    whyInduCore: "Perché InduCore?",
    pricing: "Prezzi",
    about: "Chi siamo",
    contact: "Contatti",
    security: "Sicurezza",
    requestDemo: "Richiedi demo",
    startFree: "Inizia",
    login: "Accedi",
    language: "Lingua",
    theme: "Tema",
    light: "Chiaro",
    dark: "Scuro",
    system: "Auto",
    production: "Gestione produzione",
    inventory: "Materie prime",
    warehouse: "Magazzini",
    orders: "Ordini e prenotazioni",
    costing: "Costi e prezzi",
    analytics: "Analitica",
    hr: "HR e buste paga",
    allSolutions: "Tutte le soluzioni",
  },
  uk: {
    home: "Головна",
    solutions: "Рішення",
    features: "Функції",
    workflow: "Робочий процес",
    whyInduCore: "Чому InduCore?",
    pricing: "Ціни",
    about: "Про нас",
    contact: "Контакти",
    security: "Безпека",
    requestDemo: "Запит демо",
    startFree: "Почати",
    login: "Вхід",
    language: "Мова",
    theme: "Тема",
    light: "Світла",
    dark: "Темна",
    system: "Авто",
    production: "Управління виробництвом",
    inventory: "Сировина",
    warehouse: "Склади",
    orders: "Замовлення та бронювання",
    costing: "Собівартість та ціни",
    analytics: "Аналітика",
    hr: "HR та зарплати",
    allSolutions: "Усі рішення",
  },
  pl: {
    home: "Strona główna",
    solutions: "Rozwiązania",
    features: "Funkcje",
    workflow: "Przepływ pracy",
    whyInduCore: "Dlaczego InduCore?",
    pricing: "Cennik",
    about: "O nas",
    contact: "Kontakt",
    security: "Bezpieczeństwo",
    requestDemo: "Zamów demo",
    startFree: "Rozpocznij",
    login: "Zaloguj",
    language: "Język",
    theme: "Motyw",
    light: "Jasny",
    dark: "Ciemny",
    system: "Auto",
    production: "Zarządzanie produkcją",
    inventory: "Surowce",
    warehouse: "Magazyny",
    orders: "Zamówienia i rezerwacje",
    costing: "Kalkulacja i ceny",
    analytics: "Analityka",
    hr: "HR i płace",
    allSolutions: "Wszystkie rozwiązania",
  },
  ro: {
    home: "Acasă",
    solutions: "Soluții",
    features: "Funcții",
    workflow: "Flux de lucru",
    whyInduCore: "De ce InduCore?",
    pricing: "Prețuri",
    about: "Despre noi",
    contact: "Contact",
    security: "Securitate",
    requestDemo: "Solicită demo",
    startFree: "Începe",
    login: "Conectare",
    language: "Limbă",
    theme: "Temă",
    light: "Luminos",
    dark: "Întunecat",
    system: "Auto",
    production: "Managementul producției",
    inventory: "Materii prime",
    warehouse: "Depozite",
    orders: "Comenzi și rezervări",
    costing: "Costuri și prețuri",
    analytics: "Analiză",
    hr: "HR și salarii",
    allSolutions: "Toate soluțiile",
  },
};

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "uk", name: "Українська", flag: "🇺🇦" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "ro", name: "Română", flag: "🇷🇴" },
];

export function ICHeader() {
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
    { href: "/inducore", label: t.home },
    { href: "/inducore/features", label: t.features },
    { href: "/inducore/workflow", label: t.workflow },
    { href: "/inducore/why-inducore", label: t.whyInduCore },
    { href: "/inducore/pricing", label: t.pricing },
    { href: "/inducore/contact", label: t.contact },
  ];

  // Industry Solutions for dropdown
  const industrySolutions = [
    { href: "/inducore/solutions/metal-steel", label: language === "ar" ? "تصنيع المعادن والصلب" : language === "tr" ? "Metal ve Çelik Üretimi" : language === "ru" ? "Металлургия и сталь" : language === "de" ? "Metall- und Stahlherstellung" : language === "pl" ? "Produkcja metali i stali" : language === "ro" ? "Producția de metale și oțel" : "Metal & Steel Manufacturing", icon: Cog },
    { href: "/inducore/solutions/food-beverage", label: language === "ar" ? "إنتاج الأغذية والمشروبات" : language === "tr" ? "Gıda ve İçecek Üretimi" : language === "ru" ? "Пищевая промышленность" : language === "de" ? "Lebensmittel- und Getränkeproduktion" : language === "pl" ? "Produkcja żywności i napojów" : language === "ro" ? "Producția de alimente și băuturi" : "Food & Beverage Production", icon: Package },
    { href: "/inducore/solutions/pharmaceutical", label: language === "ar" ? "التصنيع الدوائي" : language === "tr" ? "İlaç Üretimi" : language === "ru" ? "Фармацевтика" : language === "de" ? "Pharmazeutische Produktion" : language === "pl" ? "Produkcja farmaceutyczna" : language === "ro" ? "Producția farmaceutică" : "Pharmaceutical Manufacturing", icon: Factory },
    { href: "/inducore/solutions/automotive", label: language === "ar" ? "تصنيع قطع غيار السيارات" : language === "tr" ? "Otomotiv Parça Üretimi" : language === "ru" ? "Автомобильная промышленность" : language === "de" ? "Automobilteile-Herstellung" : language === "pl" ? "Produkcja części samochodowych" : language === "ro" ? "Producția de piese auto" : "Automotive Parts Manufacturing", icon: Boxes },
    { href: "/inducore/solutions/textile", label: language === "ar" ? "تصنيع النسيج والملابس" : language === "tr" ? "Tekstil ve Konfeksiyon Üretimi" : language === "ru" ? "Текстиль и одежда" : language === "de" ? "Textil- und Bekleidungsherstellung" : language === "pl" ? "Produkcja tekstyliów i odzieży" : language === "ro" ? "Producția de textile și îmbrăcăminte" : "Textile & Garment Manufacturing", icon: Layers },
    { href: "/inducore/solutions/electronics", label: language === "ar" ? "تصنيع الإلكترونيات" : language === "tr" ? "Elektronik Üretimi" : language === "ru" ? "Электроника" : language === "de" ? "Elektronikherstellung" : language === "pl" ? "Produkcja elektroniki" : language === "ro" ? "Producția de electronice" : "Electronics Manufacturing", icon: Cpu },
    { href: "/inducore/solutions/chemical", label: language === "ar" ? "المعالجة الكيميائية" : language === "tr" ? "Kimyasal İşleme" : language === "ru" ? "Химическая промышленность" : language === "de" ? "Chemische Verarbeitung" : language === "pl" ? "Przetwórstwo chemiczne" : language === "ro" ? "Procesare chimică" : "Chemical Processing", icon: Factory },
    { href: "/inducore/solutions/plastics", label: language === "ar" ? "البلاستيك والقولبة بالحقن" : language === "tr" ? "Plastik ve Enjeksiyon Kalıplama" : language === "ru" ? "Пластик и литьё" : language === "de" ? "Kunststoff und Spritzguss" : language === "pl" ? "Plastik i formowanie wtryskowe" : language === "ro" ? "Plastic și turnare prin injecție" : "Plastics & Injection Molding", icon: Boxes },
  ];

  const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

  // Check if on a page with dark hero - always show background
  const isOnDarkHeroPage = location.pathname !== "/inducore";
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
          <Link to="/inducore" className="flex-shrink-0">
            <ICLogo showSlogan={true} animated={true} language={language as any} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home Link */}
            <Link
              to="/inducore"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === "/inducore"
                  ? "text-red-800 dark:text-red-400 bg-red-50 dark:bg-red-900/30"
                  : "text-slate-700 dark:text-slate-300 hover:text-red-800 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800"
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
                    ? "text-red-800 dark:text-red-400 bg-red-50 dark:bg-red-900/30"
                    : "text-slate-700 dark:text-slate-300 hover:text-red-800 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {t.solutions}
                <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isSolutionsDropdownOpen && (
                <div className={`absolute top-full ${isRTL ? "right-0" : "left-0"} mt-2 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-50 max-h-[70vh] overflow-y-auto`}>
                  <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {language === "ar" ? "الحلول حسب الصناعة" : language === "tr" ? "Sektöre Göre Çözümler" : language === "ru" ? "Решения по отраслям" : language === "de" ? "Lösungen nach Branche" : "Solutions by Industry"}
                    </span>
                  </div>
                  {industrySolutions.map((link, index) => (
                    <Link
                      key={link.href + (link.hash || index)}
                      to={link.hash ? `${link.href}${link.hash}` : link.href}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                      onClick={() => setIsSolutionsDropdownOpen(false)}
                    >
                      <div className="w-9 h-9 rounded-lg bg-red-100 dark:bg-red-900/50 flex items-center justify-center flex-shrink-0">
                        <link.icon className="w-4 h-4 text-red-800 dark:text-red-400" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{link.label}</span>
                    </Link>
                  ))}
                  <div className="border-t border-slate-200 dark:border-slate-700 mt-2 pt-2">
                    <Link
                      to="/inducore/solutions"
                      className="flex items-center gap-2 px-4 py-3 text-red-800 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
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
                    ? "text-red-800 dark:text-red-400 bg-red-50 dark:bg-red-900/30"
                    : "text-slate-700 dark:text-slate-300 hover:text-red-800 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800"
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
                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm ${theme === "light" ? "text-red-800 bg-red-50 dark:bg-red-900/30" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`}
                  >
                    <Sun className="w-4 h-4" />
                    {t.light}
                  </button>
                  <button
                    onClick={() => { setTheme("dark"); setIsThemeDropdownOpen(false); }}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm ${theme === "dark" ? "text-red-800 bg-red-50 dark:bg-red-900/30" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`}
                  >
                    <Moon className="w-4 h-4" />
                    {t.dark}
                  </button>
                  <button
                    onClick={() => { setTheme("system"); setIsThemeDropdownOpen(false); }}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm ${theme === "system" ? "text-red-800 bg-red-50 dark:bg-red-900/30" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`}
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
                      className={`w-full flex items-center gap-3 px-4 py-2 text-sm ${language === lang.code ? "text-red-800 bg-red-50 dark:bg-red-900/30" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/inducore/login">
              <Button variant="ghost" size="sm" className="text-slate-700 dark:text-slate-300 hover:text-red-800 hover:bg-red-50 dark:hover:text-red-400 dark:hover:bg-red-900/30">
                {t.login}
              </Button>
            </Link>
            
            <Link to="/inducore/register">
              <Button size="sm" className="bg-red-800 hover:bg-red-900 text-white">
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
                    ? "text-red-800 dark:text-red-400 bg-red-50 dark:bg-red-900/30"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
              <p className="px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">{t.solutions}</p>
              {industrySolutions.map((link, index) => (
                <Link
                  key={link.href + (link.hash || index)}
                  to={link.hash ? `${link.href}${link.hash}` : link.href}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon className="w-4 h-4 text-red-800" />
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4 flex gap-2">
              <Link to="/inducore/login" className="flex-1">
                <Button variant="outline" className="w-full hover:text-red-800 hover:border-red-800">{t.login}</Button>
              </Link>
              <Link to="/inducore/register" className="flex-1">
                <Button className="w-full bg-red-800 hover:bg-red-900">{t.startFree}</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
