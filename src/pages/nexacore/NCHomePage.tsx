import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { NCHeader } from "@/components/nexacore/NCHeader";
import { NCFooter } from "@/components/nexacore/NCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  ArrowRight, ArrowLeft, ShoppingCart, Package, 
  Warehouse, Calculator, BarChart3, Shield, Globe, 
  Zap, Building2, Users, CheckCircle2, 
  Brain, Sparkles, TrendingUp, Clock, 
  Target, Check, X,
  DollarSign, Briefcase,
  Play, MessageSquare, Bot, Wifi, Radio,
  ScanLine, Tags, MapPin, Layers, Gauge,
  LineChart, Lightbulb, PieChart, AlertTriangle,
  RefreshCw, Network, Boxes
} from "lucide-react";
import { Card } from "@/components/ui/card";

const translations = {
  en: {
    // Hero Section
    heroTitle: "Precision in",
    heroTitleHighlight: "Every Operation",
    heroSubtitle: "The Irish-Engineered ERP for Business Leaders. Seamlessly manage Sales, Inventory, Accounting, and Operations from one powerful hub.",
    requestDemo: "Get Started",
    watchDemo: "Watch Demo",
    badge: "🇮🇪 Irish-European Technology",
    tagline: "Powering Smart Business Decisions Worldwide",
    noCreditCard: "EU-Grade Security",
    quickSetup: "ISO 27001 Certified",
    support247: "24/7 Global Support",

    // Stats
    companies: "Companies",
    transactions: "Transactions",
    countries: "Countries",
    uptime: "Uptime",

    // Features Section
    featuresTitle: "Enterprise Modules",
    featuresSubtitle: "Four powerful pillars for comprehensive business management",
    exploreAll: "Explore All Features",

    salesTitle: "Sales Management",
    salesDesc: "Complete sales cycle management from quotations to invoices with real-time tracking and analytics.",
    salesStat: "Full Control",

    purchasesTitle: "Purchase Management",
    purchasesDesc: "Streamline procurement with automated purchase orders, vendor management, and cost optimization.",
    purchasesStat: "Smart Procurement",

    accountingTitle: "Integrated Accounting",
    accountingDesc: "Irish-European financial precision with multi-currency support, automated reconciliation, and VAT compliance.",
    accountingStat: "Multi-Currency",

    inventoryTitle: "Inventory & Warehouse",
    inventoryDesc: "Real-time inventory tracking across multiple warehouses with batch and serial number management.",
    inventoryStat: "Multi-Warehouse",

    crmTitle: "Customer Relations",
    crmDesc: "Build lasting customer relationships with integrated CRM, support tickets, and communication tools.",
    crmStat: "360° View",

    hrTitle: "Human Resources",
    hrDesc: "Complete HR management from recruitment to payroll with attendance and performance tracking.",
    hrStat: "Full HR Suite",

    aiTitle: "NEXA AI Intelligence",
    aiDesc: "Leverage artificial intelligence for predictive analytics, smart recommendations, and process automation.",
    aiStat: "AI Powered",

    branchesTitle: "Multi-Branch",
    branchesDesc: "Seamlessly manage multiple branches, companies, and locations with centralized control.",
    branchesStat: "Unlimited Scale",

    // Why Choose Section
    whyTitle: "Why Leaders Choose NexaCore",
    whySubtitle: "Over Traditional Chaos",

    why1Title: "One Unified Platform",
    why1Desc: "Everything in one place - no app switching. Replace 5+ disconnected systems.",
    why2Title: "90% Faster Operations",
    why2Desc: "Automation dramatically reducing time and effort in all processes.",
    why3Title: "Massive Cost Reduction",
    why3Desc: "Save 3-4 employee salaries with fast ROI - system pays for itself.",
    why4Title: "Enterprise Security",
    why4Desc: "Bank-grade encryption and compliance with EU data protection standards.",
    why5Title: "99.9% Data Accuracy",
    why5Desc: "Eliminate human errors with automated workflows and validations.",
    why6Title: "6 Months to ROI",
    why6Desc: "Quick implementation with measurable returns in under 6 months.",

    // Stats Section
    stat1: "Customer Satisfaction",
    stat2: "Average Implementation",
    stat3: "Average ROI",
    stat4: "Support Availability",
    weeks: "Weeks",

    // Pricing Section
    pricingTitle: "Transparent Pricing",
    pricingSubtitle: "The System That Pays for Itself",
    perMonth: "/month",
    perYear: "/year",
    mostPopular: "Most Popular",
    getStarted: "Get Started",
    contactSales: "Contact Sales",
    customPrice: "Custom",

    starterPlan: "Growth",
    starterDesc: "For growing businesses",
    professionalPlan: "Professional",
    professionalDesc: "For established businesses",
    enterprisePlan: "Enterprise",
    enterpriseDesc: "For large organizations",

    // Plan Features
    users10: "Up to 10 Users",
    users50: "Up to 50 Users",
    usersUnlimited: "Unlimited Users",
    coreModules: "Core Modules (Sales, Purchases, Inventory)",
    allModules: "All Modules + Advanced Features",
    allModulesAI: "All Modules + NEXA AI",
    branches3: "Up to 3 Branches",
    branches10: "Up to 10 Branches",
    branchesUnlimited: "Unlimited Branches",
    emailSupport: "Email & Chat Support",
    prioritySupport: "Priority Phone Support",
    support24: "24/7 Dedicated Support",
    storage25: "25GB Storage",
    storage100: "100GB Storage",
    storageUnlimited: "Unlimited Storage",
    basicReports: "Standard Reports",
    advancedReports: "Advanced Analytics",
    customReports: "Custom Reports + BI Tools",
    apiAccess: "API Access",
    multiCurrency: "Multi-Currency",
    multiCompany: "Multi-Company",
    dedicatedManager: "Dedicated Account Manager",
    onPremise: "On-Premise Option",
    training: "Team Training Included",
    slaGuarantee: "99.9% SLA Guarantee",
    customIntegrations: "Custom Integrations",

    // ROI Stats
    salariesSaved: "Employee Salaries Saved",
    processReduction: "Process Time Reduction",
    inventoryAccuracy: "Inventory Accuracy",
    monthsToRoi: "Months to ROI",

    // CTA Section
    ctaTitle: "Ready to Transform Your Business?",
    ctaSubtitle: "Through automation, save 3-4 employee costs and prevent operational losses - recover your investment in months.",
    ctaButton: "Calculate Your Savings",
    benefit1: "14-day free trial",
    benefit2: "No credit card required",
    benefit3: "Full support included",

    // Comparison
    withoutNexacore: "The Manual Burden",
    withNexacore: "The NexaCore Advantage",
    comp1Without: "Manual entry in 5+ apps daily",
    comp1With: "One unified platform for everything",
    comp2Without: "Excel fatigue and human errors",
    comp2With: "Automated workflows and accuracy",
    comp3Without: "Delayed financial reports",
    comp3With: "Real-time financial insights",
    comp4Without: "High labor costs for data entry",
    comp4With: "Save 3-4 employee salaries",
    comp5Without: "10x human effort",
    comp5With: "90% faster operations",
    comp6Without: "Data silos across departments",
    comp6With: "Complete data integration",
    theTraditionalWay: "The Traditional Way",
    theSmartWay: "The Smart Way",

    // ROI Section
    roiTitle: "The System That Pays for Itself",
    roiSubtitle: "Through automation, save 3-4 employee costs and prevent operational losses",
    productivityIncrease: "Productivity",
    costReduction: "Cost Reduction",
    timesSaved: "Time Saved",
    accuracy: "Data Accuracy",
    annualSavings: "Average Annual Savings",
    basedOnStudies: "Based on real customer studies",

    // How ROI Works
    howRoiWorks: "How Does ROI Work?",
    roi1: "Reduce data entry staff from 4 to 1",
    roi2: "Avoid losses from manual errors",
    roi3: "Prevent selling unavailable products",
    roi4: "Increase customer satisfaction = more sales",
  },
  ar: {
    // Hero Section
    heroTitle: "دقة في",
    heroTitleHighlight: "كل عملية",
    heroSubtitle: "نظام ERP أيرلندي الهندسة لقادة الأعمال. إدارة سلسة للمبيعات والمخزون والمحاسبة والعمليات من مركز واحد قوي.",
    requestDemo: "ابدأ الآن",
    watchDemo: "شاهد العرض",
    badge: "🇮🇪 تقنية أيرلندية-أوروبية",
    tagline: "نقود قرارات الأعمال الذكية حول العالم",
    noCreditCard: "أمان بمعايير أوروبية",
    quickSetup: "معتمد ISO 27001",
    support247: "دعم عالمي 24/7",

    // Stats
    companies: "شركة",
    transactions: "معاملة",
    countries: "دولة",
    uptime: "وقت التشغيل",

    // Features Section
    featuresTitle: "وحدات المؤسسات",
    featuresSubtitle: "أربع ركائز قوية لإدارة أعمال شاملة",
    exploreAll: "استكشف جميع المميزات",

    salesTitle: "إدارة المبيعات",
    salesDesc: "إدارة كاملة لدورة المبيعات من عروض الأسعار إلى الفواتير مع التتبع والتحليلات في الوقت الفعلي.",
    salesStat: "تحكم كامل",

    purchasesTitle: "إدارة المشتريات",
    purchasesDesc: "تبسيط المشتريات مع أوامر الشراء الآلية وإدارة الموردين وتحسين التكاليف.",
    purchasesStat: "مشتريات ذكية",

    accountingTitle: "محاسبة متكاملة",
    accountingDesc: "دقة مالية أيرلندية-أوروبية مع دعم متعدد العملات والتسوية الآلية والامتثال لـ VAT.",
    accountingStat: "متعدد العملات",

    inventoryTitle: "المخازن والمستودعات",
    inventoryDesc: "تتبع المخزون في الوقت الفعلي عبر مستودعات متعددة مع إدارة الدفعات والأرقام التسلسلية.",
    inventoryStat: "مستودعات متعددة",

    crmTitle: "إدارة العملاء",
    crmDesc: "بناء علاقات عملاء دائمة مع نظام CRM متكامل وتذاكر الدعم وأدوات التواصل.",
    crmStat: "رؤية 360°",

    hrTitle: "الموارد البشرية",
    hrDesc: "إدارة كاملة للموارد البشرية من التوظيف إلى الرواتب مع تتبع الحضور والأداء.",
    hrStat: "جناح HR كامل",

    aiTitle: "ذكاء NEXA AI",
    aiDesc: "استفد من الذكاء الاصطناعي للتحليلات التنبؤية والتوصيات الذكية وأتمتة العمليات.",
    aiStat: "مدعوم بـ AI",

    branchesTitle: "الفروع المتعددة",
    branchesDesc: "إدارة سلسة لفروع وشركات ومواقع متعددة مع تحكم مركزي.",
    branchesStat: "توسع غير محدود",

    // Why Choose Section
    whyTitle: "لماذا يختار القادة NexaCore",
    whySubtitle: "بدلاً من الفوضى التقليدية",

    why1Title: "منصة موحدة واحدة",
    why1Desc: "كل شيء في مكان واحد - بدون تبديل بين التطبيقات. استبدل 5+ أنظمة منفصلة.",
    why2Title: "عمليات أسرع 90%",
    why2Desc: "الأتمتة تقلل الوقت والجهد بشكل كبير في جميع العمليات.",
    why3Title: "تقليل كبير في التكاليف",
    why3Desc: "وفر 3-4 رواتب موظفين مع ROI سريع - النظام يدفع ثمنه بنفسه.",
    why4Title: "أمان على مستوى المؤسسات",
    why4Desc: "تشفير بمستوى البنوك والامتثال لمعايير حماية البيانات الأوروبية.",
    why5Title: "دقة بيانات 99.9%",
    why5Desc: "إزالة الأخطاء البشرية مع سير العمل والتحقق الآلي.",
    why6Title: "6 أشهر لاسترداد الاستثمار",
    why6Desc: "تنفيذ سريع مع عوائد قابلة للقياس في أقل من 6 أشهر.",

    // Stats Section
    stat1: "رضا العملاء",
    stat2: "متوسط التنفيذ",
    stat3: "متوسط العائد",
    stat4: "توفر الدعم",
    weeks: "أسبوع",

    // Pricing Section
    pricingTitle: "أسعار شفافة",
    pricingSubtitle: "النظام الذي يدفع ثمنه بنفسه",
    perMonth: "/شهر",
    perYear: "/سنة",
    mostPopular: "الأكثر شعبية",
    getStarted: "ابدأ الآن",
    contactSales: "تواصل معنا",
    customPrice: "مخصص",

    starterPlan: "النمو",
    starterDesc: "للأعمال النامية",
    professionalPlan: "المحترف",
    professionalDesc: "للأعمال الراسخة",
    enterprisePlan: "المؤسسات",
    enterpriseDesc: "للمنظمات الكبيرة",

    // Plan Features
    users10: "حتى 10 مستخدمين",
    users50: "حتى 50 مستخدم",
    usersUnlimited: "مستخدمين غير محدود",
    coreModules: "الوحدات الأساسية (المبيعات، المشتريات، المخزون)",
    allModules: "جميع الوحدات + مميزات متقدمة",
    allModulesAI: "جميع الوحدات + NEXA AI",
    branches3: "حتى 3 فروع",
    branches10: "حتى 10 فروع",
    branchesUnlimited: "فروع غير محدودة",
    emailSupport: "دعم بالبريد والدردشة",
    prioritySupport: "دعم هاتفي أولوية",
    support24: "دعم مخصص 24/7",
    storage25: "25 جيجا تخزين",
    storage100: "100 جيجا تخزين",
    storageUnlimited: "تخزين غير محدود",
    basicReports: "تقارير قياسية",
    advancedReports: "تحليلات متقدمة",
    customReports: "تقارير مخصصة + أدوات BI",
    apiAccess: "وصول API",
    multiCurrency: "متعدد العملات",
    multiCompany: "متعدد الشركات",
    dedicatedManager: "مدير حساب مخصص",
    onPremise: "خيار التثبيت المحلي",
    training: "تدريب الفريق متضمن",
    slaGuarantee: "ضمان SLA 99.9%",
    customIntegrations: "تكاملات مخصصة",

    // ROI Stats
    salariesSaved: "رواتب موظفين يمكن توفيرها",
    processReduction: "تقليل وقت العمليات",
    inventoryAccuracy: "دقة المخزون",
    monthsToRoi: "أشهر لاسترداد الاستثمار",

    // CTA Section
    ctaTitle: "مستعد لتحويل أعمالك؟",
    ctaSubtitle: "من خلال الأتمتة، وفر تكاليف 3-4 موظفين وتجنب خسائر العمليات - استرد استثمارك في أشهر.",
    ctaButton: "احسب توفيرك",
    benefit1: "14 يوم تجربة مجانية",
    benefit2: "بدون بطاقة ائتمان",
    benefit3: "دعم كامل متضمن",

    // Comparison
    withoutNexacore: "العبء اليدوي",
    withNexacore: "ميزة NexaCore",
    comp1Without: "إدخال يدوي في 5+ تطبيقات يومياً",
    comp1With: "منصة موحدة واحدة لكل شيء",
    comp2Without: "إرهاق Excel والأخطاء البشرية",
    comp2With: "سير عمل آلي ودقة عالية",
    comp3Without: "تقارير مالية متأخرة",
    comp3With: "رؤى مالية في الوقت الفعلي",
    comp4Without: "تكاليف عمالة عالية لإدخال البيانات",
    comp4With: "وفر 3-4 رواتب موظفين",
    comp5Without: "10x مجهود بشري",
    comp5With: "عمليات أسرع 90%",
    comp6Without: "عزل البيانات بين الأقسام",
    comp6With: "تكامل كامل للبيانات",
    theTraditionalWay: "الطريقة التقليدية",
    theSmartWay: "الطريقة الذكية",

    // ROI Section
    roiTitle: "النظام الذي يدفع ثمنه بنفسه",
    roiSubtitle: "من خلال الأتمتة، وفر تكاليف 3-4 موظفين وتجنب خسائر العمليات",
    productivityIncrease: "الإنتاجية",
    costReduction: "تقليل التكاليف",
    timesSaved: "توفير الوقت",
    accuracy: "دقة البيانات",
    annualSavings: "متوسط التوفير السنوي",
    basedOnStudies: "بناءً على دراسات عملاء حقيقيين",

    // How ROI Works
    howRoiWorks: "كيف يعمل ROI؟",
    roi1: "تقليل موظفي إدخال البيانات من 4 إلى 1",
    roi2: "تجنب الخسائر من الأخطاء اليدوية",
    roi3: "منع بيع منتجات غير متوفرة",
    roi4: "زيادة رضا العملاء = مبيعات أكثر",
  },
};

export default function NCHomePage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const features = [
    { icon: ShoppingCart, title: t.salesTitle, desc: t.salesDesc, stat: t.salesStat, color: "blue" },
    { icon: Package, title: t.purchasesTitle, desc: t.purchasesDesc, stat: t.purchasesStat, color: "emerald" },
    { icon: Calculator, title: t.accountingTitle, desc: t.accountingDesc, stat: t.accountingStat, color: "violet" },
    { icon: Warehouse, title: t.inventoryTitle, desc: t.inventoryDesc, stat: t.inventoryStat, color: "amber" },
    { icon: Users, title: t.crmTitle, desc: t.crmDesc, stat: t.crmStat, color: "pink" },
    { icon: Briefcase, title: t.hrTitle, desc: t.hrDesc, stat: t.hrStat, color: "indigo" },
    { icon: Brain, title: t.aiTitle, desc: t.aiDesc, stat: t.aiStat, color: "cyan" },
    { icon: Building2, title: t.branchesTitle, desc: t.branchesDesc, stat: t.branchesStat, color: "orange" },
  ];

  const whyReasons = [
    { icon: Globe, title: t.why1Title, desc: t.why1Desc },
    { icon: Zap, title: t.why2Title, desc: t.why2Desc },
    { icon: DollarSign, title: t.why3Title, desc: t.why3Desc },
    { icon: Shield, title: t.why4Title, desc: t.why4Desc },
    { icon: Target, title: t.why5Title, desc: t.why5Desc },
    { icon: Clock, title: t.why6Title, desc: t.why6Desc },
  ];

  const comparisons = [
    { without: t.comp1Without, with: t.comp1With },
    { without: t.comp2Without, with: t.comp2With },
    { without: t.comp3Without, with: t.comp3With },
    { without: t.comp4Without, with: t.comp4With },
    { without: t.comp5Without, with: t.comp5With },
    { without: t.comp6Without, with: t.comp6With },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" dir={isRTL ? "rtl" : "ltr"}>
      <NCHeader />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/50 to-transparent dark:from-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-100/50 to-transparent dark:from-indigo-900/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-start"
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
                  <Globe className="w-4 h-4" />
                  {t.badge}
                </div>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
              >
                {t.heroTitle}{" "}
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                  {t.heroTitleHighlight}
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                {t.heroSubtitle}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/nexacore/register">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-6 text-lg shadow-xl shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-300 rounded-xl">
                    {t.requestDemo}
                    <Arrow className="w-5 h-5 ms-2" />
                  </Button>
                </Link>
                <Link to="/nexacore/features">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 text-lg border-2 border-slate-300 dark:border-slate-600 rounded-xl">
                    <Play className="w-5 h-5 me-2 fill-blue-500 text-blue-500" />
                    {t.watchDemo}
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-500" />
                  {t.noCreditCard}
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  {t.quickSetup}
                </span>
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-500" />
                  {t.support247}
                </span>
              </motion.div>
            </motion.div>

            {/* Right - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white">NexaCore Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$125K</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Revenue</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">1,234</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Orders</div>
                  </div>
                  <div className="bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/30 dark:to-violet-800/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">98.5%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Accuracy</div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">+24%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Growth</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-32 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl flex items-end justify-around p-4">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="w-6 bg-gradient-to-t from-blue-500 to-indigo-400 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-3 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">+45%</div>
                    <div className="text-xs text-slate-500">Efficiency</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-3 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">AI Active</div>
                    <div className="text-xs text-slate-500">Real-time</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "10,000+", label: t.companies, icon: Building2 },
              { value: "50M+", label: t.transactions, icon: BarChart3 },
              { value: "45+", label: t.countries, icon: Globe },
              { value: "99.99%", label: t.uptime, icon: Clock },
            ].map((stat, i) => (
              <div key={i} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-slate-200/50 dark:border-slate-700/50">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6">
              <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Core Modules</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              {t.featuresTitle}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.featuresSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-2xl hover:shadow-slate-200 dark:hover:shadow-slate-900/50 transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 group bg-white dark:bg-slate-800 rounded-2xl">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {feature.desc}
                  </p>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full">
                    {feature.stat}
                  </span>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/nexacore/features">
              <Button variant="outline" size="lg" className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 rounded-xl">
                {t.exploreAll}
                <Arrow className="w-4 h-4 ms-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NEXA AI Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100/30 dark:bg-cyan-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-sm font-semibold mb-6">
              <Brain className="w-4 h-4" />
              {isRTL ? "الذكاء الاصطناعي" : "Artificial Intelligence"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {isRTL ? "NEXA AI — مساعدك الذكي للأعمال" : "NEXA AI — Your Intelligent Business Assistant"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {isRTL 
                ? "استغل قوة الذكاء الاصطناعي لتحويل كل جانب من عمليات أعمالك"
                : "Harness the power of artificial intelligence to transform every aspect of your business operations"}
            </p>
          </motion.div>

          {/* AI Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    <Bot className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {isRTL ? "قوة الذكاء الاصطناعي في قلب أعمالك" : "AI Power at Your Business Core"}
                  </h3>
                  <p className="text-white/80 text-lg mb-6">
                    {isRTL 
                      ? "NEXA AI ليس مجرد ميزة — إنه شريكك الذكي للأعمال على مدار الساعة الذي يتعلم ويتكيف ويحسّن عملياتك باستمرار."
                      : "NEXA AI is not just another feature — it's your 24/7 intelligent business partner that learns, adapts, and optimizes your operations continuously."}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1.5 rounded-full bg-white/20 text-sm">
                      {isRTL ? "تحليلات تنبؤية" : "Predictive Analytics"}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-white/20 text-sm">
                      {isRTL ? "معالجة اللغة الطبيعية" : "Natural Language Processing"}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-white/20 text-sm">
                      {isRTL ? "تعلم آلي" : "Machine Learning"}
                    </span>
                  </div>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full bg-white/10 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-white/10 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                          <Sparkles className="w-16 h-16" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* AI Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: MessageSquare, 
                title: isRTL ? "وكيل AI تحادثي" : "Conversational AI Agent",
                desc: isRTL 
                  ? "اطرح أسئلة بلغة طبيعية. احصل على إجابات فورية عن المبيعات والمخزون والماليات."
                  : "Ask questions in natural language. Get instant answers about sales, inventory, finances, and more."
              },
              { 
                icon: LineChart, 
                title: isRTL ? "تحليلات تنبؤية" : "Predictive Analytics",
                desc: isRTL 
                  ? "خوارزميات AI تحلل البيانات التاريخية للتنبؤ بالطلب والتدفق النقدي."
                  : "AI algorithms analyze historical data to predict demand, cash flow, and trends."
              },
              { 
                icon: Lightbulb, 
                title: isRTL ? "توصيات ذكية" : "Smart Recommendations",
                desc: isRTL 
                  ? "اقتراحات ذكية للتسعير ومستويات المخزون واستراتيجيات تفاعل العملاء."
                  : "Intelligent suggestions for pricing, inventory levels, and customer engagement strategies."
              },
              { 
                icon: RefreshCw, 
                title: isRTL ? "دعم قرارات آلي" : "Automated Decision Support",
                desc: isRTL 
                  ? "من نقاط إعادة الطلب إلى سير عمل الموافقات، NEXA AI يتعامل مع القرارات الروتينية."
                  : "From automated reorder points to smart approval workflows, NEXA AI handles routine decisions."
              },
              { 
                icon: AlertTriangle, 
                title: isRTL ? "كشف الشذوذ" : "Anomaly Detection",
                desc: isRTL 
                  ? "تحديد فوري للأنماط غير العادية — محاولات الاحتيال، تناقضات المخزون."
                  : "Instantly identify unusual patterns — fraud attempts, inventory discrepancies, or bottlenecks."
              },
              { 
                icon: PieChart, 
                title: isRTL ? "تقارير بلغة طبيعية" : "Natural Language Reports",
                desc: isRTL 
                  ? "أنشئ تقارير أعمال شاملة بمجرد السؤال. رؤى جاهزة للتنفيذيين فوراً."
                  : "Generate comprehensive reports by simply asking. Executive-ready insights instantly."
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-cyan-200 dark:hover:border-cyan-800 transition-all duration-300 bg-white dark:bg-slate-800 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/nexacore/solutions">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/25">
                {isRTL ? "اكتشف قدرات NEXA AI" : "Explore NEXA AI Capabilities"}
                <Arrow className="w-5 h-5 ms-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* RFID Section */}
      <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 dark:bg-orange-900/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-sm font-semibold mb-6">
              <Radio className="w-4 h-4" />
              {isRTL ? "تقنية RFID" : "RFID Technology"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {isRTL ? "ثورة المخزون بتقنية RFID" : "RFID-Powered Inventory Revolution"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {isRTL 
                ? "رؤية في الوقت الفعلي عبر كل مستودع ورف وشحنة"
                : "Real-time visibility across every warehouse, shelf, and shipment"}
            </p>
          </motion.div>

          {/* RFID Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    <Wifi className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {isRTL ? "تحكم فوري في المخزون" : "Instant Inventory Control"}
                  </h3>
                  <p className="text-white/80 text-lg mb-6">
                    {isRTL 
                      ? "حوّل عمليات المستودعات مع تقنية RFID على مستوى المؤسسات. تتبع آلاف الأصناف في وقت واحد بدقة 99.9%."
                      : "Transform your warehouse operations with enterprise-grade RFID technology. Track thousands of items simultaneously with 99.9% accuracy."}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1.5 rounded-full bg-white/20 text-sm flex items-center gap-1">
                      <Gauge className="w-3.5 h-3.5" />
                      99.9% {isRTL ? "دقة" : "Accuracy"}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-white/20 text-sm flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {isRTL ? "في الوقت الفعلي" : "Real-time"}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-white/20 text-sm flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5" />
                      {isRTL ? "مستودعات متعددة" : "Multi-warehouse"}
                    </span>
                  </div>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-3xl bg-white/10 flex items-center justify-center border-4 border-dashed border-white/30">
                      <div className="text-center">
                        <ScanLine className="w-16 h-16 mx-auto mb-2" />
                        <div className="text-3xl font-black">1000+</div>
                        <div className="text-white/80 text-sm">{isRTL ? "صنف/ثانية" : "items/sec"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* RFID Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: ScanLine, 
                title: isRTL ? "جرد فوري للمخزون" : "Instant Inventory Counts",
                desc: isRTL 
                  ? "امسح مستودعاً كاملاً في دقائق، وليس أيام. قارئات RFID تلتقط آلاف الأصناف."
                  : "Scan an entire warehouse in minutes, not days. RFID readers capture thousands of items."
              },
              { 
                icon: Boxes, 
                title: isRTL ? "استلام آلي" : "Automated Receiving",
                desc: isRTL 
                  ? "الشحنات تُسجل تلقائياً عند مرورها عبر بوابات RFID. بدون مسح يدوي."
                  : "Shipments are automatically recorded as they pass through RFID gates. No manual scanning."
              },
              { 
                icon: MapPin, 
                title: isRTL ? "تتبع الموقع" : "Location Tracking",
                desc: isRTL 
                  ? "اعرف بالضبط أين كل صنف في أي لحظة. التتبع حسب المنطقة يساعد الموظفين."
                  : "Know exactly where every item is at any moment. Zone-based tracking helps staff."
              },
              { 
                icon: Shield, 
                title: isRTL ? "منع السرقة" : "Theft Prevention",
                desc: isRTL 
                  ? "تنبيهات فورية عندما تغادر الأصناف المناطق المخصصة. قلل الفاقد بنسبة 70%."
                  : "Real-time alerts when items leave designated zones. Reduce shrinkage by up to 70%."
              },
              { 
                icon: Tags, 
                title: isRTL ? "تتبع الدفعات والصلاحية" : "Batch & Expiry Tracking",
                desc: isRTL 
                  ? "شرائح RFID مرتبطة بأرقام الدفعات وتواريخ الصلاحية تضمن امتثال FIFO."
                  : "RFID tags linked to batch numbers and expiry dates ensure FIFO compliance."
              },
              { 
                icon: Network, 
                title: isRTL ? "رؤية سلسلة التوريد" : "Supply Chain Visibility",
                desc: isRTL 
                  ? "تتبع الأصناف من المصنع إلى العميل. توثيق كامل لسلسلة الحفظ."
                  : "Track items from manufacturer to customer. Full chain-of-custody documentation."
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-amber-200 dark:hover:border-amber-800 transition-all duration-300 bg-white dark:bg-slate-800 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/nexacore/solutions">
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-amber-500/25">
                {isRTL ? "اكتشف قدرات RFID" : "Explore RFID Capabilities"}
                <Arrow className="w-5 h-5 ms-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.whyTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.whySubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: "98%", label: t.stat1 },
              { value: "2", label: t.stat2, suffix: ` ${t.weeks}` },
              { value: "300%", label: t.stat3 },
              { value: "24/7", label: t.stat4 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}{stat.suffix || ""}
                </div>
                <div className="text-slate-600 dark:text-slate-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.whyTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.whySubtitle}
            </p>
          </motion.div>

          {/* Comparison Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Manual Burden Side */}
            <Card className="p-8 border-2 border-red-100 dark:border-red-900/30 bg-gradient-to-br from-red-50/50 to-white dark:from-red-900/10 dark:to-slate-800 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 end-0 w-32 h-32 bg-red-100/50 dark:bg-red-900/20 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                    <X className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-700 dark:text-red-400">
                      {t.withoutNexacore}
                    </h3>
                    <p className="text-sm text-red-500 dark:text-red-400/70">
                      {t.theTraditionalWay}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {comparisons.map((comp, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl border border-red-100 dark:border-red-900/30">
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">{comp.without}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* NexaCore Advantage Side */}
            <Card className="p-8 border-2 border-blue-100 dark:border-blue-900/30 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/10 dark:to-slate-800 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 end-0 w-32 h-32 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">
                      {t.withNexacore}
                    </h3>
                    <p className="text-sm text-blue-500 dark:text-blue-400/70">
                      {t.theSmartWay}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {comparisons.map((comp, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl border border-blue-100 dark:border-blue-900/30">
                      <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">{comp.with}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
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
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/15 border-2 border-white/30 mb-8 shadow-lg">
              <DollarSign className="w-6 h-6 text-blue-300" />
              <span className="text-lg font-bold text-blue-100">
                💰 {t.pricingTitle}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
              {t.roiTitle}
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              {t.roiSubtitle}
            </p>
          </motion.div>

          {/* ROI Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { value: "3-4", label: t.salariesSaved, icon: Users },
              { value: "90%", label: t.processReduction, icon: Clock },
              { value: "99.9%", label: t.inventoryAccuracy, icon: Target },
              { value: "6", label: t.monthsToRoi, icon: TrendingUp },
            ].map((stat, index) => (
              <Card key={index} className="p-8 bg-white/15 backdrop-blur-xl border-white/30 rounded-3xl text-center group hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-400/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-10 h-10 text-blue-200" />
                </div>
                <p className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                  {stat.value}
                </p>
                <p className="text-lg font-semibold text-blue-100">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Growth Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{t.starterPlan}</h3>
                <p className="text-blue-200 mb-6">{t.starterDesc}</p>
                <div className="mb-6">
                  <span className="text-lg text-blue-300 line-through me-2">$50</span>
                  <span className="text-5xl font-black text-white">$25</span>
                  <span className="text-blue-200">{t.perMonth}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[t.users10, t.coreModules, t.branches3, t.emailSupport, t.storage25, t.basicReports].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-blue-100">
                      <Check className="w-4 h-4 text-blue-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/nexacore/register">
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    {t.getStarted}
                  </Button>
                </Link>
              </Card>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full p-8 bg-white rounded-3xl shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-400 text-amber-900 px-4 py-1 rounded-full text-sm font-semibold">
                  {t.mostPopular}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.professionalPlan}</h3>
                <p className="text-slate-600 mb-6">{t.professionalDesc}</p>
                <div className="mb-6">
                  <span className="text-lg text-slate-400 line-through me-2">$199</span>
                  <span className="text-5xl font-black text-slate-900">$99</span>
                  <span className="text-slate-500">{t.perMonth}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[t.users50, t.allModules, t.branches10, t.prioritySupport, t.storage100, t.advancedReports, t.apiAccess, t.multiCurrency, t.training].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-blue-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/nexacore/register">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white">
                    {t.getStarted}
                    <Arrow className="w-4 h-4 ms-2" />
                  </Button>
                </Link>
              </Card>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full p-8 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{t.enterprisePlan}</h3>
                <p className="text-blue-200 mb-6">{t.enterpriseDesc}</p>
                <div className="mb-6">
                  <span className="text-lg text-blue-300 line-through me-2">$499</span>
                  <span className="text-5xl font-black text-white">$249</span>
                  <span className="text-blue-200">{t.perMonth}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[t.usersUnlimited, t.allModulesAI, t.branchesUnlimited, t.support24, t.storageUnlimited, t.customReports, t.multiCompany, t.dedicatedManager, t.slaGuarantee, t.customIntegrations].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-blue-100">
                      <Check className="w-4 h-4 text-blue-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/nexacore/register">
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    {t.getStarted}
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>

          {/* ROI Calculator Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="p-10 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {t.howRoiWorks}
                  </h3>
                  <ul className="space-y-5">
                    {[t.roi1, t.roi2, t.roi3, t.roi4].map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-400/30 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-6 h-6 text-blue-300" />
                        </div>
                        <span className="text-lg text-blue-50">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center lg:text-end">
                  <p className="text-xl font-semibold text-blue-200 mb-3">
                    {t.annualSavings}
                  </p>
                  <p className="text-7xl md:text-8xl font-black text-white mb-6 drop-shadow-xl">€120,000+</p>
                  <p className="text-lg text-blue-100/90 mb-8">
                    {t.basedOnStudies}
                  </p>
                  <Link to="/nexacore/contact">
                    <Button className="h-14 px-8 bg-white text-blue-700 hover:bg-blue-50 text-base font-bold rounded-xl">
                      {t.ctaButton}
                      <Arrow className="w-5 h-5 ms-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <Link to="/nexacore/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-bold shadow-xl rounded-xl">
                {t.ctaButton}
                <Arrow className="w-5 h-5 ms-2" />
              </Button>
            </Link>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-blue-100">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                {t.benefit1}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                {t.benefit2}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                {t.benefit3}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <NCFooter />
    </div>
  );
}
