import React, { useEffect, useState } from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { NRHeader } from "@/components/nextrev/NRHeader";
import { NRFooter } from "@/components/nextrev/NRFooter";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Mail, Clock, Send, CheckCircle2,
  Building2, Linkedin, Twitter, Globe, MessageSquare, Loader2
} from "lucide-react";

const translations = {
  en: {
    pageTitle: "Contact Us",
    pageSubtitle: "Let's discuss how we can help transform your business",
    
    // Form
    formTitle: "Send us a message",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    company: "Company Name",
    companySize: "Company Size",
    selectSize: "Select company size",
    size1: "1-50 employees",
    size2: "51-200 employees",
    size3: "201-1000 employees",
    size4: "1000+ employees",
    subject: "Subject",
    selectSubject: "Select a subject",
    subjectSales: "Sales Inquiry",
    subjectSupport: "Technical Support",
    subjectPartnership: "Partnership",
    subjectCareers: "Careers",
    subjectOther: "Other",
    message: "Message",
    messagePlaceholder: "Tell us about your project or requirements...",
    submit: "Send Message",
    sending: "Sending...",
    successTitle: "Message Sent!",
    successMessage: "Thank you for reaching out. Our team will get back to you within 24 hours.",
    
    // Contact Info
    contactInfo: "Contact Information",
    headquarters: "Headquarters",
    addressLine1: "Next Revolution Ltd.",
    addressLine2: "Grand Canal Dock",
    addressLine3: "Dublin 2, Ireland",
    emailLabel: "Email",
    emailValue: "info@nextrevolution.io",
    hoursLabel: "Business Hours",
    hoursValue: "Mon - Fri: 9:00 AM - 6:00 PM (GMT)",
    
    // Offices
    officesTitle: "Our Offices",
    dublinOffice: "Dublin, Ireland",
    dublinDesc: "European Headquarters",
    warsawOffice: "Warsaw, Poland",
    warsawDesc: "Central European Hub",
    bucharestOffice: "Bucharest, Romania",
    bucharestDesc: "Eastern European Operations",
    kyivOffice: "Kyiv, Ukraine",
    kyivDesc: "Development Center",
    
    // Social
    followUs: "Follow Us",
    
    // FAQ
    faqTitle: "Frequently Asked Questions",
    faq1Q: "How quickly can you start a new project?",
    faq1A: "We typically begin discovery within 1-2 weeks of contract signing. Urgent projects can be fast-tracked.",
    faq2Q: "Do you offer support after project delivery?",
    faq2A: "Yes, we offer comprehensive SLA-backed support packages including 24/7 enterprise support options.",
    faq3Q: "What industries do you specialize in?",
    faq3A: "We specialize in FinTech, Banking, Government, Enterprise, and Manufacturing sectors."
  },
  ar: {
    pageTitle: "تواصل معنا",
    pageSubtitle: "لنناقش كيف يمكننا المساعدة في تحويل عملك",
    
    formTitle: "أرسل لنا رسالة",
    firstName: "الاسم الأول",
    lastName: "الاسم الأخير",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    company: "اسم الشركة",
    companySize: "حجم الشركة",
    selectSize: "اختر حجم الشركة",
    size1: "1-50 موظف",
    size2: "51-200 موظف",
    size3: "201-1000 موظف",
    size4: "+1000 موظف",
    subject: "الموضوع",
    selectSubject: "اختر موضوعاً",
    subjectSales: "استفسار مبيعات",
    subjectSupport: "دعم تقني",
    subjectPartnership: "شراكة",
    subjectCareers: "وظائف",
    subjectOther: "أخرى",
    message: "الرسالة",
    messagePlaceholder: "أخبرنا عن مشروعك أو متطلباتك...",
    submit: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    successTitle: "تم إرسال الرسالة!",
    successMessage: "شكراً للتواصل معنا. سيرد فريقنا خلال 24 ساعة.",
    
    contactInfo: "معلومات التواصل",
    headquarters: "المقر الرئيسي",
    addressLine1: "نيكست ريفوليوشن المحدودة",
    addressLine2: "جراند كانال دوك",
    addressLine3: "دبلن 2، أيرلندا",
    emailLabel: "البريد الإلكتروني",
    emailValue: "info@nextrevolution.io",
    hoursLabel: "ساعات العمل",
    hoursValue: "الإثنين - الجمعة: 9:00 ص - 6:00 م (GMT)",
    
    officesTitle: "مكاتبنا",
    dublinOffice: "دبلن، أيرلندا",
    dublinDesc: "المقر الأوروبي الرئيسي",
    warsawOffice: "وارسو، بولندا",
    warsawDesc: "مركز أوروبا الوسطى",
    bucharestOffice: "بوخارست، رومانيا",
    bucharestDesc: "عمليات أوروبا الشرقية",
    kyivOffice: "كييف، أوكرانيا",
    kyivDesc: "مركز التطوير",
    
    followUs: "تابعنا",
    
    faqTitle: "الأسئلة الشائعة",
    faq1Q: "ما مدى سرعة بدء مشروع جديد؟",
    faq1A: "نبدأ عادة مرحلة الاكتشاف خلال 1-2 أسبوع من توقيع العقد.",
    faq2Q: "هل تقدمون دعماً بعد تسليم المشروع؟",
    faq2A: "نعم، نقدم حزم دعم شاملة مدعومة باتفاقيات مستوى الخدمة.",
    faq3Q: "ما هي الصناعات التي تتخصصون فيها؟",
    faq3A: "نتخصص في قطاعات التقنية المالية والبنوك والحكومة والمؤسسات والتصنيع."
  },
  ru: {
    pageTitle: "Свяжитесь с нами",
    pageSubtitle: "Давайте обсудим, как мы можем помочь трансформировать ваш бизнес",
    
    formTitle: "Отправьте нам сообщение",
    firstName: "Имя",
    lastName: "Фамилия",
    email: "Email",
    phone: "Телефон",
    company: "Компания",
    companySize: "Размер компании",
    selectSize: "Выберите размер",
    size1: "1-50 сотрудников",
    size2: "51-200 сотрудников",
    size3: "201-1000 сотрудников",
    size4: "1000+ сотрудников",
    subject: "Тема",
    selectSubject: "Выберите тему",
    subjectSales: "Продажи",
    subjectSupport: "Техподдержка",
    subjectPartnership: "Партнёрство",
    subjectCareers: "Карьера",
    subjectOther: "Другое",
    message: "Сообщение",
    messagePlaceholder: "Расскажите о вашем проекте...",
    submit: "Отправить",
    sending: "Отправка...",
    successTitle: "Сообщение отправлено!",
    successMessage: "Спасибо за обращение. Наша команда ответит в течение 24 часов.",
    
    contactInfo: "Контактная информация",
    headquarters: "Штаб-квартира",
    addressLine1: "Next Revolution Ltd.",
    addressLine2: "Grand Canal Dock",
    addressLine3: "Дублин 2, Ирландия",
    emailLabel: "Email",
    emailValue: "info@nextrevolution.io",
    hoursLabel: "Часы работы",
    hoursValue: "Пн - Пт: 9:00 - 18:00 (GMT)",
    
    officesTitle: "Наши офисы",
    dublinOffice: "Дублин, Ирландия",
    dublinDesc: "Европейская штаб-квартира",
    warsawOffice: "Варшава, Польша",
    warsawDesc: "Центральноевропейский хаб",
    bucharestOffice: "Бухарест, Румыния",
    bucharestDesc: "Восточноевропейские операции",
    kyivOffice: "Киев, Украина",
    kyivDesc: "Центр разработки",
    
    followUs: "Мы в соцсетях",
    
    faqTitle: "Частые вопросы",
    faq1Q: "Как быстро вы можете начать проект?",
    faq1A: "Обычно мы начинаем в течение 1-2 недель после подписания контракта.",
    faq2Q: "Предоставляете ли вы поддержку после сдачи проекта?",
    faq2A: "Да, мы предлагаем комплексные пакеты поддержки с SLA.",
    faq3Q: "В каких отраслях вы специализируетесь?",
    faq3A: "FinTech, Банкинг, Госсектор, Enterprise, Производство."
  },
  uk: {
    pageTitle: "Зв'яжіться з нами",
    pageSubtitle: "Давайте обговоримо, як ми можемо допомогти трансформувати ваш бізнес",
    
    formTitle: "Надішліть нам повідомлення",
    firstName: "Ім'я",
    lastName: "Прізвище",
    email: "Email",
    phone: "Телефон",
    company: "Компанія",
    companySize: "Розмір компанії",
    selectSize: "Виберіть розмір",
    size1: "1-50 співробітників",
    size2: "51-200 співробітників",
    size3: "201-1000 співробітників",
    size4: "1000+ співробітників",
    subject: "Тема",
    selectSubject: "Виберіть тему",
    subjectSales: "Продажі",
    subjectSupport: "Техпідтримка",
    subjectPartnership: "Партнерство",
    subjectCareers: "Кар'єра",
    subjectOther: "Інше",
    message: "Повідомлення",
    messagePlaceholder: "Розкажіть про ваш проект...",
    submit: "Надіслати",
    sending: "Надсилання...",
    successTitle: "Повідомлення надіслано!",
    successMessage: "Дякуємо за звернення. Наша команда відповість протягом 24 годин.",
    
    contactInfo: "Контактна інформація",
    headquarters: "Штаб-квартира",
    addressLine1: "Next Revolution Ltd.",
    addressLine2: "Grand Canal Dock",
    addressLine3: "Дублін 2, Ірландія",
    emailLabel: "Email",
    emailValue: "info@nextrevolution.io",
    hoursLabel: "Години роботи",
    hoursValue: "Пн - Пт: 9:00 - 18:00 (GMT)",
    
    officesTitle: "Наші офіси",
    dublinOffice: "Дублін, Ірландія",
    dublinDesc: "Європейська штаб-квартира",
    warsawOffice: "Варшава, Польща",
    warsawDesc: "Центральноєвропейський хаб",
    bucharestOffice: "Бухарест, Румунія",
    bucharestDesc: "Східноєвропейські операції",
    kyivOffice: "Київ, Україна",
    kyivDesc: "Центр розробки",
    
    followUs: "Ми в соцмережах",
    
    faqTitle: "Часті запитання",
    faq1Q: "Як швидко ви можете почати проект?",
    faq1A: "Зазвичай ми починаємо протягом 1-2 тижнів після підписання контракту.",
    faq2Q: "Чи надаєте ви підтримку після здачі проекту?",
    faq2A: "Так, ми пропонуємо комплексні пакети підтримки з SLA.",
    faq3Q: "В яких галузях ви спеціалізуєтесь?",
    faq3A: "FinTech, Банкінг, Держсектор, Enterprise, Виробництво."
  },
  tr: {
    pageTitle: "İletişim",
    pageSubtitle: "İşletmenizi nasıl dönüştürebileceğimizi konuşalım",
    
    formTitle: "Bize mesaj gönderin",
    firstName: "Ad",
    lastName: "Soyad",
    email: "E-posta",
    phone: "Telefon",
    company: "Şirket",
    companySize: "Şirket Büyüklüğü",
    selectSize: "Büyüklük seçin",
    size1: "1-50 çalışan",
    size2: "51-200 çalışan",
    size3: "201-1000 çalışan",
    size4: "1000+ çalışan",
    subject: "Konu",
    selectSubject: "Konu seçin",
    subjectSales: "Satış",
    subjectSupport: "Teknik Destek",
    subjectPartnership: "Ortaklık",
    subjectCareers: "Kariyer",
    subjectOther: "Diğer",
    message: "Mesaj",
    messagePlaceholder: "Projeniz hakkında bilgi verin...",
    submit: "Gönder",
    sending: "Gönderiliyor...",
    successTitle: "Mesaj Gönderildi!",
    successMessage: "İletişim için teşekkürler. Ekibimiz 24 saat içinde yanıt verecek.",
    
    contactInfo: "İletişim Bilgileri",
    headquarters: "Merkez",
    addressLine1: "Next Revolution Ltd.",
    addressLine2: "Grand Canal Dock",
    addressLine3: "Dublin 2, İrlanda",
    emailLabel: "E-posta",
    emailValue: "info@nextrevolution.io",
    hoursLabel: "Çalışma Saatleri",
    hoursValue: "Pzt - Cum: 9:00 - 18:00 (GMT)",
    
    officesTitle: "Ofislerimiz",
    dublinOffice: "Dublin, İrlanda",
    dublinDesc: "Avrupa Merkezi",
    warsawOffice: "Varşova, Polonya",
    warsawDesc: "Orta Avrupa Hub'ı",
    bucharestOffice: "Bükreş, Romanya",
    bucharestDesc: "Doğu Avrupa Operasyonları",
    kyivOffice: "Kiev, Ukrayna",
    kyivDesc: "Geliştirme Merkezi",
    
    followUs: "Bizi Takip Edin",
    
    faqTitle: "Sık Sorulan Sorular",
    faq1Q: "Yeni bir projeye ne kadar hızlı başlayabilirsiniz?",
    faq1A: "Genellikle sözleşme imzalandıktan 1-2 hafta içinde başlarız.",
    faq2Q: "Proje tesliminden sonra destek sunuyor musunuz?",
    faq2A: "Evet, SLA destekli kapsamlı destek paketleri sunuyoruz.",
    faq3Q: "Hangi sektörlerde uzmanlaşıyorsunuz?",
    faq3A: "FinTech, Bankacılık, Kamu, Kurumsal, Üretim."
  },
  pl: {
    pageTitle: "Kontakt",
    pageSubtitle: "Porozmawiajmy o tym, jak możemy pomóc w transformacji Twojej firmy",
    
    formTitle: "Wyślij nam wiadomość",
    firstName: "Imię",
    lastName: "Nazwisko",
    email: "Email",
    phone: "Telefon",
    company: "Firma",
    companySize: "Wielkość firmy",
    selectSize: "Wybierz wielkość",
    size1: "1-50 pracowników",
    size2: "51-200 pracowników",
    size3: "201-1000 pracowników",
    size4: "1000+ pracowników",
    subject: "Temat",
    selectSubject: "Wybierz temat",
    subjectSales: "Sprzedaż",
    subjectSupport: "Wsparcie techniczne",
    subjectPartnership: "Partnerstwo",
    subjectCareers: "Kariera",
    subjectOther: "Inne",
    message: "Wiadomość",
    messagePlaceholder: "Opowiedz nam o swoim projekcie...",
    submit: "Wyślij",
    sending: "Wysyłanie...",
    successTitle: "Wiadomość wysłana!",
    successMessage: "Dziękujemy za kontakt. Nasz zespół odpowie w ciągu 24 godzin.",
    
    contactInfo: "Informacje kontaktowe",
    headquarters: "Siedziba główna",
    addressLine1: "Next Revolution Ltd.",
    addressLine2: "Grand Canal Dock",
    addressLine3: "Dublin 2, Irlandia",
    emailLabel: "Email",
    emailValue: "info@nextrevolution.io",
    hoursLabel: "Godziny pracy",
    hoursValue: "Pon - Pt: 9:00 - 18:00 (GMT)",
    
    officesTitle: "Nasze biura",
    dublinOffice: "Dublin, Irlandia",
    dublinDesc: "Europejska siedziba główna",
    warsawOffice: "Warszawa, Polska",
    warsawDesc: "Hub Europy Środkowej",
    bucharestOffice: "Bukareszt, Rumunia",
    bucharestDesc: "Operacje Europy Wschodniej",
    kyivOffice: "Kijów, Ukraina",
    kyivDesc: "Centrum rozwoju",
    
    followUs: "Śledź nas",
    
    faqTitle: "Najczęściej zadawane pytania",
    faq1Q: "Jak szybko możecie rozpocząć nowy projekt?",
    faq1A: "Zazwyczaj zaczynamy w ciągu 1-2 tygodni od podpisania umowy.",
    faq2Q: "Czy oferujecie wsparcie po dostarczeniu projektu?",
    faq2A: "Tak, oferujemy kompleksowe pakiety wsparcia z SLA.",
    faq3Q: "W jakich branżach się specjalizujecie?",
    faq3A: "FinTech, Bankowość, Sektor publiczny, Enterprise, Produkcja."
  },
  ro: {
    pageTitle: "Contact",
    pageSubtitle: "Să discutăm cum vă putem ajuta să vă transformați afacerea",
    
    formTitle: "Trimiteți-ne un mesaj",
    firstName: "Prenume",
    lastName: "Nume",
    email: "Email",
    phone: "Telefon",
    company: "Companie",
    companySize: "Dimensiunea companiei",
    selectSize: "Selectați dimensiunea",
    size1: "1-50 angajați",
    size2: "51-200 angajați",
    size3: "201-1000 angajați",
    size4: "1000+ angajați",
    subject: "Subiect",
    selectSubject: "Selectați subiectul",
    subjectSales: "Vânzări",
    subjectSupport: "Suport tehnic",
    subjectPartnership: "Parteneriat",
    subjectCareers: "Cariere",
    subjectOther: "Altele",
    message: "Mesaj",
    messagePlaceholder: "Spuneți-ne despre proiectul dvs...",
    submit: "Trimite",
    sending: "Se trimite...",
    successTitle: "Mesaj trimis!",
    successMessage: "Mulțumim pentru contact. Echipa noastră va răspunde în 24 de ore.",
    
    contactInfo: "Informații de contact",
    headquarters: "Sediu central",
    addressLine1: "Next Revolution Ltd.",
    addressLine2: "Grand Canal Dock",
    addressLine3: "Dublin 2, Irlanda",
    emailLabel: "Email",
    emailValue: "info@nextrevolution.io",
    hoursLabel: "Program",
    hoursValue: "Lun - Vin: 9:00 - 18:00 (GMT)",
    
    officesTitle: "Birourile noastre",
    dublinOffice: "Dublin, Irlanda",
    dublinDesc: "Sediul European",
    warsawOffice: "Varșovia, Polonia",
    warsawDesc: "Hub-ul Europei Centrale",
    bucharestOffice: "București, România",
    bucharestDesc: "Operațiuni Europa de Est",
    kyivOffice: "Kiev, Ucraina",
    kyivDesc: "Centru de dezvoltare",
    
    followUs: "Urmăriți-ne",
    
    faqTitle: "Întrebări frecvente",
    faq1Q: "Cât de repede puteți începe un proiect nou?",
    faq1A: "De obicei începem în 1-2 săptămâni de la semnarea contractului.",
    faq2Q: "Oferiți suport după livrarea proiectului?",
    faq2A: "Da, oferim pachete complete de suport cu SLA.",
    faq3Q: "În ce industrii vă specializați?",
    faq3A: "FinTech, Banking, Guvern, Enterprise, Producție."
  },
  it: {
    pageTitle: "Contattaci",
    pageSubtitle: "Parliamo di come possiamo aiutarti a trasformare la tua azienda",
    
    formTitle: "Inviaci un messaggio",
    firstName: "Nome",
    lastName: "Cognome",
    email: "Email",
    phone: "Telefono",
    company: "Azienda",
    companySize: "Dimensione azienda",
    selectSize: "Seleziona dimensione",
    size1: "1-50 dipendenti",
    size2: "51-200 dipendenti",
    size3: "201-1000 dipendenti",
    size4: "1000+ dipendenti",
    subject: "Oggetto",
    selectSubject: "Seleziona oggetto",
    subjectSales: "Vendite",
    subjectSupport: "Supporto tecnico",
    subjectPartnership: "Partnership",
    subjectCareers: "Carriere",
    subjectOther: "Altro",
    message: "Messaggio",
    messagePlaceholder: "Raccontaci del tuo progetto...",
    submit: "Invia",
    sending: "Invio...",
    successTitle: "Messaggio inviato!",
    successMessage: "Grazie per averci contattato. Il nostro team risponderà entro 24 ore.",
    
    contactInfo: "Informazioni di contatto",
    headquarters: "Sede centrale",
    addressLine1: "Next Revolution Ltd.",
    addressLine2: "Grand Canal Dock",
    addressLine3: "Dublino 2, Irlanda",
    emailLabel: "Email",
    emailValue: "info@nextrevolution.io",
    hoursLabel: "Orari",
    hoursValue: "Lun - Ven: 9:00 - 18:00 (GMT)",
    
    officesTitle: "I nostri uffici",
    dublinOffice: "Dublino, Irlanda",
    dublinDesc: "Sede Europea",
    warsawOffice: "Varsavia, Polonia",
    warsawDesc: "Hub Europa Centrale",
    bucharestOffice: "Bucarest, Romania",
    bucharestDesc: "Operazioni Europa Est",
    kyivOffice: "Kiev, Ucraina",
    kyivDesc: "Centro di sviluppo",
    
    followUs: "Seguici",
    
    faqTitle: "Domande frequenti",
    faq1Q: "Quanto velocemente potete iniziare un nuovo progetto?",
    faq1A: "Di solito iniziamo entro 1-2 settimane dalla firma del contratto.",
    faq2Q: "Offrite supporto dopo la consegna del progetto?",
    faq2A: "Sì, offriamo pacchetti di supporto completi con SLA.",
    faq3Q: "In quali settori siete specializzati?",
    faq3A: "FinTech, Banking, Governo, Enterprise, Manifatturiero."
  }
};

export default function NRContactPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      companySize: "",
      subject: "",
      message: ""
    });
  };

  const offices = [
    { name: t.dublinOffice, desc: t.dublinDesc, flag: "🇮🇪" },
    { name: t.warsawOffice, desc: t.warsawDesc, flag: "🇵🇱" },
    { name: t.bucharestOffice, desc: t.bucharestDesc, flag: "🇷🇴" },
    { name: t.kyivOffice, desc: t.kyivDesc, flag: "🇺🇦" },
  ];

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
  ];

  // SEO Meta
  const seoMeta = {
    en: {
      title: "Contact Us | Next Revolution - Enterprise Software Company",
      description: "Get in touch with Next Revolution. Offices in Ireland, UK, UAE. Request a demo, discuss partnership opportunities, or get support for our enterprise solutions."
    },
    ar: {
      title: "تواصل معنا | نيكست ريفوليوشن - شركة برمجيات المؤسسات",
      description: "تواصل مع نيكست ريفوليوشن. مكاتب في أيرلندا، المملكة المتحدة، الإمارات. اطلب عرضاً توضيحياً أو ناقش فرص الشراكة."
    }
  };

  const currentSeo = seoMeta[language as keyof typeof seoMeta] || seoMeta.en;

  useEffect(() => {
    document.title = currentSeo.title;
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [currentSeo.title, language, dir]);

  return (
    <div className="min-h-screen bg-slate-950 text-white" dir={dir}>
      <NRHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.pageTitle}</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t.pageSubtitle}</p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">{t.formTitle}</h2>
              
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t.successTitle}</h3>
                  <p className="text-slate-400">{t.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t.firstName}</label>
                      <input
                        type="text"
                        required
                        value={formState.firstName}
                        onChange={(e) => setFormState({...formState, firstName: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t.lastName}</label>
                      <input
                        type="text"
                        required
                        value={formState.lastName}
                        onChange={(e) => setFormState({...formState, lastName: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t.email}</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t.phone}</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                        dir="ltr"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t.company}</label>
                      <input
                        type="text"
                        required
                        value={formState.company}
                        onChange={(e) => setFormState({...formState, company: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t.companySize}</label>
                      <select
                        value={formState.companySize}
                        onChange={(e) => setFormState({...formState, companySize: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">{t.selectSize}</option>
                        <option value="1-50">{t.size1}</option>
                        <option value="51-200">{t.size2}</option>
                        <option value="201-1000">{t.size3}</option>
                        <option value="1000+">{t.size4}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t.subject}</label>
                    <select
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="">{t.selectSubject}</option>
                      <option value="sales">{t.subjectSales}</option>
                      <option value="support">{t.subjectSupport}</option>
                      <option value="partnership">{t.subjectPartnership}</option>
                      <option value="careers">{t.subjectCareers}</option>
                      <option value="other">{t.subjectOther}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t.message}</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      placeholder={t.messagePlaceholder}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
              )}
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Main Contact Card */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{t.contactInfo}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">{t.headquarters}</h3>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                      <div className="text-slate-300">
                        <p>{t.addressLine1}</p>
                        <p>{t.addressLine2}</p>
                        <p>{t.addressLine3}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <div>
                      <span className="text-sm text-slate-400">{t.emailLabel}: </span>
                      <span className="text-slate-300">{t.emailValue}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <div>
                      <span className="text-sm text-slate-400">{t.hoursLabel}: </span>
                      <span className="text-slate-300">{t.hoursValue}</span>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">{t.followUs}</h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-blue-400 flex items-center justify-center transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors">
                      <Globe className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Offices Grid */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-6">{t.officesTitle}</h2>
                <div className="grid grid-cols-2 gap-4">
                  {offices.map((office, index) => (
                    <div key={index} className="p-4 bg-slate-700/50 rounded-xl">
                      <span className="text-2xl mb-2 block">{office.flag}</span>
                      <h3 className="font-semibold text-white text-sm">{office.name}</h3>
                      <p className="text-slate-400 text-xs">{office.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">{t.faqTitle}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <h3 className="font-semibold text-white mb-2 flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-slate-400 ltr:ml-8 rtl:mr-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <NRFooter />
      <ScrollToTop />
    </div>
  );
}
