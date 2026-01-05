import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrowserMockup, LaptopMockup } from "@/components/landing/SystemScreenshots";
import { 
  ShoppingCart,
  ScanBarcode,
  CreditCard,
  Printer,
  Receipt,
  Wallet,
  Calculator,
  Monitor,
  Smartphone,
  Tablet,
  ArrowRight,
  CheckCircle2,
  Zap,
  RefreshCcw,
  Users,
  Tag,
  Percent,
  Clock,
  DollarSign,
  BarChart3,
  Package,
  Scissors,
  Ruler
} from "lucide-react";

function POSSystemContent() {
  const { language, dir } = useLanguage();

  const features = [
    {
      icon: ScanBarcode,
      titleAr: "مسح الباركود السريع",
      titleEn: "Fast Barcode Scanning",
      descAr: "امسح باركود الرولون وستظهر كل المعلومات فوراً",
      descEn: "Scan roll barcode and all information appears instantly",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Ruler,
      titleAr: "بيع بوحدات متعددة",
      titleEn: "Sell in Multiple Units",
      descAr: "بيع بالمتر، الياردة، الرولون الكامل، أو بالوزن",
      descEn: "Sell by meter, yard, full roll, or by weight",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Percent,
      titleAr: "خصومات وعروض",
      titleEn: "Discounts & Offers",
      descAr: "تطبيق خصومات بنسبة أو مبلغ ثابت مع إدارة العروض",
      descEn: "Apply percentage or fixed discounts with offers management",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: CreditCard,
      titleAr: "طرق دفع متعددة",
      titleEn: "Multiple Payment Methods",
      descAr: "نقدي، بطاقة، تحويل، دفع لاحق، أو مختلط",
      descEn: "Cash, card, transfer, credit, or mixed payment",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Printer,
      titleAr: "طباعة فورية",
      titleEn: "Instant Printing",
      descAr: "طباعة فواتير وإيصالات بتصميم احترافي",
      descEn: "Print invoices and receipts with professional design",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: RefreshCcw,
      titleAr: "تحديث فوري للمخزون",
      titleEn: "Real-time Inventory Update",
      descAr: "المخزون يتحدث تلقائياً مع كل عملية بيع",
      descEn: "Inventory updates automatically with every sale",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const devices = [
    { icon: Monitor, labelAr: "كمبيوتر", labelEn: "Desktop" },
    { icon: Tablet, labelAr: "تابلت", labelEn: "Tablet" },
    { icon: Smartphone, labelAr: "موبايل", labelEn: "Mobile" }
  ];

  const sampleInvoice = {
    items: [
      { name: "قماش بوليستر - أزرق", qty: "15 م", price: "$37.50", barcode: "RF-001" },
      { name: "قماش قطن - أبيض", qty: "8 م", price: "$24.00", barcode: "RF-002" },
      { name: "قماش كتان - بيج", qty: "1 رولون", price: "$180.00", barcode: "RF-003" }
    ],
    subtotal: "$241.50",
    discount: "-$24.15",
    tax: "$21.74",
    total: "$239.09"
  };

  const stats = [
    { valueAr: "2 ثانية", valueEn: "2 Seconds", labelAr: "متوسط وقت المعاملة", labelEn: "Avg. Transaction Time" },
    { valueAr: "99.9%", valueEn: "99.9%", labelAr: "دقة الجرد", labelEn: "Inventory Accuracy" },
    { valueAr: "50%", valueEn: "50%", labelAr: "زيادة سرعة البيع", labelEn: "Sales Speed Increase" },
    { valueAr: "0", valueEn: "0", labelAr: "أخطاء في الفواتير", labelEn: "Invoice Errors" }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <ShoppingCart className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-600">
                  {language === "ar" ? "نقاط البيع" : "Point of Sale"}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-texafab-slate mb-6 leading-tight">
                {language === "ar" ? (
                  <>نظام نقاط بيع <span className="text-emerald-500">متخصص للأقمشة</span></>
                ) : (
                  <>POS System <span className="text-emerald-500">Specialized for Fabrics</span></>
                )}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {language === "ar" 
                  ? "واجهة سريعة وسهلة الاستخدام مصممة خصيصاً لبيع الأقمشة بالمتر أو بالرولون مع تحديث فوري للمخزون"
                  : "Fast and easy-to-use interface designed specifically for selling fabrics by meter or roll with real-time inventory updates"}
              </p>

              {/* Device Support */}
              <div className="flex items-center gap-6 mb-8">
                <span className="text-sm text-gray-500">{language === "ar" ? "يعمل على:" : "Works on:"}</span>
                {devices.map((device, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <device.icon className="w-5 h-5" />
                    <span className="text-sm">{language === "ar" ? device.labelAr : device.labelEn}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="h-14 px-8 bg-emerald-500 hover:bg-emerald-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-emerald-500/25">
                    {language === "ar" ? "طلب عرض توضيحي" : "Request Demo"}
                    <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                  </Button>
                </Link>
              </div>
            </div>

            {/* POS Interface Preview */}
            <div className="relative">
              <Card className="p-6 bg-white border-0 shadow-2xl rounded-3xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-texafab-slate">
                    {language === "ar" ? "فاتورة جديدة" : "New Invoice"}
                  </h3>
                  <span className="text-sm text-gray-500">#INV-2024-0156</span>
                </div>

                {/* Search Bar */}
                <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-xl mb-4">
                  <ScanBarcode className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400 text-sm">
                    {language === "ar" ? "امسح الباركود أو ابحث..." : "Scan barcode or search..."}
                  </span>
                </div>

                {/* Items */}
                <div className="space-y-2 mb-4">
                  {sampleInvoice.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <Package className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-medium text-texafab-slate text-sm">{item.name}</p>
                          <p className="text-xs text-gray-400">{item.barcode}</p>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="font-bold text-texafab-slate">{item.price}</p>
                        <p className="text-xs text-gray-500">{item.qty}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{language === "ar" ? "المجموع" : "Subtotal"}</span>
                    <span className="text-gray-700">{sampleInvoice.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-500">{language === "ar" ? "خصم 10%" : "10% Discount"}</span>
                    <span className="text-emerald-500">{sampleInvoice.discount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{language === "ar" ? "الضريبة" : "Tax"}</span>
                    <span className="text-gray-700">{sampleInvoice.tax}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-100">
                    <span className="text-texafab-slate">{language === "ar" ? "الإجمالي" : "Total"}</span>
                    <span className="text-emerald-500">{sampleInvoice.total}</span>
                  </div>
                </div>

                {/* Payment Buttons */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <Button variant="outline" className="rounded-xl">
                    <Wallet className="w-4 h-4 me-1" />
                    {language === "ar" ? "نقدي" : "Cash"}
                  </Button>
                  <Button variant="outline" className="rounded-xl">
                    <CreditCard className="w-4 h-4 me-1" />
                    {language === "ar" ? "بطاقة" : "Card"}
                  </Button>
                  <Button className="bg-emerald-500 hover:bg-emerald-600 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 me-1" />
                    {language === "ar" ? "إتمام" : "Complete"}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* System Screenshot */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Monitor className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">
                {language === "ar" ? "واجهة البيع" : "Sales Interface"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {language === "ar" ? "لوحة المبيعات" : "Sales Dashboard"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "تحليلات مبيعات تفصيلية لاتخاذ قرارات أفضل"
                : "Detailed sales analytics for better decision making"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group">
              <LaptopMockup 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90" 
                alt={language === "ar" ? "لوحة المبيعات" : "Sales Dashboard"}
                className="transform group-hover:scale-[1.02] transition-transform duration-300"
              />
              <p className="mt-4 text-center font-medium text-gray-700 dark:text-gray-300">
                {language === "ar" ? "لوحة تحليلات المبيعات الشاملة" : "Comprehensive Sales Analytics Dashboard"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-texafab-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-texafab-gold mb-2">
                  {language === "ar" ? stat.valueAr : stat.valueEn}
                </p>
                <p className="text-sm text-gray-300">
                  {language === "ar" ? stat.labelAr : stat.labelEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مميزات نقاط البيع" : "POS Features"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "نظام متكامل يغطي كل احتياجات نقاط البيع لشركات الأقمشة"
                : "Complete system covering all POS needs for fabric companies"}
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

      {/* Fabric-Specific Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مميزات خاصة بالأقمشة" : "Fabric-Specific Features"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "ميزات فريدة صممت خصيصاً لتجارة الأقمشة"
                : "Unique features designed specifically for fabric trading"}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sell by Meter */}
            <Card className="p-6 bg-white border-0 shadow-xl rounded-2xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                <Ruler className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-texafab-slate mb-4">
                {language === "ar" ? "البيع بالمتر" : "Sell by Meter"}
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{language === "ar" ? "الرولون" : "Roll"}</span>
                    <span className="font-medium">RF-2024-001</span>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{language === "ar" ? "المتبقي" : "Remaining"}</span>
                    <span className="font-medium text-emerald-500">73.5 م</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600">{language === "ar" ? "الكمية المطلوبة" : "Requested Qty"}</span>
                    <span className="font-bold text-blue-600">15 م</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Cut */}
            <Card className="p-6 bg-white border-0 shadow-xl rounded-2xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mb-4">
                <Scissors className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-texafab-slate mb-4">
                {language === "ar" ? "قص سريع" : "Quick Cut"}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === "ar" 
                  ? "عند البيع بالمتر، يتم تسجيل عملية القص تلقائياً وتحديث المخزون فوراً"
                  : "When selling by meter, the cut operation is recorded automatically and inventory updates instantly"}
              </p>
              <div className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 p-3 rounded-xl">
                <RefreshCcw className="w-4 h-4" />
                <span>{language === "ar" ? "تحديث فوري للمخزون" : "Real-time inventory update"}</span>
              </div>
            </Card>

            {/* Color Selection */}
            <Card className="p-6 bg-white border-0 shadow-xl rounded-2xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center mb-4">
                <Tag className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-texafab-slate mb-4">
                {language === "ar" ? "البحث بالألوان" : "Search by Color"}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === "ar" 
                  ? "ابحث عن الأقمشة المتوفرة حسب اللون أو الدرجة بسهولة"
                  : "Easily search for available fabrics by color or grade"}
              </p>
              <div className="flex gap-2 flex-wrap">
                {["#2B4B6F", "#8B4513", "#228B22", "#DC143C", "#FFD700"].map((color, i) => (
                  <div key={i} className="w-10 h-10 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-transform" style={{ backgroundColor: color }} />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function POSSystemPage() {
  return <POSSystemContent />;
}
