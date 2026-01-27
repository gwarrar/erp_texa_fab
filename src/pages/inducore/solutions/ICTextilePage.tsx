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
  Layers, ArrowRight, CheckCircle2, BarChart3, 
  Scissors, Palette, Ruler, Package, Shirt,
  TrendingUp, FileCheck, ScanLine
} from "lucide-react";

const translations = {
  en: {
    title: "Textile & Garment Manufacturing",
    subtitle: "Complete ERP solution for fabric production, garment manufacturing, and fashion supply chains",
    heroStats: [
      { value: "30%", label: "Waste Reduction" },
      { value: "45%", label: "Faster Time-to-Market" },
      { value: "99%", label: "Order Accuracy" },
    ],
    overviewTitle: "End-to-End Textile Manufacturing",
    overviewDesc: "From yarn sourcing to finished garment delivery, manage every stage of textile and apparel production with precision and real-time visibility.",
    features: [
      {
        icon: Layers,
        title: "Fabric Roll Management",
        desc: "Track fabric rolls by lot, color, width, and quality grade with automatic shade grouping",
      },
      {
        icon: Palette,
        title: "Color Management",
        desc: "Manage dye lots, color matching, and shade variations across production batches",
      },
      {
        icon: Scissors,
        title: "Cut Planning & Optimization",
        desc: "Optimize fabric utilization with intelligent marker planning and nesting algorithms",
      },
      {
        icon: Ruler,
        title: "Size & Fit Management",
        desc: "Handle complex size matrices, grading rules, and fit specifications",
      },
      {
        icon: Shirt,
        title: "Style & BOM Management",
        desc: "Manage style variations, technical packs, and multi-level bills of materials",
      },
      {
        icon: ScanLine,
        title: "RFID Tracking",
        desc: "Real-time tracking of rolls, bundles, and finished garments through production",
      },
    ],
    benefits: [
      "Reduce fabric waste with optimized cut planning",
      "Ensure color consistency across production runs",
      "Track every roll and garment in real-time",
      "Manage complex style variations efficiently",
      "Meet fast-fashion delivery timelines",
    ],
    ctaTitle: "Transform Your Textile Operations",
    ctaDesc: "See how InduCore can optimize your fabric and garment production",
    ctaButton: "Schedule a Demo",
    backToSolutions: "Back to Solutions",
    keyBenefits: "Key Benefits",
  },
  ar: {
    title: "تصنيع النسيج والملابس",
    subtitle: "حل ERP متكامل لإنتاج الأقمشة وتصنيع الملابس وسلاسل توريد الأزياء",
    heroStats: [
      { value: "30%", label: "تقليل الهدر" },
      { value: "45%", label: "وصول أسرع للسوق" },
      { value: "99%", label: "دقة الطلبات" },
    ],
    overviewTitle: "تصنيع نسيج شامل",
    overviewDesc: "من توريد الخيوط إلى تسليم الملابس الجاهزة، قم بإدارة كل مرحلة من إنتاج النسيج والملابس بدقة ورؤية فورية.",
    features: [
      {
        icon: Layers,
        title: "إدارة لفات القماش",
        desc: "تتبع لفات القماش حسب الدفعة واللون والعرض ودرجة الجودة مع التجميع التلقائي للظلال",
      },
      {
        icon: Palette,
        title: "إدارة الألوان",
        desc: "إدارة دفعات الصبغ ومطابقة الألوان وتنوعات الظلال عبر دفعات الإنتاج",
      },
      {
        icon: Scissors,
        title: "تخطيط القص والتحسين",
        desc: "تحسين استخدام القماش مع خوارزميات تخطيط العلامات والتعشيش الذكية",
      },
      {
        icon: Ruler,
        title: "إدارة المقاسات والملاءمة",
        desc: "التعامل مع مصفوفات المقاسات المعقدة وقواعد التدريج ومواصفات الملاءمة",
      },
      {
        icon: Shirt,
        title: "إدارة الأنماط وقوائم المواد",
        desc: "إدارة تنوعات الأنماط والحزم التقنية وقوائم المواد متعددة المستويات",
      },
      {
        icon: ScanLine,
        title: "تتبع RFID",
        desc: "تتبع فوري للفات والحزم والملابس الجاهزة خلال الإنتاج",
      },
    ],
    benefits: [
      "تقليل هدر القماش مع تخطيط القص المحسن",
      "ضمان اتساق الألوان عبر عمليات الإنتاج",
      "تتبع كل لفة وقطعة ملابس في الوقت الفعلي",
      "إدارة تنوعات الأنماط المعقدة بكفاءة",
      "تلبية مواعيد تسليم الموضة السريعة",
    ],
    ctaTitle: "حوّل عمليات النسيج الخاصة بك",
    ctaDesc: "اكتشف كيف يمكن لـ InduCore تحسين إنتاج الأقمشة والملابس",
    ctaButton: "احجز عرضاً تجريبياً",
    backToSolutions: "العودة للحلول",
    keyBenefits: "الفوائد الرئيسية",
  },
};

export default function ICTextilePage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <ICHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptLTEyLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptLTEyLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0tMTItMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Layers className="w-5 h-5 text-purple-300" />
              <span className="text-purple-100 text-sm font-medium">InduCore Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-10">
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
                  <div className="text-purple-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inducore/contact">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 px-8">
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
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-700 dark:text-purple-400" />
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
                    <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 text-white">
                <Shirt className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Fashion-Ready ERP</h3>
                <p className="text-purple-100 mb-6">
                  Built for the fast pace of fashion manufacturing with rapid style changes, seasonal collections, and multi-channel distribution.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Scissors className="w-5 h-5" />
                    <span className="text-sm">Cut Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    <span className="text-sm">Color Matching</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            {t.ctaDesc}
          </p>
          <Link to="/inducore/contact">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 px-8">
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
