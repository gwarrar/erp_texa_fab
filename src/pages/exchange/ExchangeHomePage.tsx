import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { 
  ArrowRight, ArrowLeft, ArrowUpDown, RefreshCw, TrendingUp, TrendingDown,
  Sun, Moon, Globe, Calculator, Coins, CircleDollarSign, 
  Wallet, ChevronDown, Menu, X, Clock, Building2,
  Gem, ChevronUp, Search, Edit, Save, RotateCcw
} from "lucide-react";

// Bitcoin icon component
const BitcoinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
  </svg>
);

// All 8 languages
type Language = 'en' | 'ar' | 'ru' | 'uk' | 'pl' | 'ro' | 'tr' | 'de';

interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  rtl: boolean;
  flag: string;
}

const languages: LanguageConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', rtl: false, flag: '🇬🇧' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', rtl: true, flag: '🇸🇦' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', rtl: false, flag: '🇷🇺' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', rtl: false, flag: '🇺🇦' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', rtl: false, flag: '🇵🇱' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', rtl: false, flag: '🇷🇴' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', rtl: false, flag: '🇹🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', rtl: false, flag: '🇩🇪' },
];

// Translations for all 8 languages
const translations: Record<Language, Record<string, string>> = {
  en: {
    title: 'Exchange Core',
    subtitle: 'Professional Currency Exchange Platform',
    rates: 'Exchange Rates',
    calculator: 'Calculator',
    currencies: 'Currencies',
    crypto: 'Crypto',
    precious: 'Precious Metals',
    baseCurrency: 'Base Currency',
    lastUpdate: 'Last Update',
    buy: 'Buy',
    sell: 'Sell',
    from: 'From',
    to: 'To',
    amount: 'Amount',
    result: 'Result',
    convert: 'Convert',
    swap: 'Swap',
    currencyCalculator: 'Currency Calculator',
    selectCurrency: 'Select Currency',
    allCurrencies: 'All Currencies',
    oldRate: 'Old Lira',
    newRate: 'New Lira',
    search: 'Search currencies...',
    quickSelect: 'Quick Select',
    viewAll: 'View All',
    contactUs: 'Contact Us',
    aboutUs: 'About Us',
    home: 'Home',
    login: 'Login',
    register: 'Register',
  },
  ar: {
    title: 'نواة الصرف',
    subtitle: 'منصة صرف العملات الاحترافية',
    rates: 'أسعار الصرف',
    calculator: 'الحاسبة',
    currencies: 'العملات',
    crypto: 'العملات الرقمية',
    precious: 'المعادن الثمينة',
    baseCurrency: 'العملة الأساسية',
    lastUpdate: 'آخر تحديث',
    buy: 'شراء',
    sell: 'بيع',
    from: 'من',
    to: 'إلى',
    amount: 'المبلغ',
    result: 'النتيجة',
    convert: 'تحويل',
    swap: 'تبديل',
    currencyCalculator: 'حاسبة العملات',
    selectCurrency: 'اختر العملة',
    allCurrencies: 'جميع العملات',
    oldRate: 'الليرة القديمة',
    newRate: 'الليرة الجديدة',
    search: 'البحث عن العملات...',
    quickSelect: 'اختيار سريع',
    viewAll: 'عرض الكل',
    contactUs: 'اتصل بنا',
    aboutUs: 'من نحن',
    home: 'الرئيسية',
    login: 'تسجيل الدخول',
    register: 'إنشاء حساب',
  },
  ru: {
    title: 'Exchange Core',
    subtitle: 'Профессиональная платформа обмена валют',
    rates: 'Курсы валют',
    calculator: 'Калькулятор',
    currencies: 'Валюты',
    crypto: 'Криптовалюты',
    precious: 'Драгоценные металлы',
    baseCurrency: 'Базовая валюта',
    lastUpdate: 'Последнее обновление',
    buy: 'Покупка',
    sell: 'Продажа',
    from: 'Из',
    to: 'В',
    amount: 'Сумма',
    result: 'Результат',
    convert: 'Конвертировать',
    swap: 'Поменять',
    currencyCalculator: 'Калькулятор валют',
    selectCurrency: 'Выберите валюту',
    allCurrencies: 'Все валюты',
    oldRate: 'Старая лира',
    newRate: 'Новая лира',
    search: 'Поиск валют...',
    quickSelect: 'Быстрый выбор',
    viewAll: 'Показать все',
    contactUs: 'Контакты',
    aboutUs: 'О нас',
    home: 'Главная',
    login: 'Войти',
    register: 'Регистрация',
  },
  uk: {
    title: 'Exchange Core',
    subtitle: 'Професійна платформа обміну валют',
    rates: 'Курси валют',
    calculator: 'Калькулятор',
    currencies: 'Валюти',
    crypto: 'Криптовалюти',
    precious: 'Дорогоцінні метали',
    baseCurrency: 'Базова валюта',
    lastUpdate: 'Останнє оновлення',
    buy: 'Купівля',
    sell: 'Продаж',
    from: 'З',
    to: 'В',
    amount: 'Сума',
    result: 'Результат',
    convert: 'Конвертувати',
    swap: 'Поміняти',
    currencyCalculator: 'Калькулятор валют',
    selectCurrency: 'Оберіть валюту',
    allCurrencies: 'Всі валюти',
    oldRate: 'Стара ліра',
    newRate: 'Нова ліра',
    search: 'Пошук валют...',
    quickSelect: 'Швидкий вибір',
    viewAll: 'Показати все',
    contactUs: 'Контакти',
    aboutUs: 'Про нас',
    home: 'Головна',
    login: 'Увійти',
    register: 'Реєстрація',
  },
  pl: {
    title: 'Exchange Core',
    subtitle: 'Profesjonalna platforma wymiany walut',
    rates: 'Kursy walut',
    calculator: 'Kalkulator',
    currencies: 'Waluty',
    crypto: 'Kryptowaluty',
    precious: 'Metale szlachetne',
    baseCurrency: 'Waluta bazowa',
    lastUpdate: 'Ostatnia aktualizacja',
    buy: 'Kup',
    sell: 'Sprzedaj',
    from: 'Z',
    to: 'Do',
    amount: 'Kwota',
    result: 'Wynik',
    convert: 'Przelicz',
    swap: 'Zamień',
    currencyCalculator: 'Kalkulator walut',
    selectCurrency: 'Wybierz walutę',
    allCurrencies: 'Wszystkie waluty',
    oldRate: 'Stara lira',
    newRate: 'Nowa lira',
    search: 'Szukaj walut...',
    quickSelect: 'Szybki wybór',
    viewAll: 'Pokaż wszystko',
    contactUs: 'Kontakt',
    aboutUs: 'O nas',
    home: 'Strona główna',
    login: 'Zaloguj się',
    register: 'Zarejestruj się',
  },
  ro: {
    title: 'Exchange Core',
    subtitle: 'Platformă profesională de schimb valutar',
    rates: 'Cursuri de schimb',
    calculator: 'Calculator',
    currencies: 'Valute',
    crypto: 'Criptomonede',
    precious: 'Metale prețioase',
    baseCurrency: 'Valută de bază',
    lastUpdate: 'Ultima actualizare',
    buy: 'Cumpără',
    sell: 'Vinde',
    from: 'Din',
    to: 'În',
    amount: 'Sumă',
    result: 'Rezultat',
    convert: 'Convertește',
    swap: 'Schimbă',
    currencyCalculator: 'Calculator valutar',
    selectCurrency: 'Selectați valuta',
    allCurrencies: 'Toate valutele',
    oldRate: 'Lira veche',
    newRate: 'Lira nouă',
    search: 'Căutare valute...',
    quickSelect: 'Selecție rapidă',
    viewAll: 'Vezi toate',
    contactUs: 'Contact',
    aboutUs: 'Despre noi',
    home: 'Acasă',
    login: 'Autentificare',
    register: 'Înregistrare',
  },
  tr: {
    title: 'Exchange Core',
    subtitle: 'Profesyonel Döviz Değişim Platformu',
    rates: 'Döviz Kurları',
    calculator: 'Hesap Makinesi',
    currencies: 'Para Birimleri',
    crypto: 'Kripto',
    precious: 'Değerli Metaller',
    baseCurrency: 'Ana Para Birimi',
    lastUpdate: 'Son Güncelleme',
    buy: 'Alış',
    sell: 'Satış',
    from: 'Kaynak',
    to: 'Hedef',
    amount: 'Tutar',
    result: 'Sonuç',
    convert: 'Dönüştür',
    swap: 'Değiştir',
    currencyCalculator: 'Döviz Hesaplayıcı',
    selectCurrency: 'Para Birimi Seçin',
    allCurrencies: 'Tüm Para Birimleri',
    oldRate: 'Eski Lira',
    newRate: 'Yeni Lira',
    search: 'Para birimi ara...',
    quickSelect: 'Hızlı Seçim',
    viewAll: 'Tümünü Gör',
    contactUs: 'İletişim',
    aboutUs: 'Hakkımızda',
    home: 'Ana Sayfa',
    login: 'Giriş Yap',
    register: 'Kayıt Ol',
  },
  de: {
    title: 'Exchange Core',
    subtitle: 'Professionelle Währungsumtausch-Plattform',
    rates: 'Wechselkurse',
    calculator: 'Rechner',
    currencies: 'Währungen',
    crypto: 'Kryptowährungen',
    precious: 'Edelmetalle',
    baseCurrency: 'Basiswährung',
    lastUpdate: 'Letzte Aktualisierung',
    buy: 'Kauf',
    sell: 'Verkauf',
    from: 'Von',
    to: 'Nach',
    amount: 'Betrag',
    result: 'Ergebnis',
    convert: 'Umrechnen',
    swap: 'Tauschen',
    currencyCalculator: 'Währungsrechner',
    selectCurrency: 'Währung auswählen',
    allCurrencies: 'Alle Währungen',
    oldRate: 'Alte Lira',
    newRate: 'Neue Lira',
    search: 'Währungen suchen...',
    quickSelect: 'Schnellauswahl',
    viewAll: 'Alle anzeigen',
    contactUs: 'Kontakt',
    aboutUs: 'Über uns',
    home: 'Startseite',
    login: 'Anmelden',
    register: 'Registrieren',
  },
};

// Currency data with flags
interface Currency {
  code: string;
  name: string;
  nameAr: string;
  flag: string;
  symbol: string;
  buyRate: number;
  sellRate: number;
  change: number;
  hasOldNew?: boolean;
  oldDivisor?: number;
}

const initialCurrenciesData: Currency[] = [
  { code: 'USD', name: 'US Dollar', nameAr: 'دولار أمريكي', flag: '🇺🇸', symbol: '$', buyRate: 124, sellRate: 124.5, change: 0.15 },
  { code: 'EUR', name: 'Euro', nameAr: 'يورو', flag: '🇪🇺', symbol: '€', buyRate: 135, sellRate: 136, change: 0.22 },
  { code: 'GBP', name: 'British Pound', nameAr: 'جنيه إسترليني', flag: '🇬🇧', symbol: '£', buyRate: 156, sellRate: 157, change: -0.10 },
  { code: 'SAR', name: 'Saudi Riyal', nameAr: 'ريال سعودي', flag: '🇸🇦', symbol: 'ر.س', buyRate: 33, sellRate: 33.2, change: 0.05 },
  { code: 'AED', name: 'UAE Dirham', nameAr: 'درهم إماراتي', flag: '🇦🇪', symbol: 'د.إ', buyRate: 33.8, sellRate: 34, change: 0.08 },
  { code: 'EGP', name: 'Egyptian Pound', nameAr: 'جنيه مصري', flag: '🇪🇬', symbol: 'ج.م', buyRate: 2.5, sellRate: 2.55, change: -0.25 },
  { code: 'SYP', name: 'Syrian Pound', nameAr: 'ليرة سورية', flag: '🇸🇾', symbol: 'ل.س', buyRate: 1, sellRate: 1, change: 0, hasOldNew: true, oldDivisor: 100 },
  { code: 'TRY', name: 'Turkish Lira', nameAr: 'ليرة تركية', flag: '🇹🇷', symbol: '₺', buyRate: 3.6, sellRate: 3.65, change: -0.35 },
  { code: 'RUB', name: 'Russian Ruble', nameAr: 'روبل روسي', flag: '🇷🇺', symbol: '₽', buyRate: 1.35, sellRate: 1.4, change: 0.42 },
  { code: 'UAH', name: 'Ukrainian Hryvnia', nameAr: 'هريفنيا أوكرانية', flag: '🇺🇦', symbol: '₴', buyRate: 3, sellRate: 3.1, change: -0.18 },
  { code: 'PLN', name: 'Polish Zloty', nameAr: 'زلوتي بولندي', flag: '🇵🇱', symbol: 'zł', buyRate: 30.5, sellRate: 31, change: 0.12 },
  { code: 'RON', name: 'Romanian Leu', nameAr: 'لي روماني', flag: '🇷🇴', symbol: 'lei', buyRate: 27, sellRate: 27.4, change: 0.09 },
  { code: 'CHF', name: 'Swiss Franc', nameAr: 'فرنك سويسري', flag: '🇨🇭', symbol: 'CHF', buyRate: 140, sellRate: 141, change: 0.18 },
  { code: 'JPY', name: 'Japanese Yen', nameAr: 'ين ياباني', flag: '🇯🇵', symbol: '¥', buyRate: 0.82, sellRate: 0.84, change: -0.08 },
  { code: 'CNY', name: 'Chinese Yuan', nameAr: 'يوان صيني', flag: '🇨🇳', symbol: '¥', buyRate: 17, sellRate: 17.3, change: 0.11 },
  { code: 'KWD', name: 'Kuwaiti Dinar', nameAr: 'دينار كويتي', flag: '🇰🇼', symbol: 'د.ك', buyRate: 403, sellRate: 405, change: 0.03 },
  { code: 'QAR', name: 'Qatari Riyal', nameAr: 'ريال قطري', flag: '🇶🇦', symbol: 'ر.ق', buyRate: 34, sellRate: 34.2, change: 0.06 },
  { code: 'JOD', name: 'Jordanian Dinar', nameAr: 'دينار أردني', flag: '🇯🇴', symbol: 'د.أ', buyRate: 175, sellRate: 176, change: 0.02 },
  { code: 'LBP', name: 'Lebanese Pound', nameAr: 'ليرة لبنانية', flag: '🇱🇧', symbol: 'ل.ل', buyRate: 0.00138, sellRate: 0.0014, change: -0.50 },
  { code: 'IQD', name: 'Iraqi Dinar', nameAr: 'دينار عراقي', flag: '🇮🇶', symbol: 'ع.د', buyRate: 0.095, sellRate: 0.096, change: 0.04 },
];

// Crypto currencies
const initialCryptoCurrencies = [
  { code: 'BTC', name: 'Bitcoin', nameAr: 'بيتكوين', symbol: '₿', price: 67500, change: 2.35 },
  { code: 'ETH', name: 'Ethereum', nameAr: 'إيثريوم', symbol: 'Ξ', price: 3420, change: -1.20 },
  { code: 'USDT', name: 'Tether', nameAr: 'تيثر', symbol: '₮', price: 1.00, change: 0.01 },
  { code: 'BNB', name: 'Binance Coin', nameAr: 'بينانس كوين', symbol: 'BNB', price: 580, change: 1.85 },
  { code: 'XRP', name: 'Ripple', nameAr: 'ريبل', symbol: 'XRP', price: 0.52, change: -0.45 },
];

// Precious metals
const initialPreciousMetals = [
  { code: 'XAU', name: 'Gold (oz)', nameAr: 'الذهب (أونصة)', symbol: '🥇', price: 2340, change: 0.85 },
  { code: 'XAG', name: 'Silver (oz)', nameAr: 'الفضة (أونصة)', symbol: '🥈', price: 29.50, change: 1.20 },
  { code: 'XPT', name: 'Platinum (oz)', nameAr: 'البلاتين (أونصة)', symbol: '⬜', price: 980, change: -0.32 },
  { code: 'XPD', name: 'Palladium (oz)', nameAr: 'البلاديوم (أونصة)', symbol: '⬛', price: 1050, change: 0.55 },
];

// Quick select currencies per language
const quickSelectByLanguage: Record<Language, string[]> = {
  ar: ['USD', 'EUR', 'SAR', 'AED', 'EGP', 'SYP'],
  ru: ['USD', 'EUR', 'RUB', 'UAH', 'TRY', 'GBP'],
  uk: ['USD', 'EUR', 'UAH', 'PLN', 'GBP', 'TRY'],
  pl: ['USD', 'EUR', 'PLN', 'GBP', 'CHF', 'UAH'],
  ro: ['USD', 'EUR', 'RON', 'GBP', 'CHF', 'TRY'],
  tr: ['USD', 'EUR', 'TRY', 'GBP', 'SAR', 'AED'],
  de: ['USD', 'EUR', 'CHF', 'GBP', 'JPY', 'PLN'],
  en: ['USD', 'EUR', 'GBP', 'JPY', 'CHF', 'CNY'],
};

export default function ExchangeHomePage() {
  // State for data
  const [currencies, setCurrencies] = useState<Currency[]>(() => {
    const saved = localStorage.getItem('exchange_currencies');
    return saved ? JSON.parse(saved) : initialCurrenciesData;
  });
  const [crypto, setCrypto] = useState(() => {
    const saved = localStorage.getItem('exchange_crypto');
    return saved ? JSON.parse(saved) : initialCryptoCurrencies;
  });
  const [metals, setMetals] = useState(() => {
    const saved = localStorage.getItem('exchange_metals');
    return saved ? JSON.parse(saved) : initialPreciousMetals;
  });
  
  const [editMode, setEditMode] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [language, setLanguage] = useState<Language>('ar');
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'currencies' | 'crypto' | 'precious'>('currencies');
  const [baseCurrency, setBaseCurrency] = useState('SYP');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);
  const [calcFrom, setCalcFrom] = useState('USD');
  const [calcTo, setCalcTo] = useState('SYP');
  const [calcAmount, setCalcAmount] = useState('100');
  const [useBuyRate, setUseBuyRate] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showAllCurrencies, setShowAllCurrencies] = useState(false);

  const t = translations[language];
  const isRTL = languages.find(l => l.code === language)?.rtl || false;

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Close language menu if clicking outside
      if (showLanguageMenu && !target.closest('[data-dropdown="language"]')) {
        setShowLanguageMenu(false);
      }
      
      // Close currency dropdown if clicking outside
      if (showCurrencyDropdown && !target.closest('[data-dropdown="currency"]')) {
        setShowCurrencyDropdown(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLanguageMenu, showCurrencyDropdown]);

  // Force SYP base when editing
  useEffect(() => {
    if (editMode && baseCurrency !== 'SYP') {
      setBaseCurrency('SYP');
    }
  }, [editMode]);

  // Fetch rates from API
  const fetchLatestRates = async () => {
    setIsRefreshing(true);
    try {
      // Fetch crypto rates from CoinGecko
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin,ripple,gold,silver,platinum,palladium&vs_currencies=usd,syp');
      const data = await response.json();

      // Update Crypto
      setCrypto(prev => prev.map(c => {
        const id = c.name.toLowerCase().replace(' ', '');
        const geckoId = id === 'tether' ? 'tether' : id === 'binancecoin' ? 'binancecoin' : id === 'ripple' ? 'ripple' : c.name.toLowerCase();
        
        if (data[geckoId]) {
          return { ...c, price: data[geckoId].usd };
        }
        return c;
      }));

      // Update Metals
      setMetals(prev => prev.map(m => {
        const id = m.name.split(' ')[0].toLowerCase();
        if (data[id]) {
          return { ...m, price: data[id].usd };
        }
        return m;
      }));

      // For Fiat, we'll use a free API for majors if possible, but for now we'll stick to manual/simulated for SYP context
      // as free APIs don't have accurate market rates for SYP.
      
    } catch (error) {
      console.error('Error fetching rates:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchLatestRates();
  }, []);

  // Save rates to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('exchange_currencies', JSON.stringify(currencies));
  }, [currencies]);

  useEffect(() => {
    localStorage.setItem('exchange_crypto', JSON.stringify(crypto));
  }, [crypto]);

  useEffect(() => {
    localStorage.setItem('exchange_metals', JSON.stringify(metals));
  }, [metals]);

  const handleRateChange = (code: string, field: 'buyRate' | 'sellRate', value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;

    setCurrencies(prev => prev.map(c => 
      c.code === code ? { ...c, [field]: numValue } : c
    ));
  };

  const handleCryptoChange = (code: string, value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;

    setCrypto(prev => prev.map(c => 
      c.code === code ? { ...c, price: numValue } : c
    ));
  };

  const handleMetalChange = (code: string, value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;

    setMetals(prev => prev.map(m => 
      m.code === code ? { ...m, price: numValue } : m
    ));
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all rates to defaults?')) {
      setCurrencies(initialCurrenciesData);
      setCrypto(initialCryptoCurrencies);
      setMetals(initialPreciousMetals);
      localStorage.removeItem('exchange_currencies');
      localStorage.removeItem('exchange_crypto');
      localStorage.removeItem('exchange_metals');
    }
  };

  // Format number - always use English numerals
  const formatNumber = (num: number, decimals: number = 2): string => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  // Format date and time
  const formatDateTime = (): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    // Always use en-GB for consistent date format with English numerals
    return currentTime.toLocaleString('en-GB', options);
  };

  // Get quick select currencies for current language
  const quickSelectCurrencies = useMemo(() => {
    return quickSelectByLanguage[language].map(code => 
      currencies.find(c => c.code === code)
    ).filter(Boolean) as Currency[];
  }, [language]);

  // Filter currencies by search
  const filteredCurrencies = useMemo(() => {
    if (!searchQuery) return currencies;
    const query = searchQuery.toLowerCase();
    return currencies.filter(c => 
      c.code.toLowerCase().includes(query) ||
      c.name.toLowerCase().includes(query) ||
      c.nameAr.includes(query)
    );
  }, [searchQuery]);

  // Calculate exchange rate
  const calculateExchange = (): string => {
    const amount = parseFloat(calcAmount) || 0;
    const fromCurrency = currencies.find(c => c.code === calcFrom);
    const toCurrency = currencies.find(c => c.code === calcTo);
    
    if (!fromCurrency || !toCurrency) return '0.00';
    
    const fromRate = useBuyRate ? fromCurrency.buyRate : fromCurrency.sellRate;
    const toRate = useBuyRate ? toCurrency.buyRate : toCurrency.sellRate;
    
    // If base is SYP, rates are already in SYP
    let result: number;
    if (calcFrom === 'SYP') {
      result = amount / toRate;
    } else if (calcTo === 'SYP') {
      result = amount * fromRate;
    } else {
      // Convert through SYP
      const inSYP = amount * fromRate;
      result = inSYP / toRate;
    }
    
    return formatNumber(result, result < 1 ? 6 : 2);
  };

  // Get rate display for a currency against base
  const getRateDisplay = (currency: Currency) => {
    if (currency.code === baseCurrency) return null;
    
    const baseCurrencyData = currencies.find(c => c.code === baseCurrency);
    if (!baseCurrencyData) return null;

    let buyRate: number, sellRate: number;
    
    if (baseCurrency === 'SYP') {
      // Show how much SYP for 1 unit of currency
      buyRate = currency.buyRate;
      sellRate = currency.sellRate;
    } else if (currency.code === 'SYP') {
      // Show how much of base currency for 1 SYP (very small number)
      buyRate = 1 / baseCurrencyData.buyRate;
      sellRate = 1 / baseCurrencyData.sellRate;
    } else {
      // Cross rate through SYP
      buyRate = currency.buyRate / baseCurrencyData.buyRate;
      sellRate = currency.sellRate / baseCurrencyData.sellRate;
    }

    return { buyRate, sellRate };
  };

  // Swap calculator currencies
  const swapCurrencies = () => {
    setCalcFrom(calcTo);
    setCalcTo(calcFrom);
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl ${darkMode ? 'bg-gray-900/90 border-gray-800' : 'bg-white/90 border-gray-200'} border-b`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/exchange" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                <CircleDollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">{t.title}</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setActiveTab('currencies')}
                className={`px-3 py-2 rounded-lg transition-colors ${activeTab === 'currencies' ? 'bg-amber-500/20 text-amber-400' : 'hover:bg-gray-800'}`}
              >
                {t.currencies}
              </button>
              <button 
                onClick={() => setActiveTab('crypto')}
                className={`px-3 py-2 rounded-lg transition-colors ${activeTab === 'crypto' ? 'bg-amber-500/20 text-amber-400' : 'hover:bg-gray-800'}`}
              >
                {t.crypto}
              </button>
              <button 
                onClick={() => setActiveTab('precious')}
                className={`px-3 py-2 rounded-lg transition-colors ${activeTab === 'precious' ? 'bg-amber-500/20 text-amber-400' : 'hover:bg-gray-800'}`}
              >
                {t.precious}
              </button>
              <button 
                onClick={() => setShowCalculator(true)}
                className="px-3 py-2 rounded-lg transition-colors hover:bg-gray-800"
              >
                {t.calculator}
              </button>
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              {/* Edit Mode Toggle */}
              <button
                onClick={() => setEditMode(!editMode)}
                className={`hidden md:flex p-2 rounded-lg transition-colors ${editMode ? 'bg-amber-500 text-white' : darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                title="Edit Rates"
              >
                {editMode ? <Save className="w-5 h-5" /> : <Edit className="w-5 h-5" />}
              </button>

              {/* Reset Button */}
              {editMode && (
                <button
                  onClick={handleReset}
                  className={`hidden md:flex p-2 rounded-lg transition-colors ${darkMode ? 'bg-red-900/20 text-red-400 hover:bg-red-900/40' : 'bg-red-100 text-red-600 hover:bg-red-200'}`}
                  title="Reset Rates"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              )}

              {/* Date/Time */}
              <div className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-mono">{formatDateTime()}</span>
              </div>

              {/* Language Selector */}
              <div className="relative" data-dropdown="language">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{languages.find(l => l.code === language)?.flag}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {showLanguageMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`absolute top-full ${isRTL ? 'left-0' : 'right-0'} mt-2 w-48 rounded-xl shadow-xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border overflow-hidden z-50`}
                    >
                      {languages.map(lang => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setShowLanguageMenu(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${language === lang.code ? 'bg-amber-500/20 text-amber-400' : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                        >
                          <span className="text-xl">{lang.flag}</span>
                          <span>{lang.nativeName}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="md:hidden overflow-hidden border-t border-gray-800"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                <button 
                  onClick={() => { setActiveTab('currencies'); setMobileMenuOpen(false); }}
                  className="w-full text-start px-4 py-3 rounded-lg hover:bg-gray-800"
                >
                  {t.currencies}
                </button>
                <button 
                  onClick={() => { setActiveTab('crypto'); setMobileMenuOpen(false); }}
                  className="w-full text-start px-4 py-3 rounded-lg hover:bg-gray-800"
                >
                  {t.crypto}
                </button>
                <button 
                  onClick={() => { setActiveTab('precious'); setMobileMenuOpen(false); }}
                  className="w-full text-start px-4 py-3 rounded-lg hover:bg-gray-800"
                >
                  {t.precious}
                </button>
                <button 
                  onClick={() => { setShowCalculator(true); setMobileMenuOpen(false); }}
                  className="w-full text-start px-4 py-3 rounded-lg hover:bg-gray-800"
                >
                  {t.calculator}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.subtitle}
          </p>
        </div>

        {/* Base Currency Selector */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className={`flex items-center gap-3 px-4 py-2 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{t.baseCurrency}:</span>
            <div className="relative" data-dropdown="currency">
              <button
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 text-amber-400 rounded-lg font-semibold"
              >
                <span>{currencies.find(c => c.code === baseCurrency)?.flag}</span>
                <span>{baseCurrency}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {showCurrencyDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} mt-2 w-64 rounded-xl shadow-xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border overflow-hidden z-40`}
                  >
                    <div className="p-2 border-b border-gray-700">
                      <div className="relative">
                        <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400`} />
                        <input
                          type="text"
                          placeholder={t.search}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className={`w-full ${isRTL ? 'pr-10 pl-3' : 'pl-10 pr-3'} py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                        />
                      </div>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {filteredCurrencies.map(currency => (
                        <button
                          key={currency.code}
                          onClick={() => {
                            setBaseCurrency(currency.code);
                            setShowCurrencyDropdown(false);
                            setSearchQuery('');
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${baseCurrency === currency.code ? 'bg-amber-500/20 text-amber-400' : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                        >
                          <span className="text-xl">{currency.flag}</span>
                          <span className="font-medium">{currency.code}</span>
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {language === 'ar' ? currency.nameAr : currency.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Last Update */}
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
            <RefreshCw className={`w-4 h-4 text-green-400 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{t.lastUpdate}:</span>
            <span className="font-mono">{formatDateTime()}</span>
          </div>
        </div>

        {/* Quick Select Currencies */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{t.quickSelect}</h3>
            <button
              onClick={() => setShowAllCurrencies(!showAllCurrencies)}
              className="text-amber-400 hover:text-amber-300 text-sm flex items-center gap-1"
            >
              {showAllCurrencies ? t.quickSelect : t.viewAll}
              {showAllCurrencies ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {(showAllCurrencies ? currencies : quickSelectCurrencies).map(currency => (
              <button
                key={currency.code}
                onClick={() => setBaseCurrency(currency.code)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  baseCurrency === currency.code 
                    ? 'bg-amber-500 text-white' 
                    : darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-white hover:bg-gray-100 shadow'
                }`}
              >
                <span>{currency.flag}</span>
                <span className="font-medium">{currency.code}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tabs Content */}
        {activeTab === 'currencies' && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currencies.filter(c => c.code !== baseCurrency).map(currency => {
              const rates = getRateDisplay(currency);
              if (!rates) return null;

              return (
                <motion.div
                  key={currency.code}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{currency.flag}</span>
                      <div>
                        <div className="font-bold">{currency.code}</div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {language === 'ar' ? currency.nameAr : currency.name}
                        </div>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
                      currency.change >= 0 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {currency.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {formatNumber(Math.abs(currency.change))}%
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>{t.buy}</div>
                      {editMode ? (
                        <input
                          type="number"
                          value={currency.buyRate}
                          onChange={(e) => handleRateChange(currency.code, 'buyRate', e.target.value)}
                          className={`w-full bg-transparent border-b ${darkMode ? 'border-gray-600' : 'border-gray-300'} focus:outline-none text-lg font-bold text-green-400`}
                        />
                      ) : (
                        <div className="text-lg font-bold text-green-400">
                          {formatNumber(rates.buyRate, rates.buyRate < 1 ? 6 : 2)}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>{t.sell}</div>
                      {editMode ? (
                        <input
                          type="number"
                          value={currency.sellRate}
                          onChange={(e) => handleRateChange(currency.code, 'sellRate', e.target.value)}
                          className={`w-full bg-transparent border-b ${darkMode ? 'border-gray-600' : 'border-gray-300'} focus:outline-none text-lg font-bold text-red-400`}
                        />
                      ) : (
                        <div className="text-lg font-bold text-red-400">
                          {formatNumber(rates.sellRate, rates.sellRate < 1 ? 6 : 2)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Old/New Syrian Lira display - only when SYP is involved */}
                  {baseCurrency === 'SYP' && currency.code !== 'SYP' && (
                    <div className={`mt-4 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{t.oldRate}</div>
                          <div className="font-mono">{formatNumber(rates.buyRate * 100, 0)} ل.س</div>
                        </div>
                        <div>
                          <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{t.newRate}</div>
                          <div className="font-mono">{formatNumber(rates.buyRate, 2)} ل.س</div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}

        {activeTab === 'crypto' && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {crypto.map(crypto => (
              <motion.div
                key={crypto.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {crypto.code === 'BTC' ? (
                      <BitcoinIcon className="w-8 h-8 text-amber-400" />
                    ) : (
                      <Coins className="w-8 h-8 text-amber-400" />
                    )}
                    <div>
                      <div className="font-bold">{crypto.code}</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {language === 'ar' ? crypto.nameAr : crypto.name}
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
                    crypto.change >= 0 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {crypto.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {formatNumber(Math.abs(crypto.change))}%
                  </div>
                </div>

                {editMode ? (
                  <div className="flex items-center text-2xl font-bold text-amber-400">
                    $
                    <input
                      type="number"
                      value={crypto.price}
                      onChange={(e) => handleCryptoChange(crypto.code, e.target.value)}
                      className={`w-full bg-transparent border-b ${darkMode ? 'border-gray-600' : 'border-gray-300'} focus:outline-none ml-1`}
                    />
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-amber-400">
                    ${formatNumber(crypto.price, crypto.price < 10 ? 4 : 2)}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'precious' && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metals.map(metal => (
              <motion.div
                key={metal.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{metal.symbol}</span>
                    <div>
                      <div className="font-bold">{metal.code}</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {language === 'ar' ? metal.nameAr : metal.name}
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
                    metal.change >= 0 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {metal.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {formatNumber(Math.abs(metal.change))}%
                  </div>
                </div>

                {editMode ? (
                  <div className="flex items-center text-2xl font-bold text-amber-400">
                    $
                    <input
                      type="number"
                      value={metal.price}
                      onChange={(e) => handleMetalChange(metal.code, e.target.value)}
                      className={`w-full bg-transparent border-b ${darkMode ? 'border-gray-600' : 'border-gray-300'} focus:outline-none ml-1`}
                    />
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-amber-400">
                    ${formatNumber(metal.price, 2)}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* Floating Calculator Button */}
      <motion.button
        onClick={() => setShowCalculator(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg flex items-center justify-center z-40 hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={t.currencyCalculator}
      >
        <Calculator className="w-6 h-6 text-white" />
      </motion.button>

      {/* Calculator Modal */}
      <AnimatePresence>
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCalculator(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`w-full max-w-md rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-amber-400" />
                  {t.currencyCalculator}
                </h2>
                <button
                  onClick={() => setShowCalculator(false)}
                  className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Rate Toggle */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setUseBuyRate(true)}
                  className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                    useBuyRate 
                      ? 'bg-green-500 text-white' 
                      : darkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}
                >
                  {t.buy}
                </button>
                <button
                  onClick={() => setUseBuyRate(false)}
                  className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                    !useBuyRate 
                      ? 'bg-red-500 text-white' 
                      : darkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}
                >
                  {t.sell}
                </button>
              </div>

              {/* From Currency */}
              <div className="mb-4">
                <label className={`block text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.from}</label>
                <div className="flex gap-2">
                  <select
                    value={calcFrom}
                    onChange={(e) => setCalcFrom(e.target.value)}
                    className={`flex-shrink-0 w-28 px-3 py-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                  >
                    {currencies.map(c => (
                      <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                    ))}
                  </select>
                  <Input
                    type="number"
                    value={calcAmount}
                    onChange={(e) => setCalcAmount(e.target.value)}
                    onFocus={() => {
                      if (calcAmount === '100') setCalcAmount('');
                    }}
                    onBlur={() => {
                      if (!calcAmount || calcAmount === '0') setCalcAmount('100');
                    }}
                    placeholder={t.amount}
                    className={`flex-1 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-200'}`}
                  />
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center my-4">
                <button
                  onClick={swapCurrencies}
                  className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                >
                  <ArrowUpDown className="w-5 h-5" />
                </button>
              </div>

              {/* To Currency */}
              <div className="mb-6">
                <label className={`block text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.to}</label>
                <div className="flex gap-2">
                  <select
                    value={calcTo}
                    onChange={(e) => setCalcTo(e.target.value)}
                    className={`flex-shrink-0 w-28 px-3 py-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                  >
                    {currencies.map(c => (
                      <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                    ))}
                  </select>
                  <div className={`flex-1 px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} font-mono text-xl`}>
                    {calculateExchange()}
                  </div>
                </div>
              </div>

              {/* Old/New Syrian Lira Display */}
              {(calcFrom === 'SYP' || calcTo === 'SYP') && (
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} mb-4`}>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{t.oldRate}</div>
                      <div className="font-mono text-lg">
                        {calcTo === 'SYP' 
                          ? formatNumber(parseFloat(calculateExchange().replace(/,/g, '')) * 100, 0)
                          : formatNumber(parseFloat(calcAmount) * 100, 0)
                        } ل.س
                      </div>
                    </div>
                    <div>
                      <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{t.newRate}</div>
                      <div className="font-mono text-lg">
                        {calcTo === 'SYP' 
                          ? calculateExchange()
                          : calcAmount
                        } ل.س
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <Button
                onClick={() => setShowCalculator(false)}
                className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white"
              >
                {t.convert}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} mt-12`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <CircleDollarSign className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold">{t.title}</span>
            </div>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              © 2024 Exchange Core. Powered by Next Revolution
            </div>
            <div className="flex gap-4">
              <Link to="/exchange/contact" className={`hover:text-amber-400 transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.contactUs}
              </Link>
              <Link to="/exchange/about" className={`hover:text-amber-400 transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.aboutUs}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
