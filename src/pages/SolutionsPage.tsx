import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Ruler,
  Scissors,
  Palette,
  Package,
  BarChart3,
  FileText,
  ScanBarcode,
  Scale,
  RefreshCcw,
  Boxes,
  Warehouse,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Play,
  Layers,
  TrendingUp,
  Zap
} from "lucide-react";

function SolutionsContent() {
  const { language, dir } = useLanguage();

  const fabricChallenges = [
    {
      problemAr: "صعوبة تتبع الأقمشة بوحدات مختلفة",
      problemEn: "Difficulty tracking fabrics in different units",
      solutionAr: "نظام موحد يدعم المتر، الرولون، الياردة، الكيلو مع تحويل تلقائي",
      solutionEn: "Unified system supporting meter, roll, yard, kilo with auto conversion",
      icon: Ruler
    },
    {
      problemAr: "ضياع في حساب الكميات بعد القص",
      problemEn: "Loss in quantity calculation after cutting",
      solutionAr: "حساب دقيق للباقي بعد كل عملية قص مع تتبع الهدر",
      solutionEn: "Accurate remainder calculation after each cut with waste tracking",
      icon: Scissors
    },
    {
      problemAr: "صعوبة مطابقة الألوان والدرجات",
      problemEn: "Difficulty matching colors and shades",
      solutionAr: "نظام ألوان متقدم مع أكواد وعينات ومطابقة ذكية",
      solutionEn: "Advanced color system with codes, samples, and smart matching",
      icon: Palette
    },
    {
      problemAr: "فقدان رولونات في المستودع",
      problemEn: "Losing rolls in the warehouse",
      solutionAr: "باركود فريد لكل رولون مع تحديد الموقع الدقيق",
      solutionEn: "Unique barcode for each roll with precise location tracking",
      icon: ScanBarcode
    },
    {
      problemAr: "صعوبة حساب تكلفة المتر الواحد",
      problemEn: "Difficulty calculating cost per meter",
      solutionAr: "حساب تلقائي للتكلفة بناءً على سعر الرولون وطوله",
      solutionEn: "Automatic cost calculation based on roll price and length",
      icon: Calculator
    },
    {
      problemAr: "عدم دقة تقارير المخزون",
      problemEn: "Inaccurate inventory reports",
      solutionAr: "تقارير فورية بالكميات الحقيقية مع تنبيهات النقص",
      solutionEn: "Real-time reports with actual quantities and shortage alerts",
      icon: BarChart3
    }
  ];

  const fabricWorkflow = [
    {
      step: "1",
      titleAr: "استلام البضاعة",
      titleEn: "Goods Receipt",
      descAr: "تسجيل الرولونات مع جميع البيانات: الطول، الوزن، اللون، الجودة",
      descEn: "Register rolls with all data: length, weight, color, quality",
      icon: Package
    },
    {
      step: "2",
      titleAr: "توليد الباركود",
      titleEn: "Barcode Generation",
      descAr: "إنشاء باركود فريد وطباعة ملصق لكل رولون",
      descEn: "Generate unique barcode and print label for each roll",
      icon: ScanBarcode
    },
    {
      step: "3",
      titleAr: "التخزين",
      titleEn: "Storage",
      descAr: "تحديد موقع الرف والمستودع لكل رولون",
      descEn: "Assign shelf location and warehouse for each roll",
      icon: Warehouse
    },
    {
      step: "4",
      titleAr: "البيع والقص",
      titleEn: "Sale & Cutting",
      descAr: "تسجيل عمليات البيع مع خصم الكمية المباعة بدقة",
      descEn: "Record sales with precise quantity deduction",
      icon: Scissors
    },
    {
      step: "5",
      titleAr: "تحديث المخزون",
      titleEn: "Inventory Update",
      descAr: "تحديث تلقائي للكمية المتبقية في كل رولون",
      descEn: "Automatic update of remaining quantity in each roll",
      icon: RefreshCcw
    },
    {
      step: "6",
      titleAr: "التقارير",
      titleEn: "Reports",
      descAr: "تقارير شاملة للمخزون والمبيعات والأرباح",
      descEn: "Comprehensive reports for inventory, sales, and profits",
      icon: FileText
    }
  ];

  const specialFeatures = [
    {
      titleAr: "حساب الأمتار من الرولون",
      titleEn: "Meter Calculation from Roll",
      descAr: "إدخال طول الرولون بالمتر أو الياردة مع تحويل تلقائي",
      descEn: "Enter roll length in meters or yards with auto conversion",
      image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80"
    },
    {
      titleAr: "تتبع عمليات القص",
      titleEn: "Cut Tracking",
      descAr: "سجل كامل لكل عملية قص مع الكمية المقطوعة والباقي",
      descEn: "Complete record of each cut with cut quantity and remainder",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80"
    },
    {
      titleAr: "إدارة الألوان والدرجات",
      titleEn: "Color & Shade Management",
      descAr: "تصنيف الأقمشة حسب اللون والدرجة مع أكواد خاصة",
      descEn: "Fabric classification by color and shade with special codes",
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&q=80"
    },
    {
      titleAr: "تقارير الهدر والفاقد",
      titleEn: "Waste & Loss Reports",
      descAr: "تحليل دقيق للهدر في عمليات القص والتلف",
      descEn: "Detailed analysis of waste in cutting and damage",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80"
    }
  ];

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D948808_1px,transparent_1px),linear-gradient(to_bottom,#0D948808_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-6">
                <Layers className="w-4 h-4" />
                {language === "ar" ? "حلول متخصصة" : "Specialized Solutions"}
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-texafab-slate mb-6 leading-tight">
                {language === "ar" ? (
                  <>حلول شاملة <span className="text-texafab-emerald">لتحديات الأقمشة</span></>
                ) : (
                  <>Complete Solutions <span className="text-texafab-emerald">for Fabric Challenges</span></>
                )}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {language === "ar"
                  ? "نفهم تحديات صناعة الأقمشة ونقدم حلولاً مبتكرة لكل مشكلة تواجهها في إدارة المخزون والمبيعات."
                  : "We understand fabric industry challenges and provide innovative solutions for every problem you face in inventory and sales management."
                }
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="h-14 px-8 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white text-base font-semibold shadow-lg rounded-xl">
                  {language === "ar" ? "اكتشف الحلول" : "Explore Solutions"}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
                <Button variant="outline" className="h-14 px-8 border-2 text-base font-semibold rounded-xl">
                  <Play className="w-5 h-5 me-2" />
                  {language === "ar" ? "شاهد الفيديو" : "Watch Video"}
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80" 
                alt="Fabric Solutions"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-texafab-emerald rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-texafab-slate">+45%</div>
                    <div className="text-sm text-gray-500">{language === "ar" ? "زيادة الكفاءة" : "Efficiency Increase"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "التحديات والحلول" : "Challenges & Solutions"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "ar"
                ? "نحول تحديات صناعة الأقمشة إلى فرص للنمو"
                : "We turn fabric industry challenges into growth opportunities"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fabricChallenges.map((item, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-all border-l-4 border-l-texafab-emerald">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-bold text-red-600 mb-2 text-sm">
                  {language === "ar" ? "المشكلة:" : "Problem:"}
                </h3>
                <p className="text-gray-700 mb-4">{language === "ar" ? item.problemAr : item.problemEn}</p>
                <div className="pt-4 border-t">
                  <div className="w-12 h-12 rounded-xl bg-texafab-emerald/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-texafab-emerald" />
                  </div>
                  <h3 className="font-bold text-texafab-emerald mb-2 text-sm">
                    {language === "ar" ? "الحل:" : "Solution:"}
                  </h3>
                  <p className="text-gray-700">{language === "ar" ? item.solutionAr : item.solutionEn}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "دورة عمل الأقمشة" : "Fabric Workflow"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "ar"
                ? "من استلام الرولون حتى البيع - كل خطوة مُتتبعة"
                : "From roll receipt to sale - every step tracked"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fabricWorkflow.map((item, i) => (
              <Card key={i} className="p-6 relative overflow-hidden group hover:shadow-lg transition-all">
                <div className="absolute top-4 right-4 text-6xl font-black text-gray-100 group-hover:text-texafab-emerald/10 transition-colors">
                  {item.step}
                </div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-texafab-emerald flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-texafab-slate mb-2">
                    {language === "ar" ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-gray-600">{language === "ar" ? item.descAr : item.descEn}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "ميزات خاصة بالأقمشة" : "Fabric-Specific Features"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {specialFeatures.map((feature, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-2">
                  <img src={feature.image} alt={language === "ar" ? feature.titleAr : feature.titleEn} className="w-full h-48 md:h-full object-cover" />
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-texafab-slate mb-2">
                      {language === "ar" ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-gray-600">{language === "ar" ? feature.descAr : feature.descEn}</p>
                    <Button variant="link" className="p-0 mt-4 text-texafab-emerald justify-start">
                      {language === "ar" ? "اعرف المزيد" : "Learn More"}
                      <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function SolutionsPage() {
  return <SolutionsContent />;
}
