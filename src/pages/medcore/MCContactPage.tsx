import React, { useState } from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { MCHeader } from "@/components/medcore/MCHeader";
import { MCFooter } from "@/components/medcore/MCFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle,
  Building2, Users, Calendar, MessageSquare
} from "lucide-react";

const translations = {
  en: {
    title: "Contact Us",
    subtitle: "Get in touch with our healthcare solutions team",
    formTitle: "Send us a message",
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    company: "Hospital/Clinic Name",
    role: "Your Role",
    message: "How can we help?",
    submit: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully! We'll get back to you within 24 hours.",
    officeTitle: "Our Offices",
    dublinOffice: "Dublin, Ireland (HQ)",
    dubaiOffice: "Dubai, UAE",
    istanbulOffice: "Istanbul, Turkey",
    supportTitle: "Support",
    supportDesc: "24/7 Technical Support",
    salesTitle: "Sales",
    salesDesc: "Request a Demo",
    hoursTitle: "Business Hours",
    hoursDesc: "Mon-Fri: 9AM-6PM GMT",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "How long does implementation take?",
    faq1A: "Typical implementation takes 4-8 weeks depending on your institution's size and requirements.",
    faq2Q: "Is MedCore HIPAA compliant?",
    faq2A: "Yes, MedCore is fully HIPAA compliant and meets all international healthcare data standards.",
    faq3Q: "Do you offer training?",
    faq3A: "We provide comprehensive training for all staff members as part of our implementation package.",
    faq4Q: "Can I migrate from my current system?",
    faq4A: "Yes, we offer full data migration services with dedicated support throughout the transition.",
  },
  ar: {
    title: "اتصل بنا",
    subtitle: "تواصل مع فريق حلول الرعاية الصحية لدينا",
    formTitle: "أرسل لنا رسالة",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    company: "اسم المستشفى/العيادة",
    role: "منصبك",
    message: "كيف يمكننا مساعدتك؟",
    submit: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    success: "تم إرسال الرسالة بنجاح! سنرد عليك خلال 24 ساعة.",
    officeTitle: "مكاتبنا",
    dublinOffice: "دبلن، أيرلندا (المقر الرئيسي)",
    dubaiOffice: "دبي، الإمارات",
    istanbulOffice: "إسطنبول، تركيا",
    supportTitle: "الدعم",
    supportDesc: "دعم فني 24/7",
    salesTitle: "المبيعات",
    salesDesc: "طلب عرض توضيحي",
    hoursTitle: "ساعات العمل",
    hoursDesc: "الإثنين-الجمعة: 9 صباحاً-6 مساءً",
    faqTitle: "الأسئلة الشائعة",
    faq1Q: "كم يستغرق التنفيذ؟",
    faq1A: "التنفيذ النموذجي يستغرق 4-8 أسابيع حسب حجم مؤسستك ومتطلباتها.",
    faq2Q: "هل MedCore متوافق مع HIPAA؟",
    faq2A: "نعم، MedCore متوافق تماماً مع HIPAA ويفي بجميع معايير بيانات الرعاية الصحية الدولية.",
    faq3Q: "هل تقدمون التدريب؟",
    faq3A: "نقدم تدريباً شاملاً لجميع الموظفين كجزء من حزمة التنفيذ.",
    faq4Q: "هل يمكنني الانتقال من نظامي الحالي؟",
    faq4A: "نعم، نقدم خدمات ترحيل بيانات كاملة مع دعم مخصص طوال فترة الانتقال.",
  },
  tr: {
    title: "İletişim",
    subtitle: "Sağlık çözümleri ekibimizle iletişime geçin",
    formTitle: "Bize mesaj gönderin",
    name: "Ad Soyad",
    email: "E-posta Adresi",
    phone: "Telefon Numarası",
    company: "Hastane/Klinik Adı",
    role: "Pozisyonunuz",
    message: "Size nasıl yardımcı olabiliriz?",
    submit: "Mesaj Gönder",
    sending: "Gönderiliyor...",
    success: "Mesaj başarıyla gönderildi! 24 saat içinde size dönüş yapacağız.",
    officeTitle: "Ofislerimiz",
    dublinOffice: "Dublin, İrlanda (Merkez)",
    dubaiOffice: "Dubai, BAE",
    istanbulOffice: "İstanbul, Türkiye",
    supportTitle: "Destek",
    supportDesc: "7/24 Teknik Destek",
    salesTitle: "Satış",
    salesDesc: "Demo Talep Edin",
    hoursTitle: "Çalışma Saatleri",
    hoursDesc: "Pzt-Cum: 9:00-18:00",
    faqTitle: "Sık Sorulan Sorular",
    faq1Q: "Kurulum ne kadar sürer?",
    faq1A: "Tipik kurulum, kurumunuzun büyüklüğüne ve gereksinimlerine bağlı olarak 4-8 hafta sürer.",
    faq2Q: "MedCore HIPAA uyumlu mu?",
    faq2A: "Evet, MedCore tamamen HIPAA uyumludur ve tüm uluslararası sağlık veri standartlarını karşılar.",
    faq3Q: "Eğitim veriyor musunuz?",
    faq3A: "Uygulama paketimizin bir parçası olarak tüm personel için kapsamlı eğitim sunuyoruz.",
    faq4Q: "Mevcut sistemimden geçiş yapabilir miyim?",
    faq4A: "Evet, geçiş boyunca özel destekle tam veri taşıma hizmetleri sunuyoruz.",
  },
  ru: {
    title: "Свяжитесь с нами",
    subtitle: "Свяжитесь с нашей командой медицинских решений",
    formTitle: "Отправьте нам сообщение",
    name: "Полное имя",
    email: "Email адрес",
    phone: "Номер телефона",
    company: "Название больницы/клиники",
    role: "Ваша должность",
    message: "Чем мы можем помочь?",
    submit: "Отправить сообщение",
    sending: "Отправка...",
    success: "Сообщение успешно отправлено! Мы ответим в течение 24 часов.",
    officeTitle: "Наши офисы",
    dublinOffice: "Дублин, Ирландия (Штаб)",
    dubaiOffice: "Дубай, ОАЭ",
    istanbulOffice: "Стамбул, Турция",
    supportTitle: "Поддержка",
    supportDesc: "Техподдержка 24/7",
    salesTitle: "Продажи",
    salesDesc: "Запросить демо",
    hoursTitle: "Рабочие часы",
    hoursDesc: "Пн-Пт: 9:00-18:00",
    faqTitle: "Часто задаваемые вопросы",
    faq1Q: "Сколько времени занимает внедрение?",
    faq1A: "Типичное внедрение занимает 4-8 недель в зависимости от размера и требований вашего учреждения.",
    faq2Q: "MedCore соответствует HIPAA?",
    faq2A: "Да, MedCore полностью соответствует HIPAA и всем международным стандартам медицинских данных.",
    faq3Q: "Вы проводите обучение?",
    faq3A: "Мы предоставляем комплексное обучение для всего персонала как часть пакета внедрения.",
    faq4Q: "Могу ли я мигрировать с текущей системы?",
    faq4A: "Да, мы предлагаем полные услуги миграции данных с выделенной поддержкой на протяжении всего перехода.",
  },
  fr: {
    title: "Contactez-nous",
    subtitle: "Contactez notre équipe de solutions santé",
    formTitle: "Envoyez-nous un message",
    name: "Nom complet",
    email: "Adresse email",
    phone: "Numéro de téléphone",
    company: "Nom de l'hôpital/clinique",
    role: "Votre fonction",
    message: "Comment pouvons-nous vous aider?",
    submit: "Envoyer le message",
    sending: "Envoi en cours...",
    success: "Message envoyé avec succès! Nous vous répondrons dans les 24 heures.",
    officeTitle: "Nos bureaux",
    dublinOffice: "Dublin, Irlande (Siège)",
    dubaiOffice: "Dubaï, EAU",
    istanbulOffice: "Istanbul, Turquie",
    supportTitle: "Support",
    supportDesc: "Support technique 24/7",
    salesTitle: "Ventes",
    salesDesc: "Demander une démo",
    hoursTitle: "Heures d'ouverture",
    hoursDesc: "Lun-Ven: 9h-18h",
    faqTitle: "Questions fréquentes",
    faq1Q: "Combien de temps dure l'implémentation?",
    faq1A: "L'implémentation typique prend 4-8 semaines selon la taille et les exigences de votre établissement.",
    faq2Q: "MedCore est-il conforme HIPAA?",
    faq2A: "Oui, MedCore est entièrement conforme HIPAA et répond à toutes les normes internationales de données de santé.",
    faq3Q: "Proposez-vous des formations?",
    faq3A: "Nous fournissons une formation complète pour tout le personnel dans le cadre de notre package d'implémentation.",
    faq4Q: "Puis-je migrer depuis mon système actuel?",
    faq4A: "Oui, nous offrons des services complets de migration de données avec un support dédié tout au long de la transition.",
  },
  de: {
    title: "Kontakt",
    subtitle: "Kontaktieren Sie unser Healthcare-Lösungsteam",
    formTitle: "Senden Sie uns eine Nachricht",
    name: "Vollständiger Name",
    email: "E-Mail-Adresse",
    phone: "Telefonnummer",
    company: "Krankenhaus-/Klinikname",
    role: "Ihre Position",
    message: "Wie können wir Ihnen helfen?",
    submit: "Nachricht senden",
    sending: "Wird gesendet...",
    success: "Nachricht erfolgreich gesendet! Wir melden uns innerhalb von 24 Stunden.",
    officeTitle: "Unsere Büros",
    dublinOffice: "Dublin, Irland (Hauptsitz)",
    dubaiOffice: "Dubai, VAE",
    istanbulOffice: "Istanbul, Türkei",
    supportTitle: "Support",
    supportDesc: "24/7 Technischer Support",
    salesTitle: "Vertrieb",
    salesDesc: "Demo anfordern",
    hoursTitle: "Geschäftszeiten",
    hoursDesc: "Mo-Fr: 9-18 Uhr",
    faqTitle: "Häufig gestellte Fragen",
    faq1Q: "Wie lange dauert die Implementierung?",
    faq1A: "Die typische Implementierung dauert 4-8 Wochen, abhängig von Größe und Anforderungen Ihrer Einrichtung.",
    faq2Q: "Ist MedCore HIPAA-konform?",
    faq2A: "Ja, MedCore ist vollständig HIPAA-konform und erfüllt alle internationalen Standards für Gesundheitsdaten.",
    faq3Q: "Bieten Sie Schulungen an?",
    faq3A: "Wir bieten umfassende Schulungen für alle Mitarbeiter als Teil unseres Implementierungspakets.",
    faq4Q: "Kann ich von meinem aktuellen System migrieren?",
    faq4A: "Ja, wir bieten vollständige Datenmigrationsdienste mit dediziertem Support während des gesamten Übergangs.",
  },
  nl: {
    title: "Contact",
    subtitle: "Neem contact op met ons zorgoplossingenteam",
    formTitle: "Stuur ons een bericht",
    name: "Volledige naam",
    email: "E-mailadres",
    phone: "Telefoonnummer",
    company: "Ziekenhuis/Kliniek naam",
    role: "Uw functie",
    message: "Hoe kunnen wij u helpen?",
    submit: "Bericht verzenden",
    sending: "Verzenden...",
    success: "Bericht succesvol verzonden! We nemen binnen 24 uur contact met u op.",
    officeTitle: "Onze kantoren",
    dublinOffice: "Dublin, Ierland (Hoofdkantoor)",
    dubaiOffice: "Dubai, VAE",
    istanbulOffice: "Istanbul, Turkije",
    supportTitle: "Ondersteuning",
    supportDesc: "24/7 Technische ondersteuning",
    salesTitle: "Verkoop",
    salesDesc: "Demo aanvragen",
    hoursTitle: "Openingstijden",
    hoursDesc: "Ma-Vr: 9:00-18:00",
    faqTitle: "Veelgestelde vragen",
    faq1Q: "Hoe lang duurt de implementatie?",
    faq1A: "Typische implementatie duurt 4-8 weken, afhankelijk van de grootte en vereisten van uw instelling.",
    faq2Q: "Is MedCore HIPAA-compliant?",
    faq2A: "Ja, MedCore is volledig HIPAA-compliant en voldoet aan alle internationale normen voor gezondheidsgegevens.",
    faq3Q: "Biedt u training aan?",
    faq3A: "Wij bieden uitgebreide training voor alle medewerkers als onderdeel van ons implementatiepakket.",
    faq4Q: "Kan ik migreren vanaf mijn huidige systeem?",
    faq4A: "Ja, wij bieden volledige datamigratie diensten met toegewijde ondersteuning tijdens de hele overgang.",
  },
  it: {
    title: "Contattaci",
    subtitle: "Contatta il nostro team di soluzioni sanitarie",
    formTitle: "Inviaci un messaggio",
    name: "Nome completo",
    email: "Indirizzo email",
    phone: "Numero di telefono",
    company: "Nome ospedale/clinica",
    role: "Il tuo ruolo",
    message: "Come possiamo aiutarti?",
    submit: "Invia messaggio",
    sending: "Invio in corso...",
    success: "Messaggio inviato con successo! Ti risponderemo entro 24 ore.",
    officeTitle: "I nostri uffici",
    dublinOffice: "Dublino, Irlanda (Sede centrale)",
    dubaiOffice: "Dubai, EAU",
    istanbulOffice: "Istanbul, Turchia",
    supportTitle: "Supporto",
    supportDesc: "Supporto tecnico 24/7",
    salesTitle: "Vendite",
    salesDesc: "Richiedi una demo",
    hoursTitle: "Orari di apertura",
    hoursDesc: "Lun-Ven: 9:00-18:00",
    faqTitle: "Domande frequenti",
    faq1Q: "Quanto tempo richiede l'implementazione?",
    faq1A: "L'implementazione tipica richiede 4-8 settimane a seconda delle dimensioni e dei requisiti della tua struttura.",
    faq2Q: "MedCore è conforme HIPAA?",
    faq2A: "Sì, MedCore è pienamente conforme HIPAA e soddisfa tutti gli standard internazionali sui dati sanitari.",
    faq3Q: "Offrite formazione?",
    faq3A: "Forniamo formazione completa per tutto il personale come parte del nostro pacchetto di implementazione.",
    faq4Q: "Posso migrare dal mio sistema attuale?",
    faq4A: "Sì, offriamo servizi completi di migrazione dati con supporto dedicato durante tutta la transizione.",
  },
  uk: {
    title: "Зв'яжіться з нами",
    subtitle: "Зв'яжіться з нашою командою медичних рішень",
    formTitle: "Надішліть нам повідомлення",
    name: "Повне ім'я",
    email: "Електронна адреса",
    phone: "Номер телефону",
    company: "Назва лікарні/клініки",
    role: "Ваша посада",
    message: "Чим ми можемо допомогти?",
    submit: "Надіслати повідомлення",
    sending: "Надсилання...",
    success: "Повідомлення успішно надіслано! Ми відповімо протягом 24 годин.",
    officeTitle: "Наші офіси",
    dublinOffice: "Дублін, Ірландія (Штаб-квартира)",
    dubaiOffice: "Дубай, ОАЕ",
    istanbulOffice: "Стамбул, Туреччина",
    supportTitle: "Підтримка",
    supportDesc: "Техпідтримка 24/7",
    salesTitle: "Продажі",
    salesDesc: "Запросити демо",
    hoursTitle: "Години роботи",
    hoursDesc: "Пн-Пт: 9:00-18:00",
    faqTitle: "Часті запитання",
    faq1Q: "Скільки часу займає впровадження?",
    faq1A: "Типове впровадження займає 4-8 тижнів залежно від розміру та вимог вашого закладу.",
    faq2Q: "MedCore відповідає HIPAA?",
    faq2A: "Так, MedCore повністю відповідає HIPAA та всім міжнародним стандартам медичних даних.",
    faq3Q: "Ви проводите навчання?",
    faq3A: "Ми надаємо комплексне навчання для всього персоналу як частину пакету впровадження.",
    faq4Q: "Чи можу я мігрувати з поточної системи?",
    faq4A: "Так, ми пропонуємо повні послуги міграції даних з виділеною підтримкою протягом усього переходу.",
  },
};

export default function MCContactPage() {
  const { language, isRTL } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
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
    setFormState({ name: "", email: "", phone: "", company: "", role: "", message: "" });
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactInfo = [
    { icon: Mail, title: t.supportTitle, desc: t.supportDesc, value: "support@medcore.health" },
    { icon: Phone, title: t.salesTitle, desc: t.salesDesc, value: "+353 1 234 5678" },
    { icon: Clock, title: t.hoursTitle, desc: t.hoursDesc, value: "GMT+0" },
  ];

  const offices = [
    { city: t.dublinOffice, address: "123 Health Street, Dublin 2", phone: "+353 1 234 5678" },
    { city: t.dubaiOffice, address: "Healthcare City, Building A5", phone: "+971 4 567 8901" },
    { city: t.istanbulOffice, address: "Levent, Tower Plaza 12th Floor", phone: "+90 212 345 6789" },
  ];

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900" dir={isRTL ? "rtl" : "ltr"}>
      <MCHeader />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 via-emerald-50 to-white dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{info.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{info.desc}</p>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {t.formTitle}
              </h2>
              
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-700 dark:text-green-300">{t.success}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {t.name}
                    </label>
                    <Input
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      className="bg-white dark:bg-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {t.email}
                    </label>
                    <Input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="bg-white dark:bg-slate-800"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {t.phone}
                    </label>
                    <Input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="bg-white dark:bg-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {t.company}
                    </label>
                    <Input
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="bg-white dark:bg-slate-800"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t.role}
                  </label>
                  <Input
                    value={formState.role}
                    onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                    className="bg-white dark:bg-slate-800"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t.message}
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-emerald-700 text-white py-6"
                >
                  {isSubmitting ? t.sending : t.submit}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </motion.div>

            {/* Offices & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Offices */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {t.officeTitle}
                </h2>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.city} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">{office.city}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{office.address}</p>
                          <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">{office.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {t.faqTitle}
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <p className="font-semibold text-slate-900 dark:text-white mb-2">{faq.q}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <MCFooter />
      <ScrollToTop />
    </div>
  );
}
