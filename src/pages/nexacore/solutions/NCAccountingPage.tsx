import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { NCHeader } from "@/components/nexacore/NCHeader";
import { NCFooter } from "@/components/nexacore/NCFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Calculator,
  FileText,
  CreditCard,
  CheckCircle2,
  Zap,
  Globe,
  Shield,
  Play,
  DollarSign,
  TrendingUp,
  RefreshCw,
  PieChart,
  Receipt,
  Landmark,
} from "lucide-react";

const translations = {
  en: {
    badge: "Financial Accounting",
    heroTitle: "Enterprise-Grade Financial Accounting",
    heroDesc: "Irish-European standard accounting with multi-currency support, automated VAT compliance, AI reconciliation, and real-time financial insights.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    // Features
    featuresTitle: "Accounting Module Features",
    featuresSubtitle: "Complete financial management with AI-powered automation",
    
    feature1: {
      title: "Multi-Currency Support",
      desc: "Handle transactions in any currency with automatic exchange rate updates and gain/loss calculations.",
    },
    feature2: {
      title: "VAT Automation",
      desc: "Automated VAT calculations, returns preparation, and submission. Stay compliant with Irish and EU regulations.",
    },
    feature3: {
      title: "AI Reconciliation",
      desc: "Machine learning matches bank transactions with invoices and payments automatically. 95% accuracy on first pass.",
    },
    feature4: {
      title: "Real-time Reports",
      desc: "Live P&L, balance sheet, cash flow statements, and custom financial reports with drill-down capabilities.",
    },
    feature5: {
      title: "Cash Flow Prediction",
      desc: "AI forecasts future cash positions based on historical patterns, pending invoices, and scheduled payments.",
    },
    feature6: {
      title: "Multi-Company",
      desc: "Manage multiple companies, consolidate financials, and handle inter-company transactions seamlessly.",
    },
    
    // Benefits
    benefitsTitle: "Why Choose Our Accounting Module?",
    benefit1: "95% auto-reconciliation",
    benefit2: "100% VAT compliant",
    benefit3: "Real-time visibility",
    benefit4: "Audit-ready reports",
    
    // How it works
    howItWorksTitle: "How It Works",
    step1: {
      title: "Connect Accounts",
      desc: "Link bank accounts and payment gateways for automatic transaction import.",
    },
    step2: {
      title: "Auto-Categorize",
      desc: "AI learns your accounting patterns and categorizes transactions automatically.",
    },
    step3: {
      title: "Reconcile",
      desc: "Review AI-matched transactions and approve with one click.",
    },
    step4: {
      title: "Report & File",
      desc: "Generate financial reports and file VAT returns directly from the system.",
    },
    
    // Stats
    statsTitle: "Proven Results",
    stat1: { value: "95%", label: "Auto-reconciled" },
    stat2: { value: "10x", label: "Faster month-end" },
    stat3: { value: "100%", label: "VAT compliance" },
    stat4: { value: "24/7", label: "Financial visibility" },
    
    // CTA
    ctaTitle: "Ready to Transform Your Finance?",
    ctaDesc: "Join thousands of businesses achieving financial clarity with NexaCore's intelligent accounting.",
    ctaButton: "Start Free Trial",
    
    // Navigation
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "المحاسبة المالية",
    heroTitle: "محاسبة مالية بمستوى المؤسسات",
    heroDesc: "محاسبة بمعايير أيرلندية-أوروبية مع دعم متعدد العملات، امتثال VAT آلي، تسوية AI، ورؤى مالية فورية.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    // Features
    featuresTitle: "ميزات وحدة المحاسبة",
    featuresSubtitle: "إدارة مالية كاملة مع أتمتة مدعومة بالذكاء الاصطناعي",
    
    feature1: {
      title: "دعم متعدد العملات",
      desc: "تعامل مع المعاملات بأي عملة مع تحديثات أسعار الصرف التلقائية وحسابات الربح/الخسارة.",
    },
    feature2: {
      title: "أتمتة VAT",
      desc: "حسابات VAT آلية، إعداد الإقرارات، والتقديم. ابقَ متوافقاً مع اللوائح الأيرلندية والأوروبية.",
    },
    feature3: {
      title: "تسوية AI",
      desc: "تعلم الآلة يطابق معاملات البنك مع الفواتير والمدفوعات تلقائياً. دقة 95% في المحاولة الأولى.",
    },
    feature4: {
      title: "تقارير فورية",
      desc: "أرباح وخسائر مباشرة، ميزانية عمومية، قوائم تدفق نقدي، وتقارير مالية مخصصة مع إمكانية التفصيل.",
    },
    feature5: {
      title: "توقع التدفق النقدي",
      desc: "الذكاء الاصطناعي يتوقع المواقف النقدية المستقبلية بناءً على الأنماط التاريخية والفواتير المعلقة والمدفوعات المجدولة.",
    },
    feature6: {
      title: "متعدد الشركات",
      desc: "أدر شركات متعددة، وحّد البيانات المالية، وتعامل مع المعاملات بين الشركات بسلاسة.",
    },
    
    // Benefits
    benefitsTitle: "لماذا تختار وحدة المحاسبة لدينا؟",
    benefit1: "تسوية آلية 95%",
    benefit2: "امتثال VAT 100%",
    benefit3: "رؤية في الوقت الفعلي",
    benefit4: "تقارير جاهزة للتدقيق",
    
    // How it works
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "اربط الحسابات",
      desc: "اربط الحسابات البنكية وبوابات الدفع لاستيراد المعاملات التلقائي.",
    },
    step2: {
      title: "تصنيف تلقائي",
      desc: "الذكاء الاصطناعي يتعلم أنماط محاسبتك ويصنف المعاملات تلقائياً.",
    },
    step3: {
      title: "سوِّ",
      desc: "راجع المعاملات المطابقة بالذكاء الاصطناعي واعتمدها بنقرة واحدة.",
    },
    step4: {
      title: "أبلغ وقدّم",
      desc: "أنشئ التقارير المالية وقدّم إقرارات VAT مباشرة من النظام.",
    },
    
    // Stats
    statsTitle: "نتائج مثبتة",
    stat1: { value: "95%", label: "تسوية آلية" },
    stat2: { value: "10x", label: "إغلاق شهري أسرع" },
    stat3: { value: "100%", label: "امتثال VAT" },
    stat4: { value: "24/7", label: "رؤية مالية" },
    
    // CTA
    ctaTitle: "مستعد لتحويل ماليتك؟",
    ctaDesc: "انضم لآلاف الشركات التي تحقق وضوحاً مالياً مع المحاسبة الذكية من NexaCore.",
    ctaButton: "ابدأ تجربة مجانية",
    
    // Navigation
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: DollarSign },
  { key: "feature2", icon: Receipt },
  { key: "feature3", icon: RefreshCw },
  { key: "feature4", icon: PieChart },
  { key: "feature5", icon: TrendingUp },
  { key: "feature6", icon: Landmark },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function NCAccountingPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = dir === "rtl";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={dir}>
      <NCHeader />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-violet-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <Link
            to="/nexacore/solutions"
            className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 mb-8 transition-colors"
          >
            {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            {t.backToSolutions}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6">
                <Calculator className="w-4 h-4" />
                {t.badge}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {t.heroTitle}
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                {t.heroDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/nexacore/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ms-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-violet-300 dark:border-violet-700 hover:bg-violet-50 dark:hover:bg-violet-900/20"
                >
                  <Play className="w-5 h-5 me-2" />
                  {t.watchDemo}
                </Button>
              </div>
            </motion.div>

            {/* Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500" />
                
                {/* Mock Accounting Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                        <PieChart className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">Financial Overview</div>
                        <div className="text-xs text-slate-500">January 2025</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">€125,450</div>
                      <div className="text-xs text-green-500 flex items-center gap-1 justify-end">
                        <TrendingUp className="w-3 h-3" /> Net Profit
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Revenue", value: "€458,200", color: "text-green-600" },
                      { label: "Expenses", value: "€332,750", color: "text-red-500" },
                      { label: "Receivable", value: "€85,400", color: "text-blue-600" },
                      { label: "Payable", value: "€42,100", color: "text-orange-500" },
                    ].map((item, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                        <div className="text-xs text-slate-500 dark:text-slate-400">{item.label}</div>
                        <div className={`text-lg font-bold ${item.color}`}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-3 rounded-lg bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400">
                        <RefreshCw className="w-4 h-4" />
                        <span className="text-sm font-medium">AI Reconciliation</span>
                      </div>
                      <span className="text-sm text-violet-600 dark:text-violet-400">45 matched today</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, text: t.benefit1 },
              { icon: Zap, text: t.benefit2 },
              { icon: Globe, text: t.benefit3 },
              { icon: Shield, text: t.benefit4 },
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <benefit.icon className="w-5 h-5 text-violet-500 flex-shrink-0" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">{t.statsTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[t.stat1, t.stat2, t.stat3, t.stat4].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-violet-100 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.featuresTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.featuresSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const featureData = t[feature.key as keyof typeof t] as { title: string; desc: string };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {featureData.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {featureData.desc}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.howItWorksTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const stepData = t[step as keyof typeof t] as { title: string; desc: string };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {stepData.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {stepData.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-violet-100 max-w-2xl mx-auto mb-8">
            {t.ctaDesc}
          </p>
          <Link to="/nexacore/register">
            <Button
              size="lg"
              className="bg-white text-violet-600 hover:bg-violet-50 px-8"
            >
              {t.ctaButton}
              <Arrow className="w-5 h-5 ms-2" />
            </Button>
          </Link>
        </div>
      </section>

      <NCFooter />
    </div>
  );
}
