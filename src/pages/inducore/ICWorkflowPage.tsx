import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { ICHeader } from "@/components/inducore/ICHeader";
import { ICFooter } from "@/components/inducore/ICFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  Factory, Package, Warehouse, Truck, BarChart3,
  ArrowRight, ArrowDown, CheckCircle2, Zap, Clock,
  Settings, Users, Shield, CircleDollarSign, FileText
} from "lucide-react";

const translations = {
  en: {
    title: "Seamless Production Workflow",
    subtitle: "From raw materials to finished goods - complete visibility and control at every stage",
    
    // Stats
    syncTime: "Real-Time Sync",
    uptime: "99.99% Uptime",
    dataIntegrity: "100% Data Integrity",
    monitoring: "24/7 Monitoring",
    
    // Workflow Steps
    step1Title: "1. Raw Material Receiving",
    step1Desc: "Receive and inspect raw materials with RFID scanning. Automatic quality checks and inventory updates.",
    
    step2Title: "2. Material Storage",
    step2Desc: "Store materials in organized warehouse locations. Track expiry dates and maintain FIFO/LIFO rules.",
    
    step3Title: "3. Production Planning",
    step3Desc: "AI-powered production scheduling based on orders, capacity, and material availability.",
    
    step4Title: "4. Production Stages",
    step4Desc: "Track progress through each manufacturing stage with quality checkpoints and time tracking.",
    
    step5Title: "5. Quality Control",
    step5Desc: "Automated quality inspections with photo documentation. Reject defective units automatically.",
    
    step6Title: "6. Finished Goods",
    step6Desc: "Transfer completed products to finished goods warehouse with full traceability.",
    
    step7Title: "7. Order Fulfillment",
    step7Desc: "Pick, pack, and ship orders efficiently with barcode/RFID verification.",
    
    step8Title: "8. Delivery & Analytics",
    step8Desc: "Track deliveries and analyze complete production cycle with detailed reports.",
    
    // Department Sync
    syncTitle: "Real-Time Department Synchronization",
    syncSubtitle: "Every department stays connected with instant data updates",
    
    purchasingDept: "Purchasing",
    purchasingDesc: "Auto-generate purchase orders when stock falls below reorder points",
    
    productionDept: "Production Floor",
    productionDesc: "Real-time work orders and stage-by-stage progress tracking",
    
    warehouseDept: "Warehouse",
    warehouseDesc: "Live inventory levels across all locations and warehouses",
    
    qualityDept: "Quality Control",
    qualityDesc: "Instant quality reports and defect tracking at each stage",
    
    financeDept: "Finance",
    financeDept: "Finance",
    financeDesc: "Real-time costing, margins, and profitability analysis",
    
    managementDept: "Management",
    managementDesc: "Executive dashboards with KPIs and AI-powered insights",
    
    // Benefits
    benefitsTitle: "Benefits of Integrated Workflow",
    benefit1: "Eliminate data silos between departments",
    benefit2: "Reduce manual data entry by 90%",
    benefit3: "Real-time visibility across all operations",
    benefit4: "Faster decision-making with live data",
    benefit5: "Automatic alerts and notifications",
    benefit6: "Complete audit trail for compliance",
    
    cta: "See InduCore in Action",
  },
  ar: {
    title: "سير عمل إنتاجي سلس",
    subtitle: "من المواد الأولية إلى البضائع الجاهزة - رؤية كاملة وتحكم في كل مرحلة",
    
    syncTime: "مزامنة في الوقت الفعلي",
    uptime: "99.99% وقت التشغيل",
    dataIntegrity: "100% سلامة البيانات",
    monitoring: "مراقبة 24/7",
    
    step1Title: "1. استلام المواد الأولية",
    step1Desc: "استلام وفحص المواد الأولية بمسح RFID. فحوصات جودة تلقائية وتحديثات المخزون.",
    
    step2Title: "2. تخزين المواد",
    step2Desc: "تخزين المواد في مواقع المستودعات المنظمة. تتبع تواريخ انتهاء الصلاحية والحفاظ على قواعد FIFO/LIFO.",
    
    step3Title: "3. تخطيط الإنتاج",
    step3Desc: "جدولة الإنتاج المدعومة بالذكاء الاصطناعي بناءً على الطلبات والسعة وتوفر المواد.",
    
    step4Title: "4. مراحل الإنتاج",
    step4Desc: "تتبع التقدم خلال كل مرحلة تصنيع مع نقاط فحص الجودة وتتبع الوقت.",
    
    step5Title: "5. مراقبة الجودة",
    step5Desc: "فحوصات جودة آلية مع توثيق بالصور. رفض الوحدات المعيبة تلقائياً.",
    
    step6Title: "6. البضائع الجاهزة",
    step6Desc: "نقل المنتجات المكتملة إلى مستودع البضائع الجاهزة مع تتبع كامل.",
    
    step7Title: "7. تنفيذ الطلبات",
    step7Desc: "اختيار وتعبئة وشحن الطلبات بكفاءة مع التحقق بالباركود/RFID.",
    
    step8Title: "8. التسليم والتحليلات",
    step8Desc: "تتبع عمليات التسليم وتحليل دورة الإنتاج الكاملة بتقارير مفصلة.",
    
    syncTitle: "مزامنة الأقسام في الوقت الفعلي",
    syncSubtitle: "كل قسم يبقى متصلاً مع تحديثات البيانات الفورية",
    
    purchasingDept: "المشتريات",
    purchasingDesc: "إنشاء أوامر الشراء تلقائياً عندما ينخفض المخزون عن نقاط إعادة الطلب",
    
    productionDept: "أرضية الإنتاج",
    productionDesc: "أوامر العمل في الوقت الفعلي وتتبع التقدم مرحلة بمرحلة",
    
    warehouseDept: "المستودع",
    warehouseDesc: "مستويات المخزون الحية عبر جميع المواقع والمستودعات",
    
    qualityDept: "مراقبة الجودة",
    qualityDesc: "تقارير الجودة الفورية وتتبع العيوب في كل مرحلة",
    
    financeDept: "المالية",
    financeDesc: "التكلفة والهوامش وتحليل الربحية في الوقت الفعلي",
    
    managementDept: "الإدارة",
    managementDesc: "لوحات معلومات تنفيذية مع مؤشرات الأداء ورؤى الذكاء الاصطناعي",
    
    benefitsTitle: "فوائد سير العمل المتكامل",
    benefit1: "إزالة صوامع البيانات بين الأقسام",
    benefit2: "تقليل إدخال البيانات اليدوي بنسبة 90%",
    benefit3: "رؤية في الوقت الفعلي عبر جميع العمليات",
    benefit4: "اتخاذ قرارات أسرع بالبيانات الحية",
    benefit5: "تنبيهات وإشعارات تلقائية",
    benefit6: "مسار تدقيق كامل للامتثال",
    
    cta: "شاهد InduCore في العمل",
  },
  tr: {
    title: "Kesintisiz Üretim İş Akışı",
    subtitle: "Hammaddeden bitmiş ürünlere - her aşamada tam görünürlük ve kontrol",
    
    syncTime: "Gerçek Zamanlı Senkronizasyon",
    uptime: "99.99% Çalışma Süresi",
    dataIntegrity: "100% Veri Bütünlüğü",
    monitoring: "7/24 İzleme",
    
    step1Title: "1. Hammadde Alımı",
    step1Desc: "RFID taraması ile hammaddeleri alın ve inceleyin. Otomatik kalite kontrolleri ve envanter güncellemeleri.",
    
    step2Title: "2. Malzeme Depolama",
    step2Desc: "Malzemeleri organize depo konumlarında saklayın. Son kullanma tarihlerini takip edin ve FIFO/LIFO kurallarını koruyun.",
    
    step3Title: "3. Üretim Planlaması",
    step3Desc: "Siparişlere, kapasiteye ve malzeme mevcudiyetine dayalı AI destekli üretim planlaması.",
    
    step4Title: "4. Üretim Aşamaları",
    step4Desc: "Kalite kontrol noktaları ve zaman takibi ile her üretim aşamasındaki ilerlemeyi izleyin.",
    
    step5Title: "5. Kalite Kontrol",
    step5Desc: "Fotoğraf dokümantasyonu ile otomatik kalite incelemeleri. Kusurlu birimleri otomatik olarak reddedin.",
    
    step6Title: "6. Bitmiş Ürünler",
    step6Desc: "Tamamlanan ürünleri tam izlenebilirlikle bitmiş ürün deposuna aktarın.",
    
    step7Title: "7. Sipariş Karşılama",
    step7Desc: "Barkod/RFID doğrulaması ile siparişleri verimli bir şekilde toplayın, paketleyin ve gönderin.",
    
    step8Title: "8. Teslimat ve Analitik",
    step8Desc: "Teslimatları takip edin ve detaylı raporlarla tam üretim döngüsünü analiz edin.",
    
    syncTitle: "Gerçek Zamanlı Departman Senkronizasyonu",
    syncSubtitle: "Her departman anlık veri güncellemeleri ile bağlı kalır",
    
    purchasingDept: "Satın Alma",
    purchasingDesc: "Stok yeniden sipariş noktalarının altına düştüğünde otomatik satın alma emirleri oluşturun",
    
    productionDept: "Üretim Katı",
    productionDesc: "Gerçek zamanlı iş emirleri ve aşama aşama ilerleme takibi",
    
    warehouseDept: "Depo",
    warehouseDesc: "Tüm konumlar ve depolar genelinde canlı envanter seviyeleri",
    
    qualityDept: "Kalite Kontrol",
    qualityDesc: "Her aşamada anlık kalite raporları ve kusur takibi",
    
    financeDept: "Finans",
    financeDesc: "Gerçek zamanlı maliyetlendirme, marjlar ve karlılık analizi",
    
    managementDept: "Yönetim",
    managementDesc: "KPI'lar ve AI destekli içgörülerle yönetici panoları",
    
    benefitsTitle: "Entegre İş Akışının Faydaları",
    benefit1: "Departmanlar arasındaki veri silolarını ortadan kaldırın",
    benefit2: "Manuel veri girişini %90 azaltın",
    benefit3: "Tüm operasyonlarda gerçek zamanlı görünürlük",
    benefit4: "Canlı verilerle daha hızlı karar verme",
    benefit5: "Otomatik uyarılar ve bildirimler",
    benefit6: "Uyumluluk için tam denetim izi",
    
    cta: "InduCore'u İş Başında Görün",
  },
};

export default function ICWorkflowPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";

  const steps = [
    { title: t.step1Title, desc: t.step1Desc, icon: Package },
    { title: t.step2Title, desc: t.step2Desc, icon: Warehouse },
    { title: t.step3Title, desc: t.step3Desc, icon: Settings },
    { title: t.step4Title, desc: t.step4Desc, icon: Factory },
    { title: t.step5Title, desc: t.step5Desc, icon: CheckCircle2 },
    { title: t.step6Title, desc: t.step6Desc, icon: Package },
    { title: t.step7Title, desc: t.step7Desc, icon: Truck },
    { title: t.step8Title, desc: t.step8Desc, icon: BarChart3 },
  ];

  const departments = [
    { name: t.purchasingDept, desc: t.purchasingDesc, icon: CircleDollarSign, color: "blue" },
    { name: t.productionDept, desc: t.productionDesc, icon: Factory, color: "orange" },
    { name: t.warehouseDept, desc: t.warehouseDesc, icon: Warehouse, color: "purple" },
    { name: t.qualityDept, desc: t.qualityDesc, icon: Shield, color: "green" },
    { name: t.financeDept, desc: t.financeDesc, icon: FileText, color: "yellow" },
    { name: t.managementDept, desc: t.managementDesc, icon: Users, color: "pink" },
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
              <Factory className="w-4 h-4" />
              <span>Production Management</span>
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
      
      {/* Stats Section */}
      <section className="py-12 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: t.syncTime, icon: Zap },
              { label: t.uptime, icon: Clock },
              { label: t.dataIntegrity, icon: Shield },
              { label: t.monitoring, icon: Settings },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-white font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Workflow Steps */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-200 dark:bg-red-800" />
            
            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-red-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-7 top-20 text-red-400">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Department Sync Section */}
      <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.syncTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.syncSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-600"
              >
                <div className={`w-14 h-14 rounded-xl bg-${dept.color}-100 dark:bg-${dept.color}-900/30 flex items-center justify-center mb-4`}>
                  <dept.icon className={`w-7 h-7 text-${dept.color}-600 dark:text-${dept.color}-400`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {dept.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {dept.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.benefitsTitle}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[t.benefit1, t.benefit2, t.benefit3, t.benefit4, t.benefit5, t.benefit6].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-200">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-red-800 to-red-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.cta}
          </h2>
          <Link to="/inducore/contact">
            <Button size="lg" className="bg-white text-red-800 hover:bg-red-50 px-8 py-6 text-lg">
              {t.cta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
      
      <ICFooter />
    </div>
  );
}
