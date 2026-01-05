import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Warehouse, 
  ShoppingCart, 
  Calculator, 
  Users, 
  FileText, 
  Zap, 
  ArrowUpRight, 
  Layers,
  Receipt,
  CreditCard,
  Building2,
  Package,
  TrendingUp,
  Ruler,
  Palette,
  ScanBarcode,
  ArrowRight
} from "lucide-react";

export function Features() {
  const { t, language, dir } = useLanguage();

  const features = [
    {
      icon: <ScanBarcode className="w-6 h-6" />,
      titleAr: "باركود متقدم",
      titleEn: "Advanced Barcode",
      descAr: "باركود فريد لكل رولون مع تتبع كامل من الاستيراد للبيع.",
      descEn: "Unique barcode for each roll with complete tracking from import to sale.",
      stat: language === "ar" ? "تتبع كامل" : "Full Tracking",
      gradient: "from-blue-500 to-blue-600",
      size: "",
      featured: false,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&q=80"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      titleAr: "إدارة الألوان",
      titleEn: "Color Management",
      descAr: "تصنيف الأقمشة حسب اللون والدرجة مع مطابقة دقيقة للعينات.",
      descEn: "Fabric classification by color and shade with precise sample matching.",
      stat: language === "ar" ? "مطابقة ذكية" : "Smart Matching",
      gradient: "from-pink-500 to-rose-600",
      size: "",
      featured: false,
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=300&q=80"
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      titleAr: "إدارة الأقمشة بالمتر",
      titleEn: "Fabric by Meter & Roll",
      descAr: "نظام فريد يدعم جميع وحدات القياس: المتر، الرولون، الياردة، الكيلو.",
      descEn: "Supports all measurement units: meter, roll, yard, kilo with auto conversion.",
      stat: language === "ar" ? "تحويل تلقائي" : "Auto Conversion",
      gradient: "from-texafab-emerald to-teal-600",
      size: "",
      featured: false,
      image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=300&q=80"
    },
    {
      icon: <Warehouse className="w-6 h-6" />,
      titleAr: "المستودعات المتعددة",
      titleEn: "Multi-Warehouse",
      descAr: "إدارة مستودعات متعددة مع تحديد موقع الرف لكل رولون.",
      descEn: "Manage multiple warehouses with shelf location for each roll.",
      stat: language === "ar" ? "تتبع شامل" : "Full Tracking",
      gradient: "from-texafab-gold to-amber-500",
      size: "",
      featured: false,
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=300&q=80"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      titleAr: "المحاسبة الكاملة",
      titleEn: "Full Accounting",
      descAr: "نظام محاسبي متكامل مصمم لتجارة الأقمشة مع دعم العملات المتعددة.",
      descEn: "Complete accounting system designed for fabric trade with multi-currency.",
      stat: language === "ar" ? "تقارير مالية" : "Financial Reports",
      gradient: "from-purple-500 to-purple-600",
      size: "",
      featured: false,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80"
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      titleAr: "المتجر الإلكتروني",
      titleEn: "E-commerce Store",
      descAr: "متجر إلكتروني جاهز بدون رسوم تصميم أو تشغيل إضافية.",
      descEn: "Ready e-commerce store with NO design or setup fees included.",
      stat: language === "ar" ? "بدون رسوم" : "No Extra Fees",
      gradient: "from-indigo-500 to-indigo-600",
      size: "",
      featured: false,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&q=80"
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-texafab-emerald/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-texafab-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-6">
            <Layers className="w-4 h-4" />
            {language === "ar" ? "جميع الميزات" : "All Features"}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-texafab-slate dark:text-white mb-6 leading-tight">
            {language === "ar" ? "كل ما تحتاجه في نظام واحد" : "Everything You Need in One System"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {language === "ar" 
              ? "نظام ERP متكامل يغطي جميع احتياجات عملك من المحاسبة إلى إدارة المخزون والمبيعات"
              : "Complete ERP system covering all your business needs from accounting to inventory and sales management"
            }
          </p>
        </div>

        {/* Bento Grid - 3 columns x 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[220px] max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="group relative overflow-hidden p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border-0 bg-white dark:bg-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 border border-gray-100 dark:border-gray-700"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="relative mt-auto">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold mb-1.5 text-texafab-slate dark:text-white">
                      {language === "ar" ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {language === "ar" ? feature.descAr : feature.descEn}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 bg-texafab-emerald/10">
                    <ArrowUpRight className="w-4 h-4 text-texafab-emerald" />
                  </div>
                </div>
                
                {/* Stat Badge */}
                <div className="inline-flex items-center gap-1 mt-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-texafab-emerald/10 dark:bg-texafab-teal/20 text-texafab-emerald dark:text-texafab-teal">
                  <Zap className="w-3 h-3" />
                  {feature.stat}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Features Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: FileText, label: language === "ar" ? "التقارير" : "Reports" },
            { icon: CreditCard, label: language === "ar" ? "المدفوعات" : "Payments" },
            { icon: Building2, label: language === "ar" ? "الفروع" : "Branches" },
            { icon: TrendingUp, label: language === "ar" ? "التحليلات" : "Analytics" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-texafab-emerald/30 dark:hover:border-texafab-teal/30 hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-10 h-10 rounded-lg bg-texafab-emerald/10 dark:bg-texafab-teal/20 flex items-center justify-center group-hover:bg-texafab-emerald dark:group-hover:bg-texafab-teal group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5 text-texafab-emerald dark:text-texafab-teal group-hover:text-white" />
              </div>
              <span className="font-semibold text-texafab-slate dark:text-white">{item.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link to="/features">
            <Button className="h-14 px-8 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white text-base font-semibold rounded-xl">
              {language === "ar" ? "اكتشف جميع الميزات" : "Explore All Features"}
              <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
