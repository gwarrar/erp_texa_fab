import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { Button } from "@/components/ui/button";
import { FCLogo } from "@/components/fincore/FCLogo";
import { 
  Menu, X, Globe, ChevronDown, Sun, Moon, Monitor,
  ArrowRight, ArrowLeft
} from "lucide-react";

const translations = {
  en: {
    home: "Home",
    solutions: "Solutions",
    features: "Features",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    security: "Security",
    partners: "Partners",
    comparison: "Why FinCore",
    requestDemo: "Request Demo",
    startFree: "Start Free",
    login: "Login",
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    coreBanking: "Core Banking",
    exchangeSystem: "Exchange System",
    remittance: "Remittance",
    compliance: "Compliance",
    treasury: "Treasury",
    mobileApp: "Mobile App",
  },
  ar: {
    home: "الرئيسية",
    solutions: "الحلول",
    features: "المميزات",
    pricing: "الأسعار",
    about: "عن الشركة",
    contact: "تواصل معنا",
    security: "الأمان",
    partners: "الشركاء",
    comparison: "لماذا FinCore",
    requestDemo: "طلب عرض",
    startFree: "ابدأ مجاناً",
    login: "تسجيل الدخول",
    language: "اللغة",
    theme: "المظهر",
    light: "فاتح",
    dark: "داكن",
    system: "تلقائي",
    coreBanking: "النظام البنكي",
    exchangeSystem: "نظام الصرافة",
    remittance: "الحوالات",
    compliance: "الامتثال",
    treasury: "الخزينة",
    mobileApp: "التطبيق",
  },
  ru: {
    home: "Главная",
    solutions: "Решения",
    features: "Функции",
    pricing: "Цены",
    about: "О нас",
    contact: "Контакты",
    security: "Безопасность",
    partners: "Партнеры",
    comparison: "Почему FinCore",
    requestDemo: "Демо",
    startFree: "Начать",
    login: "Вход",
    language: "Язык",
    theme: "Тема",
    light: "Светлая",
    dark: "Тёмная",
    system: "Авто",
    coreBanking: "Банкинг",
    exchangeSystem: "Обмен",
    remittance: "Переводы",
    compliance: "Комплаенс",
    treasury: "Казначейство",
    mobileApp: "Приложение",
  },
  uk: {
    home: "Головна",
    solutions: "Рішення",
    features: "Функції",
    pricing: "Ціни",
    about: "Про нас",
    contact: "Контакти",
    security: "Безпека",
    partners: "Партнери",
    comparison: "Чому FinCore",
    requestDemo: "Демо",
    startFree: "Начать",
    login: "Вход",
    language: "Мова",
    theme: "Тема",
    light: "Світла",
    dark: "Темна",
    system: "Авто",
    coreBanking: "Банкінг",
    exchangeSystem: "Обмін",
    remittance: "Перекази",
    compliance: "Комплаєнс",
    treasury: "Казначейство",
    mobileApp: "Додаток",
  },
  tr: {
    home: "Ana Sayfa",
    solutions: "Çözümler",
    features: "Özellikler",
    pricing: "Fiyatlar",
    about: "Hakkımızda",
    contact: "İletişim",
    security: "Güvenlik",
    partners: "Ortaklar",
    comparison: "Neden FinCore",
    requestDemo: "Demo İste",
    language: "Dil",
    theme: "Tema",
    light: "Açık",
    dark: "Koyu",
    system: "Otomatik",
    coreBanking: "Bankacılık",
    exchangeSystem: "Döviz",
    remittance: "Havale",
    compliance: "Uyum",
    treasury: "Hazine",
    mobileApp: "Uygulama",
    startFree: "Ücretsiz Başla",
    login: "Giriş",
  },
  pl: {
    home: "Start",
    solutions: "Rozwiązania",
    features: "Funkcje",
    pricing: "Cennik",
    about: "O nas",
    contact: "Kontakt",
    security: "Bezpieczeństwo",
    partners: "Partnerzy",
    comparison: "Dlaczego FinCore",
    requestDemo: "Demo",
    language: "Język",
    theme: "Motyw",
    light: "Jasny",
    dark: "Ciemny",
    system: "Auto",
    coreBanking: "Bankowość",
    exchangeSystem: "Wymiana",
    remittance: "Przelewy",
    compliance: "Zgodność",
    treasury: "Skarbiec",
    mobileApp: "Aplikacja",
    startFree: "Start",
    login: "Logowanie",
  },
  ro: {
    home: "Acasă",
    solutions: "Soluții",
    features: "Funcții",
    pricing: "Prețuri",
    about: "Despre",
    contact: "Contact",
    security: "Securitate",
    partners: "Parteneri",
    comparison: "De ce FinCore",
    requestDemo: "Demo",
    language: "Limbă",
    theme: "Temă",
    light: "Deschis",
    dark: "Întunecat",
    system: "Auto",
    coreBanking: "Banking",
    exchangeSystem: "Schimb",
    remittance: "Remitențe",
    compliance: "Conformitate",
    treasury: "Trezorerie",
    mobileApp: "Aplicație",
    startFree: "Începe",
    login: "Autentificare",
  },
  it: {
    home: "Home",
    solutions: "Soluzioni",
    features: "Funzioni",
    pricing: "Prezzi",
    about: "Chi siamo",
    contact: "Contatti",
    security: "Sicurezza",
    partners: "Partner",
    comparison: "Perché FinCore",
    requestDemo: "Demo",
    language: "Lingua",
    theme: "Tema",
    light: "Chiaro",
    dark: "Scuro",
    system: "Auto",
    coreBanking: "Banking",
    exchangeSystem: "Cambio",
    remittance: "Rimesse",
    compliance: "Compliance",
    treasury: "Tesoreria",
    mobileApp: "App",
    startFree: "Inizia",
    login: "Accedi",
  },
};

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "uk", name: "Українська", flag: "🇺🇦" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "ro", name: "Română", flag: "🇷🇴" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

export function FCHeader() {
  const { language, setLanguage, dir } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const location = useLocation();

  const t = translations[language as keyof typeof translations] || translations.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/fincore", label: t.home },
    { href: "/fincore/solutions", label: t.solutions },
    { href: "/fincore/features", label: t.features },
    { href: "/fincore/pricing", label: t.pricing },
    { href: "/fincore/security", label: t.security },
    { href: "/fincore/partners", label: t.partners },
    { href: "/fincore/comparison", label: t.comparison },
    { href: "/fincore/contact", label: t.contact },
  ];

  const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/fincore" className="group">
            <FCLogo size="md" showSlogan />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === link.href
                    ? "text-[#0D9488] bg-[#0D9488]/10"
                    : "text-slate-600 dark:text-slate-300 hover:text-[#0A1628] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Switcher */}
            <div className="relative">
              <button
                onClick={() => {
                  setThemeMenuOpen(!themeMenuOpen);
                  setLangMenuOpen(false);
                }}
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <ThemeIcon className="w-5 h-5" />
              </button>
              {themeMenuOpen && (
                <div className="absolute top-full mt-2 end-0 w-36 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-50">
                  {[
                    { value: "light", label: t.light, Icon: Sun },
                    { value: "dark", label: t.dark, Icon: Moon },
                    { value: "system", label: t.system, Icon: Monitor },
                  ].map(({ value, label, Icon }) => (
                    <button
                      key={value}
                      onClick={() => {
                        setTheme(value as "light" | "dark" | "system");
                        setThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        theme === value
                          ? "bg-[#0D9488]/10 text-[#0D9488]"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => {
                  setLangMenuOpen(!langMenuOpen);
                  setThemeMenuOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {languages.find((l) => l.code === language)?.flag}
                </span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {langMenuOpen && (
                <div className="absolute top-full mt-2 end-0 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-50 max-h-80 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        language === lang.code
                          ? "bg-[#0D9488]/10 text-[#0D9488]"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <Link to="/fincore/login">
              <Button variant="ghost" className="text-slate-600 dark:text-slate-300 hover:text-[#0D9488] hover:bg-[#0D9488]/10 px-4 py-2 rounded-lg font-medium">
                {t.login}
              </Button>
            </Link>

            {/* Start Free CTA Button */}
            <Link to="/fincore/register">
              <Button className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] dark:from-[#0D9488] dark:to-[#14B8A6] text-white dark:text-[#0A1628] hover:shadow-lg hover:shadow-[#0D9488]/20 dark:hover:shadow-[#0D9488]/20 transition-all duration-300 px-5 py-2.5 rounded-lg font-medium">
                {t.startFree}
                <ArrowIcon className="w-4 h-4 ms-2" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-[#0D9488] bg-[#0D9488]/10"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Theme & Language */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as "light" | "dark" | "system")}
                className="flex-1 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm"
              >
                <option value="light">{t.light}</option>
                <option value="dark">{t.dark}</option>
                <option value="system">{t.system}</option>
              </select>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-3">
              <Link
                to="/fincore/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {t.login}
              </Link>
              <Link
                to="/fincore/register"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-3 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] dark:from-[#0D9488] dark:to-[#14B8A6] text-white dark:text-[#0A1628] rounded-lg font-medium"
              >
                {t.startFree}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
