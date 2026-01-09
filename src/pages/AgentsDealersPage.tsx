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

// Multi-language translations for Agents & Dealers page
const translations = {
  en: {
    badge: "Partnership & Marketing Program",
    heroTitle: "Start Your Own Business",
    heroTitleHighlight: "& Earn 30%",
    heroDescription: "Market TexaFab in your city and earn 30% commission on every sale. We provide training, marketing materials, and full support for free!",
    applyNow: "Apply Now",
    contactUs: "Contact Us",
    whyPartner: "Why Become a TexaFab Partner?",
    whyPartnerDesc: "We provide everything you need to succeed in selling the best textile ERP system",
    howItWorks: "How Does It Work?",
    howItWorksDesc: "4 simple steps to start your journey with us",
    successStories: "Partner Success Stories",
    successStoriesDesc: "Our partners achieve amazing results - you could be next!",
    applyNowSection: "Apply Now",
    applyNowDesc: "Fill the form and we'll contact you within 24 hours",
    fullName: "Full Name *",
    enterName: "Enter your name",
    email: "Email *",
    phone: "Phone (WhatsApp) *",
    cityCountry: "City / Country *",
    cityExample: "e.g., Dubai, UAE",
    salesExperience: "Your Sales Experience",
    select: "Select...",
    noExperience: "No previous experience",
    years1_2: "1-2 years",
    years3_5: "3-5 years",
    years5plus: "5+ years",
    marketingPlan: "How will you market the product?",
    marketingPlanPlaceholder: "Tell us about your marketing plan...",
    agreeTerms: "I agree to the partnership program terms and privacy policy",
    submitApplication: "Submit Application",
    contactViaWhatsApp: "We'll contact you within 24 hours via WhatsApp",
    inMonths: "in",
    months: "months",
    weeks: "weeks",
    // Features
    fixedCommission: "Fixed 30% Commission",
    fixedCommissionDesc: "Earn 30% on every sale you make - no limits!",
    ownTerritory: "Own Your Territory",
    ownTerritoryDesc: "Become the exclusive TexaFab representative in your city or region",
    freeTraining: "Complete Free Training",
    freeTrainingDesc: "We train you on everything: product, selling, demos, closing deals",
    marketingMaterials: "Ready Marketing Materials",
    marketingMaterialsDesc: "We provide presentations, videos, and ready marketing content",
    recurringIncome: "Recurring Income",
    recurringIncomeDesc: "Earn commissions on annual subscription renewals",
    fullSupport: "Full Technical Support",
    fullSupportDesc: "Our team handles technical support for your clients - you just sell!",
    // Steps
    registerPartner: "Register as Partner",
    registerPartnerDesc: "Fill the registration form and we'll contact you within 24 hours",
    getTraining: "Get Trained",
    getTrainingDesc: "We train you on the product, sales techniques, and closing",
    startMarketing: "Start Marketing",
    startMarketingDesc: "Use ready materials and start reaching potential clients",
    earn30: "Earn 30%",
    earn30Desc: "Get your commission upon closing each deal",
    // Success Stories
    story1Name: "Mohammed from Dubai",
    story1Period: "in 2 months",
    story1Quote: "Started as a hobby, now it's my main income!",
    story2Name: "Sara from Cairo",
    story2Period: "in 6 weeks",
    story2Quote: "The support and training were excellent!",
    story3Name: "Ahmed from Riyadh",
    story3Period: "in 4 months",
    story3Quote: "Best decision I've made in my career"
  },
  ar: {
    badge: "برنامج الشراكة والتسويق",
    heroTitle: "ابدأ مشروعك الخاص",
    heroTitleHighlight: "واكسب 30%",
    heroDescription: "سوّق نظام TexaFab في مدينتك واحصل على عمولة 30% من كل عملية بيع. نوفر لك التدريب والمواد التسويقية والدعم الكامل مجاناً!",
    applyNow: "قدّم طلبك الآن",
    contactUs: "تواصل معنا",
    whyPartner: "لماذا تصبح شريكاً لـ TexaFab؟",
    whyPartnerDesc: "نقدم لك كل ما تحتاجه للنجاح في بيع أفضل نظام ERP للنسيج",
    howItWorks: "كيف تعمل الشراكة؟",
    howItWorksDesc: "4 خطوات بسيطة لبدء رحلتك معنا",
    successStories: "قصص نجاح شركائنا",
    successStoriesDesc: "شركاؤنا يحققون نتائج مذهلة - وأنت التالي!",
    applyNowSection: "قدّم طلبك الآن",
    applyNowDesc: "أملأ النموذج وسنتواصل معك خلال 24 ساعة",
    fullName: "الاسم الكامل *",
    enterName: "أدخل اسمك",
    email: "البريد الإلكتروني *",
    phone: "رقم الهاتف (واتساب) *",
    cityCountry: "المدينة / الدولة *",
    cityExample: "مثال: دبي، الإمارات",
    salesExperience: "خبرتك في المبيعات",
    select: "اختر...",
    noExperience: "لا خبرة سابقة",
    years1_2: "1-2 سنوات",
    years3_5: "3-5 سنوات",
    years5plus: "أكثر من 5 سنوات",
    marketingPlan: "كيف ستسوّق البرنامج؟",
    marketingPlanPlaceholder: "اشرح لنا خطتك للتسويق...",
    agreeTerms: "أوافق على شروط وأحكام برنامج الشراكة وسياسة الخصوصية",
    submitApplication: "إرسال الطلب",
    contactViaWhatsApp: "سنتواصل معك خلال 24 ساعة عبر الواتساب",
    inMonths: "في",
    months: "أشهر",
    weeks: "أسابيع",
    // Features
    fixedCommission: "عمولة 30% ثابتة",
    fixedCommissionDesc: "احصل على 30% من كل عملية بيع تقوم بها - بدون حدود!",
    ownTerritory: "احتكر منطقتك",
    ownTerritoryDesc: "كن الممثل الحصري لـ TexaFab في مدينتك أو منطقتك",
    freeTraining: "تدريب مجاني كامل",
    freeTrainingDesc: "ندربك على كل شيء: المنتج، البيع، العرض، الإغلاق",
    marketingMaterials: "مواد تسويقية جاهزة",
    marketingMaterialsDesc: "نوفر لك عروض وفيديوهات ومحتوى جاهز للتسويق",
    recurringIncome: "دخل متكرر",
    recurringIncomeDesc: "اكسب عمولات على تجديد الاشتراكات السنوية",
    fullSupport: "دعم فني كامل",
    fullSupportDesc: "فريقنا يتولى الدعم الفني لعملائك - أنت تبيع فقط!",
    // Steps
    registerPartner: "سجّل كشريك",
    registerPartnerDesc: "أملأ نموذج التسجيل وسنتواصل معك خلال 24 ساعة",
    getTraining: "احصل على التدريب",
    getTrainingDesc: "ندربك على المنتج وتقنيات البيع والإغلاق",
    startMarketing: "ابدأ التسويق",
    startMarketingDesc: "استخدم المواد الجاهزة وابدأ بالتواصل مع العملاء المحتملين",
    earn30: "اكسب 30%",
    earn30Desc: "احصل على عمولتك فور إتمام كل صفقة",
    // Success Stories
    story1Name: "محمد من دبي",
    story1Period: "في شهرين",
    story1Quote: "بدأت كهواية وأصبحت مصدر دخل رئيسي!",
    story2Name: "سارة من القاهرة",
    story2Period: "في 6 أسابيع",
    story2Quote: "الدعم والتدريب كانا ممتازين!",
    story3Name: "أحمد من الرياض",
    story3Period: "في 4 أشهر",
    story3Quote: "أفضل قرار اتخذته في حياتي المهنية"
  },
  tr: {
    badge: "Ortaklık ve Pazarlama Programı",
    heroTitle: "Kendi İşinizi Kurun",
    heroTitleHighlight: "ve %30 Kazanın",
    heroDescription: "TexaFab'ı şehrinizde pazarlayın ve her satıştan %30 komisyon kazanın. Eğitim, pazarlama materyalleri ve tam destek ücretsiz!",
    applyNow: "Şimdi Başvur",
    contactUs: "Bize Ulaşın",
    whyPartner: "Neden TexaFab Ortağı Olmalısınız?",
    whyPartnerDesc: "En iyi tekstil ERP sistemini satmada başarılı olmanız için ihtiyacınız olan her şeyi sağlıyoruz",
    howItWorks: "Nasıl Çalışır?",
    howItWorksDesc: "Bizimle yolculuğunuza başlamak için 4 basit adım",
    successStories: "Ortak Başarı Hikayeleri",
    successStoriesDesc: "Ortaklarımız harika sonuçlar elde ediyor - sıradaki siz olabilirsiniz!",
    applyNowSection: "Şimdi Başvur",
    applyNowDesc: "Formu doldurun, 24 saat içinde sizinle iletişime geçeceğiz",
    fullName: "Tam Adınız *",
    enterName: "Adınızı girin",
    email: "E-posta *",
    phone: "Telefon (WhatsApp) *",
    cityCountry: "Şehir / Ülke *",
    cityExample: "örn., Dubai, BAE",
    salesExperience: "Satış Deneyiminiz",
    select: "Seçin...",
    noExperience: "Deneyim yok",
    years1_2: "1-2 yıl",
    years3_5: "3-5 yıl",
    years5plus: "5+ yıl",
    marketingPlan: "Ürünü nasıl pazarlayacaksınız?",
    marketingPlanPlaceholder: "Pazarlama planınızı anlatın...",
    agreeTerms: "Ortaklık programı şartlarını ve gizlilik politikasını kabul ediyorum",
    submitApplication: "Başvuruyu Gönder",
    contactViaWhatsApp: "24 saat içinde WhatsApp üzerinden sizinle iletişime geçeceğiz",
    inMonths: "içinde",
    months: "ay",
    weeks: "hafta",
    // Features
    fixedCommission: "Sabit %30 Komisyon",
    fixedCommissionDesc: "Yaptığınız her satıştan %30 kazanın - limit yok!",
    ownTerritory: "Bölgenizin Sahibi Olun",
    ownTerritoryDesc: "Şehrinizde veya bölgenizde özel TexaFab temsilcisi olun",
    freeTraining: "Tam Ücretsiz Eğitim",
    freeTrainingDesc: "Her konuda eğitim veriyoruz: ürün, satış, demo, anlaşma kapama",
    marketingMaterials: "Hazır Pazarlama Materyalleri",
    marketingMaterialsDesc: "Sunumlar, videolar ve hazır pazarlama içeriği sağlıyoruz",
    recurringIncome: "Tekrarlayan Gelir",
    recurringIncomeDesc: "Yıllık abonelik yenilemelerinden komisyon kazanın",
    fullSupport: "Tam Teknik Destek",
    fullSupportDesc: "Ekibimiz müşterilerinize teknik destek sağlar - siz sadece satın!",
    // Steps
    registerPartner: "Ortak Olarak Kayıt Olun",
    registerPartnerDesc: "Kayıt formunu doldurun, 24 saat içinde sizinle iletişime geçeceğiz",
    getTraining: "Eğitim Alın",
    getTrainingDesc: "Ürün, satış teknikleri ve kapanış konusunda eğitim veriyoruz",
    startMarketing: "Pazarlamaya Başlayın",
    startMarketingDesc: "Hazır materyalleri kullanın ve potansiyel müşterilere ulaşmaya başlayın",
    earn30: "%30 Kazanın",
    earn30Desc: "Her anlaşmayı kapattığınızda komisyonunuzu alın",
    // Success Stories
    story1Name: "Dubai'den Muhammed",
    story1Period: "2 ayda",
    story1Quote: "Hobi olarak başladı, şimdi ana gelirim!",
    story2Name: "Kahire'den Sara",
    story2Period: "6 haftada",
    story2Quote: "Destek ve eğitim mükemmeldi!",
    story3Name: "Riyad'dan Ahmed",
    story3Period: "4 ayda",
    story3Quote: "Kariyerimde aldığım en iyi karar"
  },
  ru: {
    badge: "Партнерская и маркетинговая программа",
    heroTitle: "Начните свой бизнес",
    heroTitleHighlight: "и зарабатывайте 30%",
    heroDescription: "Продавайте TexaFab в вашем городе и получайте 30% комиссии с каждой продажи. Мы бесплатно предоставляем обучение, маркетинговые материалы и полную поддержку!",
    applyNow: "Подать заявку",
    contactUs: "Свяжитесь с нами",
    whyPartner: "Почему стать партнером TexaFab?",
    whyPartnerDesc: "Мы предоставляем все необходимое для успешных продаж лучшей текстильной ERP-системы",
    howItWorks: "Как это работает?",
    howItWorksDesc: "4 простых шага, чтобы начать путь с нами",
    successStories: "Истории успеха партнеров",
    successStoriesDesc: "Наши партнеры достигают потрясающих результатов - вы можете быть следующим!",
    applyNowSection: "Подать заявку",
    applyNowDesc: "Заполните форму, и мы свяжемся с вами в течение 24 часов",
    fullName: "Полное имя *",
    enterName: "Введите ваше имя",
    email: "Email *",
    phone: "Телефон (WhatsApp) *",
    cityCountry: "Город / Страна *",
    cityExample: "напр., Дубай, ОАЭ",
    salesExperience: "Ваш опыт продаж",
    select: "Выберите...",
    noExperience: "Нет опыта",
    years1_2: "1-2 года",
    years3_5: "3-5 лет",
    years5plus: "5+ лет",
    marketingPlan: "Как вы будете продвигать продукт?",
    marketingPlanPlaceholder: "Расскажите о вашем маркетинговом плане...",
    agreeTerms: "Я согласен с условиями партнерской программы и политикой конфиденциальности",
    submitApplication: "Отправить заявку",
    contactViaWhatsApp: "Мы свяжемся с вами в течение 24 часов через WhatsApp",
    inMonths: "за",
    months: "месяца",
    weeks: "недель",
    // Features
    fixedCommission: "Фиксированная комиссия 30%",
    fixedCommissionDesc: "Зарабатывайте 30% с каждой продажи - без ограничений!",
    ownTerritory: "Владейте своей территорией",
    ownTerritoryDesc: "Станьте эксклюзивным представителем TexaFab в вашем городе или регионе",
    freeTraining: "Полное бесплатное обучение",
    freeTrainingDesc: "Мы обучаем всему: продукт, продажи, демонстрации, закрытие сделок",
    marketingMaterials: "Готовые маркетинговые материалы",
    marketingMaterialsDesc: "Мы предоставляем презентации, видео и готовый маркетинговый контент",
    recurringIncome: "Повторяющийся доход",
    recurringIncomeDesc: "Зарабатывайте комиссии на ежегодных продлениях подписки",
    fullSupport: "Полная техническая поддержка",
    fullSupportDesc: "Наша команда обеспечивает техническую поддержку ваших клиентов - вы просто продаете!",
    // Steps
    registerPartner: "Зарегистрируйтесь как партнер",
    registerPartnerDesc: "Заполните форму регистрации, и мы свяжемся с вами в течение 24 часов",
    getTraining: "Пройдите обучение",
    getTrainingDesc: "Мы обучаем продукту, техникам продаж и закрытию сделок",
    startMarketing: "Начните маркетинг",
    startMarketingDesc: "Используйте готовые материалы и начинайте работать с потенциальными клиентами",
    earn30: "Зарабатывайте 30%",
    earn30Desc: "Получайте комиссию при закрытии каждой сделки",
    // Success Stories
    story1Name: "Мохаммед из Дубая",
    story1Period: "за 2 месяца",
    story1Quote: "Началось как хобби, теперь это мой основной доход!",
    story2Name: "Сара из Каира",
    story2Period: "за 6 недель",
    story2Quote: "Поддержка и обучение были отличными!",
    story3Name: "Ахмед из Эр-Рияда",
    story3Period: "за 4 месяца",
    story3Quote: "Лучшее решение в моей карьере"
  },
  uk: {
    badge: "Партнерська та маркетингова програма",
    heroTitle: "Почніть свій бізнес",
    heroTitleHighlight: "та заробляйте 30%",
    heroDescription: "Продавайте TexaFab у вашому місті та отримуйте 30% комісії з кожного продажу. Ми безкоштовно надаємо навчання, маркетингові матеріали та повну підтримку!",
    applyNow: "Подати заявку",
    contactUs: "Зв'яжіться з нами",
    whyPartner: "Чому стати партнером TexaFab?",
    whyPartnerDesc: "Ми надаємо все необхідне для успішних продажів найкращої текстильної ERP-системи",
    howItWorks: "Як це працює?",
    howItWorksDesc: "4 прості кроки, щоб почати шлях з нами",
    successStories: "Історії успіху партнерів",
    successStoriesDesc: "Наші партнери досягають чудових результатів - ви можете бути наступним!",
    applyNowSection: "Подати заявку",
    applyNowDesc: "Заповніть форму, і ми зв'яжемося з вами протягом 24 годин",
    fullName: "Повне ім'я *",
    enterName: "Введіть ваше ім'я",
    email: "Email *",
    phone: "Телефон (WhatsApp) *",
    cityCountry: "Місто / Країна *",
    cityExample: "напр., Дубай, ОАЕ",
    salesExperience: "Ваш досвід продажів",
    select: "Виберіть...",
    noExperience: "Немає досвіду",
    years1_2: "1-2 роки",
    years3_5: "3-5 років",
    years5plus: "5+ років",
    marketingPlan: "Як ви будете просувати продукт?",
    marketingPlanPlaceholder: "Розкажіть про ваш маркетинговий план...",
    agreeTerms: "Я погоджуюся з умовами партнерської програми та політикою конфіденційності",
    submitApplication: "Надіслати заявку",
    contactViaWhatsApp: "Ми зв'яжемося з вами протягом 24 годин через WhatsApp",
    inMonths: "за",
    months: "місяці",
    weeks: "тижнів",
    // Features
    fixedCommission: "Фіксована комісія 30%",
    fixedCommissionDesc: "Заробляйте 30% з кожного продажу - без обмежень!",
    ownTerritory: "Володійте своєю територією",
    ownTerritoryDesc: "Станьте ексклюзивним представником TexaFab у вашому місті чи регіоні",
    freeTraining: "Повне безкоштовне навчання",
    freeTrainingDesc: "Ми навчаємо всьому: продукт, продажі, демонстрації, закриття угод",
    marketingMaterials: "Готові маркетингові матеріали",
    marketingMaterialsDesc: "Ми надаємо презентації, відео та готовий маркетинговий контент",
    recurringIncome: "Повторюваний дохід",
    recurringIncomeDesc: "Заробляйте комісії на щорічних продовженнях підписки",
    fullSupport: "Повна технічна підтримка",
    fullSupportDesc: "Наша команда забезпечує технічну підтримку ваших клієнтів - ви просто продаєте!",
    // Steps
    registerPartner: "Зареєструйтеся як партнер",
    registerPartnerDesc: "Заповніть форму реєстрації, і ми зв'яжемося з вами протягом 24 годин",
    getTraining: "Пройдіть навчання",
    getTrainingDesc: "Ми навчаємо продукту, технікам продажів та закриттю угод",
    startMarketing: "Почніть маркетинг",
    startMarketingDesc: "Використовуйте готові матеріали та починайте працювати з потенційними клієнтами",
    earn30: "Заробляйте 30%",
    earn30Desc: "Отримуйте комісію при закритті кожної угоди",
    // Success Stories
    story1Name: "Мохаммед з Дубая",
    story1Period: "за 2 місяці",
    story1Quote: "Почалося як хобі, тепер це мій основний дохід!",
    story2Name: "Сара з Каїру",
    story2Period: "за 6 тижнів",
    story2Quote: "Підтримка та навчання були чудовими!",
    story3Name: "Ахмед з Ер-Ріяду",
    story3Period: "за 4 місяці",
    story3Quote: "Найкраще рішення в моїй кар'єрі"
  },
  pl: {
    badge: "Program Partnerski i Marketingowy",
    heroTitle: "Rozpocznij własny biznes",
    heroTitleHighlight: "i zarabiaj 30%",
    heroDescription: "Sprzedawaj TexaFab w swoim mieście i zarabiaj 30% prowizji od każdej sprzedaży. Zapewniamy bezpłatne szkolenia, materiały marketingowe i pełne wsparcie!",
    applyNow: "Aplikuj teraz",
    contactUs: "Skontaktuj się z nami",
    whyPartner: "Dlaczego zostać partnerem TexaFab?",
    whyPartnerDesc: "Zapewniamy wszystko, czego potrzebujesz, aby odnieść sukces w sprzedaży najlepszego systemu ERP dla tekstyliów",
    howItWorks: "Jak to działa?",
    howItWorksDesc: "4 proste kroki, aby rozpocząć podróż z nami",
    successStories: "Historie sukcesu partnerów",
    successStoriesDesc: "Nasi partnerzy osiągają niesamowite wyniki - ty możesz być następny!",
    applyNowSection: "Aplikuj teraz",
    applyNowDesc: "Wypełnij formularz, a skontaktujemy się z tobą w ciągu 24 godzin",
    fullName: "Pełne imię i nazwisko *",
    enterName: "Wpisz swoje imię",
    email: "Email *",
    phone: "Telefon (WhatsApp) *",
    cityCountry: "Miasto / Kraj *",
    cityExample: "np. Dubaj, ZEA",
    salesExperience: "Twoje doświadczenie w sprzedaży",
    select: "Wybierz...",
    noExperience: "Brak doświadczenia",
    years1_2: "1-2 lata",
    years3_5: "3-5 lat",
    years5plus: "5+ lat",
    marketingPlan: "Jak będziesz promować produkt?",
    marketingPlanPlaceholder: "Opowiedz nam o swoim planie marketingowym...",
    agreeTerms: "Zgadzam się z warunkami programu partnerskiego i polityką prywatności",
    submitApplication: "Wyślij aplikację",
    contactViaWhatsApp: "Skontaktujemy się z tobą w ciągu 24 godzin przez WhatsApp",
    inMonths: "w",
    months: "miesiące",
    weeks: "tygodnie",
    // Features
    fixedCommission: "Stała prowizja 30%",
    fixedCommissionDesc: "Zarabiaj 30% z każdej sprzedaży - bez limitów!",
    ownTerritory: "Posiadaj swoje terytorium",
    ownTerritoryDesc: "Zostań wyłącznym przedstawicielem TexaFab w swoim mieście lub regionie",
    freeTraining: "Pełne bezpłatne szkolenie",
    freeTrainingDesc: "Szkolimy cię we wszystkim: produkt, sprzedaż, dema, zamykanie transakcji",
    marketingMaterials: "Gotowe materiały marketingowe",
    marketingMaterialsDesc: "Zapewniamy prezentacje, filmy i gotowe treści marketingowe",
    recurringIncome: "Powtarzający się dochód",
    recurringIncomeDesc: "Zarabiaj prowizje od rocznych odnowień subskrypcji",
    fullSupport: "Pełne wsparcie techniczne",
    fullSupportDesc: "Nasz zespół zapewnia wsparcie techniczne dla twoich klientów - ty tylko sprzedajesz!",
    // Steps
    registerPartner: "Zarejestruj się jako partner",
    registerPartnerDesc: "Wypełnij formularz rejestracyjny, a skontaktujemy się w ciągu 24 godzin",
    getTraining: "Odbierz szkolenie",
    getTrainingDesc: "Szkolimy z produktu, technik sprzedaży i zamykania transakcji",
    startMarketing: "Rozpocznij marketing",
    startMarketingDesc: "Użyj gotowych materiałów i zacznij docierać do potencjalnych klientów",
    earn30: "Zarabiaj 30%",
    earn30Desc: "Otrzymuj prowizję przy zamykaniu każdej transakcji",
    // Success Stories
    story1Name: "Mohammed z Dubaju",
    story1Period: "w 2 miesiące",
    story1Quote: "Zaczęło się jako hobby, teraz to mój główny dochód!",
    story2Name: "Sara z Kairu",
    story2Period: "w 6 tygodni",
    story2Quote: "Wsparcie i szkolenie były doskonałe!",
    story3Name: "Ahmed z Rijadu",
    story3Period: "w 4 miesiące",
    story3Quote: "Najlepsza decyzja w mojej karierze"
  },
  ro: {
    badge: "Program de Parteneriat și Marketing",
    heroTitle: "Începe-ți propria afacere",
    heroTitleHighlight: "și câștigă 30%",
    heroDescription: "Comercializează TexaFab în orașul tău și câștigă 30% comision din fiecare vânzare. Oferim instruire, materiale de marketing și suport complet gratuit!",
    applyNow: "Aplică acum",
    contactUs: "Contactează-ne",
    whyPartner: "De ce să devii partener TexaFab?",
    whyPartnerDesc: "Îți oferim tot ce ai nevoie pentru a avea succes în vânzarea celui mai bun sistem ERP pentru textile",
    howItWorks: "Cum funcționează?",
    howItWorksDesc: "4 pași simpli pentru a-ți începe călătoria cu noi",
    successStories: "Povești de succes ale partenerilor",
    successStoriesDesc: "Partenerii noștri obțin rezultate uimitoare - tu poți fi următorul!",
    applyNowSection: "Aplică acum",
    applyNowDesc: "Completează formularul și te vom contacta în 24 de ore",
    fullName: "Nume complet *",
    enterName: "Introdu numele tău",
    email: "Email *",
    phone: "Telefon (WhatsApp) *",
    cityCountry: "Oraș / Țară *",
    cityExample: "ex., Dubai, EAU",
    salesExperience: "Experiența ta în vânzări",
    select: "Selectează...",
    noExperience: "Fără experiență",
    years1_2: "1-2 ani",
    years3_5: "3-5 ani",
    years5plus: "5+ ani",
    marketingPlan: "Cum vei promova produsul?",
    marketingPlanPlaceholder: "Spune-ne despre planul tău de marketing...",
    agreeTerms: "Sunt de acord cu termenii programului de parteneriat și politica de confidențialitate",
    submitApplication: "Trimite aplicația",
    contactViaWhatsApp: "Te vom contacta în 24 de ore prin WhatsApp",
    inMonths: "în",
    months: "luni",
    weeks: "săptămâni",
    // Features
    fixedCommission: "Comision fix de 30%",
    fixedCommissionDesc: "Câștigă 30% din fiecare vânzare - fără limite!",
    ownTerritory: "Deține-ți teritoriul",
    ownTerritoryDesc: "Devino reprezentantul exclusiv TexaFab în orașul sau regiunea ta",
    freeTraining: "Instruire completă gratuită",
    freeTrainingDesc: "Te instruim în toate: produs, vânzare, demo-uri, închiderea tranzacțiilor",
    marketingMaterials: "Materiale de marketing gata",
    marketingMaterialsDesc: "Oferim prezentări, videoclipuri și conținut de marketing gata de utilizare",
    recurringIncome: "Venit recurent",
    recurringIncomeDesc: "Câștigă comisioane la reînnoirile anuale ale abonamentelor",
    fullSupport: "Suport tehnic complet",
    fullSupportDesc: "Echipa noastră asigură suportul tehnic pentru clienții tăi - tu doar vinzi!",
    // Steps
    registerPartner: "Înregistrează-te ca partener",
    registerPartnerDesc: "Completează formularul de înregistrare și te vom contacta în 24 de ore",
    getTraining: "Primește instruire",
    getTrainingDesc: "Te instruim despre produs, tehnici de vânzare și închidere",
    startMarketing: "Începe marketingul",
    startMarketingDesc: "Folosește materialele gata și începe să ajungi la clienți potențiali",
    earn30: "Câștigă 30%",
    earn30Desc: "Primește-ți comisionul la închiderea fiecărei tranzacții",
    // Success Stories
    story1Name: "Mohammed din Dubai",
    story1Period: "în 2 luni",
    story1Quote: "A început ca hobby, acum e venitul meu principal!",
    story2Name: "Sara din Cairo",
    story2Period: "în 6 săptămâni",
    story2Quote: "Suportul și instruirea au fost excelente!",
    story3Name: "Ahmed din Riyadh",
    story3Period: "în 4 luni",
    story3Quote: "Cea mai bună decizie din cariera mea"
  }
};

type TranslationKey = keyof typeof translations.en;

function AgentsDealersContent() {
  const { language, dir } = useLanguage();
  
  // Get translation based on current language, fallback to English
  const t = translations[language as keyof typeof translations] || translations.en;

  const features = [
    {
      icon: Percent,
      title: t.fixedCommission,
      desc: t.fixedCommissionDesc,
      color: "from-texafab-gold to-amber-500"
    },
    {
      icon: MapPin,
      title: t.ownTerritory,
      desc: t.ownTerritoryDesc,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Award,
      title: t.freeTraining,
      desc: t.freeTrainingDesc,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Gift,
      title: t.marketingMaterials,
      desc: t.marketingMaterialsDesc,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: t.recurringIncome,
      desc: t.recurringIncomeDesc,
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Users,
      title: t.fullSupport,
      desc: t.fullSupportDesc,
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: t.registerPartner,
      desc: t.registerPartnerDesc,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "2",
      title: t.getTraining,
      desc: t.getTrainingDesc,
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "3",
      title: t.startMarketing,
      desc: t.startMarketingDesc,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      step: "4",
      title: t.earn30,
      desc: t.earn30Desc,
      color: "from-texafab-gold to-amber-500"
    }
  ];

  const successStories = [
    { 
      name: t.story1Name,
      earnings: "$12,000",
      period: t.story1Period,
      quote: t.story1Quote
    },
    { 
      name: t.story2Name,
      earnings: "$8,500",
      period: t.story2Period,
      quote: t.story2Quote
    },
    { 
      name: t.story3Name,
      earnings: "$25,000",
      period: t.story3Period,
      quote: t.story3Quote
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
                {t.badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-texafab-slate dark:text-white mb-6 leading-tight">
              {t.heroTitle} <span className="text-texafab-gold">{t.heroTitleHighlight}</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="h-14 px-8 bg-gradient-to-r from-texafab-gold to-amber-500 hover:from-amber-500 hover:to-texafab-gold text-white text-base font-semibold rounded-xl shadow-lg shadow-amber-500/25" onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.applyNow}
                <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="h-14 px-8 border-2 text-base font-semibold rounded-xl">
                  {t.contactUs}
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
              {t.whyPartner}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.whyPartnerDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.desc}
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
              {t.howItWorks}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t.howItWorksDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <Card key={index} className="p-6 bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl text-center hover:shadow-xl transition-all relative overflow-hidden">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 text-3xl font-bold text-white`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-texafab-slate dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.desc}
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
              {t.successStories}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t.successStoriesDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
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
              {t.applyNowSection}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {t.applyNowDesc}
            </p>
          </div>

          <Card className="p-8 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2 font-medium">
                    {t.fullName}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-texafab-gold"
                    placeholder={t.enterName}
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    {t.email}
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-texafab-gold"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    {t.phone}
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-texafab-gold"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    {t.cityCountry}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-texafab-gold"
                    placeholder={t.cityExample}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  {t.salesExperience}
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-texafab-gold">
                  <option value="" className="text-gray-900">{t.select}</option>
                  <option value="none" className="text-gray-900">{t.noExperience}</option>
                  <option value="1-2" className="text-gray-900">{t.years1_2}</option>
                  <option value="3-5" className="text-gray-900">{t.years3_5}</option>
                  <option value="5+" className="text-gray-900">{t.years5plus}</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  {t.marketingPlan}
                </label>
                <textarea 
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-texafab-gold resize-none"
                  placeholder={t.marketingPlanPlaceholder}
                />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-white/20 bg-white/10" />
                <label className="text-gray-300 text-sm">
                  {t.agreeTerms}
                </label>
              </div>

              <Button className="w-full h-14 bg-gradient-to-r from-texafab-gold to-amber-500 hover:from-amber-500 hover:to-texafab-gold text-white text-lg font-bold rounded-xl shadow-lg">
                {t.submitApplication}
                <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </Button>

              <p className="text-center text-gray-400 text-sm">
                {t.contactViaWhatsApp}
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
