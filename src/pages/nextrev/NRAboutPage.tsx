import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { NRHeader } from "@/components/nextrev/NRHeader";
import { NRFooter } from "@/components/nextrev/NRFooter";
import { 
  ArrowRight, ArrowLeft, Globe, Users, Target, Award, 
  Building2, Lightbulb, Heart, Rocket, CheckCircle2,
  MapPin, Calendar, TrendingUp, Shield, Sparkles
} from "lucide-react";

const translations = {
  en: {
    pageTitle: "About Us",
    pageSubtitle: "Building the Future of Enterprise Technology",
    
    // Story Section
    storyTitle: "Our Story",
    storyP1: "Founded in Dublin, Ireland, Next Revolution emerged from a vision to bridge the gap between cutting-edge technology and enterprise needs. What started as a small team of passionate developers has grown into a leading European technology company.",
    storyP2: "Today, we serve Fortune 500 companies across 40+ countries, delivering mission-critical solutions that power modern businesses. Our Irish-European heritage instills in us a commitment to quality, innovation, and trust.",
    
    // Timeline
    timelineTitle: "Our Journey",
    timeline2018: "Company Founded",
    timeline2018Desc: "Started with 5 engineers in Dublin",
    timeline2020: "European Expansion",
    timeline2020Desc: "Offices in Poland, Romania, Ukraine",
    timeline2022: "TexaCore Launch",
    timeline2022Desc: "Enterprise ERP platform released",
    timeline2024: "Global Reach",
    timeline2024Desc: "40+ countries, 500+ enterprise clients",
    
    // Mission & Vision
    missionTitle: "Our Mission",
    missionText: "To empower enterprises worldwide with innovative, secure, and scalable technology solutions that drive growth and operational excellence.",
    
    visionTitle: "Our Vision",
    visionText: "To become the most trusted technology partner for enterprises seeking digital transformation, setting the standard for quality and innovation in the industry.",
    
    // Values
    valuesTitle: "Our Values",
    value1Title: "Innovation First",
    value1Desc: "We constantly push boundaries to deliver cutting-edge solutions",
    value2Title: "Trust & Security",
    value2Desc: "Security is not an afterthought—it's built into everything we do",
    value3Title: "Client Success",
    value3Desc: "Your success is our success. We're partners, not just vendors",
    value4Title: "Global Excellence",
    value4Desc: "European quality standards applied to global challenges",
    
    // Team Section
    teamTitle: "Leadership Team",
    teamSubtitle: "Experienced leaders driving innovation",
    
    ceoName: "Michael O'Sullivan",
    ceoRole: "CEO & Founder",
    ceoBio: "25+ years in enterprise technology",
    
    ctoName: "Dr. Elena Kowalski",
    ctoRole: "Chief Technology Officer",
    ctoBio: "Former Google AI researcher",
    
    cfoName: "Ahmed Hassan",
    cfoRole: "Chief Financial Officer",
    cfoBio: "Ex-KPMG Partner, FinTech specialist",
    
    cooName: "Maria Popescu",
    cooRole: "Chief Operations Officer",
    cooBio: "20+ years in enterprise operations",
    
    // Stats
    stat1: "500+",
    stat1Label: "Enterprise Clients",
    stat2: "40+",
    stat2Label: "Countries",
    stat3: "200+",
    stat3Label: "Team Members",
    stat4: "99.9%",
    stat4Label: "Client Satisfaction",
    
    // Locations
    locationsTitle: "Global Presence",
    locationsSubtitle: "Strategically located across Europe",
    
    dublinHQ: "Dublin, Ireland (HQ)",
    warsaw: "Warsaw, Poland",
    bucharest: "Bucharest, Romania",
    kyiv: "Kyiv, Ukraine",
    
    // CTA
    ctaTitle: "Join Our Journey",
    ctaDesc: "Partner with a company that shares your ambition",
    ctaButton: "Get in Touch"
  },
  ar: {
    pageTitle: "من نحن",
    pageSubtitle: "نبني مستقبل تقنية المؤسسات",
    
    storyTitle: "قصتنا",
    storyP1: "تأسست نيكست ريفوليوشن في دبلن، أيرلندا، من رؤية لسد الفجوة بين التقنية المتطورة واحتياجات المؤسسات. ما بدأ كفريق صغير من المطورين المتحمسين نما ليصبح شركة تقنية أوروبية رائدة.",
    storyP2: "اليوم، نخدم شركات Fortune 500 في أكثر من 40 دولة، نقدم حلولاً حيوية تدعم الأعمال الحديثة. إرثنا الأيرلندي الأوروبي يغرس فينا الالتزام بالجودة والابتكار والثقة.",
    
    timelineTitle: "رحلتنا",
    timeline2018: "تأسيس الشركة",
    timeline2018Desc: "بدأنا بـ 5 مهندسين في دبلن",
    timeline2020: "التوسع الأوروبي",
    timeline2020Desc: "مكاتب في بولندا، رومانيا، أوكرانيا",
    timeline2022: "إطلاق TexaCore",
    timeline2022Desc: "إصدار منصة ERP للمؤسسات",
    timeline2024: "الوصول العالمي",
    timeline2024Desc: "+40 دولة، +500 عميل مؤسسي",
    
    missionTitle: "مهمتنا",
    missionText: "تمكين المؤسسات حول العالم بحلول تقنية مبتكرة وآمنة وقابلة للتوسع تدفع النمو والتميز التشغيلي.",
    
    visionTitle: "رؤيتنا",
    visionText: "أن نصبح الشريك التقني الأكثر ثقة للمؤسسات التي تسعى للتحول الرقمي، ونضع معايير الجودة والابتكار في الصناعة.",
    
    valuesTitle: "قيمنا",
    value1Title: "الابتكار أولاً",
    value1Desc: "نتجاوز الحدود باستمرار لتقديم حلول متطورة",
    value2Title: "الثقة والأمان",
    value2Desc: "الأمان ليس فكرة لاحقة—إنه مبني في كل ما نفعله",
    value3Title: "نجاح العميل",
    value3Desc: "نجاحكم هو نجاحنا. نحن شركاء، وليس مجرد موردين",
    value4Title: "التميز العالمي",
    value4Desc: "معايير الجودة الأوروبية تطبق على التحديات العالمية",
    
    teamTitle: "فريق القيادة",
    teamSubtitle: "قادة ذوو خبرة يقودون الابتكار",
    
    ceoName: "مايكل أوسوليفان",
    ceoRole: "الرئيس التنفيذي والمؤسس",
    ceoBio: "+25 سنة في تقنية المؤسسات",
    
    ctoName: "د. إيلينا كوالسكي",
    ctoRole: "كبير مسؤولي التقنية",
    ctoBio: "باحثة سابقة في Google AI",
    
    cfoName: "أحمد حسن",
    cfoRole: "كبير المسؤولين الماليين",
    cfoBio: "شريك سابق في KPMG، متخصص FinTech",
    
    cooName: "ماريا بوبيسكو",
    cooRole: "كبير مسؤولي العمليات",
    cooBio: "+20 سنة في عمليات المؤسسات",
    
    stat1: "+500",
    stat1Label: "عميل مؤسسي",
    stat2: "+40",
    stat2Label: "دولة",
    stat3: "+200",
    stat3Label: "عضو فريق",
    stat4: "99.9%",
    stat4Label: "رضا العملاء",
    
    locationsTitle: "الحضور العالمي",
    locationsSubtitle: "موقع استراتيجي في أنحاء أوروبا",
    
    dublinHQ: "دبلن، أيرلندا (المقر الرئيسي)",
    warsaw: "وارسو، بولندا",
    bucharest: "بوخارست، رومانيا",
    kyiv: "كييف، أوكرانيا",
    
    ctaTitle: "انضم إلى رحلتنا",
    ctaDesc: "شراكة مع شركة تشاركك طموحك",
    ctaButton: "تواصل معنا"
  },
  ru: {
    pageTitle: "О нас",
    pageSubtitle: "Строим будущее корпоративных технологий",
    
    storyTitle: "Наша история",
    storyP1: "Основанная в Дублине, Ирландия, Next Revolution возникла из видения преодоления разрыва между передовыми технологиями и потребностями предприятий. То, что начиналось как небольшая команда увлечённых разработчиков, выросло в ведущую европейскую технологическую компанию.",
    storyP2: "Сегодня мы обслуживаем компании Fortune 500 в более чем 40 странах, предоставляя критически важные решения для современного бизнеса.",
    
    timelineTitle: "Наш путь",
    timeline2018: "Основание компании",
    timeline2018Desc: "Начали с 5 инженеров в Дублине",
    timeline2020: "Европейская экспансия",
    timeline2020Desc: "Офисы в Польше, Румынии, Украине",
    timeline2022: "Запуск TexaCore",
    timeline2022Desc: "Выпуск корпоративной ERP платформы",
    timeline2024: "Глобальный охват",
    timeline2024Desc: "40+ стран, 500+ корпоративных клиентов",
    
    missionTitle: "Наша миссия",
    missionText: "Обеспечить предприятия по всему миру инновационными, безопасными и масштабируемыми технологическими решениями.",
    
    visionTitle: "Наше видение",
    visionText: "Стать самым надёжным технологическим партнёром для предприятий, стремящихся к цифровой трансформации.",
    
    valuesTitle: "Наши ценности",
    value1Title: "Инновации прежде всего",
    value1Desc: "Мы постоянно раздвигаем границы",
    value2Title: "Доверие и безопасность",
    value2Desc: "Безопасность встроена во всё",
    value3Title: "Успех клиента",
    value3Desc: "Ваш успех — наш успех",
    value4Title: "Глобальное превосходство",
    value4Desc: "Европейские стандарты качества",
    
    teamTitle: "Команда руководства",
    teamSubtitle: "Опытные лидеры, движущие инновации",
    
    ceoName: "Майкл О'Салливан",
    ceoRole: "CEO и основатель",
    ceoBio: "25+ лет в корпоративных технологиях",
    
    ctoName: "Д-р Елена Ковальски",
    ctoRole: "Технический директор",
    ctoBio: "Бывший исследователь Google AI",
    
    cfoName: "Ахмед Хассан",
    cfoRole: "Финансовый директор",
    cfoBio: "Экс-партнёр KPMG",
    
    cooName: "Мария Попеску",
    cooRole: "Операционный директор",
    cooBio: "20+ лет в корпоративных операциях",
    
    stat1: "500+",
    stat1Label: "Корпоративных клиентов",
    stat2: "40+",
    stat2Label: "Стран",
    stat3: "200+",
    stat3Label: "Членов команды",
    stat4: "99.9%",
    stat4Label: "Удовлетворённость клиентов",
    
    locationsTitle: "Глобальное присутствие",
    locationsSubtitle: "Стратегическое расположение по Европе",
    
    dublinHQ: "Дублин, Ирландия (штаб-квартира)",
    warsaw: "Варшава, Польша",
    bucharest: "Бухарест, Румыния",
    kyiv: "Киев, Украина",
    
    ctaTitle: "Присоединяйтесь к нам",
    ctaDesc: "Партнёрство с амбициозной компанией",
    ctaButton: "Связаться"
  },
  uk: {
    pageTitle: "Про нас",
    pageSubtitle: "Будуємо майбутнє корпоративних технологій",
    
    storyTitle: "Наша історія",
    storyP1: "Заснована в Дубліні, Ірландія, Next Revolution виникла з бачення подолання розриву між передовими технологіями та потребами підприємств.",
    storyP2: "Сьогодні ми обслуговуємо компанії Fortune 500 у понад 40 країнах, надаючи критично важливі рішення для сучасного бізнесу.",
    
    timelineTitle: "Наш шлях",
    timeline2018: "Заснування компанії",
    timeline2018Desc: "Почали з 5 інженерів у Дубліні",
    timeline2020: "Європейська експансія",
    timeline2020Desc: "Офіси в Польщі, Румунії, Україні",
    timeline2022: "Запуск TexaCore",
    timeline2022Desc: "Випуск корпоративної ERP платформи",
    timeline2024: "Глобальне охоплення",
    timeline2024Desc: "40+ країн, 500+ корпоративних клієнтів",
    
    missionTitle: "Наша місія",
    missionText: "Забезпечити підприємства по всьому світу інноваційними, безпечними та масштабованими технологічними рішеннями.",
    
    visionTitle: "Наше бачення",
    visionText: "Стати найнадійнішим технологічним партнером для підприємств, що прагнуть цифрової трансформації.",
    
    valuesTitle: "Наші цінності",
    value1Title: "Інновації перш за все",
    value1Desc: "Ми постійно розсуваємо межі",
    value2Title: "Довіра та безпека",
    value2Desc: "Безпека вбудована у все",
    value3Title: "Успіх клієнта",
    value3Desc: "Ваш успіх — наш успіх",
    value4Title: "Глобальна досконалість",
    value4Desc: "Європейські стандарти якості",
    
    teamTitle: "Команда керівництва",
    teamSubtitle: "Досвідчені лідери, що рухають інновації",
    
    ceoName: "Майкл О'Салліван",
    ceoRole: "CEO та засновник",
    ceoBio: "25+ років у корпоративних технологіях",
    
    ctoName: "Д-р Олена Ковальські",
    ctoRole: "Технічний директор",
    ctoBio: "Колишній дослідник Google AI",
    
    cfoName: "Ахмед Хассан",
    cfoRole: "Фінансовий директор",
    cfoBio: "Екс-партнер KPMG",
    
    cooName: "Марія Попеску",
    cooRole: "Операційний директор",
    cooBio: "20+ років у корпоративних операціях",
    
    stat1: "500+",
    stat1Label: "Корпоративних клієнтів",
    stat2: "40+",
    stat2Label: "Країн",
    stat3: "200+",
    stat3Label: "Членів команди",
    stat4: "99.9%",
    stat4Label: "Задоволеність клієнтів",
    
    locationsTitle: "Глобальна присутність",
    locationsSubtitle: "Стратегічне розташування по Європі",
    
    dublinHQ: "Дублін, Ірландія (штаб-квартира)",
    warsaw: "Варшава, Польща",
    bucharest: "Бухарест, Румунія",
    kyiv: "Київ, Україна",
    
    ctaTitle: "Приєднуйтесь до нас",
    ctaDesc: "Партнерство з амбіційною компанією",
    ctaButton: "Зв'язатися"
  },
  tr: {
    pageTitle: "Hakkımızda",
    pageSubtitle: "Kurumsal Teknolojinin Geleceğini İnşa Ediyoruz",
    
    storyTitle: "Hikayemiz",
    storyP1: "Dublin, İrlanda'da kurulan Next Revolution, ileri teknoloji ile kurumsal ihtiyaçlar arasındaki boşluğu kapatma vizyonundan doğdu.",
    storyP2: "Bugün 40'tan fazla ülkede Fortune 500 şirketlerine hizmet veriyoruz.",
    
    timelineTitle: "Yolculuğumuz",
    timeline2018: "Şirket Kuruluşu",
    timeline2018Desc: "Dublin'de 5 mühendisle başladık",
    timeline2020: "Avrupa Genişlemesi",
    timeline2020Desc: "Polonya, Romanya, Ukrayna ofisleri",
    timeline2022: "TexaCore Lansmanı",
    timeline2022Desc: "Kurumsal ERP platformu",
    timeline2024: "Küresel Erişim",
    timeline2024Desc: "40+ ülke, 500+ kurumsal müşteri",
    
    missionTitle: "Misyonumuz",
    missionText: "Dünya genelinde işletmeleri yenilikçi, güvenli ve ölçeklenebilir teknoloji çözümleriyle güçlendirmek.",
    
    visionTitle: "Vizyonumuz",
    visionText: "Dijital dönüşüm arayan işletmeler için en güvenilir teknoloji ortağı olmak.",
    
    valuesTitle: "Değerlerimiz",
    value1Title: "Önce İnovasyon",
    value1Desc: "Sürekli sınırları zorluyoruz",
    value2Title: "Güven ve Güvenlik",
    value2Desc: "Güvenlik her şeye dahildir",
    value3Title: "Müşteri Başarısı",
    value3Desc: "Sizin başarınız bizim başarımız",
    value4Title: "Küresel Mükemmellik",
    value4Desc: "Avrupa kalite standartları",
    
    teamTitle: "Liderlik Ekibi",
    teamSubtitle: "İnovasyonu yöneten deneyimli liderler",
    
    ceoName: "Michael O'Sullivan",
    ceoRole: "CEO ve Kurucu",
    ceoBio: "25+ yıl kurumsal teknoloji",
    
    ctoName: "Dr. Elena Kowalski",
    ctoRole: "Teknoloji Direktörü",
    ctoBio: "Eski Google AI araştırmacısı",
    
    cfoName: "Ahmed Hassan",
    cfoRole: "Finans Direktörü",
    cfoBio: "Eski KPMG Ortağı",
    
    cooName: "Maria Popescu",
    cooRole: "Operasyon Direktörü",
    cooBio: "20+ yıl kurumsal operasyonlar",
    
    stat1: "500+",
    stat1Label: "Kurumsal Müşteri",
    stat2: "40+",
    stat2Label: "Ülke",
    stat3: "200+",
    stat3Label: "Ekip Üyesi",
    stat4: "99.9%",
    stat4Label: "Müşteri Memnuniyeti",
    
    locationsTitle: "Küresel Varlık",
    locationsSubtitle: "Avrupa genelinde stratejik konum",
    
    dublinHQ: "Dublin, İrlanda (Merkez)",
    warsaw: "Varşova, Polonya",
    bucharest: "Bükreş, Romanya",
    kyiv: "Kiev, Ukrayna",
    
    ctaTitle: "Yolculuğumuza Katılın",
    ctaDesc: "Hedefinizi paylaşan bir şirketle ortaklık",
    ctaButton: "İletişime Geçin"
  },
  pl: {
    pageTitle: "O nas",
    pageSubtitle: "Budujemy przyszłość technologii korporacyjnych",
    
    storyTitle: "Nasza historia",
    storyP1: "Założona w Dublinie w Irlandii, Next Revolution powstała z wizji wypełnienia luki między najnowszymi technologiami a potrzebami przedsiębiorstw.",
    storyP2: "Dziś obsługujemy firmy z listy Fortune 500 w ponad 40 krajach.",
    
    timelineTitle: "Nasza podróż",
    timeline2018: "Założenie firmy",
    timeline2018Desc: "Zaczęliśmy z 5 inżynierami w Dublinie",
    timeline2020: "Ekspansja europejska",
    timeline2020Desc: "Biura w Polsce, Rumunii, Ukrainie",
    timeline2022: "Premiera TexaCore",
    timeline2022Desc: "Platforma ERP dla przedsiębiorstw",
    timeline2024: "Zasięg globalny",
    timeline2024Desc: "40+ krajów, 500+ klientów",
    
    missionTitle: "Nasza misja",
    missionText: "Wspierać przedsiębiorstwa na całym świecie innowacyjnymi, bezpiecznymi i skalowalnymi rozwiązaniami technologicznymi.",
    
    visionTitle: "Nasza wizja",
    visionText: "Stać się najbardziej zaufanym partnerem technologicznym dla przedsiębiorstw dążących do transformacji cyfrowej.",
    
    valuesTitle: "Nasze wartości",
    value1Title: "Innowacja przede wszystkim",
    value1Desc: "Stale przesuwamy granice",
    value2Title: "Zaufanie i bezpieczeństwo",
    value2Desc: "Bezpieczeństwo wbudowane we wszystko",
    value3Title: "Sukces klienta",
    value3Desc: "Twój sukces to nasz sukces",
    value4Title: "Globalna doskonałość",
    value4Desc: "Europejskie standardy jakości",
    
    teamTitle: "Zespół kierowniczy",
    teamSubtitle: "Doświadczeni liderzy napędzający innowacje",
    
    ceoName: "Michael O'Sullivan",
    ceoRole: "CEO i założyciel",
    ceoBio: "25+ lat w technologiach korporacyjnych",
    
    ctoName: "Dr Elena Kowalski",
    ctoRole: "Dyrektor techniczny",
    ctoBio: "Były badacz Google AI",
    
    cfoName: "Ahmed Hassan",
    cfoRole: "Dyrektor finansowy",
    cfoBio: "Były partner KPMG",
    
    cooName: "Maria Popescu",
    cooRole: "Dyrektor operacyjny",
    cooBio: "20+ lat w operacjach korporacyjnych",
    
    stat1: "500+",
    stat1Label: "Klientów korporacyjnych",
    stat2: "40+",
    stat2Label: "Krajów",
    stat3: "200+",
    stat3Label: "Członków zespołu",
    stat4: "99.9%",
    stat4Label: "Satysfakcja klientów",
    
    locationsTitle: "Globalna obecność",
    locationsSubtitle: "Strategiczna lokalizacja w Europie",
    
    dublinHQ: "Dublin, Irlandia (siedziba)",
    warsaw: "Warszawa, Polska",
    bucharest: "Bukareszt, Rumunia",
    kyiv: "Kijów, Ukraina",
    
    ctaTitle: "Dołącz do nas",
    ctaDesc: "Partnerstwo z ambitną firmą",
    ctaButton: "Skontaktuj się"
  },
  ro: {
    pageTitle: "Despre noi",
    pageSubtitle: "Construim viitorul tehnologiei enterprise",
    
    storyTitle: "Povestea noastră",
    storyP1: "Fondată în Dublin, Irlanda, Next Revolution a apărut din viziunea de a reduce decalajul dintre tehnologia de vârf și nevoile întreprinderilor.",
    storyP2: "Astăzi, deservim companii Fortune 500 în peste 40 de țări.",
    
    timelineTitle: "Călătoria noastră",
    timeline2018: "Fondarea companiei",
    timeline2018Desc: "Am început cu 5 ingineri în Dublin",
    timeline2020: "Expansiune europeană",
    timeline2020Desc: "Birouri în Polonia, România, Ucraina",
    timeline2022: "Lansarea TexaCore",
    timeline2022Desc: "Platformă ERP enterprise",
    timeline2024: "Acoperire globală",
    timeline2024Desc: "40+ țări, 500+ clienți enterprise",
    
    missionTitle: "Misiunea noastră",
    missionText: "Să oferim întreprinderilor din întreaga lume soluții tehnologice inovatoare, sigure și scalabile.",
    
    visionTitle: "Viziunea noastră",
    visionText: "Să devenim cel mai de încredere partener tehnologic pentru întreprinderile care caută transformare digitală.",
    
    valuesTitle: "Valorile noastre",
    value1Title: "Inovație în primul rând",
    value1Desc: "Împingem constant limitele",
    value2Title: "Încredere și securitate",
    value2Desc: "Securitatea este integrată în tot",
    value3Title: "Succesul clientului",
    value3Desc: "Succesul tău este succesul nostru",
    value4Title: "Excelență globală",
    value4Desc: "Standarde europene de calitate",
    
    teamTitle: "Echipa de conducere",
    teamSubtitle: "Lideri experimentați care conduc inovația",
    
    ceoName: "Michael O'Sullivan",
    ceoRole: "CEO și fondator",
    ceoBio: "25+ ani în tehnologii enterprise",
    
    ctoName: "Dr. Elena Kowalski",
    ctoRole: "Director Tehnic",
    ctoBio: "Fost cercetător Google AI",
    
    cfoName: "Ahmed Hassan",
    cfoRole: "Director Financiar",
    cfoBio: "Fost partener KPMG",
    
    cooName: "Maria Popescu",
    cooRole: "Director Operațional",
    cooBio: "20+ ani în operațiuni enterprise",
    
    stat1: "500+",
    stat1Label: "Clienți corporate",
    stat2: "40+",
    stat2Label: "Țări",
    stat3: "200+",
    stat3Label: "Membri echipă",
    stat4: "99.9%",
    stat4Label: "Satisfacția clienților",
    
    locationsTitle: "Prezență globală",
    locationsSubtitle: "Locație strategică în Europa",
    
    dublinHQ: "Dublin, Irlanda (sediu)",
    warsaw: "Varșovia, Polonia",
    bucharest: "București, România",
    kyiv: "Kiev, Ucraina",
    
    ctaTitle: "Alătură-te călătoriei",
    ctaDesc: "Parteneriat cu o companie ambițioasă",
    ctaButton: "Contactează-ne"
  },
  it: {
    pageTitle: "Chi Siamo",
    pageSubtitle: "Costruiamo il futuro della tecnologia enterprise",
    
    storyTitle: "La nostra storia",
    storyP1: "Fondata a Dublino, Irlanda, Next Revolution è nata dalla visione di colmare il divario tra tecnologia all'avanguardia e esigenze aziendali.",
    storyP2: "Oggi serviamo aziende Fortune 500 in oltre 40 paesi.",
    
    timelineTitle: "Il nostro percorso",
    timeline2018: "Fondazione",
    timeline2018Desc: "Iniziato con 5 ingegneri a Dublino",
    timeline2020: "Espansione europea",
    timeline2020Desc: "Uffici in Polonia, Romania, Ucraina",
    timeline2022: "Lancio TexaCore",
    timeline2022Desc: "Piattaforma ERP enterprise",
    timeline2024: "Portata globale",
    timeline2024Desc: "40+ paesi, 500+ clienti enterprise",
    
    missionTitle: "La nostra missione",
    missionText: "Potenziare le aziende in tutto il mondo con soluzioni tecnologiche innovative, sicure e scalabili.",
    
    visionTitle: "La nostra visione",
    visionText: "Diventare il partner tecnologico più affidabile per le aziende che cercano la trasformazione digitale.",
    
    valuesTitle: "I nostri valori",
    value1Title: "Innovazione prima di tutto",
    value1Desc: "Spingiamo costantemente i limiti",
    value2Title: "Fiducia e sicurezza",
    value2Desc: "La sicurezza è integrata in tutto",
    value3Title: "Successo del cliente",
    value3Desc: "Il tuo successo è il nostro successo",
    value4Title: "Eccellenza globale",
    value4Desc: "Standard di qualità europei",
    
    teamTitle: "Team di leadership",
    teamSubtitle: "Leader esperti che guidano l'innovazione",
    
    ceoName: "Michael O'Sullivan",
    ceoRole: "CEO e fondatore",
    ceoBio: "25+ anni in tecnologie enterprise",
    
    ctoName: "Dr. Elena Kowalski",
    ctoRole: "Chief Technology Officer",
    ctoBio: "Ex ricercatore Google AI",
    
    cfoName: "Ahmed Hassan",
    cfoRole: "Chief Financial Officer",
    cfoBio: "Ex partner KPMG",
    
    cooName: "Maria Popescu",
    cooRole: "Chief Operations Officer",
    cooBio: "20+ anni in operazioni enterprise",
    
    stat1: "500+",
    stat1Label: "Clienti corporate",
    stat2: "40+",
    stat2Label: "Paesi",
    stat3: "200+",
    stat3Label: "Membri del team",
    stat4: "99.9%",
    stat4Label: "Soddisfazione clienti",
    
    locationsTitle: "Presenza globale",
    locationsSubtitle: "Posizione strategica in Europa",
    
    dublinHQ: "Dublino, Irlanda (sede)",
    warsaw: "Varsavia, Polonia",
    bucharest: "Bucarest, Romania",
    kyiv: "Kiev, Ucraina",
    
    ctaTitle: "Unisciti al viaggio",
    ctaDesc: "Partnership con un'azienda ambiziosa",
    ctaButton: "Contattaci"
  }
};

export default function NRAboutPage() {
  const { language, dir } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { icon: Lightbulb, title: t.value1Title, desc: t.value1Desc, color: "from-amber-500 to-orange-600" },
    { icon: Shield, title: t.value2Title, desc: t.value2Desc, color: "from-blue-500 to-indigo-600" },
    { icon: Heart, title: t.value3Title, desc: t.value3Desc, color: "from-rose-500 to-pink-600" },
    { icon: Globe, title: t.value4Title, desc: t.value4Desc, color: "from-emerald-500 to-teal-600" },
  ];

  const timeline = [
    { year: "2018", title: t.timeline2018, desc: t.timeline2018Desc },
    { year: "2020", title: t.timeline2020, desc: t.timeline2020Desc },
    { year: "2022", title: t.timeline2022, desc: t.timeline2022Desc },
    { year: "2024", title: t.timeline2024, desc: t.timeline2024Desc },
  ];

  const team = [
    { name: t.ceoName, role: t.ceoRole, bio: t.ceoBio, avatar: "MO" },
    { name: t.ctoName, role: t.ctoRole, bio: t.ctoBio, avatar: "EK" },
    { name: t.cfoName, role: t.cfoRole, bio: t.cfoBio, avatar: "AH" },
    { name: t.cooName, role: t.cooRole, bio: t.cooBio, avatar: "MP" },
  ];

  const stats = [
    { value: t.stat1, label: t.stat1Label },
    { value: t.stat2, label: t.stat2Label },
    { value: t.stat3, label: t.stat3Label },
    { value: t.stat4, label: t.stat4Label },
  ];

  const locations = [
    { name: t.dublinHQ, flag: "🇮🇪" },
    { name: t.warsaw, flag: "🇵🇱" },
    { name: t.bucharest, flag: "🇷🇴" },
    { name: t.kyiv, flag: "🇺🇦" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white" dir={dir}>
      <NRHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t.pageTitle}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t.pageSubtitle}
          </p>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              {t.storyTitle}
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t.timelineTitle}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-lg mb-4">
                      {item.year}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl">
              <Target className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{t.missionTitle}</h3>
              <p className="text-slate-300 leading-relaxed">{t.missionText}</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-2xl">
              <Rocket className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{t.visionTitle}</h3>
              <p className="text-slate-300 leading-relaxed">{t.visionText}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t.valuesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-slate-600 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.teamTitle}</h2>
            <p className="text-slate-400">{t.teamSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-bold">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-2">{member.role}</p>
                <p className="text-slate-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.locationsTitle}</h2>
            <p className="text-slate-400">{t.locationsSubtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-slate-800/50 border border-slate-700 rounded-xl">
                <span className="text-3xl">{location.flag}</span>
                <span className="text-slate-300 text-sm">{location.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-slate-400 mb-10">{t.ctaDesc}</p>
          <Link
            to="/next-revolution/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-lg font-semibold rounded-xl shadow-lg transition-all"
          >
            {t.ctaButton}
            <ArrowIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
      
      <NRFooter />
    </div>
  );
}
