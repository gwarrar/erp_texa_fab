import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { MCHeader } from "@/components/medcore/MCHeader";
import { MCFooter } from "@/components/medcore/MCFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Video,
  MonitorPlay,
  Users,
  FileText,
  Heart,
  MessageCircle,
  Smartphone,
  CheckCircle2,
  Play,
  Clock,
  Shield,
  Mic,
} from "lucide-react";

const translations = {
  en: {
    badge: "Telemedicine",
    heroTitle: "Healthcare Without Boundaries",
    heroDesc: "Provide quality care remotely with secure video consultations, integrated clinical tools, and seamless patient experience.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    featuresTitle: "Complete Telemedicine Platform",
    featuresSubtitle: "Everything you need to deliver excellent remote care",
    
    feature1: {
      title: "HD Video Consultations",
      desc: "Crystal clear video calls with screen sharing, recording capabilities, and virtual backgrounds.",
    },
    feature2: {
      title: "Virtual Waiting Room",
      desc: "Professional waiting room experience with queue management, estimated wait times, and patient education content.",
    },
    feature3: {
      title: "E-Prescriptions",
      desc: "Send prescriptions electronically during or after video consultations with pharmacy integration.",
    },
    feature4: {
      title: "Remote Monitoring",
      desc: "Integration with wearables and home health devices for continuous patient monitoring and alerts.",
    },
    feature5: {
      title: "Secure Messaging",
      desc: "HIPAA-compliant chat for follow-ups, file sharing, and non-urgent communications.",
    },
    feature6: {
      title: "Multi-Device Support",
      desc: "Access from web browsers, iOS, Android, and desktop applications with seamless switching.",
    },
    
    benefitsTitle: "Why Choose Our Telemedicine?",
    benefit1: "Expand your reach",
    benefit2: "Reduce overhead costs",
    benefit3: "Improve patient access",
    benefit4: "Flexible consultations",
    
    howItWorksTitle: "How It Works",
    step1: {
      title: "Schedule",
      desc: "Patients book virtual appointments online with their preferred provider.",
    },
    step2: {
      title: "Connect",
      desc: "Join the video call from any device - no downloads required for patients.",
    },
    step3: {
      title: "Consult",
      desc: "Conduct consultation with access to patient records, prescribing, and notes.",
    },
    step4: {
      title: "Follow-up",
      desc: "Send prescriptions, schedule follow-ups, and communicate via secure messaging.",
    },
    
    ctaTitle: "Ready to Expand Your Reach?",
    ctaDesc: "Start providing virtual care to patients anywhere with MedCore Telemedicine.",
    ctaButton: "Start Free Trial",
    
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "الطب عن بعد",
    heroTitle: "رعاية صحية بلا حدود",
    heroDesc: "قدم رعاية عالية الجودة عن بعد مع استشارات فيديو آمنة وأدوات سريرية متكاملة وتجربة مريض سلسة.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    featuresTitle: "منصة طب عن بعد متكاملة",
    featuresSubtitle: "كل ما تحتاجه لتقديم رعاية ممتازة عن بعد",
    
    feature1: {
      title: "استشارات فيديو عالية الدقة",
      desc: "مكالمات فيديو واضحة مع مشاركة الشاشة وإمكانيات التسجيل والخلفيات الافتراضية.",
    },
    feature2: {
      title: "غرفة انتظار افتراضية",
      desc: "تجربة غرفة انتظار احترافية مع إدارة الطابور وأوقات الانتظار المتوقعة ومحتوى تثقيفي للمرضى.",
    },
    feature3: {
      title: "الوصفات الإلكترونية",
      desc: "إرسال الوصفات إلكترونياً أثناء أو بعد استشارات الفيديو مع تكامل الصيدلية.",
    },
    feature4: {
      title: "المراقبة عن بعد",
      desc: "تكامل مع الأجهزة القابلة للارتداء وأجهزة الصحة المنزلية للمراقبة المستمرة والتنبيهات.",
    },
    feature5: {
      title: "المراسلة الآمنة",
      desc: "دردشة متوافقة مع HIPAA للمتابعة ومشاركة الملفات والتواصل غير العاجل.",
    },
    feature6: {
      title: "دعم الأجهزة المتعددة",
      desc: "الوصول من متصفحات الويب وiOS وأندرويد وتطبيقات سطح المكتب مع تبديل سلس.",
    },
    
    benefitsTitle: "لماذا تختار الطب عن بعد لدينا؟",
    benefit1: "وسّع نطاق وصولك",
    benefit2: "تقليل التكاليف العامة",
    benefit3: "تحسين وصول المرضى",
    benefit4: "استشارات مرنة",
    
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "الجدولة",
      desc: "المرضى يحجزون مواعيد افتراضية عبر الإنترنت مع مقدم الخدمة المفضل.",
    },
    step2: {
      title: "الاتصال",
      desc: "انضم لمكالمة الفيديو من أي جهاز - بدون تنزيلات مطلوبة للمرضى.",
    },
    step3: {
      title: "الاستشارة",
      desc: "أجرِ الاستشارة مع الوصول لسجلات المريض والوصف والملاحظات.",
    },
    step4: {
      title: "المتابعة",
      desc: "أرسل الوصفات وجدول المتابعة وتواصل عبر المراسلة الآمنة.",
    },
    
    ctaTitle: "مستعد لتوسيع نطاق وصولك؟",
    ctaDesc: "ابدأ تقديم الرعاية الافتراضية للمرضى في أي مكان مع MedCore Telemedicine.",
    ctaButton: "ابدأ تجربة مجانية",
    
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: MonitorPlay },
  { key: "feature2", icon: Users },
  { key: "feature3", icon: FileText },
  { key: "feature4", icon: Heart },
  { key: "feature5", icon: MessageCircle },
  { key: "feature6", icon: Smartphone },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function MCTelemedicinePage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = dir === "rtl";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={dir}>
      <MCHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/medcore/solutions"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-8 transition-colors"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
                <Video className="w-4 h-4" />
                {t.badge}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {t.heroTitle}
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                {t.heroDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/medcore/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-300 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                >
                  <Play className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                  {t.watchDemo}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500" />
                
                {/* Mock Video Call Interface */}
                <div className="space-y-4">
                  {/* Main Video */}
                  <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <Users className="w-10 h-10 text-indigo-400" />
                      </div>
                    </div>
                    
                    {/* Mini self-view */}
                    <div className="absolute bottom-3 right-3 w-24 h-16 bg-slate-600 rounded-lg overflow-hidden border-2 border-indigo-500">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-indigo-400/30" />
                      </div>
                    </div>
                    
                    {/* Call info */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-white text-xs">00:15:42</span>
                    </div>
                    
                    {/* Connection quality */}
                    <div className="absolute top-3 right-3 flex items-center gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`w-1 rounded bg-green-400`} style={{ height: `${i * 4}px` }} />
                      ))}
                    </div>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex items-center justify-center gap-3">
                    {[
                      { icon: Mic, active: true },
                      { icon: Video, active: true },
                      { icon: MonitorPlay, active: false },
                      { icon: MessageCircle, active: false },
                    ].map((ctrl, i) => (
                      <button
                        key={i}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                          ctrl.active
                            ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                            : "bg-slate-100 dark:bg-slate-700 text-slate-500"
                        }`}
                      >
                        <ctrl.icon className="w-5 h-5" />
                      </button>
                    ))}
                    <button className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white transition-colors">
                      <Video className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Patient Info */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                        <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-700 dark:text-slate-300">John Doe</div>
                        <div className="text-xs text-slate-500">Follow-up Consultation</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Shield className="w-4 h-4 text-green-500" />
                      HIPAA Secure
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
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[t.benefit1, t.benefit2, t.benefit3, t.benefit4].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.featuresTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{t.featuresSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const featureData = t[feature.key as keyof typeof t] as { title: string; desc: string };
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {featureData.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {featureData.desc}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.howItWorksTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const stepData = t[step as keyof typeof t] as { title: string; desc: string };

              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 start-1/2 w-full h-0.5 bg-indigo-200 dark:bg-indigo-800" />
                  )}

                  <div className="relative bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white text-2xl font-bold mb-4 relative z-10">
                      {index + 1}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {stepData.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 md:p-12 text-center"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.ctaTitle}</h2>
              <p className="text-indigo-100 text-lg mb-8">{t.ctaDesc}</p>
              <Link to="/medcore/register">
                <Button
                  size="lg"
                  className="bg-white text-indigo-700 hover:bg-indigo-50 px-8"
                >
                  {t.ctaButton}
                  <Arrow className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <MCFooter />
      <ScrollToTop />
    </div>
  );
}
