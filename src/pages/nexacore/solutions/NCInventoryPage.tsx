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
  Warehouse,
  Box,
  MapPin,
  ScanLine,
  Radio,
  CheckCircle2,
  Zap,
  Globe,
  Shield,
  Play,
  Boxes,
  Tags,
  RefreshCw,
  AlertTriangle,
  BarChart3,
  Layers,
} from "lucide-react";

const translations = {
  en: {
    badge: "Inventory & Warehouse",
    heroTitle: "RFID-Powered Inventory Revolution",
    heroDesc: "Revolutionary inventory control with RFID technology, real-time tracking across all locations, and AI-powered demand prediction for optimal stock levels.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    // Features
    featuresTitle: "Inventory Module Features",
    featuresSubtitle: "Complete visibility and control across your entire inventory",
    
    feature1: {
      title: "RFID Integration",
      desc: "Enterprise-grade RFID technology for instant inventory counts. Scan thousands of items simultaneously with 99.9% accuracy.",
    },
    feature2: {
      title: "Multi-Warehouse Management",
      desc: "Centralized control over all warehouses and locations. Real-time stock visibility, inter-warehouse transfers, and location tracking.",
    },
    feature3: {
      title: "Real-time Tracking",
      desc: "Know exactly where every item is at any moment. Zone-based tracking helps staff find products instantly.",
    },
    feature4: {
      title: "AI Demand Prediction",
      desc: "Machine learning algorithms analyze historical data to predict demand, prevent stockouts, and optimize inventory levels.",
    },
    feature5: {
      title: "Auto-Reorder",
      desc: "Intelligent reorder points based on lead times, demand forecasts, and safety stock levels. Never run out of stock again.",
    },
    feature6: {
      title: "Batch & Expiry Tracking",
      desc: "RFID tags linked to batch numbers and expiry dates ensure FIFO compliance and prevent selling expired products.",
    },
    
    // Benefits
    benefitsTitle: "Why Choose Our Inventory Module?",
    benefit1: "99.9% inventory accuracy",
    benefit2: "70% faster stock counts",
    benefit3: "Real-time visibility",
    benefit4: "Reduce shrinkage by 70%",
    
    // How it works
    howItWorksTitle: "How It Works",
    step1: {
      title: "Tag Items",
      desc: "Attach RFID tags to products during receiving or at any point in the supply chain.",
    },
    step2: {
      title: "Track Movement",
      desc: "RFID readers automatically record item movements through gates, zones, and locations.",
    },
    step3: {
      title: "Predict Demand",
      desc: "AI analyzes patterns to forecast demand and suggest optimal reorder quantities.",
    },
    step4: {
      title: "Automate Reorders",
      desc: "System automatically generates purchase orders when stock reaches reorder points.",
    },
    
    // Stats
    statsTitle: "Proven Results",
    stat1: { value: "99.9%", label: "Inventory accuracy" },
    stat2: { value: "70%", label: "Faster counts" },
    stat3: { value: "50%", label: "Less overstock" },
    stat4: { value: "0", label: "Stockouts" },
    
    // CTA
    ctaTitle: "Ready to Transform Your Warehouse?",
    ctaDesc: "Join thousands of businesses achieving perfect inventory accuracy with NexaCore's RFID-powered solution.",
    ctaButton: "Start Free Trial",
    
    // Navigation
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "المخازن والمستودعات",
    heroTitle: "ثورة المخزون بتقنية RFID",
    heroDesc: "تحكم ثوري في المخزون بتقنية RFID، تتبع في الوقت الفعلي عبر جميع المواقع، وتنبؤ بالطلب مدعوم بالذكاء الاصطناعي لمستويات مخزون مثالية.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    // Features
    featuresTitle: "ميزات وحدة المخازن",
    featuresSubtitle: "رؤية وتحكم كاملان عبر مخزونك بالكامل",
    
    feature1: {
      title: "تكامل RFID",
      desc: "تقنية RFID على مستوى المؤسسات لجرد المخزون الفوري. امسح آلاف الأصناف في وقت واحد بدقة 99.9%.",
    },
    feature2: {
      title: "إدارة مستودعات متعددة",
      desc: "تحكم مركزي في جميع المستودعات والمواقع. رؤية فورية للمخزون، التحويلات بين المستودعات، وتتبع الموقع.",
    },
    feature3: {
      title: "تتبع فوري",
      desc: "اعرف بالضبط أين كل صنف في أي لحظة. التتبع حسب المنطقة يساعد الموظفين على إيجاد المنتجات فوراً.",
    },
    feature4: {
      title: "تنبؤ AI بالطلب",
      desc: "خوارزميات تعلم الآلة تحلل البيانات التاريخية للتنبؤ بالطلب، منع نفاد المخزون، وتحسين مستويات المخزون.",
    },
    feature5: {
      title: "إعادة طلب آلية",
      desc: "نقاط إعادة طلب ذكية بناءً على أوقات التسليم، توقعات الطلب، ومستويات المخزون الاحتياطي. لا تنفد من المخزون أبداً.",
    },
    feature6: {
      title: "تتبع الدفعات والصلاحية",
      desc: "شرائح RFID مرتبطة بأرقام الدفعات وتواريخ الصلاحية تضمن امتثال FIFO وتمنع بيع المنتجات المنتهية.",
    },
    
    // Benefits
    benefitsTitle: "لماذا تختار وحدة المخازن لدينا؟",
    benefit1: "دقة مخزون 99.9%",
    benefit2: "جرد أسرع بنسبة 70%",
    benefit3: "رؤية في الوقت الفعلي",
    benefit4: "تقليل الفاقد بنسبة 70%",
    
    // How it works
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "ضع الشرائح",
      desc: "أرفق شرائح RFID بالمنتجات أثناء الاستلام أو في أي نقطة في سلسلة التوريد.",
    },
    step2: {
      title: "تتبع الحركة",
      desc: "قارئات RFID تسجل تلقائياً حركات الأصناف عبر البوابات والمناطق والمواقع.",
    },
    step3: {
      title: "توقع الطلب",
      desc: "الذكاء الاصطناعي يحلل الأنماط للتنبؤ بالطلب واقتراح كميات إعادة الطلب المثلى.",
    },
    step4: {
      title: "أتمتة إعادة الطلب",
      desc: "النظام يولد تلقائياً أوامر الشراء عندما يصل المخزون إلى نقاط إعادة الطلب.",
    },
    
    // Stats
    statsTitle: "نتائج مثبتة",
    stat1: { value: "99.9%", label: "دقة المخزون" },
    stat2: { value: "70%", label: "جرد أسرع" },
    stat3: { value: "50%", label: "فائض أقل" },
    stat4: { value: "0", label: "نفاد مخزون" },
    
    // CTA
    ctaTitle: "مستعد لتحويل مستودعك؟",
    ctaDesc: "انضم لآلاف الشركات التي تحقق دقة مخزون مثالية مع حل RFID من NexaCore.",
    ctaButton: "ابدأ تجربة مجانية",
    
    // Navigation
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: Radio },
  { key: "feature2", icon: Warehouse },
  { key: "feature3", icon: MapPin },
  { key: "feature4", icon: BarChart3 },
  { key: "feature5", icon: RefreshCw },
  { key: "feature6", icon: Tags },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function NCInventoryPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-900 dark:to-amber-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <Link
            to="/nexacore/solutions"
            className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 mb-8 transition-colors"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-sm font-medium mb-6">
                <Warehouse className="w-4 h-4" />
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
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ms-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-300 dark:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/20"
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500" />
                
                {/* Mock Warehouse Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                        <Radio className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">RFID Scanner Active</div>
                        <div className="text-xs text-green-500 flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          Live Tracking
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">12,450</div>
                      <div className="text-xs text-slate-500">Total Items</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {["Zone A", "Zone B", "Zone C", "Zone D"].map((zone, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Boxes className="w-4 h-4 text-amber-500" />
                          <span className="text-sm text-slate-600 dark:text-slate-400">{zone}</span>
                        </div>
                        <span className="text-sm font-medium text-slate-900 dark:text-white">{1500 + i * 250}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm font-medium">Last scan: 2 min ago - 452 items verified</span>
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
                <benefit.icon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
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
                <div className="text-amber-100 text-sm">{stat.label}</div>
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4">
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
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
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto mb-8">
            {t.ctaDesc}
          </p>
          <Link to="/nexacore/register">
            <Button
              size="lg"
              className="bg-white text-amber-600 hover:bg-amber-50 px-8"
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
