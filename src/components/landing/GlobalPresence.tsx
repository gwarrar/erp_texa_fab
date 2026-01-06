import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe,
  MapPin,
  Building2,
  Users,
  Award,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export function GlobalPresence() {
  const { language, dir } = useLanguage();
  
  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };

  const regions = [
    {
      title: { ar: "أوروبا", en: "Europe", ru: "Европа", uk: "Європа", ro: "Europa", pl: "Europa", it: "Europa", tr: "Avrupa" },
      countries: { ar: ["ألمانيا", "أيرلندا", "بولندا", "فرنسا", "إيطاليا"], en: ["Germany", "Ireland", "Poland", "France", "Italy"], ru: ["Германия", "Ирландия", "Польша", "Франция", "Италия"], uk: ["Німеччина", "Ірландія", "Польща", "Франція", "Італія"], ro: ["Germania", "Irlanda", "Polonia", "Franța", "Italia"], pl: ["Niemcy", "Irlandia", "Polska", "Francja", "Włochy"], it: ["Germania", "Irlanda", "Polonia", "Francia", "Italia"], tr: ["Almanya", "İrlanda", "Polonya", "Fransa", "İtalya"] },
      companies: "200+",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80"
    },
    {
      title: { ar: "الخليج العربي", en: "Gulf Region", ru: "Персидский залив", uk: "Перська затока", ro: "Regiunea Golfului", pl: "Region Zatoki", it: "Regione del Golfo", tr: "Körfez Bölgesi" },
      countries: { ar: ["السعودية", "الإمارات", "قطر", "الكويت"], en: ["Saudi Arabia", "UAE", "Qatar", "Kuwait"], ru: ["Саудовская Аравия", "ОАЭ", "Катар", "Кувейт"], uk: ["Саудівська Аравія", "ОАЕ", "Катар", "Кувейт"], ro: ["Arabia Saudită", "EAU", "Qatar", "Kuweit"], pl: ["Arabia Saudyjska", "ZEA", "Katar", "Kuwejt"], it: ["Arabia Saudita", "EAU", "Qatar", "Kuwait"], tr: ["Suudi Arabistan", "BAE", "Katar", "Kuveyt"] },
      companies: "150+",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80"
    },
    {
      title: { ar: "آسيا", en: "Asia", ru: "Азия", uk: "Азія", ro: "Asia", pl: "Azja", it: "Asia", tr: "Asya" },
      countries: { ar: ["تركيا", "الهند", "باكستان", "بنغلاديش"], en: ["Turkey", "India", "Pakistan", "Bangladesh"], ru: ["Турция", "Индия", "Пакистан", "Бангладеш"], uk: ["Туреччина", "Індія", "Пакистан", "Бангладеш"], ro: ["Turcia", "India", "Pakistan", "Bangladesh"], pl: ["Turcja", "Indie", "Pakistan", "Bangladesz"], it: ["Turchia", "India", "Pakistan", "Bangladesh"], tr: ["Türkiye", "Hindistan", "Pakistan", "Bangladeş"] },
      companies: "100+",
      image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80"
    },
    {
      title: { ar: "أفريقيا", en: "Africa", ru: "Африка", uk: "Африка", ro: "Africa", pl: "Afryka", it: "Africa", tr: "Afrika" },
      countries: { ar: ["مصر", "المغرب", "تونس", "نيجيريا"], en: ["Egypt", "Morocco", "Tunisia", "Nigeria"], ru: ["Египет", "Марокко", "Тунис", "Нигерия"], uk: ["Єгипет", "Марокко", "Туніс", "Нігерія"], ro: ["Egipt", "Maroc", "Tunisia", "Nigeria"], pl: ["Egipt", "Maroko", "Tunezja", "Nigeria"], it: ["Egitto", "Marocco", "Tunisia", "Nigeria"], tr: ["Mısır", "Fas", "Tunus", "Nijerya"] },
      companies: "50+",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80"
    }
  ];

  const achievementsBase = [
    {
      icon: Award,
      value: "#1",
      label: { ar: "في صناعة الأقمشة", en: "In Fabric Industry", ru: "В текстильной отрасли", uk: "У текстильній галузі", ro: "În industria textilă", pl: "W branży tekstylnej", it: "Nell'industria tessile", tr: "Kumaş Sektöründe" }
    },
    {
      icon: Users,
      value: "+10,000",
      label: { ar: "مستخدم نشط", en: "Active Users", ru: "Активных пользователей", uk: "Активних користувачів", ro: "Utilizatori activi", pl: "Aktywnych użytkowników", it: "Utenti attivi", tr: "Aktif Kullanıcı" }
    },
    {
      icon: Globe,
      value: "+50",
      label: { ar: "دولة", en: "Countries", ru: "Стран", uk: "Країн", ro: "Țări", pl: "Krajów", it: "Paesi", tr: "Ülke" }
    },
    {
      icon: Building2,
      value: "+500",
      label: { ar: "شركة حول العالم", en: "Companies Worldwide", ru: "Компаний по всему миру", uk: "Компаній по всьому світу", ro: "Companii în întreaga lume", pl: "Firm na całym świecie", it: "Aziende nel mondo", tr: "Dünya Genelinde Şirket" }
    }
  ];
  
  const sectionBadge = { ar: "حضور عالمي", en: "Global Presence", ru: "Глобальное присутствие", uk: "Глобальна присутність", ro: "Prezență globală", pl: "Globalna obecność", it: "Presenza globale", tr: "Küresel Varlık" };
  const sectionTitle1 = { ar: "الاختيار الأول لشركات الأقمشة", en: "The First Choice for Fabric Companies", ru: "Первый выбор для текстильных компаний", uk: "Перший вибір для текстильних компаній", ro: "Prima alegere pentru companiile textile", pl: "Pierwszy wybór dla firm tekstylnych", it: "La prima scelta per le aziende tessili", tr: "Kumaş Şirketleri İçin İlk Tercih" };
  const sectionTitle2 = { ar: "عالمياً", en: "Worldwide", ru: "по всему миру", uk: "по всьому світу", ro: "la nivel mondial", pl: "na całym świecie", it: "nel mondo", tr: "Dünya Genelinde" };
  const sectionDesc = { ar: "من ألمانيا إلى السعودية، نخدم شركات الأقمشة في أكثر من 50 دولة حول العالم.", en: "From Germany to Saudi Arabia, we serve fabric companies in over 50 countries worldwide.", ru: "От Германии до Саудовской Аравии, мы обслуживаем текстильные компании в более чем 50 странах мира.", uk: "Від Німеччини до Саудівської Аравії, ми обслуговуємо текстильні компанії в понад 50 країнах світу.", ro: "Din Germania până în Arabia Saudită, deservim companiile textile în peste 50 de țări din întreaga lume.", pl: "Od Niemiec po Arabię Saudyjską, obsługujemy firmy tekstylne w ponad 50 krajach na całym świecie.", it: "Dalla Germania all'Arabia Saudita, serviamo aziende tessili in oltre 50 paesi nel mondo.", tr: "Almanya'dan Suudi Arabistan'a, dünya genelinde 50'den fazla ülkede kumaş şirketlerine hizmet veriyoruz." };

  // Reverse for RTL to display correctly (right to left)
  const achievements = dir === "rtl" ? [...achievementsBase].reverse() : achievementsBase;

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 dark:bg-texafab-teal/20 text-texafab-emerald dark:text-texafab-teal text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" />
            {getText(sectionBadge)}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-texafab-slate dark:text-white mb-6 leading-tight">
            {getText(sectionTitle1)} <span className="text-texafab-emerald">{getText(sectionTitle2)}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {getText(sectionDesc)}
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, i) => (
            <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-texafab-emerald/10 dark:bg-texafab-teal/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-texafab-emerald dark:text-texafab-teal" />
              </div>
              <div className="text-3xl font-black text-texafab-slate dark:text-white mb-1">
                {item.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {getText(item.label)}
              </div>
            </Card>
          ))}
        </div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regions.map((region, i) => (
            <Card key={i} className="overflow-hidden group hover:shadow-xl transition-all bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={region.image} 
                  alt={getText(region.title)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-texafab-slate/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">{getText(region.title)}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Building2 className="w-4 h-4" />
                    {region.companies} {getText({ ar: "شركة", en: "companies", ru: "компаний", uk: "компаній", ro: "companii", pl: "firm", it: "aziende", tr: "şirket" })}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {(region.countries[language as keyof typeof region.countries] || region.countries.en).map((country: string, j: number) => (
                    <span key={j} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-texafab-emerald via-teal-600 to-texafab-emerald rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {getText({ ar: "انضم لأكبر شبكة من شركات الأقمشة في العالم", en: "Join the World's Largest Network of Fabric Companies", ru: "Присоединяйтесь к крупнейшей мировой сети текстильных компаний", uk: "Приєднуйтесь до найбільшої світової мережі текстильних компаній", ro: "Alăturați-vă celei mai mari rețele mondiale de companii textile", pl: "Dołącz do największej światowej sieci firm tekstylnych", it: "Unisciti alla più grande rete mondiale di aziende tessili", tr: "Dünyanın En Büyük Kumaş Şirketleri Ağına Katılın" })}
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {getText({ ar: "اكتشف لماذا اختارت الشركات الرائدة في أوروبا والخليج TexaCore", en: "Discover why leading companies in Europe and the Gulf chose TexaCore", ru: "Узнайте, почему ведущие компании Европы и Залива выбрали TexaCore", uk: "Дізнайтеся, чому провідні компанії Європи та Затоки обрали TexaCore", ro: "Descoperiți de ce companiile de top din Europa și Golf au ales TexaCore", pl: "Odkryj, dlaczego wiodące firmy w Europie i Zatoce wybrały TexaCore", it: "Scopri perché le aziende leader in Europa e nel Golfo hanno scelto TexaCore", tr: "Avrupa ve Körfez'deki önde gelen şirketlerin neden TexaCore'u tercih ettiğini keşfedin" })}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/industries">
              <Button className="h-12 px-6 bg-white text-texafab-emerald hover:bg-white/90 font-semibold rounded-xl">
                {getText({ ar: "اكتشف القطاعات", en: "Explore Industries", ru: "Изучить отрасли", uk: "Дослідити галузі", ro: "Explorați industriile", pl: "Poznaj branże", it: "Esplora le industrie", tr: "Sektörleri Keşfedin" })}
                <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="h-12 px-6 border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl">
                {getText({ ar: "تواصل معنا", en: "Contact Us", ru: "Связаться с нами", uk: "Зв'язатися з нами", ro: "Contactați-ne", pl: "Skontaktuj się", it: "Contattaci", tr: "Bize Ulaşın" })}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
