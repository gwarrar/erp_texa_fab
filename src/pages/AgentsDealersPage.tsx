import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Users,
  MapPin,
  DollarSign,
  TrendingUp,
  Award,
  ArrowRight,
  Percent,
  Gift
} from "lucide-react";

function AgentsDealersContent() {
  const { language, dir } = useLanguage();

  const features = [
    {
      icon: Percent,
      titleAr: "عمولة 30% ثابتة",
      titleEn: "Fixed 30% Commission",
      descAr: "احصل على 30% من كل عملية بيع تقوم بها - بدون حدود!",
      descEn: "Earn 30% on every sale you make - no limits!",
      color: "from-texafab-gold to-amber-500"
    },
    {
      icon: MapPin,
      titleAr: "احتكر منطقتك",
      titleEn: "Own Your Territory",
      descAr: "كن الممثل الحصري لـ TexaFab في مدينتك أو منطقتك",
      descEn: "Become the exclusive TexaFab representative in your city or region",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Award,
      titleAr: "تدريب مجاني كامل",
      titleEn: "Complete Free Training",
      descAr: "ندربك على كل شيء: المنتج، البيع، العرض، الإغلاق",
      descEn: "We train you on everything: product, selling, demos, closing deals",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Gift,
      titleAr: "مواد تسويقية جاهزة",
      titleEn: "Ready Marketing Materials",
      descAr: "نوفر لك عروض وفيديوهات ومحتوى جاهز للتسويق",
      descEn: "We provide presentations, videos, and ready marketing content",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      titleAr: "دخل متكرر",
      titleEn: "Recurring Income",
      descAr: "اكسب عمولات على تجديد الاشتراكات السنوية",
      descEn: "Earn commissions on annual subscription renewals",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Users,
      titleAr: "دعم فني كامل",
      titleEn: "Full Technical Support",
      descAr: "فريقنا يتولى الدعم الفني لعملائك - أنت تبيع فقط!",
      descEn: "Our team handles technical support for your clients - you just sell!",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      titleAr: "سجّل كشريك",
      titleEn: "Register as Partner",
      descAr: "أملأ نموذج التسجيل وسنتواصل معك خلال 24 ساعة",
      descEn: "Fill the registration form and we'll contact you within 24 hours",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "2",
      titleAr: "احصل على التدريب",
      titleEn: "Get Trained",
      descAr: "ندربك على المنتج وتقنيات البيع والإغلاق",
      descEn: "We train you on the product, sales techniques, and closing",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "3",
      titleAr: "ابدأ التسويق",
      titleEn: "Start Marketing",
      descAr: "استخدم المواد الجاهزة وابدأ بالتواصل مع العملاء المحتملين",
      descEn: "Use ready materials and start reaching potential clients",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      step: "4",
      titleAr: "اكسب 30%",
      titleEn: "Earn 30%",
      descAr: "احصل على عمولتك فور إتمام كل صفقة",
      descEn: "Get your commission upon closing each deal",
      color: "from-texafab-gold to-amber-500"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-gold/10 border border-texafab-gold/20 mb-6">
              <DollarSign className="w-4 h-4 text-texafab-gold" />
              <span className="text-sm font-semibold text-texafab-gold">
                {language === "ar" ? "برنامج الشراكة والتسويق" : "Partnership & Marketing Program"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate dark:text-white mb-6 leading-tight">
              {language === "ar" ? (
                <>ابدأ مشروعك الخاص <span className="text-texafab-gold">واكسب 30%</span></>
              ) : (
                <>Start Your Own Business <span className="text-texafab-gold">& Earn 30%</span></>
              )}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "ar" 
                ? "سوّق نظام TexaFab في مدينتك واحصل على عمولة 30% من كل عملية بيع. نوفر لك التدريب والمواد التسويقية والدعم الكامل مجاناً!"
                : "Market TexaFab in your city and earn 30% commission on every sale. We provide training, marketing materials, and full support for free!"}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="h-14 px-8 bg-gradient-to-r from-texafab-gold to-amber-500 hover:from-amber-500 hover:to-texafab-gold text-white text-base font-semibold rounded-xl shadow-lg shadow-amber-500/25" onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}>
                {language === "ar" ? "قدّم طلبك الآن" : "Apply Now"}
                <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="h-14 px-8 border-2 text-base font-semibold rounded-xl">
                  {language === "ar" ? "تواصل معنا" : "Contact Us"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "لماذا تصبح شريكاً لـ TexaFab؟" : "Why Become a TexaFab Partner?"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar" 
                ? "نقدم لك كل ما تحتاجه للنجاح في بيع أفضل نظام ERP للنسيج"
                : "We provide everything you need to succeed in selling the best textile ERP system"}
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

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {language === "ar" ? "كيف تعمل الشراكة؟" : "How Does It Work?"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "4 خطوات بسيطة لبدء رحلتك معنا"
                : "4 simple steps to start your journey with us"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <Card key={index} className="p-6 bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl text-center hover:shadow-xl transition-all relative overflow-hidden">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 text-3xl font-bold text-white`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-texafab-slate dark:text-white mb-2">
                  {language === "ar" ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {language === "ar" ? item.descAr : item.descEn}
                </p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className={`w-8 h-8 text-gray-300 ${dir === "rtl" ? "rotate-180" : ""}`} />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate dark:text-white mb-4">
              {language === "ar" ? "قصص نجاح شركائنا" : "Partner Success Stories"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "شركاؤنا يحققون نتائج مذهلة - وأنت التالي!"
                : "Our partners achieve amazing results - you could be next!"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: language === "ar" ? "محمد من دبي" : "Mohammed from Dubai",
                earnings: "$12,000",
                period: language === "ar" ? "في شهرين" : "in 2 months",
                quote: language === "ar" ? "بدأت كهواية وأصبحت مصدر دخل رئيسي!" : "Started as a hobby, now it's my main income!"
              },
              { 
                name: language === "ar" ? "سارة من القاهرة" : "Sara from Cairo",
                earnings: "$8,500",
                period: language === "ar" ? "في 6 أسابيع" : "in 6 weeks",
                quote: language === "ar" ? "الدعم والتدريب كانا ممتازين!" : "The support and training were excellent!"
              },
              { 
                name: language === "ar" ? "أحمد من الرياض" : "Ahmed from Riyadh",
                earnings: "$25,000",
                period: language === "ar" ? "في 4 أشهر" : "in 4 months",
                quote: language === "ar" ? "أفضل قرار اتخذته في حياتي المهنية" : "Best decision I've made in my career"
              }
            ].map((story, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 border-0 shadow-lg rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-texafab-gold to-amber-500 flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-texafab-slate dark:text-white">{story.name}</h3>
                    <p className="text-sm text-texafab-gold font-semibold">{story.earnings} {story.period}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{story.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-20 bg-gradient-to-br from-texafab-slate to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "قدّم طلبك الآن" : "Apply Now"}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {language === "ar" 
                ? "أملأ النموذج وسنتواصل معك خلال 24 ساعة"
                : "Fill the form and we'll contact you within 24 hours"}
            </p>
          </div>

          <Card className="p-8 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2 font-medium">
                    {language === "ar" ? "الاسم الكامل *" : "Full Name *"}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-texafab-gold"
                    placeholder={language === "ar" ? "أدخل اسمك" : "Enter your name"}
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    {language === "ar" ? "البريد الإلكتروني *" : "Email *"}
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-texafab-gold"
                    placeholder={language === "ar" ? "example@email.com" : "example@email.com"}
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    {language === "ar" ? "رقم الهاتف (واتساب) *" : "Phone (WhatsApp) *"}
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-texafab-gold"
                    placeholder={language === "ar" ? "+971 XX XXX XXXX" : "+971 XX XXX XXXX"}
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    {language === "ar" ? "المدينة / الدولة *" : "City / Country *"}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-texafab-gold"
                    placeholder={language === "ar" ? "مثال: دبي، الإمارات" : "e.g., Dubai, UAE"}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  {language === "ar" ? "خبرتك في المبيعات" : "Your Sales Experience"}
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-texafab-gold">
                  <option value="" className="text-gray-900">{language === "ar" ? "اختر..." : "Select..."}</option>
                  <option value="none" className="text-gray-900">{language === "ar" ? "لا خبرة سابقة" : "No previous experience"}</option>
                  <option value="1-2" className="text-gray-900">{language === "ar" ? "1-2 سنوات" : "1-2 years"}</option>
                  <option value="3-5" className="text-gray-900">{language === "ar" ? "3-5 سنوات" : "3-5 years"}</option>
                  <option value="5+" className="text-gray-900">{language === "ar" ? "أكثر من 5 سنوات" : "5+ years"}</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  {language === "ar" ? "كيف ستسوّق البرنامج؟" : "How will you market the product?"}
                </label>
                <textarea 
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-texafab-gold resize-none"
                  placeholder={language === "ar" ? "اشرح لنا خطتك للتسويق..." : "Tell us about your marketing plan..."}
                />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-white/20 bg-white/10" />
                <label className="text-gray-300 text-sm">
                  {language === "ar" 
                    ? "أوافق على شروط وأحكام برنامج الشراكة وسياسة الخصوصية"
                    : "I agree to the partnership program terms and privacy policy"}
                </label>
              </div>

              <Button className="w-full h-14 bg-gradient-to-r from-texafab-gold to-amber-500 hover:from-amber-500 hover:to-texafab-gold text-white text-lg font-bold rounded-xl shadow-lg">
                {language === "ar" ? "إرسال الطلب" : "Submit Application"}
                <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </Button>

              <p className="text-center text-gray-400 text-sm">
                {language === "ar" 
                  ? "سنتواصل معك خلال 24 ساعة عبر الواتساب"
                  : "We'll contact you within 24 hours via WhatsApp"}
              </p>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function AgentsDealersPage() {
  return <AgentsDealersContent />;
}
