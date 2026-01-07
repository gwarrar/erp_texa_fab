import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/landing/LanguageContext";
import { FCHeader } from "@/components/fincore/FCHeader";
import { FCFooter } from "@/components/fincore/FCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { 
  ArrowRight, ArrowLeft, Check, X, HelpCircle, Building2,
  Zap, Shield, Globe, Users, MessageSquare, Code, BarChart3,
  Lock, Server, Palette, Smartphone, Bot, Plus
} from "lucide-react";

const translations = {
  en: {
    heroTitle: "Transparent Pricing",
    heroHighlight: "For Every Scale",
    heroSubtitle: "Flexible licensing models designed to grow with your institution. No hidden fees, no surprises.",
    
    monthly: "Monthly",
    annually: "Annually",
    savePercent: "Save 20%",
    
    // Plan Headers
    starterBadge: "For Single Branch",
    professionalBadge: "The Ambitious Banker",
    enterpriseBadge: "Large Corporations & Groups",
    
    // Starter Plan - Basic
    starterName: "Basic Plan",
    starterDesc: "For small exchange houses and startups",
    starterPrice: "$99",
    starterPeriod: "/month",
    
    // Starter - Business Management
    starterBizTitle: "💰 Business Management",
    starterBizFeatures: [
      "Manage 1 company",
      "3 users",
      "2 POS terminals",
      "Basic employee management",
    ],
    
    // Starter - Digital Presence
    starterDigitalTitle: "🌐 Digital Presence",
    starterDigitalFeatures: [
      "Shared Hetzner hosting",
      "E-commerce store (100 products)",
      "Free SSL certificate",
    ],
    
    // Starter - Expected ROI
    starterRoiTitle: "💵 Expected ROI",
    starterRoiSales: "Sales increase",
    starterRoiSalesValue: "$2,000 - $4,000/year",
    starterRoiRetention: "Customer retention",
    starterRoiRetentionValue: "$1,500 - $4,000/year",
    starterRoiProfit: "Annual net profit",
    starterRoiProfitValue: "+$6,800 - $13,800",
    starterRoiPercent: "573% - 1,162%",
    starterRoiLabel: "ROI",
    
    // Professional Plan
    professionalName: "Professional Plan",
    professionalDesc: "For growing financial institutions",
    professionalPrice: "$499",
    professionalPeriod: "/month",
    
    // Professional - Business Management
    profBizTitle: "💰 Business Management",
    profBizFeatures: [
      "Manage 2 companies",
      "10 users",
      "Unlimited POS terminals",
      "Advanced employee management",
      "Agents & distributors management",
    ],
    
    // Professional - Digital Presence
    profDigitalTitle: "🌐 Digital Presence",
    profDigitalFeatures: [
      "Hetzner dedicated hosting",
      "Free website for 1 year 🎁",
      "E-commerce store (unlimited)",
      "Custom SSL + dedicated domain",
    ],
    
    // Professional - AI Features
    profAiTitle: "🤖 Artificial Intelligence",
    profAiFeatures: [
      "Weekly smart reports",
    ],
    
    // Professional - Expected ROI
    profRoiTitle: "💵 Expected ROI",
    profRoiSales: "Sales increase",
    profRoiSalesValue: "$10,000 - $15,000/year",
    profRoiRetention: "Customer retention",
    profRoiRetentionValue: "$8,000 - $15,000/year",
    profRoiProfit: "Annual net profit",
    profRoiProfitValue: "+$12,000 - $24,000",
    profRoiPercent: "200% - 400%",
    
    // Professional - Mobile App
    profMobileTitle: "📱 Mobile Application",
    profMobileFeatures: [
      "Customer mobile app",
      "Push notifications",
      "Mobile payments",
    ],
    
    mostPopular: "Most Popular",
    
    // Enterprise Plan
    enterpriseName: "Enterprise Plan",
    enterpriseDesc: "For large banks and financial groups",
    enterprisePrice: "$999",
    enterprisePeriod: "/month",
    
    // Enterprise - Business Management
    entBizTitle: "💰 Business Management",
    entBizFeatures: [
      "Manage unlimited companies",
      "Unlimited users",
      "Unlimited POS terminals",
      "Advanced employee management",
      "Advanced agents system",
      "Dedicated account manager",
    ],
    
    // Enterprise - Digital Presence
    entDigitalTitle: "🌐 Digital Presence",
    entDigitalFeatures: [
      "Hetzner Premium dedicated hosting",
      "Free permanent website 🎁",
      "Custom design with company colors",
      "Advanced e-commerce store",
      "99.9% SLA guarantee",
    ],
    
    // Enterprise - AI Features
    entAiTitle: "🤖 Artificial Intelligence",
    entAiFeatures: [
      "AI analytics 🔮",
      "Automatic AI data entry",
      "Smart sales predictions",
      "Real-time advanced reports",
    ],
    
    // Enterprise - Mobile Apps
    entMobileTitle: "📱 Mobile Applications",
    entMobileFeatures: [
      "Customer mobile app",
      "Manager mobile app",
      "Admin dashboard app",
      "Custom branding",
    ],
    
    // Enterprise - Expected ROI
    entRoiTitle: "💵 Expected ROI",
    entRoiSales: "Sales increase",
    entRoiSalesValue: "$30,000 - $60,000/year",
    entRoiRetention: "Customer retention",
    entRoiRetentionValue: "$25,000 - $50,000/year",
    entRoiProfit: "Annual net profit",
    entRoiProfitValue: "+$43,000 - $98,000",
    entRoiPercent: "358% - 817%",
    
    contactSales: "Contact Sales",
    getStarted: "Get Started",
    
    // Announcement
    announcementText: "🎁 E-commerce store included free with no additional design or setup fees!",
    
    // FAQ Section
    faqTitle: "Frequently Asked Questions",
    faq1Q: "What's included in the implementation?",
    faq1A: "All plans include initial setup, data migration support, and basic training. Enterprise plans include comprehensive onboarding and custom configuration.",
    
    faq2Q: "Can I upgrade my plan later?",
    faq2A: "Yes, you can upgrade at any time. We'll prorate your existing subscription and help migrate your data seamlessly.",
    
    faq3Q: "What payment methods do you accept?",
    faq3A: "We accept wire transfers, credit cards, and ACH payments. Enterprise clients can arrange custom billing terms.",
    
    faq4Q: "Is there a free trial available?",
    faq4A: "We offer a 30-day demo environment for qualified prospects. Contact sales to request access.",
    
    faq5Q: "What's your cancellation policy?",
    faq5A: "Monthly plans can be cancelled anytime. Annual plans are billed upfront with a pro-rata refund available in the first 90 days.",
    
    // Add-ons Section
    addonsTitle: "Premium Add-ons",
    addonsSubtitle: "Enhance your platform with powerful additional modules",
    
    addon1Name: "Premium API Access",
    addon1Desc: "Unlimited API calls, webhooks, and advanced integrations",
    addon1Price: "$500",
    
    addon2Name: "Advanced Analytics",
    addon2Desc: "Real-time dashboards, custom reports, and AI insights",
    addon2Price: "$300",
    
    addon3Name: "Dedicated Security",
    addon3Desc: "SOC2 compliance, penetration testing, and dedicated firewall",
    addon3Price: "$400",
    
    addon4Name: "Multi-Region Deployment",
    addon4Desc: "Deploy across multiple regions for lower latency",
    addon4Price: "$600",
    
    addon5Name: "White-Label Customization",
    addon5Desc: "Full branding customization and custom domain",
    addon5Price: "$1,000",
    
    addon6Name: "Mobile SDK",
    addon6Desc: "iOS & Android SDKs for custom mobile apps",
    addon6Price: "$800",
    
    addon7Name: "AI Fraud Detection",
    addon7Desc: "Machine learning powered fraud prevention",
    addon7Price: "$750",
    
    addonPeriod: "/mo",
    addToPackage: "Add to Package",
    
    // CTA
    ctaTitle: "Need a Custom Solution?",
    ctaSubtitle: "Let's discuss your specific requirements and build a tailored package.",
    ctaButton: "Talk to Sales",
  },
  ar: {
    heroTitle: "تسعير شفاف",
    heroHighlight: "لكل حجم",
    heroSubtitle: "نماذج ترخيص مرنة مصممة للنمو مع مؤسستك. بدون رسوم خفية، بدون مفاجآت.",
    
    monthly: "شهري",
    annually: "سنوي",
    savePercent: "وفر 20%",
    
    // Plan Headers
    starterBadge: "الشركة الخاصة الواحدة",
    professionalBadge: "رائد الأعمال الطموح",
    enterpriseBadge: "الشركات الكبيرة والمجموعات",
    
    // Starter Plan - Basic
    starterName: "الباقة الأساسية",
    starterDesc: "للشركات الصغيرة",
    starterPrice: "$99",
    starterPeriod: "/شهر",
    
    // Starter - Business Management
    starterBizTitle: "💰 إدارة الأعمال",
    starterBizFeatures: [
      "إدارة شركة واحدة",
      "3 مستخدمين",
      "نقطتي بيع",
      "شؤون الموظفين الأساسية",
    ],
    
    // Starter - Digital Presence
    starterDigitalTitle: "🌐 التواجد الرقمي",
    starterDigitalFeatures: [
      "استضافة Hetzner مشتركة",
      "المتجر الإلكتروني (100 منتج)",
      "شهادة SSL مجانية",
    ],
    
    // Starter - Expected ROI
    starterRoiTitle: "💵 العائد المتوقع",
    starterRoiSales: "زيادة المبيعات",
    starterRoiSalesValue: "$2,000 - $4,000/سنة",
    starterRoiRetention: "الاحتفاظ بالزبائن",
    starterRoiRetentionValue: "$1,500 - $4,000/سنة",
    starterRoiProfit: "صافي الربح السنوي",
    starterRoiProfitValue: "+$6,800 - $13,800",
    starterRoiPercent: "573% - 1,162%",
    starterRoiLabel: "ROI",
    
    // Professional Plan
    professionalName: "الباقة الاحترافية",
    professionalDesc: "للشركات المتوسطة",
    professionalPrice: "$499",
    professionalPeriod: "/شهر",
    
    // Professional - Business Management
    profBizTitle: "💰 إدارة الأعمال",
    profBizFeatures: [
      "إدارة شركتين",
      "10 مستخدمين",
      "نقاط بيع غير محدودة",
      "شؤون الموظفين المتقدمة",
      "إدارة الوكلاء والموزعين",
    ],
    
    // Professional - Digital Presence
    profDigitalTitle: "🌐 التواجد الرقمي",
    profDigitalFeatures: [
      "استضافة Hetzner مخصصة",
      "موقع إلكتروني مجاني لمدة سنة 🎁",
      "المتجر الإلكتروني (غير محدود)",
      "شهادة SSL + دومين مخصص",
    ],
    
    // Professional - AI Features
    profAiTitle: "🤖 الذكاء الاصطناعي",
    profAiFeatures: [
      "تقارير ذكية أسبوعية",
    ],
    
    // Professional - Expected ROI
    profRoiTitle: "💵 العائد المتوقع",
    profRoiSales: "زيادة المبيعات",
    profRoiSalesValue: "$10,000 - $15,000/سنة",
    profRoiRetention: "الاحتفاظ بالزبائن",
    profRoiRetentionValue: "$8,000 - $15,000/سنة",
    profRoiProfit: "صافي الربح السنوي",
    profRoiProfitValue: "+$12,000 - $24,000",
    profRoiPercent: "200% - 400%",
    
    // Professional - Mobile App
    profMobileTitle: "📱 تطبيق الموبايل",
    profMobileFeatures: [
      "تطبيق موبايل للعملاء",
      "إشعارات فورية",
      "الدفع عبر الموبايل",
    ],
    
    mostPopular: "الأكثر طلباً",
    
    // Enterprise Plan
    enterpriseName: "باقة المؤسسات",
    enterpriseDesc: "للمؤسسات الكبيرة",
    enterprisePrice: "$999",
    enterprisePeriod: "/شهر",
    
    // Enterprise - Business Management
    entBizTitle: "💰 إدارة الأعمال",
    entBizFeatures: [
      "إدارة عدد غير محدود من الشركات",
      "مستخدمين غير محدود",
      "نقاط بيع غير محدودة",
      "شؤون الموظفين الموسعة",
      "نظام الوكلاء المتقدم",
      "مدير حساب مخصص",
    ],
    
    // Enterprise - Digital Presence
    entDigitalTitle: "🌐 التواجد الرقمي",
    entDigitalFeatures: [
      "استضافة Hetzner Premium مخصصة",
      "موقع إلكتروني مجاني دائماً 🎁",
      "تخصيص التصميم بألوان الشركة",
      "المتجر الإلكتروني المتقدم",
      "SLA 99.9%",
    ],
    
    // Enterprise - AI Features
    entAiTitle: "🤖 الذكاء الاصطناعي",
    entAiFeatures: [
      "تحليلات الذكاء الاصطناعي 🔮",
      "الإدخال الآلي بالذكاء الاصطناعي",
      "تنبؤات المبيعات الذكية",
      "تقارير لحظية ومتقدمة",
    ],
    
    // Enterprise - Mobile Apps
    entMobileTitle: "📱 تطبيقات الموبايل",
    entMobileFeatures: [
      "تطبيق موبايل للعملاء",
      "تطبيق موبايل للمدراء",
      "لوحة تحكم للمسؤول",
      "علامة تجارية مخصصة",
    ],
    
    // Enterprise - Expected ROI
    entRoiTitle: "💵 العائد المتوقع",
    entRoiSales: "زيادة المبيعات",
    entRoiSalesValue: "$30,000 - $60,000/سنة",
    entRoiRetention: "الاحتفاظ بالزبائن",
    entRoiRetentionValue: "$25,000 - $50,000/سنة",
    entRoiProfit: "صافي الربح السنوي",
    entRoiProfitValue: "+$43,000 - $98,000",
    entRoiPercent: "358% - 817%",
    
    contactSales: "تواصل مع المبيعات",
    getStarted: "ابدأ الآن",
    
    // Announcement
    announcementText: "🎁 المتجر الإلكتروني مشمول بدون رسوم تصميم أو تشغيل إضافية!",
    
    faqTitle: "الأسئلة الشائعة",
    faq1Q: "ما الذي يشمله التنفيذ؟",
    faq1A: "جميع الخطط تشمل الإعداد الأولي ودعم ترحيل البيانات والتدريب الأساسي. خطط المؤسسات تشمل إعداداً شاملاً وتكويناً مخصصاً.",
    
    faq2Q: "هل يمكنني ترقية خطتي لاحقاً؟",
    faq2A: "نعم، يمكنك الترقية في أي وقت. سنقوم بتناسب اشتراكك الحالي والمساعدة في ترحيل بياناتك بسلاسة.",
    
    faq3Q: "ما طرق الدفع التي تقبلونها؟",
    faq3A: "نقبل التحويلات البنكية وبطاقات الائتمان ومدفوعات ACH. يمكن لعملاء المؤسسات ترتيب شروط فوترة مخصصة.",
    
    faq4Q: "هل تجربة مجانية متاحة؟",
    faq4A: "نقدم بيئة عرض توضيحي لمدة 30 يوماً للعملاء المؤهلين. تواصل مع المبيعات لطلب الوصول.",
    
    faq5Q: "ما هي سياسة الإلغاء؟",
    faq5A: "يمكن إلغاء الخطط الشهرية في أي وقت. الخطط السنوية تُدفع مقدماً مع استرداد نسبي متاح في أول 90 يوماً.",
    
    // Add-ons Section
    addonsTitle: "الإضافات المميزة",
    addonsSubtitle: "عزز منصتك بوحدات إضافية قوية",
    
    addon1Name: "الوصول المميز لـ API",
    addon1Desc: "استدعاءات API غير محدودة، webhooks، وتكاملات متقدمة",
    addon1Price: "$500",
    
    addon2Name: "التحليلات المتقدمة",
    addon2Desc: "لوحات تحكم فورية، تقارير مخصصة، ورؤى الذكاء الاصطناعي",
    addon2Price: "$300",
    
    addon3Name: "الأمان المخصص",
    addon3Desc: "امتثال SOC2، اختبار الاختراق، وجدار حماية مخصص",
    addon3Price: "$400",
    
    addon4Name: "النشر متعدد المناطق",
    addon4Desc: "انشر عبر مناطق متعددة لتقليل زمن الاستجابة",
    addon4Price: "$600",
    
    addon5Name: "تخصيص العلامة البيضاء",
    addon5Desc: "تخصيص كامل للعلامة التجارية ونطاق مخصص",
    addon5Price: "$1,000",
    
    addon6Name: "حزمة تطوير الهاتف",
    addon6Desc: "حزم SDK لنظامي iOS و Android للتطبيقات المخصصة",
    addon6Price: "$800",
    
    addon7Name: "كشف الاحتيال بالذكاء الاصطناعي",
    addon7Desc: "منع الاحتيال المدعوم بالتعلم الآلي",
    addon7Price: "$750",
    
    addonPeriod: "/شهر",
    addToPackage: "أضف للباقة",
    
    ctaTitle: "تحتاج حلاً مخصصاً؟",
    ctaSubtitle: "دعنا نناقش متطلباتك المحددة ونبني حزمة مخصصة.",
    ctaButton: "تحدث مع المبيعات",
  },
};

const seoMeta = {
  en: {
    title: "Pricing Plans | FinCore - Core Banking Platform",
    description: "Flexible pricing plans for FinCore banking platform. Starter, Professional, and Enterprise options available.",
  },
  ar: {
    title: "خطط التسعير | فين كور - منصة بنكية أساسية",
    description: "خطط تسعير مرنة لمنصة فين كور البنكية. خيارات المبتدئ والاحترافي والمؤسسات متاحة.",
  },
};

export default function FCPricingPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const currentSeo = seoMeta[language as keyof typeof seoMeta] || seoMeta.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    document.title = currentSeo.title;
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [currentSeo.title, language, dir]);

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
    { q: t.faq5Q, a: t.faq5A },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white" dir={dir}>
      <FCHeader />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden min-h-[40vh] flex items-center bg-gradient-to-br from-white via-slate-50 to-teal-50/30 dark:from-slate-950 dark:via-[#0d1f3c] dark:to-slate-950">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl bg-amber-500/5 dark:bg-amber-500/10" />
          <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl bg-teal-500/5 dark:bg-teal-500/10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-slate-900 dark:text-white">{t.heroTitle}</span>
            <br />
            <span className="text-[#0D9488]">{t.heroHighlight}</span>
          </motion.h1>
          <motion.p 
            className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t.heroSubtitle}
          </motion.p>
          
          {/* Billing Toggle */}
          <motion.div 
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className={`text-sm font-medium ${!isAnnual ? "text-[#0D9488]" : "text-slate-500"}`}>
              {t.monthly}
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isAnnual ? "bg-[#0D9488]" : "bg-slate-300 dark:bg-slate-600"
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                  isAnnual ? "end-1" : "start-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? "text-[#0D9488]" : "text-slate-500"}`}>
              {t.annually}
            </span>
            {isAnnual && (
              <span className="bg-[#0D9488]/10 text-[#0D9488] text-xs font-semibold px-2 py-1 rounded-full">
                {t.savePercent}
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Announcement Banner */}
      <div className="bg-[#0D9488]/10 border-y border-[#0D9488]/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2">
            🎁 {t.announcementText}
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Starter Plan - Basic */}
            <motion.div 
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-slate-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-slate-600 dark:text-slate-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.starterName}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.starterDesc}</p>
              </div>
              
              {/* Price */}
              <div className="p-6 text-center border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    {isAnnual ? "$79" : t.starterPrice}
                  </span>
                  <span className="text-slate-500">{t.starterPeriod}</span>
                </div>
              </div>
              
              {/* Badge */}
              <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-center">
                <span className="text-sm text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  {t.starterBadge}
                </span>
              </div>
              
              {/* Business Management */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {t.starterBizTitle}
                </h4>
                <ul className="space-y-3">
                  {t.starterBizFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Digital Presence */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {t.starterDigitalTitle}
                </h4>
                <ul className="space-y-3">
                  {t.starterDigitalFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Expected ROI */}
              <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  💵 {t.starterRoiTitle}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      {t.starterRoiSales}
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">{t.starterRoiSalesValue}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      ❤️ {t.starterRoiRetention}
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">{t.starterRoiRetentionValue}</span>
                  </div>
                  <div className="pt-3 border-t border-emerald-200 dark:border-emerald-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-900 dark:text-white">{t.starterRoiProfit}</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{t.starterRoiProfitValue}</span>
                    </div>
                    <div className="flex items-center justify-end mt-1">
                      <span className="text-xs bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                        {t.starterRoiLabel} {t.starterRoiPercent}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="p-6">
                <Link to="/fincore/contact">
                  <Button variant="outline" className="w-full border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 py-6 rounded-xl hover:bg-[#0D9488] hover:text-white hover:border-[#0D9488] transition-all">
                    {t.getStarted}
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Professional Plan - Most Popular */}
            <motion.div 
              className="relative bg-gradient-to-br from-[#0D9488] to-teal-600 rounded-3xl overflow-hidden border-2 border-[#0D9488] shadow-2xl transform lg:-translate-y-4 lg:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {/* Most Popular Badge */}
              <div className="absolute top-4 start-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-10">
                {t.mostPopular}
              </div>
              
              {/* Header */}
              <div className="bg-white/10 backdrop-blur p-6 text-center pt-12">
                <div className="w-14 h-14 mx-auto bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.professionalName}</h3>
                <p className="text-sm text-white/80 mt-1">{t.professionalDesc}</p>
              </div>
              
              {/* Price */}
              <div className="p-6 text-center border-b border-white/20">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">
                    {isAnnual ? "$399" : t.professionalPrice}
                  </span>
                  <span className="text-white/70">{t.professionalPeriod}</span>
                </div>
              </div>
              
              {/* Badge */}
              <div className="px-6 py-3 bg-white/10 text-center">
                <span className="text-sm text-white/90 flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  {t.professionalBadge}
                </span>
              </div>
              
              {/* Business Management */}
              <div className="p-6 border-b border-white/20">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  {t.profBizTitle}
                </h4>
                <ul className="space-y-3">
                  {t.profBizFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Digital Presence */}
              <div className="p-6 border-b border-white/20">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  {t.profDigitalTitle}
                </h4>
                <ul className="space-y-3">
                  {t.profDigitalFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* AI Features */}
              <div className="p-6 border-b border-white/20">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  {t.profAiTitle}
                </h4>
                <ul className="space-y-3">
                  {t.profAiFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Mobile App */}
              <div className="p-6 border-b border-white/20">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  {t.profMobileTitle}
                </h4>
                <ul className="space-y-3">
                  {t.profMobileFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Expected ROI */}
              <div className="p-6 bg-white/10 border-b border-white/20">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  {t.profRoiTitle}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/80 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      {t.profRoiSales}
                    </span>
                    <span className="font-bold text-amber-300">{t.profRoiSalesValue}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/80 flex items-center gap-2">
                      ❤️ {t.profRoiRetention}
                    </span>
                    <span className="font-bold text-amber-300">{t.profRoiRetentionValue}</span>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-white">{t.profRoiProfit || "Annual net profit"}</span>
                      <span className="font-bold text-emerald-300">{t.profRoiProfitValue || "+$12,000 - $24,000"}</span>
                    </div>
                    <div className="flex items-center justify-end mt-2">
                      <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-bold">
                        ROI {t.profRoiPercent || "200% - 400%"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="p-6">
                <Link to="/fincore/contact">
                  <Button className="w-full bg-white hover:bg-white/90 text-[#0D9488] py-6 rounded-xl font-bold text-lg shadow-lg">
                    {t.getStarted}
                    <ArrowIcon className="w-5 h-5 ms-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div 
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-700 dark:to-slate-600 p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.enterpriseName}</h3>
                <p className="text-sm text-white/80 mt-1">{t.enterpriseDesc}</p>
              </div>
              
              {/* Price */}
              <div className="p-6 text-center border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    {isAnnual ? "$799" : t.enterprisePrice}
                  </span>
                  <span className="text-slate-500">{t.enterprisePeriod}</span>
                </div>
              </div>
              
              {/* Badge */}
              <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-center">
                <span className="text-sm text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4" />
                  {t.enterpriseBadge}
                </span>
              </div>
              
              {/* Business Management */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {t.entBizTitle}
                </h4>
                <ul className="space-y-3">
                  {t.entBizFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Digital Presence */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {t.entDigitalTitle}
                </h4>
                <ul className="space-y-3">
                  {t.entDigitalFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* AI Features */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {t.entAiTitle}
                </h4>
                <ul className="space-y-3">
                  {t.entAiFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Mobile Apps */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {t.entMobileTitle}
                </h4>
                <ul className="space-y-3">
                  {t.entMobileFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Expected ROI */}
              <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 border-b border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {t.entRoiTitle}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      {t.entRoiSales}
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{t.entRoiSalesValue}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      ❤️ {t.entRoiRetention}
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{t.entRoiRetentionValue}</span>
                  </div>
                  <div className="pt-3 border-t border-emerald-200 dark:border-emerald-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-900 dark:text-white">{t.entRoiProfit || "Annual net profit"}</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{t.entRoiProfitValue || "+$43,000 - $98,000"}</span>
                    </div>
                    <div className="flex items-center justify-end mt-2">
                      <span className="text-xs bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full font-bold">
                        ROI {t.entRoiPercent || "358% - 817%"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="p-6">
                <Link to="/fincore/contact">
                  <Button className="w-full bg-[#0A1628] dark:bg-[#0D9488] text-white dark:text-[#0A1628] py-6 rounded-xl font-semibold hover:opacity-90 transition-all">
                    {t.contactSales}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.addonsTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.addonsSubtitle}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: t.addon1Name, desc: t.addon1Desc, price: t.addon1Price, icon: Code, color: "from-blue-500 to-indigo-600" },
              { name: t.addon2Name, desc: t.addon2Desc, price: t.addon2Price, icon: BarChart3, color: "from-purple-500 to-pink-600" },
              { name: t.addon3Name, desc: t.addon3Desc, price: t.addon3Price, icon: Lock, color: "from-green-500 to-emerald-600" },
              { name: t.addon4Name, desc: t.addon4Desc, price: t.addon4Price, icon: Server, color: "from-orange-500 to-red-600" },
              { name: t.addon5Name, desc: t.addon5Desc, price: t.addon5Price, icon: Palette, color: "from-pink-500 to-rose-600" },
              { name: t.addon6Name, desc: t.addon6Desc, price: t.addon6Price, icon: Smartphone, color: "from-cyan-500 to-blue-600" },
              { name: t.addon7Name, desc: t.addon7Desc, price: t.addon7Price, icon: Bot, color: "from-violet-500 to-purple-600" },
            ].map((addon, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-[#0D9488] dark:hover:border-[#0D9488] transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${addon.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <addon.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{addon.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{addon.desc}</p>
                
                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div>
                    <span className="text-2xl font-bold text-[#0D9488]">{addon.price}</span>
                    <span className="text-sm text-slate-500">{t.addonPeriod}</span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center hover:bg-[#0D9488] hover:text-white transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            {t.faqTitle}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 ps-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            {t.ctaSubtitle}
          </p>
          <Link to="/fincore/contact">
            <Button className="bg-[#0D9488] text-white hover:bg-[#0D9488]/90 px-8 py-6 text-base font-semibold rounded-xl shadow-lg">
              {t.ctaButton}
              <MessageSquare className="w-5 h-5 ms-2" />
            </Button>
          </Link>
        </div>
      </section>
      
      <FCFooter />
      <ScrollToTop />
    </div>
  );
}
