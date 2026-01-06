import React from "react";
import { useLanguage } from "./LanguageContext";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageSquare } from "lucide-react";

export function Testimonials() {
  const { dir, language } = useLanguage();
  
  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };

  const testimonials = [
    {
      text: { ar: "TexaCore غيّر طريقة تتبعنا للرولونات والأمتار بشكل كامل. الآن نعرف بالضبط كم متر تبقى في كل رولون.", en: "TexaCore completely changed how we track rolls and meters. Now we know exactly how many meters remain in each roll.", ru: "TexaCore полностью изменил способ отслеживания рулонов и метров. Теперь мы точно знаем, сколько метров осталось в каждом рулоне.", uk: "TexaCore повністю змінив спосіб відстеження рулонів і метрів. Тепер ми точно знаємо, скільки метрів залишилось у кожному рулоні.", ro: "TexaCore a schimbat complet modul în care urmărim sulurile și metrii. Acum știm exact câți metri au rămas în fiecare sul.", pl: "TexaCore całkowicie zmienił sposób śledzenia rolek i metrów. Teraz dokładnie wiemy, ile metrów zostało w każdej rolce.", it: "TexaCore ha completamente cambiato il modo in cui tracciamo rotoli e metri. Ora sappiamo esattamente quanti metri rimangono in ogni rotolo.", tr: "TexaCore, rulo ve metre takibimizi tamamen değiştirdi. Artık her ruloda kaç metre kaldığını tam olarak biliyoruz." },
      author: { ar: "هانز مولر", en: "Hans Müller", ru: "Ганс Мюллер", uk: "Ганс Мюллер", ro: "Hans Müller", pl: "Hans Müller", it: "Hans Müller", tr: "Hans Müller" },
      role: { ar: "مدير العمليات", en: "Operations Director", ru: "Операционный директор", uk: "Операційний директор", ro: "Director operațiuni", pl: "Dyrektor operacyjny", it: "Direttore operativo", tr: "Operasyon Direktörü" },
      company: "TextilHaus Berlin",
      country: { ar: "ألمانيا", en: "Germany", ru: "Германия", uk: "Німеччина", ro: "Germania", pl: "Niemcy", it: "Germania", tr: "Almanya" },
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
    {
      text: { ar: "النظام الوحيد الذي يفهم طبيعة تجارة الأقمشة. من الألوان إلى القص - كل شيء مغطى.", en: "The only system that understands the fabric trade. From colors to cutting - everything is covered.", ru: "Единственная система, которая понимает специфику торговли тканями. От цветов до раскроя - всё учтено.", uk: "Єдина система, яка розуміє специфіку торгівлі тканинами. Від кольорів до розкрою - все враховано.", ro: "Singurul sistem care înțelege comerțul cu țesături. De la culori la tăiere - totul este acoperit.", pl: "Jedyny system, który rozumie handel tkaninami. Od kolorów po krojenie - wszystko jest uwzględnione.", it: "L'unico sistema che comprende il commercio di tessuti. Dai colori al taglio - tutto è coperto.", tr: "Kumaş ticaretini anlayan tek sistem. Renklerden kesime - her şey kapsanmış." },
      author: { ar: "أحمد الشمري", en: "Ahmed Al-Shamri", ru: "Ахмед Аль-Шамри", uk: "Ахмед Аль-Шамрі", ro: "Ahmed Al-Shamri", pl: "Ahmed Al-Shamri", it: "Ahmed Al-Shamri", tr: "Ahmed Al-Shamri" },
      role: { ar: "الرئيس التنفيذي", en: "CEO", ru: "Генеральный директор", uk: "Генеральний директор", ro: "CEO", pl: "Dyrektor generalny", it: "CEO", tr: "CEO" },
      company: { ar: "مجموعة الشمري للأقمشة", en: "Al-Shamri Fabrics Group", ru: "Al-Shamri Fabrics Group", uk: "Al-Shamri Fabrics Group", ro: "Al-Shamri Fabrics Group", pl: "Al-Shamri Fabrics Group", it: "Al-Shamri Fabrics Group", tr: "Al-Shamri Fabrics Group" },
      country: { ar: "السعودية", en: "Saudi Arabia", ru: "Саудовская Аравия", uk: "Саудівська Аравія", ro: "Arabia Saudită", pl: "Arabia Saudyjska", it: "Arabia Saudita", tr: "Suudi Arabistan" },
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: { ar: "التكامل مع أنظمتنا الأوروبية كان سلساً. فريق الدعم يفهم صناعة الأقمشة بعمق.", en: "Integration with our European systems was seamless. The support team deeply understands the fabric industry.", ru: "Интеграция с нашими европейскими системами прошла безупречно. Команда поддержки глубоко понимает текстильную отрасль.", uk: "Інтеграція з нашими європейськими системами пройшла бездоганно. Команда підтримки глибоко розуміє текстильну галузь.", ro: "Integrarea cu sistemele noastre europene a fost perfectă. Echipa de suport înțelege profund industria textilă.", pl: "Integracja z naszymi europejskimi systemami była bezproblemowa. Zespół wsparcia głęboko rozumie branżę tekstylną.", it: "L'integrazione con i nostri sistemi europei è stata impeccabile. Il team di supporto comprende profondamente l'industria tessile.", tr: "Avrupa sistemlerimizle entegrasyon sorunsuz oldu. Destek ekibi kumaş endüstrisini derinden anlıyor." },
      author: { ar: "ماري أوكونور", en: "Mary O'Connor", ru: "Мэри О'Коннор", uk: "Мері О'Коннор", ro: "Mary O'Connor", pl: "Mary O'Connor", it: "Mary O'Connor", tr: "Mary O'Connor" },
      role: { ar: "مديرة المشتريات", en: "Procurement Manager", ru: "Менеджер по закупкам", uk: "Менеджер із закупівель", ro: "Manager achiziții", pl: "Kierownik ds. zakupów", it: "Responsabile acquisti", tr: "Satın Alma Müdürü" },
      company: "Irish Textile Co.",
      country: { ar: "أيرلندا", en: "Ireland", ru: "Ирландия", uk: "Ірландія", ro: "Irlanda", pl: "Irlandia", it: "Irlanda", tr: "İrlanda" },
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: { ar: "وفرنا 20% من وقت الجرد بفضل نظام الباركود المتقدم. كل رولون له هويته الفريدة.", en: "We saved 20% of inventory time thanks to the advanced barcode system. Every roll has its unique identity.", ru: "Мы сэкономили 20% времени инвентаризации благодаря продвинутой системе штрих-кодов. Каждый рулон имеет уникальную идентификацию.", uk: "Ми заощадили 20% часу інвентаризації завдяки передовій системі штрих-кодів. Кожен рулон має унікальну ідентифікацію.", ro: "Am economisit 20% din timpul de inventariere datorită sistemului avansat de coduri de bare. Fiecare sul are identitatea sa unică.", pl: "Zaoszczędziliśmy 20% czasu inwentaryzacji dzięki zaawansowanemu systemowi kodów kreskowych. Każda rolka ma unikalną tożsamość.", it: "Abbiamo risparmiato il 20% del tempo di inventario grazie al sistema avanzato di codici a barre. Ogni rotolo ha la sua identità unica.", tr: "Gelişmiş barkod sistemi sayesinde envanter süresinden %20 tasarruf ettik. Her rulonun benzersiz kimliği var." },
      author: { ar: "محمد الراشد", en: "Mohammed Al-Rashid", ru: "Мохаммед Аль-Рашид", uk: "Мохаммед Аль-Рашид", ro: "Mohammed Al-Rashid", pl: "Mohammed Al-Rashid", it: "Mohammed Al-Rashid", tr: "Mohammed Al-Rashid" },
      role: { ar: "مدير المستودعات", en: "Warehouse Manager", ru: "Менеджер склада", uk: "Менеджер складу", ro: "Manager depozit", pl: "Kierownik magazynu", it: "Responsabile magazzino", tr: "Depo Müdürü" },
      company: { ar: "شركة الإمارات للأقمشة", en: "Emirates Fabrics Co.", ru: "Emirates Fabrics Co.", uk: "Emirates Fabrics Co.", ro: "Emirates Fabrics Co.", pl: "Emirates Fabrics Co.", it: "Emirates Fabrics Co.", tr: "Emirates Fabrics Co." },
      country: { ar: "الإمارات", en: "UAE", ru: "ОАЭ", uk: "ОАЕ", ro: "EAU", pl: "ZEA", it: "EAU", tr: "BAE" },
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
    {
      text: { ar: "أخيراً نظام يحسب الهدر بدقة. قللنا الفاقد بنسبة 15% في أول ثلاثة أشهر.", en: "Finally a system that calculates waste accurately. We reduced loss by 15% in the first three months.", ru: "Наконец система, которая точно рассчитывает отходы. Мы сократили потери на 15% за первые три месяца.", uk: "Нарешті система, яка точно розраховує відходи. Ми скоротили втрати на 15% за перші три місяці.", ro: "În sfârșit un sistem care calculează deșeurile cu precizie. Am redus pierderile cu 15% în primele trei luni.", pl: "Wreszcie system, który dokładnie oblicza odpady. Zmniejszyliśmy straty o 15% w pierwszych trzech miesiącach.", it: "Finalmente un sistema che calcola gli sprechi con precisione. Abbiamo ridotto le perdite del 15% nei primi tre mesi.", tr: "Sonunda israfı doğru hesaplayan bir sistem. İlk üç ayda kayıpları %15 azalttık." },
      author: { ar: "توماس كوفالسكي", en: "Tomasz Kowalski", ru: "Томаш Ковальски", uk: "Томаш Ковальскі", ro: "Tomasz Kowalski", pl: "Tomasz Kowalski", it: "Tomasz Kowalski", tr: "Tomasz Kowalski" },
      role: { ar: "مدير الإنتاج", en: "Production Manager", ru: "Менеджер по производству", uk: "Менеджер з виробництва", ro: "Manager producție", pl: "Kierownik produkcji", it: "Responsabile produzione", tr: "Üretim Müdürü" },
      company: "PolTex Industries",
      country: { ar: "بولندا", en: "Poland", ru: "Польша", uk: "Польща", ro: "Polonia", pl: "Polska", it: "Polonia", tr: "Polonya" },
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
  ];
  
  const sectionTitle = { ar: "آراء العملاء", en: "Client Testimonials", ru: "Отзывы клиентов", uk: "Відгуки клієнтів", ro: "Testimoniale clienți", pl: "Opinie klientów", it: "Testimonianze clienti", tr: "Müşteri Görüşleri" };
  const mainTitle = { ar: "قصص نجاح عملائنا", en: "Client Success Stories", ru: "Истории успеха клиентов", uk: "Історії успіху клієнтів", ro: "Povești de succes ale clienților", pl: "Historie sukcesu klientów", it: "Storie di successo dei clienti", tr: "Müşteri Başarı Hikayeleri" };
  const description = { ar: "اكتشف كيف حوّلت الشركات الرائدة عملياتها مع TexaCore", en: "See how leading companies have transformed their operations with TexaCore", ru: "Узнайте, как ведущие компании трансформировали свои операции с TexaCore", uk: "Дізнайтеся, як провідні компанії трансформували свої операції з TexaCore", ro: "Vedeți cum companiile de top și-au transformat operațiunile cu TexaCore", pl: "Zobacz, jak wiodące firmy przekształciły swoje operacje z TexaCore", it: "Scopri come le aziende leader hanno trasformato le loro operazioni con TexaCore", tr: "Önde gelen şirketlerin operasyonlarını TexaCore ile nasıl dönüştürdüğünü görün" };

  return (
    <section className="py-20 bg-texafab-cream relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-texafab-emerald/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-texafab-gold/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-4">
            <MessageSquare className="w-4 h-4" />
            {getText(sectionTitle)}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight text-texafab-slate">
            {getText(mainTitle)}
          </h2>
          <p className="text-lg text-texafab-slate/70 max-w-2xl mx-auto">
            {getText(description)}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel 
            opts={{ align: "start", loop: true, direction: dir === "rtl" ? "rtl" : "ltr" }} 
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <Card className="bg-white shadow-lg border-texafab-slate/10 h-full hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col h-full relative">
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-texafab-emerald/10 flex items-center justify-center">
                        <Quote className="w-5 h-5 text-texafab-emerald" />
                      </div>
                      
                      {/* Rating */}
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-texafab-gold text-texafab-gold" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-base md:text-lg leading-relaxed mb-6 flex-1 font-light text-texafab-slate">
                        "{getText(item.text)}"
                      </blockquote>
                      
                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t border-texafab-slate/10">
                        <img 
                          src={item.avatar} 
                          alt={getText(item.author)}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-texafab-emerald/20"
                        />
                        <div>
                          <div className="font-bold text-texafab-slate">{getText(item.author)}</div>
                          <div className="text-xs text-texafab-slate/60">{getText(item.role)}</div>
                          <div className="text-xs text-texafab-emerald font-medium">{typeof item.company === "string" ? item.company : getText(item.company)}</div>
                          <div className="text-xs text-texafab-slate/50">{getText(item.country)}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-texafab-emerald text-white border-texafab-emerald hover:bg-texafab-emerald/90 h-10 w-10" />
              <CarouselNext className="static translate-y-0 bg-texafab-emerald text-white border-texafab-emerald hover:bg-texafab-emerald/90 h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
