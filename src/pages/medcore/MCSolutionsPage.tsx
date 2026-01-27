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
  Heart,
  Stethoscope,
  Pill,
  FlaskConical,
  Receipt,
  Activity,
  Video,
  Calendar,
  FileText,
  Shield,
  CheckCircle2,
  Sparkles,
  Building2,
  Users,
  Globe,
  Zap,
} from "lucide-react";

const translations = {
  en: {
    pageTitle: "Comprehensive Healthcare Solutions",
    pageSubtitle: "Integrated systems designed specifically for modern healthcare institutions",
    allSolutions: "All Solutions",
    viewDemo: "View Demo",
    requestConsultation: "Request Consultation",
    whyChoose: "Why Choose Our Solutions?",
    whyChooseDesc: "Our solutions are designed by healthcare professionals for healthcare professionals",
    learnMore: "Learn More",
    getStarted: "Get Started",
    
    // Solutions
    emr: {
      title: "Electronic Medical Records",
      desc: "Complete digital patient records management with full clinical history tracking, diagnoses, treatments, and lab results.",
      link: "/medcore/solutions/emr",
    },
    appointments: {
      title: "Smart Appointment Scheduling",
      desc: "Intelligent booking system with AI-powered scheduling, automated reminders, and real-time availability.",
      link: "/medcore/solutions/appointments",
    },
    pharmacy: {
      title: "Pharmacy Management",
      desc: "Complete pharmacy operations from inventory management to dispensing with safety checks and drug interaction alerts.",
      link: "/medcore/solutions/pharmacy",
    },
    laboratory: {
      title: "Laboratory Integration",
      desc: "Seamless lab workflow from test ordering to results delivery with equipment integration and QC tracking.",
      link: "/medcore/solutions/laboratory",
    },
    billing: {
      title: "Medical Billing & Insurance",
      desc: "Comprehensive billing with insurance claims processing, payment tracking, and revenue cycle management.",
      link: "/medcore/solutions/billing",
    },
    analytics: {
      title: "Healthcare Analytics",
      desc: "Data-driven insights with real-time dashboards, clinical analytics, and AI-powered predictions.",
      link: "/medcore/solutions/analytics",
    },
    telemedicine: {
      title: "Telemedicine",
      desc: "Secure video consultations, virtual waiting rooms, e-prescriptions, and remote patient monitoring.",
      link: "/medcore/solutions/telemedicine",
    },
    
    // Why Choose Features
    feature1: {
      title: "Healthcare-First Design",
      desc: "Built from the ground up for healthcare workflows and compliance requirements.",
    },
    feature2: {
      title: "Seamless Integration",
      desc: "All modules work together seamlessly, sharing data in real-time.",
    },
    feature3: {
      title: "Regulatory Compliance",
      desc: "HIPAA, GDPR, and local healthcare regulations built-in.",
    },
    feature4: {
      title: "24/7 Expert Support",
      desc: "Dedicated healthcare IT specialists available around the clock.",
    },
    
    // Stats
    stat1: "500+",
    stat1Label: "Healthcare Institutions",
    stat2: "2M+",
    stat2Label: "Patients Managed",
    stat3: "15+",
    stat3Label: "Years Experience",
    stat4: "99.9%",
    stat4Label: "Uptime Guarantee",
    
    // CTA
    ctaTitle: "Ready to Transform Your Healthcare Institution?",
    ctaDesc: "Schedule a personalized demo to see how MedCore can streamline your operations.",
    ctaButton: "Schedule Demo",
  },
  ar: {
    pageTitle: "حلول رعاية صحية شاملة",
    pageSubtitle: "أنظمة متكاملة مصممة خصيصاً للمؤسسات الصحية الحديثة",
    allSolutions: "جميع الحلول",
    viewDemo: "مشاهدة العرض",
    requestConsultation: "طلب استشارة",
    whyChoose: "لماذا تختار حلولنا؟",
    whyChooseDesc: "حلولنا مصممة من قبل متخصصي الرعاية الصحية لمتخصصي الرعاية الصحية",
    learnMore: "اعرف المزيد",
    getStarted: "ابدأ الآن",
    
    // Solutions
    emr: {
      title: "السجلات الطبية الإلكترونية",
      desc: "إدارة السجلات الرقمية للمرضى مع تتبع كامل للتاريخ السريري والتشخيصات والعلاجات ونتائج المختبر.",
      link: "/medcore/solutions/emr",
    },
    appointments: {
      title: "جدولة المواعيد الذكية",
      desc: "نظام حجز ذكي مع جدولة مدعومة بالذكاء الاصطناعي وتذكيرات آلية وتوفر في الوقت الفعلي.",
      link: "/medcore/solutions/appointments",
    },
    pharmacy: {
      title: "إدارة الصيدلية",
      desc: "عمليات صيدلية كاملة من إدارة المخزون إلى الصرف مع فحوصات السلامة وتنبيهات تفاعل الأدوية.",
      link: "/medcore/solutions/pharmacy",
    },
    laboratory: {
      title: "تكامل المختبر",
      desc: "سير عمل مختبر سلس من طلب الفحص إلى تسليم النتائج مع تكامل الأجهزة وتتبع الجودة.",
      link: "/medcore/solutions/laboratory",
    },
    billing: {
      title: "الفوترة الطبية والتأمين",
      desc: "فوترة شاملة مع معالجة مطالبات التأمين وتتبع المدفوعات وإدارة دورة الإيرادات.",
      link: "/medcore/solutions/billing",
    },
    analytics: {
      title: "تحليلات الرعاية الصحية",
      desc: "رؤى مدعومة بالبيانات مع لوحات معلومات فورية وتحليلات سريرية وتنبؤات ذكية.",
      link: "/medcore/solutions/analytics",
    },
    telemedicine: {
      title: "الطب عن بعد",
      desc: "استشارات فيديو آمنة وغرف انتظار افتراضية ووصفات إلكترونية ومراقبة المرضى عن بعد.",
      link: "/medcore/solutions/telemedicine",
    },
    
    // Why Choose Features
    feature1: {
      title: "تصميم للرعاية الصحية أولاً",
      desc: "مبني من الصفر لسير عمل الرعاية الصحية ومتطلبات الامتثال.",
    },
    feature2: {
      title: "تكامل سلس",
      desc: "جميع الوحدات تعمل معاً بسلاسة، تتشارك البيانات في الوقت الفعلي.",
    },
    feature3: {
      title: "الامتثال التنظيمي",
      desc: "HIPAA و GDPR واللوائح الصحية المحلية مدمجة.",
    },
    feature4: {
      title: "دعم خبراء 24/7",
      desc: "متخصصون في تكنولوجيا المعلومات الصحية متاحون على مدار الساعة.",
    },
    
    // Stats
    stat1: "+500",
    stat1Label: "مؤسسة صحية",
    stat2: "+2M",
    stat2Label: "مريض مُدار",
    stat3: "+15",
    stat3Label: "سنة خبرة",
    stat4: "99.9%",
    stat4Label: "ضمان التشغيل",
    
    // CTA
    ctaTitle: "مستعد لتحويل مؤسستك الصحية؟",
    ctaDesc: "احجز عرضاً مخصصاً لترى كيف يمكن لـ MedCore تبسيط عملياتك.",
    ctaButton: "احجز عرض",
  },
};

const solutions = [
  { key: "emr", icon: FileText, color: "emerald" },
  { key: "appointments", icon: Calendar, color: "blue" },
  { key: "pharmacy", icon: Pill, color: "purple" },
  { key: "laboratory", icon: FlaskConical, color: "amber" },
  { key: "billing", icon: Receipt, color: "rose" },
  { key: "analytics", icon: Activity, color: "cyan" },
  { key: "telemedicine", icon: Video, color: "indigo" },
];

const colorClasses = {
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-800",
    hover: "hover:border-emerald-400 dark:hover:border-emerald-600",
  },
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
    hover: "hover:border-blue-400 dark:hover:border-blue-600",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-800",
    hover: "hover:border-purple-400 dark:hover:border-purple-600",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-800",
    hover: "hover:border-amber-400 dark:hover:border-amber-600",
  },
  rose: {
    bg: "bg-rose-100 dark:bg-rose-900/30",
    text: "text-rose-600 dark:text-rose-400",
    border: "border-rose-200 dark:border-rose-800",
    hover: "hover:border-rose-400 dark:hover:border-rose-600",
  },
  cyan: {
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
    text: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-200 dark:border-cyan-800",
    hover: "hover:border-cyan-400 dark:hover:border-cyan-600",
  },
  indigo: {
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
    text: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-200 dark:border-indigo-800",
    hover: "hover:border-indigo-400 dark:hover:border-indigo-600",
  },
};

export default function MCSolutionsPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = dir === "rtl";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={dir}>
      <MCHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-900/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {t.allSolutions}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              {t.pageTitle}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              {t.pageSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8"
              >
                {t.viewDemo}
                <Arrow className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
              </Button>
              <Link to="/medcore/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-300 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                >
                  {t.requestConsultation}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: t.stat1, label: t.stat1Label, icon: Building2 },
              { value: t.stat2, label: t.stat2Label, icon: Users },
              { value: t.stat3, label: t.stat3Label, icon: Globe },
              { value: t.stat4, label: t.stat4Label, icon: Zap },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const solutionData = t[solution.key as keyof typeof t] as { title: string; desc: string; link: string };
              const colors = colorClasses[solution.color as keyof typeof colorClasses];
              const Icon = solution.icon;

              return (
                <motion.div
                  key={solution.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={solutionData.link}>
                    <Card
                      className={`p-6 h-full border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-lg cursor-pointer group bg-white dark:bg-slate-800`}
                    >
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} ${colors.text} mb-4`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {solutionData.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                        {solutionData.desc}
                      </p>

                      <div className={`inline-flex items-center gap-2 ${colors.text} font-medium`}>
                        {t.learnMore}
                        <Arrow className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.whyChoose}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{t.whyChooseDesc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[t.feature1, t.feature2, t.feature3, t.feature4].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 md:p-12 text-center"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.ctaTitle}</h2>
              <p className="text-emerald-100 text-lg mb-8">{t.ctaDesc}</p>
              <Link to="/medcore/contact">
                <Button
                  size="lg"
                  className="bg-white text-emerald-700 hover:bg-emerald-50 px-8"
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
