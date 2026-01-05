import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  FileText,
  Users,
  Globe,
  Mail
} from "lucide-react";

function PrivacyContent() {
  const { language, dir } = useLanguage();

  const lastUpdated = language === "ar" ? "١٥ يناير ٢٠٢٥" : "January 15, 2025";

  const sections = [
    {
      icon: FileText,
      titleAr: "المقدمة",
      titleEn: "Introduction",
      contentAr: `مرحباً بك في ERPMAX. نحن في Next Revolution for Software Development نلتزم بحماية خصوصيتك وبياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات التي تقدمها لنا عند استخدام خدماتنا.

نحن نمتثل لجميع قوانين حماية البيانات المعمول بها، بما في ذلك اللائحة العامة لحماية البيانات (GDPR) في الاتحاد الأوروبي ونظام حماية البيانات الشخصية (PDPL) في المملكة العربية السعودية.`,
      contentEn: `Welcome to ERPMAX. At Next Revolution for Software Development, we are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, and protect the information you provide when using our services.

We comply with all applicable data protection laws, including the General Data Protection Regulation (GDPR) in the European Union and the Personal Data Protection Law (PDPL) in Saudi Arabia.`
    },
    {
      icon: Eye,
      titleAr: "البيانات التي نجمعها",
      titleEn: "Data We Collect",
      contentAr: `نجمع الأنواع التالية من المعلومات:

• **معلومات الحساب**: الاسم، البريد الإلكتروني، رقم الهاتف، اسم الشركة
• **بيانات الاستخدام**: كيفية تفاعلك مع خدماتنا، الصفحات التي تزورها، الميزات التي تستخدمها
• **بيانات المعاملات**: سجلات الفواتير والمدفوعات
• **البيانات التقنية**: عنوان IP، نوع المتصفح، نوع الجهاز، ملفات السجل
• **بيانات الأعمال**: البيانات التي تدخلها في النظام (المخزون، العملاء، المبيعات، إلخ)

لا نجمع بيانات حساسة غير ضرورية لتقديم خدماتنا.`,
      contentEn: `We collect the following types of information:

• **Account Information**: Name, email, phone number, company name
• **Usage Data**: How you interact with our services, pages you visit, features you use
• **Transaction Data**: Billing and payment records
• **Technical Data**: IP address, browser type, device type, log files
• **Business Data**: Data you enter into the system (inventory, customers, sales, etc.)

We do not collect sensitive data unnecessary for providing our services.`
    },
    {
      icon: Users,
      titleAr: "كيف نستخدم بياناتك",
      titleEn: "How We Use Your Data",
      contentAr: `نستخدم بياناتك للأغراض التالية:

• **تقديم الخدمة**: تشغيل حسابك وتوفير الميزات التي طلبتها
• **تحسين الخدمة**: تحليل الاستخدام لتحسين منتجاتنا
• **التواصل**: إرسال التحديثات، الإشعارات الأمنية، رسائل الدعم
• **الفوترة**: معالجة المدفوعات وإدارة الاشتراكات
• **الامتثال القانوني**: الوفاء بالالتزامات القانونية والتنظيمية
• **الأمان**: حماية حسابك ومنع الاحتيال

لن نبيع بياناتك الشخصية لأطراف ثالثة أبداً.`,
      contentEn: `We use your data for the following purposes:

• **Service Delivery**: Operating your account and providing requested features
• **Service Improvement**: Analyzing usage to improve our products
• **Communication**: Sending updates, security notifications, support messages
• **Billing**: Processing payments and managing subscriptions
• **Legal Compliance**: Meeting legal and regulatory obligations
• **Security**: Protecting your account and preventing fraud

We will never sell your personal data to third parties.`
    },
    {
      icon: Lock,
      titleAr: "حماية البيانات",
      titleEn: "Data Protection",
      contentAr: `نتخذ إجراءات أمنية صارمة لحماية بياناتك:

• **التشفير**: جميع البيانات مشفرة باستخدام AES-256 أثناء النقل والتخزين
• **مراكز البيانات**: خوادمنا في مراكز بيانات معتمدة ISO 27001
• **التحكم في الوصول**: وصول محدود للموظفين المصرح لهم فقط
• **النسخ الاحتياطي**: نسخ احتياطي يومي مشفر في مواقع متعددة
• **المراقبة**: مراقبة أمنية على مدار الساعة
• **التدقيق**: عمليات تدقيق أمني منتظمة من جهات مستقلة`,
      contentEn: `We implement strict security measures to protect your data:

• **Encryption**: All data encrypted using AES-256 in transit and at rest
• **Data Centers**: Our servers are in ISO 27001 certified data centers
• **Access Control**: Limited access to authorized personnel only
• **Backup**: Daily encrypted backups in multiple locations
• **Monitoring**: 24/7 security monitoring
• **Auditing**: Regular security audits by independent parties`
    },
    {
      icon: Globe,
      titleAr: "مشاركة البيانات",
      titleEn: "Data Sharing",
      contentAr: `قد نشارك بياناتك مع:

• **مزودي الخدمة**: شركات الاستضافة، معالجي الدفع، خدمات البريد الإلكتروني (بموجب اتفاقيات سرية صارمة)
• **الجهات القانونية**: عند الطلب بموجب القانون أو أمر قضائي
• **عمليات الدمج**: في حالة بيع أو دمج الشركة (مع إخطارك مسبقاً)

لا نشارك بياناتك مع أطراف ثالثة لأغراض تسويقية دون موافقتك الصريحة.`,
      contentEn: `We may share your data with:

• **Service Providers**: Hosting companies, payment processors, email services (under strict confidentiality agreements)
• **Legal Authorities**: When required by law or court order
• **Mergers**: In case of company sale or merger (with prior notice to you)

We do not share your data with third parties for marketing purposes without your explicit consent.`
    },
    {
      icon: Server,
      titleAr: "تخزين البيانات",
      titleEn: "Data Storage",
      contentAr: `• **الموقع**: تُخزن بياناتك في مراكز بيانات في أوروبا (أيرلندا/ألمانيا) أو الخليج (الإمارات/السعودية) حسب موقعك
• **المدة**: نحتفظ ببياناتك طالما حسابك نشط، بالإضافة إلى المدة القانونية المطلوبة
• **الحذف**: يمكنك طلب حذف بياناتك في أي وقت، وسننفذ ذلك خلال 30 يوماً`,
      contentEn: `• **Location**: Your data is stored in data centers in Europe (Ireland/Germany) or Gulf (UAE/Saudi Arabia) depending on your location
• **Duration**: We retain your data as long as your account is active, plus legally required periods
• **Deletion**: You can request data deletion at any time, and we will execute within 30 days`
    },
    {
      icon: Shield,
      titleAr: "حقوقك",
      titleEn: "Your Rights",
      contentAr: `لديك الحقوق التالية فيما يتعلق ببياناتك:

• **الوصول**: طلب نسخة من بياناتك الشخصية
• **التصحيح**: تصحيح أي بيانات غير دقيقة
• **الحذف**: طلب حذف بياناتك ("الحق في النسيان")
• **النقل**: الحصول على بياناتك بصيغة قابلة للقراءة آلياً
• **الاعتراض**: الاعتراض على معالجة بياناتك لأغراض معينة
• **سحب الموافقة**: سحب موافقتك في أي وقت

لممارسة أي من هذه الحقوق، تواصل معنا عبر privacy@erpmax.com`,
      contentEn: `You have the following rights regarding your data:

• **Access**: Request a copy of your personal data
• **Rectification**: Correct any inaccurate data
• **Erasure**: Request deletion of your data ("right to be forgotten")
• **Portability**: Obtain your data in machine-readable format
• **Object**: Object to processing your data for certain purposes
• **Withdraw Consent**: Withdraw your consent at any time

To exercise any of these rights, contact us at privacy@erpmax.com`
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-600">
                {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>خصوصيتك <span className="text-emerald-500">أولويتنا</span></>
              ) : (
                <>Your Privacy is <span className="text-emerald-500">Our Priority</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              {language === "ar" 
                ? "نحن ملتزمون بحماية بياناتك وخصوصيتك"
                : "We are committed to protecting your data and privacy"}
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
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

          {/* Contact for Privacy */}
          <Card className="p-8 mt-12 bg-gradient-to-br from-texafab-slate to-gray-800 text-white border-0 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {language === "ar" ? "اتصل بنا بخصوص الخصوصية" : "Contact Us About Privacy"}
                </h3>
                <p className="text-white/80 mb-4">
                  {language === "ar" 
                    ? "إذا كان لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية الخاصة بنا أو ممارسات البيانات، يرجى الاتصال بنا:"
                    : "If you have any questions or concerns about our privacy policy or data practices, please contact us:"}
                </p>
                <div className="space-y-2 text-white/80">
                  <p><strong>{language === "ar" ? "البريد الإلكتروني:" : "Email:"}</strong> privacy@erpmax.com</p>
                  <p><strong>{language === "ar" ? "العنوان:" : "Address:"}</strong> Next Revolution for Software Development, Dublin, Ireland</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
