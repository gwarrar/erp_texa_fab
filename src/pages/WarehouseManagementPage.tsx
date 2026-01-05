import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrowserMockup, LaptopMockup } from "@/components/landing/SystemScreenshots";
import { 
  Warehouse,
  Package,
  ScanBarcode,
  MapPin,
  Bell,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Layers,
  Search,
  ClipboardList,
  AlertTriangle,
  TrendingUp,
  Building2,
  Boxes,
  QrCode,
  FileText,
  Clock,
  Target,
  Zap,
  Monitor
} from "lucide-react";

function WarehouseManagementContent() {
  const { language, dir } = useLanguage();

  const features = [
    {
      icon: QrCode,
      titleAr: "تتبع الرولونات بالباركود/QR",
      titleEn: "Barcode/QR Roll Tracking",
      descAr: "مسح سريع لكل رولون مع تتبع كامل للحركة والموقع داخل المستودع",
      descEn: "Quick scanning for each roll with complete tracking of movement and location within the warehouse",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Building2,
      titleAr: "إدارة متعدد المستودعات",
      titleEn: "Multi-Warehouse Management",
      descAr: "تزامن فوري بين جميع الفروع والمواقع مع نقل سلس للمخزون",
      descEn: "Instant synchronization between all branches and locations with seamless inventory transfer",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: ClipboardList,
      titleAr: "جرد دوري وفوري",
      titleEn: "Periodic & Instant Inventory",
      descAr: "جرد جزئي أو كلي بضغطة واحدة مع تقارير الفروقات التلقائية",
      descEn: "Partial or complete inventory count with one click and automatic variance reports",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Bell,
      titleAr: "تنبيهات المخزون الذكية",
      titleEn: "Smart Stock Alerts",
      descAr: "تنبيهات تلقائية عند الوصول للحد الأدنى أو الأقصى للمخزون",
      descEn: "Automatic alerts when reaching minimum or maximum stock levels",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Layers,
      titleAr: "تتبع الدفعات (Batch)",
      titleEn: "Batch Tracking",
      descAr: "معرفة مصدر كل رولون، تاريخ الوصول، والمورد الأصلي",
      descEn: "Know the source of each roll, arrival date, and original supplier",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: MapPin,
      titleAr: "إدارة المواقع (Bin Location)",
      titleEn: "Bin Location Management",
      descAr: "تحديد موقع كل رولون داخل المستودع بدقة (رف، صف، عمود)",
      descEn: "Precisely locate each roll within the warehouse (shelf, row, column)",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const stats = [
    { valueAr: "99.9%", valueEn: "99.9%", labelAr: "دقة الجرد", labelEn: "Inventory Accuracy" },
    { valueAr: "70%", valueEn: "70%", labelAr: "تقليل وقت البحث", labelEn: "Search Time Reduction" },
    { valueAr: "50%", valueEn: "50%", labelAr: "تقليل الهدر", labelEn: "Waste Reduction" },
    { valueAr: "3x", valueEn: "3x", labelAr: "سرعة الجرد", labelEn: "Inventory Speed" }
  ];

  const workflowSteps = [
    {
      icon: Package,
      titleAr: "استلام البضاعة",
      titleEn: "Goods Receipt",
      descAr: "مسح الباركود وتسجيل البضاعة الواردة تلقائياً",
      descEn: "Scan barcode and automatically record incoming goods"
    },
    {
      icon: MapPin,
      titleAr: "تحديد الموقع",
      titleEn: "Location Assignment",
      descAr: "اقتراح ذكي لأفضل موقع تخزين حسب النوع والحركة",
      descEn: "Smart suggestion for best storage location based on type and movement"
    },
    {
      icon: Search,
      titleAr: "البحث والاسترجاع",
      titleEn: "Search & Retrieve",
      descAr: "العثور على أي رولون في ثوانٍ مع توجيهات الموقع",
      descEn: "Find any roll in seconds with location guidance"
    },
    {
      icon: RefreshCw,
      titleAr: "نقل المخزون",
      titleEn: "Stock Transfer",
      descAr: "نقل سلس بين المستودعات مع تحديث فوري",
      descEn: "Seamless transfer between warehouses with instant update"
    }
  ];

  const reports = [
    { titleAr: "تقرير حركة المخزون اليومية", titleEn: "Daily Stock Movement Report" },
    { titleAr: "تقرير الأصناف الراكدة", titleEn: "Slow-Moving Items Report" },
    { titleAr: "تقرير فروقات الجرد", titleEn: "Inventory Variance Report" },
    { titleAr: "تقرير تقادم المخزون", titleEn: "Stock Aging Report" },
    { titleAr: "تقرير المخزون حسب الفرع", titleEn: "Stock by Branch Report" },
    { titleAr: "تقرير التنبيهات والإشعارات", titleEn: "Alerts & Notifications Report" }
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
              <Warehouse className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">
                {language === "ar" ? "إدارة المستودعات المتقدمة" : "Advanced Warehouse Management"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>تحكم كامل <span className="text-blue-500">بمستودعاتك</span></>
              ) : (
                <>Complete Control <span className="text-blue-500">Over Your Warehouses</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "ar" 
                ? "نظام متكامل لإدارة المستودعات بتقنية الباركود والـ QR مع تتبع دقيق لكل رولون وموقعه في الوقت الفعلي"
                : "Integrated warehouse management system with barcode and QR technology for precise tracking of every roll and its location in real-time"}
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

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg rounded-2xl">
                <p className="text-4xl font-black text-blue-500 mb-2">
                  {language === "ar" ? stat.valueAr : stat.valueEn}
                </p>
                <p className="text-gray-600 font-medium">
                  {language === "ar" ? stat.labelAr : stat.labelEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مميزات إدارة المستودعات" : "Warehouse Management Features"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "أدوات متقدمة لإدارة مخزونك بكفاءة ودقة عالية"
                : "Advanced tools to manage your inventory with efficiency and high accuracy"}
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

      {/* Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "سير العمل في المستودع" : "Warehouse Workflow"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 bg-white border-2 border-blue-100 rounded-2xl hover:border-blue-300 transition-all">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold text-texafab-slate mb-2">
                    {language === "ar" ? step.titleAr : step.titleEn}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {language === "ar" ? step.descAr : step.descEn}
                  </p>
                </Card>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -end-3 transform -translate-y-1/2">
                    <ArrowRight className={`w-6 h-6 text-blue-300 ${dir === "rtl" ? "rotate-180" : ""}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Screenshots */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 dark:border-blue-500/30 mb-6">
              <Monitor className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {language === "ar" ? "واجهة النظام" : "System Interface"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {language === "ar" ? "لوحة إدارة المستودعات" : "Warehouse Dashboard"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "واجهة سهلة الاستخدام تعرض جميع بيانات المخزون في لمحة واحدة"
                : "User-friendly interface displaying all inventory data at a glance"}
            </p>
          </div>

          {/* Main Dashboard - Full Width */}
          <div className="mb-12">
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-emerald-500/20 rounded-3xl blur-2xl dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-emerald-500/10" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl shadow-gray-900/10 dark:shadow-black/30 border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-7 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-600 flex items-center px-3">
                      <span className="text-xs text-gray-400 dark:text-gray-500">erpmax.app/warehouse</span>
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {language === "ar" ? "لوحة المستودعات" : "Warehouse Dashboard"}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {language === "ar" ? "نظرة شاملة على المخزون" : "Overview of inventory"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-lg">
                        {language === "ar" ? "تحديث مباشر" : "Live Update"}
                      </div>
                    </div>
                  </div>
                  
                  {/* KPI Cards */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                      { label: language === "ar" ? "إجمالي المواد" : "Total Items", value: "12,847", icon: "📦", color: "blue" },
                      { label: language === "ar" ? "قيمة المخزون" : "Stock Value", value: "2.4M", icon: "💰", color: "emerald" },
                      { label: language === "ar" ? "معدل الدوران" : "Turnover", value: "4.2x", icon: "🔄", color: "purple" },
                      { label: language === "ar" ? "تنبيهات النقص" : "Low Stock", value: "23", icon: "⚠️", color: "orange" },
                    ].map((kpi, i) => (
                      <div key={i} className={`p-4 rounded-xl bg-${kpi.color}-50 dark:bg-${kpi.color}-900/20 border border-${kpi.color}-100 dark:border-${kpi.color}-800/50`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg">{kpi.icon}</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{kpi.label}</p>
                        <p className="text-xl font-bold text-gray-800 dark:text-white">{kpi.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Content Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {/* Stock Movement Chart */}
                    <div className="col-span-2 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {language === "ar" ? "حركة المخزون" : "Stock Movement"}
                        </span>
                        <BarChart3 className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="flex items-end gap-2 h-24">
                        {[35, 48, 62, 45, 78, 55, 90, 68, 82, 75, 88, 72].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col gap-1">
                            <div 
                              className="rounded-t bg-gradient-to-t from-blue-500 to-cyan-400 dark:from-blue-600 dark:to-cyan-500" 
                              style={{ height: `${h}%` }} 
                            />
                            <div 
                              className="rounded-b bg-gradient-to-t from-orange-500 to-red-400 dark:from-orange-600 dark:to-red-500" 
                              style={{ height: `${100 - h - 20}%` }} 
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-center gap-6 mt-3 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded bg-blue-500" />
                          <span className="text-gray-500 dark:text-gray-400">{language === "ar" ? "وارد" : "In"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded bg-orange-500" />
                          <span className="text-gray-500 dark:text-gray-400">{language === "ar" ? "صادر" : "Out"}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Warehouse Capacity */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {language === "ar" ? "سعة المستودعات" : "Warehouse Capacity"}
                        </span>
                        <Warehouse className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="space-y-3">
                        {[
                          { name: language === "ar" ? "المستودع الرئيسي" : "Main Warehouse", percent: 78 },
                          { name: language === "ar" ? "المستودع الفرعي" : "Branch Warehouse", percent: 45 },
                          { name: language === "ar" ? "المخزن المؤقت" : "Temp Storage", percent: 92 },
                        ].map((wh, i) => (
                          <div key={i}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-600 dark:text-gray-400">{wh.name}</span>
                              <span className="font-medium text-gray-800 dark:text-white">{wh.percent}%</span>
                            </div>
                            <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all ${wh.percent > 80 ? 'bg-red-500' : wh.percent > 60 ? 'bg-yellow-500' : 'bg-emerald-500'}`}
                                style={{ width: `${wh.percent}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Info Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Material Receipt Screenshot */}
            <div className="group">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  <div className="flex items-center gap-3">
                    <Package className="w-6 h-6" />
                    <div>
                      <h4 className="font-bold">{language === "ar" ? "استلام المواد" : "Material Receipt"}</h4>
                      <p className="text-xs text-white/80">{language === "ar" ? "استلام من الكونتينر" : "Container receipt"}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <p className="text-xs text-gray-500 dark:text-gray-400">{language === "ar" ? "رقم الكونتينر" : "Container No."}</p>
                      <p className="font-bold text-gray-800 dark:text-white">CONT-2024-0089</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <p className="text-xs text-gray-500 dark:text-gray-400">{language === "ar" ? "عدد الرولونات" : "Roll Count"}</p>
                      <p className="font-bold text-blue-600 dark:text-blue-400">245</p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600">
                    <table className="w-full text-xs">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th className="px-3 py-2 text-start text-gray-600 dark:text-gray-300">{language === "ar" ? "الصنف" : "Item"}</th>
                          <th className="px-3 py-2 text-center text-gray-600 dark:text-gray-300">{language === "ar" ? "الكمية" : "Qty"}</th>
                          <th className="px-3 py-2 text-end text-gray-600 dark:text-gray-300">{language === "ar" ? "الحالة" : "Status"}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {[
                          { item: language === "ar" ? "قماش قطني" : "Cotton Fabric", qty: "120", status: language === "ar" ? "مستلم" : "Received" },
                          { item: language === "ar" ? "قماش حريري" : "Silk Fabric", qty: "80", status: language === "ar" ? "قيد المراجعة" : "Checking" },
                          { item: language === "ar" ? "قماش بوليستر" : "Polyester", qty: "45", status: language === "ar" ? "في الانتظار" : "Pending" },
                        ].map((row, i) => (
                          <tr key={i} className="bg-white dark:bg-gray-800">
                            <td className="px-3 py-2 text-gray-700 dark:text-gray-300">{row.item}</td>
                            <td className="px-3 py-2 text-center text-gray-700 dark:text-gray-300">{row.qty}</td>
                            <td className="px-3 py-2 text-end">
                              <span className={`px-2 py-1 rounded-full text-[10px] font-medium ${
                                row.status.includes("مستلم") || row.status.includes("Received") 
                                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                                  : row.status.includes("مراجعة") || row.status.includes("Checking")
                                  ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                  : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                              }`}>
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center font-medium text-gray-700 dark:text-gray-300">
                {language === "ar" ? "شاشة استلام المواد" : "Material Receipt Screen"}
              </p>
            </div>

            {/* Features List */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-texafab-slate dark:text-white mb-6">
                {language === "ar" ? "المميزات الرئيسية" : "Key Features"}
              </h3>
              <ul className="space-y-4">
                {[
                  { ar: "عرض المخزون الحالي لكل فرع", en: "Current stock view for each branch" },
                  { ar: "تنبيهات الحد الأدنى للمخزون", en: "Minimum stock alerts" },
                  { ar: "حركة المخزون في الوقت الفعلي", en: "Real-time stock movement" },
                  { ar: "تقارير الأداء والكفاءة", en: "Performance and efficiency reports" },
                  { ar: "خريطة المستودع التفاعلية", en: "Interactive warehouse map" },
                  { ar: "تتبع الرولونات بالباركود", en: "Roll tracking with barcode" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200">{language === "ar" ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl text-center">
                  <p className="text-3xl font-bold text-blue-500">99.9%</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{language === "ar" ? "دقة الجرد" : "Inventory Accuracy"}</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl text-center">
                  <p className="text-3xl font-bold text-emerald-500">70%</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{language === "ar" ? "توفير الوقت" : "Time Saved"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "تقارير المستودعات" : "Warehouse Reports"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reports.map((report, index) => (
              <Card key={index} className="p-4 bg-white border-0 shadow-md rounded-xl flex items-center gap-3 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-500" />
                </div>
                <span className="font-medium text-texafab-slate">
                  {language === "ar" ? report.titleAr : report.titleEn}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function WarehouseManagementPage() {
  return <WarehouseManagementContent />;
}
