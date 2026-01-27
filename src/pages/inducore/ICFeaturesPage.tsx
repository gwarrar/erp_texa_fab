import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { ICHeader } from "@/components/inducore/ICHeader";
import { ICFooter } from "@/components/inducore/ICFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  Factory, Package, Warehouse, Calendar, Receipt, BarChart3,
  Users, Settings, ScanLine, Truck, Clock, Shield, Zap,
  ArrowRight, CheckCircle2, Smartphone, Cpu, Layers,
  CircleDollarSign, FileText, BadgeCheck, Gauge, Wrench
} from "lucide-react";
import { Card } from "@/components/ui/card";

const translations = {
  en: {
    title: "Powerful Features for Modern Manufacturing",
    subtitle: "Everything you need to run your factory efficiently, from production lines to finished goods",
    
    // Production Management
    productionTitle: "Production Management",
    productionDesc: "Complete control over your entire production process",
    productionFeatures: [
      "Real-time production line monitoring",
      "Stage-by-stage tracking with timestamps",
      "Quality checkpoints at each stage",
      "Automated production scheduling",
      "Work order management",
      "Machine utilization tracking",
    ],
    
    // Raw Materials
    inventoryTitle: "Raw Materials Management",
    inventoryDesc: "Smart inventory tracking and supplier management",
    inventoryFeatures: [
      "Automatic reorder point alerts",
      "Supplier performance tracking",
      "Batch and lot tracking",
      "Expiry date management",
      "Purchase order automation",
      "Cost tracking per material",
    ],
    
    // Warehouse
    warehouseTitle: "Warehouse Management",
    warehouseDesc: "Multiple warehouses for raw materials and finished goods",
    warehouseFeatures: [
      "RFID-enabled tracking",
      "Location-based inventory",
      "Bin and shelf management",
      "Transfer between warehouses",
      "Receiving and shipping workflows",
      "Real-time stock levels",
    ],
    
    // Orders
    ordersTitle: "Orders & Reservations",
    ordersDesc: "Streamline customer orders and delivery scheduling",
    ordersFeatures: [
      "Customer order management",
      "Production queue prioritization",
      "Delivery slot reservations",
      "Order tracking portal",
      "Automated notifications",
      "Invoice generation",
    ],
    
    // Costing
    costingTitle: "Costing & Pricing",
    costingDesc: "Real-time cost calculations and profit margins",
    costingFeatures: [
      "Unit cost calculation",
      "Overhead allocation",
      "Material cost tracking",
      "Labor cost integration",
      "Dynamic pricing models",
      "Profit margin analysis",
    ],
    
    // Analytics
    analyticsTitle: "Analytics & Reporting",
    analyticsDesc: "AI-powered insights for better decisions",
    analyticsFeatures: [
      "Real-time dashboards",
      "Production KPIs",
      "Trend analysis",
      "Demand forecasting",
      "Custom report builder",
      "Export to Excel/PDF",
    ],
    
    // HR
    hrTitle: "HR & Payroll",
    hrDesc: "Complete employee management solution",
    hrFeatures: [
      "Salary and wage management",
      "Performance-based incentives",
      "Attendance tracking (RFID/Biometric)",
      "Leave management",
      "Expense reimbursements",
      "Shift scheduling",
    ],
    
    // RFID
    rfidTitle: "RFID Integration",
    rfidDesc: "Contactless tracking throughout your facility",
    rfidFeatures: [
      "Product tagging",
      "Asset tracking",
      "Employee badges",
      "Automated data capture",
      "Movement history",
      "Anti-theft alerts",
    ],
    
    // Mobile
    mobileTitle: "Mobile Applications",
    mobileDesc: "Complete mobile ecosystem for all roles",
    mobileFeatures: [
      "Admin management app",
      "Supervisor monitoring app",
      "Warehouse scanner app",
      "Worker task app",
      "Customer portal app",
      "Offline mode support",
    ],
    
    // NEXA AI
    nexaTitle: "NEXA AI Agent",
    nexaDesc: "Your intelligent manufacturing assistant",
    nexaFeatures: [
      "Production optimization",
      "Predictive maintenance",
      "Quality predictions",
      "Demand forecasting",
      "Cost analysis",
      "Voice commands",
    ],
    
    cta: "Start Your Free Trial",
    learnMore: "Learn More",
  },
  ar: {
    title: "ميزات قوية للتصنيع الحديث",
    subtitle: "كل ما تحتاجه لتشغيل مصنعك بكفاءة، من خطوط الإنتاج إلى البضائع الجاهزة",
    
    productionTitle: "إدارة الإنتاج",
    productionDesc: "تحكم كامل في عملية الإنتاج بأكملها",
    productionFeatures: [
      "مراقبة خط الإنتاج في الوقت الفعلي",
      "تتبع مرحلة بمرحلة مع الطوابع الزمنية",
      "نقاط فحص الجودة في كل مرحلة",
      "جدولة الإنتاج الآلية",
      "إدارة أوامر العمل",
      "تتبع استخدام الآلات",
    ],
    
    inventoryTitle: "إدارة المواد الأولية",
    inventoryDesc: "تتبع المخزون الذكي وإدارة الموردين",
    inventoryFeatures: [
      "تنبيهات نقطة إعادة الطلب التلقائية",
      "تتبع أداء الموردين",
      "تتبع الدفعات واللوت",
      "إدارة تواريخ انتهاء الصلاحية",
      "أتمتة أوامر الشراء",
      "تتبع التكلفة لكل مادة",
    ],
    
    warehouseTitle: "إدارة المستودعات",
    warehouseDesc: "مستودعات متعددة للمواد الأولية والبضائع الجاهزة",
    warehouseFeatures: [
      "التتبع بتقنية RFID",
      "المخزون المبني على الموقع",
      "إدارة الصناديق والرفوف",
      "النقل بين المستودعات",
      "سير عمل الاستلام والشحن",
      "مستويات المخزون في الوقت الفعلي",
    ],
    
    ordersTitle: "الطلبات والحجوزات",
    ordersDesc: "تبسيط طلبات العملاء وجدولة التسليم",
    ordersFeatures: [
      "إدارة طلبات العملاء",
      "ترتيب أولويات قائمة الإنتاج",
      "حجوزات مواعيد التسليم",
      "بوابة تتبع الطلبات",
      "الإشعارات الآلية",
      "إنشاء الفواتير",
    ],
    
    costingTitle: "التكلفة والتسعير",
    costingDesc: "حسابات التكلفة وهوامش الربح في الوقت الفعلي",
    costingFeatures: [
      "حساب تكلفة الوحدة",
      "تخصيص المصاريف العامة",
      "تتبع تكلفة المواد",
      "تكامل تكلفة العمالة",
      "نماذج التسعير الديناميكية",
      "تحليل هامش الربح",
    ],
    
    analyticsTitle: "التحليلات والتقارير",
    analyticsDesc: "رؤى مدعومة بالذكاء الاصطناعي لقرارات أفضل",
    analyticsFeatures: [
      "لوحات معلومات في الوقت الفعلي",
      "مؤشرات أداء الإنتاج",
      "تحليل الاتجاهات",
      "التنبؤ بالطلب",
      "منشئ التقارير المخصصة",
      "التصدير إلى Excel/PDF",
    ],
    
    hrTitle: "الموارد البشرية والرواتب",
    hrDesc: "حل إدارة الموظفين الكامل",
    hrFeatures: [
      "إدارة الرواتب والأجور",
      "الحوافز المبنية على الأداء",
      "تتبع الحضور (RFID/بيومتري)",
      "إدارة الإجازات",
      "تعويضات المصاريف",
      "جدولة الورديات",
    ],
    
    rfidTitle: "تكامل RFID",
    rfidDesc: "التتبع اللاتلامسي في جميع أنحاء منشأتك",
    rfidFeatures: [
      "وسم المنتجات",
      "تتبع الأصول",
      "شارات الموظفين",
      "التقاط البيانات الآلي",
      "سجل الحركة",
      "تنبيهات مكافحة السرقة",
    ],
    
    mobileTitle: "تطبيقات الهاتف",
    mobileDesc: "نظام بيئي متنقل كامل لجميع الأدوار",
    mobileFeatures: [
      "تطبيق إدارة المسؤول",
      "تطبيق مراقبة المشرف",
      "تطبيق ماسح المستودع",
      "تطبيق مهام العامل",
      "تطبيق بوابة العملاء",
      "دعم الوضع غير المتصل",
    ],
    
    nexaTitle: "وكيل NEXA AI",
    nexaDesc: "مساعدك التصنيعي الذكي",
    nexaFeatures: [
      "تحسين الإنتاج",
      "الصيانة التنبؤية",
      "توقعات الجودة",
      "التنبؤ بالطلب",
      "تحليل التكلفة",
      "الأوامر الصوتية",
    ],
    
    cta: "ابدأ تجربتك المجانية",
    learnMore: "اعرف المزيد",
  },
  tr: {
    title: "Modern Üretim İçin Güçlü Özellikler",
    subtitle: "Üretim hatlarından bitmiş ürünlere kadar fabrikanızı verimli çalıştırmak için ihtiyacınız olan her şey",
    
    productionTitle: "Üretim Yönetimi",
    productionDesc: "Tüm üretim süreciniz üzerinde tam kontrol",
    productionFeatures: [
      "Gerçek zamanlı üretim hattı izleme",
      "Zaman damgalı aşama aşama takip",
      "Her aşamada kalite kontrol noktaları",
      "Otomatik üretim planlaması",
      "İş emri yönetimi",
      "Makine kullanım takibi",
    ],
    
    inventoryTitle: "Hammadde Yönetimi",
    inventoryDesc: "Akıllı envanter takibi ve tedarikçi yönetimi",
    inventoryFeatures: [
      "Otomatik yeniden sipariş noktası uyarıları",
      "Tedarikçi performans takibi",
      "Parti ve lot takibi",
      "Son kullanma tarihi yönetimi",
      "Satın alma emri otomasyonu",
      "Malzeme başına maliyet takibi",
    ],
    
    warehouseTitle: "Depo Yönetimi",
    warehouseDesc: "Hammaddeler ve bitmiş ürünler için çoklu depolar",
    warehouseFeatures: [
      "RFID özellikli takip",
      "Konuma dayalı envanter",
      "Kutu ve raf yönetimi",
      "Depolar arası transfer",
      "Alma ve sevkiyat iş akışları",
      "Gerçek zamanlı stok seviyeleri",
    ],
    
    ordersTitle: "Siparişler ve Rezervasyonlar",
    ordersDesc: "Müşteri siparişleri ve teslimat planlamasını kolaylaştırın",
    ordersFeatures: [
      "Müşteri sipariş yönetimi",
      "Üretim kuyruğu önceliklendirme",
      "Teslimat slot rezervasyonları",
      "Sipariş takip portalı",
      "Otomatik bildirimler",
      "Fatura oluşturma",
    ],
    
    costingTitle: "Maliyetlendirme ve Fiyatlandırma",
    costingDesc: "Gerçek zamanlı maliyet hesaplamaları ve kar marjları",
    costingFeatures: [
      "Birim maliyet hesaplama",
      "Genel gider tahsisi",
      "Malzeme maliyet takibi",
      "İşçilik maliyeti entegrasyonu",
      "Dinamik fiyatlandırma modelleri",
      "Kar marjı analizi",
    ],
    
    analyticsTitle: "Analitik ve Raporlama",
    analyticsDesc: "Daha iyi kararlar için AI destekli içgörüler",
    analyticsFeatures: [
      "Gerçek zamanlı panolar",
      "Üretim KPI'ları",
      "Trend analizi",
      "Talep tahmini",
      "Özel rapor oluşturucu",
      "Excel/PDF'e dışa aktarma",
    ],
    
    hrTitle: "İK ve Bordro",
    hrDesc: "Komple çalışan yönetimi çözümü",
    hrFeatures: [
      "Maaş ve ücret yönetimi",
      "Performansa dayalı teşvikler",
      "Devam takibi (RFID/Biyometrik)",
      "İzin yönetimi",
      "Gider geri ödemeleri",
      "Vardiya planlaması",
    ],
    
    rfidTitle: "RFID Entegrasyonu",
    rfidDesc: "Tesisinizde temassız takip",
    rfidFeatures: [
      "Ürün etiketleme",
      "Varlık takibi",
      "Çalışan kartları",
      "Otomatik veri yakalama",
      "Hareket geçmişi",
      "Hırsızlık önleme uyarıları",
    ],
    
    mobileTitle: "Mobil Uygulamalar",
    mobileDesc: "Tüm roller için komple mobil ekosistem",
    mobileFeatures: [
      "Yönetici yönetim uygulaması",
      "Süpervizör izleme uygulaması",
      "Depo tarayıcı uygulaması",
      "İşçi görev uygulaması",
      "Müşteri portal uygulaması",
      "Çevrimdışı mod desteği",
    ],
    
    nexaTitle: "NEXA AI Ajanı",
    nexaDesc: "Akıllı üretim asistanınız",
    nexaFeatures: [
      "Üretim optimizasyonu",
      "Öngörücü bakım",
      "Kalite tahminleri",
      "Talep tahmini",
      "Maliyet analizi",
      "Sesli komutlar",
    ],
    
    cta: "Ücretsiz Denemenizi Başlatın",
    learnMore: "Daha Fazla Bilgi",
  },
};

const featureIcons: Record<string, any> = {
  production: Factory,
  inventory: Package,
  warehouse: Warehouse,
  orders: Calendar,
  costing: CircleDollarSign,
  analytics: BarChart3,
  hr: Users,
  rfid: ScanLine,
  mobile: Smartphone,
  nexa: Cpu,
};

const featureColors: Record<string, { gradient: string; bg: string; text: string }> = {
  production: { gradient: "from-red-500 to-orange-500", bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-800 dark:text-red-400" },
  inventory: { gradient: "from-blue-500 to-cyan-500", bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-800 dark:text-blue-400" },
  warehouse: { gradient: "from-green-500 to-emerald-500", bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-800 dark:text-green-400" },
  orders: { gradient: "from-purple-500 to-pink-500", bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-800 dark:text-purple-400" },
  costing: { gradient: "from-amber-500 to-yellow-500", bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-800 dark:text-amber-400" },
  analytics: { gradient: "from-indigo-500 to-blue-500", bg: "bg-indigo-100 dark:bg-indigo-900/30", text: "text-indigo-800 dark:text-indigo-400" },
  hr: { gradient: "from-teal-500 to-cyan-500", bg: "bg-teal-100 dark:bg-teal-900/30", text: "text-teal-800 dark:text-teal-400" },
  rfid: { gradient: "from-violet-500 to-purple-500", bg: "bg-violet-100 dark:bg-violet-900/30", text: "text-violet-800 dark:text-violet-400" },
  mobile: { gradient: "from-rose-500 to-pink-500", bg: "bg-rose-100 dark:bg-rose-900/30", text: "text-rose-800 dark:text-rose-400" },
  nexa: { gradient: "from-cyan-500 to-blue-500", bg: "bg-cyan-100 dark:bg-cyan-900/30", text: "text-cyan-800 dark:text-cyan-400" },
};

export default function ICFeaturesPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  // Core Modules - these link to dedicated pages
  const coreModules = [
    { key: "production", title: t.productionTitle, desc: t.productionDesc, features: t.productionFeatures, href: "/inducore/solutions/production" },
    { key: "inventory", title: t.inventoryTitle, desc: t.inventoryDesc, features: t.inventoryFeatures, href: "/inducore/solutions/inventory" },
    { key: "warehouse", title: t.warehouseTitle, desc: t.warehouseDesc, features: t.warehouseFeatures, href: "/inducore/solutions/warehouse" },
    { key: "orders", title: t.ordersTitle, desc: t.ordersDesc, features: t.ordersFeatures, href: "/inducore/solutions/orders" },
  ];

  // Additional features
  const additionalFeatures = [
    { key: "costing", title: t.costingTitle, desc: t.costingDesc, features: t.costingFeatures },
    { key: "analytics", title: t.analyticsTitle, desc: t.analyticsDesc, features: t.analyticsFeatures },
    { key: "hr", title: t.hrTitle, desc: t.hrDesc, features: t.hrFeatures },
    { key: "rfid", title: t.rfidTitle, desc: t.rfidDesc, features: t.rfidFeatures },
    { key: "mobile", title: t.mobileTitle, desc: t.mobileDesc, features: t.mobileFeatures },
    { key: "nexa", title: t.nexaTitle, desc: t.nexaDesc, features: t.nexaFeatures },
  ];

  return (
    <div className={`min-h-screen bg-white dark:bg-slate-900 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <ICHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-red-900 via-red-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white/90 text-sm mb-6">
              <Settings className="w-4 h-4" />
              <span>{language === "ar" ? "مميزات التصنيع" : language === "tr" ? "Üretim Özellikleri" : "Manufacturing Features"}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Core Modules Section */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {language === "ar" ? "الوحدات الأساسية" : language === "tr" ? "Temel Modüller" : "Core Modules"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {language === "ar" ? "الوحدات الأساسية التي تدير عملياتك التصنيعية" : language === "tr" ? "Üretim operasyonlarınızı güçlendiren temel modüller" : "Essential modules that power your manufacturing operations"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreModules.map((module, i) => {
              const Icon = featureIcons[module.key] || Settings;
              const colors = featureColors[module.key] || featureColors.production;
              
              return (
                <motion.div
                  key={module.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={module.href}>
                    <Card className="h-full p-6 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer bg-white dark:bg-slate-800">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-red-800 dark:group-hover:text-red-400 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                        {module.desc}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {module.features.slice(0, 3).map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-red-800 dark:text-red-400 text-sm font-medium mt-auto">
                        {t.learnMore}
                        <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? "rotate-180" : ""}`} />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Additional Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {language === "ar" ? "مميزات إضافية" : language === "tr" ? "Ek Özellikler" : "Additional Features"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {language === "ar" ? "أدوات متقدمة لتحسين عملياتك" : language === "tr" ? "Operasyonlarınızı optimize etmek için gelişmiş araçlar" : "Advanced tools to optimize your operations"}
            </p>
          </div>
          
          <div className="space-y-16">
            {additionalFeatures.map((feature, i) => {
              const Icon = featureIcons[feature.key] || Settings;
              const colors = featureColors[feature.key] || featureColors.production;
              const isEven = i % 2 === 0;
              
              return (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                      {feature.desc}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <Card className={`p-8 bg-gradient-to-br ${colors.gradient} border-0 shadow-xl`}>
                      <div className="aspect-video bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                        <Icon className="w-24 h-24 text-white" />
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-red-800 to-red-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.cta}
          </h2>
          <Link to="/inducore/contact">
            <Button size="lg" className="bg-white text-red-800 hover:bg-red-50 px-8 py-6 text-lg">
              {t.cta}
              <ArrowRight className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
            </Button>
          </Link>
        </div>
      </section>
      
      <ICFooter />
    </div>
  );
}
