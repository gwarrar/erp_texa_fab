import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { NCHeader } from "@/components/nexacore/NCHeader";
import { NCFooter } from "@/components/nexacore/NCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  ArrowRight, ArrowLeft, ShoppingCart, Package,
  Warehouse, Calculator, BarChart3, Shield, Globe,
  Zap, Building2, Users, CheckCircle2,
  Brain, Sparkles, TrendingUp, Clock,
  Target, Check, FileText, CreditCard,
  Truck, Settings, Bell, Lock,
  PieChart, Layers, Database, RefreshCw,
  Smartphone, Cloud, Award, Headphones
} from "lucide-react";

const translations = {
  en: {
    // Hero
    badge: "Enterprise Modules",
    heroTitle: "Powerful Features",
    heroTitleHighlight: "Built for Scale",
    heroSubtitle: "Comprehensive ERP modules designed to streamline every aspect of your business operations with Irish-European precision.",
    
    // Core Modules
    coreModulesTitle: "Core Business Modules",
    coreModulesSubtitle: "Essential tools for managing your day-to-day operations",
    
    salesTitle: "Sales Management",
    salesDesc: "Complete sales cycle management from lead capture to invoice generation. Track opportunities, manage quotes, process orders, and analyze performance with real-time dashboards.",
    salesFeatures: ["Lead & Opportunity Tracking", "Quote Management", "Order Processing", "Invoice Generation", "Sales Analytics"],
    
    purchasesTitle: "Purchase Management",
    purchasesDesc: "Streamline procurement with automated purchase workflows. Manage vendors, track orders, control costs, and ensure timely delivery of goods.",
    purchasesFeatures: ["Vendor Management", "Purchase Orders", "Goods Receipt", "Cost Control", "Supplier Analytics"],
    
    inventoryTitle: "Inventory Control",
    inventoryDesc: "Real-time inventory tracking across multiple warehouses. Manage stock levels, batch numbers, serial tracking, and automated reordering.",
    inventoryFeatures: ["Multi-Warehouse", "Batch Tracking", "Serial Numbers", "Auto-Reorder", "Stock Valuation"],
    
    accountingTitle: "Integrated Accounting",
    accountingDesc: "Irish-European financial standards with multi-currency support. General ledger, accounts payable/receivable, bank reconciliation, and VAT compliance.",
    accountingFeatures: ["General Ledger", "AP/AR Management", "Bank Reconciliation", "VAT Compliance", "Financial Reports"],
    
    // Advanced Modules
    advancedTitle: "Advanced Capabilities",
    advancedSubtitle: "Take your business to the next level with intelligent features",
    
    crmTitle: "Customer Relationship",
    crmDesc: "Build lasting relationships with 360° customer views, interaction history, support tickets, and targeted marketing campaigns.",
    
    hrTitle: "Human Resources",
    hrDesc: "Complete HR suite from recruitment to payroll. Employee records, attendance, leave management, and performance tracking.",
    
    aiTitle: "NEXA AI Intelligence",
    aiDesc: "Leverage AI for predictive analytics, smart recommendations, demand forecasting, and automated decision support.",
    
    branchesTitle: "Multi-Branch Management",
    branchesDesc: "Seamlessly manage multiple branches and companies with centralized control and consolidated reporting.",
    
    // Technical Features
    technicalTitle: "Technical Excellence",
    technicalSubtitle: "Built on modern architecture for reliability and performance",
    
    cloudTitle: "Cloud-Native",
    cloudDesc: "Secure, scalable infrastructure with 99.99% uptime guarantee",
    
    mobileTitle: "Mobile Ready",
    mobileDesc: "Access your business from anywhere with responsive design",
    
    apiTitle: "API Integration",
    apiDesc: "Connect with any system through our comprehensive REST API",
    
    securityTitle: "Enterprise Security",
    securityDesc: "Bank-grade encryption and EU data protection compliance",
    
    // CTA
    ctaTitle: "Ready to Transform Your Operations?",
    ctaButton: "Start Free Trial",
    ctaSecondary: "Schedule Demo",
  },
  ar: {
    // Hero
    badge: "وحدات المؤسسات",
    heroTitle: "مميزات قوية",
    heroTitleHighlight: "مبنية للتوسع",
    heroSubtitle: "وحدات ERP شاملة مصممة لتبسيط كل جانب من جوانب عمليات أعمالك بدقة أيرلندية-أوروبية.",
    
    // Core Modules
    coreModulesTitle: "الوحدات الأساسية للأعمال",
    coreModulesSubtitle: "أدوات أساسية لإدارة عملياتك اليومية",
    
    salesTitle: "إدارة المبيعات",
    salesDesc: "إدارة كاملة لدورة المبيعات من التقاط العملاء المحتملين إلى إصدار الفواتير. تتبع الفرص وإدارة عروض الأسعار ومعالجة الطلبات وتحليل الأداء بلوحات معلومات في الوقت الفعلي.",
    salesFeatures: ["تتبع العملاء والفرص", "إدارة عروض الأسعار", "معالجة الطلبات", "إصدار الفواتير", "تحليلات المبيعات"],
    
    purchasesTitle: "إدارة المشتريات",
    purchasesDesc: "تبسيط المشتريات مع سير عمل آلي. إدارة الموردين وتتبع الطلبات والتحكم في التكاليف وضمان التسليم في الوقت المناسب.",
    purchasesFeatures: ["إدارة الموردين", "أوامر الشراء", "استلام البضائع", "التحكم في التكاليف", "تحليلات الموردين"],
    
    inventoryTitle: "التحكم في المخزون",
    inventoryDesc: "تتبع المخزون في الوقت الفعلي عبر مستودعات متعددة. إدارة مستويات المخزون وأرقام الدفعات والتتبع التسلسلي وإعادة الطلب الآلية.",
    inventoryFeatures: ["مستودعات متعددة", "تتبع الدفعات", "الأرقام التسلسلية", "إعادة طلب آلية", "تقييم المخزون"],
    
    accountingTitle: "محاسبة متكاملة",
    accountingDesc: "معايير مالية أيرلندية-أوروبية مع دعم متعدد العملات. دفتر الأستاذ العام والحسابات الدائنة/المدينة والتسوية البنكية والامتثال لـ VAT.",
    accountingFeatures: ["دفتر الأستاذ العام", "إدارة AP/AR", "التسوية البنكية", "الامتثال لـ VAT", "التقارير المالية"],
    
    // Advanced Modules
    advancedTitle: "قدرات متقدمة",
    advancedSubtitle: "ارتقِ بأعمالك إلى المستوى التالي مع مميزات ذكية",
    
    crmTitle: "إدارة علاقات العملاء",
    crmDesc: "بناء علاقات دائمة مع رؤية 360° للعملاء وتاريخ التفاعل وتذاكر الدعم وحملات التسويق المستهدفة.",
    
    hrTitle: "الموارد البشرية",
    hrDesc: "جناح HR كامل من التوظيف إلى الرواتب. سجلات الموظفين والحضور وإدارة الإجازات وتتبع الأداء.",
    
    aiTitle: "ذكاء NEXA AI",
    aiDesc: "استفد من الذكاء الاصطناعي للتحليلات التنبؤية والتوصيات الذكية والتنبؤ بالطلب ودعم القرارات الآلي.",
    
    branchesTitle: "إدارة الفروع المتعددة",
    branchesDesc: "إدارة سلسة لفروع وشركات متعددة مع تحكم مركزي وتقارير موحدة.",
    
    // Technical Features
    technicalTitle: "التميز التقني",
    technicalSubtitle: "مبني على بنية حديثة للموثوقية والأداء",
    
    cloudTitle: "سحابي أصلي",
    cloudDesc: "بنية تحتية آمنة وقابلة للتوسع مع ضمان وقت تشغيل 99.99%",
    
    mobileTitle: "جاهز للجوال",
    mobileDesc: "الوصول إلى أعمالك من أي مكان بتصميم متجاوب",
    
    apiTitle: "تكامل API",
    apiDesc: "اتصل بأي نظام من خلال واجهة REST API الشاملة",
    
    securityTitle: "أمان المؤسسات",
    securityDesc: "تشفير بمستوى البنوك والامتثال لحماية البيانات الأوروبية",
    
    // CTA
    ctaTitle: "مستعد لتحويل عملياتك؟",
    ctaButton: "ابدأ تجربة مجانية",
    ctaSecondary: "جدول عرض توضيحي",
  },
};

export default function NCFeaturesPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const coreModules = [
    {
      icon: ShoppingCart,
      title: t.salesTitle,
      desc: t.salesDesc,
      features: t.salesFeatures,
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Package,
      title: t.purchasesTitle,
      desc: t.purchasesDesc,
      features: t.purchasesFeatures,
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Warehouse,
      title: t.inventoryTitle,
      desc: t.inventoryDesc,
      features: t.inventoryFeatures,
      color: "amber",
      gradient: "from-amber-500 to-amber-600"
    },
    {
      icon: Calculator,
      title: t.accountingTitle,
      desc: t.accountingDesc,
      features: t.accountingFeatures,
      color: "violet",
      gradient: "from-violet-500 to-violet-600"
    },
  ];

  const advancedModules = [
    { icon: Users, title: t.crmTitle, desc: t.crmDesc, color: "pink" },
    { icon: FileText, title: t.hrTitle, desc: t.hrDesc, color: "indigo" },
    { icon: Brain, title: t.aiTitle, desc: t.aiDesc, color: "cyan" },
    { icon: Building2, title: t.branchesTitle, desc: t.branchesDesc, color: "orange" },
  ];

  const technicalFeatures = [
    { icon: Cloud, title: t.cloudTitle, desc: t.cloudDesc },
    { icon: Smartphone, title: t.mobileTitle, desc: t.mobileDesc },
    { icon: Database, title: t.apiTitle, desc: t.apiDesc },
    { icon: Lock, title: t.securityTitle, desc: t.securityDesc },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" dir={isRTL ? "rtl" : "ltr"}>
      <NCHeader />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/50 to-transparent dark:from-blue-900/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
              <Layers className="w-4 h-4" />
              {t.badge}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {t.heroTitle}{" "}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                {t.heroTitleHighlight}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.coreModulesTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.coreModulesSubtitle}
            </p>
          </motion.div>

          <div className="space-y-12">
            {coreModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-8 lg:p-12 rounded-3xl border-2 border-slate-100 dark:border-slate-800 hover:border-${module.color}-200 dark:hover:border-${module.color}-800 transition-all duration-300 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900`}>
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${module.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                        <module.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        {module.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
                        {module.desc}
                      </p>
                      <ul className="grid grid-cols-2 gap-3">
                        {module.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className={`w-5 h-5 text-${module.color}-500`} />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} bg-gradient-to-br from-${module.color}-50 to-${module.color}-100 dark:from-${module.color}-900/20 dark:to-${module.color}-800/20 rounded-2xl p-8 h-64 flex items-center justify-center`}>
                      <module.icon className={`w-32 h-32 text-${module.color}-500/30`} />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Modules Section */}
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

          <div className="grid md:grid-cols-2 gap-6">
            {advancedModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 bg-white dark:bg-slate-800">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r from-${module.color}-500 to-${module.color}-600 flex items-center justify-center mb-6`}>
                    <module.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {module.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {module.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
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
              {t.technicalTitle}
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {t.technicalSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-blue-400/30 flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-blue-200" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100 text-sm">
                    {feature.desc}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {t.ctaTitle}
            </h2>
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
