import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Truck,
  Ship,
  Package,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Route,
  User,
  Phone,
  FileText,
  AlertTriangle,
  Navigation,
  Calendar,
  Boxes,
  Building2,
  Star,
  Zap
} from "lucide-react";

function ShippingContent() {
  const { language, dir } = useLanguage();

  const features = [
    {
      icon: Truck,
      titleAr: "إدارة أسطول السائقين",
      titleEn: "Driver Fleet Management",
      descAr: "تتبع جميع السائقين ومركباتهم وجدول الرحلات",
      descEn: "Track all drivers, their vehicles, and trip schedules",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Route,
      titleAr: "تخطيط المسارات",
      titleEn: "Route Planning",
      descAr: "تخطيط أمثل للمسارات لتوفير الوقت والتكلفة",
      descEn: "Optimal route planning to save time and costs",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: MapPin,
      titleAr: "التتبع المباشر",
      titleEn: "Live Tracking",
      descAr: "تتبع الشحنات في الوقت الفعلي على الخريطة",
      descEn: "Track shipments in real-time on the map",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FileText,
      titleAr: "إثبات التسليم",
      titleEn: "Proof of Delivery",
      descAr: "توقيع إلكتروني وصور لتأكيد التسليم",
      descEn: "Electronic signature and photos to confirm delivery",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: AlertTriangle,
      titleAr: "إدارة المرتجعات",
      titleEn: "Returns Management",
      descAr: "تتبع المرتجعات والتوصيلات الفاشلة",
      descEn: "Track returns and failed deliveries",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Calendar,
      titleAr: "جدولة التوصيلات",
      titleEn: "Delivery Scheduling",
      descAr: "جدولة التوصيلات حسب المنطقة والأولوية",
      descEn: "Schedule deliveries by zone and priority",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const shipmentStatuses = [
    { 
      status: "قيد التحضير", 
      statusEn: "Preparing",
      count: 24, 
      color: "bg-amber-100 text-amber-600",
      icon: Package 
    },
    { 
      status: "في الطريق", 
      statusEn: "In Transit",
      count: 18, 
      color: "bg-blue-100 text-blue-600",
      icon: Truck 
    },
    { 
      status: "تم التوصيل", 
      statusEn: "Delivered",
      count: 156, 
      color: "bg-emerald-100 text-emerald-600",
      icon: CheckCircle2 
    },
    { 
      status: "مرتجع", 
      statusEn: "Returned",
      count: 3, 
      color: "bg-red-100 text-red-600",
      icon: AlertTriangle 
    }
  ];

  const drivers = [
    {
      name: "محمد أحمد",
      nameEn: "Mohammed Ahmed",
      status: "في مهمة",
      statusEn: "On Duty",
      trips: 12,
      rating: 4.9,
      vehicle: "شاحنة صغيرة"
    },
    {
      name: "عبدالله سعيد",
      nameEn: "Abdullah Saeed",
      status: "متاح",
      statusEn: "Available",
      trips: 8,
      rating: 4.8,
      vehicle: "فان كبير"
    },
    {
      name: "خالد محمود",
      nameEn: "Khaled Mahmoud",
      status: "في مهمة",
      statusEn: "On Duty",
      trips: 15,
      rating: 4.7,
      vehicle: "شاحنة"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Truck className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">
                {language === "ar" ? "إدارة الشحن والتوصيل" : "Shipping & Delivery Management"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>توصيل أسرع <span className="text-blue-500">تتبع أدق</span></>
              ) : (
                <>Faster Delivery <span className="text-blue-500">Precise Tracking</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "ar" 
                ? "نظام متكامل لإدارة الشحن والتوصيل مع تتبع مباشر للسائقين والشحنات"
                : "Complete shipping and delivery management system with live tracking of drivers and shipments"}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-blue-500 hover:bg-blue-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-500/25">
                  {language === "ar" ? "احجز عرض توضيحي" : "Book a Demo"}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shipment Status Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "لوحة متابعة الشحنات" : "Shipment Dashboard"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {shipmentStatuses.map((item, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-1">
                  {language === "ar" ? item.status : item.statusEn}
                </p>
                <p className="text-3xl font-bold text-texafab-slate">{item.count}</p>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
          <Card className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-xl rounded-3xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-texafab-slate">
                {language === "ar" ? "خريطة التتبع المباشر" : "Live Tracking Map"}
              </h3>
              <Button variant="outline" size="sm" className="rounded-lg">
                <Navigation className="w-4 h-4 me-2" />
                {language === "ar" ? "تحديث الموقع" : "Refresh Location"}
              </Button>
            </div>

            <div className="h-80 bg-white rounded-2xl flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-400">
                  {language === "ar" ? "خريطة تفاعلية للتتبع المباشر" : "Interactive Live Tracking Map"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مميزات نظام الشحن" : "Shipping System Features"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "كل ما تحتاجه لإدارة عمليات الشحن والتوصيل"
                : "Everything you need to manage shipping and delivery operations"}
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

      {/* Driver Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <User className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-600">
                  {language === "ar" ? "إدارة السائقين" : "Driver Management"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                {language === "ar" ? "تتبع فريق التوصيل الخاص بك" : "Track Your Delivery Team"}
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                {language === "ar" 
                  ? "إدارة شاملة لأسطول السائقين مع تتبع الأداء وجدولة المهام"
                  : "Complete driver fleet management with performance tracking and task scheduling"}
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  { ar: "تتبع موقع السائق المباشر", en: "Live driver location tracking" },
                  { ar: "تقييم أداء السائقين", en: "Driver performance rating" },
                  { ar: "جدولة الرحلات الذكية", en: "Smart trip scheduling" },
                  { ar: "إدارة المركبات والصيانة", en: "Vehicle and maintenance management" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-700">{language === "ar" ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-6 bg-white border-0 shadow-xl rounded-2xl">
              <h3 className="text-lg font-bold text-texafab-slate mb-4">
                {language === "ar" ? "السائقون المتاحون" : "Available Drivers"}
              </h3>

              <div className="space-y-4">
                {drivers.map((driver, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-texafab-slate">
                          {language === "ar" ? driver.name : driver.nameEn}
                        </p>
                        <p className="text-sm text-gray-500">{driver.vehicle}</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        driver.status === "متاح" ? "bg-emerald-100 text-emerald-600" : "bg-blue-100 text-blue-600"
                      }`}>
                        {language === "ar" ? driver.status : driver.statusEn}
                      </span>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="text-sm text-gray-600">{driver.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4 rounded-xl" variant="outline">
                {language === "ar" ? "عرض جميع السائقين" : "View All Drivers"}
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "فوائد نظام الشحن" : "Shipping System Benefits"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                titleAr: "توصيل أسرع",
                titleEn: "Faster Delivery",
                descAr: "تقليل وقت التوصيل بنسبة 40%",
                descEn: "Reduce delivery time by 40%"
              },
              {
                icon: MapPin,
                titleAr: "تتبع دقيق",
                titleEn: "Precise Tracking",
                descAr: "معرفة موقع كل شحنة في أي وقت",
                descEn: "Know the location of every shipment anytime"
              },
              {
                icon: Building2,
                titleAr: "تغطية أوسع",
                titleEn: "Wider Coverage",
                descAr: "إدارة التوصيل لمناطق متعددة",
                descEn: "Manage delivery to multiple areas"
              },
              {
                icon: CheckCircle2,
                titleAr: "رضا العملاء",
                titleEn: "Customer Satisfaction",
                descAr: "تحسين تجربة العميل بشكل ملحوظ",
                descEn: "Significantly improve customer experience"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl hover:bg-white/20 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {language === "ar" ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-white/70">
                  {language === "ar" ? item.descAr : item.descEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ShippingPage() {
  return <ShippingContent />;
}
