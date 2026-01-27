import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, Language } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { Button } from "@/components/ui/button";
import { MCLogo } from "@/components/medcore/MCLogo";
import { 
  Menu, X, Globe, ChevronDown, Sun, Moon, Monitor,
  ArrowRight, Heart, Stethoscope, Pill, 
  FlaskConical, Receipt, Activity, Calendar, Video, FileText, BarChart3, Layers
} from "lucide-react";

const translations = {
  en: {
    home: "Home",
    solutions: "Solutions",
    features: "Features",
    workflow: "Workflow",
    whyMedCore: "Why MedCore?",
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
    emr: "Medical Records",
    appointments: "Appointments",
    pharmacy: "Pharmacy",
    laboratory: "Laboratory",
    billing: "Medical Billing",
    analytics: "Analytics",
    telemedicine: "Telemedicine",
    allSolutions: "View All Solutions",
  },
  ar: {
    home: "الرئيسية",
    solutions: "الحلول",
    features: "المميزات",
    workflow: "سير العمل",
    whyMedCore: "لماذا MedCore؟",
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
    emr: "السجلات الطبية",
    appointments: "المواعيد",
    pharmacy: "الصيدلية",
    laboratory: "المختبر",
    billing: "الفوترة الطبية",
    analytics: "التحليلات",
    telemedicine: "الطب عن بعد",
    allSolutions: "عرض جميع الحلول",
  },
  tr: {
    home: "Ana Sayfa",
    solutions: "Çözümler",
    features: "Özellikler",
    workflow: "İş Akışı",
    whyMedCore: "Neden MedCore?",
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
    emr: "Tıbbi Kayıtlar",
    appointments: "Randevular",
    pharmacy: "Eczane",
    laboratory: "Laboratuvar",
    billing: "Faturalama",
    analytics: "Analitik",
    telemedicine: "Teletıp",
    allSolutions: "Tüm Çözümler",
  },
  ru: {
    home: "Главная",
    solutions: "Решения",
    features: "Функции",
    workflow: "Рабочий процесс",
    whyMedCore: "Почему MedCore?",
    pricing: "Цены",
    about: "О нас",
    contact: "Контакты",
    security: "Безопасность",
    requestDemo: "Демо",
    startFree: "Начать",
    login: "Вход",
    language: "Язык",
    theme: "Тема",
    light: "Светлая",
    dark: "Тёмная",
    system: "Авто",
    emr: "Медкарты",
    appointments: "Записи",
    pharmacy: "Аптека",
    laboratory: "Лаборатория",
    billing: "Счета",
    analytics: "Аналитика",
    telemedicine: "Телемедицина",
    allSolutions: "Все решения",
  },
  fr: {
    home: "Accueil",
    solutions: "Solutions",
    features: "Fonctionnalités",
    workflow: "Flux de travail",
    whyMedCore: "Pourquoi MedCore?",
    pricing: "Tarifs",
    about: "À propos",
    contact: "Contact",
    security: "Sécurité",
    requestDemo: "Démo",
    startFree: "Essayer",
    login: "Connexion",
    language: "Langue",
    theme: "Thème",
    light: "Clair",
    dark: "Sombre",
    system: "Auto",
    emr: "Dossiers",
    appointments: "Rendez-vous",
    pharmacy: "Pharmacie",
    laboratory: "Laboratoire",
    billing: "Facturation",
    analytics: "Analytique",
    telemedicine: "Télémédecine",
    allSolutions: "Toutes les solutions",
  },
  de: {
    home: "Startseite",
    solutions: "Lösungen",
    features: "Funktionen",
    workflow: "Arbeitsablauf",
    whyMedCore: "Warum MedCore?",
    pricing: "Preise",
    about: "Über uns",
    contact: "Kontakt",
    security: "Sicherheit",
    requestDemo: "Demo",
    startFree: "Starten",
    login: "Anmelden",
    language: "Sprache",
    theme: "Design",
    light: "Hell",
    dark: "Dunkel",
    system: "Auto",
    emr: "Patientenakten",
    appointments: "Termine",
    pharmacy: "Apotheke",
    laboratory: "Labor",
    billing: "Abrechnung",
    analytics: "Analytik",
    telemedicine: "Telemedizin",
    allSolutions: "Alle Lösungen",
  },
  nl: {
    home: "Home",
    solutions: "Oplossingen",
    features: "Functies",
    workflow: "Werkstroom",
    whyMedCore: "Waarom MedCore?",
    pricing: "Prijzen",
    about: "Over ons",
    contact: "Contact",
    security: "Beveiliging",
    requestDemo: "Demo",
    startFree: "Start",
    login: "Inloggen",
    language: "Taal",
    theme: "Thema",
    light: "Licht",
    dark: "Donker",
    system: "Auto",
    emr: "Dossiers",
    appointments: "Afspraken",
    pharmacy: "Apotheek",
    laboratory: "Laboratorium",
    billing: "Facturering",
    analytics: "Analyse",
    telemedicine: "Telemedicijn",
    allSolutions: "Alle oplossingen",
  },
  it: {
    home: "Home",
    solutions: "Soluzioni",
    features: "Funzionalità",
    workflow: "Flusso di lavoro",
    whyMedCore: "Perché MedCore?",
    pricing: "Prezzi",
    about: "Chi siamo",
    contact: "Contatti",
    security: "Sicurezza",
    requestDemo: "Demo",
    startFree: "Inizia",
    login: "Accedi",
    language: "Lingua",
    theme: "Tema",
    light: "Chiaro",
    dark: "Scuro",
    system: "Auto",
    emr: "Cartelle",
    appointments: "Appuntamenti",
    pharmacy: "Farmacia",
    laboratory: "Laboratorio",
    billing: "Fatturazione",
    analytics: "Analitica",
    telemedicine: "Telemedicina",
    allSolutions: "Tutte le soluzioni",
  },
  uk: {
    home: "Головна",
    solutions: "Рішення",
    features: "Функції",
    workflow: "Робочий процес",
    whyMedCore: "Чому MedCore?",
    pricing: "Ціни",
    about: "Про нас",
    contact: "Контакти",
    security: "Безпека",
    requestDemo: "Демо",
    startFree: "Почати",
    login: "Вхід",
    language: "Мова",
    theme: "Тема",
    light: "Світла",
    dark: "Темна",
    system: "Авто",
    emr: "Медкартки",
    appointments: "Записи",
    pharmacy: "Аптека",
    laboratory: "Лабораторія",
    billing: "Рахунки",
    analytics: "Аналітика",
    telemedicine: "Телемедицина",
    allSolutions: "Усі рішення",
  },
};

const languageNames: { [key: string]: string } = {
  en: "English",
  ar: "العربية",
  fr: "Français",
  de: "Deutsch",
  nl: "Nederlands",
  it: "Italiano",
  tr: "Türkçe",
  ru: "Русский",
  uk: "Українська",
};

export function MCHeader() {
  const { language, setLanguage, isRTL } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const location = useLocation();

  const t = translations[language as keyof typeof translations] || translations.en;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setSolutionsOpen(false);
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-dropdown]')) {
        setSolutionsOpen(false);
        setLangOpen(false);
        setThemeOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const solutions = [
    { key: "emr", icon: FileText, href: "/medcore/solutions/emr" },
    { key: "appointments", icon: Calendar, href: "/medcore/solutions/appointments" },
    { key: "pharmacy", icon: Pill, href: "/medcore/solutions/pharmacy" },
    { key: "laboratory", icon: FlaskConical, href: "/medcore/solutions/laboratory" },
    { key: "billing", icon: Receipt, href: "/medcore/solutions/billing" },
    { key: "analytics", icon: BarChart3, href: "/medcore/solutions/analytics" },
    { key: "telemedicine", icon: Video, href: "/medcore/solutions/telemedicine" },
  ];

  const navLinks = [
    { key: "home", href: "/medcore" },
    { key: "features", href: "/medcore/features" },
    { key: "workflow", href: "/medcore/workflow" },
    { key: "whyMedCore", href: "/medcore/why-medcore" },
    { key: "pricing", href: "/medcore/pricing" },
    { key: "contact", href: "/medcore/contact" },
  ];
  
  // CSS handles RTL direction automatically via dir="rtl"
  const displayNavLinks = navLinks;

  const themeOptions = [
    { key: "light", value: "light", icon: Sun },
    { key: "dark", value: "dark", icon: Moon },
    { key: "system", value: "system", icon: Monitor },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-emerald-100 dark:border-emerald-900/30"
          : "bg-transparent"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Right side in RTL */}
          <Link to="/medcore" className="flex items-center">
            <MCLogo className="h-9 w-auto" showText={true} showSlogan={true} animated={true} />
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-1">
            {displayNavLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.href
                    ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20"
                    : "text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                }`}
              >
                {t[link.key as keyof typeof t]}
              </Link>
            ))}

            {/* Solutions Dropdown */}
            <div className="relative" data-dropdown>
              <button
                onClick={(e) => { e.stopPropagation(); setSolutionsOpen(!solutionsOpen); setLangOpen(false); setThemeOpen(false); }}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
              >
                {t.solutions}
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>
              
              {solutionsOpen && (
                <div className="absolute top-full start-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-2 z-50">
                  {solutions.map((item) => (
                    <Link
                      key={item.key}
                      to={item.href}
                      onClick={() => setSolutionsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                    >
                      <item.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {t[item.key as keyof typeof t]}
                      </span>
                    </Link>
                  ))}
                  <div className="border-t border-slate-200 dark:border-slate-700 mt-2 pt-2">
                    <Link
                      to="/medcore/solutions"
                      onClick={() => setSolutionsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors text-emerald-600 dark:text-emerald-400"
                    >
                      <Layers className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        {t.allSolutions}
                      </span>
                      <ArrowRight className="w-4 h-4 ms-auto" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions - Left side in RTL */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative" data-dropdown>
              <button
                onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); setSolutionsOpen(false); setThemeOpen(false); }}
                className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{languageNames[language] || "English"}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              {langOpen && (
                <div className="absolute top-full end-0 mt-2 w-40 max-h-80 overflow-y-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50">
                  {Object.entries(languageNames).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => { setLanguage(code as Language); setLangOpen(false); }}
                      className={`w-full px-4 py-2 text-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-start ${
                        language === code ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20" : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Selector */}
            <div className="relative" data-dropdown>
              <button
                onClick={(e) => { e.stopPropagation(); setThemeOpen(!themeOpen); setSolutionsOpen(false); setLangOpen(false); }}
                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors"
              >
                {theme === "dark" ? <Moon className="w-5 h-5" /> : theme === "light" ? <Sun className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
              </button>
              
              {themeOpen && (
                <div className="absolute top-full end-0 mt-2 w-36 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50">
                  {[
                    { key: "light", value: "light", icon: Sun },
                    { key: "dark", value: "dark", icon: Moon },
                    { key: "system", value: "system", icon: Monitor },
                  ].map((option) => (
                    <button
                      key={option.key}
                      onClick={() => { setTheme(option.value); setThemeOpen(false); }}
                      className={`w-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-start ${
                        theme === option.value ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20" : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <option.icon className="w-4 h-4" />
                      {t[option.key as keyof typeof t]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/medcore/login">
              <Button variant="ghost" className="text-slate-600 dark:text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-600">
                {t.login}
              </Button>
            </Link>

            <Link to="/medcore/register">
              <Button className="bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700 text-white">
                {t.startFree}
                <ArrowRight className="w-4 h-4 ms-2" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {displayNavLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg"
              >
                {t[link.key as keyof typeof t]}
              </Link>
            ))}
            
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
              <p className="px-4 text-xs font-semibold text-slate-500 uppercase mb-2">{t.solutions}</p>
              {solutions.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg"
                >
                  <item.icon className="w-5 h-5 text-emerald-600" />
                  {t[item.key as keyof typeof t]}
                </Link>
              ))}
            </div>

            {/* Mobile Language Selector */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
              <p className="px-4 text-xs font-semibold text-slate-500 uppercase mb-2">{t.language}</p>
              <div className="grid grid-cols-2 gap-2 px-4">
                {Object.entries(languageNames).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => { setLanguage(code as Language); setIsOpen(false); }}
                    className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                      language === code 
                        ? "bg-emerald-600 text-white" 
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4 flex gap-2">
              <Link to="/medcore/login" className="flex-1">
                <Button variant="outline" className="w-full">{t.login}</Button>
              </Link>
              <Link to="/medcore/register" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-600">{t.startFree}</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
