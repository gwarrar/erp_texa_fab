import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { ICHeader } from "@/components/inducore/ICHeader";
import { ICFooter } from "@/components/inducore/ICFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Car, ArrowRight, CheckCircle2, BarChart3, 
  Cog, Shield, FileCheck, Settings, Wrench,
  TrendingUp, Package, AlertTriangle
} from "lucide-react";

const translations = {
  en: {
    title: "Automotive Parts Manufacturing",
    subtitle: "Precision ERP solution for automotive component manufacturing, assembly lines, and supplier management",
    heroStats: [
      { value: "35%", label: "Faster Production" },
      { value: "99.5%", label: "Quality Rate" },
      { value: "40%", label: "Inventory Reduction" },
    ],
    overviewTitle: "Automotive Manufacturing Excellence",
    overviewDesc: "From raw material sourcing to just-in-time delivery, optimize every aspect of your automotive parts production with precision tracking and quality management.",
    features: [
      {
        icon: Car,
        title: "JIT Production Planning",
        desc: "Just-in-time scheduling integrated with OEM delivery requirements and production calendars",
      },
      {
        icon: Cog,
        title: "Tool & Die Management",
        desc: "Track tooling life cycles, maintenance schedules, and replacement planning for precision parts",
      },
      {
        icon: Shield,
        title: "IATF 16949 Compliance",
        desc: "Built-in quality management features for automotive industry certification requirements",
      },
      {
        icon: Settings,
        title: "APQP/PPAP Support",
        desc: "Advanced Product Quality Planning and Production Part Approval Process documentation",
      },
      {
        icon: Package,
        title: "EDI Integration",
        desc: "Seamless electronic data interchange with OEMs and tier suppliers for orders and forecasts",
      },
      {
        icon: Wrench,
        title: "Machine Integration",
        desc: "Real-time data from CNC machines, stamping presses, and assembly lines",
      },
    ],
    benefits: [
      "Meet OEM delivery schedules with JIT precision",
      "Ensure complete part traceability and recall readiness",
      "Reduce scrap and rework with real-time quality control",
      "Optimize inventory levels with demand forecasting",
      "Streamline PPAP submissions and documentation",
    ],
    ctaTitle: "Drive Your Manufacturing Forward",
    ctaDesc: "See how InduCore can optimize your automotive parts production",
    ctaButton: "Schedule a Demo",
    backToSolutions: "Back to Solutions",
    keyBenefits: "Key Benefits",
  },
  ar: {
    title: "تصنيع قطع غيار السيارات",
    subtitle: "حل ERP دقيق لتصنيع مكونات السيارات وخطوط التجميع وإدارة الموردين",
    heroStats: [
      { value: "35%", label: "إنتاج أسرع" },
      { value: "99.5%", label: "معدل الجودة" },
      { value: "40%", label: "تخفيض المخزون" },
    ],
    overviewTitle: "تميز تصنيع السيارات",
    overviewDesc: "من توريد المواد الأولية إلى التسليم في الوقت المناسب، قم بتحسين كل جانب من إنتاج قطع غيار السيارات مع التتبع الدقيق وإدارة الجودة.",
    features: [
      {
        icon: Car,
        title: "تخطيط الإنتاج JIT",
        desc: "جدولة في الوقت المناسب متكاملة مع متطلبات تسليم OEM وجداول الإنتاج",
      },
      {
        icon: Cog,
        title: "إدارة الأدوات والقوالب",
        desc: "تتبع دورات حياة الأدوات وجداول الصيانة وتخطيط الاستبدال للأجزاء الدقيقة",
      },
      {
        icon: Shield,
        title: "امتثال IATF 16949",
        desc: "ميزات إدارة الجودة المدمجة لمتطلبات شهادة صناعة السيارات",
      },
      {
        icon: Settings,
        title: "دعم APQP/PPAP",
        desc: "تخطيط جودة المنتج المتقدم وتوثيق عملية الموافقة على أجزاء الإنتاج",
      },
      {
        icon: Package,
        title: "تكامل EDI",
        desc: "تبادل البيانات الإلكترونية السلس مع OEMs وموردي الطبقات للطلبات والتوقعات",
      },
      {
        icon: Wrench,
        title: "تكامل الآلات",
        desc: "بيانات فورية من آلات CNC ومكابس الختم وخطوط التجميع",
      },
    ],
    benefits: [
      "تلبية جداول تسليم OEM بدقة JIT",
      "ضمان التتبع الكامل للأجزاء والاستعداد للاستدعاء",
      "تقليل الخردة وإعادة العمل مع مراقبة الجودة الفورية",
      "تحسين مستويات المخزون مع التنبؤ بالطلب",
      "تبسيط تقديمات PPAP والتوثيق",
    ],
    ctaTitle: "قُد تصنيعك للأمام",
    ctaDesc: "اكتشف كيف يمكن لـ InduCore تحسين إنتاج قطع غيار السيارات",
    ctaButton: "احجز عرضاً تجريبياً",
    backToSolutions: "العودة للحلول",
    keyBenefits: "الفوائد الرئيسية",
  },
};

export default function ICAutomotivePage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <ICHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptLTEyLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptLTEyLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0tMTItMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Car className="w-5 h-5 text-red-400" />
              <span className="text-slate-100 text-sm font-medium">InduCore Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              {t.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {t.heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inducore/contact">
                <Button size="lg" className="bg-red-700 text-white hover:bg-red-600 px-8">
                  {t.ctaButton}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
                </Button>
              </Link>
              <Link to="/inducore/solutions">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  {t.backToSolutions}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.overviewTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t.overviewDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-700">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                {t.keyBenefits}
              </h2>
              <div className="space-y-4">
                {t.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-zinc-900 rounded-2xl p-8 text-white">
                <Car className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">OEM Integration</h3>
                <p className="text-slate-300 mb-6">
                  Seamless integration with major automotive OEMs through standardized EDI protocols and real-time supply chain visibility.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm">IATF 16949</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-5 h-5" />
                    <span className="text-sm">PPAP Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            {t.ctaDesc}
          </p>
          <Link to="/inducore/contact">
            <Button size="lg" className="bg-red-700 text-white hover:bg-red-600 px-8">
              {t.ctaButton}
              <ArrowRight className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
            </Button>
          </Link>
        </div>
      </section>

      <ICFooter />
    </div>
  );
}
