import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Ruler, 
  Scissors, 
  Palette, 
  ScanBarcode, 
  Scale,
  ArrowRight,
  CheckCircle2,
  Play
} from "lucide-react";

export function FabricShowcase() {
  const { language, dir } = useLanguage();
  
  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };

  const fabricFeatures = [
    {
      icon: Ruler,
      title: { ar: "إدارة القياسات", en: "Measurement Management", ru: "Управление измерениями", uk: "Управління вимірами", ro: "Gestionarea măsurătorilor", pl: "Zarządzanie pomiarami", it: "Gestione misurazioni", tr: "Ölçüm Yönetimi" },
      desc: { ar: "متر، رولون، ياردة، كيلو - جميع الوحدات مدعومة مع تحويل تلقائي", en: "Meter, roll, yard, kilo - all units supported with auto conversion", ru: "Метр, рулон, ярд, кило - все единицы поддерживаются с автоконвертацией", uk: "Метр, рулон, ярд, кіло - всі одиниці підтримуються з автоконвертацією", ro: "Metru, sul, yard, kilo - toate unitățile sunt suportate cu conversie automată", pl: "Metr, rolka, jard, kilo - wszystkie jednostki obsługiwane z automatyczną konwersją", it: "Metro, rotolo, iarda, chilo - tutte le unità supportate con conversione automatica", tr: "Metre, rulo, yard, kilo - otomatik dönüştürme ile tüm birimler desteklenir" },
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80"
    },
    {
      icon: Scissors,
      title: { ar: "تتبع القص", en: "Cut Tracking", ru: "Отслеживание раскроя", uk: "Відстеження розкрою", ro: "Urmărirea tăierii", pl: "Śledzenie cięcia", it: "Tracciamento taglio", tr: "Kesim Takibi" },
      desc: { ar: "حساب دقيق للباقي بعد كل عملية قص مع سجل كامل", en: "Accurate remainder calculation after each cut with full history", ru: "Точный расчет остатка после каждого раскроя с полной историей", uk: "Точний розрахунок залишку після кожного розкрою з повною історією", ro: "Calcularea precisă a restului după fiecare tăiere cu istoric complet", pl: "Dokładne obliczanie reszty po każdym cięciu z pełną historią", it: "Calcolo accurato del resto dopo ogni taglio con cronologia completa", tr: "Her kesimden sonra tam geçmişle doğru kalan hesaplama" },
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
    },
    {
      icon: Palette,
      title: { ar: "إدارة الألوان", en: "Color Management", ru: "Управление цветами", uk: "Управління кольорами", ro: "Gestionarea culorilor", pl: "Zarządzanie kolorami", it: "Gestione colori", tr: "Renk Yönetimi" },
      desc: { ar: "تصنيف وتتبع الألوان والدرجات بدقة عالية", en: "Classify and track colors and shades with high precision", ru: "Классификация и отслеживание цветов и оттенков с высокой точностью", uk: "Класифікація та відстеження кольорів і відтінків з високою точністю", ro: "Clasificarea și urmărirea culorilor și nuanțelor cu precizie înaltă", pl: "Klasyfikacja i śledzenie kolorów i odcieni z wysoką precyzją", it: "Classifica e traccia colori e sfumature con alta precisione", tr: "Renkleri ve tonları yüksek hassasiyetle sınıflandırın ve takip edin" },
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80"
    },
    {
      icon: ScanBarcode,
      title: { ar: "باركود لكل رولون", en: "Barcode Per Roll", ru: "Штрих-код для каждого рулона", uk: "Штрих-код для кожного рулону", ro: "Cod de bare per sul", pl: "Kod kreskowy dla każdej rolki", it: "Codice a barre per rotolo", tr: "Her Rulo İçin Barkod" },
      desc: { ar: "تتبع فريد لكل رولون من الاستيراد للبيع", en: "Unique tracking for each roll from import to sale", ru: "Уникальное отслеживание каждого рулона от импорта до продажи", uk: "Унікальне відстеження кожного рулону від імпорту до продажу", ro: "Urmărire unică pentru fiecare sul de la import la vânzare", pl: "Unikalne śledzenie każdej rolki od importu do sprzedaży", it: "Tracciamento unico per ogni rotolo dall'importazione alla vendita", tr: "İthalattan satışa kadar her rulo için benzersiz takip" },
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
    }
  ];

  const stats = [
    { value: "10M+", label: { ar: "رولون متتبع", en: "Rolls Tracked", ru: "Отслеживаемых рулонов", uk: "Відстежуваних рулонів", ro: "Suluri urmărite", pl: "Śledzonych rolek", it: "Rotoli tracciati", tr: "Takip Edilen Rulo" } },
    { value: "100+", label: { ar: "نوع قماش", en: "Fabric Types", ru: "Типов тканей", uk: "Типів тканин", ro: "Tipuri de țesături", pl: "Typów tkanin", it: "Tipi di tessuto", tr: "Kumaş Türü" } },
    { value: "5K+", label: { ar: "لون مصنف", en: "Colors Classified", ru: "Классифицированных цветов", uk: "Класифікованих кольорів", ro: "Culori clasificate", pl: "Sklasyfikowanych kolorów", it: "Colori classificati", tr: "Sınıflandırılmış Renk" } },
    { value: "∞", label: { ar: "وحدات قياس", en: "Measurement Units", ru: "Единиц измерения", uk: "Одиниць вимірювання", ro: "Unități de măsură", pl: "Jednostek miary", it: "Unità di misura", tr: "Ölçü Birimi" } }
  ];
  
  const sectionBadge = { ar: "مصمم خصيصاً للأقمشة", en: "Designed for Fabrics", ru: "Разработано для тканей", uk: "Розроблено для тканин", ro: "Conceput pentru țesături", pl: "Zaprojektowane dla tkanin", it: "Progettato per tessuti", tr: "Kumaşlar İçin Tasarlandı" };
  const sectionTitle1 = { ar: "أول نظام ERP", en: "First ERP System", ru: "Первая ERP-система", uk: "Перша ERP-система", ro: "Primul sistem ERP", pl: "Pierwszy system ERP", it: "Primo sistema ERP", tr: "İlk ERP Sistemi" };
  const sectionTitle2 = { ar: "متخصص للأقمشة", en: "Specialized for Fabrics", ru: "специализированная на тканях", uk: "спеціалізована на тканинах", ro: "specializat pentru țesături", pl: "specjalizowany dla tkanin", it: "specializzato per tessuti", tr: "Kumaşlara Özel" };
  const sectionDesc = { ar: "نفهم طبيعة تجارة الأقمشة: من الرولونات والأمتار إلى الألوان والدرجات. نظام واحد يحل جميع تحديات صناعة الأقمشة.", en: "We understand the fabric trade: from rolls and meters to colors and shades. One system that solves all fabric industry challenges.", ru: "Мы понимаем торговлю тканями: от рулонов и метров до цветов и оттенков. Одна система, решающая все задачи текстильной отрасли.", uk: "Ми розуміємо торгівлю тканинами: від рулонів і метрів до кольорів і відтінків. Одна система, яка вирішує всі завдання текстильної галузі.", ro: "Înțelegem comerțul cu țesături: de la suluri și metri la culori și nuanțe. Un singur sistem care rezolvă toate provocările industriei textile.", pl: "Rozumiemy handel tkaninami: od rolek i metrów po kolory i odcienie. Jeden system rozwiązujący wszystkie wyzwania branży tekstylnej.", it: "Comprendiamo il commercio di tessuti: dai rotoli e metri ai colori e sfumature. Un unico sistema che risolve tutte le sfide dell'industria tessile.", tr: "Kumaş ticaretini anlıyoruz: rulolardan ve metrelerden renklere ve tonlara. Kumaş endüstrisinin tüm zorluklarını çözen tek sistem." };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D948805_1px,transparent_1px),linear-gradient(to_bottom,#0D948805_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-gold/10 text-texafab-gold text-sm font-semibold mb-6">
            <Scissors className="w-4 h-4" />
            {getText(sectionBadge)}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-texafab-slate dark:text-white mb-6 leading-tight">
            {getText(sectionTitle1)} <span className="text-texafab-emerald">{getText(sectionTitle2)}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {getText(sectionDesc)}
          </p>
        </div>

        {/* Features Grid with Images - 2x2 Symmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-6xl mx-auto">
          {fabricFeatures.map((feature, i) => (
            <Card key={i} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 rounded-2xl">
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={getText(feature.title)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Icon Badge */}
                <div className="absolute bottom-4 start-4 w-14 h-14 rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <feature.icon className="w-7 h-7 text-texafab-emerald dark:text-texafab-teal" />
                </div>
              </div>
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-texafab-slate dark:text-white mb-3">
                  {getText(feature.title)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {getText(feature.desc)}
                </p>
                <div className="flex items-center gap-2 text-texafab-emerald dark:text-texafab-teal text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  {language === "ar" ? "متضمن في جميع الباقات" : "Included in all plans"}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-texafab-slate rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{getText(stat.label)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/solutions">
              <Button className="h-14 px-8 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white text-base font-semibold rounded-xl">
                {getText({ ar: "اكتشف الحلول", en: "Explore Solutions", ru: "Изучить решения", uk: "Дослідити рішення", ro: "Explorați soluțiile", pl: "Odkryj rozwiązania", it: "Esplora le soluzioni", tr: "Çözümleri Keşfedin" })}
                <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </Button>
            </Link>
            <Button variant="outline" className="h-14 px-8 border-2 border-gray-200 dark:border-gray-700 text-texafab-slate dark:text-white text-base font-semibold rounded-xl">
              <Play className="w-5 h-5 me-2 fill-texafab-gold text-texafab-gold" />
              {getText({ ar: "شاهد كيف يعمل", en: "See How It Works", ru: "Посмотрите, как это работает", uk: "Подивіться, як це працює", ro: "Vedeți cum funcționează", pl: "Zobacz, jak to działa", it: "Guarda come funziona", tr: "Nasıl Çalıştığını Görün" })}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
