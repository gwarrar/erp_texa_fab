import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Factory,
  Package,
  Ship,
  MapPin,
  Warehouse,
  ScanBarcode,
  Scissors,
  BarChart3,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Clock,
  Globe,
  Truck,
  Users,
  Calculator,
  RefreshCcw,
  Zap,
  Shield,
  Eye
} from "lucide-react";

function WorkflowContent() {
  const { language, dir } = useLanguage();

  const workflowSteps = [
    {
      step: 1,
      icon: Factory,
      titleAr: "حجز من المصنع",
      titleEn: "Factory Booking",
      descAr: "حجز الأقمشة مباشرة من المصانع العالمية مع تحديد المواصفات والكميات والألوان المطلوبة",
      descEn: "Book fabrics directly from global factories with specifications, quantities, and required colors",
      featuresAr: ["تحديد المواصفات الدقيقة", "اختيار الألوان والدرجات", "تحديد الكميات بالمتر/الرولون", "جدولة التسليم"],
      featuresEn: ["Precise specifications", "Color and grade selection", "Quantity in meters/rolls", "Delivery scheduling"],
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      icon: Package,
      titleAr: "التعبئة بالكونتينر",
      titleEn: "Container Packing",
      descAr: "متابعة عملية تعبئة الكونتينر بالتفصيل مع تسجيل جميع المواد والتكاليف",
      descEn: "Track container packing in detail with recording all materials and costs",
      featuresAr: ["قائمة تفصيلية بالمحتويات", "حساب التكاليف التقديرية", "وثائق الشحن", "تسجيل الأوزان"],
      featuresEn: ["Detailed content list", "Cost estimation", "Shipping documents", "Weight recording"],
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 3,
      icon: Ship,
      titleAr: "الشحن البحري",
      titleEn: "Sea Freight",
      descAr: "تتبع الكونتينر من لحظة المغادرة حتى الوصول مع جميع التفاصيل والتكاليف",
      descEn: "Track container from departure to arrival with all details and costs",
      featuresAr: ["تتبع GPS مباشر", "تواريخ الوصول المتوقعة", "تكاليف الشحن والجمارك", "إشعارات تلقائية"],
      featuresEn: ["Live GPS tracking", "Expected arrival dates", "Shipping & customs costs", "Auto notifications"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      step: 4,
      icon: MapPin,
      titleAr: "استلام الكونتينر",
      titleEn: "Container Reception",
      descAr: "استلام الكونتينر في الميناء مع التوثيق الكامل وفحص المحتويات",
      descEn: "Receive container at port with full documentation and content inspection",
      featuresAr: ["فحص الجودة", "مطابقة الكميات", "توثيق الأضرار", "التخليص الجمركي"],
      featuresEn: ["Quality inspection", "Quantity matching", "Damage documentation", "Customs clearance"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      step: 5,
      icon: Warehouse,
      titleAr: "تفصيل الرولونات",
      titleEn: "Roll Processing",
      descAr: "تفريغ الكونتينر وتسجيل كل رولون بشكل منفصل مع باركود فريد",
      descEn: "Unload container and register each roll separately with unique barcode",
      featuresAr: ["باركود لكل رولون", "قياس الأطوال الفعلية", "تسجيل الألوان والدرجات", "تحديد موقع التخزين"],
      featuresEn: ["Barcode per roll", "Actual length measurement", "Color & grade recording", "Storage location"],
      color: "from-orange-500 to-orange-600"
    },
    {
      step: 6,
      icon: ScanBarcode,
      titleAr: "إدارة المخزون",
      titleEn: "Inventory Management",
      descAr: "تتبع كل رولون في المستودع مع تحديثات فورية لكل عملية",
      descEn: "Track each roll in warehouse with real-time updates for every operation",
      featuresAr: ["جرد تلقائي", "تنبيهات النقص", "تحويل بين المستودعات", "تقارير لحظية"],
      featuresEn: ["Auto inventory", "Low stock alerts", "Warehouse transfers", "Real-time reports"],
      color: "from-pink-500 to-pink-600"
    },
    {
      step: 7,
      icon: Scissors,
      titleAr: "عمليات القص والبيع",
      titleEn: "Cutting & Sales",
      descAr: "بيع الأقمشة بالمتر أو بالرولون مع تحديث تلقائي للمخزون",
      descEn: "Sell fabrics by meter or roll with automatic inventory update",
      featuresAr: ["قص بالمتر", "قص عينات", "حساب الباقي تلقائياً", "تحديث فوري للجرد"],
      featuresEn: ["Cut by meter", "Sample cutting", "Auto remainder calculation", "Instant inventory update"],
      color: "from-red-500 to-red-600"
    },
    {
      step: 8,
      icon: BarChart3,
      titleAr: "التقارير والتحليلات",
      titleEn: "Reports & Analytics",
      descAr: "تقارير شاملة عن المبيعات والأرباح والمخزون وأداء الفريق",
      descEn: "Comprehensive reports on sales, profits, inventory, and team performance",
      featuresAr: ["Dashboard تفاعلي", "تقارير مخصصة", "تصدير Excel/PDF", "KPIs شاملة"],
      featuresEn: ["Interactive Dashboard", "Custom reports", "Excel/PDF export", "Comprehensive KPIs"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      titleAr: "توفير الوقت",
      titleEn: "Time Saving",
      descAr: "تقليل الوقت اللازم لإدارة العمليات بنسبة 70%",
      descEn: "Reduce operations management time by 70%"
    },
    {
      icon: Shield,
      titleAr: "دقة عالية",
      titleEn: "High Accuracy",
      descAr: "دقة 99.9% في تتبع المخزون والعمليات",
      descEn: "99.9% accuracy in inventory and operations tracking"
    },
    {
      icon: Eye,
      titleAr: "رؤية شاملة",
      titleEn: "Complete Visibility",
      descAr: "متابعة كل شيء من لوحة تحكم واحدة",
      descEn: "Monitor everything from a single dashboard"
    },
    {
      icon: Zap,
      titleAr: "سرعة فائقة",
      titleEn: "Super Fast",
      descAr: "تحديثات فورية Real-time لجميع العمليات",
      descEn: "Real-time updates for all operations"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-texafab-emerald/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-texafab-gold/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 border border-texafab-emerald/20 mb-8">
              <RefreshCcw className="w-4 h-4 text-texafab-emerald" />
              <span className="text-sm font-semibold text-texafab-emerald">
                {language === "ar" ? "سير العمل المتكامل" : "Integrated Workflow"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>من المصنع <span className="text-texafab-emerald">إلى العميل</span></>
              ) : (
                <>From Factory <span className="text-texafab-emerald">to Customer</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "ar" 
                ? "سير عمل متكامل يغطي جميع مراحل تجارة الأقمشة من حجز المواد من المصانع العالمية وحتى توصيلها للعميل النهائي"
                : "Complete workflow covering all stages of fabric trading from booking materials from global factories to delivering to the final customer"}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white text-base font-semibold rounded-xl shadow-lg shadow-texafab-emerald/25">
                  {language === "ar" ? "احجز عرض توضيحي" : "Book a Demo"}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" className="h-14 px-8 border-2 text-base font-semibold rounded-xl">
                  {language === "ar" ? "استكشف الميزات" : "Explore Features"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مراحل سير العمل" : "Workflow Stages"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "8 مراحل متكاملة تغطي كامل دورة حياة الأقمشة في شركتك"
                : "8 integrated stages covering the complete fabric lifecycle in your company"}
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 start-0 end-0 h-1 bg-gradient-to-r from-texafab-emerald/20 via-texafab-emerald to-texafab-emerald/20 hidden lg:block -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.slice(0, 4).map((step, index) => (
                <div key={step.step} className="relative">
                  <Card className="p-6 h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl group hover:-translate-y-2">
                    {/* Step Number */}
                    <div className={`absolute -top-4 -start-4 w-10 h-10 rounded-full bg-gradient-to-r ${step.color} text-white font-bold flex items-center justify-center shadow-lg`}>
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 shadow-lg shadow-${step.color}/20 group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-texafab-slate mb-2">
                      {language === "ar" ? step.titleAr : step.titleEn}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">
                      {language === "ar" ? step.descAr : step.descEn}
                    </p>

                    <ul className="space-y-2">
                      {(language === "ar" ? step.featuresAr : step.featuresEn).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-texafab-emerald flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  {/* Arrow */}
                  {index < 3 && (
                    <div className="hidden lg:flex absolute top-1/2 -end-4 -translate-y-1/2 z-10">
                      <ArrowRight className={`w-8 h-8 text-texafab-emerald ${dir === "rtl" ? "rotate-180" : ""}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center my-8">
              <ArrowDown className="w-10 h-10 text-texafab-emerald animate-bounce" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.slice(4).map((step, index) => (
                <div key={step.step} className="relative">
                  <Card className="p-6 h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl group hover:-translate-y-2">
                    {/* Step Number */}
                    <div className={`absolute -top-4 -start-4 w-10 h-10 rounded-full bg-gradient-to-r ${step.color} text-white font-bold flex items-center justify-center shadow-lg`}>
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-texafab-slate mb-2">
                      {language === "ar" ? step.titleAr : step.titleEn}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">
                      {language === "ar" ? step.descAr : step.descEn}
                    </p>

                    <ul className="space-y-2">
                      {(language === "ar" ? step.featuresAr : step.featuresEn).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-texafab-emerald flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  {/* Arrow */}
                  {index < 3 && (
                    <div className="hidden lg:flex absolute top-1/2 -end-4 -translate-y-1/2 z-10">
                      <ArrowRight className={`w-8 h-8 text-texafab-emerald ${dir === "rtl" ? "rotate-180" : ""}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-texafab-slate to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "فوائد سير العمل المتكامل" : "Benefits of Integrated Workflow"}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "نظام واحد يربط جميع عملياتك من البداية للنهاية"
                : "One system connecting all your operations from start to finish"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl hover:bg-white/20 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-texafab-emerald/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-texafab-emerald" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {language === "ar" ? benefit.titleAr : benefit.titleEn}
                </h3>
                <p className="text-gray-300 text-sm">
                  {language === "ar" ? benefit.descAr : benefit.descEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Workflow Diagram */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "الصورة الكاملة" : "The Complete Picture"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "نظرة شاملة على كيفية ربط جميع العمليات في نظام واحد متكامل"
                : "A comprehensive view of how all operations connect in one integrated system"}
            </p>
          </div>

          {/* Workflow Visualization */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, #0a5c4a 1px, transparent 0)",
                backgroundSize: "40px 40px"
              }} />
            </div>

            <div className="relative grid md:grid-cols-3 gap-8">
              {/* Source */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl mb-4">
                  <Factory className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {language === "ar" ? "المصدر" : "Source"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === "ar" ? "المصانع العالمية" : "Global Factories"}
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>{language === "ar" ? "الصين، تركيا، الهند" : "China, Turkey, India"}</span>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-texafab-emerald to-teal-600 flex items-center justify-center shadow-xl mb-4">
                  <RefreshCcw className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {language === "ar" ? "العمليات" : "Operations"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === "ar" ? "نظام ERPMAX" : "ERPMAX System"}
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <Calculator className="w-4 h-4" />
                    <span>{language === "ar" ? "إدارة متكاملة" : "Integrated Management"}</span>
                  </div>
                </div>
              </div>

              {/* Destination */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-xl mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {language === "ar" ? "الوجهة" : "Destination"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === "ar" ? "العملاء السعداء" : "Happy Customers"}
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>{language === "ar" ? "توصيل سريع" : "Fast Delivery"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Arrows */}
            <div className="hidden md:flex absolute top-1/2 left-1/4 right-1/4 justify-between -translate-y-1/2 px-8">
              <ArrowRight className={`w-12 h-12 text-texafab-emerald/30 ${dir === "rtl" ? "rotate-180" : ""}`} />
              <ArrowRight className={`w-12 h-12 text-texafab-emerald/30 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function WorkflowPage() {
  return <WorkflowContent />;
}
