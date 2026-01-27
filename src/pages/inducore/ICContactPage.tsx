import React, { useState } from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { ICHeader } from "@/components/inducore/ICHeader";
import { ICFooter } from "@/components/inducore/ICFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  Mail, MapPin, Clock, Send, MessageSquare,
  Building2, Globe, CheckCircle2
} from "lucide-react";

const translations = {
  en: {
    title: "Contact Us",
    subtitle: "Get in touch with our team to learn how InduCore can transform your manufacturing",
    formTitle: "Send us a message",
    name: "Full Name",
    email: "Email Address",
    company: "Company Name",
    employees: "Number of Employees",
    message: "Your Message",
    submit: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully!",
    contactInfo: "Contact Information",
    address: "Dublin, Ireland",
    emailLabel: "info@inducore.io",
    hoursLabel: "Mon-Fri: 9AM-6PM GMT",
    offices: "Our Offices",
    dublinOffice: "Dublin HQ",
    dublinAddress: "Next Revolution Ltd, Tech Hub, Dublin, Ireland",
    berlinOffice: "Berlin Office",
    berlinAddress: "Innovation Center, Berlin, Germany",
    dubaiOffice: "Dubai Office",
    dubaiAddress: "Business Bay, Dubai, UAE",
    selectEmployees: "Select employee count",
    emp1_10: "1-10 employees",
    emp11_50: "11-50 employees",
    emp51_200: "51-200 employees",
    emp201_500: "201-500 employees",
    emp500plus: "500+ employees",
  },
  ar: {
    title: "تواصل معنا",
    subtitle: "تواصل مع فريقنا لمعرفة كيف يمكن لـ InduCore تحويل تصنيعك",
    formTitle: "أرسل لنا رسالة",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    company: "اسم الشركة",
    employees: "عدد الموظفين",
    message: "رسالتك",
    submit: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    success: "تم إرسال الرسالة بنجاح!",
    contactInfo: "معلومات الاتصال",
    address: "دبلن، أيرلندا",
    emailLabel: "info@inducore.io",
    hoursLabel: "الإثنين-الجمعة: 9 صباحاً - 6 مساءً بتوقيت غرينتش",
    offices: "مكاتبنا",
    dublinOffice: "المقر الرئيسي دبلن",
    dublinAddress: "نيكست ريفوليوشن، مركز التكنولوجيا، دبلن، أيرلندا",
    berlinOffice: "مكتب برلين",
    berlinAddress: "مركز الابتكار، برلين، ألمانيا",
    dubaiOffice: "مكتب دبي",
    dubaiAddress: "الخليج التجاري، دبي، الإمارات",
    selectEmployees: "اختر عدد الموظفين",
    emp1_10: "1-10 موظفين",
    emp11_50: "11-50 موظف",
    emp51_200: "51-200 موظف",
    emp201_500: "201-500 موظف",
    emp500plus: "500+ موظف",
  },
  tr: {
    title: "Bize Ulaşın",
    subtitle: "InduCore'un üretiminizi nasıl dönüştürebileceğini öğrenmek için ekibimizle iletişime geçin",
    formTitle: "Bize mesaj gönderin",
    name: "Ad Soyad",
    email: "E-posta Adresi",
    company: "Şirket Adı",
    employees: "Çalışan Sayısı",
    message: "Mesajınız",
    submit: "Mesaj Gönder",
    sending: "Gönderiliyor...",
    success: "Mesaj başarıyla gönderildi!",
    contactInfo: "İletişim Bilgileri",
    address: "Dublin, İrlanda",
    emailLabel: "info@inducore.io",
    hoursLabel: "Pzt-Cum: 09:00-18:00 GMT",
    offices: "Ofislerimiz",
    dublinOffice: "Dublin Merkez",
    dublinAddress: "Next Revolution Ltd, Tech Hub, Dublin, İrlanda",
    berlinOffice: "Berlin Ofisi",
    berlinAddress: "İnovasyon Merkezi, Berlin, Almanya",
    dubaiOffice: "Dubai Ofisi",
    dubaiAddress: "Business Bay, Dubai, BAE",
    selectEmployees: "Çalışan sayısını seçin",
    emp1_10: "1-10 çalışan",
    emp11_50: "11-50 çalışan",
    emp51_200: "51-200 çalışan",
    emp201_500: "201-500 çalışan",
    emp500plus: "500+ çalışan",
  },
};

export default function ICContactPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", company: "", employees: "", message: "" });
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-slate-900 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <ICHeader />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-red-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-red-800" />
                {t.formTitle}
              </h2>
              
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center gap-3 text-green-700 dark:text-green-300">
                  <CheckCircle2 className="w-5 h-5" />
                  {t.success}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {t.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {t.company}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {t.employees}
                    </label>
                    <select
                      value={formData.employees}
                      onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">{t.selectEmployees}</option>
                      <option value="1-10">{t.emp1_10}</option>
                      <option value="11-50">{t.emp11_50}</option>
                      <option value="51-200">{t.emp51_200}</option>
                      <option value="201-500">{t.emp201_500}</option>
                      <option value="500+">{t.emp500plus}</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t.message}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-800 hover:bg-red-900 text-white py-4 text-lg"
                >
                  {isSubmitting ? t.sending : t.submit}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">{t.contactInfo}</h2>
                <div className="space-y-6">
                  <a href="mailto:info@inducore.io" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-red-100 text-sm">Email</p>
                      <p className="font-medium">{t.emailLabel}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-red-100 text-sm">Address</p>
                      <p className="font-medium">{t.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-red-100 text-sm">Hours</p>
                      <p className="font-medium">{t.hoursLabel}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Offices */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-red-800" />
                  {t.offices}
                </h2>
                <div className="space-y-6">
                  {[
                    { name: t.dublinOffice, address: t.dublinAddress, flag: "🇮🇪" },
                    { name: t.berlinOffice, address: t.berlinAddress, flag: "🇩🇪" },
                    { name: t.dubaiOffice, address: t.dubaiAddress, flag: "🇦🇪" },
                  ].map((office, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-2xl">{office.flag}</span>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">{office.name}</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <ICFooter />
    </div>
  );
}
