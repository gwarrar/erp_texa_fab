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
  ShoppingCart,
  TrendingUp,
  FileText,
  Users,
  BarChart3,
  Target,
  CheckCircle2,
  Zap,
  Globe,
  Shield,
  Play,
  Receipt,
  Truck,
  CreditCard,
  LineChart,
  UserCheck,
} from "lucide-react";

const translations = {
  en: {
    badge: "Sales Management",
    heroTitle: "Complete Sales Lifecycle Management",
    heroDesc: "From lead capture to cash collection - manage your entire sales process with AI-powered insights, real-time analytics, and seamless automation.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    // Features
    featuresTitle: "Sales Module Features",
    featuresSubtitle: "Everything you need to close more deals and grow revenue",
    
    feature1: {
      title: "Lead to Cash",
      desc: "Complete sales cycle management from initial lead capture through quotation, order processing, delivery, and final payment collection.",
    },
    feature2: {
      title: "Smart Quotations",
      desc: "AI-powered pricing suggestions, automated discount approvals, and professional quotation templates with e-signature support.",
    },
    feature3: {
      title: "Order Processing",
      desc: "Streamlined order management with inventory reservation, credit limit checks, and automated order confirmations.",
    },
    feature4: {
      title: "Delivery Management",
      desc: "Track shipments in real-time, optimize delivery routes, and manage proof of delivery with electronic signatures.",
    },
    feature5: {
      title: "AI Forecasting",
      desc: "Machine learning algorithms predict sales trends, identify opportunities, and provide accurate revenue forecasts.",
    },
    feature6: {
      title: "Customer Portal",
      desc: "Self-service portal for customers to track orders, view invoices, and manage their account information.",
    },
    
    // Benefits
    benefitsTitle: "Why Choose Our Sales Module?",
    benefit1: "Increase close rates by 35%",
    benefit2: "Reduce sales cycle by 50%",
    benefit3: "Real-time pipeline visibility",
    benefit4: "AI-powered lead scoring",
    
    // How it works
    howItWorksTitle: "How It Works",
    step1: {
      title: "Capture Leads",
      desc: "Import leads from multiple sources - web forms, email, trade shows, or manual entry with automatic deduplication.",
    },
    step2: {
      title: "Create Quotations",
      desc: "Generate professional quotes with AI-suggested pricing, automatic tax calculations, and approval workflows.",
    },
    step3: {
      title: "Process Orders",
      desc: "Convert quotes to orders with one click, check inventory, reserve stock, and schedule delivery.",
    },
    step4: {
      title: "Collect Payments",
      desc: "Automated invoicing, multiple payment methods, and intelligent collection reminders.",
    },
    
    // Stats
    statsTitle: "Proven Results",
    stat1: { value: "35%", label: "Increase in close rate" },
    stat2: { value: "50%", label: "Faster sales cycle" },
    stat3: { value: "99.9%", label: "Quote accuracy" },
    stat4: { value: "24/7", label: "Customer portal access" },
    
    // CTA
    ctaTitle: "Ready to Boost Your Sales?",
    ctaDesc: "Join thousands of businesses achieving record sales with NexaCore's intelligent sales management.",
    ctaButton: "Start Free Trial",
    
    // Navigation
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "إدارة المبيعات",
    heroTitle: "إدارة كاملة لدورة المبيعات",
    heroDesc: "من التقاط العملاء المحتملين إلى تحصيل المدفوعات - أدر عملية مبيعاتك بالكامل مع رؤى مدعومة بالذكاء الاصطناعي وتحليلات فورية وأتمتة سلسة.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    // Features
    featuresTitle: "ميزات وحدة المبيعات",
    featuresSubtitle: "كل ما تحتاجه لإغلاق المزيد من الصفقات وزيادة الإيرادات",
    
    feature1: {
      title: "من العميل للتحصيل",
      desc: "إدارة كاملة لدورة المبيعات من التقاط العملاء المحتملين الأولي عبر عرض الأسعار ومعالجة الطلبات والتسليم وتحصيل الدفعة النهائية.",
    },
    feature2: {
      title: "عروض أسعار ذكية",
      desc: "اقتراحات تسعير مدعومة بالذكاء الاصطناعي، موافقات خصم آلية، وقوالب عروض أسعار احترافية مع دعم التوقيع الإلكتروني.",
    },
    feature3: {
      title: "معالجة الطلبات",
      desc: "إدارة طلبات مبسطة مع حجز المخزون وفحص حدود الائتمان وتأكيدات الطلبات الآلية.",
    },
    feature4: {
      title: "إدارة التسليم",
      desc: "تتبع الشحنات في الوقت الفعلي، تحسين مسارات التسليم، وإدارة إثبات التسليم بالتوقيعات الإلكترونية.",
    },
    feature5: {
      title: "توقعات AI",
      desc: "خوارزميات تعلم الآلة تتنبأ باتجاهات المبيعات، تحدد الفرص، وتوفر توقعات إيرادات دقيقة.",
    },
    feature6: {
      title: "بوابة العملاء",
      desc: "بوابة خدمة ذاتية للعملاء لتتبع الطلبات، عرض الفواتير، وإدارة معلومات حساباتهم.",
    },
    
    // Benefits
    benefitsTitle: "لماذا تختار وحدة المبيعات لدينا؟",
    benefit1: "زيادة معدل الإغلاق بنسبة 35%",
    benefit2: "تقليل دورة المبيعات بنسبة 50%",
    benefit3: "رؤية فورية لخط الأنابيب",
    benefit4: "تقييم العملاء المحتملين بالذكاء الاصطناعي",
    
    // How it works
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "التقط العملاء المحتملين",
      desc: "استورد العملاء المحتملين من مصادر متعددة - نماذج الويب، البريد الإلكتروني، المعارض التجارية، أو الإدخال اليدوي مع إزالة التكرار التلقائي.",
    },
    step2: {
      title: "أنشئ عروض الأسعار",
      desc: "أنشئ عروض أسعار احترافية مع تسعير مقترح بالذكاء الاصطناعي، حسابات ضريبية آلية، وسير عمل الموافقات.",
    },
    step3: {
      title: "عالج الطلبات",
      desc: "حوّل العروض إلى طلبات بنقرة واحدة، تحقق من المخزون، احجز البضائع، وجدول التسليم.",
    },
    step4: {
      title: "حصّل المدفوعات",
      desc: "فوترة آلية، طرق دفع متعددة، وتذكيرات تحصيل ذكية.",
    },
    
    // Stats
    statsTitle: "نتائج مثبتة",
    stat1: { value: "35%", label: "زيادة في معدل الإغلاق" },
    stat2: { value: "50%", label: "دورة مبيعات أسرع" },
    stat3: { value: "99.9%", label: "دقة عروض الأسعار" },
    stat4: { value: "24/7", label: "وصول بوابة العملاء" },
    
    // CTA
    ctaTitle: "مستعد لتعزيز مبيعاتك؟",
    ctaDesc: "انضم لآلاف الشركات التي تحقق مبيعات قياسية مع إدارة المبيعات الذكية من NexaCore.",
    ctaButton: "ابدأ تجربة مجانية",
    
    // Navigation
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: TrendingUp },
  { key: "feature2", icon: FileText },
  { key: "feature3", icon: ShoppingCart },
  { key: "feature4", icon: Truck },
  { key: "feature5", icon: LineChart },
  { key: "feature6", icon: UserCheck },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function NCSalesPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <Link
            to="/nexacore/solutions"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                <ShoppingCart className="w-4 h-4" />
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
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ms-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
                
                {/* Mock Sales Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
                        <div className="h-3 w-16 bg-slate-100 dark:bg-slate-600 rounded mt-1" />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$125K</div>
                      <div className="text-xs text-green-500 flex items-center gap-1 justify-end">
                        <TrendingUp className="w-3 h-3" /> +15%
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {["Leads", "Quotes", "Orders"].map((item, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                        <div className="text-xs text-slate-500 dark:text-slate-400">{item}</div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white">{45 + i * 12}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-2 rounded bg-slate-50 dark:bg-slate-700/50">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-600 rounded" />
                        </div>
                        <div className="text-sm font-medium text-green-500">$2.5K</div>
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
                <benefit.icon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
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
                <div className="text-blue-100 text-sm">{stat.label}</div>
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            {t.ctaDesc}
          </p>
          <Link to="/nexacore/register">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8"
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
