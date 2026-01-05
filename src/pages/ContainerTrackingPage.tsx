import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrowserMockup } from "@/components/landing/SystemScreenshots";
import { 
  Ship,
  Package,
  MapPin,
  Clock,
  DollarSign,
  FileText,
  Bell,
  Shield,
  ArrowRight,
  CheckCircle2,
  Globe,
  Truck,
  Warehouse,
  Calculator,
  Eye,
  RefreshCcw,
  BarChart3,
  Anchor,
  Container,
  Route,
  Timer,
  AlertCircle,
  Monitor
} from "lucide-react";

function ContainerTrackingContent() {
  const { language, dir } = useLanguage();

  const features = [
    {
      icon: Ship,
      titleAr: "تتبع الشحنات البحرية",
      titleEn: "Sea Freight Tracking",
      descAr: "تتبع مباشر لجميع شحناتك البحرية من الميناء للميناء مع تحديثات فورية",
      descEn: "Live tracking of all your sea shipments from port to port with instant updates",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      titleAr: "موقع GPS مباشر",
      titleEn: "Live GPS Location",
      descAr: "اعرف موقع كونتينرك بالضبط في أي وقت على الخريطة التفاعلية",
      descEn: "Know your container's exact location anytime on the interactive map",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Clock,
      titleAr: "تواريخ الوصول",
      titleEn: "Arrival Dates",
      descAr: "تقديرات دقيقة لتواريخ الوصول مع تحديث تلقائي حسب الظروف",
      descEn: "Accurate arrival date estimates with automatic updates based on conditions",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: DollarSign,
      titleAr: "حساب التكاليف",
      titleEn: "Cost Calculation",
      descAr: "حساب شامل لجميع تكاليف الشحن والجمارك والتخزين",
      descEn: "Comprehensive calculation of all shipping, customs, and storage costs",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FileText,
      titleAr: "إدارة الوثائق",
      titleEn: "Document Management",
      descAr: "حفظ جميع وثائق الشحن والفواتير والتأمين في مكان واحد",
      descEn: "Store all shipping documents, invoices, and insurance in one place",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Bell,
      titleAr: "إشعارات ذكية",
      titleEn: "Smart Notifications",
      descAr: "إشعارات فورية عند كل تحديث في حالة الشحنة",
      descEn: "Instant notifications for every shipment status update",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const trackingStages = [
    {
      stage: 1,
      icon: Package,
      titleAr: "تجهيز الشحنة",
      titleEn: "Shipment Preparation",
      statusAr: "في المصنع",
      statusEn: "At Factory",
      descAr: "تعبئة وتجهيز الكونتينر في المصنع",
      descEn: "Container packing and preparation at factory"
    },
    {
      stage: 2,
      icon: Anchor,
      titleAr: "في الميناء المصدر",
      titleEn: "At Origin Port",
      statusAr: "في الانتظار",
      statusEn: "Waiting",
      descAr: "الكونتينر في ميناء الشحن",
      descEn: "Container at shipping port"
    },
    {
      stage: 3,
      icon: Ship,
      titleAr: "في البحر",
      titleEn: "At Sea",
      statusAr: "قيد الشحن",
      statusEn: "In Transit",
      descAr: "الكونتينر على السفينة",
      descEn: "Container on the vessel"
    },
    {
      stage: 4,
      icon: MapPin,
      titleAr: "في الميناء الوجهة",
      titleEn: "At Destination Port",
      statusAr: "وصل",
      statusEn: "Arrived",
      descAr: "الكونتينر وصل للميناء",
      descEn: "Container arrived at port"
    },
    {
      stage: 5,
      icon: Truck,
      titleAr: "في الطريق",
      titleEn: "On the Way",
      statusAr: "نقل داخلي",
      statusEn: "Inland Transit",
      descAr: "نقل للمستودع",
      descEn: "Transport to warehouse"
    },
    {
      stage: 6,
      icon: Warehouse,
      titleAr: "تم الاستلام",
      titleEn: "Received",
      statusAr: "مكتمل",
      statusEn: "Complete",
      descAr: "تم استلام الكونتينر",
      descEn: "Container received"
    }
  ];

  const costBreakdown = [
    { labelAr: "تكلفة البضاعة (FOB)", labelEn: "Goods Cost (FOB)", percentage: 60 },
    { labelAr: "الشحن البحري", labelEn: "Sea Freight", percentage: 15 },
    { labelAr: "التأمين", labelEn: "Insurance", percentage: 3 },
    { labelAr: "الجمارك والضرائب", labelEn: "Customs & Taxes", percentage: 12 },
    { labelAr: "النقل الداخلي", labelEn: "Inland Transport", percentage: 5 },
    { labelAr: "رسوم أخرى", labelEn: "Other Fees", percentage: 5 }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-texafab-emerald/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Ship className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-blue-600">
                  {language === "ar" ? "إدارة الكونتينرات" : "Container Management"}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-texafab-slate mb-6 leading-tight">
                {language === "ar" ? (
                  <>تتبع كونتينراتك <span className="text-blue-500">بدقة متناهية</span></>
                ) : (
                  <>Track Your Containers <span className="text-blue-500">With Precision</span></>
                )}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {language === "ar" 
                  ? "نظام متكامل لإدارة وتتبع جميع كونتينراتك من لحظة الشحن وحتى الاستلام مع حساب دقيق للتكاليف"
                  : "Complete system for managing and tracking all your containers from shipping to reception with accurate cost calculation"}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="h-14 px-8 bg-blue-500 hover:bg-blue-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-500/25">
                    {language === "ar" ? "طلب عرض توضيحي" : "Request Demo"}
                    <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-texafab-emerald/10 rounded-3xl border border-gray-200 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <Ship className="w-32 h-32 mx-auto text-blue-500/30 mb-4" />
                  <p className="text-gray-400 text-sm">
                    {language === "ar" ? "صورة نظام تتبع الكونتينرات" : "Container Tracking System Image"}
                  </p>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -start-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-texafab-slate">50+</p>
                    <p className="text-sm text-gray-500">{language === "ar" ? "ميناء مدعوم" : "Ports Supported"}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -end-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Timer className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-texafab-slate">Real-time</p>
                    <p className="text-sm text-gray-500">{language === "ar" ? "تتبع مباشر" : "Live Tracking"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مميزات نظام التتبع" : "Tracking System Features"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "كل ما تحتاجه لإدارة شحناتك البحرية في مكان واحد"
                : "Everything you need to manage your sea shipments in one place"}
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

      {/* Tracking Stages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مراحل تتبع الشحنة" : "Shipment Tracking Stages"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "تابع شحنتك خطوة بخطوة من المصنع حتى المستودع"
                : "Track your shipment step by step from factory to warehouse"}
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden lg:block absolute top-1/2 start-0 end-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 -translate-y-1/2" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {trackingStages.map((stage, index) => (
                <div key={stage.stage} className="relative">
                  <Card className="p-4 bg-white border-0 shadow-lg rounded-xl text-center hover:shadow-xl transition-all">
                    {/* Step Number */}
                    <div className="absolute -top-3 start-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold text-sm flex items-center justify-center shadow-lg z-10">
                      {stage.stage}
                    </div>

                    <div className="pt-4">
                      <div className="w-12 h-12 mx-auto rounded-xl bg-gray-100 flex items-center justify-center mb-3">
                        <stage.icon className="w-6 h-6 text-texafab-slate" />
                      </div>
                      <h3 className="font-bold text-texafab-slate text-sm mb-1">
                        {language === "ar" ? stage.titleAr : stage.titleEn}
                      </h3>
                      <span className="inline-block px-2 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
                        {language === "ar" ? stage.statusAr : stage.statusEn}
                      </span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Screenshot */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Monitor className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">
                {language === "ar" ? "واجهة التتبع" : "Tracking Interface"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {language === "ar" ? "لوحة تتبع الكونتينرات" : "Container Tracking Dashboard"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "تتبع جميع شحناتك في مكان واحد مع تفاصيل كاملة"
                : "Track all your shipments in one place with complete details"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group">
              <BrowserMockup 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=90" 
                alt={language === "ar" ? "تتبع الكونتينرات" : "Container Tracking"}
                className="transform group-hover:scale-[1.02] transition-transform duration-300"
              />
              <p className="mt-4 text-center font-medium text-gray-700 dark:text-gray-300">
                {language === "ar" ? "لوحة تتبع الشحنات والتكاليف" : "Shipment & Cost Tracking Dashboard"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
                {language === "ar" ? "حساب التكاليف الشامل" : "Comprehensive Cost Calculation"}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {language === "ar" 
                  ? "احسب تكلفة كل كونتينر بدقة مع تفاصيل كاملة لجميع المصاريف من المصنع حتى المستودع"
                  : "Calculate each container's cost accurately with complete details of all expenses from factory to warehouse"}
              </p>

              <div className="space-y-4">
                {costBreakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">
                        {language === "ar" ? item.labelAr : item.labelEn}
                      </span>
                      <span className="text-texafab-slate font-bold">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-emerald-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-texafab-slate to-gray-800 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-8 h-8 text-texafab-gold" />
                <h3 className="text-2xl font-bold">{language === "ar" ? "حاسبة التكاليف" : "Cost Calculator"}</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-sm text-gray-300 mb-1">{language === "ar" ? "تكلفة الكونتينر المقدرة" : "Estimated Container Cost"}</p>
                  <p className="text-3xl font-bold text-texafab-gold">$45,000</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-sm text-gray-300 mb-1">{language === "ar" ? "تكلفة المتر" : "Cost per Meter"}</p>
                    <p className="text-xl font-bold">$2.50</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-sm text-gray-300 mb-1">{language === "ar" ? "عدد الرولونات" : "Number of Rolls"}</p>
                    <p className="text-xl font-bold">180</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <AlertCircle className="w-4 h-4" />
                  <span>{language === "ar" ? "* التكاليف تقديرية وقد تختلف" : "* Costs are estimates and may vary"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ContainerTrackingPage() {
  return <ContainerTrackingContent />;
}
