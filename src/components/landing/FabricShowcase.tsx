import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Ruler, 
  Scissors, 
  Palette, 
  ScanBarcode, 
  Scale,
  ArrowRight,
  CheckCircle2,
  Play
} from "lucide-react";

export function FabricShowcase() {
  const { language, dir } = useLanguage();

  const fabricFeatures = [
    {
      icon: Ruler,
      titleAr: "إدارة القياسات",
      titleEn: "Measurement Management",
      descAr: "متر، رولون، ياردة، كيلو - جميع الوحدات مدعومة مع تحويل تلقائي",
      descEn: "Meter, roll, yard, kilo - all units supported with auto conversion",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80"
    },
    {
      icon: Scissors,
      titleAr: "تتبع القص",
      titleEn: "Cut Tracking",
      descAr: "حساب دقيق للباقي بعد كل عملية قص مع سجل كامل",
      descEn: "Accurate remainder calculation after each cut with full history",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
    },
    {
      icon: Palette,
      titleAr: "إدارة الألوان",
      titleEn: "Color Management",
      descAr: "تصنيف وتتبع الألوان والدرجات بدقة عالية",
      descEn: "Classify and track colors and shades with high precision",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80"
    },
    {
      icon: ScanBarcode,
      titleAr: "باركود لكل رولون",
      titleEn: "Barcode Per Roll",
      descAr: "تتبع فريد لكل رولون من الاستيراد للبيع",
      descEn: "Unique tracking for each roll from import to sale",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
    }
  ];

  const stats = [
    { value: "10M+", labelAr: "رولون متتبع", labelEn: "Rolls Tracked" },
    { value: "100+", labelAr: "نوع قماش", labelEn: "Fabric Types" },
    { value: "5K+", labelAr: "لون مصنف", labelEn: "Colors Classified" },
    { value: "∞", labelAr: "وحدات قياس", labelEn: "Measurement Units" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D948805_1px,transparent_1px),linear-gradient(to_bottom,#0D948805_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-gold/10 text-texafab-gold text-sm font-semibold mb-6">
            <Scissors className="w-4 h-4" />
            {language === "ar" ? "مصمم خصيصاً للأقمشة" : "Designed for Fabrics"}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-texafab-slate dark:text-white mb-6 leading-tight">
            {language === "ar" ? (
              <>أول نظام ERP <span className="text-texafab-emerald">متخصص للأقمشة</span></>
            ) : (
              <>First ERP System <span className="text-texafab-emerald">Specialized for Fabrics</span></>
            )}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {language === "ar"
              ? "نفهم طبيعة تجارة الأقمشة: من الرولونات والأمتار إلى الألوان والدرجات. نظام واحد يحل جميع تحديات صناعة الأقمشة."
              : "We understand the fabric trade: from rolls and meters to colors and shades. One system that solves all fabric industry challenges."
            }
          </p>
        </div>

        {/* Features Grid with Images - 2x2 Symmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-6xl mx-auto">
          {fabricFeatures.map((feature, i) => (
            <Card key={i} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 rounded-2xl">
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={language === "ar" ? feature.titleAr : feature.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Icon Badge */}
                <div className="absolute bottom-4 start-4 w-14 h-14 rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <feature.icon className="w-7 h-7 text-texafab-emerald dark:text-texafab-teal" />
                </div>
              </div>
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-texafab-slate dark:text-white mb-3">
                  {language === "ar" ? feature.titleAr : feature.titleEn}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {language === "ar" ? feature.descAr : feature.descEn}
                </p>
                <div className="flex items-center gap-2 text-texafab-emerald dark:text-texafab-teal text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  {language === "ar" ? "متضمن في جميع الباقات" : "Included in all plans"}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-texafab-slate rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{language === "ar" ? stat.labelAr : stat.labelEn}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/solutions">
              <Button className="h-14 px-8 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white text-base font-semibold rounded-xl">
                {language === "ar" ? "اكتشف الحلول" : "Explore Solutions"}
                <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </Button>
            </Link>
            <Button variant="outline" className="h-14 px-8 border-2 border-gray-200 dark:border-gray-700 text-texafab-slate dark:text-white text-base font-semibold rounded-xl">
              <Play className="w-5 h-5 me-2 fill-texafab-gold text-texafab-gold" />
              {language === "ar" ? "شاهد كيف يعمل" : "See How It Works"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
