import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { DSHeader } from "@/components/dubai-stroy/DSHeader";
import { DSFooter } from "@/components/dubai-stroy/DSFooter";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import {
  ArrowRight,
  ArrowLeft,
  Hammer,
  PaintBucket,
  Ruler,
  Palette,
  TreePine,
  Building2,
  Key,
  CheckCircle,
  Phone,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const iconMap: Record<string, React.ElementType> = {
  Hammer,
  PaintBucket,
  Ruler,
  Palette,
  TreePine,
  Building2,
  Key,
};

export default function DSServicesPage() {
  const { language, dir } = useLanguage();
  useTheme();

  const isRTL = dir === "rtl";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services: Service[] = [
    {
      id: "turnkey-construction",
      icon: "Hammer",
      title: language === "ar" ? "بناء تسليم مفتاح" : language === "ru" ? "Строительство под ключ" : language === "uk" ? "Будівництво під ключ" : "Turnkey Construction",
      description: language === "ar" 
        ? "نقدم خدمة بناء شاملة من الأساس حتى التسليم. نتولى جميع مراحل البناء بما في ذلك التصميم والهيكل والتشطيب."
        : language === "ru" 
        ? "Предоставляем полный цикл строительства от фундамента до сдачи. Берём на себя все этапы: проектирование, конструкции, отделку."
        : language === "uk" 
        ? "Надаємо повний цикл будівництва від фундаменту до здачі. Беремо на себе всі етапи: проектування, конструкції, оздоблення."
        : "We provide a complete construction cycle from foundation to handover. We take on all stages: design, structures, finishing.",
      features: language === "ar" 
        ? ["التصميم المعماري", "أعمال الأساسات", "البناء الهيكلي", "السباكة والكهرباء", "التشطيبات الداخلية", "ضمان 5 سنوات"]
        : language === "ru" 
        ? ["Архитектурное проектирование", "Фундаментные работы", "Строительные конструкции", "Сантехника и электрика", "Внутренняя отделка", "Гарантия 5 лет"]
        : language === "uk" 
        ? ["Архітектурне проектування", "Фундаментні роботи", "Будівельні конструкції", "Сантехніка та електрика", "Внутрішнє оздоблення", "Гарантія 5 років"]
        : ["Architectural design", "Foundation works", "Building structures", "Plumbing & electrical", "Interior finishing", "5-year warranty"],
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    },
    {
      id: "renovation",
      icon: "PaintBucket",
      title: language === "ar" ? "تجديد الشقق" : language === "ru" ? "Ремонт квартир" : language === "uk" ? "Ремонт квартир" : "Apartment Renovation",
      description: language === "ar"
        ? "تجديد شامل للشقق من التفكيك إلى التشطيب النهائي. نقدم حلولاً مخصصة لكل ميزانية ونمط."
        : language === "ru"
        ? "Полный ремонт квартир от демонтажа до финишной отделки. Предлагаем индивидуальные решения для любого бюджета и стиля."
        : language === "uk"
        ? "Повний ремонт квартир від демонтажу до фінішного оздоблення. Пропонуємо індивідуальні рішення для будь-якого бюджету та стилю."
        : "Complete apartment renovation from demolition to final finishing. We offer customized solutions for any budget and style.",
      features: language === "ar"
        ? ["أعمال الهدم", "تسوية الجدران والأرضيات", "استبدال السباكة", "أعمال الكهرباء", "التشطيب الفاخر", "تنظيف بعد التجديد"]
        : language === "ru"
        ? ["Демонтажные работы", "Выравнивание стен и полов", "Замена сантехники", "Электромонтаж", "Премиум отделка", "Уборка после ремонта"]
        : language === "uk"
        ? ["Демонтажні роботи", "Вирівнювання стін та підлог", "Заміна сантехніки", "Електромонтаж", "Преміум оздоблення", "Прибирання після ремонту"]
        : ["Demolition works", "Wall and floor leveling", "Plumbing replacement", "Electrical work", "Premium finishing", "Post-renovation cleaning"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      id: "interior-design",
      icon: "Palette",
      title: language === "ar" ? "تصميم داخلي" : language === "ru" ? "Дизайн интерьера" : language === "uk" ? "Дизайн інтер'єру" : "Interior Design",
      description: language === "ar"
        ? "تصميم داخلي احترافي يجمع بين الجمال والوظائفية. نخلق مساحات فريدة تعكس شخصيتك."
        : language === "ru"
        ? "Профессиональный дизайн интерьера, сочетающий красоту и функциональность. Создаём уникальные пространства, отражающие вашу индивидуальность."
        : language === "uk"
        ? "Професійний дизайн інтер'єру, що поєднує красу та функціональність. Створюємо унікальні простори, що відображають вашу індивідуальність."
        : "Professional interior design combining beauty and functionality. We create unique spaces that reflect your personality.",
      features: language === "ar"
        ? ["مشروع تصميم 3D", "اختيار المواد", "الإشراف على التنفيذ", "تنسيق الأثاث", "الإضاءة المتخصصة", "الديكور والإكسسوارات"]
        : language === "ru"
        ? ["3D дизайн-проект", "Подбор материалов", "Авторский надзор", "Комплектация мебелью", "Специализированное освещение", "Декор и аксессуары"]
        : language === "uk"
        ? ["3D дизайн-проект", "Підбір матеріалів", "Авторський нагляд", "Комплектація меблями", "Спеціалізоване освітлення", "Декор та аксесуари"]
        : ["3D design project", "Material selection", "Author supervision", "Furniture procurement", "Specialized lighting", "Decor and accessories"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
      id: "landscape",
      icon: "TreePine",
      title: language === "ar" ? "تصميم المناظر الطبيعية" : language === "ru" ? "Ландшафтный дизайн" : language === "uk" ? "Ландшафтний дизайн" : "Landscape Design",
      description: language === "ar"
        ? "تصميم وتنفيذ حدائق ومساحات خارجية جميلة. نحول المساحات الخارجية إلى واحات خضراء."
        : language === "ru"
        ? "Проектирование и создание красивых садов и наружных пространств. Превращаем территории в зелёные оазисы."
        : language === "uk"
        ? "Проектування та створення красивих садів та зовнішніх просторів. Перетворюємо території на зелені оази."
        : "Design and creation of beautiful gardens and outdoor spaces. We transform outdoor areas into green oases.",
      features: language === "ar"
        ? ["تخطيط الحديقة", "أنظمة الري", "الإضاءة الخارجية", "المسارات والأرصفة", "حمامات السباحة", "البرجولات والتراسات"]
        : language === "ru"
        ? ["Планировка сада", "Системы полива", "Наружное освещение", "Дорожки и мощение", "Бассейны", "Перголы и террасы"]
        : language === "uk"
        ? ["Планування саду", "Системи поливу", "Зовнішнє освітлення", "Доріжки та мощення", "Басейни", "Пергли та тераси"]
        : ["Garden planning", "Irrigation systems", "Outdoor lighting", "Paths and paving", "Swimming pools", "Pergolas and terraces"],
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    },
  ];

  return (
    <div
      className={cn(
        "min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors",
        isRTL ? "rtl" : "ltr"
      )}
      dir={dir}
    >
      <DSHeader />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === "ar" ? "خدماتنا" : language === "ru" ? "Наши услуги" : language === "uk" ? "Наші послуги" : "Our Services"}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {language === "ar"
                ? "نقدم مجموعة شاملة من خدمات البناء والتجديد لتلبية جميع احتياجاتك"
                : language === "ru"
                ? "Предоставляем полный спектр строительных услуг и ремонта для всех ваших потребностей"
                : language === "uk"
                ? "Надаємо повний спектр будівельних послуг та ремонту для всіх ваших потреб"
                : "We provide a comprehensive range of construction and renovation services for all your needs"}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Building2;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={cn(
                    "grid lg:grid-cols-2 gap-12 items-center",
                    isEven ? "" : "lg:flex-row-reverse"
                  )}
                >
                  <div className={cn(isEven ? "lg:order-1" : "lg:order-2")}>
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/dubai-stroy/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-amber-500/25"
                    >
                      {language === "ar" ? "احجز استشارة" : language === "ru" ? "Записаться на консультацию" : language === "uk" ? "Записатися на консультацію" : "Book Consultation"}
                      <ArrowIcon className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className={cn(isEven ? "lg:order-2" : "lg:order-1")}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-2xl"
                      />
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-2xl -z-10" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "ar" ? "كيف نعمل" : language === "ru" ? "Как мы работаем" : language === "uk" ? "Як ми працюємо" : "How We Work"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {language === "ar"
                ? "عملية بسيطة وشفافة من الفكرة إلى التنفيذ"
                : language === "ru"
                ? "Простой и прозрачный процесс от идеи до реализации"
                : language === "uk"
                ? "Простий та прозорий процес від ідеї до реалізації"
                : "A simple and transparent process from idea to implementation"}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: language === "ar" ? "الاستشارة" : language === "ru" ? "Консультация" : language === "uk" ? "Консультація" : "Consultation",
                desc: language === "ar" ? "نناقش احتياجاتك وأفكارك" : language === "ru" ? "Обсуждаем ваши потребности и идеи" : language === "uk" ? "Обговорюємо ваші потреби та ідеї" : "We discuss your needs and ideas",
              },
              {
                step: "02",
                title: language === "ar" ? "التصميم" : language === "ru" ? "Проектирование" : language === "uk" ? "Проектування" : "Design",
                desc: language === "ar" ? "نعد مشروع تصميم مفصل" : language === "ru" ? "Готовим детальный дизайн-проект" : language === "uk" ? "Готуємо детальний дизайн-проект" : "We prepare a detailed design project",
              },
              {
                step: "03",
                title: language === "ar" ? "التنفيذ" : language === "ru" ? "Реализация" : language === "uk" ? "Реалізація" : "Implementation",
                desc: language === "ar" ? "ننفذ العمل بجودة عالية" : language === "ru" ? "Выполняем работы качественно" : language === "uk" ? "Виконуємо роботи якісно" : "We carry out work with high quality",
              },
              {
                step: "04",
                title: language === "ar" ? "التسليم" : language === "ru" ? "Сдача" : language === "uk" ? "Здача" : "Handover",
                desc: language === "ar" ? "نسلم مشروعك جاهزاً" : language === "ru" ? "Сдаём готовый проект" : language === "uk" ? "Здаємо готовий проект" : "We deliver your project ready",
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 right-0 translate-x-1/2 w-full h-0.5 bg-amber-500/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "ar"
              ? "هل لديك مشروع؟"
              : language === "ru"
              ? "Есть проект?"
              : language === "uk"
              ? "Є проект?"
              : "Have a Project?"}
          </h2>
          <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
            {language === "ar"
              ? "تواصل معنا للحصول على استشارة مجانية وعرض سعر"
              : language === "ru"
              ? "Свяжитесь с нами для бесплатной консультации и расчёта"
              : language === "uk"
              ? "Зв'яжіться з нами для безкоштовної консультації та розрахунку"
              : "Contact us for a free consultation and quote"}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/dubai-stroy/contact"
              className="flex items-center gap-2 px-8 py-4 bg-white text-amber-600 font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-5 h-5" />
              {language === "ar" ? "احجز استشارة" : language === "ru" ? "Записаться" : language === "uk" ? "Записатися" : "Book Consultation"}
            </Link>
            <a
              href="tel:+380674848029"
              className="flex items-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/30 transition-all"
            >
              <Phone className="w-5 h-5" />
              +380 67 484 80 29
            </a>
          </div>
        </div>
      </section>

      <DSFooter />
      <ScrollToTop />
    </div>
  );
}
