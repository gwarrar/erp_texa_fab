import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getText, workflowCompletePageTranslations as t } from "@/lib/translations/pages";
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
      title: getText(t.step1Title, language),
      desc: getText(t.step1Desc, language),
      features: language === "ar" 
        ? ["إدارة الموردين", "طلبات الشراء", "تتبع العروض", "سجل المفاوضات"]
        : ["Supplier management", "Purchase orders", "Quote tracking", "Negotiation history"],
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      icon: Ship,
      title: getText(t.step2Title, language),
      desc: getText(t.step2Desc, language),
      features: language === "ar"
        ? ["تتبع GPS", "تنبيهات الوصول", "مستندات الشحن", "التخليص الجمركي"]
        : ["GPS tracking", "Arrival alerts", "Shipping documents", "Customs clearance"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      step: 3,
      icon: ClipboardCheck,
      title: getText(t.step3Title, language),
      desc: getText(t.step3Desc, language),
      features: language === "ar"
        ? ["فحص الجودة", "تسجيل العيوب", "مطابقة الطلب", "تقرير الاستلام"]
        : ["Quality check", "Defect recording", "Order matching", "Receipt report"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      step: 4,
      icon: Warehouse,
      title: getText(t.step4Title, language),
      desc: getText(t.step4Desc, language),
      features: language === "ar"
        ? ["تحديد الموقع", "طباعة الباركود", "تنظيم الرفوف", "تحديث المخزون"]
        : ["Location assignment", "Barcode printing", "Shelf organization", "Stock update"],
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 5,
      icon: FileText,
      title: getText(t.step5Title, language),
      desc: getText(t.step5Desc, language),
      features: language === "ar"
        ? ["عروض أسعار احترافية", "حساب الخصومات", "إرسال بالإيميل", "تتبع الموافقة"]
        : ["Professional quotes", "Discount calculation", "Email sending", "Approval tracking"],
      color: "from-amber-500 to-amber-600"
    },
    {
      step: 6,
      icon: ShoppingCart,
      title: getText(t.step6Title, language),
      desc: getText(t.step6Desc, language),
      features: language === "ar"
        ? ["إنشاء أمر البيع", "حجز المخزون", "تأكيد العميل", "جدولة التسليم"]
        : ["Create sales order", "Reserve inventory", "Customer confirmation", "Delivery scheduling"],
      color: "from-pink-500 to-pink-600"
    },
    {
      step: 7,
      icon: CreditCard,
      title: getText(t.step7Title, language),
      desc: getText(t.step7Desc, language),
      features: language === "ar"
        ? ["فواتير إلكترونية", "طرق دفع متعددة", "تتبع المديونية", "تقارير التحصيل"]
        : ["E-invoices", "Multiple payment methods", "Debt tracking", "Collection reports"],
      color: "from-red-500 to-red-600"
    },
    {
      step: 8,
      icon: Truck,
      title: getText(t.step8Title, language),
      desc: getText(t.step8Desc, language),
      features: language === "ar"
        ? ["تجهيز الطلب", "اختيار المندوب", "تتبع التوصيل", "إثبات التسليم"]
        : ["Order preparation", "Driver assignment", "Delivery tracking", "Proof of delivery"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      step: 9,
      icon: HeartHandshake,
      title: getText(t.step9Title, language),
      desc: getText(t.step9Desc, language),
      features: language === "ar"
        ? ["استبيان الرضا", "معالجة الشكاوى", "المرتجعات", "برنامج الولاء"]
        : ["Satisfaction survey", "Complaint handling", "Returns", "Loyalty program"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: getText(t.timeSaving, language),
      value: "60%",
      desc: getText(t.timeSavingDesc, language)
    },
    {
      icon: RefreshCw,
      title: getText(t.errorReduction, language),
      value: "90%",
      desc: getText(t.errorReductionDesc, language)
    },
    {
      icon: BarChart3,
      title: getText(t.betterVisibility, language),
      value: "100%",
      desc: getText(t.betterVisibilityDesc, language)
    },
    {
      icon: Users,
      title: getText(t.customerSatisfaction, language),
      value: "95%",
      desc: getText(t.customerSatisfactionDesc, language)
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
                {getText(t.badge, language)}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {getText(t.heroTitle1, language)} <span className="text-blue-500">{getText(t.heroTitle2, language)}</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {getText(t.heroDescription, language)}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-blue-500 hover:bg-blue-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-500/25">
                  {getText(t.bookDemo, language)}
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
                  {benefit.value}
                </p>
                <p className="font-semibold text-texafab-slate text-sm mb-1">
                  {benefit.title}
                </p>
                <p className="text-gray-500 text-xs">
                  {benefit.desc}
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
              {getText(t.workflowTitle, language)}
            </h2>
            <p className="text-lg text-gray-600">
              {getText(t.workflowDesc, language)}
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
                          {getText(t.step, language)} {step.step}
                        </span>
                        <h3 className="text-xl font-bold text-texafab-slate">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {step.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {step.features.map((feature, i) => (
                          <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            {feature}
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
              {getText(t.smartAutomation, language)}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {getText(t.smartAutomationDesc, language)}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: getText(t.autoAlerts, language), desc: getText(t.autoAlertsDesc, language) },
              { title: getText(t.documentGeneration, language), desc: getText(t.documentGenerationDesc, language) },
              { title: getText(t.inventoryUpdate, language), desc: getText(t.inventoryUpdateDesc, language) },
              { title: getText(t.notifications, language), desc: getText(t.notificationsDesc, language) },
              { title: getText(t.periodicReports, language), desc: getText(t.periodicReportsDesc, language) },
              { title: getText(t.tasksReminders, language), desc: getText(t.tasksRemindersDesc, language) }
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70">
                  {item.desc}
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
