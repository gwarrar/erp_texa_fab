import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  HelpCircle, 
  MessageCircle, 
  ArrowRight,
  Search,
  Package,
  CreditCard,
  Settings,
  Users,
  Shield,
  Headphones
} from "lucide-react";
import { Input } from "@/components/ui/input";

function FAQContent() {
  const { language, dir } = useLanguage();

  const categories = [
    {
      icon: Package,
      titleAr: "المنتج والميزات",
      titleEn: "Product & Features",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: CreditCard,
      titleAr: "الأسعار والدفع",
      titleEn: "Pricing & Billing",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Settings,
      titleAr: "الإعداد والتكامل",
      titleEn: "Setup & Integration",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      titleAr: "الأمان والخصوصية",
      titleEn: "Security & Privacy",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const faqs = {
    product: [
      {
        questionAr: "ما هو ERPMAX وكيف يمكنه مساعدة شركتي؟",
        questionEn: "What is ERPMAX and how can it help my company?",
        answerAr: "ERPMAX هو نظام متكامل لإدارة موارد المؤسسات مصمم خصيصاً لصناعة الأقمشة والنسيج. يوفر حلولاً شاملة لإدارة المخزون، تتبع الرولونات، نقاط البيع، إدارة الكونتينرات، التقارير والتحليلات، وأكثر من ذلك.",
        answerEn: "ERPMAX is an integrated enterprise resource planning system designed specifically for the textile and fabric industry. It provides comprehensive solutions for inventory management, roll tracking, POS, container management, reporting and analytics, and much more."
      },
      {
        questionAr: "هل يدعم النظام اللغة العربية والاتجاه من اليمين لليسار؟",
        questionEn: "Does the system support Arabic and RTL direction?",
        answerAr: "نعم، يدعم ERPMAX اللغة العربية بشكل كامل مع واجهة مستخدم تتكيف تلقائياً مع اتجاه RTL. كما ندعم الإنجليزية والألمانية.",
        answerEn: "Yes, ERPMAX fully supports Arabic with a user interface that automatically adapts to RTL direction. We also support English and German."
      },
      {
        questionAr: "كم عدد المستخدمين الذين يمكنهم استخدام النظام؟",
        questionEn: "How many users can use the system?",
        answerAr: "يعتمد ذلك على الباقة التي تختارها. باقة البداية تدعم حتى 5 مستخدمين، الاحترافية حتى 20 مستخدم، وباقة المؤسسات تدعم عدداً غير محدود.",
        answerEn: "It depends on the plan you choose. Starter plan supports up to 5 users, Professional up to 20 users, and Enterprise plan supports unlimited users."
      },
      {
        questionAr: "هل يمكنني تجربة النظام قبل الشراء؟",
        questionEn: "Can I try the system before purchasing?",
        answerAr: "نعم، نوفر تجربة مجانية لمدة 14 يوماً بدون الحاجة لإدخال بطاقة ائتمان. كما يمكنك حجز عرض توضيحي مخصص مع فريقنا.",
        answerEn: "Yes, we offer a 14-day free trial without requiring a credit card. You can also book a personalized demo with our team."
      }
    ],
    pricing: [
      {
        questionAr: "ما هي خطط الأسعار المتاحة؟",
        questionEn: "What pricing plans are available?",
        answerAr: "نوفر ثلاث خطط: البداية (799 ر.س/شهر)، الاحترافية (1,499 ر.س/شهر)، والمؤسسات (سعر مخصص). جميع الخطط تتضمن دعماً فنياً وتحديثات مجانية.",
        answerEn: "We offer three plans: Starter ($199/month), Professional ($399/month), and Enterprise (custom pricing). All plans include technical support and free updates."
      },
      {
        questionAr: "هل هناك خصم للدفع السنوي؟",
        questionEn: "Is there a discount for annual payment?",
        answerAr: "نعم، عند الدفع السنوي تحصل على خصم 20% وشهرين مجاناً.",
        answerEn: "Yes, with annual payment you get 20% off and two months free."
      },
      {
        questionAr: "ما هي طرق الدفع المتاحة؟",
        questionEn: "What payment methods are available?",
        answerAr: "نقبل الدفع بالبطاقات الائتمانية (فيزا، ماستركارد، أمريكان إكسبريس)، التحويل البنكي، وmada للعملاء في السعودية.",
        answerEn: "We accept credit cards (Visa, Mastercard, American Express), bank transfer, and mada for Saudi customers."
      },
      {
        questionAr: "هل يمكنني تغيير الباقة لاحقاً؟",
        questionEn: "Can I change my plan later?",
        answerAr: "نعم، يمكنك الترقية أو تخفيض الباقة في أي وقت. يتم احتساب الفرق بشكل تناسبي.",
        answerEn: "Yes, you can upgrade or downgrade your plan at any time. The difference is calculated proportionally."
      }
    ],
    setup: [
      {
        questionAr: "كم يستغرق إعداد النظام؟",
        questionEn: "How long does it take to set up the system?",
        answerAr: "الإعداد الأساسي يستغرق بضع ساعات. للإعداد الكامل مع نقل البيانات والتدريب، عادة ما يستغرق 1-2 أسبوع حسب حجم الشركة.",
        answerEn: "Basic setup takes a few hours. For complete setup with data migration and training, it usually takes 1-2 weeks depending on company size."
      },
      {
        questionAr: "هل تساعدون في نقل البيانات من الأنظمة القديمة؟",
        questionEn: "Do you help with data migration from old systems?",
        answerAr: "نعم، فريقنا يساعد في نقل البيانات من أي نظام سابق. نوفر أدوات استيراد للإكسل والأنظمة المحاسبية الشائعة.",
        answerEn: "Yes, our team helps migrate data from any previous system. We provide import tools for Excel and common accounting systems."
      },
      {
        questionAr: "هل يتكامل مع أنظمة أخرى مثل المحاسبة؟",
        questionEn: "Does it integrate with other systems like accounting?",
        answerAr: "نعم، ERPMAX يتكامل مع أنظمة المحاسبة الشائعة مثل QuickBooks، Xero، وZoho. كما نوفر API للتكامل مع أي نظام آخر.",
        answerEn: "Yes, ERPMAX integrates with popular accounting systems like QuickBooks, Xero, and Zoho. We also provide an API for integration with any other system."
      }
    ],
    security: [
      {
        questionAr: "كيف تحمون بياناتي؟",
        questionEn: "How do you protect my data?",
        answerAr: "نستخدم تشفير AES-256 لجميع البيانات. خوادمنا موجودة في مراكز بيانات معتمدة ISO 27001 في أوروبا والخليج.",
        answerEn: "We use AES-256 encryption for all data. Our servers are located in ISO 27001 certified data centers in Europe and the Gulf."
      },
      {
        questionAr: "هل تمتثلون لقوانين حماية البيانات؟",
        questionEn: "Do you comply with data protection laws?",
        answerAr: "نعم، نمتثل لـ GDPR الأوروبي ونظام حماية البيانات الشخصية السعودي (PDPL).",
        answerEn: "Yes, we comply with European GDPR and Saudi Personal Data Protection Law (PDPL)."
      },
      {
        questionAr: "هل يمكنني تصدير بياناتي؟",
        questionEn: "Can I export my data?",
        answerAr: "نعم، يمكنك تصدير جميع بياناتك في أي وقت بصيغ متعددة (Excel، CSV، PDF).",
        answerEn: "Yes, you can export all your data at any time in multiple formats (Excel, CSV, PDF)."
      }
    ]
  };

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
              <HelpCircle className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-600">
                {language === "ar" ? "الأسئلة الشائعة" : "FAQ"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>كيف يمكننا <span className="text-emerald-500">مساعدتك؟</span></>
              ) : (
                <>How Can We <span className="text-emerald-500">Help You?</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "ar" 
                ? "ابحث في الأسئلة الشائعة أو تواصل مع فريق الدعم"
                : "Search our FAQ or contact our support team"}
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                className="ps-12 h-14 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                placeholder={language === "ar" ? "ابحث عن سؤالك..." : "Search for your question..."}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-texafab-slate dark:text-white">
                  {language === "ar" ? category.titleAr : category.titleEn}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Product & Features */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-texafab-slate dark:text-white">
                {language === "ar" ? "المنتج والميزات" : "Product & Features"}
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.product.map((faq, index) => (
                <AccordionItem key={index} value={`product-${index}`} className="bg-white dark:bg-gray-900 rounded-xl border-0 shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-start hover:no-underline font-semibold text-texafab-slate dark:text-white">
                    {language === "ar" ? faq.questionAr : faq.questionEn}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {language === "ar" ? faq.answerAr : faq.answerEn}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Pricing & Billing */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-texafab-slate dark:text-white">
                {language === "ar" ? "الأسعار والدفع" : "Pricing & Billing"}
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.pricing.map((faq, index) => (
                <AccordionItem key={index} value={`pricing-${index}`} className="bg-white dark:bg-gray-900 rounded-xl border-0 shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-start hover:no-underline font-semibold text-texafab-slate dark:text-white">
                    {language === "ar" ? faq.questionAr : faq.questionEn}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {language === "ar" ? faq.answerAr : faq.answerEn}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Setup & Integration */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-texafab-slate dark:text-white">
                {language === "ar" ? "الإعداد والتكامل" : "Setup & Integration"}
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.setup.map((faq, index) => (
                <AccordionItem key={index} value={`setup-${index}`} className="bg-white dark:bg-gray-900 rounded-xl border-0 shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-start hover:no-underline font-semibold text-texafab-slate dark:text-white">
                    {language === "ar" ? faq.questionAr : faq.questionEn}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {language === "ar" ? faq.answerAr : faq.answerEn}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Security & Privacy */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-texafab-slate dark:text-white">
                {language === "ar" ? "الأمان والخصوصية" : "Security & Privacy"}
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.security.map((faq, index) => (
                <AccordionItem key={index} value={`security-${index}`} className="bg-white dark:bg-gray-900 rounded-xl border-0 shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-start hover:no-underline font-semibold text-texafab-slate dark:text-white">
                    {language === "ar" ? faq.questionAr : faq.questionEn}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {language === "ar" ? faq.answerAr : faq.answerEn}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-texafab-slate to-gray-800 rounded-3xl p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "لم تجد إجابة سؤالك؟" : "Still Have Questions?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {language === "ar" 
                ? "فريق الدعم جاهز لمساعدتك على مدار الساعة"
                : "Our support team is ready to help you 24/7"}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-white text-texafab-slate hover:bg-white/90 text-base font-bold rounded-xl">
                  <MessageCircle className="w-5 h-5 me-2" />
                  {language === "ar" ? "تواصل معنا" : "Contact Us"}
                </Button>
              </Link>
              <Button variant="outline" className="h-14 px-8 border-2 border-white/30 text-white hover:bg-white/10 text-base font-semibold rounded-xl">
                {language === "ar" ? "ابدأ محادثة مباشرة" : "Start Live Chat"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function FAQPage() {
  return <FAQContent />;
}
