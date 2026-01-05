import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrowserMockup } from "@/components/landing/SystemScreenshots";
import { 
  BarChart3,
  PieChart,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Package,
  ShoppingCart,
  ArrowRight,
  CheckCircle2,
  Download,
  FileText,
  Calendar,
  Filter,
  Eye,
  Target,
  Award,
  Zap,
  RefreshCcw,
  Clock,
  Monitor
} from "lucide-react";

function ReportsAnalyticsContent() {
  const { language, dir } = useLanguage();

  const reportTypes = [
    {
      icon: DollarSign,
      titleAr: "تقارير المبيعات",
      titleEn: "Sales Reports",
      descAr: "تحليل شامل لجميع المبيعات حسب الفترة والمنتج والعميل",
      descEn: "Comprehensive analysis of all sales by period, product, and customer",
      color: "from-emerald-500 to-emerald-600",
      metrics: [
        { ar: "المبيعات اليومية/الشهرية/السنوية", en: "Daily/Monthly/Yearly Sales" },
        { ar: "مقارنة الفترات", en: "Period Comparison" },
        { ar: "أفضل المنتجات مبيعاً", en: "Top Selling Products" }
      ]
    },
    {
      icon: Package,
      titleAr: "تقارير المخزون",
      titleEn: "Inventory Reports",
      descAr: "متابعة دقيقة لحركة المخزون والرولونات والمنتجات",
      descEn: "Precise tracking of inventory movement, rolls, and products",
      color: "from-blue-500 to-blue-600",
      metrics: [
        { ar: "حركة المخزون", en: "Inventory Movement" },
        { ar: "الرولونات المتوفرة", en: "Available Rolls" },
        { ar: "تقارير الجرد", en: "Stock Count Reports" }
      ]
    },
    {
      icon: Users,
      titleAr: "تقارير العملاء",
      titleEn: "Customer Reports",
      descAr: "تحليل أداء العملاء ومشترياتهم وتاريخهم",
      descEn: "Customer performance analysis, purchases, and history",
      color: "from-purple-500 to-purple-600",
      metrics: [
        { ar: "أفضل العملاء", en: "Top Customers" },
        { ar: "الذمم المدينة", en: "Accounts Receivable" },
        { ar: "تاريخ العميل", en: "Customer History" }
      ]
    },
    {
      icon: TrendingUp,
      titleAr: "تقارير الأرباح",
      titleEn: "Profit Reports",
      descAr: "حساب دقيق للأرباح والهوامش الربحية لكل منتج وعميل",
      descEn: "Accurate profit and margin calculation for each product and customer",
      color: "from-amber-500 to-amber-600",
      metrics: [
        { ar: "هامش الربح", en: "Profit Margin" },
        { ar: "ربحية المنتجات", en: "Product Profitability" },
        { ar: "تحليل التكاليف", en: "Cost Analysis" }
      ]
    },
    {
      icon: Award,
      titleAr: "تقارير الأداء",
      titleEn: "Performance Reports",
      descAr: "مؤشرات أداء الموظفين والوكلاء والفروع",
      descEn: "Employee, agent, and branch performance indicators",
      color: "from-pink-500 to-pink-600",
      metrics: [
        { ar: "أداء الموظفين", en: "Employee Performance" },
        { ar: "KPIs شاملة", en: "Comprehensive KPIs" },
        { ar: "أداء الفروع", en: "Branch Performance" }
      ]
    },
    {
      icon: ShoppingCart,
      titleAr: "تقارير نقاط البيع",
      titleEn: "POS Reports",
      descAr: "تحليل مبيعات الكاشير والفواتير والإيرادات",
      descEn: "Cashier sales analysis, invoices, and revenue",
      color: "from-cyan-500 to-cyan-600",
      metrics: [
        { ar: "مبيعات الكاشير", en: "Cashier Sales" },
        { ar: "طرق الدفع", en: "Payment Methods" },
        { ar: "الفواتير الملغية", en: "Cancelled Invoices" }
      ]
    }
  ];

  const dashboardMetrics = [
    { 
      labelAr: "إجمالي المبيعات", 
      labelEn: "Total Sales", 
      value: "$2.4M", 
      change: "+12.5%", 
      isPositive: true,
      icon: DollarSign 
    },
    { 
      labelAr: "الأرباح", 
      labelEn: "Profits", 
      value: "$450K", 
      change: "+8.2%", 
      isPositive: true,
      icon: TrendingUp 
    },
    { 
      labelAr: "العملاء الجدد", 
      labelEn: "New Customers", 
      value: "156", 
      change: "+23%", 
      isPositive: true,
      icon: Users 
    },
    { 
      labelAr: "الرولونات المباعة", 
      labelEn: "Rolls Sold", 
      value: "3,420", 
      change: "-2.1%", 
      isPositive: false,
      icon: Package 
    }
  ];

  const exportFormats = [
    { format: "Excel", icon: "📊" },
    { format: "PDF", icon: "📄" },
    { format: "CSV", icon: "📋" },
    { format: "Print", icon: "🖨️" }
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
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <BarChart3 className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-600">
                {language === "ar" ? "التقارير والتحليلات" : "Reports & Analytics"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>قرارات ذكية <span className="text-emerald-500">مبنية على البيانات</span></>
              ) : (
                <>Smart Decisions <span className="text-emerald-500">Based on Data</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "ar" 
                ? "لوحة تحكم متكاملة وتقارير شاملة تمنحك رؤية كاملة لأداء شركتك في الوقت الفعلي"
                : "Integrated dashboard and comprehensive reports giving you complete visibility into your company's real-time performance"}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-emerald-500 hover:bg-emerald-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-emerald-500/25">
                  {language === "ar" ? "احجز عرض توضيحي" : "Book a Demo"}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "لوحة التحكم التفاعلية" : "Interactive Dashboard"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "نظرة شاملة على أداء شركتك في لحظة واحدة"
                : "Comprehensive view of your company's performance at a glance"}
            </p>
          </div>

          {/* Metrics Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dashboardMetrics.map((metric, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-texafab-slate" />
                  </div>
                  <span className={`flex items-center gap-1 text-sm font-semibold ${
                    metric.isPositive ? "text-emerald-500" : "text-red-500"
                  }`}>
                    {metric.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {metric.change}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-1">
                  {language === "ar" ? metric.labelAr : metric.labelEn}
                </p>
                <p className="text-3xl font-bold text-texafab-slate">{metric.value}</p>
              </Card>
            ))}
          </div>

          {/* Chart Placeholder */}
          <Card className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-xl rounded-3xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-texafab-slate">
                {language === "ar" ? "تحليل المبيعات الشهري" : "Monthly Sales Analysis"}
              </h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="rounded-lg">
                  <Calendar className="w-4 h-4 me-2" />
                  {language === "ar" ? "هذا الشهر" : "This Month"}
                </Button>
                <Button variant="outline" size="sm" className="rounded-lg">
                  <Filter className="w-4 h-4 me-2" />
                  {language === "ar" ? "فلترة" : "Filter"}
                </Button>
              </div>
            </div>

            <div className="h-64 bg-white rounded-2xl flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-400">
                  {language === "ar" ? "رسم بياني تفاعلي للمبيعات" : "Interactive Sales Chart"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Report Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "أنواع التقارير" : "Report Types"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "تقارير شاملة تغطي جميع جوانب عملك"
                : "Comprehensive reports covering all aspects of your business"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportTypes.map((report, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${report.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <report.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {language === "ar" ? report.titleAr : report.titleEn}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === "ar" ? report.descAr : report.descEn}
                </p>
                <ul className="space-y-2">
                  {report.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{language === "ar" ? metric.ar : metric.en}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Export Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Download className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-blue-600">
                  {language === "ar" ? "تصدير سهل" : "Easy Export"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                {language === "ar" ? "صدّر تقاريرك بسهولة" : "Export Your Reports Easily"}
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                {language === "ar" 
                  ? "صدّر أي تقرير بالصيغة التي تناسبك لمشاركته مع فريقك أو الإدارة"
                  : "Export any report in the format that suits you to share with your team or management"}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {exportFormats.map((format, index) => (
                  <Card key={index} className="p-4 bg-gray-50 border-0 rounded-xl flex items-center gap-3 hover:bg-gray-100 transition-colors cursor-pointer">
                    <span className="text-2xl">{format.icon}</span>
                    <span className="font-semibold text-texafab-slate">{format.format}</span>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-texafab-slate to-gray-800 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                {language === "ar" ? "تقارير مخصصة" : "Custom Reports"}
              </h3>
              
              <ul className="space-y-4">
                {[
                  { ar: "اختر الفترة الزمنية", en: "Select Time Period" },
                  { ar: "فلتر حسب المنتج أو العميل", en: "Filter by Product or Customer" },
                  { ar: "مقارنة الفترات", en: "Compare Periods" },
                  { ar: "جدولة التقارير التلقائية", en: "Schedule Automatic Reports" },
                  { ar: "إرسال بالبريد الإلكتروني", en: "Send via Email" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>{language === "ar" ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full mt-8 bg-white text-texafab-slate hover:bg-white/90 rounded-xl h-12 font-semibold">
                {language === "ar" ? "جرب الآن" : "Try Now"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* System Screenshots */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/30 mb-6">
              <Monitor className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                {language === "ar" ? "واجهة التقارير" : "Reports Interface"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {language === "ar" ? "تقارير تفاعلية وسهلة القراءة" : "Interactive & Easy-to-Read Reports"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "رسوم بيانية وجداول تفاعلية لفهم أسرع للبيانات"
                : "Interactive charts and tables for faster data comprehension"}
            </p>
          </div>

          {/* Collection Analysis Report */}
          <div className="mb-12">
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl dark:from-emerald-500/10 dark:via-blue-500/10 dark:to-purple-500/10" />
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
                      <span className="text-xs text-gray-400 dark:text-gray-500">erpmax.app/reports/collection</span>
                    </div>
                  </div>
                </div>
                
                {/* Report Content */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {language === "ar" ? "تحليل التحصيل" : "Collection Analysis"}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {language === "ar" ? "تقادم الذمم المدينة" : "Accounts receivable aging"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="text-xs rounded-lg">
                        <Download className="w-3 h-3 me-1" />
                        Excel
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs rounded-lg">
                        <Eye className="w-3 h-3 me-1" />
                        PDF
                      </Button>
                    </div>
                  </div>
                  
                  {/* Aging Summary Cards */}
                  <div className="grid grid-cols-5 gap-3 mb-6">
                    {[
                      { label: language === "ar" ? "حالي" : "Current", value: "SAR 450K", color: "emerald", percent: "45%" },
                      { label: language === "ar" ? "1-30 يوم" : "1-30 Days", value: "SAR 280K", color: "blue", percent: "28%" },
                      { label: language === "ar" ? "31-60 يوم" : "31-60 Days", value: "SAR 150K", color: "amber", percent: "15%" },
                      { label: language === "ar" ? "61-90 يوم" : "61-90 Days", value: "SAR 80K", color: "orange", percent: "8%" },
                      { label: language === "ar" ? "+90 يوم" : "90+ Days", value: "SAR 40K", color: "red", percent: "4%" },
                    ].map((item, i) => (
                      <div key={i} className={`p-3 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-900/20 border border-${item.color}-100 dark:border-${item.color}-800/50`}>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
                        <p className="text-lg font-bold text-gray-800 dark:text-white">{item.value}</p>
                        <p className={`text-xs font-medium text-${item.color}-600 dark:text-${item.color}-400`}>{item.percent}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart & Table */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Pie Chart */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4">
                        {language === "ar" ? "توزيع التقادم" : "Aging Distribution"}
                      </h4>
                      <div className="flex items-center justify-center">
                        <div className="relative w-32 h-32">
                          <svg viewBox="0 0 36 36" className="w-full h-full">
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5e7eb" strokeWidth="3" className="dark:stroke-gray-700" />
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="45 100" strokeDashoffset="25" className="transform -rotate-90 origin-center" />
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="28 100" strokeDashoffset="80" className="transform -rotate-90 origin-center" />
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="15 100" strokeDashoffset="108" className="transform -rotate-90 origin-center" />
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="8 100" strokeDashoffset="123" className="transform -rotate-90 origin-center" />
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="4 100" strokeDashoffset="131" className="transform -rotate-90 origin-center" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <p className="text-xl font-bold text-gray-800 dark:text-white">1M</p>
                              <p className="text-xs text-gray-500">SAR</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Top Debtors Table */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4">
                        {language === "ar" ? "أكبر المدينين" : "Top Debtors"}
                      </h4>
                      <div className="space-y-2">
                        {[
                          { name: language === "ar" ? "شركة الفجر" : "Al-Fajr Co.", amount: "SAR 120,000", days: "45", status: "warning" },
                          { name: language === "ar" ? "مؤسسة النور" : "Al-Noor Est.", amount: "SAR 85,000", days: "32", status: "info" },
                          { name: language === "ar" ? "تجارة السلام" : "Al-Salam Trade", amount: "SAR 65,000", days: "15", status: "success" },
                        ].map((debtor, i) => (
                          <div key={i} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${
                                debtor.status === 'success' ? 'bg-emerald-500' :
                                debtor.status === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                              }`} />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{debtor.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-gray-500 dark:text-gray-400">{debtor.days} {language === "ar" ? "يوم" : "days"}</span>
                              <span className="text-sm font-semibold text-gray-800 dark:text-white">{debtor.amount}</span>
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

          {/* Secondary Reports Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Team Performance */}
            <div className="group">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6" />
                    <div>
                      <h4 className="font-bold">{language === "ar" ? "أداء الفريق" : "Team Performance"}</h4>
                      <p className="text-xs text-white/80">{language === "ar" ? "مقارنة أداء المندوبين" : "Sales team comparison"}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {[
                      { name: language === "ar" ? "أحمد محمد" : "Ahmed M.", sales: "SAR 245K", target: 92, rank: 1 },
                      { name: language === "ar" ? "محمد علي" : "Mohammed A.", sales: "SAR 198K", target: 85, rank: 2 },
                      { name: language === "ar" ? "خالد سعيد" : "Khaled S.", sales: "SAR 156K", target: 78, rank: 3 },
                      { name: language === "ar" ? "عمر حسن" : "Omar H.", sales: "SAR 134K", target: 72, rank: 4 },
                    ].map((member, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                          member.rank === 1 ? 'bg-amber-500' :
                          member.rank === 2 ? 'bg-gray-400' :
                          member.rank === 3 ? 'bg-orange-400' : 'bg-blue-400'
                        }`}>
                          {member.rank}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-700 dark:text-gray-300">{member.name}</span>
                            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{member.sales}</span>
                          </div>
                          <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${member.target >= 90 ? 'bg-emerald-500' : member.target >= 80 ? 'bg-blue-500' : 'bg-amber-500'}`}
                              style={{ width: `${member.target}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 w-10">{member.target}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center font-medium text-gray-700 dark:text-gray-300">
                {language === "ar" ? "تقارير أداء المندوبين" : "Sales Team Performance Reports"}
              </p>
            </div>

            {/* Products Report */}
            <div className="group">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                  <div className="flex items-center gap-3">
                    <Package className="w-6 h-6" />
                    <div>
                      <h4 className="font-bold">{language === "ar" ? "تقرير المنتجات" : "Products Report"}</h4>
                      <p className="text-xs text-white/80">{language === "ar" ? "أفضل المنتجات مبيعاً" : "Top selling products"}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600">
                    <table className="w-full text-xs">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th className="px-3 py-2 text-start text-gray-600 dark:text-gray-300">{language === "ar" ? "المنتج" : "Product"}</th>
                          <th className="px-3 py-2 text-center text-gray-600 dark:text-gray-300">{language === "ar" ? "المبيعات" : "Sales"}</th>
                          <th className="px-3 py-2 text-end text-gray-600 dark:text-gray-300">{language === "ar" ? "الهامش" : "Margin"}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {[
                          { name: language === "ar" ? "قماش قطني فاخر" : "Premium Cotton", sales: "2,450", margin: "32%", trend: "up" },
                          { name: language === "ar" ? "حرير طبيعي" : "Natural Silk", sales: "1,820", margin: "45%", trend: "up" },
                          { name: language === "ar" ? "بوليستر مخلوط" : "Blended Polyester", sales: "1,560", margin: "28%", trend: "down" },
                          { name: language === "ar" ? "كتان إيطالي" : "Italian Linen", sales: "980", margin: "38%", trend: "up" },
                        ].map((product, i) => (
                          <tr key={i} className="bg-white dark:bg-gray-800">
                            <td className="px-3 py-2">
                              <div className="flex items-center gap-2">
                                <div className={`w-6 h-6 rounded ${
                                  i === 0 ? 'bg-emerald-100 dark:bg-emerald-900/30' :
                                  i === 1 ? 'bg-purple-100 dark:bg-purple-900/30' :
                                  i === 2 ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-amber-100 dark:bg-amber-900/30'
                                }`} />
                                <span className="text-gray-700 dark:text-gray-300">{product.name}</span>
                              </div>
                            </td>
                            <td className="px-3 py-2 text-center text-gray-700 dark:text-gray-300">{product.sales}</td>
                            <td className="px-3 py-2 text-end">
                              <span className={`flex items-center justify-end gap-1 font-medium ${
                                product.trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'
                              }`}>
                                {product.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                {product.margin}
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
                {language === "ar" ? "تقارير المنتجات والمبيعات" : "Products & Sales Reports"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Updates */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "تحديثات فورية Real-time" : "Real-time Updates"}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {language === "ar" 
                ? "جميع التقارير والبيانات تتحدث في الوقت الفعلي"
                : "All reports and data update in real-time"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                titleAr: "تحديث لحظي",
                titleEn: "Instant Updates",
                descAr: "كل عملية بيع أو شراء تظهر فوراً",
                descEn: "Every sale or purchase appears instantly"
              },
              {
                icon: RefreshCcw,
                titleAr: "مزامنة تلقائية",
                titleEn: "Auto Sync",
                descAr: "مزامنة بين جميع الفروع والأجهزة",
                descEn: "Sync between all branches and devices"
              },
              {
                icon: Clock,
                titleAr: "تنبيهات ذكية",
                titleEn: "Smart Alerts",
                descAr: "إشعارات عند تجاوز الأهداف أو الانخفاض",
                descEn: "Notifications when exceeding or falling below targets"
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

export default function ReportsAnalyticsPage() {
  return <ReportsAnalyticsContent />;
}
