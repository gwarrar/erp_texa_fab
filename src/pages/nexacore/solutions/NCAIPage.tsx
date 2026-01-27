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
  Brain,
  Bot,
  MessageSquare,
  CheckCircle2,
  Zap,
  Globe,
  Shield,
  Play,
  Lightbulb,
  LineChart,
  AlertTriangle,
  PieChart,
  RefreshCw,
  Sparkles,
} from "lucide-react";

const translations = {
  en: {
    badge: "NEXA AI Intelligence",
    heroTitle: "Your Intelligent Business Assistant",
    heroDesc: "Harness the power of artificial intelligence to transform every aspect of your business operations with revolutionary AI-powered insights.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    // Features
    featuresTitle: "AI Module Features",
    featuresSubtitle: "NEXA AI is your 24/7 intelligent business partner that learns, adapts, and optimizes continuously",
    
    feature1: {
      title: "Conversational AI Agent",
      desc: "Ask questions in natural language. Get instant answers about sales, inventory, finances, and more. 'What were my top-selling products last month?' — NEXA knows.",
    },
    feature2: {
      title: "Predictive Analytics",
      desc: "AI algorithms analyze historical data to predict demand, cash flow, and trends. Never run out of stock or miss a sales opportunity again.",
    },
    feature3: {
      title: "Smart Recommendations",
      desc: "Receive intelligent suggestions for pricing, inventory levels, vendor selection, and customer engagement strategies based on real data patterns.",
    },
    feature4: {
      title: "Automated Decision Support",
      desc: "From automated reorder points to smart approval workflows, NEXA AI handles routine decisions so you can focus on strategic growth.",
    },
    feature5: {
      title: "Anomaly Detection",
      desc: "Instantly identify unusual patterns — fraud attempts, inventory discrepancies, or operational bottlenecks — before they become problems.",
    },
    feature6: {
      title: "Natural Language Reports",
      desc: "Generate comprehensive business reports by simply asking. 'Show me Q4 performance summary' produces instant executive-ready insights.",
    },
    
    // Benefits
    benefitsTitle: "Why Choose NEXA AI?",
    benefit1: "24/7 intelligent assistance",
    benefit2: "Continuous learning",
    benefit3: "Natural language interface",
    benefit4: "Proactive insights",
    
    // How it works
    howItWorksTitle: "How It Works",
    step1: {
      title: "Connect Your Data",
      desc: "NEXA AI integrates with all NexaCore modules and learns from your business data.",
    },
    step2: {
      title: "Ask Anything",
      desc: "Use natural language to query your business. Get instant, accurate answers.",
    },
    step3: {
      title: "Get Recommendations",
      desc: "AI proactively suggests optimizations based on patterns it discovers.",
    },
    step4: {
      title: "Automate Decisions",
      desc: "Let NEXA handle routine decisions while you approve strategic ones.",
    },
    
    // Stats
    statsTitle: "Proven Results",
    stat1: { value: "85%", label: "Queries answered instantly" },
    stat2: { value: "40%", label: "Better forecasting" },
    stat3: { value: "60%", label: "Faster decisions" },
    stat4: { value: "24/7", label: "Availability" },
    
    // CTA
    ctaTitle: "Ready for AI-Powered Business?",
    ctaDesc: "Join thousands of businesses leveraging NEXA AI for smarter operations and strategic growth.",
    ctaButton: "Start Free Trial",
    
    // Navigation
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "ذكاء NEXA AI",
    heroTitle: "مساعدك الذكي للأعمال",
    heroDesc: "استغل قوة الذكاء الاصطناعي لتحويل كل جانب من عمليات أعمالك مع رؤى ثورية مدعومة بالذكاء الاصطناعي.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    // Features
    featuresTitle: "ميزات وحدة الذكاء الاصطناعي",
    featuresSubtitle: "NEXA AI هو شريكك الذكي للأعمال على مدار الساعة الذي يتعلم ويتكيف ويحسّن باستمرار",
    
    feature1: {
      title: "وكيل AI تحادثي",
      desc: "اطرح أسئلة بلغة طبيعية. احصل على إجابات فورية عن المبيعات والمخزون والماليات والمزيد. 'ما أفضل منتجاتي مبيعاً الشهر الماضي؟' — NEXA يعرف.",
    },
    feature2: {
      title: "تحليلات تنبؤية",
      desc: "خوارزميات AI تحلل البيانات التاريخية للتنبؤ بالطلب والتدفق النقدي والاتجاهات. لا تنفد من المخزون أو تفوت فرصة مبيعات أبداً.",
    },
    feature3: {
      title: "توصيات ذكية",
      desc: "احصل على اقتراحات ذكية للتسعير ومستويات المخزون واختيار الموردين واستراتيجيات تفاعل العملاء بناءً على أنماط بيانات حقيقية.",
    },
    feature4: {
      title: "دعم قرارات آلي",
      desc: "من نقاط إعادة الطلب الآلية إلى سير عمل الموافقات الذكية، NEXA AI يتعامل مع القرارات الروتينية حتى تركز على النمو الاستراتيجي.",
    },
    feature5: {
      title: "كشف الشذوذ",
      desc: "تحديد فوري للأنماط غير العادية — محاولات الاحتيال، تناقضات المخزون، أو اختناقات العمليات — قبل أن تصبح مشاكل.",
    },
    feature6: {
      title: "تقارير بلغة طبيعية",
      desc: "أنشئ تقارير أعمال شاملة بمجرد السؤال. 'أظهر لي ملخص أداء الربع الرابع' ينتج رؤى جاهزة للتنفيذيين فوراً.",
    },
    
    // Benefits
    benefitsTitle: "لماذا تختار NEXA AI؟",
    benefit1: "مساعدة ذكية 24/7",
    benefit2: "تعلم مستمر",
    benefit3: "واجهة لغة طبيعية",
    benefit4: "رؤى استباقية",
    
    // How it works
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "اربط بياناتك",
      desc: "NEXA AI يتكامل مع جميع وحدات NexaCore ويتعلم من بيانات أعمالك.",
    },
    step2: {
      title: "اسأل أي شيء",
      desc: "استخدم اللغة الطبيعية للاستعلام عن أعمالك. احصل على إجابات فورية ودقيقة.",
    },
    step3: {
      title: "احصل على توصيات",
      desc: "الذكاء الاصطناعي يقترح تحسينات استباقياً بناءً على الأنماط التي يكتشفها.",
    },
    step4: {
      title: "أتمت القرارات",
      desc: "دع NEXA يتعامل مع القرارات الروتينية بينما تعتمد القرارات الاستراتيجية.",
    },
    
    // Stats
    statsTitle: "نتائج مثبتة",
    stat1: { value: "85%", label: "استفسارات مجابة فوراً" },
    stat2: { value: "40%", label: "توقعات أفضل" },
    stat3: { value: "60%", label: "قرارات أسرع" },
    stat4: { value: "24/7", label: "التوفر" },
    
    // CTA
    ctaTitle: "مستعد لأعمال مدعومة بالذكاء الاصطناعي؟",
    ctaDesc: "انضم لآلاف الشركات التي تستفيد من NEXA AI لعمليات أذكى ونمو استراتيجي.",
    ctaButton: "ابدأ تجربة مجانية",
    
    // Navigation
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: MessageSquare },
  { key: "feature2", icon: LineChart },
  { key: "feature3", icon: Lightbulb },
  { key: "feature4", icon: RefreshCw },
  { key: "feature5", icon: AlertTriangle },
  { key: "feature6", icon: PieChart },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function NCAIPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-cyan-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <Link
            to="/nexacore/solutions"
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-8 transition-colors"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
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
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ms-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-300 dark:border-cyan-700 hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
                
                {/* Mock AI Chat Interface */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900 dark:text-white">NEXA AI Assistant</div>
                      <div className="text-xs text-green-500 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Online
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-cyan-500 text-white rounded-2xl rounded-br-sm px-4 py-2 max-w-xs">
                        <p className="text-sm">What were my top 5 selling products last month?</p>
                      </div>
                    </div>
                    
                    {/* AI Response */}
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-bl-sm px-4 py-2 max-w-xs">
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          Based on December sales data:
                        </p>
                        <ul className="text-xs text-slate-600 dark:text-slate-400 mt-2 space-y-1">
                          <li>1. Premium Cotton Fabric - €45,200</li>
                          <li>2. Silk Blend Roll - €38,400</li>
                          <li>3. Organic Linen - €32,100</li>
                          <li>4. Wool Collection - €28,750</li>
                          <li>5. Designer Print - €24,300</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 items-center mt-4 p-2 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                    <Sparkles className="w-4 h-4 text-cyan-500" />
                    <input 
                      type="text" 
                      placeholder="Ask NEXA anything..." 
                      className="flex-1 bg-transparent text-sm outline-none text-slate-600 dark:text-slate-300"
                      readOnly
                    />
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
                <benefit.icon className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
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
                <div className="text-cyan-100 text-sm">{stat.label}</div>
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-cyan-100 max-w-2xl mx-auto mb-8">
            {t.ctaDesc}
          </p>
          <Link to="/nexacore/register">
            <Button
              size="lg"
              className="bg-white text-cyan-600 hover:bg-cyan-50 px-8"
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
