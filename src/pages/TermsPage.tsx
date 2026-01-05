import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card } from "@/components/ui/card";
import { 
  FileText, 
  Scale, 
  AlertTriangle, 
  CreditCard,
  Users,
  Shield,
  Clock,
  Ban
} from "lucide-react";

function TermsContent() {
  const { language, dir } = useLanguage();

  const lastUpdated = language === "ar" ? "١٥ يناير ٢٠٢٥" : "January 15, 2025";

  const sections = [
    {
      icon: FileText,
      titleAr: "قبول الشروط",
      titleEn: "Acceptance of Terms",
      contentAr: `باستخدامك لخدمات ERPMAX المقدمة من Next Revolution for Software Development، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا.

تنطبق هذه الشروط على جميع المستخدمين والزوار وأي شخص آخر يصل إلى خدماتنا أو يستخدمها.

نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بالتغييرات الجوهرية عبر البريد الإلكتروني أو إشعار داخل التطبيق.`,
      contentEn: `By using ERPMAX services provided by Next Revolution for Software Development, you agree to be bound by these terms and conditions. If you do not agree to any part of these terms, please do not use our services.

These terms apply to all users, visitors, and anyone else who accesses or uses our services.

We reserve the right to modify these terms at any time. You will be notified of material changes via email or in-app notification.`
    },
    {
      icon: Scale,
      titleAr: "وصف الخدمة",
      titleEn: "Service Description",
      contentAr: `ERPMAX هو نظام برمجي سحابي لإدارة موارد المؤسسات (ERP) مصمم خصيصاً لصناعة الأقمشة والنسيج. تشمل خدماتنا:

• إدارة المخزون والرولونات
• نظام نقاط البيع
• تتبع الكونتينرات والشحنات
• إدارة العملاء والموردين
• التقارير والتحليلات
• إدارة المستخدمين والصلاحيات

نسعى لتوفير الخدمة على مدار الساعة، لكننا لا نضمن عدم انقطاع الخدمة لأسباب صيانة أو ظروف خارجة عن إرادتنا.`,
      contentEn: `ERPMAX is a cloud-based Enterprise Resource Planning (ERP) software system designed specifically for the textile and fabric industry. Our services include:

• Inventory and roll management
• Point of Sale system
• Container and shipment tracking
• Customer and supplier management
• Reports and analytics
• User and permission management

We strive to provide 24/7 service, but we do not guarantee uninterrupted service due to maintenance or circumstances beyond our control.`
    },
    {
      icon: Users,
      titleAr: "حساب المستخدم",
      titleEn: "User Account",
      contentAr: `• **إنشاء الحساب**: يجب أن تكون 18 عاماً أو أكثر لإنشاء حساب
• **معلومات دقيقة**: أنت مسؤول عن تقديم معلومات صحيحة ومحدثة
• **أمان الحساب**: أنت مسؤول عن الحفاظ على سرية كلمة المرور وأمان حسابك
• **الإخطار**: يجب إخطارنا فوراً بأي استخدام غير مصرح به لحسابك
• **حساب واحد**: لا يجوز إنشاء أكثر من حساب لنفس الشركة إلا بموافقتنا
• **نقل الحساب**: لا يجوز نقل حسابك لطرف آخر دون موافقتنا الخطية`,
      contentEn: `• **Account Creation**: You must be 18 years or older to create an account
• **Accurate Information**: You are responsible for providing accurate and up-to-date information
• **Account Security**: You are responsible for maintaining password confidentiality and account security
• **Notification**: You must notify us immediately of any unauthorized use of your account
• **Single Account**: You may not create more than one account for the same company without our approval
• **Account Transfer**: You may not transfer your account to another party without our written consent`
    },
    {
      icon: CreditCard,
      titleAr: "الدفع والاشتراك",
      titleEn: "Payment & Subscription",
      contentAr: `• **الأسعار**: الأسعار المعروضة بالدولار الأمريكي كأساس، وتُحوَّل تلقائياً للعملة المحلية حسب موقعك
• **العملات المدعومة**: USD، SAR، EUR، UAH، RUB، PLN، TRY، RON
• **الفوترة**: يتم تحصيل الرسوم مقدماً على أساس شهري أو سنوي حسب خطتك
• **التجديد التلقائي**: يتم تجديد اشتراكك تلقائياً ما لم تقم بإلغائه قبل 7 أيام من تاريخ التجديد
• **ضمان السعر**: العملاء المسجلون قبل 31 ديسمبر 2025 يحصلون على السعر التأسيسي مضموناً لمدة 24 شهراً من تاريخ التسجيل
• **تغيير الأسعار**: أي تغيير في الأسعار يتطلب إشعار مسبق بـ 30 يوماً
• **ضمان الاسترداد**: يمكن استرداد المبلغ المدفوع خلال أول 30 يوماً من الاشتراك إذا لم تكن راضياً
• **الضرائب**: الأسعار لا تشمل ضريبة القيمة المضافة أو أي ضرائب محلية أخرى
• **تأخر الدفع**: قد يؤدي تأخر الدفع لأكثر من 15 يوماً إلى تعليق الخدمة
• **المتجر الإلكتروني**: المتجر الإلكتروني مشمول بدون رسوم تصميم أو تشغيل إضافية في الباقات المدفوعة`,
      contentEn: `• **Pricing**: Prices are displayed in US Dollars as base, automatically converted to local currency based on your location
• **Supported Currencies**: USD, SAR, EUR, UAH, RUB, PLN, TRY, RON
• **Billing**: Fees are charged in advance on a monthly or annual basis according to your plan
• **Auto-Renewal**: Your subscription renews automatically unless you cancel 7 days before renewal date
• **Price Lock Guarantee**: Customers registered before December 31, 2025 get founding price guaranteed for 24 months from registration
• **Price Changes**: Any price change requires 30 days advance notice
• **Money-Back Guarantee**: Full refund available within first 30 days of subscription if not satisfied
• **Taxes**: Prices do not include VAT or any local taxes
• **Late Payment**: Payment delay of more than 15 days may result in service suspension
• **E-commerce Store**: E-commerce store is included with NO design or setup fees in paid plans`
    },
    {
      icon: Ban,
      titleAr: "الاستخدام المحظور",
      titleEn: "Prohibited Use",
      contentAr: `يُحظر استخدام خدماتنا لـ:

• أي نشاط غير قانوني أو احتيالي
• انتهاك حقوق الملكية الفكرية للآخرين
• إرسال فيروسات أو برمجيات ضارة
• محاولة اختراق النظام أو الوصول غير المصرح به
• جمع بيانات المستخدمين الآخرين بدون إذن
• إعادة بيع الخدمة لأطراف ثالثة
• استخدام الخدمة لإرسال رسائل غير مرغوب فيها
• أي استخدام يضر بسمعة ERPMAX أو يؤثر على أداء الخدمة`,
      contentEn: `It is prohibited to use our services for:

• Any illegal or fraudulent activity
• Violating others' intellectual property rights
• Sending viruses or malicious software
• Attempting to hack the system or unauthorized access
• Collecting other users' data without permission
• Reselling the service to third parties
• Using the service to send spam
• Any use that harms ERPMAX reputation or affects service performance`
    },
    {
      icon: Shield,
      titleAr: "الملكية الفكرية",
      titleEn: "Intellectual Property",
      contentAr: `• **ملكيتنا**: جميع حقوق الملكية الفكرية للنظام والعلامة التجارية ERPMAX مملوكة لـ Next Revolution
• **ترخيص الاستخدام**: نمنحك ترخيصاً محدوداً وغير حصري لاستخدام الخدمة
• **بياناتك**: أنت تحتفظ بملكية جميع البيانات التي تدخلها في النظام
• **الملاحظات**: أي ملاحظات أو اقتراحات تقدمها تصبح ملكاً لنا ويمكننا استخدامها`,
      contentEn: `• **Our Ownership**: All intellectual property rights to the system and ERPMAX brand are owned by Next Revolution
• **License to Use**: We grant you a limited, non-exclusive license to use the service
• **Your Data**: You retain ownership of all data you enter into the system
• **Feedback**: Any feedback or suggestions you provide become our property and we may use them`
    },
    {
      icon: AlertTriangle,
      titleAr: "حدود المسؤولية",
      titleEn: "Limitation of Liability",
      contentAr: `• نقدم الخدمة "كما هي" دون ضمانات صريحة أو ضمنية
• لا نتحمل مسؤولية أي خسائر غير مباشرة أو تبعية
• مسؤوليتنا القصوى محدودة بقيمة الرسوم المدفوعة خلال الـ 12 شهراً السابقة
• أنت مسؤول عن النسخ الاحتياطي لبياناتك (رغم أننا نوفر نسخ احتياطي تلقائي)
• لا نتحمل مسؤولية انقطاع الخدمة بسبب قوة قاهرة أو أطراف ثالثة`,
      contentEn: `• We provide the service "as is" without express or implied warranties
• We are not liable for any indirect or consequential losses
• Our maximum liability is limited to fees paid during the preceding 12 months
• You are responsible for backing up your data (although we provide automatic backup)
• We are not liable for service interruption due to force majeure or third parties`
    },
    {
      icon: Clock,
      titleAr: "الإنهاء",
      titleEn: "Termination",
      contentAr: `• **إنهاء من قبلك**: يمكنك إلغاء اشتراكك في أي وقت من إعدادات الحساب
• **إنهاء من قبلنا**: يحق لنا تعليق أو إنهاء حسابك إذا انتهكت هذه الشروط
• **تأثير الإنهاء**: عند الإنهاء، يتوقف وصولك للخدمة فوراً
• **تصدير البيانات**: لديك 30 يوماً بعد الإنهاء لتصدير بياناتك
• **الاسترداد**: لا استرداد للرسوم المدفوعة عند الإنهاء قبل نهاية الفترة`,
      contentEn: `• **Termination by You**: You can cancel your subscription at any time from account settings
• **Termination by Us**: We reserve the right to suspend or terminate your account if you violate these terms
• **Effect of Termination**: Upon termination, your access to the service stops immediately
• **Data Export**: You have 30 days after termination to export your data
• **Refunds**: No refunds for fees paid upon termination before end of period`
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Scale className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">
                {language === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>شروط <span className="text-blue-500">الاستخدام</span></>
              ) : (
                <>Terms of <span className="text-blue-500">Service</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              {language === "ar" 
                ? "يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا"
                : "Please read these terms carefully before using our services"}
            </p>

            <p className="text-sm text-gray-500">
              {language === "ar" ? `آخر تحديث: ${lastUpdated}` : `Last updated: ${lastUpdated}`}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg rounded-2xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-texafab-slate pt-2">
                    {language === "ar" ? section.titleAr : section.titleEn}
                  </h2>
                </div>
                <div className="prose prose-gray max-w-none text-gray-600 whitespace-pre-line leading-relaxed">
                  {language === "ar" ? section.contentAr : section.contentEn}
                </div>
              </Card>
            ))}
          </div>

          {/* Governing Law */}
          <Card className="p-8 mt-12 bg-gradient-to-br from-blue-900 to-cyan-900 text-white border-0 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {language === "ar" ? "القانون الحاكم" : "Governing Law"}
                </h3>
                <p className="text-white/80">
                  {language === "ar" 
                    ? "تخضع هذه الشروط وتُفسر وفقاً لقوانين أيرلندا. أي نزاع ينشأ عن هذه الشروط يخضع للاختصاص الحصري لمحاكم دبلن، أيرلندا. للعملاء في المملكة العربية السعودية، قد تنطبق الأنظمة المحلية."
                    : "These terms are governed by and construed in accordance with the laws of Ireland. Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the courts of Dublin, Ireland. For customers in Saudi Arabia, local regulations may apply."}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function TermsPage() {
  return <TermsContent />;
}
