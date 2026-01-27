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
  Calendar,
  Globe,
  Brain,
  Bell,
  ListChecks,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  Users,
  Sparkles,
  Play,
  Smartphone,
} from "lucide-react";

const translations = {
  en: {
    badge: "Smart Appointment Scheduling",
    heroTitle: "Streamline Your Appointment Management",
    heroDesc: "Automated scheduling that matches patients with the right doctors at the right time. Reduce no-shows and optimize provider schedules.",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo",
    
    featuresTitle: "Intelligent Scheduling Features",
    featuresSubtitle: "Modern appointment management that works for patients and providers",
    
    feature1: {
      title: "Online Booking Portal",
      desc: "Allow patients to book appointments 24/7 through web or mobile app with real-time availability.",
    },
    feature2: {
      title: "AI-Powered Scheduling",
      desc: "Smart algorithms consider doctor availability, specialties, patient preferences, and optimal scheduling patterns.",
    },
    feature3: {
      title: "Automated Reminders",
      desc: "SMS, email, and WhatsApp reminders to reduce no-shows by up to 50%. Customizable timing and content.",
    },
    feature4: {
      title: "Waiting List Management",
      desc: "Automatic notifications when earlier slots become available. Priority-based queue management.",
    },
    feature5: {
      title: "Multi-Location Support",
      desc: "Manage appointments across multiple clinics and hospital branches from one dashboard.",
    },
    feature6: {
      title: "Calendar Integration",
      desc: "Sync with Google Calendar, Outlook, Apple Calendar, and other calendar applications.",
    },
    
    benefitsTitle: "Why Choose Our Scheduling?",
    benefit1: "Reduce no-shows by 50%",
    benefit2: "24/7 online booking",
    benefit3: "Optimize doctor schedules",
    benefit4: "Multi-channel reminders",
    
    howItWorksTitle: "How It Works",
    step1: {
      title: "Patient Books Online",
      desc: "Patients choose preferred doctor, specialty, and time slot from available options.",
    },
    step2: {
      title: "Smart Matching",
      desc: "System matches patient needs with optimal provider and time slot.",
    },
    step3: {
      title: "Automated Reminders",
      desc: "Patients receive timely reminders via their preferred channel.",
    },
    step4: {
      title: "Check-in & Follow-up",
      desc: "Easy check-in on arrival and automated follow-up scheduling.",
    },
    
    ctaTitle: "Ready to Reduce No-Shows?",
    ctaDesc: "Start optimizing your appointment scheduling today with MedCore's intelligent booking system.",
    ctaButton: "Start Free Trial",
    
    backToSolutions: "Back to Solutions",
  },
  ar: {
    badge: "جدولة المواعيد الذكية",
    heroTitle: "بسّط إدارة المواعيد",
    heroDesc: "جدولة تلقائية تطابق المرضى مع الأطباء المناسبين في الوقت المناسب. قلل الغياب وحسّن جداول مقدمي الخدمات.",
    startTrial: "ابدأ تجربة مجانية",
    watchDemo: "شاهد العرض",
    
    featuresTitle: "مميزات الجدولة الذكية",
    featuresSubtitle: "إدارة مواعيد حديثة تعمل للمرضى ومقدمي الخدمات",
    
    feature1: {
      title: "بوابة الحجز عبر الإنترنت",
      desc: "السماح للمرضى بحجز المواعيد على مدار الساعة عبر الويب أو التطبيق مع التوفر في الوقت الفعلي.",
    },
    feature2: {
      title: "جدولة مدعومة بالذكاء الاصطناعي",
      desc: "خوارزميات ذكية تراعي توفر الأطباء والتخصصات وتفضيلات المرضى وأنماط الجدولة المثلى.",
    },
    feature3: {
      title: "تذكيرات تلقائية",
      desc: "تذكيرات عبر الرسائل والبريد والواتساب لتقليل الغياب بنسبة 50%. توقيت ومحتوى قابل للتخصيص.",
    },
    feature4: {
      title: "إدارة قائمة الانتظار",
      desc: "إشعارات تلقائية عند توفر مواعيد أبكر. إدارة الطابور حسب الأولوية.",
    },
    feature5: {
      title: "دعم المواقع المتعددة",
      desc: "إدارة المواعيد عبر عيادات وفروع مستشفى متعددة من لوحة تحكم واحدة.",
    },
    feature6: {
      title: "تكامل التقويم",
      desc: "مزامنة مع تقويم جوجل وأوتلوك وتقويم آبل وتطبيقات التقويم الأخرى.",
    },
    
    benefitsTitle: "لماذا تختار جدولتنا؟",
    benefit1: "تقليل الغياب بنسبة 50%",
    benefit2: "حجز على مدار الساعة",
    benefit3: "تحسين جداول الأطباء",
    benefit4: "تذكيرات متعددة القنوات",
    
    howItWorksTitle: "كيف يعمل",
    step1: {
      title: "المريض يحجز عبر الإنترنت",
      desc: "المرضى يختارون الطبيب والتخصص والوقت المفضل من الخيارات المتاحة.",
    },
    step2: {
      title: "المطابقة الذكية",
      desc: "النظام يطابق احتياجات المريض مع مقدم الخدمة والوقت الأمثل.",
    },
    step3: {
      title: "تذكيرات تلقائية",
      desc: "المرضى يتلقون تذكيرات في الوقت المناسب عبر قناتهم المفضلة.",
    },
    step4: {
      title: "تسجيل الوصول والمتابعة",
      desc: "تسجيل وصول سهل وجدولة متابعة تلقائية.",
    },
    
    ctaTitle: "مستعد لتقليل الغياب؟",
    ctaDesc: "ابدأ تحسين جدولة المواعيد اليوم مع نظام الحجز الذكي من MedCore.",
    ctaButton: "ابدأ تجربة مجانية",
    
    backToSolutions: "العودة للحلول",
  },
};

const features = [
  { key: "feature1", icon: Globe },
  { key: "feature2", icon: Brain },
  { key: "feature3", icon: Bell },
  { key: "feature4", icon: ListChecks },
  { key: "feature5", icon: Building2 },
  { key: "feature6", icon: CalendarDays },
];

const steps = ["step1", "step2", "step3", "step4"];

export default function MCAppointmentsPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = dir === "rtl";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={dir}>
      <MCHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/medcore/solutions"
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
                <Calendar className="w-4 h-4" />
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
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8"
                  >
                    {t.startTrial}
                    <Arrow className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                
                {/* Mock Calendar Interface */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="font-semibold text-slate-900 dark:text-white">March 2024</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-700" />
                      <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-700" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-500">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="p-2">{day}</div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 35 }, (_, i) => (
                      <div
                        key={i}
                        className={`h-10 rounded flex items-center justify-center text-sm ${
                          i === 14
                            ? "bg-blue-600 text-white"
                            : i % 7 === 0 || i % 7 === 6
                            ? "bg-slate-50 dark:bg-slate-700/30 text-slate-400"
                            : "bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400"
                        } ${[8, 10, 15, 22, 24].includes(i) ? "ring-2 ring-blue-400 ring-offset-1" : ""}`}
                      >
                        {i < 3 ? "" : i - 2}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700 space-y-2">
                    {[
                      { time: "09:00", name: "Dr. Smith - Consultation", color: "blue" },
                      { time: "10:30", name: "Lab Results Review", color: "cyan" },
                      { time: "14:00", name: "Follow-up Visit", color: "emerald" },
                    ].map((apt, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 p-2 rounded bg-${apt.color}-50 dark:bg-${apt.color}-900/20`}
                      >
                        <div className={`w-1 h-8 rounded bg-${apt.color}-500`} />
                        <div>
                          <div className="text-xs text-slate-500">{apt.time}</div>
                          <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{apt.name}</div>
                        </div>
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
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
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
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
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

      {/* How It Works Section */}
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
                    <div className="hidden lg:block absolute top-8 start-1/2 w-full h-0.5 bg-blue-200 dark:bg-blue-800" />
                  )}

                  <div className="relative bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4 relative z-10">
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-8 md:p-12 text-center"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.ctaTitle}</h2>
              <p className="text-blue-100 text-lg mb-8">{t.ctaDesc}</p>
              <Link to="/medcore/register">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8"
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
