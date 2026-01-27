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
  ArrowRight, ArrowLeft, ArrowDown, FileText,
  ShoppingCart, Package, Warehouse, Calculator,
  CheckCircle2, Users, Truck, CreditCard,
  BarChart3, RefreshCw, Clock, Zap,
  Settings, Bell, Target, TrendingUp,
  Globe, Shield
} from "lucide-react";

const translations = {
  en: {
    // Hero
    badge: "Process Automation",
    heroTitle: "Seamless Business",
    heroTitleHighlight: "Workflow",
    heroSubtitle: "Watch how NexaCore transforms complex business processes into smooth, automated workflows that save time and eliminate errors.",
    
    // Sales Workflow
    salesWorkflowTitle: "Sales Workflow",
    salesWorkflowSubtitle: "From lead to cash in a streamlined process",
    
    step1Title: "Lead Capture",
    step1Desc: "Automatically capture leads from website, calls, and referrals",
    step2Title: "Opportunity Management",
    step2Desc: "Track and nurture opportunities through the sales pipeline",
    step3Title: "Quotation",
    step3Desc: "Generate professional quotes with real-time pricing",
    step4Title: "Sales Order",
    step4Desc: "Convert approved quotes to sales orders instantly",
    step5Title: "Delivery",
    step5Desc: "Automated delivery scheduling and tracking",
    step6Title: "Invoice & Payment",
    step6Desc: "Auto-generate invoices and track payments",
    
    // Purchase Workflow
    purchaseWorkflowTitle: "Purchase Workflow",
    purchaseWorkflowSubtitle: "Efficient procurement from request to receipt",
    
    pStep1Title: "Purchase Request",
    pStep1Desc: "Department requests with approval workflow",
    pStep2Title: "Vendor Selection",
    pStep2Desc: "Compare vendors and get best pricing",
    pStep3Title: "Purchase Order",
    pStep3Desc: "Generate and send PO to suppliers",
    pStep4Title: "Goods Receipt",
    pStep4Desc: "Receive and verify incoming goods",
    pStep5Title: "Quality Check",
    pStep5Desc: "Ensure product quality standards",
    pStep6Title: "Payment Processing",
    pStep6Desc: "Match invoices and process payments",
    
    // Integration Benefits
    integrationTitle: "Unified Data Flow",
    integrationSubtitle: "All modules work together seamlessly",
    
    benefit1Title: "Real-Time Sync",
    benefit1Desc: "Data updates instantly across all modules",
    benefit2Title: "Zero Data Entry",
    benefit2Desc: "Information flows automatically between departments",
    benefit3Title: "Smart Automation",
    benefit3Desc: "AI-powered workflows reduce manual tasks",
    benefit4Title: "Full Traceability",
    benefit4Desc: "Track every transaction from start to finish",
    
    // Stats
    timeSaved: "Time Saved",
    errorReduction: "Error Reduction",
    fasterProcessing: "Faster Processing",
    costSavings: "Cost Savings",
    
    // CTA
    ctaTitle: "Ready to Streamline Your Operations?",
    ctaButton: "Start Free Trial",
    ctaSecondary: "Schedule Demo",
  },
  ar: {
    // Hero
    badge: "أتمتة العمليات",
    heroTitle: "سير عمل",
    heroTitleHighlight: "سلس للأعمال",
    heroSubtitle: "شاهد كيف يحول NexaCore العمليات التجارية المعقدة إلى سير عمل آلي سلس يوفر الوقت ويلغي الأخطاء.",
    
    // Sales Workflow
    salesWorkflowTitle: "سير عمل المبيعات",
    salesWorkflowSubtitle: "من العميل المحتمل إلى التحصيل في عملية مبسطة",
    
    step1Title: "التقاط العملاء",
    step1Desc: "التقاط العملاء تلقائياً من الموقع والمكالمات والإحالات",
    step2Title: "إدارة الفرص",
    step2Desc: "تتبع ورعاية الفرص عبر خط أنابيب المبيعات",
    step3Title: "عرض السعر",
    step3Desc: "إنشاء عروض أسعار احترافية بتسعير فوري",
    step4Title: "أمر المبيعات",
    step4Desc: "تحويل العروض المعتمدة إلى أوامر مبيعات فوراً",
    step5Title: "التسليم",
    step5Desc: "جدولة وتتبع التسليم الآلي",
    step6Title: "الفاتورة والدفع",
    step6Desc: "إنشاء الفواتير تلقائياً وتتبع المدفوعات",
    
    // Purchase Workflow
    purchaseWorkflowTitle: "سير عمل المشتريات",
    purchaseWorkflowSubtitle: "مشتريات فعالة من الطلب إلى الاستلام",
    
    pStep1Title: "طلب الشراء",
    pStep1Desc: "طلبات الأقسام مع سير عمل الموافقة",
    pStep2Title: "اختيار المورد",
    pStep2Desc: "مقارنة الموردين والحصول على أفضل الأسعار",
    pStep3Title: "أمر الشراء",
    pStep3Desc: "إنشاء وإرسال أمر الشراء للموردين",
    pStep4Title: "استلام البضائع",
    pStep4Desc: "استلام والتحقق من البضائع الواردة",
    pStep5Title: "فحص الجودة",
    pStep5Desc: "ضمان معايير جودة المنتج",
    pStep6Title: "معالجة الدفع",
    pStep6Desc: "مطابقة الفواتير ومعالجة المدفوعات",
    
    // Integration Benefits
    integrationTitle: "تدفق بيانات موحد",
    integrationSubtitle: "جميع الوحدات تعمل معاً بسلاسة",
    
    benefit1Title: "مزامنة فورية",
    benefit1Desc: "تحديث البيانات فوراً عبر جميع الوحدات",
    benefit2Title: "صفر إدخال بيانات",
    benefit2Desc: "تتدفق المعلومات تلقائياً بين الأقسام",
    benefit3Title: "أتمتة ذكية",
    benefit3Desc: "سير عمل مدعوم بالذكاء الاصطناعي يقلل المهام اليدوية",
    benefit4Title: "تتبع كامل",
    benefit4Desc: "تتبع كل معاملة من البداية إلى النهاية",
    
    // Stats
    timeSaved: "توفير الوقت",
    errorReduction: "تقليل الأخطاء",
    fasterProcessing: "معالجة أسرع",
    costSavings: "توفير التكاليف",
    
    // CTA
    ctaTitle: "مستعد لتبسيط عملياتك؟",
    ctaButton: "ابدأ تجربة مجانية",
    ctaSecondary: "جدول عرض توضيحي",
  },
};

export default function NCWorkflowPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const salesSteps = [
    { icon: Users, title: t.step1Title, desc: t.step1Desc, color: "blue" },
    { icon: Target, title: t.step2Title, desc: t.step2Desc, color: "cyan" },
    { icon: FileText, title: t.step3Title, desc: t.step3Desc, color: "violet" },
    { icon: ShoppingCart, title: t.step4Title, desc: t.step4Desc, color: "emerald" },
    { icon: Truck, title: t.step5Title, desc: t.step5Desc, color: "amber" },
    { icon: CreditCard, title: t.step6Title, desc: t.step6Desc, color: "green" },
  ];

  const purchaseSteps = [
    { icon: FileText, title: t.pStep1Title, desc: t.pStep1Desc, color: "blue" },
    { icon: Users, title: t.pStep2Title, desc: t.pStep2Desc, color: "cyan" },
    { icon: Package, title: t.pStep3Title, desc: t.pStep3Desc, color: "violet" },
    { icon: Warehouse, title: t.pStep4Title, desc: t.pStep4Desc, color: "emerald" },
    { icon: CheckCircle2, title: t.pStep5Title, desc: t.pStep5Desc, color: "amber" },
    { icon: Calculator, title: t.pStep6Title, desc: t.pStep6Desc, color: "green" },
  ];

  const benefits = [
    { icon: RefreshCw, title: t.benefit1Title, desc: t.benefit1Desc },
    { icon: Zap, title: t.benefit2Title, desc: t.benefit2Desc },
    { icon: Settings, title: t.benefit3Title, desc: t.benefit3Desc },
    { icon: BarChart3, title: t.benefit4Title, desc: t.benefit4Desc },
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
              <RefreshCw className="w-4 h-4" />
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

      {/* Sales Workflow Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6">
              <ShoppingCart className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">{t.salesWorkflowTitle}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.salesWorkflowTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.salesWorkflowSubtitle}
            </p>
          </motion.div>

          {/* Workflow Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-emerald-200 to-green-200 dark:from-blue-800 dark:via-emerald-800 dark:to-green-800 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {salesSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 flex items-center justify-center mb-4 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-4 border-blue-500 flex items-center justify-center text-sm font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Workflow Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 mb-6">
              <Package className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">{t.purchaseWorkflowTitle}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.purchaseWorkflowTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.purchaseWorkflowSubtitle}
            </p>
          </motion.div>

          {/* Workflow Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-emerald-200 to-green-200 dark:from-blue-800 dark:via-emerald-800 dark:to-green-800 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {purchaseSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 flex items-center justify-center mb-4 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-4 border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits Section */}
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
              {t.integrationTitle}
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {t.integrationSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-blue-400/30 flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7 text-blue-200" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-100 text-sm">
                    {benefit.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "90%", label: t.timeSaved },
              { value: "99.9%", label: t.errorReduction },
              { value: "10x", label: t.fasterProcessing },
              { value: "€120K+", label: t.costSavings },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-200">{stat.label}</div>
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
