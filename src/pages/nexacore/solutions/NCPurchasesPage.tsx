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
  Package,
  TrendingUp,
  FileText,
  Users,
  BarChart3,
  CheckCircle2,
  Zap,
  Globe,
  Shield,
  Play,
  Truck,
  CreditCard,
  Search,
  Calculator,
  ClipboardList,
  Repeat,
} from "lucide-react";

const translations = {
  en: {
    badge: "Purchase & Procurement",
    heroTitle: "Streamline Your Procurement Process",
    heroDesc: "AI-optimized vendor selection, automated purchase orders, intelligent cost optimization, and complete supplier relationship management.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    // Features
    featuresTitle: "Procurement Module Features",
    featuresSubtitle: "Optimize your purchasing with intelligent automation",
    
    feature1: {
      title: "Smart Vendor Selection",
      desc: "AI analyzes vendor performance, pricing history, and delivery reliability to recommend the best suppliers for each purchase.",
    },
    feature2: {
      title: "Automated Purchase Orders",
      desc: "Auto-generate POs based on stock levels, approved requisitions, or scheduled reorders with smart approval workflows.",
    },
    feature3: {
      title: "Price Optimization",
      desc: "Track price trends, compare quotes across vendors, and negotiate better deals with data-driven insights.",
    },
    feature4: {
      title: "Goods Receipt",
      desc: "Streamlined receiving with barcode/RFID scanning, quality inspection checklists, and automatic inventory updates.",
    },
    feature5: {
      title: "Payment Automation",
      desc: "Schedule payments, manage early payment discounts, and maintain healthy vendor relationships with timely settlements.",
    },
    feature6: {
      title: "Supplier Portal",
      desc: "Self-service portal for suppliers to view POs, submit invoices, and track payment status.",
    },
    
    // Benefits
    benefitsTitle: "Why Choose Our Procurement Module?",
    benefit1: "Reduce procurement costs by 25%",
    benefit2: "Automate 80% of PO creation",
    benefit3: "Real-time spend visibility",
    benefit4: "Complete audit trail",
    
    // How it works
    howItWorksTitle: "How It Works",
    step1: {
      title: "Create Requisitions",
      desc: "Departments submit purchase requests with automatic budget checking and approval routing.",
    },
    step2: {
      title: "Select Vendors",
      desc: "AI recommends best vendors based on price, quality, delivery time, and historical performance.",
    },
    step3: {
      title: "Generate POs",
      desc: "Convert approved requisitions to purchase orders with one click, automatically sent to vendors.",
    },
    step4: {
      title: "Receive & Pay",
      desc: "Match receipts with POs, process invoices, and schedule payments automatically.",
    },
    
    // Stats
    statsTitle: "Proven Results",
    stat1: { value: "25%", label: "Cost reduction" },
    stat2: { value: "80%", label: "Process automation" },
    stat3: { value: "99%", label: "PO accuracy" },
    stat4: { value: "3x", label: "Faster procurement" },
    
    // CTA
    ctaTitle: "Ready to Optimize Procurement?",
    ctaDesc: "Join thousands of businesses saving money with NexaCore's intelligent procurement management.",
    ctaButton: "Start Free Trial",
    
    // Navigation
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "المشتريات والتوريد",
    heroTitle: "بسّط عملية المشتريات",
    heroDesc: "اختيار موردين محسّن بالذكاء الاصطناعي، أوامر شراء آلية، تحسين تكاليف ذكي، وإدارة كاملة لعلاقات الموردين.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    // Features
    featuresTitle: "ميزات وحدة المشتريات",
    featuresSubtitle: "حسّن مشترياتك مع الأتمتة الذكية",
    
    feature1: {
      title: "اختيار موردين ذكي",
      desc: "الذكاء الاصطناعي يحلل أداء الموردين وتاريخ الأسعار وموثوقية التسليم لاقتراح أفضل الموردين لكل عملية شراء.",
    },
    feature2: {
      title: "أوامر شراء آلية",
      desc: "توليد أوامر الشراء تلقائياً بناءً على مستويات المخزون، الطلبات المعتمدة، أو إعادة الطلب المجدولة مع سير عمل الموافقات الذكية.",
    },
    feature3: {
      title: "تحسين الأسعار",
      desc: "تتبع اتجاهات الأسعار، مقارنة العروض عبر الموردين، والتفاوض على صفقات أفضل مع رؤى مدعومة بالبيانات.",
    },
    feature4: {
      title: "استلام البضائع",
      desc: "استلام مبسط مع مسح الباركود/RFID، قوائم فحص الجودة، وتحديثات المخزون التلقائية.",
    },
    feature5: {
      title: "أتمتة الدفع",
      desc: "جدولة المدفوعات، إدارة خصومات الدفع المبكر، والحفاظ على علاقات صحية مع الموردين بتسويات في الوقت المناسب.",
    },
    feature6: {
      title: "بوابة الموردين",
      desc: "بوابة خدمة ذاتية للموردين لعرض أوامر الشراء، تقديم الفواتير، وتتبع حالة الدفع.",
    },
    
    // Benefits
    benefitsTitle: "لماذا تختار وحدة المشتريات لدينا؟",
    benefit1: "تقليل تكاليف المشتريات بنسبة 25%",
    benefit2: "أتمتة 80% من إنشاء أوامر الشراء",
    benefit3: "رؤية فورية للإنفاق",
    benefit4: "سجل تدقيق كامل",
    
    // How it works
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "أنشئ الطلبات",
      desc: "الأقسام تقدم طلبات الشراء مع فحص الميزانية التلقائي وتوجيه الموافقات.",
    },
    step2: {
      title: "اختر الموردين",
      desc: "الذكاء الاصطناعي يوصي بأفضل الموردين بناءً على السعر والجودة ووقت التسليم والأداء التاريخي.",
    },
    step3: {
      title: "ولّد أوامر الشراء",
      desc: "حوّل الطلبات المعتمدة إلى أوامر شراء بنقرة واحدة، تُرسل تلقائياً للموردين.",
    },
    step4: {
      title: "استلم وادفع",
      desc: "طابق الاستلامات مع أوامر الشراء، عالج الفواتير، وجدول المدفوعات تلقائياً.",
    },
    
    // Stats
    statsTitle: "نتائج مثبتة",
    stat1: { value: "25%", label: "تقليل التكاليف" },
    stat2: { value: "80%", label: "أتمتة العمليات" },
    stat3: { value: "99%", label: "دقة أوامر الشراء" },
    stat4: { value: "3x", label: "مشتريات أسرع" },
    
    // CTA
    ctaTitle: "مستعد لتحسين المشتريات؟",
    ctaDesc: "انضم لآلاف الشركات التي توفر المال مع إدارة المشتريات الذكية من NexaCore.",
    ctaButton: "ابدأ تجربة مجانية",
    
    // Navigation
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: Search },
  { key: "feature2", icon: ClipboardList },
  { key: "feature3", icon: Calculator },
  { key: "feature4", icon: Package },
  { key: "feature5", icon: CreditCard },
  { key: "feature6", icon: Users },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function NCPurchasesPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <Link
            to="/nexacore/solutions"
            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-8 transition-colors"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
                <Package className="w-4 h-4" />
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
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ms-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-300 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
                
                {/* Mock Procurement Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                        <Package className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
                        <div className="h-3 w-16 bg-slate-100 dark:bg-slate-600 rounded mt-1" />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">45 POs</div>
                      <div className="text-xs text-emerald-500">This Month</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {["Pending", "In Transit", "Received"].map((item, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                        <div className="text-xs text-slate-500 dark:text-slate-400">{item}</div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white">{12 + i * 5}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {["Supplier A - Fabric Order", "Supplier B - Equipment", "Supplier C - Packaging"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 rounded bg-slate-50 dark:bg-slate-700/50">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                          <Truck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="flex-1 text-sm text-slate-600 dark:text-slate-400 truncate">{item}</div>
                        <div className="text-xs font-medium text-emerald-500">In Progress</div>
                      </div>
                    ))}
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
                <benefit.icon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
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
                <div className="text-emerald-100 text-sm">{stat.label}</div>
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
            {t.ctaDesc}
          </p>
          <Link to="/nexacore/register">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8"
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
