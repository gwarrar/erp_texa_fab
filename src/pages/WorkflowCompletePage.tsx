import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight,
  CheckCircle2,
  Package,
  Ship,
  ClipboardCheck,
  Warehouse,
  FileText,
  ShoppingCart,
  Truck,
  CreditCard,
  HeartHandshake,
  ArrowDown,
  Phone,
  MessageCircle,
  Clock,
  Users,
  BarChart3,
  RefreshCw,
  Star
} from "lucide-react";

function WorkflowCompleteContent() {
  const { language, dir } = useLanguage();

  const workflowSteps = [
    {
      step: 1,
      icon: Phone,
      titleAr: "التواصل مع المورد",
      titleEn: "Supplier Contact",
      descAr: "إنشاء طلب شراء، التفاوض على الأسعار، تأكيد الكميات والمواصفات",
      descEn: "Create purchase order, negotiate prices, confirm quantities and specs",
      features: [
        { ar: "إدارة الموردين", en: "Supplier management" },
        { ar: "طلبات الشراء", en: "Purchase orders" },
        { ar: "تتبع العروض", en: "Quote tracking" },
        { ar: "سجل المفاوضات", en: "Negotiation history" }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      icon: Ship,
      titleAr: "تتبع الشحنة",
      titleEn: "Shipment Tracking",
      descAr: "متابعة الكونتينر من الشحن حتى الوصول للميناء",
      descEn: "Track container from shipping to port arrival",
      features: [
        { ar: "تتبع GPS", en: "GPS tracking" },
        { ar: "تنبيهات الوصول", en: "Arrival alerts" },
        { ar: "مستندات الشحن", en: "Shipping documents" },
        { ar: "التخليص الجمركي", en: "Customs clearance" }
      ],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      step: 3,
      icon: ClipboardCheck,
      titleAr: "الاستلام والفحص",
      titleEn: "Receipt & Inspection",
      descAr: "فحص البضاعة، تسجيل العيوب، تأكيد الكميات",
      descEn: "Inspect goods, record defects, confirm quantities",
      features: [
        { ar: "فحص الجودة", en: "Quality check" },
        { ar: "تسجيل العيوب", en: "Defect recording" },
        { ar: "مطابقة الطلب", en: "Order matching" },
        { ar: "تقرير الاستلام", en: "Receipt report" }
      ],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      step: 4,
      icon: Warehouse,
      titleAr: "التخزين والترتيب",
      titleEn: "Storage & Organization",
      descAr: "تسكين البضاعة في المواقع المناسبة مع الباركود",
      descEn: "Store goods in appropriate locations with barcode",
      features: [
        { ar: "تحديد الموقع", en: "Location assignment" },
        { ar: "طباعة الباركود", en: "Barcode printing" },
        { ar: "تنظيم الرفوف", en: "Shelf organization" },
        { ar: "تحديث المخزون", en: "Stock update" }
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 5,
      icon: FileText,
      titleAr: "عرض السعر للعميل",
      titleEn: "Customer Quotation",
      descAr: "إعداد عرض سعر مخصص للعميل مع الخصومات",
      descEn: "Prepare custom quotation with discounts",
      features: [
        { ar: "عروض أسعار احترافية", en: "Professional quotes" },
        { ar: "حساب الخصومات", en: "Discount calculation" },
        { ar: "إرسال بالإيميل", en: "Email sending" },
        { ar: "تتبع الموافقة", en: "Approval tracking" }
      ],
      color: "from-amber-500 to-amber-600"
    },
    {
      step: 6,
      icon: ShoppingCart,
      titleAr: "تأكيد الطلب",
      titleEn: "Order Confirmation",
      descAr: "تحويل عرض السعر لأمر بيع وتأكيد التفاصيل",
      descEn: "Convert quote to sales order and confirm details",
      features: [
        { ar: "إنشاء أمر البيع", en: "Create sales order" },
        { ar: "حجز المخزون", en: "Reserve inventory" },
        { ar: "تأكيد العميل", en: "Customer confirmation" },
        { ar: "جدولة التسليم", en: "Delivery scheduling" }
      ],
      color: "from-pink-500 to-pink-600"
    },
    {
      step: 7,
      icon: CreditCard,
      titleAr: "الفوترة والتحصيل",
      titleEn: "Invoicing & Collection",
      descAr: "إصدار الفاتورة وتحصيل المبالغ",
      descEn: "Issue invoice and collect payments",
      features: [
        { ar: "فواتير إلكترونية", en: "E-invoices" },
        { ar: "طرق دفع متعددة", en: "Multiple payment methods" },
        { ar: "تتبع المديونية", en: "Debt tracking" },
        { ar: "تقارير التحصيل", en: "Collection reports" }
      ],
      color: "from-red-500 to-red-600"
    },
    {
      step: 8,
      icon: Truck,
      titleAr: "الشحن والتوصيل",
      titleEn: "Shipping & Delivery",
      descAr: "تجهيز الطلب وتوصيله للعميل",
      descEn: "Prepare order and deliver to customer",
      features: [
        { ar: "تجهيز الطلب", en: "Order preparation" },
        { ar: "اختيار المندوب", en: "Driver assignment" },
        { ar: "تتبع التوصيل", en: "Delivery tracking" },
        { ar: "إثبات التسليم", en: "Proof of delivery" }
      ],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      step: 9,
      icon: HeartHandshake,
      titleAr: "خدمة ما بعد البيع",
      titleEn: "After-Sales Service",
      descAr: "متابعة رضا العميل والتعامل مع الشكاوى",
      descEn: "Customer satisfaction follow-up and complaints handling",
      features: [
        { ar: "استبيان الرضا", en: "Satisfaction survey" },
        { ar: "معالجة الشكاوى", en: "Complaint handling" },
        { ar: "المرتجعات", en: "Returns" },
        { ar: "برنامج الولاء", en: "Loyalty program" }
      ],
      color: "from-teal-500 to-teal-600"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      titleAr: "توفير الوقت",
      titleEn: "Time Saving",
      valueAr: "60%",
      valueEn: "60%",
      descAr: "تقليل الوقت المستغرق في العمليات",
      descEn: "Reduction in process time"
    },
    {
      icon: RefreshCw,
      titleAr: "تقليل الأخطاء",
      titleEn: "Error Reduction",
      valueAr: "90%",
      valueEn: "90%",
      descAr: "دقة عالية في جميع العمليات",
      descEn: "High accuracy in all operations"
    },
    {
      icon: BarChart3,
      titleAr: "تحسين الرؤية",
      titleEn: "Better Visibility",
      valueAr: "100%",
      valueEn: "100%",
      descAr: "رؤية كاملة لجميع مراحل العمل",
      descEn: "Complete visibility of all stages"
    },
    {
      icon: Users,
      titleAr: "رضا العملاء",
      titleEn: "Customer Satisfaction",
      valueAr: "95%",
      valueEn: "95%",
      descAr: "تحسن ملحوظ في رضا العملاء",
      descEn: "Notable improvement in satisfaction"
    }
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
              <RefreshCw className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">
                {language === "ar" ? "سير العمل المتكامل" : "Complete Workflow"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>من المورد <span className="text-blue-500">للعميل</span></>
              ) : (
                <>From Supplier <span className="text-blue-500">to Customer</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "ar" 
                ? "تتبع كل خطوة في رحلة البضاعة من الحجز من المورد حتى التسليم للعميل مع أتمتة كاملة"
                : "Track every step in the goods journey from supplier booking to customer delivery with full automation"}
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

      {/* Benefits Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg rounded-2xl">
                <benefit.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <p className="text-4xl font-black text-texafab-slate mb-1">
                  {language === "ar" ? benefit.valueAr : benefit.valueEn}
                </p>
                <p className="font-semibold text-texafab-slate text-sm mb-1">
                  {language === "ar" ? benefit.titleAr : benefit.titleEn}
                </p>
                <p className="text-gray-500 text-xs">
                  {language === "ar" ? benefit.descAr : benefit.descEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مراحل سير العمل" : "Workflow Stages"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === "ar" 
                ? "9 مراحل متكاملة تغطي كل خطوة في عملك"
                : "9 integrated stages covering every step in your business"}
            </p>
          </div>

          <div className="space-y-6">
            {workflowSteps.map((step, index) => (
              <div key={index}>
                <Card className="p-6 bg-white border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold">
                          {language === "ar" ? `الخطوة ${step.step}` : `Step ${step.step}`}
                        </span>
                        <h3 className="text-xl font-bold text-texafab-slate">
                          {language === "ar" ? step.titleAr : step.titleEn}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {language === "ar" ? step.descAr : step.descEn}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {step.features.map((feature, i) => (
                          <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            {language === "ar" ? feature.ar : feature.en}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
                
                {index < workflowSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "الأتمتة الذكية" : "Smart Automation"}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {language === "ar" 
                ? "دع النظام يعمل من أجلك مع أتمتة ذكية لكل المهام المتكررة"
                : "Let the system work for you with smart automation for all repetitive tasks"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                titleAr: "تنبيهات تلقائية",
                titleEn: "Auto Alerts",
                descAr: "تنبيهات عند كل مرحلة من مراحل سير العمل",
                descEn: "Alerts at every workflow stage"
              },
              {
                titleAr: "إنشاء المستندات",
                titleEn: "Document Generation",
                descAr: "إنشاء تلقائي للفواتير وأوامر الشراء والبيع",
                descEn: "Auto generation of invoices and orders"
              },
              {
                titleAr: "تحديث المخزون",
                titleEn: "Inventory Update",
                descAr: "تحديث فوري للمخزون عند كل حركة",
                descEn: "Instant inventory update on every movement"
              },
              {
                titleAr: "إرسال الإشعارات",
                titleEn: "Notifications",
                descAr: "إشعارات للعملاء عبر SMS والإيميل",
                descEn: "Customer notifications via SMS and email"
              },
              {
                titleAr: "التقارير الدورية",
                titleEn: "Periodic Reports",
                descAr: "تقارير يومية وأسبوعية وشهرية تلقائية",
                descEn: "Auto daily, weekly, monthly reports"
              },
              {
                titleAr: "المهام والتذكيرات",
                titleEn: "Tasks & Reminders",
                descAr: "إنشاء مهام وتذكيرات للفريق تلقائياً",
                descEn: "Auto task and reminder creation for team"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-2">
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

export default function WorkflowCompletePage() {
  return <WorkflowCompleteContent />;
}
