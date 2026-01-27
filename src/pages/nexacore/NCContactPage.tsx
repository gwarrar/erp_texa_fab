import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { NCHeader } from "@/components/nexacore/NCHeader";
import { NCFooter } from "@/components/nexacore/NCFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  ArrowRight, ArrowLeft, Mail, Phone, MapPin,
  Clock, MessageSquare, Globe, CheckCircle2,
  Building2, Users, Headphones, Send
} from "lucide-react";

const translations = {
  en: {
    // Hero
    badge: "Get in Touch",
    heroTitle: "Let's Talk About",
    heroTitleHighlight: "Your Business",
    heroSubtitle: "Our team of ERP experts is ready to help you transform your operations. Reach out for a personalized consultation.",
    
    // Contact Form
    formTitle: "Send Us a Message",
    nameLabel: "Full Name",
    namePlaceholder: "John Smith",
    emailLabel: "Email Address",
    emailPlaceholder: "john@company.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+353 1 234 5678",
    companyLabel: "Company Name",
    companyPlaceholder: "Your Company Ltd",
    employeesLabel: "Number of Employees",
    employeesPlaceholder: "Select range",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your business needs...",
    submitButton: "Send Message",
    submitting: "Sending...",
    successMessage: "Thank you! We'll get back to you within 24 hours.",
    
    // Contact Info
    contactInfoTitle: "Contact Information",
    
    emailTitle: "Email Us",
    emailValue: "hello@nexacore.eu",
    emailDesc: "We respond within 24 hours",
    
    phoneTitle: "Call Us",
    phoneValue: "+353 1 234 5678",
    phoneDesc: "Mon-Fri, 9am-6pm GMT",
    
    addressTitle: "Visit Us",
    addressValue: "Dublin, Ireland",
    addressDesc: "European Headquarters",
    
    // Support
    supportTitle: "Support Options",
    support1Title: "Technical Support",
    support1Desc: "24/7 technical assistance for all plans",
    support2Title: "Sales Inquiry",
    support2Desc: "Talk to our solutions experts",
    support3Title: "Partnership",
    support3Desc: "Become a NexaCore partner",
    
    // FAQ Preview
    faqTitle: "Frequently Asked",
    faq1Q: "How long does implementation take?",
    faq1A: "Typical implementation takes 2-4 weeks depending on complexity.",
    faq2Q: "Do you offer training?",
    faq2A: "Yes, comprehensive training is included with all plans.",
    faq3Q: "Is there a free trial?",
    faq3A: "Yes, we offer a 14-day free trial with full features.",
    
    // CTA
    ctaTitle: "Prefer a Live Demo?",
    ctaSubtitle: "Schedule a personalized walkthrough with our experts",
    ctaButton: "Schedule Demo",
  },
  ar: {
    // Hero
    badge: "تواصل معنا",
    heroTitle: "لنتحدث عن",
    heroTitleHighlight: "أعمالك",
    heroSubtitle: "فريقنا من خبراء ERP جاهز لمساعدتك في تحويل عملياتك. تواصل معنا للحصول على استشارة شخصية.",
    
    // Contact Form
    formTitle: "أرسل لنا رسالة",
    nameLabel: "الاسم الكامل",
    namePlaceholder: "أحمد محمد",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "ahmed@company.com",
    phoneLabel: "رقم الهاتف",
    phonePlaceholder: "+971 50 123 4567",
    companyLabel: "اسم الشركة",
    companyPlaceholder: "شركتك ش.ذ.م.م",
    employeesLabel: "عدد الموظفين",
    employeesPlaceholder: "اختر النطاق",
    messageLabel: "الرسالة",
    messagePlaceholder: "أخبرنا عن احتياجات عملك...",
    submitButton: "إرسال الرسالة",
    submitting: "جاري الإرسال...",
    successMessage: "شكراً لك! سنرد عليك خلال 24 ساعة.",
    
    // Contact Info
    contactInfoTitle: "معلومات الاتصال",
    
    emailTitle: "راسلنا",
    emailValue: "hello@nexacore.eu",
    emailDesc: "نرد خلال 24 ساعة",
    
    phoneTitle: "اتصل بنا",
    phoneValue: "+353 1 234 5678",
    phoneDesc: "الاثنين-الجمعة، 9ص-6م GMT",
    
    addressTitle: "زرنا",
    addressValue: "دبلن، أيرلندا",
    addressDesc: "المقر الأوروبي",
    
    // Support
    supportTitle: "خيارات الدعم",
    support1Title: "الدعم التقني",
    support1Desc: "مساعدة تقنية 24/7 لجميع الخطط",
    support2Title: "استفسار المبيعات",
    support2Desc: "تحدث مع خبراء الحلول لدينا",
    support3Title: "الشراكة",
    support3Desc: "كن شريكاً لـ NexaCore",
    
    // FAQ Preview
    faqTitle: "الأسئلة الشائعة",
    faq1Q: "كم يستغرق التنفيذ؟",
    faq1A: "التنفيذ النموذجي يستغرق 2-4 أسابيع حسب التعقيد.",
    faq2Q: "هل تقدمون التدريب؟",
    faq2A: "نعم، التدريب الشامل متضمن مع جميع الخطط.",
    faq3Q: "هل هناك تجربة مجانية؟",
    faq3A: "نعم، نقدم تجربة مجانية لمدة 14 يوماً بكامل المميزات.",
    
    // CTA
    ctaTitle: "تفضل عرض توضيحي مباشر؟",
    ctaSubtitle: "جدول جولة شخصية مع خبرائنا",
    ctaButton: "جدول عرض",
  },
};

export default function NCContactPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      employees: "",
      message: "",
    });
  };

  const contactInfo = [
    { icon: Mail, title: t.emailTitle, value: t.emailValue, desc: t.emailDesc },
    { icon: Phone, title: t.phoneTitle, value: t.phoneValue, desc: t.phoneDesc },
    { icon: MapPin, title: t.addressTitle, value: t.addressValue, desc: t.addressDesc },
  ];

  const supportOptions = [
    { icon: Headphones, title: t.support1Title, desc: t.support1Desc },
    { icon: Users, title: t.support2Title, desc: t.support2Desc },
    { icon: Building2, title: t.support3Title, desc: t.support3Desc },
  ];

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" dir={isRTL ? "rtl" : "ltr"}>
      <NCHeader />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/50 to-transparent dark:from-blue-900/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
              <MessageSquare className="w-4 h-4" />
              {t.badge}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {t.heroTitle}{" "}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                {t.heroTitleHighlight}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {t.formTitle}
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                      {t.successMessage}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          {t.nameLabel}
                        </label>
                        <Input
                          type="text"
                          placeholder={t.namePlaceholder}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          {t.emailLabel}
                        </label>
                        <Input
                          type="email"
                          placeholder={t.emailPlaceholder}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          {t.phoneLabel}
                        </label>
                        <Input
                          type="tel"
                          placeholder={t.phonePlaceholder}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          {t.companyLabel}
                        </label>
                        <Input
                          type="text"
                          placeholder={t.companyPlaceholder}
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        {t.messageLabel}
                      </label>
                      <Textarea
                        placeholder={t.messagePlaceholder}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="rounded-xl min-h-[120px]"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-6 text-lg rounded-xl"
                    >
                      {isSubmitting ? t.submitting : t.submitButton}
                      <Send className="w-5 h-5 ms-2" />
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {t.contactInfoTitle}
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                            {info.title}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                            {info.value}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {info.desc}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {t.supportTitle}
                </h2>
                <div className="grid gap-4">
                  {supportOptions.map((option, index) => (
                    <Card key={index} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                          <option.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white">
                            {option.title}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {option.desc}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {t.faqTitle}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {faq.a}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t.ctaSubtitle}
            </p>
            <Link to="/nexacore/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-bold shadow-xl rounded-xl">
                {t.ctaButton}
                <Arrow className="w-5 h-5 ms-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <NCFooter />
    </div>
  );
}
