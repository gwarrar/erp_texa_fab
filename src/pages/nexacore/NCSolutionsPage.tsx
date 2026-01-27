import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { NCHeader } from "@/components/nexacore/NCHeader";
import { NCFooter } from "@/components/nexacore/NCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  ArrowRight, ArrowLeft, ShoppingCart, Package,
  Warehouse, Calculator, Users, FileText,
  Brain, Building2, Truck, CreditCard,
  BarChart3, Globe, Shield, Zap,
  CheckCircle2, TrendingUp, Wifi, Radio,
  Bot, MessageSquare, Sparkles, Cpu,
  ScanLine, Tags, MapPin, Layers,
  Target, LineChart, LayoutDashboard, Boxes,
  RefreshCw, AlertTriangle, Clock, Database,
  Network, Lightbulb, Gauge, PieChart
} from "lucide-react";

const translations = {
  en: {
    // Hero
    badge: "Complete Enterprise Solutions",
    heroTitle: "Transform Your Business with",
    heroTitleHighlight: "Intelligent ERP",
    heroSubtitle: "Comprehensive enterprise modules powered by NEXA AI and RFID technology. Manage sales, inventory, accounting, and operations with unprecedented efficiency and real-time insights.",
    
    // Core Solutions
    coreSolutionsTitle: "Core Business Solutions",
    coreSolutionsSubtitle: "Everything you need to run your business efficiently",
    
    salesTitle: "Sales Management",
    salesDesc: "Complete sales lifecycle from lead to cash. Manage quotations, orders, deliveries, and invoicing with real-time analytics and AI-powered forecasting.",
    salesFeatures: ["Lead to Cash", "Smart Quotations", "Order Processing", "Delivery Tracking", "AI Forecasting"],
    
    purchasesTitle: "Purchase & Procurement",
    purchasesDesc: "Streamline your procurement process with AI-optimized vendor selection, automated purchase orders, and intelligent cost optimization.",
    purchasesFeatures: ["Smart Vendor Selection", "Auto Purchase Orders", "Price Optimization", "Goods Receipt", "Payment Automation"],
    
    inventoryTitle: "Inventory & Warehouse",
    inventoryDesc: "Revolutionary inventory control with RFID technology, real-time tracking across all locations, and AI-powered demand prediction for optimal stock levels.",
    inventoryFeatures: ["RFID Integration", "Multi-Warehouse", "Real-time Tracking", "AI Demand Prediction", "Auto-Reorder"],
    
    accountingTitle: "Financial Accounting",
    accountingDesc: "Irish-European standard accounting with multi-currency support, automated VAT compliance, AI reconciliation, and real-time financial insights.",
    accountingFeatures: ["Multi-Currency", "VAT Automation", "AI Reconciliation", "Real-time Reports", "Cash Flow Prediction"],
    
    // Advanced Solutions
    advancedTitle: "Advanced Solutions",
    advancedSubtitle: "Take your business to the next level with cutting-edge technology",
    
    crmTitle: "Customer Relationship",
    crmDesc: "Build lasting customer relationships with 360° customer views, AI-powered interaction insights, and automated marketing workflows.",
    
    hrTitle: "Human Resources",
    hrDesc: "Complete HR management from recruitment to payroll, with AI-assisted hiring, attendance tracking, and performance analytics.",
    
    aiTitle: "NEXA AI Intelligence",
    aiDesc: "Revolutionary AI-powered insights for demand forecasting, intelligent recommendations, automated decisions, and conversational business assistant.",
    
    branchesTitle: "Multi-Branch Management",
    branchesDesc: "Manage unlimited branches, companies, and locations with centralized control, consolidated reporting, and AI-optimized operations.",

    // NEXA AI Section
    nexaAiTitle: "NEXA AI — Your Intelligent Business Assistant",
    nexaAiSubtitle: "Harness the power of artificial intelligence to transform every aspect of your business operations",
    nexaAiDesc: "NEXA AI is not just another feature — it's your 24/7 intelligent business partner that learns, adapts, and optimizes your operations continuously.",
    
    aiFeature1Title: "Conversational AI Agent",
    aiFeature1Desc: "Ask questions in natural language. Get instant answers about sales, inventory, finances, and more. 'What were my top-selling products last month?' — NEXA knows.",
    
    aiFeature2Title: "Predictive Analytics",
    aiFeature2Desc: "AI algorithms analyze historical data to predict demand, cash flow, and trends. Never run out of stock or miss a sales opportunity again.",
    
    aiFeature3Title: "Smart Recommendations",
    aiFeature3Desc: "Receive intelligent suggestions for pricing, inventory levels, vendor selection, and customer engagement strategies based on real data patterns.",
    
    aiFeature4Title: "Automated Decision Support",
    aiFeature4Desc: "From automated reorder points to smart approval workflows, NEXA AI handles routine decisions so you can focus on strategic growth.",
    
    aiFeature5Title: "Anomaly Detection",
    aiFeature5Desc: "Instantly identify unusual patterns — fraud attempts, inventory discrepancies, or operational bottlenecks — before they become problems.",
    
    aiFeature6Title: "Natural Language Reports",
    aiFeature6Desc: "Generate comprehensive business reports by simply asking. 'Show me Q4 performance summary' produces instant executive-ready insights.",

    // RFID Section
    rfidTitle: "RFID-Powered Inventory Revolution",
    rfidSubtitle: "Real-time visibility across every warehouse, shelf, and shipment",
    rfidDesc: "Transform your warehouse operations with enterprise-grade RFID technology. Track thousands of items simultaneously with 99.9% accuracy.",
    
    rfidFeature1Title: "Instant Inventory Counts",
    rfidFeature1Desc: "Scan an entire warehouse in minutes, not days. RFID readers capture thousands of items simultaneously for real-time stock visibility.",
    
    rfidFeature2Title: "Automated Receiving",
    rfidFeature2Desc: "Shipments are automatically recorded as they pass through RFID gates. No manual scanning, no errors, no delays.",
    
    rfidFeature3Title: "Location Tracking",
    rfidFeature3Desc: "Know exactly where every item is at any moment. Zone-based tracking helps staff find products instantly and optimizes warehouse layout.",
    
    rfidFeature4Title: "Theft Prevention",
    rfidFeature4Desc: "Real-time alerts when items leave designated zones without authorization. Reduce shrinkage by up to 70% with intelligent monitoring.",
    
    rfidFeature5Title: "Batch & Expiry Tracking",
    rfidFeature5Desc: "RFID tags linked to batch numbers and expiry dates ensure FIFO compliance and prevent selling expired products.",
    
    rfidFeature6Title: "Supply Chain Visibility",
    rfidFeature6Desc: "Track items from manufacturer to customer. Full chain-of-custody documentation for compliance and quality assurance.",

    // Industry Solutions
    industryTitle: "Tailored Industry Solutions",
    industrySubtitle: "Purpose-built configurations for your specific business needs",
    
    retailTitle: "Retail & E-commerce",
    retailDesc: "Omnichannel inventory sync, POS integration, customer loyalty programs, and AI-powered merchandising.",
    
    manufacturingTitle: "Manufacturing",
    manufacturingDesc: "BOM management, production planning, quality control, and real-time shop floor visibility.",
    
    distributionTitle: "Distribution & Wholesale",
    distributionDesc: "Route optimization, bulk pricing, customer tiering, and automated order fulfillment.",
    
    servicesTitle: "Professional Services",
    servicesDesc: "Project management, time tracking, resource allocation, and service contract management.",

    // Stats
    statsTitle: "Proven Results",
    stat1: "Average inventory accuracy improvement",
    stat2: "Reduction in order processing time",
    stat3: "Decrease in operational costs",
    stat4: "Customer satisfaction increase",
    
    // CTA
    ctaTitle: "Ready to Transform Your Business?",
    ctaSubtitle: "Join thousands of companies already experiencing the power of intelligent automation",
    ctaButton: "Start Free Trial",
    ctaSecondary: "Schedule Demo",
    
    learnMore: "Learn More",
    exploreFeatures: "Explore All Features",
    viewDemo: "Watch Demo Video",
  },
  ar: {
    // Hero
    badge: "حلول مؤسسية متكاملة",
    heroTitle: "حوّل أعمالك مع",
    heroTitleHighlight: "ERP الذكي",
    heroSubtitle: "وحدات مؤسسية شاملة مدعومة بتقنية NEXA AI و RFID. إدارة المبيعات والمخزون والمحاسبة والعمليات بكفاءة غير مسبوقة ورؤى في الوقت الفعلي.",
    
    // Core Solutions
    coreSolutionsTitle: "حلول الأعمال الأساسية",
    coreSolutionsSubtitle: "كل ما تحتاجه لتشغيل أعمالك بكفاءة",
    
    salesTitle: "إدارة المبيعات",
    salesDesc: "دورة المبيعات الكاملة من العميل المحتمل إلى التحصيل. إدارة عروض الأسعار والطلبات والتسليم والفوترة مع تحليلات فورية وتوقعات مدعومة بالذكاء الاصطناعي.",
    salesFeatures: ["من العميل للتحصيل", "عروض أسعار ذكية", "معالجة الطلبات", "تتبع التسليم", "توقعات AI"],
    
    purchasesTitle: "المشتريات والتوريد",
    purchasesDesc: "تبسيط عملية المشتريات مع اختيار موردين محسّن بالذكاء الاصطناعي، وأوامر شراء آلية، وتحسين تكاليف ذكي.",
    purchasesFeatures: ["اختيار موردين ذكي", "أوامر شراء آلية", "تحسين الأسعار", "استلام البضائع", "أتمتة الدفع"],
    
    inventoryTitle: "المخازن والمستودعات",
    inventoryDesc: "تحكم ثوري في المخزون بتقنية RFID، تتبع في الوقت الفعلي عبر جميع المواقع، وتنبؤ بالطلب مدعوم بالذكاء الاصطناعي لمستويات مخزون مثالية.",
    inventoryFeatures: ["تكامل RFID", "مستودعات متعددة", "تتبع فوري", "تنبؤ AI بالطلب", "إعادة طلب آلية"],
    
    accountingTitle: "المحاسبة المالية",
    accountingDesc: "محاسبة بمعايير أيرلندية-أوروبية مع دعم متعدد العملات، امتثال VAT آلي، تسوية AI، ورؤى مالية فورية.",
    accountingFeatures: ["متعدد العملات", "أتمتة VAT", "تسوية AI", "تقارير فورية", "توقع التدفق النقدي"],
    
    // Advanced Solutions
    advancedTitle: "حلول متقدمة",
    advancedSubtitle: "ارتقِ بأعمالك إلى المستوى التالي مع تقنيات متطورة",
    
    crmTitle: "إدارة علاقات العملاء",
    crmDesc: "بناء علاقات عملاء دائمة مع رؤية 360° للعملاء، رؤى تفاعل مدعومة بالذكاء الاصطناعي، وسير عمل تسويق آلي.",
    
    hrTitle: "الموارد البشرية",
    hrDesc: "إدارة كاملة للموارد البشرية من التوظيف إلى الرواتب، مع توظيف بمساعدة AI، تتبع الحضور، وتحليلات الأداء.",
    
    aiTitle: "ذكاء NEXA AI",
    aiDesc: "رؤى ثورية مدعومة بالذكاء الاصطناعي للتنبؤ بالطلب، توصيات ذكية، قرارات آلية، ومساعد أعمال تحادثي.",
    
    branchesTitle: "إدارة الفروع المتعددة",
    branchesDesc: "إدارة فروع وشركات ومواقع غير محدودة مع تحكم مركزي، تقارير موحدة، وعمليات محسّنة بالذكاء الاصطناعي.",

    // NEXA AI Section
    nexaAiTitle: "NEXA AI — مساعدك الذكي للأعمال",
    nexaAiSubtitle: "استغل قوة الذكاء الاصطناعي لتحويل كل جانب من عمليات أعمالك",
    nexaAiDesc: "NEXA AI ليس مجرد ميزة — إنه شريكك الذكي للأعمال على مدار الساعة الذي يتعلم ويتكيف ويحسّن عملياتك باستمرار.",
    
    aiFeature1Title: "وكيل AI تحادثي",
    aiFeature1Desc: "اطرح أسئلة بلغة طبيعية. احصل على إجابات فورية عن المبيعات والمخزون والماليات والمزيد. 'ما أفضل منتجاتي مبيعاً الشهر الماضي؟' — NEXA يعرف.",
    
    aiFeature2Title: "تحليلات تنبؤية",
    aiFeature2Desc: "خوارزميات AI تحلل البيانات التاريخية للتنبؤ بالطلب والتدفق النقدي والاتجاهات. لا تنفد من المخزون أو تفوت فرصة مبيعات أبداً.",
    
    aiFeature3Title: "توصيات ذكية",
    aiFeature3Desc: "احصل على اقتراحات ذكية للتسعير ومستويات المخزون واختيار الموردين واستراتيجيات تفاعل العملاء بناءً على أنماط بيانات حقيقية.",
    
    aiFeature4Title: "دعم قرارات آلي",
    aiFeature4Desc: "من نقاط إعادة الطلب الآلية إلى سير عمل الموافقات الذكية، NEXA AI يتعامل مع القرارات الروتينية حتى تركز على النمو الاستراتيجي.",
    
    aiFeature5Title: "كشف الشذوذ",
    aiFeature5Desc: "تحديد فوري للأنماط غير العادية — محاولات الاحتيال، تناقضات المخزون، أو اختناقات العمليات — قبل أن تصبح مشاكل.",
    
    aiFeature6Title: "تقارير بلغة طبيعية",
    aiFeature6Desc: "أنشئ تقارير أعمال شاملة بمجرد السؤال. 'أظهر لي ملخص أداء الربع الرابع' ينتج رؤى جاهزة للتنفيذيين فوراً.",

    // RFID Section
    rfidTitle: "ثورة المخزون بتقنية RFID",
    rfidSubtitle: "رؤية في الوقت الفعلي عبر كل مستودع ورف وشحنة",
    rfidDesc: "حوّل عمليات المستودعات مع تقنية RFID على مستوى المؤسسات. تتبع آلاف الأصناف في وقت واحد بدقة 99.9%.",
    
    rfidFeature1Title: "جرد فوري للمخزون",
    rfidFeature1Desc: "امسح مستودعاً كاملاً في دقائق، وليس أيام. قارئات RFID تلتقط آلاف الأصناف في وقت واحد لرؤية مخزون فورية.",
    
    rfidFeature2Title: "استلام آلي",
    rfidFeature2Desc: "الشحنات تُسجل تلقائياً عند مرورها عبر بوابات RFID. بدون مسح يدوي، بدون أخطاء، بدون تأخير.",
    
    rfidFeature3Title: "تتبع الموقع",
    rfidFeature3Desc: "اعرف بالضبط أين كل صنف في أي لحظة. التتبع حسب المنطقة يساعد الموظفين على إيجاد المنتجات فوراً ويحسّن تخطيط المستودع.",
    
    rfidFeature4Title: "منع السرقة",
    rfidFeature4Desc: "تنبيهات فورية عندما تغادر الأصناف المناطق المخصصة بدون تفويض. قلل الفاقد بنسبة تصل إلى 70% مع المراقبة الذكية.",
    
    rfidFeature5Title: "تتبع الدفعات والصلاحية",
    rfidFeature5Desc: "شرائح RFID مرتبطة بأرقام الدفعات وتواريخ الصلاحية تضمن امتثال FIFO وتمنع بيع المنتجات المنتهية.",
    
    rfidFeature6Title: "رؤية سلسلة التوريد",
    rfidFeature6Desc: "تتبع الأصناف من المصنع إلى العميل. توثيق كامل لسلسلة الحفظ للامتثال وضمان الجودة.",

    // Industry Solutions
    industryTitle: "حلول صناعية مخصصة",
    industrySubtitle: "تكوينات مبنية لأغراض محددة لاحتياجات أعمالك",
    
    retailTitle: "التجزئة والتجارة الإلكترونية",
    retailDesc: "مزامنة مخزون متعددة القنوات، تكامل نقاط البيع، برامج ولاء العملاء، وتسويق مدعوم بالذكاء الاصطناعي.",
    
    manufacturingTitle: "التصنيع",
    manufacturingDesc: "إدارة BOM، تخطيط الإنتاج، مراقبة الجودة، ورؤية أرضية المصنع في الوقت الفعلي.",
    
    distributionTitle: "التوزيع والجملة",
    distributionDesc: "تحسين المسارات، تسعير بالجملة، تصنيف العملاء، وتنفيذ الطلبات الآلي.",
    
    servicesTitle: "الخدمات المهنية",
    servicesDesc: "إدارة المشاريع، تتبع الوقت، تخصيص الموارد، وإدارة عقود الخدمة.",

    // Stats
    statsTitle: "نتائج مثبتة",
    stat1: "متوسط تحسن دقة المخزون",
    stat2: "تقليل وقت معالجة الطلبات",
    stat3: "انخفاض التكاليف التشغيلية",
    stat4: "زيادة رضا العملاء",
    
    // CTA
    ctaTitle: "مستعد لتحويل أعمالك؟",
    ctaSubtitle: "انضم لآلاف الشركات التي تختبر بالفعل قوة الأتمتة الذكية",
    ctaButton: "ابدأ تجربة مجانية",
    ctaSecondary: "جدول عرض توضيحي",
    
    learnMore: "اعرف المزيد",
    exploreFeatures: "استكشف جميع المميزات",
    viewDemo: "شاهد فيديو توضيحي",
  },
};

export default function NCSolutionsPage() {
  const { language } = useLanguage();
  const location = useLocation();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  // Scroll to section based on hash
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.hash]);

  const coreSolutions = [
    {
      id: "sales",
      icon: ShoppingCart,
      title: t.salesTitle,
      desc: t.salesDesc,
      features: t.salesFeatures,
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: "purchases",
      icon: Package,
      title: t.purchasesTitle,
      desc: t.purchasesDesc,
      features: t.purchasesFeatures,
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      id: "inventory",
      icon: Warehouse,
      title: t.inventoryTitle,
      desc: t.inventoryDesc,
      features: t.inventoryFeatures,
      color: "amber",
      gradient: "from-amber-500 to-amber-600",
    },
    {
      id: "accounting",
      icon: Calculator,
      title: t.accountingTitle,
      desc: t.accountingDesc,
      features: t.accountingFeatures,
      color: "violet",
      gradient: "from-violet-500 to-violet-600",
    },
  ];

  const advancedSolutions = [
    { id: "crm", icon: Users, title: t.crmTitle, desc: t.crmDesc, color: "pink" },
    { id: "hr", icon: FileText, title: t.hrTitle, desc: t.hrDesc, color: "indigo" },
    { id: "ai", icon: Brain, title: t.aiTitle, desc: t.aiDesc, color: "cyan" },
    { id: "branches", icon: Building2, title: t.branchesTitle, desc: t.branchesDesc, color: "orange" },
  ];

  const aiFeatures = [
    { icon: MessageSquare, title: t.aiFeature1Title, desc: t.aiFeature1Desc },
    { icon: LineChart, title: t.aiFeature2Title, desc: t.aiFeature2Desc },
    { icon: Lightbulb, title: t.aiFeature3Title, desc: t.aiFeature3Desc },
    { icon: RefreshCw, title: t.aiFeature4Title, desc: t.aiFeature4Desc },
    { icon: AlertTriangle, title: t.aiFeature5Title, desc: t.aiFeature5Desc },
    { icon: PieChart, title: t.aiFeature6Title, desc: t.aiFeature6Desc },
  ];

  const rfidFeatures = [
    { icon: ScanLine, title: t.rfidFeature1Title, desc: t.rfidFeature1Desc },
    { icon: Boxes, title: t.rfidFeature2Title, desc: t.rfidFeature2Desc },
    { icon: MapPin, title: t.rfidFeature3Title, desc: t.rfidFeature3Desc },
    { icon: Shield, title: t.rfidFeature4Title, desc: t.rfidFeature4Desc },
    { icon: Tags, title: t.rfidFeature5Title, desc: t.rfidFeature5Desc },
    { icon: Network, title: t.rfidFeature6Title, desc: t.rfidFeature6Desc },
  ];

  const industries = [
    { icon: ShoppingCart, title: t.retailTitle, desc: t.retailDesc, color: "blue" },
    { icon: Cpu, title: t.manufacturingTitle, desc: t.manufacturingDesc, color: "emerald" },
    { icon: Truck, title: t.distributionTitle, desc: t.distributionDesc, color: "amber" },
    { icon: Users, title: t.servicesTitle, desc: t.servicesDesc, color: "violet" },
  ];

  const stats = [
    { value: "99.9%", label: t.stat1 },
    { value: "85%", label: t.stat2 },
    { value: "45%", label: t.stat3 },
    { value: "92%", label: t.stat4 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" dir={isRTL ? "rtl" : "ltr"}>
      <NCHeader />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/50 to-transparent dark:from-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-100/50 to-transparent dark:from-indigo-900/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              {t.badge}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {t.heroTitle}{" "}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                {t.heroTitleHighlight}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-10">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/nexacore/register">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-6 text-lg shadow-xl shadow-blue-500/25 rounded-xl">
                  {t.ctaButton}
                  <Arrow className="w-5 h-5 ms-2" />
                </Button>
              </Link>
              <Link to="/nexacore/features">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 text-lg border-2 border-slate-300 dark:border-slate-600 rounded-xl">
                  {t.exploreFeatures}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.coreSolutionsTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.coreSolutionsSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreSolutions.map((solution, index) => (
              <motion.div
                key={index}
                id={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="scroll-mt-32"
              >
                <Card className="h-full p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 bg-white dark:bg-slate-800 group hover:shadow-xl">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {solution.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {solution.features.map((feature, i) => (
                      <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-blue-500" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link to={`/nexacore/solutions/${solution.id}`}>
                    <Button variant="outline" className="border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl">
                      {t.learnMore}
                      <Arrow className="w-4 h-4 ms-2" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
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
              {isRTL ? "ذكاء اصطناعي" : "Artificial Intelligence"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.nexaAiTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.nexaAiSubtitle}
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
                    {t.nexaAiDesc}
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
            {aiFeatures.map((feature, index) => (
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
              {t.rfidTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.rfidSubtitle}
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
                    {t.rfidDesc}
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
            {rfidFeatures.map((feature, index) => (
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
        </div>
      </section>

      {/* Advanced Solutions Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.advancedTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.advancedSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedSolutions.map((solution, index) => (
              <motion.div
                key={index}
                id={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="scroll-mt-32"
              >
                <Link to={`/nexacore/solutions/${solution.id}`}>
                  <Card className="h-full p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 bg-white dark:bg-slate-800 group cursor-pointer">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <solution.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {solution.desc}
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.industryTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.industrySubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {industry.desc}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/nexacore/register">
                <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-bold shadow-xl rounded-xl">
                  {t.ctaButton}
                  <Arrow className="w-5 h-5 ms-2" />
                </Button>
              </Link>
              <Link to="/nexacore/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                  {t.ctaSecondary}
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
