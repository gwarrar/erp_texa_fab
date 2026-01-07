import React, { useState, useEffect } from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { DSHeader } from "@/components/dubai-stroy/DSHeader";
import { DSFooter } from "@/components/dubai-stroy/DSFooter";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactData {
  sectionTitle: string;
  sectionSubtitle: string;
  form: {
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    service: string;
    servicePlaceholder: string;
    serviceOptions: Record<string, string>;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
  contact: {
    title: string;
    phone: string;
    email: string;
    website: string;
    address: string;
    workingHours: string;
  };
  cta: {
    call: string;
    whatsapp: string;
    telegram: string;
  };
}

// Default contact data
const defaultContact: ContactData = {
  sectionTitle: "Зв'яжіться з нами",
  sectionSubtitle: "Ми завжди раді допомогти",
  form: {
    name: "Ім'я", namePlaceholder: "Ваше ім'я",
    phone: "Телефон", phonePlaceholder: "+380...",
    email: "Email", emailPlaceholder: "email@example.com",
    service: "Послуга", servicePlaceholder: "Оберіть послугу",
    serviceOptions: { construction: "Будівництво", renovation: "Ремонт", design: "Дизайн" },
    message: "Повідомлення", messagePlaceholder: "Ваше повідомлення...",
    submit: "Надіслати", submitting: "Надсилання...", success: "Успішно надіслано!", error: "Помилка",
  },
  contact: { title: "Контакти", phone: "+380 67 484 80 29", email: "info@dubaistroy.ua", website: "dubaistroy.ua", address: "Одеса, Генуезька 5", workingHours: "Пн-Сб: 9:00-18:00" },
  cta: { call: "Зателефонувати", whatsapp: "WhatsApp", telegram: "Telegram" },
};

export default function DSContactPage() {
  const { language, dir } = useLanguage();
  useTheme();
  const [contactData, setContactData] = useState<ContactData>(defaultContact);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const isRTL = dir === "rtl";

  useEffect(() => {
    fetch("/data/dubai-stroy/contact.json")
      .then((res) => res.json())
      .then((data) => setContactData(data[language] || data["ru"]))
      .catch(() => {});
  }, [language]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className={cn("min-h-screen bg-white dark:bg-slate-950", isRTL ? "rtl" : "ltr")} dir={dir}>
      <DSHeader />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-600 dark:text-amber-400 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Dubai Stroy
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              {contactData.sectionTitle}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {contactData.sectionSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {language === "ar" ? "أرسل لنا رسالة" : language === "ru" ? "Отправьте нам сообщение" : language === "uk" ? "Надішліть нам повідомлення" : "Send Us a Message"}
              </h2>

              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-700 dark:text-green-300">{contactData.form.success}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {contactData.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={contactData.form.namePlaceholder}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {contactData.form.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={contactData.form.phonePlaceholder}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {contactData.form.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={contactData.form.emailPlaceholder}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {contactData.form.service}
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">{contactData.form.servicePlaceholder}</option>
                    {Object.entries(contactData.form.serviceOptions).map(([key, value]) => (
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {contactData.form.message}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={contactData.form.messagePlaceholder}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-amber-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {contactData.form.submitting}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {contactData.form.submit}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {contactData.contact.title}
                </h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <a
                    href={`tel:${contactData.contact.phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                      <Phone className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{contactData.form.phone}</p>
                      <p className="text-lg text-amber-600 dark:text-amber-400">{contactData.contact.phone}</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${contactData.contact.email}`}
                    className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                      <Mail className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{contactData.form.email}</p>
                      <p className="text-amber-600 dark:text-amber-400">{contactData.contact.email}</p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        {language === "ar" ? "العنوان" : language === "ru" ? "Адрес" : language === "uk" ? "Адреса" : "Address"}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">{contactData.contact.address}</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        {language === "ar" ? "ساعات العمل" : language === "ru" ? "Часы работы" : language === "uk" ? "Години роботи" : "Working Hours"}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">{contactData.contact.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  {language === "ar" ? "تواصل سريع" : language === "ru" ? "Быстрая связь" : language === "uk" ? "Швидкий зв'язок" : "Quick Contact"}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href={`tel:${contactData.contact.phone.replace(/\s/g, "")}`}
                    className="flex flex-col items-center gap-2 p-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors"
                  >
                    <Phone className="w-6 h-6" />
                    <span className="text-sm font-medium">{contactData.cta.call}</span>
                  </a>
                  <a
                    href="https://wa.me/380674848029"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-sm font-medium">{contactData.cta.whatsapp}</span>
                  </a>
                  <a
                    href="https://t.me/dubaistroy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 bg-sky-500 hover:bg-sky-600 text-white rounded-xl transition-colors"
                  >
                    <Send className="w-6 h-6" />
                    <span className="text-sm font-medium">{contactData.cta.telegram}</span>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-64 bg-slate-200 dark:bg-slate-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.9083749477!2d30.7597!3d46.4825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDI4JzU3LjAiTiAzMMKwNDUnMzUuMCJF!5e0!3m2!1sen!2sua!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dubai Stroy Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DSFooter />
      <ScrollToTop />
    </div>
  );
}
