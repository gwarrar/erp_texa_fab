import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrowserMockup } from "@/components/landing/SystemScreenshots";
import { 
  Users,
  UserPlus,
  Target,
  Bell,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  TrendingUp,
  Calendar,
  Star,
  Heart,
  Gift,
  Clock,
  Filter,
  Search,
  Zap,
  FileText,
  Award,
  ArrowUpRight,
  UserCheck,
  AlertCircle,
  Monitor
} from "lucide-react";

function CRMContent() {
  const { language, dir } = useLanguage();

  const features = [
    {
      icon: FileText,
      titleAr: "ملف كامل لكل عميل",
      titleEn: "Complete Customer Profile",
      descAr: "كل المعلومات عن العميل في مكان واحد: التاريخ الشرائي، التفضيلات، الملاحظات",
      descEn: "All customer info in one place: purchase history, preferences, notes",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Filter,
      titleAr: "تصنيف العملاء الذكي",
      titleEn: "Smart Customer Classification",
      descAr: "تصنيف تلقائي للعملاء (VIP, Regular, New) مع تحديث مستمر",
      descEn: "Auto classification (VIP, Regular, New) with continuous updates",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Target,
      titleAr: "إدارة الفرص البيعية",
      titleEn: "Sales Pipeline",
      descAr: "تتبع كل فرصة بيعية من التواصل الأول حتى إتمام الصفقة",
      descEn: "Track every opportunity from first contact to deal closure",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: UserPlus,
      titleAr: "متابعة العملاء المحتملين",
      titleEn: "Lead Management",
      descAr: "إدارة وتأهيل العملاء المحتملين وتحويلهم لعملاء فعليين",
      descEn: "Manage and qualify leads and convert them to actual customers",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Bell,
      titleAr: "تذكيرات المتابعة التلقائية",
      titleEn: "Auto Follow-up Reminders",
      descAr: "تنبيهات ذكية للمتابعة مع العملاء في الوقت المناسب",
      descEn: "Smart reminders to follow up with customers at the right time",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Gift,
      titleAr: "برامج الولاء والنقاط",
      titleEn: "Loyalty & Points Programs",
      descAr: "نظام نقاط ومكافآت لتحفيز العملاء على الشراء المتكرر",
      descEn: "Points and rewards system to encourage repeat purchases",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const pipelineStages = [
    { titleAr: "عميل محتمل", titleEn: "Lead", count: 45, color: "bg-gray-100 text-gray-600" },
    { titleAr: "اتصال أول", titleEn: "First Contact", count: 32, color: "bg-blue-100 text-blue-600" },
    { titleAr: "عرض سعر", titleEn: "Quote Sent", count: 18, color: "bg-amber-100 text-amber-600" },
    { titleAr: "تفاوض", titleEn: "Negotiation", count: 12, color: "bg-purple-100 text-purple-600" },
    { titleAr: "صفقة مغلقة", titleEn: "Closed Won", count: 28, color: "bg-emerald-100 text-emerald-600" }
  ];

  const customerSegments = [
    {
      titleAr: "عملاء VIP",
      titleEn: "VIP Customers",
      descAr: "أعلى 10% من العملاء من حيث القيمة",
      descEn: "Top 10% customers by value",
      value: "45",
      color: "from-amber-500 to-amber-600",
      icon: Star
    },
    {
      titleAr: "عملاء منتظمين",
      titleEn: "Regular Customers",
      descAr: "عملاء يشترون بانتظام",
      descEn: "Customers who buy regularly",
      value: "234",
      color: "from-blue-500 to-blue-600",
      icon: UserCheck
    },
    {
      titleAr: "عملاء جدد",
      titleEn: "New Customers",
      descAr: "عملاء انضموا هذا الشهر",
      descEn: "Customers joined this month",
      value: "67",
      color: "from-emerald-500 to-emerald-600",
      icon: UserPlus
    },
    {
      titleAr: "بحاجة للمتابعة",
      titleEn: "Need Follow-up",
      descAr: "عملاء لم يشتروا منذ فترة",
      descEn: "Customers inactive for a while",
      value: "23",
      color: "from-red-500 to-red-600",
      icon: AlertCircle
    }
  ];

  const communications = [
    { icon: Phone, titleAr: "المكالمات", titleEn: "Calls", countAr: "1,234", countEn: "1,234" },
    { icon: Mail, titleAr: "الإيميلات", titleEn: "Emails", countAr: "3,456", countEn: "3,456" },
    { icon: MessageCircle, titleAr: "الرسائل", titleEn: "Messages", countAr: "2,345", countEn: "2,345" },
    { icon: Calendar, titleAr: "الاجتماعات", titleEn: "Meetings", countAr: "156", countEn: "156" }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">
                {language === "ar" ? "نظام CRM متقدم" : "Advanced CRM System"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>لا تضيّع <span className="text-blue-500">أي عميل</span></>
              ) : (
                <>Never Lose <span className="text-blue-500">a Customer</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "ar" 
                ? "نظام CRM متكامل يساعدك على بناء علاقات أقوى مع عملائك وزيادة المبيعات"
                : "Integrated CRM system to help you build stronger relationships and increase sales"}
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
            {communications.map((item, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg rounded-2xl">
                <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <p className="text-3xl font-black text-texafab-slate mb-1">
                  {language === "ar" ? item.countAr : item.countEn}
                </p>
                <p className="text-gray-600 text-sm">
                  {language === "ar" ? item.titleAr : item.titleEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Segments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "تصنيف العملاء" : "Customer Segmentation"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === "ar" ? "تصنيف ذكي لعملائك لخدمتهم بشكل أفضل" : "Smart classification of your customers for better service"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerSegments.map((segment, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${segment.color} flex items-center justify-center mb-4`}>
                  <segment.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-4xl font-black text-texafab-slate mb-2">{segment.value}</p>
                <h3 className="font-bold text-texafab-slate mb-1">
                  {language === "ar" ? segment.titleAr : segment.titleEn}
                </h3>
                <p className="text-sm text-gray-500">
                  {language === "ar" ? segment.descAr : segment.descEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Pipeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Target className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-600">
                  {language === "ar" ? "مسار المبيعات" : "Sales Pipeline"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
                {language === "ar" ? "تتبع كل فرصة بيعية" : "Track Every Sales Opportunity"}
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                {language === "ar" 
                  ? "مسار بيعي واضح من أول تواصل حتى إتمام الصفقة مع تحديث مستمر لحالة كل عميل"
                  : "Clear sales funnel from first contact to deal closure with continuous status updates"}
              </p>

              <ul className="space-y-3">
                {[
                  { ar: "تحويل تلقائي بين المراحل", en: "Auto stage transitions" },
                  { ar: "تنبيهات عند توقف الفرص", en: "Alerts on stalled opportunities" },
                  { ar: "توقعات الإيرادات", en: "Revenue forecasting" },
                  { ar: "تقارير معدل التحويل", en: "Conversion rate reports" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700">{language === "ar" ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-6 bg-gradient-to-br from-gray-50 to-white border-0 shadow-xl rounded-3xl">
              <h3 className="text-lg font-bold text-texafab-slate mb-6">
                {language === "ar" ? "مسار المبيعات" : "Sales Pipeline"}
              </h3>
              <div className="space-y-3">
                {pipelineStages.map((stage, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`px-3 py-1.5 rounded-full text-sm font-semibold ${stage.color} min-w-[120px]`}>
                      {language === "ar" ? stage.titleAr : stage.titleEn}
                    </div>
                    <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${index === 4 ? 'bg-emerald-500' : 'bg-blue-500'}`}
                        style={{ width: `${(stage.count / 45) * 100}%` }}
                      />
                    </div>
                    <span className="font-bold text-texafab-slate w-8">{stage.count}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مميزات نظام CRM" : "CRM System Features"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "أدوات متقدمة لإدارة علاقات العملاء"
                : "Advanced tools for customer relationship management"}
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

      {/* System Screenshot - CRM Pipeline */}
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
              {language === "ar" ? "واجهة CRM احترافية" : "Professional CRM Interface"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "تصميم عصري وسهل الاستخدام لإدارة علاقات العملاء بكفاءة"
                : "Modern and user-friendly design for efficient customer relationship management"}
            </p>
          </div>

          {/* Main CRM Dashboard */}
          <div className="mb-12">
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10" />
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
                      <span className="text-xs text-gray-400 dark:text-gray-500">erpmax.app/crm</span>
                    </div>
                  </div>
                </div>
                
                {/* CRM Dashboard Content */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {language === "ar" ? "لوحة المبيعات" : "Sales Dashboard"}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {language === "ar" ? "نظرة عامة على أداء المبيعات" : "Sales performance overview"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-lg">
                        {language === "ar" ? "الهدف: 106.7%" : "Target: 106.7%"}
                      </div>
                    </div>
                  </div>
                  
                  {/* KPI Cards */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                      { label: language === "ar" ? "إجمالي المبيعات" : "Total Sales", value: "3.36M", change: "+12%", icon: "💰" },
                      { label: language === "ar" ? "عدد الطلبات" : "Orders", value: "924", change: "+8%", icon: "📦" },
                      { label: language === "ar" ? "العملاء الجدد" : "New Customers", value: "67", change: "+23%", icon: "👥" },
                      { label: language === "ar" ? "معدل التحويل" : "Conversion", value: "24.5%", change: "+5%", icon: "📈" },
                    ].map((kpi, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg">{kpi.icon}</span>
                          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{kpi.change}</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{kpi.label}</p>
                        <p className="text-xl font-bold text-gray-800 dark:text-white">{kpi.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Content Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Sales vs Target */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {language === "ar" ? "المبيعات مقابل المستهدف" : "Sales vs Target"}
                        </span>
                        <Target className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="flex items-end gap-3 h-24">
                        {[
                          { label: language === "ar" ? "ق1" : "Q1", actual: 85, target: 80 },
                          { label: language === "ar" ? "ق2" : "Q2", actual: 92, target: 85 },
                          { label: language === "ar" ? "ق3" : "Q3", actual: 78, target: 90 },
                          { label: language === "ar" ? "ق4" : "Q4", actual: 95, target: 88 },
                        ].map((q, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center">
                            <div className="w-full flex gap-1 items-end h-20">
                              <div 
                                className="flex-1 rounded-t bg-blue-500 dark:bg-blue-600" 
                                style={{ height: `${q.actual}%` }} 
                              />
                              <div 
                                className="flex-1 rounded-t bg-gray-300 dark:bg-gray-600" 
                                style={{ height: `${q.target}%` }} 
                              />
                            </div>
                            <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">{q.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-center gap-4 mt-2 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded bg-blue-500" />
                          <span className="text-gray-500 dark:text-gray-400">{language === "ar" ? "الفعلي" : "Actual"}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded bg-gray-300" />
                          <span className="text-gray-500 dark:text-gray-400">{language === "ar" ? "المستهدف" : "Target"}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Top Customers */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {language === "ar" ? "أفضل العملاء" : "Top Customers"}
                        </span>
                        <Star className="w-4 h-4 text-amber-500" />
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: language === "ar" ? "شركة الفيصل" : "Al-Faisal Co.", value: "SAR 245,000", badge: "VIP" },
                          { name: language === "ar" ? "مؤسسة النجم" : "Star Est.", value: "SAR 198,500", badge: "Gold" },
                          { name: language === "ar" ? "تجارة الأمل" : "Al-Amal Trade", value: "SAR 156,200", badge: "Silver" },
                        ].map((customer, i) => (
                          <div key={i} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${i === 0 ? 'bg-amber-500' : i === 1 ? 'bg-gray-400' : 'bg-orange-400'}`}>
                                {i + 1}
                              </div>
                              <span className="text-sm text-gray-700 dark:text-gray-300">{customer.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                                customer.badge === 'VIP' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                                customer.badge === 'Gold' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                'bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-300'
                              }`}>
                                {customer.badge}
                              </span>
                              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{customer.value}</span>
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
          
          <p className="text-center font-medium text-gray-700 dark:text-gray-300">
            {language === "ar" ? "لوحة المبيعات وإدارة العملاء" : "Sales Dashboard & Customer Management"}
          </p>
        </div>
      </section>

      {/* Customer Profile */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === "ar" ? "ملف العميل الشامل" : "Comprehensive Customer Profile"}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {language === "ar" 
                  ? "كل ما تحتاج معرفته عن عميلك في شاشة واحدة"
                  : "Everything you need to know about your customer on one screen"}
              </p>

              <ul className="space-y-4">
                {[
                  { ar: "التاريخ الشرائي الكامل", en: "Complete purchase history" },
                  { ar: "تفضيلات المنتجات والألوان", en: "Product and color preferences" },
                  { ar: "سجل التواصل (مكالمات، إيميلات)", en: "Communication log (calls, emails)" },
                  { ar: "الذمم المدينة والمدفوعات", en: "Receivables and payments" },
                  { ar: "الملاحظات والتعليقات", en: "Notes and comments" },
                  { ar: "نقاط الولاء والمكافآت", en: "Loyalty points and rewards" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{language === "ar" ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl">
              <div className="flex items-center gap-4 mb-6 p-4 bg-white/10 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                  AM
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {language === "ar" ? "أحمد محمد" : "Ahmed Mohammed"}
                  </h3>
                  <span className="px-2 py-1 bg-amber-500 rounded-full text-xs font-semibold text-white">VIP</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl">
                  <p className="text-white/60 text-sm">{language === "ar" ? "إجمالي المشتريات" : "Total Purchases"}</p>
                  <p className="text-xl font-bold text-white">$45,670</p>
                </div>
                <div className="p-3 bg-white/10 rounded-xl">
                  <p className="text-white/60 text-sm">{language === "ar" ? "عدد الطلبات" : "Orders"}</p>
                  <p className="text-xl font-bold text-white">67</p>
                </div>
                <div className="p-3 bg-white/10 rounded-xl">
                  <p className="text-white/60 text-sm">{language === "ar" ? "نقاط الولاء" : "Loyalty Points"}</p>
                  <p className="text-xl font-bold text-emerald-400">4,567</p>
                </div>
                <div className="p-3 bg-white/10 rounded-xl">
                  <p className="text-white/60 text-sm">{language === "ar" ? "آخر طلب" : "Last Order"}</p>
                  <p className="text-xl font-bold text-white">3 days</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-white/20 hover:bg-white/30 text-white">
                  <Phone className="w-4 h-4 me-2" />
                  {language === "ar" ? "اتصال" : "Call"}
                </Button>
                <Button size="sm" className="flex-1 bg-white/20 hover:bg-white/30 text-white">
                  <Mail className="w-4 h-4 me-2" />
                  {language === "ar" ? "إيميل" : "Email"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function CRMPage() {
  return <CRMContent />;
}
