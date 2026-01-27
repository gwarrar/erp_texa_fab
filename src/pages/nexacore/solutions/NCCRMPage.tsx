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
  Users,
  UserPlus,
  Mail,
  CheckCircle2,
  Zap,
  Globe,
  Shield,
  Play,
  HeartHandshake,
  MessagesSquare,
  Target,
  Star,
  LineChart,
  Phone,
} from "lucide-react";

const translations = {
  en: {
    badge: "Customer Relationship Management",
    heroTitle: "Build Lasting Customer Relationships",
    heroDesc: "360° customer views, AI-powered interaction insights, automated marketing workflows, and complete customer lifecycle management.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    // Features
    featuresTitle: "CRM Module Features",
    featuresSubtitle: "Everything you need to know and serve your customers better",
    
    feature1: {
      title: "360° Customer View",
      desc: "Complete customer profile with purchase history, interactions, preferences, and AI-generated insights all in one place.",
    },
    feature2: {
      title: "Lead Management",
      desc: "Capture leads from multiple sources, score them with AI, and automate follow-ups to increase conversion rates.",
    },
    feature3: {
      title: "Communication Hub",
      desc: "Unified inbox for email, chat, and social media. All customer communications in one timeline.",
    },
    feature4: {
      title: "Marketing Automation",
      desc: "Create targeted campaigns, automate email sequences, and track engagement with detailed analytics.",
    },
    feature5: {
      title: "Customer Segmentation",
      desc: "AI-powered segmentation based on behavior, value, and preferences for personalized engagement.",
    },
    feature6: {
      title: "Loyalty Programs",
      desc: "Build and manage loyalty programs, track points, and reward your best customers automatically.",
    },
    
    // Benefits
    benefitsTitle: "Why Choose Our CRM Module?",
    benefit1: "35% higher retention",
    benefit2: "2x faster response time",
    benefit3: "Complete customer view",
    benefit4: "AI-powered insights",
    
    // How it works
    howItWorksTitle: "How It Works",
    step1: {
      title: "Import Customers",
      desc: "Import existing customer data or start fresh. AI automatically enriches profiles.",
    },
    step2: {
      title: "Track Interactions",
      desc: "Every touchpoint is recorded - calls, emails, purchases, support tickets.",
    },
    step3: {
      title: "Segment & Target",
      desc: "AI segments customers by value and behavior for targeted campaigns.",
    },
    step4: {
      title: "Engage & Retain",
      desc: "Automated workflows nurture relationships and drive loyalty.",
    },
    
    // Stats
    statsTitle: "Proven Results",
    stat1: { value: "35%", label: "Higher retention" },
    stat2: { value: "2x", label: "Faster responses" },
    stat3: { value: "50%", label: "More upsells" },
    stat4: { value: "92%", label: "Customer satisfaction" },
    
    // CTA
    ctaTitle: "Ready to Know Your Customers Better?",
    ctaDesc: "Join thousands of businesses building stronger customer relationships with NexaCore CRM.",
    ctaButton: "Start Free Trial",
    
    // Navigation
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "إدارة علاقات العملاء",
    heroTitle: "ابنِ علاقات عملاء دائمة",
    heroDesc: "رؤية 360° للعملاء، رؤى تفاعل مدعومة بالذكاء الاصطناعي، سير عمل تسويق آلي، وإدارة كاملة لدورة حياة العميل.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    // Features
    featuresTitle: "ميزات وحدة CRM",
    featuresSubtitle: "كل ما تحتاجه لمعرفة وخدمة عملائك بشكل أفضل",
    
    feature1: {
      title: "رؤية 360° للعميل",
      desc: "ملف عميل كامل مع تاريخ الشراء والتفاعلات والتفضيلات والرؤى المولدة بالذكاء الاصطناعي في مكان واحد.",
    },
    feature2: {
      title: "إدارة العملاء المحتملين",
      desc: "التقط العملاء المحتملين من مصادر متعددة، قيّمهم بالذكاء الاصطناعي، وأتمت المتابعات لزيادة معدلات التحويل.",
    },
    feature3: {
      title: "مركز الاتصالات",
      desc: "صندوق بريد موحد للإيميل والدردشة ووسائل التواصل الاجتماعي. جميع اتصالات العملاء في جدول زمني واحد.",
    },
    feature4: {
      title: "أتمتة التسويق",
      desc: "أنشئ حملات مستهدفة، أتمت سلاسل البريد الإلكتروني، وتتبع التفاعل بتحليلات مفصلة.",
    },
    feature5: {
      title: "تقسيم العملاء",
      desc: "تقسيم مدعوم بالذكاء الاصطناعي بناءً على السلوك والقيمة والتفضيلات للتفاعل المخصص.",
    },
    feature6: {
      title: "برامج الولاء",
      desc: "بناء وإدارة برامج الولاء، تتبع النقاط، ومكافأة أفضل عملائك تلقائياً.",
    },
    
    // Benefits
    benefitsTitle: "لماذا تختار وحدة CRM لدينا؟",
    benefit1: "احتفاظ أعلى بنسبة 35%",
    benefit2: "سرعة استجابة ضعف",
    benefit3: "رؤية عميل كاملة",
    benefit4: "رؤى مدعومة بالذكاء الاصطناعي",
    
    // How it works
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "استورد العملاء",
      desc: "استورد بيانات العملاء الحالية أو ابدأ من جديد. الذكاء الاصطناعي يثري الملفات تلقائياً.",
    },
    step2: {
      title: "تتبع التفاعلات",
      desc: "كل نقطة اتصال تُسجل - المكالمات، الإيميلات، المشتريات، تذاكر الدعم.",
    },
    step3: {
      title: "قسّم واستهدف",
      desc: "الذكاء الاصطناعي يقسم العملاء حسب القيمة والسلوك للحملات المستهدفة.",
    },
    step4: {
      title: "تفاعل واحتفظ",
      desc: "سير العمل الآلي يرعى العلاقات ويدفع الولاء.",
    },
    
    // Stats
    statsTitle: "نتائج مثبتة",
    stat1: { value: "35%", label: "احتفاظ أعلى" },
    stat2: { value: "2x", label: "استجابات أسرع" },
    stat3: { value: "50%", label: "مبيعات إضافية أكثر" },
    stat4: { value: "92%", label: "رضا العملاء" },
    
    // CTA
    ctaTitle: "مستعد لمعرفة عملائك بشكل أفضل؟",
    ctaDesc: "انضم لآلاف الشركات التي تبني علاقات عملاء أقوى مع NexaCore CRM.",
    ctaButton: "ابدأ تجربة مجانية",
    
    // Navigation
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: Users },
  { key: "feature2", icon: UserPlus },
  { key: "feature3", icon: MessagesSquare },
  { key: "feature4", icon: Mail },
  { key: "feature5", icon: Target },
  { key: "feature6", icon: Star },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function NCCRMPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-slate-900 dark:via-slate-900 dark:to-pink-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <Link
            to="/nexacore/solutions"
            className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 mb-8 transition-colors"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 text-sm font-medium mb-6">
                <HeartHandshake className="w-4 h-4" />
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
                    className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ms-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-300 dark:border-pink-700 hover:bg-pink-50 dark:hover:bg-pink-900/20"
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-rose-500" />
                
                {/* Mock CRM Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold">
                        JD
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">John Doe</div>
                        <div className="text-xs text-slate-500">Premium Customer • €45,000 LTV</div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Orders", value: "45" },
                      { label: "Tickets", value: "3" },
                      { label: "Score", value: "92" },
                    ].map((item, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 text-center">
                        <div className="text-xs text-slate-500 dark:text-slate-400">{item.label}</div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white">{item.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { type: "Email", text: "Order confirmation sent", time: "2h ago" },
                      { type: "Call", text: "Follow-up scheduled", time: "1d ago" },
                      { type: "Purchase", text: "Order #1234 - €2,500", time: "3d ago" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 rounded bg-slate-50 dark:bg-slate-700/50">
                        <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                          {item.type === "Email" ? (
                            <Mail className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          ) : item.type === "Call" ? (
                            <Phone className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          ) : (
                            <LineChart className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-slate-600 dark:text-slate-400">{item.text}</div>
                        </div>
                        <div className="text-xs text-slate-400">{item.time}</div>
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
                <benefit.icon className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600">
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
                <div className="text-pink-100 text-sm">{stat.label}</div>
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-4">
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
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
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-pink-100 max-w-2xl mx-auto mb-8">
            {t.ctaDesc}
          </p>
          <Link to="/nexacore/register">
            <Button
              size="lg"
              className="bg-white text-pink-600 hover:bg-pink-50 px-8"
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
