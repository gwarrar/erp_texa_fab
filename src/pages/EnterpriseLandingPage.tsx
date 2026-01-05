import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight,
  Play,
  CheckCircle2,
  XCircle,
  ScanBarcode,
  Calculator,
  Ship,
  Scissors,
  DollarSign,
  TrendingUp,
  Users,
  Package,
  BarChart3,
  Globe,
  Shield,
  Zap,
  Clock,
  AlertTriangle,
  FileSpreadsheet,
  RefreshCw,
  ShoppingCart,
  Warehouse,
  Target,
  Award,
  Building2,
  MapPin,
  Linkedin,
  Phone,
  Mail
} from "lucide-react";

function EnterpriseLandingContent() {
  const { language, dir } = useLanguage();
  const [activeComparison, setActiveComparison] = useState(0);

  const manualBurdens = [
    {
      icon: FileSpreadsheet,
      titleAr: "إدخال يدوي في 5+ تطبيقات",
      titleEn: "Manual Entry in 5+ Apps",
      descAr: "قضاء ساعات في نقل البيانات بين برامج متعددة",
      descEn: "Spending hours transferring data between multiple programs"
    },
    {
      icon: AlertTriangle,
      titleAr: "إرهاق Excel والأخطاء",
      titleEn: "Excel Fatigue & Errors",
      descAr: "جداول بيانات معقدة مليئة بالأخطاء البشرية",
      descEn: "Complex spreadsheets full of human errors"
    },
    {
      icon: Clock,
      titleAr: "10x مجهود بشري",
      titleEn: "10x Human Effort",
      descAr: "عمليات بطيئة تستنزف وقت الفريق",
      descEn: "Slow processes draining team time"
    },
    {
      icon: Package,
      titleAr: "عد رولونات غير دقيق",
      titleEn: "Inaccurate Roll Counts",
      descAr: "فقدان المخزون وعدم معرفة الكميات الحقيقية",
      descEn: "Inventory loss and unknown real quantities"
    },
    {
      icon: ShoppingCart,
      titleAr: "لا تزامن مع المتجر",
      titleEn: "No E-commerce Sync",
      descAr: "بيع منتجات غير متوفرة وإحباط العملاء",
      descEn: "Selling unavailable products and frustrating customers"
    },
    {
      icon: Users,
      titleAr: "تكاليف عمالة عالية",
      titleEn: "High Labor Costs",
      descAr: "توظيف موظفين إضافيين لإدخال البيانات",
      descEn: "Hiring extra staff for data entry"
    }
  ];

  const texaflowAdvantages = [
    {
      icon: Globe,
      titleAr: "منصة موحدة واحدة",
      titleEn: "One Unified Platform",
      descAr: "كل شيء في مكان واحد - بدون تبديل بين التطبيقات",
      descEn: "Everything in one place - no app switching"
    },
    {
      icon: ScanBarcode,
      titleAr: "جرد فوري بـ RFID",
      titleEn: "RFID Instant Inventory",
      descAr: "تتبع دقيق وفوري لكل رولون في ثوانٍ",
      descEn: "Precise real-time tracking of every roll in seconds"
    },
    {
      icon: Zap,
      titleAr: "عمليات أسرع 90%",
      titleEn: "90% Faster Operations",
      descAr: "أتمتة تقلل الوقت والجهد بشكل كبير",
      descEn: "Automation dramatically reducing time and effort"
    },
    {
      icon: Target,
      titleAr: "وحدات دقيقة",
      titleEn: "Precise Units",
      descAr: "أمتار، ياردات، كيلوغرام - بدقة متناهية",
      descEn: "Meters, Yards, Kg - with extreme precision"
    },
    {
      icon: RefreshCw,
      titleAr: "تزامن كامل مع المتجر",
      titleEn: "Full E-commerce Sync",
      descAr: "مخزون حي ومتزامن مع متجرك الإلكتروني",
      descEn: "Live inventory synced with your online store"
    },
    {
      icon: DollarSign,
      titleAr: "تقليل كبير في التكاليف",
      titleEn: "Massive Cost Reduction",
      descAr: "وفر 3-4 رواتب موظفين مع ROI سريع",
      descEn: "Save 3-4 employee salaries with fast ROI"
    }
  ];

  const coreModules = [
    {
      icon: ScanBarcode,
      titleAr: "إدارة الرولونات والدفعات",
      titleEn: "Roll & Batch Management",
      descAr: "تتبع دقيق باستخدام الباركود وتقنية RFID مع تصنيف متقدم للأقمشة",
      descEn: "Precise tracking with barcode/RFID and advanced fabric classification",
      color: "from-emerald-500 to-emerald-600",
      features: [
        { ar: "تتبع RFID فوري", en: "Instant RFID tracking" },
        { ar: "تصنيف الجودة", en: "Quality grading" },
        { ar: "سجل كامل للحركة", en: "Complete movement history" },
        { ar: "تنبيهات المخزون", en: "Stock alerts" }
      ]
    },
    {
      icon: Calculator,
      titleAr: "محاسبة متكاملة",
      titleEn: "Integrated Accounting",
      descAr: "دقة مالية بمعايير أيرلندية-أوروبية مع دعم العملات المتعددة",
      descEn: "Irish-European financial precision with multi-currency support",
      color: "from-blue-500 to-blue-600",
      features: [
        { ar: "تقارير مالية شاملة", en: "Comprehensive financial reports" },
        { ar: "دعم عملات متعددة", en: "Multi-currency support" },
        { ar: "حساب الربحية", en: "Profitability calculation" },
        { ar: "تقارير VAT جاهزة", en: "VAT-ready reports" }
      ]
    },
    {
      icon: Ship,
      titleAr: "لوجستيات ذكية",
      titleEn: "Smart Logistics",
      descAr: "تتبع الشحنات والكونتينرات من المصدر إلى الرف",
      descEn: "Track shipments and containers from source to shelf",
      color: "from-cyan-500 to-cyan-600",
      features: [
        { ar: "تتبع GPS للكونتينرات", en: "GPS container tracking" },
        { ar: "التخليص الجمركي", en: "Customs clearance" },
        { ar: "تنبيهات الوصول", en: "Arrival alerts" },
        { ar: "إدارة الموردين", en: "Supplier management" }
      ]
    },
    {
      icon: Scissors,
      titleAr: "إدارة التصنيع",
      titleEn: "Manufacturing",
      descAr: "إدارة القص وتحسين استغلال الأقمشة وتقليل الهدر",
      descEn: "Cutting management, fabric optimization, and waste reduction",
      color: "from-purple-500 to-purple-600",
      features: [
        { ar: "تخطيط القص الذكي", en: "Smart cutting planning" },
        { ar: "تقليل الهدر", en: "Waste reduction" },
        { ar: "حساب التكاليف", en: "Cost calculation" },
        { ar: "مراقبة الجودة", en: "Quality control" }
      ]
    }
  ];

  const roiStats = [
    {
      valueAr: "3-4",
      valueEn: "3-4",
      labelAr: "رواتب موظفين يمكن توفيرها",
      labelEn: "Employee Salaries Saved",
      icon: Users
    },
    {
      valueAr: "90%",
      valueEn: "90%",
      labelAr: "تقليل وقت العمليات",
      labelEn: "Process Time Reduction",
      icon: Clock
    },
    {
      valueAr: "99.9%",
      valueEn: "99.9%",
      labelAr: "دقة المخزون",
      labelEn: "Inventory Accuracy",
      icon: Target
    },
    {
      valueAr: "6",
      valueEn: "6",
      labelAr: "أشهر لاسترداد الاستثمار",
      labelEn: "Months to ROI",
      icon: TrendingUp
    }
  ];

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 start-0 w-full h-full bg-gradient-to-br from-emerald-50 via-white to-blue-50" />
          <div className="absolute top-20 end-20 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 start-20 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
          
          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-700">
                    {language === "ar" ? "تقنية أيرلندية-أوروبية" : "Irish-European Technology"}
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight">
                {language === "ar" ? (
                  <>
                    دقة في <span className="text-emerald-600">كل خيط</span>.
                    <br />
                    قوة في <span className="text-emerald-600">كل رولون</span>.
                  </>
                ) : (
                  <>
                    Precision in <span className="text-emerald-600">Every Thread</span>.
                    <br />
                    Power in <span className="text-emerald-600">Every Roll</span>.
                  </>
                )}
              </h1>

              {/* Sub-headline */}
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {language === "ar" 
                  ? "نظام ERP أيرلندي الهندسة لقادة صناعة الأقمشة. إدارة سلسة للرولونات، المحاسبة، والشحنات من مركز واحد."
                  : "The Global Irish-Engineered ERP for Textile Leaders. Seamlessly manage rolls, accounting, and shipments from one hub."}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/pricing">
                  <Button className="h-14 px-8 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-bold shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/35 transition-all duration-300 rounded-xl">
                    {language === "ar" ? "ابدأ الآن" : "Get Started"}
                    <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" className="h-14 px-8 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 text-base font-semibold rounded-xl transition-all duration-300">
                    <Play className="w-5 h-5 me-2 fill-emerald-600 text-emerald-600" />
                    {language === "ar" ? "شاهد العرض" : "Watch Demo"}
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>{language === "ar" ? "أمان بمعايير أوروبية" : "EU-Grade Security"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>{language === "ar" ? "ISO 27001 معتمد" : "ISO 27001 Certified"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span>{language === "ar" ? "دعم عالمي 24/7" : "24/7 Global Support"}</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <Card className="p-8 bg-white/80 backdrop-blur-xl border-0 shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden">
                {/* Dashboard Preview */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center">
                        <Warehouse className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">TexaFlow</p>
                        <p className="text-xs text-slate-500">{language === "ar" ? "لوحة التحكم" : "Dashboard"}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-xs text-emerald-600 font-medium">{language === "ar" ? "مباشر" : "Live"}</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-50 rounded-xl">
                      <p className="text-xs text-emerald-600 font-medium mb-1">{language === "ar" ? "إجمالي الرولونات" : "Total Rolls"}</p>
                      <p className="text-2xl font-bold text-slate-800">12,458</p>
                      <p className="text-xs text-emerald-600">+234 {language === "ar" ? "اليوم" : "today"}</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <p className="text-xs text-blue-600 font-medium mb-1">{language === "ar" ? "قيمة المخزون" : "Stock Value"}</p>
                      <p className="text-2xl font-bold text-slate-800">€2.4M</p>
                      <p className="text-xs text-blue-600">+12% {language === "ar" ? "هذا الشهر" : "this month"}</p>
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div className="h-20 bg-gradient-to-b from-emerald-50 to-white rounded-xl flex items-end justify-around px-4 pb-2">
                    {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 70, 85].map((height, i) => (
                      <div 
                        key={i} 
                        className="w-2 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-full transition-all duration-300"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      {language === "ar" ? "آخر النشاطات" : "Recent Activity"}
                    </p>
                    {[
                      { action: language === "ar" ? "شحنة وصلت" : "Shipment arrived", time: "2m", icon: Ship },
                      { action: language === "ar" ? "فاتورة صدرت" : "Invoice issued", time: "5m", icon: Calculator },
                      { action: language === "ar" ? "رولون مسجل" : "Roll scanned", time: "8m", icon: ScanBarcode }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center">
                            <item.icon className="w-3 h-3 text-slate-600" />
                          </div>
                          <span className="text-sm text-slate-700">{item.action}</span>
                        </div>
                        <span className="text-xs text-slate-400">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -top-4 -end-4 p-3 bg-white rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">RFID Scan</p>
                    <p className="text-[10px] text-slate-500">Roll #RF-2847</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -start-4 p-3 bg-white rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">+23%</p>
                    <p className="text-[10px] text-slate-500">{language === "ar" ? "كفاءة" : "Efficiency"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check Comparison Section */}
      <section id="comparison" className="py-20 bg-gradient-to-b from-slate-50 to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-sm font-semibold text-red-600">
                {language === "ar" ? "الحقيقة الصادمة" : "The Reality Check"}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4">
              {language === "ar" ? (
                <>لماذا يختار القادة <span className="text-emerald-600">TexaFlow</span></>
              ) : (
                <>Why Leaders Choose <span className="text-emerald-600">TexaFlow</span></>
              )}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "بدلاً من الفوضى التقليدية"
                : "Over Traditional Chaos"}
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Manual Burden Side */}
            <Card className="p-8 border-2 border-red-100 bg-gradient-to-br from-red-50/50 to-white rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 end-0 w-32 h-32 bg-red-100/50 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-700">
                      {language === "ar" ? "العبء اليدوي" : "The Manual Burden"}
                    </h3>
                    <p className="text-sm text-red-500">
                      {language === "ar" ? "الطريقة التقليدية" : "The Traditional Way"}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {manualBurdens.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/80 rounded-xl border border-red-100">
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          {language === "ar" ? item.titleAr : item.titleEn}
                        </p>
                        <p className="text-sm text-slate-500">
                          {language === "ar" ? item.descAr : item.descEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual: Messy Desk */}
                <div className="mt-8 p-6 bg-red-100/30 rounded-2xl">
                  <div className="flex items-center justify-center gap-4 flex-wrap opacity-60">
                    <FileSpreadsheet className="w-8 h-8 text-red-400 rotate-12" />
                    <AlertTriangle className="w-6 h-6 text-red-400 -rotate-6" />
                    <Clock className="w-7 h-7 text-red-400 rotate-3" />
                    <Users className="w-8 h-8 text-red-400 -rotate-12" />
                    <Package className="w-6 h-6 text-red-400 rotate-6" />
                  </div>
                  <p className="text-center text-sm text-red-500 mt-4">
                    {language === "ar" ? "فوضى وإرهاق يومي" : "Daily chaos and exhaustion"}
                  </p>
                </div>
              </div>
            </Card>

            {/* TexaFlow Advantage Side */}
            <Card className="p-8 border-2 border-emerald-100 bg-gradient-to-br from-emerald-50/50 to-white rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 end-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-700">
                      {language === "ar" ? "ميزة TexaFlow" : "The TexaFlow Advantage"}
                    </h3>
                    <p className="text-sm text-emerald-500">
                      {language === "ar" ? "الطريقة الذكية" : "The Smart Way"}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {texaflowAdvantages.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/80 rounded-xl border border-emerald-100">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          {language === "ar" ? item.titleAr : item.titleEn}
                        </p>
                        <p className="text-sm text-slate-500">
                          {language === "ar" ? item.descAr : item.descEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual: Clean Dashboard */}
                <div className="mt-8 p-6 bg-emerald-100/30 rounded-2xl">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-24 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <BarChart3 className="w-8 h-8 text-emerald-500" />
                    </div>
                  </div>
                  <p className="text-center text-sm text-emerald-600 mt-4">
                    {language === "ar" ? "لوحة تحكم نظيفة وفعالة" : "Clean & efficient dashboard"}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Enterprise Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
              <Package className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">
                {language === "ar" ? "الوحدات الرئيسية" : "Core Modules"}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4">
              {language === "ar" ? "وحدات المؤسسات" : "Enterprise Modules"}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "أربع ركائز قوية لإدارة أعمال الأقمشة"
                : "Four powerful pillars for textile business management"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreModules.map((module, index) => (
              <Card key={index} className="p-8 bg-white border-0 shadow-xl shadow-slate-100 rounded-3xl hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {language === "ar" ? module.titleAr : module.titleEn}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {language === "ar" ? module.descAr : module.descEn}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {module.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm text-slate-600">
                            {language === "ar" ? feature.ar : feature.en}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Value / ROI Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <DollarSign className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-semibold text-emerald-200">
                {language === "ar" ? "القيمة الاقتصادية" : "Economic Value"}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              {language === "ar" ? (
                <>النظام الذي <span className="text-emerald-400">يدفع ثمنه بنفسه</span></>
              ) : (
                <>The System That <span className="text-emerald-400">Pays for Itself</span></>
              )}
            </h2>
            <p className="text-xl text-emerald-100/80 max-w-3xl mx-auto">
              {language === "ar" 
                ? "من خلال الأتمتة، وفر تكاليف 3-4 موظفين وتجنب خسائر المخزون - استرد استثمارك في أشهر"
                : "Through automation, save 3-4 employee costs and prevent stock losses - recover your investment in months"}
            </p>
          </div>

          {/* ROI Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {roiStats.map((stat, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl text-center group hover:bg-white/15 transition-all">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-emerald-300" />
                </div>
                <p className="text-4xl font-black text-white mb-2">
                  {language === "ar" ? stat.valueAr : stat.valueEn}
                </p>
                <p className="text-emerald-200/80">
                  {language === "ar" ? stat.labelAr : stat.labelEn}
                </p>
              </Card>
            ))}
          </div>

          {/* ROI Calculator Preview */}
          <Card className="p-8 bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {language === "ar" ? "كيف يعمل ROI؟" : "How Does ROI Work?"}
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      ar: "تقليل موظفي إدخال البيانات من 4 إلى 1",
                      en: "Reduce data entry staff from 4 to 1"
                    },
                    {
                      ar: "تجنب خسائر المخزون بسبب العد الخاطئ",
                      en: "Avoid stock losses from miscounting"
                    },
                    {
                      ar: "منع بيع منتجات غير متوفرة",
                      en: "Prevent selling unavailable products"
                    },
                    {
                      ar: "زيادة رضا العملاء = مبيعات أكثر",
                      en: "Increase customer satisfaction = more sales"
                    }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-emerald-100">
                        {language === "ar" ? item.ar : item.en}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center lg:text-end">
                <p className="text-emerald-200/60 mb-2">
                  {language === "ar" ? "متوسط التوفير السنوي" : "Average Annual Savings"}
                </p>
                <p className="text-6xl font-black text-white mb-4">€120,000+</p>
                <p className="text-emerald-200/80 mb-6">
                  {language === "ar" ? "بناءً على دراسات عملاء حقيقيين" : "Based on real customer studies"}
                </p>
                <Link to="/contact">
                  <Button className="h-14 px-8 bg-white text-emerald-700 hover:bg-emerald-50 text-base font-bold rounded-xl">
                    {language === "ar" ? "احسب توفيرك" : "Calculate Your Savings"}
                    <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function EnterpriseLandingPage() {
  return (
    <>
      <EnterpriseLandingContent />
      <ScrollToTop />
    </>
  );
}
