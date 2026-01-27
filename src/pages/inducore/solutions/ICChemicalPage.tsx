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
  Factory, ArrowRight, CheckCircle2, BarChart3, 
  Beaker, Shield, FileCheck, Thermometer, AlertTriangle,
  TrendingUp, Droplets, Wind
} from "lucide-react";

const translations = {
  en: {
    title: "Chemical Processing",
    subtitle: "Comprehensive ERP solution for chemical manufacturing, process industries, and regulatory compliance",
    heroStats: [
      { value: "100%", label: "Safety Compliance" },
      { value: "35%", label: "Yield Improvement" },
      { value: "99.5%", label: "Batch Consistency" },
    ],
    overviewTitle: "Process Industry Excellence",
    overviewDesc: "From raw material handling to finished product packaging, manage every aspect of chemical processing with precision, safety, and regulatory compliance.",
    features: [
      {
        icon: Beaker,
        title: "Recipe & Formula Management",
        desc: "Manage complex formulations, process parameters, and batch scaling with version control",
      },
      {
        icon: Thermometer,
        title: "Process Monitoring",
        desc: "Real-time monitoring of temperature, pressure, pH, and other critical process parameters",
      },
      {
        icon: Shield,
        title: "Safety Data Sheets",
        desc: "Automated SDS generation and management with GHS classification and labeling",
      },
      {
        icon: AlertTriangle,
        title: "Hazard Management",
        desc: "Track hazardous materials, storage requirements, and compatibility matrices",
      },
      {
        icon: Droplets,
        title: "Yield & Loss Tracking",
        desc: "Monitor reaction yields, material losses, and by-product generation with analytics",
      },
      {
        icon: FileCheck,
        title: "Regulatory Compliance",
        desc: "Built-in compliance for REACH, EPA, OSHA, and industry-specific regulations",
      },
    ],
    benefits: [
      "Ensure batch-to-batch consistency and quality",
      "Maintain complete regulatory compliance",
      "Optimize yields and reduce material losses",
      "Track hazardous materials safely",
      "Streamline documentation for audits",
    ],
    ctaTitle: "Transform Your Chemical Operations",
    ctaDesc: "See how InduCore can optimize your process manufacturing",
    ctaButton: "Schedule a Demo",
    backToSolutions: "Back to Solutions",
    keyBenefits: "Key Benefits",
  },
  ar: {
    title: "المعالجة الكيميائية",
    subtitle: "حل ERP شامل للتصنيع الكيميائي وصناعات العمليات والامتثال التنظيمي",
    heroStats: [
      { value: "100%", label: "امتثال السلامة" },
      { value: "35%", label: "تحسين الإنتاجية" },
      { value: "99.5%", label: "اتساق الدفعات" },
    ],
    overviewTitle: "تميز صناعة العمليات",
    overviewDesc: "من التعامل مع المواد الأولية إلى تعبئة المنتجات النهائية، قم بإدارة كل جانب من المعالجة الكيميائية بدقة وسلامة وامتثال تنظيمي.",
    features: [
      {
        icon: Beaker,
        title: "إدارة الوصفات والتركيبات",
        desc: "إدارة التركيبات المعقدة ومعلمات العمليات وتوسيع الدفعات مع التحكم في الإصدارات",
      },
      {
        icon: Thermometer,
        title: "مراقبة العمليات",
        desc: "مراقبة فورية لدرجة الحرارة والضغط ودرجة الحموضة ومعلمات العمليات الحرجة الأخرى",
      },
      {
        icon: Shield,
        title: "صحائف بيانات السلامة",
        desc: "إنشاء وإدارة SDS آلياً مع تصنيف GHS ووضع العلامات",
      },
      {
        icon: AlertTriangle,
        title: "إدارة المخاطر",
        desc: "تتبع المواد الخطرة ومتطلبات التخزين ومصفوفات التوافق",
      },
      {
        icon: Droplets,
        title: "تتبع الإنتاجية والفقد",
        desc: "مراقبة عوائد التفاعل وخسائر المواد وتوليد المنتجات الثانوية مع التحليلات",
      },
      {
        icon: FileCheck,
        title: "الامتثال التنظيمي",
        desc: "امتثال مدمج لـ REACH و EPA و OSHA واللوائح الخاصة بالصناعة",
      },
    ],
    benefits: [
      "ضمان الاتساق والجودة من دفعة لأخرى",
      "الحفاظ على الامتثال التنظيمي الكامل",
      "تحسين العوائد وتقليل خسائر المواد",
      "تتبع المواد الخطرة بأمان",
      "تبسيط التوثيق للمراجعات",
    ],
    ctaTitle: "حوّل عملياتك الكيميائية",
    ctaDesc: "اكتشف كيف يمكن لـ InduCore تحسين تصنيع العمليات",
    ctaButton: "احجز عرضاً تجريبياً",
    backToSolutions: "العودة للحلول",
    keyBenefits: "الفوائد الرئيسية",
  },
};

export default function ICChemicalPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <ICHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptLTEyLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptLTEyLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0tMTItMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Beaker className="w-5 h-5 text-amber-300" />
              <span className="text-amber-100 text-sm font-medium">InduCore Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-10">
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
                  <div className="text-amber-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inducore/contact">
                <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50 px-8">
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
                  <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-amber-700 dark:text-amber-400" />
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
                    <CheckCircle2 className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 text-white">
                <Beaker className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Process Safety</h3>
                <p className="text-amber-100 mb-6">
                  Comprehensive safety features for chemical processing including hazard tracking, SDS management, and environmental compliance.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm">REACH Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="text-sm">GHS Labels</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            {t.ctaDesc}
          </p>
          <Link to="/inducore/contact">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50 px-8">
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
