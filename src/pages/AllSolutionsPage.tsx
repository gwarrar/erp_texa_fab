import React, { useState } from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Ruler,
  Scissors,
  Palette,
  Package,
  BarChart3,
  ScanBarcode,
  Scale,
  Boxes,
  Warehouse,
  Calculator,
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  Users,
  Truck,
  Globe,
  Brain,
  FileText,
  DollarSign,
  Factory,
  Shirt,
  Store,
  HeadphonesIcon,
  Container,
  Layers,
  Settings,
  Shield,
  Zap,
  TrendingUp
} from "lucide-react";

function AllSolutionsContent() {
  const { language, dir } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  const solutionCategories = {
    management: {
      titleAr: "إدارة المخزون",
      titleEn: "Inventory Management",
      solutions: [
        {
          id: "fabric-management",
          icon: Ruler,
          titleAr: "إدارة الأقمشة",
          titleEn: "Fabric Management",
          descAr: "نظام شامل لإدارة جميع أنواع الأقمشة مع دعم وحدات القياس المتعددة",
          descEn: "Complete fabric management with multi-unit measurement support",
          featuresAr: ["تتبع الألوان والدرجات", "وحدات قياس متعددة", "تصنيف الجودة", "تاريخ الحركات"],
          featuresEn: ["Color & shade tracking", "Multi-unit support", "Quality grading", "Movement history"],
          link: "/fabric-management",
          color: "from-blue-500 to-blue-600"
        },
        {
          id: "roll-management",
          icon: Package,
          titleAr: "إدارة الرولونات",
          titleEn: "Roll Management",
          descAr: "تتبع دقيق لكل رولون من الاستلام حتى البيع مع باركود فريد",
          descEn: "Precise roll tracking from receipt to sale with unique barcodes",
          featuresAr: ["باركود فريد", "تتبع القص", "حساب الباقي", "تسعير تلقائي"],
          featuresEn: ["Unique barcode", "Cut tracking", "Remainder calc", "Auto pricing"],
          link: "/roll-management",
          color: "from-purple-500 to-purple-600"
        },
        {
          id: "warehouse-management",
          icon: Warehouse,
          titleAr: "إدارة المستودعات",
          titleEn: "Warehouse Management",
          descAr: "إدارة مستودعات متعددة مع تحديد مواقع الرفوف والتحويل بينها",
          descEn: "Multi-warehouse management with shelf locations and transfers",
          featuresAr: ["مواقع الرفوف", "نقل بين المستودعات", "جرد آلي", "تقارير المخزون"],
          featuresEn: ["Shelf locations", "Inter-warehouse transfer", "Auto inventory", "Stock reports"],
          link: "/warehouse-management",
          color: "from-amber-500 to-amber-600"
        },
        {
          id: "container-tracking",
          icon: Container,
          titleAr: "تتبع الحاويات",
          titleEn: "Container Tracking",
          descAr: "تتبع شحناتك من المصنع حتى المستودع مع تحديثات لحظية",
          descEn: "Track shipments from factory to warehouse with real-time updates",
          featuresAr: ["تتبع GPS", "حالة الشحنة", "تكاليف الاستيراد", "تنبيهات الوصول"],
          featuresEn: ["GPS tracking", "Shipment status", "Import costs", "Arrival alerts"],
          link: "/container-tracking",
          color: "from-cyan-500 to-cyan-600"
        }
      ]
    },
    manufacturing: {
      titleAr: "التصنيع",
      titleEn: "Manufacturing",
      solutions: [
        {
          id: "fabric-manufacturing",
          icon: Factory,
          titleAr: "تصنيع الأقمشة",
          titleEn: "Fabric Manufacturing",
          descAr: "إدارة خطوط إنتاج الأقمشة من المواد الخام حتى المنتج النهائي",
          descEn: "Manage fabric production lines from raw materials to finished products",
          featuresAr: ["أوامر الإنتاج", "تتبع المواد الخام", "مراقبة الجودة", "تكلفة الإنتاج"],
          featuresEn: ["Production orders", "Raw material tracking", "Quality control", "Production cost"],
          link: "/fabric-manufacturing",
          color: "from-indigo-500 to-indigo-600"
        },
        {
          id: "garment-manufacturing",
          icon: Shirt,
          titleAr: "تصنيع الملابس",
          titleEn: "Garment Manufacturing",
          descAr: "نظام متكامل لإدارة مصانع الملابس والتصنيع حسب الطلب",
          descEn: "Complete system for garment factories and made-to-order production",
          featuresAr: ["قص وتفصيل", "تتبع الطلبيات", "حساب التكاليف", "إدارة العمالة"],
          featuresEn: ["Cut & sew", "Order tracking", "Cost calculation", "Labor management"],
          link: "/garment-manufacturing",
          color: "from-pink-500 to-pink-600"
        }
      ]
    },
    sales: {
      titleAr: "المبيعات",
      titleEn: "Sales",
      solutions: [
        {
          id: "pos-system",
          icon: ShoppingCart,
          titleAr: "نقاط البيع",
          titleEn: "POS System",
          descAr: "نظام نقاط بيع متطور مع دعم البيع بالمتر والرولون والوزن",
          descEn: "Advanced POS with support for meter, roll, and weight sales",
          featuresAr: ["بيع متعدد الوحدات", "فواتير فورية", "إدارة النقدية", "تقارير المبيعات"],
          featuresEn: ["Multi-unit sales", "Instant invoices", "Cash management", "Sales reports"],
          link: "/pos-system",
          color: "from-green-500 to-green-600"
        },
        {
          id: "ecommerce",
          icon: Globe,
          titleAr: "التجارة الإلكترونية",
          titleEn: "E-commerce",
          descAr: "متجر إلكتروني متكامل مع مزامنة المخزون وبوابات الدفع",
          descEn: "Complete online store with inventory sync and payment gateways",
          featuresAr: ["متجر جاهز", "دفع إلكتروني", "إدارة الطلبات", "شحن متكامل"],
          featuresEn: ["Ready store", "Online payment", "Order management", "Integrated shipping"],
          link: "/ecommerce",
          color: "from-teal-500 to-teal-600"
        },
        {
          id: "agents-dealers",
          icon: Users,
          titleAr: "الوكلاء والموزعين",
          titleEn: "Agents & Dealers",
          descAr: "إدارة شبكة الوكلاء والموزعين مع العمولات والمناطق",
          descEn: "Manage agent and dealer network with commissions and territories",
          featuresAr: ["حسابات الوكلاء", "عمولات تلقائية", "مناطق البيع", "أهداف المبيعات"],
          featuresEn: ["Agent accounts", "Auto commissions", "Sales territories", "Sales targets"],
          link: "/agents-dealers",
          color: "from-orange-500 to-orange-600"
        },
        {
          id: "crm",
          icon: HeadphonesIcon,
          titleAr: "إدارة العملاء",
          titleEn: "CRM",
          descAr: "نظام متكامل لإدارة علاقات العملاء وتتبع التفاعلات",
          descEn: "Complete customer relationship management and interaction tracking",
          featuresAr: ["سجل العملاء", "تتبع التفاعلات", "تقسيم العملاء", "حملات تسويقية"],
          featuresEn: ["Customer records", "Interaction tracking", "Segmentation", "Marketing campaigns"],
          link: "/crm",
          color: "from-rose-500 to-rose-600"
        }
      ]
    },
    finance: {
      titleAr: "المالية",
      titleEn: "Finance",
      solutions: [
        {
          id: "accounting",
          icon: Calculator,
          titleAr: "المحاسبة",
          titleEn: "Accounting",
          descAr: "نظام محاسبي متكامل مع دعم العملات المتعددة والضرائب",
          descEn: "Complete accounting with multi-currency and tax support",
          featuresAr: ["قيود آلية", "قوائم مالية", "إدارة الضرائب", "تقارير الأرباح"],
          featuresEn: ["Auto entries", "Financial statements", "Tax management", "Profit reports"],
          link: "/accounting",
          color: "from-emerald-500 to-emerald-600"
        },
        {
          id: "shipping",
          icon: Truck,
          titleAr: "الشحن والتوصيل",
          titleEn: "Shipping & Delivery",
          descAr: "إدارة الشحن والتوصيل مع تتبع الطلبات وحساب التكاليف",
          descEn: "Shipping and delivery management with order tracking and cost calculation",
          featuresAr: ["تتبع الشحنات", "حساب التكاليف", "شركات الشحن", "إثبات التسليم"],
          featuresEn: ["Shipment tracking", "Cost calculation", "Shipping companies", "Delivery proof"],
          link: "/shipping",
          color: "from-violet-500 to-violet-600"
        }
      ]
    },
    analytics: {
      titleAr: "التحليلات",
      titleEn: "Analytics",
      solutions: [
        {
          id: "reports",
          icon: BarChart3,
          titleAr: "التقارير والتحليلات",
          titleEn: "Reports & Analytics",
          descAr: "تقارير شاملة مع لوحات معلومات تفاعلية لاتخاذ قرارات ذكية",
          descEn: "Comprehensive reports with interactive dashboards for smart decisions",
          featuresAr: ["تقارير فورية", "لوحات معلومات", "تصدير البيانات", "تحليل الأداء"],
          featuresEn: ["Real-time reports", "Dashboards", "Data export", "Performance analysis"],
          link: "/reports-analytics",
          color: "from-sky-500 to-sky-600"
        },
        {
          id: "ai-analytics",
          icon: Brain,
          titleAr: "الذكاء الاصطناعي",
          titleEn: "AI Analytics",
          descAr: "تحليلات ذكية مع توقعات المبيعات واكتشاف الأنماط",
          descEn: "Smart analytics with sales forecasting and pattern detection",
          featuresAr: ["توقع المبيعات", "اكتشاف الأنماط", "توصيات ذكية", "تنبيهات استباقية"],
          featuresEn: ["Sales forecasting", "Pattern detection", "Smart recommendations", "Proactive alerts"],
          link: "/ai-analytics",
          color: "from-fuchsia-500 to-fuchsia-600"
        }
      ]
    },
    hr: {
      titleAr: "الموارد البشرية",
      titleEn: "Human Resources",
      solutions: [
        {
          id: "employee-management",
          icon: Users,
          titleAr: "إدارة الموظفين",
          titleEn: "Employee Management",
          descAr: "إدارة شاملة للموظفين مع الحضور والرواتب والصلاحيات",
          descEn: "Complete employee management with attendance, payroll, and permissions",
          featuresAr: ["سجل الموظفين", "الحضور والانصراف", "الرواتب والمكافآت", "إدارة الصلاحيات"],
          featuresEn: ["Employee records", "Attendance", "Payroll & bonuses", "Permission management"],
          link: "/employee-management",
          color: "from-slate-500 to-slate-600"
        }
      ]
    }
  };

  // Priority order for categories (higher priority = show first when "all")
  const categoryPriorityOrder: Array<keyof typeof solutionCategories> = [
    "management",    // إدارة المخزون
    "finance",       // المالية
    "sales",         // المبيعات
    "manufacturing", // التصنيع
    "analytics",     // التحليلات
    "hr"             // الموارد البشرية
  ];

  // Filter tabs order (same order for both LTR and RTL)
  const filterTabsOrder = categoryPriorityOrder;

  // Get all solutions flattened with their category (in priority order)
  const allSolutions = categoryPriorityOrder.flatMap((key) => 
    solutionCategories[key].solutions.map((solution) => ({
      ...solution,
      categoryKey: key,
      categoryTitleAr: solutionCategories[key].titleAr,
      categoryTitleEn: solutionCategories[key].titleEn
    }))
  );

  // Filter solutions based on active tab
  const filteredSolutions = activeTab === "all" 
    ? allSolutions 
    : allSolutions.filter((solution) => solution.categoryKey === activeTab);

  // Keep same order for both LTR and RTL
  const displaySolutions = filteredSolutions;

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-texafab-cream/30 to-white" dir={dir}>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-6">
              <Layers className="w-4 h-4" />
              {language === "ar" ? "جميع الحلول" : "All Solutions"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>نظرة شاملة على <span className="text-texafab-emerald">حلولنا</span></>
              ) : (
                <>Complete Overview of <span className="text-texafab-emerald">Our Solutions</span></>
              )}
            </h1>
            <p className="text-xl text-texafab-slate/70 max-w-3xl mx-auto">
              {language === "ar" 
                ? "اكتشف جميع الميزات والحلول المتكاملة في نظام تكسافاب لإدارة تجارة الأقمشة"
                : "Discover all features and integrated solutions in TexaFab for fabric trade management"}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {/* All Solutions Tab */}
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium ${
                activeTab === "all"
                  ? "bg-texafab-emerald text-white border-texafab-emerald"
                  : "border-texafab-slate/10 text-texafab-slate hover:border-texafab-emerald/50"
              }`}
            >
              {language === "ar" ? "الكل" : "All"}
            </button>
            {filterTabsOrder.map((key) => {
              const category = solutionCategories[key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium ${
                    activeTab === key
                      ? "bg-texafab-emerald text-white border-texafab-emerald"
                      : "border-texafab-slate/10 text-texafab-slate hover:border-texafab-emerald/50"
                  }`}
                >
                  {language === "ar" ? category.titleAr : category.titleEn}
                </button>
              );
            })}
          </div>

          {/* All Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" dir={dir}>
            {displaySolutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Card 
                  key={solution.id}
                  className={`group bg-white hover:shadow-xl transition-all duration-500 border-texafab-slate/10 overflow-hidden ${
                    activeTab !== "all" && activeTab === solution.categoryKey
                      ? "ring-2 ring-texafab-emerald scale-[1.02]"
                      : ""
                  }`}
                >
                  <CardContent className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-texafab-slate/5 text-texafab-slate/60">
                        {language === "ar" ? solution.categoryTitleAr : solution.categoryTitleEn}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-texafab-slate mb-2">
                      {language === "ar" ? solution.titleAr : solution.titleEn}
                    </h3>

                    {/* Description */}
                    <p className="text-texafab-slate/70 mb-4 text-sm">
                      {language === "ar" ? solution.descAr : solution.descEn}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {(language === "ar" ? solution.featuresAr : solution.featuresEn).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-texafab-slate/80">
                          <CheckCircle2 className="w-4 h-4 text-texafab-emerald flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Link */}
                    <Link to={solution.link}>
                      <Button 
                        variant="outline" 
                        className="w-full group/btn border-texafab-emerald/30 text-texafab-emerald hover:bg-texafab-emerald hover:text-white transition-all duration-300"
                      >
                        {language === "ar" ? "اعرف المزيد" : "Learn More"}
                        <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 mr-2" : "ml-2"} group-hover/btn:translate-x-1 transition-transform`} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-texafab-slate text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "ar" ? "لماذا تكسافاب؟" : "Why TexaFab?"}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", labelAr: "حل متكامل", labelEn: "Integrated Solutions", icon: Layers },
              { value: "200+", labelAr: "ميزة متقدمة", labelEn: "Advanced Features", icon: Zap },
              { value: "100%", labelAr: "دعم عربي", labelEn: "Arabic Support", icon: Globe },
              { value: "24/7", labelAr: "دعم فني", labelEn: "Technical Support", icon: HeadphonesIcon }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-texafab-gold mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{language === "ar" ? stat.labelAr : stat.labelEn}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-texafab-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "جاهز للبدء؟" : "Ready to Get Started?"}
            </h2>
            <p className="text-texafab-slate/70 mb-8">
              {language === "ar"
                ? "احصل على عرض توضيحي مجاني واكتشف كيف يمكن لتكسافاب تحويل عملك"
                : "Get a free demo and discover how TexaFab can transform your business"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-texafab-emerald hover:bg-texafab-emerald/90 text-white px-8">
                  {language === "ar" ? "طلب عرض توضيحي" : "Request Demo"}
                  <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 mr-2" : "ml-2"}`} />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-texafab-emerald text-texafab-emerald hover:bg-texafab-emerald hover:text-white px-8">
                  {language === "ar" ? "عرض الأسعار" : "View Pricing"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function AllSolutionsPage() {
  return (
    <>
      <Header />
      <AllSolutionsContent />
      <Footer />
    </>
  );
}
