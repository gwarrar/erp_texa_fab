import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calculator, 
  Warehouse, 
  ShoppingCart, 
  Users, 
  FileText, 
  BarChart3,
  Package,
  Ruler,
  Palette,
  Truck,
  Receipt,
  CreditCard,
  Building2,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Scissors,
  Layers,
  ScanBarcode,
  Scale,
  RefreshCcw,
  Boxes
} from "lucide-react";

function FeaturesContent() {
  const { language, dir } = useLanguage();

  const mainFeatures = [
    {
      icon: Ruler,
      titleAr: "إدارة القياسات المتعددة",
      titleEn: "Multi-Unit Management",
      descAr: "تتبع الأقمشة بالمتر، الرولون، الياردة، والكيلو. تحويل تلقائي بين الوحدات مع دقة عالية.",
      descEn: "Track fabrics by meter, roll, yard, and kilo. Automatic conversion between units with high precision.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      features: language === "ar" 
        ? ["تحويل تلقائي بين الوحدات", "حساب الأمتار من الرولونات", "تتبع الوزن والطول", "تقارير مفصلة بالوحدات"]
        : ["Auto unit conversion", "Meter calculation from rolls", "Weight & length tracking", "Detailed unit reports"]
    },
    {
      icon: Palette,
      titleAr: "إدارة الألوان والتصميمات",
      titleEn: "Colors & Designs Management",
      descAr: "نظام متقدم لإدارة الألوان والتصميمات والنقشات مع مطابقة دقيقة للعينات.",
      descEn: "Advanced system for managing colors, designs, and patterns with precise sample matching.",
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&q=80",
      features: language === "ar"
        ? ["كتالوج ألوان شامل", "مطابقة العينات", "تتبع أكواد الألوان", "إدارة التصميمات"]
        : ["Comprehensive color catalog", "Sample matching", "Color code tracking", "Design management"]
    },
    {
      icon: ScanBarcode,
      titleAr: "نظام الباركود المتقدم",
      titleEn: "Advanced Barcode System",
      descAr: "باركود لكل رولون وقطعة مع تتبع كامل من الاستيراد حتى البيع.",
      descEn: "Barcode for each roll and piece with complete tracking from import to sale.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      features: language === "ar"
        ? ["باركود فريد لكل رولون", "مسح ضوئي سريع", "طباعة ملصقات", "تتبع بالباركود"]
        : ["Unique barcode per roll", "Fast scanning", "Label printing", "Barcode tracking"]
    },
    {
      icon: Scale,
      titleAr: "حساب الكميات الدقيق",
      titleEn: "Precise Quantity Calculation",
      descAr: "حساب دقيق للكميات المتبقية بعد القص مع تتبع الهدر والفاقد.",
      descEn: "Accurate calculation of remaining quantities after cutting with waste tracking.",
      image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
      features: language === "ar"
        ? ["حساب الباقي بعد القص", "تتبع الهدر", "تقارير الفاقد", "تحليل الكفاءة"]
        : ["Remainder calculation", "Waste tracking", "Loss reports", "Efficiency analysis"]
    },
    {
      icon: Warehouse,
      titleAr: "إدارة المستودعات المتعددة",
      titleEn: "Multi-Warehouse Management",
      descAr: "إدارة مستودعات متعددة مع تتبع دقيق للموقع والرف لكل رولون.",
      descEn: "Manage multiple warehouses with precise location and shelf tracking for each roll.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      features: language === "ar"
        ? ["تحديد مواقع الرفوف", "نقل بين المستودعات", "جرد آلي", "تقارير المخزون"]
        : ["Shelf location", "Inter-warehouse transfer", "Auto inventory", "Stock reports"]
    },
    {
      icon: Calculator,
      titleAr: "المحاسبة المتكاملة",
      titleEn: "Integrated Accounting",
      descAr: "نظام محاسبي كامل مصمم خصيصاً لتجارة الأقمشة مع دعم العملات المتعددة.",
      descEn: "Complete accounting system designed specifically for fabric trade with multi-currency support.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      features: language === "ar"
        ? ["دفتر أستاذ عام", "قيود يومية", "ميزان مراجعة", "تقارير مالية"]
        : ["General ledger", "Journal entries", "Trial balance", "Financial reports"]
    }
  ];

  const additionalFeatures = [
    { icon: ShoppingCart, titleAr: "نقاط البيع", titleEn: "Point of Sale", descAr: "نظام POS متطور", descEn: "Advanced POS system" },
    { icon: Receipt, titleAr: "الفواتير", titleEn: "Invoicing", descAr: "فواتير احترافية", descEn: "Professional invoices" },
    { icon: Users, titleAr: "العملاء", titleEn: "Customers", descAr: "إدارة العملاء", descEn: "Customer management" },
    { icon: Truck, titleAr: "الشحن", titleEn: "Shipping", descAr: "تتبع الشحنات", descEn: "Shipment tracking" },
    { icon: CreditCard, titleAr: "المدفوعات", titleEn: "Payments", descAr: "إدارة المدفوعات", descEn: "Payment management" },
    { icon: FileText, titleAr: "التقارير", titleEn: "Reports", descAr: "تقارير شاملة", descEn: "Comprehensive reports" },
    { icon: Building2, titleAr: "الفروع", titleEn: "Branches", descAr: "إدارة متعددة", descEn: "Multi-branch" },
    { icon: Globe, titleAr: "التكامل", titleEn: "Integration", descAr: "API مفتوح", descEn: "Open API" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D948808_1px,transparent_1px),linear-gradient(to_bottom,#0D948808_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-6">
              <Layers className="w-4 h-4" />
              {language === "ar" ? "ميزات متخصصة للأقمشة" : "Specialized Fabric Features"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>نظام ERP <span className="text-texafab-emerald">متخصص للأقمشة</span></>
              ) : (
                <>ERP System <span className="text-texafab-emerald">Specialized for Fabrics</span></>
              )}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {language === "ar"
                ? "أول نظام ERP في العالم مصمم خصيصاً لصناعة وتجارة الأقمشة. يدعم جميع وحدات القياس والألوان والتصميمات مع تتبع دقيق لكل رولون."
                : "The world's first ERP system designed specifically for the fabric industry. Supports all measurement units, colors, and designs with precise tracking for each roll."
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="h-14 px-8 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white text-base font-semibold shadow-lg rounded-xl">
                {language === "ar" ? "ابدأ تجربة مجانية" : "Start Free Trial"}
                <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </Button>
              <Button variant="outline" className="h-14 px-8 border-2 text-base font-semibold rounded-xl">
                {language === "ar" ? "شاهد العرض" : "Watch Demo"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-texafab-emerald to-teal-600 flex items-center justify-center text-white shadow-lg mb-6">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                    {language === "ar" ? feature.titleAr : feature.titleEn}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {language === "ar" ? feature.descAr : feature.descEn}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-texafab-emerald flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={feature.image} 
                      alt={language === "ar" ? feature.titleAr : feature.titleEn}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-texafab-slate/40 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "المزيد من الميزات" : "More Features"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "نظام شامل يغطي جميع احتياجات عملك"
                : "Comprehensive system covering all your business needs"
              }
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalFeatures.map((feature, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-texafab-emerald/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-texafab-emerald" />
                </div>
                <h3 className="font-bold text-texafab-slate mb-1">
                  {language === "ar" ? feature.titleAr : feature.titleEn}
                </h3>
                <p className="text-sm text-gray-500">
                  {language === "ar" ? feature.descAr : feature.descEn}
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

export default function FeaturesPage() {
  return <FeaturesContent />;
}
