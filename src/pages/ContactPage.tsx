import React, { useState } from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Building2,
  Globe,
  CheckCircle2,
  Calendar,
  PlayCircle,
  Loader2
} from "lucide-react";

function ContactContent() {
  const { language, dir } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const offices = [
    {
      city: language === "ar" ? "دبلن، أيرلندا" : "Dublin, Ireland",
      type: language === "ar" ? "المقر الرئيسي" : "Headquarters",
      address: "123 Tech Quarter, Dublin 2",
      phone: "+353 1 555 0100",
      email: "hq@erpmax.com"
    },
    {
      city: language === "ar" ? "برلين، ألمانيا" : "Berlin, Germany",
      type: language === "ar" ? "مكتب أوروبا" : "Europe Office",
      address: "Alexanderplatz 5, 10178 Berlin",
      phone: "+49 30 555 0200",
      email: "europe@erpmax.com"
    },
    {
      city: language === "ar" ? "الرياض، السعودية" : "Riyadh, Saudi Arabia",
      type: language === "ar" ? "مكتب الخليج" : "Gulf Office",
      address: language === "ar" ? "طريق الملك فهد، الرياض" : "King Fahd Road, Riyadh",
      phone: "+966 11 555 0300",
      email: "gulf@erpmax.com"
    },
    {
      city: language === "ar" ? "دبي، الإمارات" : "Dubai, UAE",
      type: language === "ar" ? "مركز الدعم" : "Support Center",
      address: "Dubai Internet City, Building 12",
      phone: "+971 4 555 0400",
      email: "support@erpmax.com"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      titleAr: "اتصل بنا",
      titleEn: "Call Us",
      descAr: "تحدث مع فريق المبيعات",
      descEn: "Talk to our sales team",
      value: "+966 50 000 0000",
      action: "tel:+966500000000"
    },
    {
      icon: Mail,
      titleAr: "راسلنا",
      titleEn: "Email Us",
      descAr: "سنرد خلال 24 ساعة",
      descEn: "We'll reply within 24 hours",
      value: "info@erpmax.com",
      action: "mailto:info@erpmax.com"
    },
    {
      icon: MessageCircle,
      titleAr: "محادثة مباشرة",
      titleEn: "Live Chat",
      descAr: "متاح على مدار الساعة",
      descEn: "Available 24/7",
      value: language === "ar" ? "ابدأ المحادثة" : "Start Chat",
      action: "#"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" dir={dir}>
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D948808_1px,transparent_1px),linear-gradient(to_bottom,#0D948808_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-6">
              <MessageCircle className="w-4 h-4" />
              {language === "ar" ? "تواصل معنا" : "Get in Touch"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>نحن هنا <span className="text-texafab-emerald">لمساعدتك</span></>
              ) : (
                <>We're Here to <span className="text-texafab-emerald">Help You</span></>
              )}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {language === "ar"
                ? "فريقنا جاهز للإجابة على استفساراتك ومساعدتك في تحويل أعمالك"
                : "Our team is ready to answer your questions and help transform your business"
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, i) => (
              <a href={method.action} key={i}>
                <Card className="p-6 text-center hover:shadow-lg transition-all hover:border-texafab-emerald/30 cursor-pointer">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-texafab-emerald/10 flex items-center justify-center">
                    <method.icon className="w-7 h-7 text-texafab-emerald" />
                  </div>
                  <h3 className="font-bold text-texafab-slate mb-1">
                    {language === "ar" ? method.titleAr : method.titleEn}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {language === "ar" ? method.descAr : method.descEn}
                  </p>
                  <p className="text-texafab-emerald font-semibold">{method.value}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-texafab-slate mb-6">
                {language === "ar" ? "أرسل لنا رسالة" : "Send Us a Message"}
              </h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-texafab-slate mb-2">
                    {language === "ar" ? "شكراً لك!" : "Thank You!"}
                  </h3>
                  <p className="text-gray-600">
                    {language === "ar" 
                      ? "تم استلام رسالتك. سنتواصل معك قريباً."
                      : "Your message has been received. We'll get back to you soon."
                    }
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {language === "ar" ? "الاسم الأول" : "First Name"}
                      </label>
                      <Input placeholder={language === "ar" ? "أحمد" : "John"} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {language === "ar" ? "الاسم الأخير" : "Last Name"}
                      </label>
                      <Input placeholder={language === "ar" ? "محمد" : "Doe"} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {language === "ar" ? "البريد الإلكتروني" : "Email"}
                    </label>
                    <Input type="email" placeholder="email@company.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {language === "ar" ? "رقم الهاتف" : "Phone Number"}
                    </label>
                    <Input type="tel" placeholder="+966 50 000 0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {language === "ar" ? "اسم الشركة" : "Company Name"}
                    </label>
                    <Input placeholder={language === "ar" ? "شركة الأقمشة" : "Fabric Company"} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {language === "ar" ? "كيف يمكننا مساعدتك؟" : "How can we help?"}
                    </label>
                    <Textarea 
                      placeholder={language === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."} 
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white rounded-xl">
                    <Send className="w-4 h-4 me-2" />
                    {language === "ar" ? "إرسال الرسالة" : "Send Message"}
                  </Button>
                </form>
              )}
            </Card>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-texafab-slate dark:text-white mb-4">
                  {language === "ar" ? "معلومات التواصل" : "Contact Information"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "ar"
                    ? "فريقنا متاح لمساعدتك من الأحد إلى الخميس، 9 صباحاً - 6 مساءً"
                    : "Our team is available Sunday to Thursday, 9 AM - 6 PM"
                  }
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-texafab-emerald/10 dark:bg-texafab-teal/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-texafab-emerald dark:text-texafab-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-texafab-slate dark:text-white">
                      {language === "ar" ? "ساعات العمل" : "Business Hours"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {language === "ar" 
                        ? "الأحد - الخميس: 9 ص - 6 م"
                        : "Sun - Thu: 9 AM - 6 PM"
                      }
                    </p>
                    <p className="text-gray-600">
                      {language === "ar" 
                        ? "الدعم الفني: 24/7"
                        : "Technical Support: 24/7"
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-texafab-emerald/10 dark:bg-texafab-teal/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-texafab-emerald dark:text-texafab-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-texafab-slate dark:text-white">
                      {language === "ar" ? "اللغات" : "Languages"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {language === "ar" 
                        ? "العربية، الإنجليزية، الألمانية"
                        : "Arabic, English, German"
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80"
                  alt="Map"
                  className="w-full h-48 object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "مكاتبنا حول العالم" : "Our Offices Worldwide"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {offices.map((office, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-texafab-emerald/10 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-texafab-emerald" />
                </div>
                <h3 className="font-bold text-texafab-slate">{office.city}</h3>
                <p className="text-sm text-texafab-emerald mb-3">{office.type}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span dir="ltr">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Section */}
      <section className="py-20 bg-gradient-to-br from-texafab-slate to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6">
                  <PlayCircle className="w-4 h-4" />
                  {language === "ar" ? "عرض توضيحي مجاني" : "Free Demo"}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {language === "ar" ? "احجز عرضاً توضيحياً مخصصاً" : "Book Your Personalized Demo"}
                </h2>
                <p className="text-white/80 mb-6">
                  {language === "ar"
                    ? "شاهد كيف يمكن لـ ERPMAX تحويل عمليات شركتك في جلسة مدتها 30 دقيقة"
                    : "See how ERPMAX can transform your operations in a 30-minute session"
                  }
                </p>
                <ul className="space-y-3">
                  {[
                    { ar: "عرض مخصص لاحتياجات شركتك", en: "Demo tailored to your company's needs" },
                    { ar: "إجابات على جميع استفساراتك", en: "Answers to all your questions" },
                    { ar: "خطة تنفيذ مقترحة", en: "Proposed implementation plan" },
                    { ar: "عرض أسعار مخصص", en: "Custom pricing quote" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-texafab-emerald" />
                      <span>{language === "ar" ? item.ar : item.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="p-6 bg-white">
                <h3 className="text-xl font-bold text-texafab-slate mb-4">
                  {language === "ar" ? "احجز موعدك الآن" : "Schedule Your Demo"}
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "ar" ? "الاسم الكامل" : "Full Name"}
                    </label>
                    <Input placeholder={language === "ar" ? "أحمد محمد" : "John Doe"} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "ar" ? "البريد الإلكتروني" : "Email"}
                    </label>
                    <Input type="email" placeholder="email@company.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "ar" ? "رقم الهاتف" : "Phone"}
                    </label>
                    <Input type="tel" placeholder="+966 50 000 0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "ar" ? "اسم الشركة" : "Company Name"}
                    </label>
                    <Input placeholder={language === "ar" ? "شركة الأقمشة" : "Textile Co."} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "ar" ? "الوقت المفضل" : "Preferred Time"}
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={language === "ar" ? "اختر وقتاً" : "Select time"} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">{language === "ar" ? "صباحاً (9-12)" : "Morning (9-12)"}</SelectItem>
                        <SelectItem value="afternoon">{language === "ar" ? "ظهراً (12-3)" : "Afternoon (12-3)"}</SelectItem>
                        <SelectItem value="evening">{language === "ar" ? "مساءً (3-6)" : "Evening (3-6)"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full h-12 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white rounded-xl font-semibold">
                    <Calendar className="w-4 h-4 me-2" />
                    {language === "ar" ? "احجز العرض التوضيحي" : "Book Demo"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return <ContactContent />;
}
