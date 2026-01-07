import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/landing/LanguageContext";
import { FCHeader } from "@/components/fincore/FCHeader";
import { FCFooter } from "@/components/fincore/FCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { 
  ArrowRight, ArrowLeft, Shield, Globe, Zap, Lock, 
  Building2, CreditCard, RefreshCcw, BarChart3, Users, 
  CheckCircle2, Database, Cloud, Smartphone, Cog,
  FileText, Bell, LineChart, Layers, Code, Server
} from "lucide-react";

const translations = {
  en: {
    heroTitle: "Enterprise-Grade",
    heroHighlight: "Banking Features",
    heroSubtitle: "A comprehensive suite of capabilities designed to power modern financial institutions with security, scalability, and compliance at the core.",
    
    // Feature Categories
    coreFeatures: "Core Capabilities",
    securityFeatures: "Security & Compliance",
    integrationFeatures: "Integration & APIs",
    analyticsFeatures: "Analytics & Reporting",
    
    // Core Features
    feature1Title: "Real-Time Processing",
    feature1Desc: "Sub-second transaction processing with guaranteed delivery and automatic reconciliation.",
    
    feature2Title: "Multi-Currency Support",
    feature2Desc: "Native support for 150+ currencies with real-time FX rates and automatic conversion.",
    
    feature3Title: "Account Management",
    feature3Desc: "Flexible account structures supporting retail, corporate, and correspondent accounts.",
    
    feature4Title: "Loan Management",
    feature4Desc: "End-to-end loan lifecycle from origination to servicing with automated workflows.",
    
    feature5Title: "Payment Processing",
    feature5Desc: "Support for SWIFT, SEPA, ACH, and local payment rails with STP processing.",
    
    feature6Title: "Customer 360°",
    feature6Desc: "Unified customer view with KYC, transaction history, and relationship management.",
    
    // Security Features
    security1Title: "Bank-Grade Encryption",
    security1Desc: "AES-256 encryption at rest and TLS 1.3 in transit with HSM key management.",
    
    security2Title: "AML/CFT Screening",
    security2Desc: "Real-time screening against global sanctions lists and PEP databases.",
    
    security3Title: "Fraud Detection",
    security3Desc: "AI-powered fraud detection with behavioral analytics and anomaly detection.",
    
    security4Title: "Audit Trails",
    security4Desc: "Immutable audit logs for all transactions and administrative actions.",
    
    // Integration Features
    integration1Title: "RESTful APIs",
    integration1Desc: "Comprehensive APIs for seamless integration with third-party systems.",
    
    integration2Title: "Webhook Events",
    integration2Desc: "Real-time event notifications for transaction and account updates.",
    
    integration3Title: "SDK Libraries",
    integration3Desc: "Native SDKs for iOS, Android, and web with pre-built UI components.",
    
    integration4Title: "Open Banking",
    integration4Desc: "PSD2 compliant APIs for account aggregation and payment initiation.",
    
    // Analytics Features
    analytics1Title: "Real-Time Dashboards",
    analytics1Desc: "Live monitoring of transactions, volumes, and system performance.",
    
    analytics2Title: "Custom Reports",
    analytics2Desc: "Flexible reporting engine with scheduled delivery and export options.",
    
    analytics3Title: "Regulatory Reports",
    analytics3Desc: "Automated generation of regulatory reports for central banks and authorities.",
    
    analytics4Title: "Business Intelligence",
    analytics4Desc: "Advanced analytics with trend analysis and predictive insights.",
    
    // CTA
    ctaTitle: "Experience the Platform",
    ctaSubtitle: "See how FinCore can transform your financial operations.",
    ctaButton: "Schedule Demo",
  },
  ar: {
    heroTitle: "ميزات بنكية",
    heroHighlight: "بمعايير المؤسسات",
    heroSubtitle: "مجموعة شاملة من الإمكانيات المصممة لتشغيل المؤسسات المالية الحديثة مع الأمان والتوسع والامتثال في الصميم.",
    
    coreFeatures: "الإمكانيات الأساسية",
    securityFeatures: "الأمان والامتثال",
    integrationFeatures: "التكامل والـ APIs",
    analyticsFeatures: "التحليلات والتقارير",
    
    feature1Title: "المعالجة الفورية",
    feature1Desc: "معالجة المعاملات في أقل من ثانية مع ضمان التسليم والمطابقة التلقائية.",
    
    feature2Title: "دعم متعدد العملات",
    feature2Desc: "دعم أصلي لأكثر من 150 عملة مع أسعار صرف فورية وتحويل تلقائي.",
    
    feature3Title: "إدارة الحسابات",
    feature3Desc: "هياكل حسابات مرنة تدعم حسابات التجزئة والشركات والمراسلين.",
    
    feature4Title: "إدارة القروض",
    feature4Desc: "دورة حياة القرض الكاملة من الإنشاء إلى الخدمة مع سير عمل آلي.",
    
    feature5Title: "معالجة المدفوعات",
    feature5Desc: "دعم SWIFT و SEPA و ACH ومسارات الدفع المحلية مع معالجة STP.",
    
    feature6Title: "رؤية 360° للعميل",
    feature6Desc: "رؤية موحدة للعميل مع KYC وتاريخ المعاملات وإدارة العلاقات.",
    
    security1Title: "تشفير بدرجة البنوك",
    security1Desc: "تشفير AES-256 في الراحة و TLS 1.3 في النقل مع إدارة مفاتيح HSM.",
    
    security2Title: "فحص مكافحة غسل الأموال",
    security2Desc: "فحص فوري ضد قوائم العقوبات العالمية وقواعد بيانات PEP.",
    
    security3Title: "كشف الاحتيال",
    security3Desc: "كشف الاحتيال بالذكاء الاصطناعي مع تحليلات سلوكية وكشف الشذوذ.",
    
    security4Title: "مسارات التدقيق",
    security4Desc: "سجلات تدقيق غير قابلة للتغيير لجميع المعاملات والإجراءات الإدارية.",
    
    integration1Title: "واجهات RESTful",
    integration1Desc: "واجهات برمجة شاملة للتكامل السلس مع الأنظمة الخارجية.",
    
    integration2Title: "أحداث Webhook",
    integration2Desc: "إشعارات أحداث فورية لتحديثات المعاملات والحسابات.",
    
    integration3Title: "مكتبات SDK",
    integration3Desc: "مكتبات أصلية لـ iOS و Android والويب مع مكونات واجهة مستخدم جاهزة.",
    
    integration4Title: "الخدمات المصرفية المفتوحة",
    integration4Desc: "واجهات متوافقة مع PSD2 لتجميع الحسابات وبدء الدفع.",
    
    analytics1Title: "لوحات معلومات فورية",
    analytics1Desc: "مراقبة حية للمعاملات والأحجام وأداء النظام.",
    
    analytics2Title: "تقارير مخصصة",
    analytics2Desc: "محرك تقارير مرن مع جدولة التسليم وخيارات التصدير.",
    
    analytics3Title: "التقارير التنظيمية",
    analytics3Desc: "إنشاء تلقائي للتقارير التنظيمية للبنوك المركزية والسلطات.",
    
    analytics4Title: "ذكاء الأعمال",
    analytics4Desc: "تحليلات متقدمة مع تحليل الاتجاهات ورؤى تنبؤية.",
    
    ctaTitle: "جرب المنصة",
    ctaSubtitle: "شاهد كيف يمكن لـ FinCore تحويل عملياتك المالية.",
    ctaButton: "احجز عرضاً",
  },
};

const seoMeta = {
  en: {
    title: "Platform Features | FinCore - Core Banking Platform",
    description: "Explore FinCore's enterprise-grade banking features: real-time processing, security, compliance, APIs, and analytics.",
  },
  ar: {
    title: "ميزات المنصة | فين كور - منصة بنكية أساسية",
    description: "استكشف ميزات فين كور البنكية: المعالجة الفورية والأمان والامتثال والواجهات والتحليلات.",
  },
};

export default function FCFeaturesPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const currentSeo = seoMeta[language as keyof typeof seoMeta] || seoMeta.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  useEffect(() => {
    document.title = currentSeo.title;
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [currentSeo.title, language, dir]);

  const coreFeatures = [
    { icon: Zap, title: t.feature1Title, desc: t.feature1Desc },
    { icon: Globe, title: t.feature2Title, desc: t.feature2Desc },
    { icon: Building2, title: t.feature3Title, desc: t.feature3Desc },
    { icon: CreditCard, title: t.feature4Title, desc: t.feature4Desc },
    { icon: RefreshCcw, title: t.feature5Title, desc: t.feature5Desc },
    { icon: Users, title: t.feature6Title, desc: t.feature6Desc },
  ];

  const securityFeatures = [
    { icon: Lock, title: t.security1Title, desc: t.security1Desc },
    { icon: Shield, title: t.security2Title, desc: t.security2Desc },
    { icon: Bell, title: t.security3Title, desc: t.security3Desc },
    { icon: FileText, title: t.security4Title, desc: t.security4Desc },
  ];

  const integrationFeatures = [
    { icon: Code, title: t.integration1Title, desc: t.integration1Desc },
    { icon: Bell, title: t.integration2Title, desc: t.integration2Desc },
    { icon: Smartphone, title: t.integration3Title, desc: t.integration3Desc },
    { icon: Layers, title: t.integration4Title, desc: t.integration4Desc },
  ];

  const analyticsFeatures = [
    { icon: LineChart, title: t.analytics1Title, desc: t.analytics1Desc },
    { icon: FileText, title: t.analytics2Title, desc: t.analytics2Desc },
    { icon: Building2, title: t.analytics3Title, desc: t.analytics3Desc },
    { icon: BarChart3, title: t.analytics4Title, desc: t.analytics4Desc },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white" dir={dir}>
      <FCHeader />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[40vh] flex items-center bg-gradient-to-br from-white via-slate-50 to-blue-50/30 dark:from-slate-950 dark:via-[#0d1f3c] dark:to-slate-950">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-20 w-64 h-64 rounded-full blur-3xl bg-blue-500/5 dark:bg-blue-500/10" />
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full blur-3xl bg-purple-500/5 dark:bg-purple-500/10" />
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
            className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            {t.coreFeatures}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-[#0D9488]/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-12 text-center">
            {t.securityFeatures}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center hover:bg-slate-800 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-[#0D9488]/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-[#0D9488]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            {t.integrationFeatures}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-[#0D9488]/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#0D9488]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            {t.analyticsFeatures}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-[#0D9488]/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
            {t.ctaSubtitle}
          </p>
          <Link to="/fincore/contact">
            <Button className="bg-[#0A1628] dark:bg-[#0D9488] text-white dark:text-[#0A1628] hover:bg-[#0A1628]/90 dark:hover:bg-[#0D9488]/90 px-8 py-6 text-base font-semibold rounded-xl shadow-lg">
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
