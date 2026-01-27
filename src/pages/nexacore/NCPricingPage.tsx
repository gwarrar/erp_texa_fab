import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { NCHeader } from "@/components/nexacore/NCHeader";
import { NCFooter } from "@/components/nexacore/NCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  ArrowRight, ArrowLeft, Check, DollarSign,
  Users, Building2, Clock, Target,
  TrendingUp, Shield, Headphones, Zap,
  Star, CheckCircle2, Award, Globe,
  Sparkles, Crown, Rocket, User,
  Briefcase, Database, Server, Lock,
  Smartphone, Warehouse, Truck
} from "lucide-react";

// Month names in different languages
const monthNames: Record<string, string[]> = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  ar: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
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

// Currency configuration (rates relative to USD)
const currencyConfig: Record<string, { symbol: string; code: string; rate: number; name: { en: string; ar: string } }> = {
  USD: { symbol: "$", code: "USD", rate: 1, name: { en: "US Dollar", ar: "دولار أمريكي" } },
  EUR: { symbol: "€", code: "EUR", rate: 0.92, name: { en: "Euro", ar: "يورو" } },
  SAR: { symbol: "ر.س", code: "SAR", rate: 3.75, name: { en: "Saudi Riyal", ar: "ريال سعودي" } },
  AED: { symbol: "د.إ", code: "AED", rate: 3.67, name: { en: "UAE Dirham", ar: "درهم إماراتي" } },
  GBP: { symbol: "£", code: "GBP", rate: 0.79, name: { en: "British Pound", ar: "جنيه إسترليني" } },
};

// Base prices in USD (Original prices before 50% discount)
const basePricesUSD = {
  growth: 50,
  professional: 199,
  enterprise: 499,
};

// Offer prices (50% OFF - Limited Time)
const offerPricesUSD = {
  growth: 25,
  professional: 99,
  enterprise: 249,
};

const translations = {
  en: {
    // Hero
    badge: "Transparent Pricing",
    heroTitle: "Plans That",
    heroTitleHighlight: "Pay for Themselves",
    heroSubtitle: "Through automation, save 3-4 employee costs and prevent operational losses — recover your investment in months.",
    
    // Offer
    limitedOffer: "🔥 Limited Time Offer",
    offerEnds: "Offer ends",
    days: "Days",
    hours: "Hours",
    minutes: "Min",
    seconds: "Sec",
    
    // Toggle
    monthly: "Monthly",
    annually: "Annually",
    yearlyDiscount: "-17%",
    currency: "Currency:",
    
    // Badges
    freeTrialBadge: "14-Day Free Trial",
    moneyBackBadge: "30-Day Money Back",
    discount50: "50% OFF",
    bestValue: "Best Value",
    
    // Plans
    growthPlan: "Growth",
    growthDesc: "For growing businesses ready to scale",
    targetGrowth: "Small Businesses & Startups",
    
    professionalPlan: "Professional",
    professionalDesc: "For established businesses seeking efficiency",
    mostPopular: "Most Popular",
    targetProfessional: "Growing Enterprises",
    
    enterprisePlan: "Enterprise",
    enterpriseDesc: "For large organizations with complex needs",
    targetEnterprise: "Large Organizations",
    
    perMonth: "/month",
    perYear: "/year",
    getStarted: "Get Started",
    contactSales: "Contact Sales",
    
    // Feature Categories
    catBusiness: "Business Management",
    catDigital: "Digital Infrastructure",
    catAI: "AI & Analytics",
    catMobile: "Mobile Apps",
    catSupport: "Support & Training",
    
    // Growth Features - Business
    users10: "Up to 10 Users",
    coreModules: "Core Modules (Sales, Purchases, Inventory)",
    branches3: "Up to 3 Branches",
    basicAccounting: "Basic Accounting",
    
    // Growth Features - Digital
    storage25: "25GB Cloud Storage",
    sharedHosting: "Shared Hosting",
    freeSSL: "Free SSL Certificate",
    
    // Growth Features - Support
    emailSupport: "Email & Chat Support",
    basicReports: "Standard Reports",
    docLibrary: "Documentation Library",
    
    // Professional Features - Business
    users50: "Up to 50 Users",
    allModules: "All Modules + Advanced Features",
    branches10: "Up to 10 Branches",
    advancedAccounting: "Advanced Accounting",
    multiCurrency: "Multi-Currency Support",
    
    // Professional Features - Digital
    storage100: "100GB Cloud Storage",
    dedicatedHosting: "Dedicated Hosting",
    apiAccess: "Full API Access",
    customDomain: "Custom Domain",
    
    // Professional Features - AI
    weeklyReports: "Weekly AI Reports",
    advancedReports: "Advanced Analytics Dashboard",
    
    // Professional Features - Support
    prioritySupport: "Priority Phone Support",
    training: "Team Training (5 hours)",
    dedicatedOnboarding: "Dedicated Onboarding",
    
    // Enterprise Features - Business
    usersUnlimited: "Unlimited Users",
    allModulesAI: "All Modules + NEXA AI",
    branchesUnlimited: "Unlimited Branches",
    multiCompany: "Multi-Company Management",
    customWorkflows: "Custom Workflows",
    
    // Enterprise Features - Digital
    storageUnlimited: "Unlimited Storage",
    premiumHosting: "Premium Hosting + CDN",
    onPremise: "On-Premise Option",
    slaGuarantee: "99.9% SLA Guarantee",
    customIntegrations: "Custom Integrations",
    
    // Enterprise Features - AI
    aiAnalytics: "AI-Powered Analytics",
    salesPredictions: "Sales Predictions",
    realtimeReports: "Real-time Reports",
    customReports: "Custom Reports + BI Tools",
    
    // Enterprise Features - Mobile
    adminApp: "Admin Mobile App",
    warehouseApp: "Warehouse App",
    driverApp: "Driver Tracking App",
    
    // Enterprise Features - Support
    support24: "24/7 Dedicated Support",
    dedicatedManager: "Dedicated Account Manager",
    unlimitedTraining: "Unlimited Training",
    
    // ROI Section
    roiTitle: "The System That Pays for Itself",
    roiSubtitle: "Real savings from real customers",
    
    stat1Value: "3-4",
    stat1Label: "Employee Salaries Saved",
    stat2Value: "90%",
    stat2Label: "Process Time Reduction",
    stat3Value: "99.9%",
    stat3Label: "Inventory Accuracy",
    stat4Value: "6",
    stat4Label: "Months to ROI",
    
    // Tech Features
    techTitle: "Enterprise-Grade Infrastructure",
    techSubtitle: "Built with security and reliability in mind",
    
    techEncryption: "256-bit Encryption",
    techEncryptionDesc: "Bank-level security for all your data",
    techHetzner: "German Data Centers",
    techHetznerDesc: "GDPR-compliant hosting in Europe",
    techBackup: "Daily Backups",
    techBackupDesc: "Automatic backups with 30-day retention",
    techUptime: "99.9% Uptime",
    techUptimeDesc: "Guaranteed availability with SLA",
    
    // FAQ
    faqTitle: "Pricing FAQ",
    faq1Q: "What's included in the free trial?",
    faq1A: "Full access to all Professional plan features for 14 days. No credit card required.",
    faq2Q: "Can I upgrade or downgrade anytime?",
    faq2A: "Yes, you can change your plan at any time. We'll prorate the difference.",
    faq3Q: "Is there a setup fee?",
    faq3A: "No setup fees. Implementation support is included with all plans.",
    faq4Q: "What payment methods do you accept?",
    faq4A: "We accept all major credit cards, bank transfers, SEPA, and PayPal.",
    faq5Q: "How long does the 50% discount last?",
    faq5A: "The discount is available until the end of this month. Lock in your price now!",
    faq6Q: "Can I get a custom quote for my needs?",
    faq6A: "Absolutely! Contact our sales team for a personalized quote based on your requirements.",
    
    // CTA
    ctaTitle: "Ready to Transform Your Business?",
    ctaSubtitle: "Join thousands of businesses already using NEXA Core",
    ctaButton: "Start Free Trial",
    ctaContact: "Talk to Sales",
  },
  ar: {
    // Hero
    badge: "أسعار شفافة",
    heroTitle: "خطط تدفع",
    heroTitleHighlight: "ثمنها بنفسها",
    heroSubtitle: "من خلال الأتمتة، وفر تكاليف 3-4 موظفين وتجنب خسائر العمليات — استرد استثمارك في أشهر.",
    
    // Offer
    limitedOffer: "🔥 عرض محدود الوقت",
    offerEnds: "ينتهي العرض في",
    days: "يوم",
    hours: "ساعة",
    minutes: "دقيقة",
    seconds: "ثانية",
    
    // Toggle
    monthly: "شهري",
    annually: "سنوي",
    yearlyDiscount: "-17%",
    currency: "العملة:",
    
    // Badges
    freeTrialBadge: "14 يوم تجربة مجانية",
    moneyBackBadge: "ضمان استرداد 30 يوم",
    discount50: "خصم 50%",
    bestValue: "أفضل قيمة",
    
    // Plans
    growthPlan: "النمو",
    growthDesc: "للأعمال النامية المستعدة للتوسع",
    targetGrowth: "الشركات الصغيرة والناشئة",
    
    professionalPlan: "المحترف",
    professionalDesc: "للأعمال الراسخة التي تسعى للكفاءة",
    mostPopular: "الأكثر شعبية",
    targetProfessional: "المؤسسات النامية",
    
    enterprisePlan: "المؤسسات",
    enterpriseDesc: "للمنظمات الكبيرة ذات الاحتياجات المعقدة",
    targetEnterprise: "المنظمات الكبرى",
    
    perMonth: "/شهر",
    perYear: "/سنة",
    getStarted: "ابدأ الآن",
    contactSales: "تواصل مع المبيعات",
    
    // Feature Categories
    catBusiness: "إدارة الأعمال",
    catDigital: "البنية التحتية الرقمية",
    catAI: "الذكاء الاصطناعي والتحليلات",
    catMobile: "تطبيقات الجوال",
    catSupport: "الدعم والتدريب",
    
    // Growth Features - Business
    users10: "حتى 10 مستخدمين",
    coreModules: "الوحدات الأساسية (المبيعات، المشتريات، المخزون)",
    branches3: "حتى 3 فروع",
    basicAccounting: "محاسبة أساسية",
    
    // Growth Features - Digital
    storage25: "25 جيجا تخزين سحابي",
    sharedHosting: "استضافة مشتركة",
    freeSSL: "شهادة SSL مجانية",
    
    // Growth Features - Support
    emailSupport: "دعم بالبريد والدردشة",
    basicReports: "تقارير قياسية",
    docLibrary: "مكتبة الوثائق",
    
    // Professional Features - Business
    users50: "حتى 50 مستخدم",
    allModules: "جميع الوحدات + مميزات متقدمة",
    branches10: "حتى 10 فروع",
    advancedAccounting: "محاسبة متقدمة",
    multiCurrency: "دعم متعدد العملات",
    
    // Professional Features - Digital
    storage100: "100 جيجا تخزين سحابي",
    dedicatedHosting: "استضافة مخصصة",
    apiAccess: "وصول كامل لـ API",
    customDomain: "نطاق مخصص",
    
    // Professional Features - AI
    weeklyReports: "تقارير AI أسبوعية",
    advancedReports: "لوحة تحليلات متقدمة",
    
    // Professional Features - Support
    prioritySupport: "دعم هاتفي أولوية",
    training: "تدريب الفريق (5 ساعات)",
    dedicatedOnboarding: "إعداد مخصص",
    
    // Enterprise Features - Business
    usersUnlimited: "مستخدمين غير محدود",
    allModulesAI: "جميع الوحدات + NEXA AI",
    branchesUnlimited: "فروع غير محدودة",
    multiCompany: "إدارة متعددة الشركات",
    customWorkflows: "سير عمل مخصص",
    
    // Enterprise Features - Digital
    storageUnlimited: "تخزين غير محدود",
    premiumHosting: "استضافة مميزة + CDN",
    onPremise: "خيار التثبيت المحلي",
    slaGuarantee: "ضمان SLA 99.9%",
    customIntegrations: "تكاملات مخصصة",
    
    // Enterprise Features - AI
    aiAnalytics: "تحليلات بالذكاء الاصطناعي",
    salesPredictions: "توقعات المبيعات",
    realtimeReports: "تقارير فورية",
    customReports: "تقارير مخصصة + أدوات BI",
    
    // Enterprise Features - Mobile
    adminApp: "تطبيق الإدارة",
    warehouseApp: "تطبيق المستودع",
    driverApp: "تطبيق تتبع السائقين",
    
    // Enterprise Features - Support
    support24: "دعم مخصص 24/7",
    dedicatedManager: "مدير حساب مخصص",
    unlimitedTraining: "تدريب غير محدود",
    
    // ROI Section
    roiTitle: "النظام الذي يدفع ثمنه بنفسه",
    roiSubtitle: "توفير حقيقي من عملاء حقيقيين",
    
    stat1Value: "3-4",
    stat1Label: "رواتب موظفين يمكن توفيرها",
    stat2Value: "90%",
    stat2Label: "تقليل وقت العمليات",
    stat3Value: "99.9%",
    stat3Label: "دقة المخزون",
    stat4Value: "6",
    stat4Label: "أشهر لاسترداد الاستثمار",
    
    // Tech Features
    techTitle: "بنية تحتية بمستوى المؤسسات",
    techSubtitle: "مبنية بعقلية الأمان والموثوقية",
    
    techEncryption: "تشفير 256-bit",
    techEncryptionDesc: "أمان بمستوى البنوك لجميع بياناتك",
    techHetzner: "مراكز بيانات ألمانية",
    techHetznerDesc: "استضافة متوافقة مع GDPR في أوروبا",
    techBackup: "نسخ احتياطي يومي",
    techBackupDesc: "نسخ تلقائي مع احتفاظ 30 يوم",
    techUptime: "99.9% وقت التشغيل",
    techUptimeDesc: "توفر مضمون مع SLA",
    
    // FAQ
    faqTitle: "أسئلة شائعة عن الأسعار",
    faq1Q: "ما المتضمن في التجربة المجانية؟",
    faq1A: "وصول كامل لجميع مميزات خطة المحترف لمدة 14 يوماً. بدون بطاقة ائتمان.",
    faq2Q: "هل يمكنني الترقية أو التخفيض في أي وقت؟",
    faq2A: "نعم، يمكنك تغيير خطتك في أي وقت. سنحسب الفرق بالتناسب.",
    faq3Q: "هل هناك رسوم إعداد؟",
    faq3A: "لا رسوم إعداد. دعم التنفيذ متضمن مع جميع الخطط.",
    faq4Q: "ما طرق الدفع التي تقبلونها؟",
    faq4A: "نقبل جميع بطاقات الائتمان الرئيسية والتحويلات البنكية و SEPA و PayPal.",
    faq5Q: "كم يستمر خصم 50%؟",
    faq5A: "الخصم متاح حتى نهاية هذا الشهر. احجز سعرك الآن!",
    faq6Q: "هل يمكنني الحصول على عرض سعر مخصص؟",
    faq6A: "بالتأكيد! تواصل مع فريق المبيعات للحصول على عرض سعر مخصص بناءً على احتياجاتك.",
    
    // CTA
    ctaTitle: "مستعد لتحويل أعمالك؟",
    ctaSubtitle: "انضم لآلاف الشركات التي تستخدم NEXA Core",
    ctaButton: "ابدأ التجربة المجانية",
    ctaContact: "تحدث مع المبيعات",
  },
};

export default function NCPricingPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  
  // Countdown timer for limited offer
  const countdown = useCountdown();
  const offerEndDate = useMemo(() => getEndOfMonthDate(language), [language]);
  
  // Currency conversion
  const currencyInfo = currencyConfig[selectedCurrency] || currencyConfig.USD;
  const currency = currencyInfo.symbol;
  
  const convertPrice = (usdPrice: number) => {
    const localPrice = Math.round(usdPrice * currencyInfo.rate);
    return billingPeriod === "yearly" ? Math.round(localPrice * 10 * 0.83) : localPrice; // 17% discount for yearly (12 months for price of 10)
  };
  
  const convertOriginalPrice = (usdPrice: number) => {
    const localPrice = Math.round(usdPrice * currencyInfo.rate);
    return billingPeriod === "yearly" ? Math.round(localPrice * 12) : localPrice;
  };
  
  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  const plans = [
    {
      name: t.growthPlan,
      desc: t.growthDesc,
      target: t.targetGrowth,
      targetIcon: User,
      priceUSD: offerPricesUSD.growth,
      originalPriceUSD: basePricesUSD.growth,
      popular: false,
      icon: Rocket,
      gradient: "from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-800/95",
      iconBg: "from-blue-500 to-blue-600",
      businessFeatures: [t.users10, t.coreModules, t.branches3, t.basicAccounting],
      digitalFeatures: [t.storage25, t.sharedHosting, t.freeSSL],
      aiFeatures: [],
      mobileFeatures: [],
      supportFeatures: [t.emailSupport, t.basicReports, t.docLibrary],
    },
    {
      name: t.professionalPlan,
      desc: t.professionalDesc,
      target: t.targetProfessional,
      targetIcon: Briefcase,
      priceUSD: offerPricesUSD.professional,
      originalPriceUSD: basePricesUSD.professional,
      popular: true,
      icon: Crown,
      gradient: "from-blue-600 via-indigo-600 to-blue-600",
      iconBg: "from-white to-white/90",
      businessFeatures: [t.users50, t.allModules, t.branches10, t.advancedAccounting, t.multiCurrency],
      digitalFeatures: [t.storage100, t.dedicatedHosting, t.apiAccess, t.customDomain],
      aiFeatures: [t.weeklyReports, t.advancedReports],
      mobileFeatures: [],
      supportFeatures: [t.prioritySupport, t.training, t.dedicatedOnboarding],
    },
    {
      name: t.enterprisePlan,
      desc: t.enterpriseDesc,
      target: t.targetEnterprise,
      targetIcon: Building2,
      priceUSD: offerPricesUSD.enterprise,
      originalPriceUSD: basePricesUSD.enterprise,
      popular: false,
      icon: Building2,
      gradient: "from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-800/95",
      iconBg: "from-slate-700 to-slate-800",
      businessFeatures: [t.usersUnlimited, t.allModulesAI, t.branchesUnlimited, t.multiCompany, t.customWorkflows],
      digitalFeatures: [t.storageUnlimited, t.premiumHosting, t.onPremise, t.slaGuarantee, t.customIntegrations],
      aiFeatures: [t.aiAnalytics, t.salesPredictions, t.realtimeReports, t.customReports],
      mobileFeatures: [t.adminApp, t.warehouseApp, t.driverApp],
      supportFeatures: [t.support24, t.dedicatedManager, t.unlimitedTraining],
    },
  ];

  const stats = [
    { value: t.stat1Value, label: t.stat1Label, icon: Users },
    { value: t.stat2Value, label: t.stat2Label, icon: Clock },
    { value: t.stat3Value, label: t.stat3Label, icon: Target },
    { value: t.stat4Value, label: t.stat4Label, icon: TrendingUp },
  ];

  const techFeatures = [
    { icon: Shield, title: t.techEncryption, desc: t.techEncryptionDesc },
    { icon: Server, title: t.techHetzner, desc: t.techHetznerDesc },
    { icon: Database, title: t.techBackup, desc: t.techBackupDesc },
    { icon: Clock, title: t.techUptime, desc: t.techUptimeDesc },
  ];

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
    { q: t.faq5Q, a: t.faq5A },
    { q: t.faq6Q, a: t.faq6A },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" dir={isRTL ? "rtl" : "ltr"}>
      <NCHeader />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/50 to-transparent dark:from-blue-900/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
              <DollarSign className="w-4 h-4" />
              {t.badge}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {t.heroTitle}{" "}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                {t.heroTitleHighlight}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              {t.heroSubtitle}
            </p>
            
            {/* Billing Period Toggle */}
            <div className="inline-flex items-center gap-3 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-white dark:bg-gray-700 text-slate-900 dark:text-white shadow-md"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                }`}
              >
                {t.monthly}
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all relative ${
                  billingPeriod === "yearly"
                    ? "bg-white dark:bg-gray-700 text-slate-900 dark:text-white shadow-md"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                }`}
              >
                {t.annually}
                <span className="absolute -top-2 -end-2 px-2 py-0.5 bg-amber-400 text-amber-900 text-[10px] font-bold rounded-full">
                  {t.yearlyDiscount}
                </span>
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold">
                <Check className="w-4 h-4" />
                {t.freeTrialBadge}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold">
                <Shield className="w-4 h-4" />
                {t.moneyBackBadge}
              </div>
            </div>
            
            {/* Currency Selector */}
            <div className="flex justify-center">
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {t.currency}
                </span>
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {Object.entries(currencyConfig).map(([code, info]) => (
                    <option key={code} value={code}>
                      {info.symbol} {info.name[language as keyof typeof info.name] || info.name.en} ({code})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Limited Time Offer Banner */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 py-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                {t.discount50}
              </span>
              <span className="text-white font-bold text-lg md:text-xl">
                {t.limitedOffer}
              </span>
            </div>
            
            {/* Countdown Timer */}
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-white animate-pulse" />
              <div className="flex items-center gap-2">
                <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-2 text-center min-w-[55px]">
                  <span className="text-2xl font-bold text-white">{countdown.days}</span>
                  <p className="text-xs text-white/80">{t.days}</p>
                </div>
                <span className="text-white text-2xl font-bold">:</span>
                <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-2 text-center min-w-[55px]">
                  <span className="text-2xl font-bold text-white">{countdown.hours}</span>
                  <p className="text-xs text-white/80">{t.hours}</p>
                </div>
                <span className="text-white text-2xl font-bold">:</span>
                <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-2 text-center min-w-[55px]">
                  <span className="text-2xl font-bold text-white">{countdown.minutes}</span>
                  <p className="text-xs text-white/80">{t.minutes}</p>
                </div>
                <span className="text-white text-2xl font-bold">:</span>
                <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-2 text-center min-w-[55px]">
                  <span className="text-2xl font-bold text-white">{countdown.seconds}</span>
                  <p className="text-xs text-white/80">{t.seconds}</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-white/90 text-sm mt-3">
            {t.offerEnds}: <span className="font-bold">{offerEndDate}</span>
          </p>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <section className="py-16 bg-gray-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const TargetIcon = plan.targetIcon;
              const localPrice = convertPrice(plan.priceUSD);
              const originalLocalPrice = convertOriginalPrice(plan.originalPriceUSD);
              const displayPrice = formatPrice(localPrice);
              const originalDisplayPrice = formatPrice(originalLocalPrice);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex"
                >
                  <Card className={`relative overflow-hidden flex flex-col w-full transition-all duration-300 ${
                    plan.popular 
                      ? "bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-600 text-white shadow-2xl shadow-blue-500/30 lg:scale-105 z-10 border-0" 
                      : `bg-gradient-to-br ${plan.gradient} border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-blue-500/30`
                  }`}>
                    {/* Discount Badge */}
                    <div className={`absolute top-2 ${isRTL ? "left-2" : "right-2"} bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-20`}>
                      {t.discount50}
                    </div>
                    
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute top-0 right-0 left-0 bg-amber-400 text-amber-900 px-4 py-1 text-xs font-bold uppercase tracking-wider text-center">
                        {t.bestValue}
                      </div>
                    )}
                    
                    <div className={`p-5 pb-0 ${plan.popular ? "pt-9" : ""}`}>
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${plan.popular ? "from-white/20 to-white/10" : plan.iconBg} flex items-center justify-center mb-3 shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      
                      <h3 className={`text-lg font-bold mb-1 ${plan.popular ? "text-white" : "text-slate-900 dark:text-white"}`}>
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
                        <span className={`text-3xl font-black ${plan.popular ? "text-white" : "text-blue-600 dark:text-blue-400"}`}>
                          {displayPrice}
                        </span>
                        <span className={`text-xs ${plan.popular ? "text-white/70" : "text-gray-500 dark:text-gray-400"}`}>
                          {billingPeriod === "yearly" ? t.perYear : t.perMonth}
                        </span>
                      </div>
                      
                      {/* Monthly equivalent for yearly */}
                      {billingPeriod === "yearly" && (
                        <p className={`text-xs mb-3 ${plan.popular ? "text-white/60" : "text-gray-400 dark:text-gray-500"}`}>
                          ≈ {currency}{formatPrice(Math.round(localPrice / 12))}{t.perMonth}
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
                        <TargetIcon className={`w-4 h-4 ${plan.popular ? "text-yellow-300" : "text-blue-500"}`} />
                        <span className={`text-xs font-medium ${plan.popular ? "text-white" : "text-gray-700 dark:text-gray-200"}`}>
                          {plan.target}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 pt-0 flex-1 flex flex-col">
                      {/* Business Management Section */}
                      <div className="mb-3">
                        <h4 className={`text-xs font-bold mb-2 ${plan.popular ? "text-white/90" : "text-slate-900 dark:text-gray-200"}`}>
                          {t.catBusiness}
                        </h4>
                        <ul className="space-y-1.5">
                          {plan.businessFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                plan.popular ? "bg-white/20" : "bg-blue-500/10 dark:bg-blue-400/20"
                              }`}>
                                <Check className={`w-2 h-2 ${plan.popular ? "text-white" : "text-blue-500 dark:text-blue-400"}`} />
                              </div>
                              <span className={`text-[11px] ${plan.popular ? "text-white/90" : "text-gray-700 dark:text-gray-200"}`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Digital Infrastructure Section */}
                      <div className="mb-3">
                        <h4 className={`text-xs font-bold mb-2 ${plan.popular ? "text-white/90" : "text-slate-900 dark:text-gray-200"}`}>
                          {t.catDigital}
                        </h4>
                        <ul className="space-y-1.5">
                          {plan.digitalFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                plan.popular ? "bg-white/20" : "bg-green-500/10 dark:bg-green-400/20"
                              }`}>
                                <Globe className={`w-2 h-2 ${plan.popular ? "text-white" : "text-green-500 dark:text-green-400"}`} />
                              </div>
                              <span className={`text-[11px] ${plan.popular ? "text-white/90" : "text-gray-700 dark:text-gray-200"}`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* AI Section (if available) */}
                      {plan.aiFeatures.length > 0 && (
                        <div className="mb-3">
                          <h4 className={`text-xs font-bold mb-2 ${plan.popular ? "text-white/90" : "text-slate-900 dark:text-gray-200"}`}>
                            {t.catAI}
                          </h4>
                          <ul className="space-y-1.5">
                            {plan.aiFeatures.map((feature, idx) => (
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
                      {plan.mobileFeatures.length > 0 && (
                        <div className="mb-3">
                          <h4 className={`text-xs font-bold mb-2 ${plan.popular ? "text-white/90" : "text-slate-900 dark:text-gray-200"}`}>
                            {t.catMobile}
                          </h4>
                          <ul className="space-y-1.5">
                            {plan.mobileFeatures.map((feature, idx) => (
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

                      {/* Support Section */}
                      <div className="mb-4">
                        <h4 className={`text-xs font-bold mb-2 ${plan.popular ? "text-white/90" : "text-slate-900 dark:text-gray-200"}`}>
                          {t.catSupport}
                        </h4>
                        <ul className="space-y-1.5">
                          {plan.supportFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                plan.popular ? "bg-white/20" : "bg-amber-500/10 dark:bg-amber-400/20"
                              }`}>
                                <Headphones className={`w-2 h-2 ${plan.popular ? "text-white" : "text-amber-500 dark:text-amber-400"}`} />
                              </div>
                              <span className={`text-[11px] ${plan.popular ? "text-white/90" : "text-gray-700 dark:text-gray-200"}`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto">
                        <Link to="/nexacore/register">
                          <Button className={`w-full py-5 rounded-xl font-semibold ${
                            plan.popular 
                              ? "bg-white text-blue-600 hover:bg-blue-50" 
                              : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                          }`}>
                            {t.getStarted}
                            <Arrow className="w-4 h-4 ms-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.roiTitle}
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {t.roiSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl text-center hover:bg-white/15 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-blue-400/30 flex items-center justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-blue-200" />
                  </div>
                  <p className="text-5xl font-black text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-blue-100">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {t.techTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.techSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {t.faqTitle}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {faq.a}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/nexacore/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-bold shadow-xl rounded-xl">
                  {t.ctaButton}
                  <Arrow className="w-5 h-5 ms-2" />
                </Button>
              </Link>
              <Link to="/nexacore/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-bold rounded-xl">
                  {t.ctaContact}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <NCFooter />
    </div>
  );
}
