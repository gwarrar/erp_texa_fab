import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ShoppingBag,
  CreditCard,
  Truck,
  Search,
  Filter,
  Heart,
  Star,
  Package,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Globe,
  Shield,
  Tag,
  Percent,
  RefreshCw,
  MessageCircle,
  Image,
  Palette,
  BarChart3,
  Zap,
  Bell,
  Users
} from "lucide-react";

function EcommerceContent() {
  const { language, dir } = useLanguage();

  const features = [
    {
      icon: Image,
      titleAr: "كتالوج منتجات متكامل",
      titleEn: "Complete Product Catalog",
      descAr: "صور عالية الجودة من زوايا متعددة مع وصف تفصيلي لكل منتج",
      descEn: "High-quality images from multiple angles with detailed descriptions",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Filter,
      titleAr: "فلترة متقدمة",
      titleEn: "Advanced Filtering",
      descAr: "فلترة حسب النوع، اللون، السعر، المقاس، والتوفر",
      descEn: "Filter by type, color, price, size, and availability",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ShoppingBag,
      titleAr: "عربة تسوق ذكية",
      titleEn: "Smart Shopping Cart",
      descAr: "حساب تلقائي للأسعار مع الخصومات والشحن",
      descEn: "Automatic price calculation with discounts and shipping",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CreditCard,
      titleAr: "بوابات دفع متعددة",
      titleEn: "Multiple Payment Gateways",
      descAr: "دعم mada، Apple Pay، Visa، Mastercard، والتحويل البنكي",
      descEn: "Support for mada, Apple Pay, Visa, Mastercard, and bank transfer",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Truck,
      titleAr: "حساب تكاليف الشحن",
      titleEn: "Shipping Cost Calculator",
      descAr: "حساب تلقائي لتكاليف الشحن حسب الموقع والوزن",
      descEn: "Automatic shipping cost calculation by location and weight",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Package,
      titleAr: "تتبع الطلبات",
      titleEn: "Order Tracking",
      descAr: "تمكين العملاء من تتبع طلباتهم في الوقت الفعلي",
      descEn: "Enable customers to track their orders in real-time",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const additionalFeatures = [
    {
      icon: Star,
      titleAr: "المراجعات والتقييمات",
      titleEn: "Reviews & Ratings",
      descAr: "نظام تقييم شامل للمنتجات من العملاء",
      descEn: "Complete product rating system from customers"
    },
    {
      icon: Heart,
      titleAr: "قوائم الأمنيات",
      titleEn: "Wishlists",
      descAr: "حفظ المنتجات المفضلة للشراء لاحقاً",
      descEn: "Save favorite products for later purchase"
    },
    {
      icon: Tag,
      titleAr: "كوبونات وعروض",
      titleEn: "Coupons & Offers",
      descAr: "إدارة كاملة للكوبونات والعروض الترويجية",
      descEn: "Complete coupon and promotion management"
    },
    {
      icon: RefreshCw,
      titleAr: "تزامن المخزون",
      titleEn: "Inventory Sync",
      descAr: "تزامن فوري مع مخزون المستودع",
      descEn: "Instant sync with warehouse inventory"
    },
    {
      icon: Smartphone,
      titleAr: "تطبيق موبايل",
      titleEn: "Mobile App",
      descAr: "تطبيق iOS و Android للعملاء",
      descEn: "iOS and Android app for customers"
    },
    {
      icon: Globe,
      titleAr: "متعدد اللغات",
      titleEn: "Multi-Language",
      descAr: "دعم العربية والإنجليزية والمزيد",
      descEn: "Support for Arabic, English, and more"
    },
    {
      icon: Shield,
      titleAr: "أمان عالي",
      titleEn: "High Security",
      descAr: "تشفير SSL وحماية بيانات العملاء",
      descEn: "SSL encryption and customer data protection"
    },
    {
      icon: BarChart3,
      titleAr: "تحليلات المتجر",
      titleEn: "Store Analytics",
      descAr: "تقارير شاملة عن المبيعات وسلوك العملاء",
      descEn: "Comprehensive sales and customer behavior reports"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
              <ShoppingBag className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-semibold text-pink-600">
                {language === "ar" ? "المتجر الإلكتروني" : "E-Commerce Store"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>متجر إلكتروني <span className="text-pink-500">متكامل</span></>
              ) : (
                <>Complete <span className="text-pink-500">E-Commerce</span> Store</>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "ar" 
                ? "أطلق متجرك الإلكتروني المتكامل مع TexaCore وابدأ ببيع منتجاتك للعملاء في أي مكان"
                : "Launch your complete e-commerce store with TexaCore and start selling your products to customers anywhere"}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-pink-500 hover:bg-pink-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-pink-500/25">
                  {language === "ar" ? "احجز عرض توضيحي" : "Book a Demo"}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Store Preview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Card className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 border-0 shadow-xl rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-texafab-slate mb-4">
                  {language === "ar" ? "متجر احترافي جاهز للإطلاق" : "Professional Store Ready to Launch"}
                </h2>
                <p className="text-gray-600 mb-6">
                  {language === "ar" 
                    ? "متجر إلكتروني كامل المزايا مع تصميم عصري وتجربة مستخدم مميزة"
                    : "Full-featured e-commerce store with modern design and excellent user experience"}
                </p>
                <ul className="space-y-3">
                  {[
                    { ar: "تصميم متجاوب مع جميع الأجهزة", en: "Responsive design for all devices" },
                    { ar: "سرعة تحميل عالية", en: "Fast loading speed" },
                    { ar: "SEO محسّن لمحركات البحث", en: "SEO optimized for search engines" },
                    { ar: "تخصيص كامل للعلامة التجارية", en: "Full brand customization" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                      <span className="text-gray-700">{language === "ar" ? item.ar : item.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-4">
                {/* Mock Store UI */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-pink-500 rounded-lg" />
                      <span className="font-bold text-texafab-slate">Your Store</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Search className="w-5 h-5 text-gray-400" />
                      <Heart className="w-5 h-5 text-gray-400" />
                      <ShoppingBag className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-gray-100 rounded-xl p-3">
                        <div className="h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg mb-2" />
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-1" />
                        <div className="h-3 bg-pink-200 rounded w-1/2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مميزات المتجر الإلكتروني" : "E-Commerce Features"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "كل ما تحتاجه لإدارة متجر إلكتروني ناجح"
                : "Everything you need to run a successful online store"}
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

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مميزات إضافية" : "Additional Features"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-texafab-slate text-sm">
                      {language === "ar" ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {language === "ar" ? feature.descAr : feature.descEn}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-gradient-to-br from-pink-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "طرق الدفع المدعومة" : "Supported Payment Methods"}
            </h2>
            <p className="text-lg text-white/80">
              {language === "ar" ? "قبول المدفوعات من أي مكان" : "Accept payments from anywhere"}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {["mada", "Apple Pay", "Visa", "Mastercard", "AMEX", "PayPal", "STC Pay", "Tabby"].map((method, index) => (
              <Card key={index} className="px-6 py-4 bg-white/10 backdrop-blur-xl border-white/20 rounded-xl">
                <span className="text-white font-semibold">{method}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Smartphone className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-semibold text-purple-600">
                  {language === "ar" ? "تطبيق الموبايل" : "Mobile App"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                {language === "ar" ? "تطبيق موبايل للعملاء" : "Customer Mobile App"}
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                {language === "ar" 
                  ? "تطبيق iOS و Android يمكّن عملاءك من التسوق بسهولة من هواتفهم"
                  : "iOS and Android app enabling your customers to easily shop from their phones"}
              </p>

              <ul className="space-y-3">
                {[
                  { ar: "تصفح سريع للمنتجات", en: "Fast product browsing" },
                  { ar: "إشعارات العروض والخصومات", en: "Offer and discount notifications" },
                  { ar: "تتبع الطلبات مباشرة", en: "Direct order tracking" },
                  { ar: "حفظ طرق الدفع المفضلة", en: "Save favorite payment methods" },
                  { ar: "إعادة الطلب السابق بضغطة", en: "Reorder with one click" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700">{language === "ar" ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl rounded-3xl">
              <div className="flex justify-center gap-4">
                <div className="w-48 h-96 bg-white rounded-3xl shadow-lg p-2 border-4 border-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-16 h-16 text-purple-300" />
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

export default function EcommercePage() {
  return <EcommerceContent />;
}
