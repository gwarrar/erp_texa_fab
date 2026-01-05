import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Shirt,
  Scissors,
  Layers,
  Package,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock,
  Ruler,
  Palette,
  Users,
  Scale,
  Target,
  FileText,
  Settings,
  Box,
  TrendingUp,
  Zap
} from "lucide-react";

function GarmentManufacturingContent() {
  const { language, dir } = useLanguage();

  const features = [
    {
      icon: FileText,
      titleAr: "BOM - قائمة المواد",
      titleEn: "Bill of Materials (BOM)",
      descAr: "قائمة مواد تفصيلية لكل منتج مع الكميات والتكاليف",
      descEn: "Detailed material list for each product with quantities and costs",
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: Ruler,
      titleAr: "إدارة المقاسات والألوان",
      titleEn: "Size & Color Management",
      descAr: "إدارة شاملة للمقاسات والألوان مع مصفوفة SKU ذكية",
      descEn: "Comprehensive size and color management with smart SKU matrix",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Scissors,
      titleAr: "تتبع مراحل التصنيع",
      titleEn: "Manufacturing Stage Tracking",
      descAr: "تتبع كل قطعة من القص للخياطة للتشطيب والتعبئة",
      descEn: "Track each piece from cutting to sewing to finishing and packing",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      titleAr: "إدارة العمال والورشات",
      titleEn: "Workers & Workshops",
      descAr: "توزيع العمل على الورشات وتتبع إنتاجية كل عامل",
      descEn: "Distribute work to workshops and track each worker's productivity",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Scale,
      titleAr: "حساب تكلفة القطعة",
      titleEn: "Per-Piece Costing",
      descAr: "حساب دقيق لتكلفة كل قطعة شاملة المواد والعمالة",
      descEn: "Accurate per-piece cost calculation including materials and labor",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Palette,
      titleAr: "نظام العينات والموديلات",
      titleEn: "Samples & Models",
      descAr: "إدارة العينات من التصميم للموافقة للإنتاج",
      descEn: "Manage samples from design to approval to production",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const productionStages = [
    { titleAr: "التصميم والموديل", titleEn: "Design & Model", percentage: 100, color: "bg-purple-500" },
    { titleAr: "القص", titleEn: "Cutting", percentage: 85, color: "bg-blue-500" },
    { titleAr: "الخياطة", titleEn: "Sewing", percentage: 70, color: "bg-emerald-500" },
    { titleAr: "التشطيب", titleEn: "Finishing", percentage: 55, color: "bg-amber-500" },
    { titleAr: "مراقبة الجودة", titleEn: "Quality Control", percentage: 45, color: "bg-red-500" },
    { titleAr: "الكي والتعبئة", titleEn: "Ironing & Packing", percentage: 30, color: "bg-pink-500" }
  ];

  const stats = [
    { valueAr: "50,000+", valueEn: "50,000+", labelAr: "قطعة/شهر", labelEn: "Pieces/Month" },
    { valueAr: "98%", valueEn: "98%", labelAr: "معدل الجودة", labelEn: "Quality Rate" },
    { valueAr: "40%", valueEn: "40%", labelAr: "تقليل الهدر", labelEn: "Waste Reduction" },
    { valueAr: "2x", valueEn: "2x", labelAr: "سرعة الإنتاج", labelEn: "Production Speed" }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
              <Shirt className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-semibold text-rose-600">
                {language === "ar" ? "إدارة تصنيع الألبسة" : "Garment Manufacturing"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate dark:text-white mb-6 leading-tight">
              {language === "ar" ? (
                <>تصنيع ألبسة <span className="text-rose-500">متقدم</span></>
              ) : (
                <>Advanced <span className="text-rose-500">Garment Manufacturing</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "ar" 
                ? "نظام متخصص لإدارة مصانع الألبسة من التصميم للإنتاج للتسليم"
                : "Specialized system for managing garment factories from design to production to delivery"}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-rose-500 hover:bg-rose-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-rose-500/25">
                  {language === "ar" ? "احجز عرض توضيحي" : "Book a Demo"}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg rounded-2xl bg-white dark:bg-gray-800">
                <p className="text-3xl font-black text-rose-500 dark:text-rose-400 mb-1">
                  {language === "ar" ? stat.valueAr : stat.valueEn}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {language === "ar" ? stat.labelAr : stat.labelEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {language === "ar" ? "مميزات إدارة تصنيع الألبسة" : "Garment Manufacturing Features"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "أدوات متخصصة لصناعة الملابس الجاهزة"
                : "Specialized tools for ready-made garment industry"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate dark:text-white mb-2">
                  {language === "ar" ? feature.titleAr : feature.titleEn}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "ar" ? feature.descAr : feature.descEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Tracking */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
                <BarChart3 className="w-4 h-4 text-rose-500" />
                <span className="text-sm font-semibold text-rose-600">
                  {language === "ar" ? "تتبع الإنتاج" : "Production Tracking"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
                {language === "ar" ? "تتبع كل مرحلة من الإنتاج" : "Track Every Production Stage"}
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {language === "ar" 
                  ? "رؤية كاملة لحالة كل طلب وكل قطعة في خط الإنتاج"
                  : "Complete visibility of every order and piece status in the production line"}
              </p>

              <ul className="space-y-3">
                {[
                  { ar: "تتبع الوقت الفعلي لكل مرحلة", en: "Real-time tracking for each stage" },
                  { ar: "تنبيهات التأخير التلقائية", en: "Automatic delay alerts" },
                  { ar: "تقارير الإنتاجية اليومية", en: "Daily productivity reports" },
                  { ar: "تحليل الكفاءة والهدر", en: "Efficiency and waste analysis" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 dark:text-rose-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200">{language === "ar" ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-6 bg-gradient-to-br from-rose-50 to-purple-50 dark:from-rose-900/20 dark:to-purple-900/20 border-0 shadow-xl rounded-3xl">
              <h3 className="text-lg font-bold text-texafab-slate dark:text-white mb-6">
                {language === "ar" ? "حالة الإنتاج - طلب #1234" : "Production Status - Order #1234"}
              </h3>
              
              <div className="space-y-4">
                {productionStages.map((stage, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-200">
                        {language === "ar" ? stage.titleAr : stage.titleEn}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">{stage.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className={`${stage.color} h-2 rounded-full transition-all`} style={{width: `${stage.percentage}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">{language === "ar" ? "الإجمالي" : "Total"}</span>
                  <span className="font-bold text-texafab-slate dark:text-white">5,000 {language === "ar" ? "قطعة" : "pieces"}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-600 dark:text-gray-300">{language === "ar" ? "التسليم المتوقع" : "Expected Delivery"}</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">15 Jan 2025</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Size Matrix */}
      <section className="py-20 bg-gradient-to-br from-rose-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "مصفوفة المقاسات والألوان" : "Size & Color Matrix"}
            </h2>
            <p className="text-lg text-white/80">
              {language === "ar" ? "إدارة ذكية للتنوعات" : "Smart variation management"}
            </p>
          </div>

          <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="p-3 text-start">{language === "ar" ? "اللون/المقاس" : "Color/Size"}</th>
                  <th className="p-3 text-center">S</th>
                  <th className="p-3 text-center">M</th>
                  <th className="p-3 text-center">L</th>
                  <th className="p-3 text-center">XL</th>
                  <th className="p-3 text-center">XXL</th>
                  <th className="p-3 text-center">{language === "ar" ? "الإجمالي" : "Total"}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { color: language === "ar" ? "أسود" : "Black", sizes: [100, 150, 200, 150, 100], total: 700 },
                  { color: language === "ar" ? "أبيض" : "White", sizes: [80, 120, 180, 120, 80], total: 580 },
                  { color: language === "ar" ? "أزرق" : "Blue", sizes: [60, 100, 150, 100, 60], total: 470 },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/10">
                    <td className="p-3 font-medium">{row.color}</td>
                    {row.sizes.map((size, j) => (
                      <td key={j} className="p-3 text-center text-white/80">{size}</td>
                    ))}
                    <td className="p-3 text-center font-bold text-emerald-400">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function GarmentManufacturingPage() {
  return <GarmentManufacturingContent />;
}
