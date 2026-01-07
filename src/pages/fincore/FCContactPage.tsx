import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/landing/LanguageContext";
import { FCHeader } from "@/components/fincore/FCHeader";
import { FCFooter } from "@/components/fincore/FCFooter";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { 
  MapPin, Mail, Clock, Send, CheckCircle2,
  Building2, Linkedin, Twitter, Globe, MessageSquare, Loader2
} from "lucide-react";

const translations = {
  en: {
    title: "Get in Touch",
    subtitle: "Ready to transform your financial operations? Our team of banking technology experts is here to help.",
    formTitle: "Request a Demo",
    formSubtitle: "Fill out the form and we'll get back to you within 24 hours.",
    name: "Full Name",
    email: "Work Email",
    phone: "Phone Number",
    company: "Company Name",
    jobTitle: "Job Title",
    country: "Country",
    companyType: "Company Type",
    companyTypeOptions: {
      bank: "Commercial Bank",
      exchange: "Exchange House",
      remittance: "Remittance Company",
      microfinance: "Microfinance Institution",
      fintech: "Fintech Company",
      other: "Other",
    },
    message: "Tell us about your needs",
    submit: "Send Message",
    sending: "Sending...",
    successTitle: "Message Sent!",
    successMessage: "Thank you for reaching out. Our team will contact you within 24 hours.",
    offices: "Our Offices",
    dublinOffice: "Dublin, Ireland",
    dublinAddress: "Dublin City Center, Ireland",
    londonOffice: "London, UK",
    londonAddress: "Financial District, London",
    dubaiOffice: "Dubai, UAE",
    dubaiAddress: "DIFC, Dubai",
    emailLabel: "Email",
    emailValue: "contact@fincore-banking.com",
    hoursLabel: "Business Hours",
    hoursValue: "Mon - Fri: 9:00 AM - 6:00 PM GMT",
    followUs: "Follow Us",
  },
  ar: {
    title: "تواصل معنا",
    subtitle: "هل أنت مستعد لتحويل عملياتك المالية؟ فريقنا من خبراء التقنية البنكية هنا لمساعدتك.",
    formTitle: "اطلب عرضاً توضيحياً",
    formSubtitle: "املأ النموذج وسنتواصل معك خلال 24 ساعة.",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني للعمل",
    phone: "رقم الهاتف",
    company: "اسم الشركة",
    jobTitle: "المسمى الوظيفي",
    country: "الدولة",
    companyType: "نوع الشركة",
    companyTypeOptions: {
      bank: "بنك تجاري",
      exchange: "شركة صرافة",
      remittance: "شركة حوالات",
      microfinance: "مؤسسة تمويل أصغر",
      fintech: "شركة تقنية مالية",
      other: "أخرى",
    },
    message: "أخبرنا عن احتياجاتك",
    submit: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    successTitle: "تم إرسال الرسالة!",
    successMessage: "شكراً للتواصل. سيتصل بك فريقنا خلال 24 ساعة.",
    offices: "مكاتبنا",
    dublinOffice: "دبلن، أيرلندا",
    dublinAddress: "وسط مدينة دبلن، أيرلندا",
    londonOffice: "لندن، المملكة المتحدة",
    londonAddress: "المنطقة المالية، لندن",
    dubaiOffice: "دبي، الإمارات",
    dubaiAddress: "مركز دبي المالي العالمي",
    emailLabel: "البريد الإلكتروني",
    emailValue: "contact@fincore-banking.com",
    hoursLabel: "ساعات العمل",
    hoursValue: "الإثنين - الجمعة: 9:00 ص - 6:00 م بتوقيت غرينتش",
    followUs: "تابعنا",
  },
  ru: {
    title: "Связаться с нами",
    subtitle: "Готовы трансформировать ваши финансовые операции? Наша команда экспертов банковских технологий готова помочь.",
    formTitle: "Запросить демонстрацию",
    formSubtitle: "Заполните форму, и мы свяжемся с вами в течение 24 часов.",
    name: "Полное имя",
    email: "Рабочий email",
    phone: "Номер телефона",
    company: "Название компании",
    jobTitle: "Должность",
    country: "Страна",
    companyType: "Тип компании",
    companyTypeOptions: {
      bank: "Коммерческий банк",
      exchange: "Обменный пункт",
      remittance: "Компания денежных переводов",
      microfinance: "Микрофинансовая организация",
      fintech: "Финтех-компания",
      other: "Другое",
    },
    message: "Расскажите о ваших потребностях",
    submit: "Отправить сообщение",
    sending: "Отправка...",
    successTitle: "Сообщение отправлено!",
    successMessage: "Спасибо за обращение. Наша команда свяжется с вами в течение 24 часов.",
    offices: "Наши офисы",
    dublinOffice: "Дублин, Ирландия",
    dublinAddress: "Центр Дублина, Ирландия",
    londonOffice: "Лондон, Великобритания",
    londonAddress: "Финансовый район, Лондон",
    dubaiOffice: "Дубай, ОАЭ",
    dubaiAddress: "DIFC, Дубай",
    emailLabel: "Email",
    emailValue: "contact@fincore-banking.com",
    hoursLabel: "Рабочие часы",
    hoursValue: "Пн - Пт: 9:00 - 18:00 GMT",
    followUs: "Подписывайтесь",
  },
  uk: {
    title: "Зв'язатися з нами",
    subtitle: "Готові трансформувати ваші фінансові операції? Наша команда експертів банківських технологій готова допомогти.",
    formTitle: "Запросити демонстрацію",
    formSubtitle: "Заповніть форму, і ми зв'яжемося з вами протягом 24 годин.",
    name: "Повне ім'я",
    email: "Робочий email",
    phone: "Номер телефону",
    company: "Назва компанії",
    jobTitle: "Посада",
    country: "Країна",
    companyType: "Тип компанії",
    companyTypeOptions: {
      bank: "Комерційний банк",
      exchange: "Обмінний пункт",
      remittance: "Компанія грошових переказів",
      microfinance: "Мікрофінансова організація",
      fintech: "Фінтех-компанія",
      other: "Інше",
    },
    message: "Розкажіть про ваші потреби",
    submit: "Надіслати повідомлення",
    sending: "Надсилання...",
    successTitle: "Повідомлення надіслано!",
    successMessage: "Дякуємо за звернення. Наша команда зв'яжеться з вами протягом 24 годин.",
    offices: "Наші офіси",
    dublinOffice: "Дублін, Ірландія",
    dublinAddress: "Центр Дубліна, Ірландія",
    londonOffice: "Лондон, Великобританія",
    londonAddress: "Фінансовий район, Лондон",
    dubaiOffice: "Дубай, ОАЕ",
    dubaiAddress: "DIFC, Дубай",
    emailLabel: "Email",
    emailValue: "contact@fincore-banking.com",
    hoursLabel: "Робочі години",
    hoursValue: "Пн - Пт: 9:00 - 18:00 GMT",
    followUs: "Підписуйтесь",
  },
  tr: {
    title: "İletişime Geçin",
    subtitle: "Finansal operasyonlarınızı dönüştürmeye hazır mısınız? Bankacılık teknolojisi uzmanlarımız yardıma hazır.",
    formTitle: "Demo İsteyin",
    formSubtitle: "Formu doldurun, 24 saat içinde size dönelim.",
    name: "Ad Soyad",
    email: "İş E-postası",
    phone: "Telefon Numarası",
    company: "Şirket Adı",
    jobTitle: "Unvan",
    country: "Ülke",
    companyType: "Şirket Türü",
    companyTypeOptions: {
      bank: "Ticari Banka",
      exchange: "Döviz Bürosu",
      remittance: "Havale Şirketi",
      microfinance: "Mikrofinans Kurumu",
      fintech: "Fintech Şirketi",
      other: "Diğer",
    },
    message: "İhtiyaçlarınızı anlatın",
    submit: "Mesaj Gönder",
    sending: "Gönderiliyor...",
    successTitle: "Mesaj Gönderildi!",
    successMessage: "İletişime geçtiğiniz için teşekkürler. Ekibimiz 24 saat içinde sizinle iletişime geçecek.",
    offices: "Ofislerimiz",
    dublinOffice: "Dublin, İrlanda",
    dublinAddress: "Dublin Şehir Merkezi, İrlanda",
    londonOffice: "Londra, İngiltere",
    londonAddress: "Finans Bölgesi, Londra",
    dubaiOffice: "Dubai, BAE",
    dubaiAddress: "DIFC, Dubai",
    emailLabel: "E-posta",
    emailValue: "contact@fincore-banking.com",
    hoursLabel: "Çalışma Saatleri",
    hoursValue: "Pzt - Cum: 9:00 - 18:00 GMT",
    followUs: "Bizi Takip Edin",
  },
  pl: {
    title: "Skontaktuj się",
    subtitle: "Gotowy do transformacji operacji finansowych? Nasz zespół ekspertów technologii bankowych jest tutaj, aby pomóc.",
    formTitle: "Poproś o demo",
    formSubtitle: "Wypełnij formularz, a skontaktujemy się w ciągu 24 godzin.",
    name: "Imię i nazwisko",
    email: "Służbowy email",
    phone: "Numer telefonu",
    company: "Nazwa firmy",
    jobTitle: "Stanowisko",
    country: "Kraj",
    companyType: "Typ firmy",
    companyTypeOptions: {
      bank: "Bank komercyjny",
      exchange: "Kantor",
      remittance: "Firma przekazów",
      microfinance: "Instytucja mikrofinansowa",
      fintech: "Firma fintech",
      other: "Inne",
    },
    message: "Opowiedz o swoich potrzebach",
    submit: "Wyślij wiadomość",
    sending: "Wysyłanie...",
    successTitle: "Wiadomość wysłana!",
    successMessage: "Dziękujemy za kontakt. Nasz zespół skontaktuje się w ciągu 24 godzin.",
    offices: "Nasze biura",
    dublinOffice: "Dublin, Irlandia",
    dublinAddress: "Centrum Dublina, Irlandia",
    londonOffice: "Londyn, UK",
    londonAddress: "Dzielnica finansowa, Londyn",
    dubaiOffice: "Dubaj, ZEA",
    dubaiAddress: "DIFC, Dubaj",
    emailLabel: "Email",
    emailValue: "contact@fincore-banking.com",
    hoursLabel: "Godziny pracy",
    hoursValue: "Pn - Pt: 9:00 - 18:00 GMT",
    followUs: "Obserwuj nas",
  },
  ro: {
    title: "Contactează-ne",
    subtitle: "Pregătit să transformi operațiunile financiare? Echipa noastră de experți în tehnologie bancară este aici să ajute.",
    formTitle: "Solicită un demo",
    formSubtitle: "Completează formularul și te contactăm în 24 de ore.",
    name: "Nume complet",
    email: "Email de serviciu",
    phone: "Număr de telefon",
    company: "Numele companiei",
    jobTitle: "Titlu",
    country: "Țară",
    companyType: "Tipul companiei",
    companyTypeOptions: {
      bank: "Bancă comercială",
      exchange: "Casă de schimb",
      remittance: "Companie de remitențe",
      microfinance: "Instituție de microfinanțare",
      fintech: "Companie fintech",
      other: "Altele",
    },
    message: "Spune-ne despre nevoile tale",
    submit: "Trimite mesaj",
    sending: "Se trimite...",
    successTitle: "Mesaj trimis!",
    successMessage: "Mulțumim că ne-ai contactat. Echipa noastră te va contacta în 24 de ore.",
    offices: "Birourile noastre",
    dublinOffice: "Dublin, Irlanda",
    dublinAddress: "Centrul Dublin, Irlanda",
    londonOffice: "Londra, UK",
    londonAddress: "Districtul financiar, Londra",
    dubaiOffice: "Dubai, EAU",
    dubaiAddress: "DIFC, Dubai",
    emailLabel: "Email",
    emailValue: "contact@fincore-banking.com",
    hoursLabel: "Program",
    hoursValue: "Lun - Vin: 9:00 - 18:00 GMT",
    followUs: "Urmărește-ne",
  },
  it: {
    title: "Contattaci",
    subtitle: "Pronto a trasformare le tue operazioni finanziarie? Il nostro team di esperti di tecnologia bancaria è qui per aiutarti.",
    formTitle: "Richiedi una demo",
    formSubtitle: "Compila il modulo e ti ricontatteremo entro 24 ore.",
    name: "Nome completo",
    email: "Email aziendale",
    phone: "Numero di telefono",
    company: "Nome azienda",
    jobTitle: "Titolo",
    country: "Paese",
    companyType: "Tipo di azienda",
    companyTypeOptions: {
      bank: "Banca commerciale",
      exchange: "Ufficio di cambio",
      remittance: "Società di rimesse",
      microfinance: "Istituto di microfinanza",
      fintech: "Azienda fintech",
      other: "Altro",
    },
    message: "Raccontaci le tue esigenze",
    submit: "Invia messaggio",
    sending: "Invio...",
    successTitle: "Messaggio inviato!",
    successMessage: "Grazie per averci contattato. Il nostro team ti contatterà entro 24 ore.",
    offices: "I nostri uffici",
    dublinOffice: "Dublino, Irlanda",
    dublinAddress: "Centro di Dublino, Irlanda",
    londonOffice: "Londra, UK",
    londonAddress: "Distretto finanziario, Londra",
    dubaiOffice: "Dubai, EAU",
    dubaiAddress: "DIFC, Dubai",
    emailLabel: "Email",
    emailValue: "contact@fincore-banking.com",
    hoursLabel: "Orari",
    hoursValue: "Lun - Ven: 9:00 - 18:00 GMT",
    followUs: "Seguici",
  },
};

export default function FCContactPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    country: "",
    companyType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SEO Meta
  const seoMeta = {
    en: {
      title: "Contact Us | FinCore Banking Platform",
      description: "Get in touch with FinCore. Request a demo, discuss partnership opportunities, or get support for our banking solutions.",
    },
    ar: {
      title: "تواصل معنا | منصة فين كور البنكية",
      description: "تواصل مع فين كور. اطلب عرضاً توضيحياً أو ناقش فرص الشراكة أو احصل على الدعم لحلولنا البنكية.",
    },
  };

  const currentSeo = seoMeta[language as keyof typeof seoMeta] || seoMeta.en;

  useEffect(() => {
    document.title = currentSeo.title;
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [currentSeo.title, language, dir]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white" dir={dir}>
      <FCHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden min-h-[30vh] flex items-center bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-[#0d1f3c] dark:to-slate-950">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-48 h-48 rounded-full blur-3xl bg-slate-500/5 dark:bg-slate-500/10" />
          <div className="absolute bottom-10 left-20 w-64 h-64 rounded-full blur-3xl bg-teal-500/5 dark:bg-teal-500/10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t.title}
            </motion.h1>
            <motion.p 
              className="text-lg text-slate-600 dark:text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200 dark:border-slate-700">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      {t.successTitle}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {t.successMessage}
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {t.formTitle}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                      {t.formSubtitle}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            {t.name} *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            {t.email} *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            {t.phone}
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            {t.company} *
                          </label>
                          <input
                            type="text"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            {t.jobTitle}
                          </label>
                          <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            {t.companyType} *
                          </label>
                          <select
                            name="companyType"
                            required
                            value={formData.companyType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all"
                          >
                            <option value="">--</option>
                            <option value="bank">{t.companyTypeOptions.bank}</option>
                            <option value="exchange">{t.companyTypeOptions.exchange}</option>
                            <option value="remittance">{t.companyTypeOptions.remittance}</option>
                            <option value="microfinance">{t.companyTypeOptions.microfinance}</option>
                            <option value="fintech">{t.companyTypeOptions.fintech}</option>
                            <option value="other">{t.companyTypeOptions.other}</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          {t.message}
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#0A1628] to-[#1a2d4a] dark:from-[#0D9488] dark:to-[#14B8A6] text-white dark:text-[#0A1628] font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            {t.sending}
                          </>
                        ) : (
                          <>
                            {t.submit}
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  {t.offices}
                </h3>
                <div className="space-y-6">
                  {[
                    { name: t.dublinOffice, address: t.dublinAddress, flag: "🇮🇪" },
                    { name: t.londonOffice, address: t.londonAddress, flag: "🇬🇧" },
                    { name: t.dubaiOffice, address: t.dubaiAddress, flag: "🇦🇪" },
                  ].map((office, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center text-2xl">
                        {office.flag}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {office.name}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {office.address}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#0D9488]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t.emailLabel}</p>
                    <p className="font-medium text-slate-900 dark:text-white">{t.emailValue}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#0D9488]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t.hoursLabel}</p>
                    <p className="font-medium text-slate-900 dark:text-white">{t.hoursValue}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                  {t.followUs}
                </h4>
                <div className="flex gap-3">
                  {[Linkedin, Twitter, Globe].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#0D9488]/10 hover:text-[#0D9488] transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FCFooter />
      <ScrollToTop />
    </div>
  );
}
