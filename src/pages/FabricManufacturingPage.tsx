import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Factory,
  Settings,
  Layers,
  Package,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock,
  Zap,
  AlertTriangle,
  Wrench,
  Gauge,
  Target,
  TrendingUp,
  FileText,
  Cog,
  Box,
  Scale,
  Thermometer
} from "lucide-react";

function FabricManufacturingContent() {
  const { language, dir } = useLanguage();

  const features = [
    {
      icon: ClipboardList,
      titleAr: "أوامر الإنتاج",
      titleEn: "Production Orders",
      descAr: "إنشاء وإدارة أوامر الإنتاج مع تتبع كامل للحالة والتقدم",
      descEn: "Create and manage production orders with full status and progress tracking",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Cog,
      titleAr: "إدارة خطوط الإنتاج",
      titleEn: "Production Line Management",
      descAr: "تخصيص وجدولة خطوط الإنتاج لتحقيق أقصى كفاءة",
      descEn: "Allocate and schedule production lines for maximum efficiency",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Box,
      titleAr: "تتبع المواد الخام",
      titleEn: "Raw Material Tracking",
      descAr: "مراقبة المواد الخام من الاستلام حتى استخدامها في الإنتاج",
      descEn: "Monitor raw materials from receipt to use in production",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Clock,
      titleAr: "جدولة الإنتاج",
      titleEn: "Production Scheduling",
      descAr: "تخطيط وجدولة ذكية للإنتاج مع تحسين استغلال الموارد",
      descEn: "Smart planning and scheduling with resource optimization",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Target,
      titleAr: "مراقبة الجودة",
      titleEn: "Quality Control",
      descAr: "فحوصات جودة في كل مرحلة مع توثيق النتائج",
      descEn: "Quality checks at every stage with documented results",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Scale,
      titleAr: "حساب تكاليف التصنيع",
      titleEn: "Manufacturing Cost",
      descAr: "حساب دقيق لتكلفة الإنتاج شاملة المواد والعمالة والنفقات",
      descEn: "Accurate production cost calculation including materials, labor, and overhead",
      color: "from-red-500 to-red-600"
    }
  ];

  const productionStages = [
    { titleAr: "استلام المواد الخام", titleEn: "Raw Material Receipt", icon: Package },
    { titleAr: "فحص الجودة الأولي", titleEn: "Initial Quality Check", icon: Target },
    { titleAr: "التحضير والتجهيز", titleEn: "Preparation", icon: Settings },
    { titleAr: "النسج / الحياكة", titleEn: "Weaving / Knitting", icon: Layers },
    { titleAr: "الصباغة والتشطيب", titleEn: "Dyeing & Finishing", icon: Thermometer },
    { titleAr: "الفحص النهائي", titleEn: "Final Inspection", icon: CheckCircle2 },
    { titleAr: "التعبئة والتغليف", titleEn: "Packaging", icon: Box },
    { titleAr: "التخزين والشحن", titleEn: "Storage & Shipping", icon: Factory }
  ];

  const kpis = [
    { titleAr: "كفاءة الإنتاج", titleEn: "Production Efficiency", value: "94%", trend: "+5%" },
    { titleAr: "معدل الجودة", titleEn: "Quality Rate", value: "98.5%", trend: "+2%" },
    { titleAr: "وقت التسليم", titleEn: "Delivery Time", value: "3 أيام", trend: "-1 يوم" },
    { titleAr: "الهدر", titleEn: "Waste", value: "2.1%", trend: "-0.5%" }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <Factory className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-semibold text-indigo-600">
                {language === "ar" ? "إدارة تصنيع الأقمشة" : "Fabric Manufacturing"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>تصنيع أقمشة <span className="text-indigo-500">باحترافية</span></>
              ) : (
                <>Professional <span className="text-indigo-500">Fabric Manufacturing</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "ar" 
                ? "نظام متكامل لإدارة مصانع الأقمشة من المواد الخام إلى المنتج النهائي"
                : "Complete system for managing fabric factories from raw materials to finished products"}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-indigo-500 hover:bg-indigo-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-indigo-500/25">
                  {language === "ar" ? "احجز عرض توضيحي" : "Book a Demo"}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg rounded-2xl">
                <p className="text-3xl font-black text-indigo-500 mb-1">{kpi.value}</p>
                <p className="font-semibold text-texafab-slate text-sm mb-1">
                  {language === "ar" ? kpi.titleAr : kpi.titleEn}
                </p>
                <p className="text-xs text-emerald-600 font-medium">{kpi.trend}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مميزات إدارة التصنيع" : "Manufacturing Management Features"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "أدوات متقدمة لإدارة عمليات تصنيع الأقمشة"
                : "Advanced tools for managing fabric manufacturing operations"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {language === "ar" ? feature.titleAr : feature.titleEn}
                </h3>
                <p className="text-gray-600">
                  {language === "ar" ? feature.descAr : feature.descEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Stages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مراحل الإنتاج" : "Production Stages"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {productionStages.map((stage, index) => (
              <Card key={index} className="p-4 bg-white border-2 border-indigo-100 rounded-xl hover:border-indigo-300 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <stage.icon className="w-5 h-5 text-indigo-500" />
                  </div>
                </div>
                <h3 className="mt-3 font-semibold text-texafab-slate">
                  {language === "ar" ? stage.titleAr : stage.titleEn}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <Wrench className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  {language === "ar" ? "صيانة المعدات" : "Equipment Maintenance"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === "ar" ? "إدارة صيانة المعدات" : "Equipment Maintenance Management"}
              </h2>

              <p className="text-lg text-white/80 mb-6">
                {language === "ar" 
                  ? "صيانة وقائية ذكية لتجنب الأعطال وضمان استمرارية الإنتاج"
                  : "Smart preventive maintenance to avoid breakdowns and ensure production continuity"}
              </p>

              <ul className="space-y-3">
                {[
                  { ar: "جدولة الصيانة الدورية", en: "Scheduled preventive maintenance" },
                  { ar: "تنبيهات الصيانة التلقائية", en: "Auto maintenance alerts" },
                  { ar: "سجل كامل للأعطال والإصلاحات", en: "Complete breakdown and repair log" },
                  { ar: "تتبع قطع الغيار", en: "Spare parts tracking" },
                  { ar: "تقارير كفاءة المعدات OEE", en: "OEE equipment efficiency reports" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{language === "ar" ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-xl">
                    <Gauge className="w-8 h-8 text-emerald-400 mb-2" />
                    <p className="text-white/60 text-sm">{language === "ar" ? "المعدات العاملة" : "Active Equipment"}</p>
                    <p className="text-2xl font-bold text-white">24/25</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <AlertTriangle className="w-8 h-8 text-amber-400 mb-2" />
                    <p className="text-white/60 text-sm">{language === "ar" ? "تحتاج صيانة" : "Need Maintenance"}</p>
                    <p className="text-2xl font-bold text-white">3</p>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-white/60 text-sm mb-2">{language === "ar" ? "الصيانة القادمة" : "Next Maintenance"}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Loom Machine #5</span>
                    <span className="text-amber-400 text-sm">3 days</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function FabricManufacturingPage() {
  return <FabricManufacturingContent />;
}
