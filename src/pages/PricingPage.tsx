import React, { useState, useEffect, useMemo } from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getText, landingPageTranslations as lt, pricingPageTranslations as pt } from "@/lib/translations/pages";
import { 
  Check, 
  X, 
  Zap, 
  Crown, 
  Building,
  ArrowRight,
  HelpCircle,
  Shield,
  Server,
  Clock,
  Database,
  Globe,
  Lock,
  Sparkles,
  ShoppingCart,
  TrendingUp,
  Heart,
  DollarSign,
  Target,
  Briefcase,
  User,
  Smartphone,
  Warehouse,
  Truck,
  Building2,
  Rocket
} from "lucide-react";
import { TrialSignupModal } from "@/components/landing/TrialSignupModal";

// Month names in different languages
const monthNames: Record<string, string[]> = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  ar: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
  tr: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
  ru: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
  uk: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
  pl: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
  ro: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
};

// Countdown timer hook
function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      const difference = endOfMonth.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}

function getEndOfMonthDate(language: string) {
  const now = new Date();
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const day = endOfMonth.getDate();
  const month = endOfMonth.getMonth();
  const year = endOfMonth.getFullYear();
  
  const months = monthNames[language] || monthNames.en;
  
  if (language === "ar") {
    return `${day} ${months[month]} ${year}`;
  }
  return `${months[month]} ${day}, ${year}`;
}

// Offer translations
const offerTranslations: Record<string, { limitedOffer: string; offerEnds: string; days: string; hours: string; minutes: string; seconds: string }> = {
  en: { limitedOffer: "🔥 Limited Time Offer", offerEnds: "Offer ends", days: "Days", hours: "Hours", minutes: "Min", seconds: "Sec" },
  ar: { limitedOffer: "🔥 عرض محدود", offerEnds: "ينتهي العرض في", days: "يوم", hours: "ساعة", minutes: "دقيقة", seconds: "ثانية" },
  tr: { limitedOffer: "🔥 Sınırlı Teklif", offerEnds: "Teklif bitiş tarihi", days: "Gün", hours: "Saat", minutes: "Dk", seconds: "Sn" },
  ru: { limitedOffer: "🔥 Ограниченное предложение", offerEnds: "Предложение заканчивается", days: "Дней", hours: "Часов", minutes: "Мин", seconds: "Сек" },
  uk: { limitedOffer: "🔥 Обмежена пропозиція", offerEnds: "Пропозиція закінчується", days: "Днів", hours: "Годин", minutes: "Хв", seconds: "Сек" },
  pl: { limitedOffer: "🔥 Oferta Ograniczona", offerEnds: "Oferta kończy się", days: "Dni", hours: "Godz", minutes: "Min", seconds: "Sek" },
  ro: { limitedOffer: "🔥 Ofertă Limitată", offerEnds: "Oferta se termină", days: "Zile", hours: "Ore", minutes: "Min", seconds: "Sec" },
};

// Currency configuration
const currencyConfig: Record<string, { symbol: string; code: string; rate: number; nameKey: string }> = {
  USD: { symbol: "$", code: "USD", rate: 1, nameKey: "currUSD" },
  SAR: { symbol: "ر.س", code: "SAR", rate: 3.75, nameKey: "currSAR" },
  AED: { symbol: "د.إ", code: "AED", rate: 3.67, nameKey: "currAED" },
  EUR: { symbol: "€", code: "EUR", rate: 0.92, nameKey: "currEUR" },
  GBP: { symbol: "£", code: "GBP", rate: 0.79, nameKey: "currGBP" },
  UAH: { symbol: "₴", code: "UAH", rate: 41, nameKey: "currUAH" },
  RUB: { symbol: "₽", code: "RUB", rate: 92, nameKey: "currRUB" },
  PLN: { symbol: "zł", code: "PLN", rate: 4, nameKey: "currPLN" },
  TRY: { symbol: "₺", code: "TRY", rate: 32, nameKey: "currTRY" },
  EGP: { symbol: "ج.م", code: "EGP", rate: 50, nameKey: "currEGP" },
  KWD: { symbol: "د.ك", code: "KWD", rate: 0.31, nameKey: "currKWD" },
  QAR: { symbol: "ر.ق", code: "QAR", rate: 3.64, nameKey: "currQAR" },
  BHD: { symbol: "د.ب", code: "BHD", rate: 0.38, nameKey: "currBHD" },
  OMR: { symbol: "ر.ع", code: "OMR", rate: 0.39, nameKey: "currOMR" },
};

// Base prices in USD (Original prices before 50% discount)
const basePricesUSD = {
  basic: 99,
  professional: 799,
  enterprise: 1199,
};

// Offer prices (50% OFF - Limited Time)
const offerPricesUSD = {
  basic: 49,
  professional: 399,
  enterprise: 599,
};

function PricingContent() {
  const { language, dir } = useLanguage();
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  
  // Countdown timer for limited offer
  const countdown = useCountdown();
  const offerEndDate = useMemo(() => getEndOfMonthDate(language), [language]);
  const offerText = offerTranslations[language] || offerTranslations.en;

  // Currency based on selected currency (default USD)
  const currencyInfo = currencyConfig[selectedCurrency] || currencyConfig.USD;
  const currency = currencyInfo.symbol;
  const currencyCode = currencyInfo.code;

  // Convert USD price to local currency (for offer prices)
  const convertPrice = (usdPrice: number) => {
    const localPrice = Math.round(usdPrice * currencyInfo.rate);
    return billingPeriod === "yearly" ? Math.round(localPrice * 10 * 0.8) : localPrice; // 20% discount for yearly
  };

  // Convert original price (before discount)
  const convertOriginalPrice = (usdPrice: number) => {
    const localPrice = Math.round(usdPrice * currencyInfo.rate);
    return billingPeriod === "yearly" ? Math.round(localPrice * 10) : localPrice;
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  // Feature categories for organized display
  const featureCategories = {
    business: getText(lt.catBusiness, language),
    digital: getText(lt.catDigital, language),
    ai: getText(lt.catAI, language),
    mobile: getText(lt.catMobile, language),
    returns: getText(lt.catReturns, language),
    target: getText(lt.catTarget, language)
  };

  const plans = [
    {
      name: getText(pt.basicPlan, language),
      priceUSD: offerPricesUSD.basic,
      originalPriceUSD: basePricesUSD.basic,
      desc: getText(pt.basicDesc, language),
      target: getText(lt.targetSingle, language),
      targetIcon: User,
      // Business Management Features
      businessFeatures: [
        getText(lt.manageOneCompany, language),
        getText(lt.threeUsers, language),
        getText(lt.twoPOS, language),
        getText(lt.basicHR, language)
      ],
      // Digital Presence Features
      digitalFeatures: [
        getText(lt.sharedHosting, language),
        getText(lt.ecommerce100, language),
        getText(lt.freeSSL, language)
      ],
      // AI Features
      aiFeatures: [],
      // Mobile Apps Features
      mobileFeatures: [],
      // Expected Returns
      returns: {
        salesIncrease: "$2,000 - $4,000",
        customerRetention: "$1,500 - $4,000",
        totalReturn: "$8,000 - $15,000",
        netProfit: "+$6,800 - $13,800",
        roi: "573% - 1,162%"
      },
      cta: getText(lt.ctaDemo, language),
      popular: false,
      recommended: false,
      icon: Rocket,
      gradient: "from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800/95",
      iconBg: "from-blue-500 to-blue-600"
    },
    {
      name: getText(pt.professionalPlan, language),
      priceUSD: offerPricesUSD.professional,
      originalPriceUSD: basePricesUSD.professional,
      desc: getText(pt.professionalDesc, language),
      target: getText(lt.targetAmbitious, language),
      targetIcon: Briefcase,
      // Business Management Features
      businessFeatures: [
        getText(lt.manageTwoCompanies, language),
        getText(lt.tenUsers, language),
        getText(lt.unlimitedPOS, language),
        getText(lt.advancedHR, language),
        getText(lt.agentsManagement, language)
      ],
      // Digital Presence Features
      digitalFeatures: [
        getText(lt.dedicatedHosting, language),
        getText(lt.freeWebsite1Year, language),
        getText(lt.ecommerceUnlimited, language),
        getText(lt.sslCustomDomain, language)
      ],
      // AI Features
      aiFeatures: [
        getText(lt.weeklyReports, language)
      ],
      // Mobile Apps Features
      mobileFeatures: [],
      // Expected Returns
      returns: {
        salesIncrease: "$12,000 - $20,000",
        customerRetention: "$8,000 - $15,000",
        totalReturn: "$45,000 - $75,000",
        netProfit: "+$39,000 - $69,000",
        roi: "652% - 1,152%",
        competitiveEdge: "25-35%"
      },
      cta: getText(lt.ctaDemo, language),
      popular: true,
      recommended: true,
      icon: Crown,
      gradient: "from-texafab-emerald via-teal-600 to-texafab-emerald/95",
      iconBg: "from-white to-white/90"
    },
    {
      name: getText(pt.enterprisePlan, language),
      priceUSD: offerPricesUSD.enterprise,
      originalPriceUSD: basePricesUSD.enterprise,
      desc: getText(pt.enterpriseDesc, language),
      target: getText(lt.targetLarge, language),
      targetIcon: Building2,
      // Business Management Features
      businessFeatures: [
        getText(lt.manageUnlimitedCompanies, language),
        getText(lt.unlimitedUsersLanding, language),
        getText(lt.unlimitedPOS, language),
        getText(lt.extendedHR, language),
        getText(lt.advancedAgents, language),
        getText(lt.dedicatedManager, language)
      ],
      // Digital Presence Features
      digitalFeatures: [
        getText(lt.premiumHosting, language),
        getText(lt.freeWebsiteForever, language),
        getText(lt.customDesign, language),
        getText(lt.advancedEcommerce, language),
        getText(lt.sla999, language)
      ],
      // AI Features
      aiFeatures: [
        getText(lt.aiAnalytics, language),
        getText(lt.aiDataEntry, language),
        getText(lt.salesPredictions, language),
        getText(lt.realtimeReports, language)
      ],
      // Mobile Apps Features
      mobileFeatures: [
        getText(lt.adminApp, language),
        getText(lt.warehouseApp, language),
        getText(lt.driverApp, language)
      ],
      // Expected Returns
      returns: {
        salesIncrease: "$25,000 - $50,000",
        customerRetention: "$15,000 - $35,000",
        totalReturn: "$120,000 - $250,000",
        netProfit: "+$108,000 - $238,000",
        roi: "901% - 1,985%",
        competitiveEdge: "40-50%"
      },
      cta: getText(pt.contactUs, language),
      popular: false,
      recommended: false,
      icon: Building,
      gradient: "from-slate-50 to-white dark:from-slate-800/50 dark:to-gray-800/95",
      iconBg: "from-slate-700 to-slate-800"
    }
  ];

  // Technical features / Trust badges
  const techFeatures = [
    {
      icon: Shield,
      title: getText(pt.highEncryption, language),
      desc: getText(pt.highEncryptionDesc, language)
    },
    {
      icon: Server,
      title: getText(pt.trustHetzner, language),
      desc: getText(pt.hetznerDesc, language)
    },
    {
      icon: Database,
      title: getText(pt.dataIsolation, language),
      desc: getText(pt.dataIsolationDesc, language)
    },
    {
      icon: Clock,
      title: getText(pt.trustUptime, language),
      desc: getText(pt.uptimeDesc, language)
    },
    {
      icon: Globe,
      title: getText(pt.crossPlatform, language),
      desc: getText(pt.crossPlatformDesc, language)
    },
    {
      icon: Lock,
      title: getText(pt.autoBackup, language),
      desc: getText(pt.autoBackupDesc, language)
    }
  ];

  const faqs = [
    {
      question: getText(pt.faq1Question, language),
      answer: getText(pt.faq1Answer, language)
    },
    {
      question: getText(pt.faq2Question, language),
      answer: getText(pt.faq2Answer, language)
    },
    {
      question: getText(pt.faq3Question, language),
      answer: getText(pt.faq3Answer, language)
    },
    {
      question: getText(pt.faq4Question, language),
      answer: getText(pt.faq4Answer, language)
    },
    {
      question: getText(pt.faq5Question, language),
      answer: getText(pt.faq5Answer, language)
    },
    {
      question: getText(pt.faq6Question, language),
      answer: getText(pt.faq6Answer, language)
    }
  ];

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D948808_1px,transparent_1px),linear-gradient(to_bottom,#0D948808_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 dark:bg-texafab-emerald/20 text-texafab-emerald text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              {getText(pt.badge, language)}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-texafab-slate dark:text-white mb-6 leading-tight">
              {getText(pt.heroTitle1, language)} <span className="text-texafab-emerald">{getText(pt.heroTitle2, language)}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {getText(pt.heroDescription, language)}
            </p>
            
            {/* Billing Period Toggle */}
            <div className="inline-flex items-center gap-3 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-8">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-white dark:bg-gray-700 text-texafab-slate dark:text-white shadow-md"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                }`}
              >
                {getText(pt.monthly, language)}
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all relative ${
                  billingPeriod === "yearly"
                    ? "bg-white dark:bg-gray-700 text-texafab-slate dark:text-white shadow-md"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                }`}
              >
                {getText(pt.yearly, language)}
                <span className="absolute -top-2 -end-2 px-2 py-0.5 bg-texafab-gold text-texafab-slate text-[10px] font-bold rounded-full">
                  -17%
                </span>
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold">
                <Check className="w-4 h-4" />
                {getText(pt.freeTrialDays, language)}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold">
                <Shield className="w-4 h-4" />
                {getText(pt.moneyBackGuarantee, language)}
              </div>
            </div>
            
            {/* Currency Selector */}
            <div className="mt-6 flex justify-center">
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {getText(pt.currency, language)}
                </span>
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-texafab-emerald cursor-pointer"
                >
                  {Object.entries(currencyConfig).map(([code, info]) => (
                    <option key={code} value={code}>
                      {info.symbol} {getText(pt[info.nameKey as keyof typeof pt], language)} ({code})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce No Fee Banner */}
      <section className="py-8 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <span className="text-lg font-bold text-emerald-800 dark:text-emerald-300">
                🎁 {getText(pt.ecommerceBanner, language)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Time Offer Banner */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 py-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                {language === "ar" ? "خصم 50%" : "50% OFF"}
              </span>
              <span className="text-white font-bold text-lg md:text-xl">
                {offerText.limitedOffer}
              </span>
            </div>
            
            {/* Countdown Timer */}
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-white animate-pulse" />
              <div className="flex items-center gap-2">
                <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-2 text-center min-w-[55px]">
                  <span className="text-2xl font-bold text-white">{countdown.days}</span>
                  <p className="text-xs text-white/80">{offerText.days}</p>
                </div>
                <span className="text-white text-2xl font-bold">:</span>
                <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-2 text-center min-w-[55px]">
                  <span className="text-2xl font-bold text-white">{countdown.hours}</span>
                  <p className="text-xs text-white/80">{offerText.hours}</p>
                </div>
                <span className="text-white text-2xl font-bold">:</span>
                <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-2 text-center min-w-[55px]">
                  <span className="text-2xl font-bold text-white">{countdown.minutes}</span>
                  <p className="text-xs text-white/80">{offerText.minutes}</p>
                </div>
                <span className="text-white text-2xl font-bold">:</span>
                <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-2 text-center min-w-[55px]">
                  <span className="text-2xl font-bold text-white">{countdown.seconds}</span>
                  <p className="text-xs text-white/80">{offerText.seconds}</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-white/90 text-sm mt-3">
            {offerText.offerEnds}: <span className="font-bold">{offerEndDate}</span>
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              const TargetIcon = plan.targetIcon;
              const businessFeatures = plan.businessFeatures;
              const digitalFeatures = plan.digitalFeatures;
              const aiFeatures = plan.aiFeatures;
              const mobileFeatures = plan.mobileFeatures;
              const returns = plan.returns;
              const localPrice = convertPrice(plan.priceUSD);
              const originalLocalPrice = convertOriginalPrice(plan.originalPriceUSD);
              const displayPrice = formatPrice(localPrice);
              const originalDisplayPrice = formatPrice(originalLocalPrice);
              const categories = featureCategories;
              
              return (
                <Card 
                  key={i} 
                  className={`relative overflow-hidden flex flex-col transition-all duration-300 ${
                    plan.popular 
                      ? "bg-gradient-to-br from-texafab-emerald via-teal-600 to-texafab-emerald/95 text-white shadow-2xl shadow-texafab-emerald/30 lg:scale-105 z-10 border-0" 
                      : `bg-gradient-to-br ${plan.gradient} border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-texafab-emerald/30`
                  }`}
                >
                  {/* Discount Badge */}
                  <div className={`absolute top-2 ${dir === "rtl" ? "left-2" : "right-2"} bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-20`}>
                    {language === "ar" ? "خصم 50%" : "50% OFF"}
                  </div>
                  
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 left-0 bg-texafab-gold text-texafab-slate px-4 py-1 text-xs font-bold uppercase tracking-wider text-center">
                      {getText(pt.bestValue, language)}
                    </div>
                  )}
                  
                  <div className={`p-5 pb-0 ${plan.popular ? "pt-9" : ""}`}>
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${plan.popular ? "from-white/20 to-white/10" : plan.iconBg} flex items-center justify-center mb-3 shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <h3 className={`text-lg font-bold mb-1 ${plan.popular ? "text-white" : "text-texafab-slate dark:text-white"}`}>
                      {plan.name}
                    </h3>
                    
                    {/* Original Price - Strikethrough */}
                    <div className={`text-sm ${plan.popular ? "text-white/50" : "text-gray-400"} line-through mb-1`}>
                      {currency}{originalDisplayPrice}
                    </div>
                    
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className={`text-sm ${plan.popular ? "text-white/70" : "text-gray-500 dark:text-gray-400"}`}>
                        {currency}
                      </span>
                      <span className={`text-2xl font-black ${plan.popular ? "text-white" : "text-texafab-emerald dark:text-texafab-emerald"}`}>
                        {displayPrice}
                      </span>
                      <span className={`text-xs ${plan.popular ? "text-white/70" : "text-gray-500 dark:text-gray-400"}`}>
                        {billingPeriod === "yearly" ? getText(lt.perYear, language) : getText(lt.perMonth, language)}
                      </span>
                    </div>
                    
                    {/* Monthly equivalent for yearly */}
                    {billingPeriod === "yearly" && (
                      <p className={`text-xs mb-3 ${plan.popular ? "text-white/60" : "text-gray-400 dark:text-gray-500"}`}>
                        ≈ {currency}{formatPrice(Math.round(localPrice / 12))}{getText(lt.perMonth, language)}
                      </p>
                    )}
                    
                    <p className={`text-xs mb-3 ${plan.popular ? "text-white/80" : "text-gray-600 dark:text-gray-300"}`}>
                      {plan.desc}
                    </p>

                    {/* Target Audience Badge */}
                    <div className={`mb-4 p-2 rounded-lg flex items-center gap-2 ${
                      plan.popular 
                        ? "bg-white/10 border border-white/20" 
                        : "bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600"
                    }`}>
                      <TargetIcon className={`w-4 h-4 ${plan.popular ? "text-yellow-300" : "text-texafab-emerald"}`} />
                      <span className={`text-xs font-medium ${plan.popular ? "text-white" : "text-gray-700 dark:text-gray-200"}`}>
                        {plan.target}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex-1 flex flex-col">
                    {/* Business Management Section */}
                    <div className="mb-3">
                      <h4 className={`text-xs font-bold mb-2 ${plan.popular ? "text-white/90" : "text-texafab-slate dark:text-gray-200"}`}>
                        {categories.business}
                      </h4>
                      <ul className="space-y-1.5">
                        {businessFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              plan.popular ? "bg-white/20" : "bg-texafab-emerald/10 dark:bg-texafab-teal/20"
                            }`}>
                              <Check className={`w-2 h-2 ${plan.popular ? "text-white" : "text-texafab-emerald dark:text-texafab-teal"}`} />
                            </div>
                            <span className={`text-[11px] ${plan.popular ? "text-white/90" : "text-gray-700 dark:text-gray-200"}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Digital Presence Section */}
                    <div className="mb-3">
                      <h4 className={`text-xs font-bold mb-2 ${plan.popular ? "text-white/90" : "text-texafab-slate dark:text-gray-200"}`}>
                        {categories.digital}
                      </h4>
                      <ul className="space-y-1.5">
                        {digitalFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              plan.popular ? "bg-white/20" : "bg-blue-500/10 dark:bg-blue-400/20"
                            }`}>
                              <Globe className={`w-2 h-2 ${plan.popular ? "text-white" : "text-blue-500 dark:text-blue-400"}`} />
                            </div>
                            <span className={`text-[11px] ${plan.popular ? "text-white/90" : "text-gray-700 dark:text-gray-200"} ${
                              feature.includes("Hetzner") || feature.includes("استضافة") ? "font-medium" : ""
                            }`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* AI Section (if available) */}
                    {aiFeatures.length > 0 && (
                      <div className="mb-3">
                        <h4 className={`text-xs font-bold mb-2 ${plan.popular ? "text-white/90" : "text-texafab-slate dark:text-gray-200"}`}>
                          {categories.ai}
                        </h4>
                        <ul className="space-y-1.5">
                          {aiFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                plan.popular ? "bg-white/20" : "bg-purple-500/10 dark:bg-purple-400/20"
                              }`}>
                                <Zap className={`w-2 h-2 ${plan.popular ? "text-white" : "text-purple-500 dark:text-purple-400"}`} />
                              </div>
                              <span className={`text-[11px] ${plan.popular ? "text-white/90" : "text-gray-700 dark:text-gray-200"}`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Mobile Apps Section (if available) */}
                    {mobileFeatures.length > 0 && (
                      <div className="mb-3">
                        <h4 className={`text-xs font-bold mb-2 ${plan.popular ? "text-white/90" : "text-texafab-slate dark:text-gray-200"}`}>
                          {categories.mobile}
                        </h4>
                        <ul className="space-y-1.5">
                          {mobileFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                plan.popular ? "bg-white/20" : "bg-orange-500/10 dark:bg-orange-400/20"
                              }`}>
                                <Smartphone className={`w-2 h-2 ${plan.popular ? "text-white" : "text-orange-500 dark:text-orange-400"}`} />
                              </div>
                              <span className={`text-[11px] ${plan.popular ? "text-white/90" : "text-gray-700 dark:text-gray-200"}`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Expected Returns Section */}
                    <div className={`mb-4 p-4 rounded-xl ${
                      plan.popular 
                        ? "bg-white/15 border-2 border-white/30" 
                        : "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800/50"
                    }`}>
                      <h4 className={`text-sm font-bold mb-3 flex items-center gap-2 ${plan.popular ? "text-white" : "text-green-700 dark:text-green-400"}`}>
                        <DollarSign className="w-4 h-4" />
                        {categories.returns}
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className={`text-xs ${plan.popular ? "text-white/90" : "text-gray-600 dark:text-gray-400"}`}>
                            <TrendingUp className="w-3.5 h-3.5 inline me-1" />
                            {getText(lt.metricSales, language)}
                          </span>
                          <span className={`text-sm font-bold ${plan.popular ? "text-yellow-300" : "text-green-600 dark:text-green-400"}`}>
                            {returns.salesIncrease}{getText(lt.perYear, language)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`text-xs ${plan.popular ? "text-white/90" : "text-gray-600 dark:text-gray-400"}`}>
                            <Heart className="w-3.5 h-3.5 inline me-1" />
                            {getText(lt.metricRetention, language)}
                          </span>
                          <span className={`text-sm font-bold ${plan.popular ? "text-yellow-300" : "text-green-600 dark:text-green-400"}`}>
                            {returns.customerRetention}{getText(lt.perYear, language)}
                          </span>
                        </div>
                        <div className={`pt-2 mt-2 border-t ${plan.popular ? "border-white/30" : "border-green-200 dark:border-green-700"}`}>
                          <div className="flex justify-between items-center">
                            <span className={`text-xs font-semibold ${plan.popular ? "text-white" : "text-gray-700 dark:text-gray-300"}`}>
                              {getText(lt.metricProfit, language)}
                            </span>
                            <span className={`text-base font-black ${plan.popular ? "text-white" : "text-green-600 dark:text-green-400"}`}>
                              {returns.netProfit}
                            </span>
                          </div>
                          <div className="flex justify-between items-center mt-1.5">
                            <span className={`text-xs ${plan.popular ? "text-white/90" : "text-gray-500 dark:text-gray-400"}`}>
                              ROI
                            </span>
                            <span className={`text-sm font-bold ${plan.popular ? "text-yellow-300" : "text-emerald-600 dark:text-emerald-400"}`}>
                              {returns.roi}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => {
                        if (i === 2) {
                          window.location.href = "/contact";
                        } else {
                          setIsTrialModalOpen(true);
                        }
                      }}
                      className={`w-full h-10 text-xs font-semibold group rounded-xl mt-auto ${
                        plan.popular 
                          ? "bg-white text-texafab-emerald hover:bg-white/90 shadow-lg" 
                          : i === 0 
                            ? "bg-blue-500 hover:bg-blue-600 text-white"
                            : "bg-texafab-emerald hover:bg-texafab-emerald/90 text-white"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className={`w-3 h-3 transition-transform group-hover:translate-x-1 ${dir === "rtl" ? "rotate-180 me-1" : "ms-1"}`} />
                    </Button>
                  </div>
                  
                  {/* Decorative Elements for Popular Card */}
                  {plan.popular && (
                    <>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-texafab-gold/10 rounded-full blur-3xl" />
                    </>
                  )}
                </Card>
              );
            })}
          </div>
          
          {/* Value Highlight - Decoy Effect Explanation */}
          <div className="max-w-3xl mx-auto mt-10 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                <Crown className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-texafab-slate dark:text-white mb-1">
                  {getText(pt.whyProTitle, language)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {getText(pt.whyProDesc, language).replace("{amount}", `${currency}${formatPrice(Math.round(27 * currencyInfo.rate))}`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features / Trust Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-4">
              <Server className="w-4 h-4" />
              {getText(pt.advancedInfrastructure, language)}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {getText(pt.securityTitle, language)}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getText(pt.securityDesc, language)}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {techFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex items-start gap-4 p-5 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-texafab-emerald/30 dark:hover:border-texafab-teal/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-texafab-emerald to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-texafab-slate dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <img src="https://www.hetzner.com/favicon.ico" alt="Hetzner" className="w-5 h-5" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Hetzner Cloud</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Lock className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Clock className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {getText(pt.comparisonTitle, language)}
            </h2>
          </div>
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-texafab-slate text-white">
                <tr>
                  <th className="p-4 text-start">{getText(pt.featureHeader, language)}</th>
                  <th className="p-4 text-center">{getText(pt.basicPlan, language)}</th>
                  <th className="p-4 text-center bg-texafab-emerald">{getText(pt.professionalPlan, language)}</th>
                  <th className="p-4 text-center">{getText(pt.enterprisePlan, language)}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: getText(pt.rowUsers, language), basic: "3", pro: "10", enterprise: "∞" },
                  { feature: getText(pt.rowPOS, language), basic: "2", pro: "∞", enterprise: "∞" },
                  { feature: language === "ar" ? "الشركات" : "Companies", basic: "1", pro: "2", enterprise: "∞" }, // Rough approximation for "Companies" label if not in pt
                  { feature: getText(pt.rowEcommerce, language), basic: "100", pro: "∞", enterprise: "Advanced" },
                  { feature: getText(pt.rowAccounting, language), basic: getText(lt.basicHR, language), pro: getText(lt.advancedHR, language), enterprise: getText(lt.extendedHR, language) },
                  { feature: getText(pt.rowSupport, language), basic: getText(pt.liveSupport, language), pro: getText(pt.prioritySupport, language), enterprise: getText(lt.dedicatedManager, language) },
                  { feature: getText(pt.rowHosting, language), basic: getText(lt.sharedHosting, language), pro: getText(lt.dedicatedHosting, language), enterprise: getText(lt.premiumHosting, language) },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-700">
                    <td className="p-4 font-medium text-gray-700 dark:text-gray-200">{row.feature}</td>
                    <td className="p-4 text-center text-gray-600 dark:text-gray-400">{row.basic}</td>
                    <td className="p-4 text-center bg-texafab-emerald/5 dark:bg-texafab-emerald/10 font-semibold text-texafab-emerald">{row.pro}</td>
                    <td className="p-4 text-center text-gray-600 dark:text-gray-400">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {getText(pt.faqTitle, language)}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-5 bg-gray-50 dark:bg-gray-800 border-0">
                <h3 className="font-bold text-texafab-slate dark:text-white flex items-start gap-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-texafab-emerald flex-shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 ps-7">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-texafab-emerald via-teal-600 to-texafab-emerald text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {getText(pt.readyToStart, language)}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {getText(pt.readyToStartDesc, language)}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              onClick={() => setIsTrialModalOpen(true)}
              className="h-12 px-8 bg-white text-texafab-emerald hover:bg-white/90 font-semibold rounded-xl shadow-lg"
            >
              {getText(pt.startFreeTrial, language)}
              <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = "/contact"}
              className="h-12 px-8 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-xl"
            >
              {getText(pt.contactUs, language)}
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Trial Signup Modal */}
      <TrialSignupModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </div>
  );
}

export default function PricingPage() {
  return <PricingContent />;
}
