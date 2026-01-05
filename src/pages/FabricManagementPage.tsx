import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrowserMockup } from "@/components/landing/SystemScreenshots";
import { 
  Scissors,
  Palette,
  Ruler,
  Layers,
  Image,
  Tag,
  ArrowRight,
  CheckCircle2,
  Scale,
  FileText,
  Search,
  Star,
  Grid3X3,
  Droplets,
  Thermometer,
  Sparkles,
  Package,
  BarChart3,
  Monitor
} from "lucide-react";

function FabricManagementContent() {
  const { language, dir } = useLanguage();

  const features = [
    {
      icon: Grid3X3,
      titleAr: "تصنيف الأقمشة المتقدم",
      titleEn: "Advanced Fabric Classification",
      descAr: "تصنيف شامل حسب النوع، التركيب، الوزن، العرض، وطريقة النسج",
      descEn: "Comprehensive classification by type, composition, weight, width, and weave method",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Palette,
      titleAr: "إدارة الألوان والتشكيلات",
      titleEn: "Color & Collection Management",
      descAr: "مكتبة ألوان متكاملة مع أكواد Pantone وتشكيلات موسمية",
      descEn: "Complete color library with Pantone codes and seasonal collections",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Ruler,
      titleAr: "حساب الأمتار والياردات",
      titleEn: "Meters & Yards Calculation",
      descAr: "تحويل تلقائي بين وحدات القياس مع حساب دقيق للمساحات",
      descEn: "Automatic conversion between units with precise area calculations",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Star,
      titleAr: "إدارة العيوب والدرجات",
      titleEn: "Defects & Grading",
      descAr: "تصنيف الجودة (Grade A, B, C) مع توثيق العيوب بالصور",
      descEn: "Quality grading (Grade A, B, C) with photo documentation of defects",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Image,
      titleAr: "صور متعددة لكل منتج",
      titleEn: "Multiple Product Images",
      descAr: "صور عالية الجودة من زوايا متعددة مع إمكانية التكبير",
      descEn: "High-quality images from multiple angles with zoom capability",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Tag,
      titleAr: "ربط بالموردين الأصليين",
      titleEn: "Original Supplier Linking",
      descAr: "تتبع مصدر كل قماش والمورد الأصلي مع تاريخ الشراء",
      descEn: "Track the source of each fabric and original supplier with purchase date",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const technicalSpecs = [
    {
      icon: Scale,
      labelAr: "الوزن (GSM)",
      labelEn: "Weight (GSM)",
      descAr: "جرام لكل متر مربع",
      descEn: "Grams per square meter"
    },
    {
      icon: Ruler,
      labelAr: "العرض",
      labelEn: "Width",
      descAr: "بالسنتيمتر أو البوصة",
      descEn: "In cm or inches"
    },
    {
      icon: Layers,
      labelAr: "التركيب",
      labelEn: "Composition",
      descAr: "نسبة الألياف (قطن، بوليستر...)",
      descEn: "Fiber percentage (cotton, polyester...)"
    },
    {
      icon: Droplets,
      labelAr: "معالجة المياه",
      labelEn: "Water Treatment",
      descAr: "مقاومة الماء والبقع",
      descEn: "Water and stain resistance"
    },
    {
      icon: Thermometer,
      labelAr: "درجة الحرارة",
      labelEn: "Temperature",
      descAr: "درجة حرارة الكي والغسيل",
      descEn: "Ironing and washing temperature"
    },
    {
      icon: Sparkles,
      labelAr: "المعالجات الخاصة",
      labelEn: "Special Treatments",
      descAr: "مضاد للبكتيريا، مقاوم للحريق...",
      descEn: "Anti-bacterial, fire resistant..."
    }
  ];

  const fabricTypes = [
    { ar: "قطن 100%", en: "100% Cotton" },
    { ar: "بوليستر", en: "Polyester" },
    { ar: "حرير", en: "Silk" },
    { ar: "كتان", en: "Linen" },
    { ar: "صوف", en: "Wool" },
    { ar: "جلد صناعي", en: "Synthetic Leather" },
    { ar: "دنيم", en: "Denim" },
    { ar: "شيفون", en: "Chiffon" },
    { ar: "ساتان", en: "Satin" },
    { ar: "جيرسي", en: "Jersey" },
    { ar: "تول", en: "Tulle" },
    { ar: "مخمل", en: "Velvet" }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Scissors className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold text-purple-600">
                {language === "ar" ? "إدارة الأقمشة المتخصصة" : "Specialized Fabric Management"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>إدارة <span className="text-purple-500">متقدمة للأقمشة</span></>
              ) : (
                <>Advanced <span className="text-purple-500">Fabric Management</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "ar" 
                ? "نظام شامل لإدارة جميع أنواع الأقمشة مع تصنيف دقيق ومواصفات تقنية تفصيلية"
                : "Comprehensive system for managing all fabric types with precise classification and detailed technical specifications"}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-purple-500 hover:bg-purple-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-purple-500/25">
                  {language === "ar" ? "احجز عرض توضيحي" : "Book a Demo"}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Types */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-texafab-slate">
              {language === "ar" ? "أنواع الأقمشة المدعومة" : "Supported Fabric Types"}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {fabricTypes.map((type, index) => (
              <span key={index} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                {language === "ar" ? type.ar : type.en}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مميزات إدارة الأقمشة" : "Fabric Management Features"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "أدوات متخصصة لصناعة الأقمشة والنسيج"
                : "Specialized tools for the textile and fabric industry"}
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

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <FileText className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-semibold text-purple-600">
                  {language === "ar" ? "المواصفات التقنية" : "Technical Specifications"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                {language === "ar" ? "بيانات تقنية شاملة لكل قماش" : "Comprehensive Technical Data for Each Fabric"}
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                {language === "ar" 
                  ? "سجل جميع المواصفات التقنية للأقمشة بدقة عالية لتسهيل البحث والمقارنة"
                  : "Record all fabric technical specifications with high precision for easy search and comparison"}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <spec.icon className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-texafab-slate text-sm">
                        {language === "ar" ? spec.labelAr : spec.labelEn}
                      </p>
                      <p className="text-xs text-gray-500">
                        {language === "ar" ? spec.descAr : spec.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl rounded-3xl">
              <h3 className="text-xl font-bold text-texafab-slate mb-6">
                {language === "ar" ? "مثال على بطاقة القماش" : "Fabric Card Example"}
              </h3>
              
              <div className="space-y-4">
                <div className="h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl flex items-center justify-center">
                  <Image className="w-16 h-16 text-purple-400" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-600">{language === "ar" ? "الاسم" : "Name"}</span>
                    <span className="font-semibold">Cotton Twill Premium</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-600">{language === "ar" ? "الوزن" : "Weight"}</span>
                    <span className="font-semibold">280 GSM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-600">{language === "ar" ? "العرض" : "Width"}</span>
                    <span className="font-semibold">150 cm</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-600">{language === "ar" ? "التركيب" : "Composition"}</span>
                    <span className="font-semibold">100% Cotton</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-600">{language === "ar" ? "الدرجة" : "Grade"}</span>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold">A+</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* System Screenshot */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Monitor className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold text-purple-600">
                {language === "ar" ? "واجهة الأقمشة" : "Fabric Interface"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {language === "ar" ? "إدارة الأقمشة المتقدمة" : "Advanced Fabric Management"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "واجهة شاملة لإدارة جميع أنواع الأقمشة والرولونات"
                : "Comprehensive interface for managing all fabric types and rolls"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group">
              <BrowserMockup 
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=90" 
                alt={language === "ar" ? "إدارة الأقمشة" : "Fabric Management"}
                className="transform group-hover:scale-[1.02] transition-transform duration-300"
              />
              <p className="mt-4 text-center font-medium text-gray-700 dark:text-gray-300">
                {language === "ar" ? "لوحة إدارة الأقمشة والمخزون" : "Fabric & Inventory Management Dashboard"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "بحث وفلترة متقدمة" : "Advanced Search & Filter"}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {language === "ar" 
                ? "ابحث عن أي قماش بسهولة باستخدام فلاتر متعددة"
                : "Easily find any fabric using multiple filters"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { ar: "البحث بالاسم أو الكود", en: "Search by name or code" },
              { ar: "فلترة حسب النوع", en: "Filter by type" },
              { ar: "فلترة حسب اللون", en: "Filter by color" },
              { ar: "فلترة حسب السعر", en: "Filter by price" },
              { ar: "فلترة حسب التركيب", en: "Filter by composition" },
              { ar: "فلترة حسب المورد", en: "Filter by supplier" },
              { ar: "فلترة حسب الدرجة", en: "Filter by grade" },
              { ar: "فلترة حسب التوفر", en: "Filter by availability" }
            ].map((filter, index) => (
              <Card key={index} className="p-4 bg-white/10 backdrop-blur-xl border-white/20 rounded-xl flex items-center gap-3">
                <Search className="w-5 h-5 text-white/60" />
                <span className="text-white font-medium">
                  {language === "ar" ? filter.ar : filter.en}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function FabricManagementPage() {
  return <FabricManagementContent />;
}
