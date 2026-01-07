import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/landing/LanguageContext";
import { FCHeader } from "@/components/fincore/FCHeader";
import { FCFooter } from "@/components/fincore/FCFooter";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/fincore/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { 
  ArrowRight, ArrowLeft, Building2, Wallet, Send, PiggyBank,
  Landmark, CreditCard, RefreshCcw, Shield, Globe, Users,
  BarChart3, Zap, Lock, CheckCircle2, TrendingUp, Database
} from "lucide-react";

const translations = {
  en: {
    heroTitle: "Banking Solutions",
    heroHighlight: "For Every Institution",
    heroSubtitle: "Purpose-built financial infrastructure tailored for commercial banks, exchange houses, remittance companies, and microfinance institutions.",
    exploreBelow: "Explore Solutions",
    
    // Core Banking
    coreBankingTitle: "Core Banking System",
    coreBankingDesc: "A complete, modern core banking platform designed for digital-first financial institutions. Real-time processing, multi-currency support, and seamless integration capabilities.",
    coreBankingFeatures: [
      "Real-time transaction processing",
      "Multi-currency account management",
      "Loan origination & management",
      "Deposit & savings products",
      "Customer 360° view",
      "Regulatory reporting automation"
    ],
    
    // Exchange System
    exchangeTitle: "Exchange & Treasury",
    exchangeDesc: "Comprehensive foreign exchange and treasury management solution. Automated FX operations, real-time rates, position management, and treasury analytics.",
    exchangeFeatures: [
      "Real-time FX rates integration",
      "Position & exposure management",
      "Multi-currency dealing",
      "Treasury analytics dashboard",
      "Compliance & audit trails",
      "Risk management tools"
    ],
    
    // Remittance
    remittanceTitle: "Remittance Platform",
    remittanceDesc: "Global money transfer infrastructure with extensive correspondent banking network. SWIFT, SEPA, and local payment rails integration.",
    remittanceFeatures: [
      "Global payout network",
      "SWIFT & SEPA integration",
      "Correspondent banking",
      "Real-time tracking",
      "Compliance screening",
      "Mobile & agent channels"
    ],
    
    // Microfinance
    microfinanceTitle: "Microfinance Suite",
    microfinanceDesc: "Specialized platform for financial inclusion. Loan management, savings products, and mobile money capabilities for underserved communities.",
    microfinanceFeatures: [
      "Group lending management",
      "Savings & fixed deposits",
      "Mobile money integration",
      "Agent banking network",
      "Credit scoring models",
      "Financial literacy tools"
    ],
    
    // CTA
    ctaTitle: "Ready to Get Started?",
    ctaSubtitle: "Schedule a personalized demo with our banking technology experts.",
    ctaButton: "Request Demo",
    
    learnMore: "Learn More",
    keyFeatures: "Key Features",
  },
  ar: {
    heroTitle: "حلول بنكية",
    heroHighlight: "لكل مؤسسة",
    heroSubtitle: "بنية تحتية مالية مصممة خصيصاً للبنوك التجارية وشركات الصرافة وشركات الحوالات ومؤسسات التمويل الأصغر.",
    exploreBelow: "استكشف الحلول",
    
    coreBankingTitle: "النظام البنكي الأساسي",
    coreBankingDesc: "منصة بنكية أساسية حديثة وكاملة مصممة للمؤسسات المالية الرقمية. معالجة فورية ودعم متعدد العملات وإمكانيات تكامل سلسة.",
    coreBankingFeatures: [
      "معالجة المعاملات الفورية",
      "إدارة الحسابات متعددة العملات",
      "إنشاء وإدارة القروض",
      "منتجات الودائع والادخار",
      "رؤية 360° للعميل",
      "أتمتة التقارير التنظيمية"
    ],
    
    exchangeTitle: "الصرافة والخزينة",
    exchangeDesc: "حل شامل لإدارة الصرف الأجنبي والخزينة. عمليات صرف آلية وأسعار فورية وإدارة المراكز وتحليلات الخزينة.",
    exchangeFeatures: [
      "تكامل أسعار الصرف الفورية",
      "إدارة المراكز والتعرض",
      "التعامل متعدد العملات",
      "لوحة تحليلات الخزينة",
      "الامتثال ومسارات التدقيق",
      "أدوات إدارة المخاطر"
    ],
    
    remittanceTitle: "منصة الحوالات",
    remittanceDesc: "بنية تحتية عالمية لتحويل الأموال مع شبكة واسعة من البنوك المراسلة. تكامل SWIFT و SEPA ومسارات الدفع المحلية.",
    remittanceFeatures: [
      "شبكة صرف عالمية",
      "تكامل SWIFT و SEPA",
      "البنوك المراسلة",
      "تتبع فوري",
      "فحص الامتثال",
      "قنوات الجوال والوكلاء"
    ],
    
    microfinanceTitle: "حزمة التمويل الأصغر",
    microfinanceDesc: "منصة متخصصة للشمول المالي. إدارة القروض ومنتجات الادخار وإمكانيات المحفظة الإلكترونية للمجتمعات المحرومة.",
    microfinanceFeatures: [
      "إدارة الإقراض الجماعي",
      "الادخار والودائع الثابتة",
      "تكامل المحفظة الإلكترونية",
      "شبكة الوكلاء البنكيين",
      "نماذج التصنيف الائتماني",
      "أدوات الثقافة المالية"
    ],
    
    ctaTitle: "مستعد للبدء؟",
    ctaSubtitle: "احجز عرضاً توضيحياً مخصصاً مع خبراء التقنية البنكية لدينا.",
    ctaButton: "اطلب عرضاً",
    
    learnMore: "اعرف المزيد",
    keyFeatures: "الميزات الرئيسية",
  },
};

const seoMeta = {
  en: {
    title: "Banking Solutions | FinCore - Core Banking Platform",
    description: "Explore FinCore's comprehensive banking solutions: Core Banking, Exchange & Treasury, Remittance Platform, and Microfinance Suite.",
  },
  ar: {
    title: "الحلول البنكية | فين كور - منصة بنكية أساسية",
    description: "استكشف حلول فين كور البنكية الشاملة: النظام البنكي الأساسي والصرافة والخزينة ومنصة الحوالات وحزمة التمويل الأصغر.",
  },
};

export default function FCSolutionsPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const currentSeo = seoMeta[language as keyof typeof seoMeta] || seoMeta.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  useEffect(() => {
    document.title = currentSeo.title;
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [currentSeo.title, language, dir]);

  const solutions = [
    {
      icon: Landmark,
      title: t.coreBankingTitle,
      desc: t.coreBankingDesc,
      features: t.coreBankingFeatures,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: RefreshCcw,
      title: t.exchangeTitle,
      desc: t.exchangeDesc,
      features: t.exchangeFeatures,
      color: "from-teal-500 to-emerald-600",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
    },
    {
      icon: Send,
      title: t.remittanceTitle,
      desc: t.remittanceDesc,
      features: t.remittanceFeatures,
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
    },
    {
      icon: PiggyBank,
      title: t.microfinanceTitle,
      desc: t.microfinanceDesc,
      features: t.microfinanceFeatures,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white" dir={dir}>
      <FCHeader />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[40vh] flex items-center bg-gradient-to-br from-white via-slate-50 to-emerald-50/30 dark:from-slate-950 dark:via-[#0d1f3c] dark:to-slate-950">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 rounded-full blur-3xl bg-emerald-500/5 dark:bg-emerald-500/10" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full blur-3xl bg-teal-500/5 dark:bg-teal-500/10" />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Button 
              variant="outline" 
              className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 backdrop-blur-sm hover:scale-105 transition-all"
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.exploreBelow}
              <ArrowIcon className="w-4 h-4 ms-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {solution.desc}
                  </p>
                  
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                    {t.keyFeatures}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0D9488] flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/fincore/contact">
                    <Button className="bg-[#0A1628] dark:bg-[#0D9488] text-white dark:text-[#0A1628] hover:bg-[#0A1628]/90 dark:hover:bg-[#0D9488]/90 px-6 py-3 rounded-xl font-medium">
                      {t.learnMore}
                      <ArrowIcon className="w-4 h-4 ms-2" />
                    </Button>
                  </Link>
                </div>
                
                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className={`${solution.bgColor} rounded-3xl p-8 lg:p-12`}>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                          <solution.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-slate-900 dark:text-white">{solution.title}</span>
                      </div>
                      
                      {/* Mock Dashboard */}
                      <div className="space-y-4">
                        <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full w-3/4"></div>
                        <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full w-1/2"></div>
                        <div className="grid grid-cols-3 gap-3 mt-6">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                              <div className="h-8 bg-slate-200 dark:bg-slate-600 rounded mb-2"></div>
                              <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded"></div>
                            </div>
                          ))}
                        </div>
                        <div className="h-32 bg-gradient-to-t from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-xl mt-4 flex items-end justify-around p-4">
                          {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                            <div 
                              key={i} 
                              className={`w-4 bg-gradient-to-t ${solution.color} rounded-t`} 
                              style={{ height: `${h}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              <ArrowIcon className="w-5 h-5 ms-2" />
            </Button>
          </Link>
        </div>
      </section>
      
      <FCFooter />
      <ScrollToTop />
    </div>
  );
}
