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
  CheckCircle,
  Building2,
  Hammer,
  Star,
  Phone,
  Shield,
  Clock,
  Award,
  Sparkles,
  Zap,
  HeadphonesIcon,
  Truck,
  FileCheck,
  BadgeCheck,
  Gift,
  Percent,
  Calendar,
  Users,
  HelpCircle,
  ChevronDown,
  Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PricePlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

interface PriceCategory {
  title: string;
  subtitle: string;
  plans: PricePlan[];
}

interface PricingData {
  sectionTitle: string;
  sectionSubtitle: string;
  currency: string;
  contactUs: string;
  getQuote: string;
  popular: string;
  includes: string;
  categories: {
    construction: PriceCategory;
    renovation: PriceCategory;
  };
}

// Default pricing data
const defaultPricing: PricingData = {
  sectionTitle: "Ціни",
  sectionSubtitle: "Прозоре ціноутворення",
  currency: "грн/м²",
  contactUs: "Зв'язатися",
  getQuote: "Отримати розрахунок",
  popular: "Популярний",
  includes: "Включає:",
  categories: {
    construction: { title: "Будівництво", subtitle: "Будівництво під ключ", plans: [] },
    renovation: { title: "Ремонт", subtitle: "Ремонт квартир та будинків", plans: [] },
  },
};

export default function DSPricingPage() {
  const { language, dir } = useLanguage();
  useTheme();
  const [pricingData, setPricingData] = useState<PricingData>(defaultPricing);
  const [activeTab, setActiveTab] = useState<"construction" | "renovation">("construction");

  const isRTL = dir === "rtl";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    fetch("/data/dubai-stroy/pricing.json")
      .then((res) => res.json())
      .then((data) => setPricingData(data[language] || data["ru"]))
      .catch(() => {});
  }, [language]);

  const currentCategory = pricingData.categories[activeTab];

  return (
    <div className={cn("min-h-screen bg-white dark:bg-slate-950", isRTL ? "rtl" : "ltr")} dir={dir}>
      <DSHeader />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-600 dark:text-amber-400 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              {pricingData.sectionSubtitle}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              {pricingData.sectionTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 sticky top-28 md:top-32 z-30 backdrop-blur-xl bg-white/90 dark:bg-slate-950/90">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("construction")}
              className={cn(
                "flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all",
                activeTab === "construction"
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              )}
            >
              <Building2 className="w-5 h-5" />
              {pricingData.categories.construction.title}
            </button>
            <button
              onClick={() => setActiveTab("renovation")}
              className={cn(
                "flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all",
                activeTab === "renovation"
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              )}
            >
              <Hammer className="w-5 h-5" />
              {pricingData.categories.renovation.title}
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          {/* Category Title */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {currentCategory.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              {currentCategory.subtitle}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentCategory.plans.map((plan, planIndex) => {
              // Define tier icons and badges
              const tierInfo = {
                basic: { icon: Building2, badge: language === "ar" ? "أساسي" : language === "ru" ? "Базовый" : language === "uk" ? "Базовий" : "Basic" },
                cosmetic: { icon: Sparkles, badge: language === "ar" ? "سريع" : language === "ru" ? "Быстрый" : language === "uk" ? "Швидкий" : "Quick" },
                comfort: { icon: Star, badge: language === "ar" ? "الأكثر طلباً" : language === "ru" ? "Самый популярный" : language === "uk" ? "Найпопулярніший" : "Most Popular" },
                capital: { icon: Hammer, badge: language === "ar" ? "الأفضل قيمة" : language === "ru" ? "Лучшее соотношение" : language === "uk" ? "Найкраще співвідношення" : "Best Value" },
                premium: { icon: Award, badge: language === "ar" ? "فاخر" : language === "ru" ? "Премиум" : language === "uk" ? "Преміум" : "Premium" },
                designer: { icon: Palette, badge: language === "ar" ? "حصري" : language === "ru" ? "Эксклюзив" : language === "uk" ? "Ексклюзив" : "Exclusive" },
              };
              const currentTier = tierInfo[plan.id as keyof typeof tierInfo] || { icon: Building2, badge: "" };
              const TierIcon = currentTier.icon;

              return (
                <div
                  key={plan.id}
                  className={cn(
                    "relative rounded-2xl overflow-hidden transition-all duration-300 group",
                    plan.highlighted
                      ? "bg-gradient-to-b from-amber-500 to-amber-600 text-white shadow-2xl shadow-amber-500/30 scale-105 z-10"
                      : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-500/50 hover:shadow-xl"
                  )}
                >
                  {/* Ribbon Badge */}
                  {plan.highlighted && (
                    <div className="absolute -top-3 -right-12 w-40 bg-red-500 text-white text-xs font-bold py-2 transform rotate-45 text-center shadow-lg">
                      {currentTier.badge}
                    </div>
                  )}

                  {/* Top Icon Section */}
                  <div className={cn(
                    "p-6 pb-0 flex items-center justify-between",
                    plan.highlighted ? "" : ""
                  )}>
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center",
                      plan.highlighted 
                        ? "bg-white/20 backdrop-blur-sm" 
                        : planIndex === 0 
                          ? "bg-slate-100 dark:bg-slate-700" 
                          : planIndex === 2 
                            ? "bg-purple-100 dark:bg-purple-900/30"
                            : "bg-amber-100 dark:bg-amber-900/30"
                    )}>
                      <TierIcon className={cn(
                        "w-7 h-7",
                        plan.highlighted 
                          ? "text-white" 
                          : planIndex === 0 
                            ? "text-slate-600 dark:text-slate-300" 
                            : planIndex === 2 
                              ? "text-purple-600 dark:text-purple-400"
                              : "text-amber-600 dark:text-amber-400"
                      )} />
                    </div>
                    {!plan.highlighted && currentTier.badge && (
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium",
                        planIndex === 0 
                          ? "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                          : planIndex === 2
                            ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                            : "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
                      )}>
                        {currentTier.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-6 pt-4">
                    {/* Plan Name */}
                    <h3 className={cn(
                      "text-2xl font-bold mb-2",
                      plan.highlighted ? "text-white" : "text-slate-900 dark:text-white"
                    )}>
                      {plan.name}
                    </h3>

                    {/* Description */}
                    <p className={cn(
                      "text-sm mb-6 min-h-[40px]",
                      plan.highlighted ? "text-amber-100" : "text-slate-600 dark:text-slate-400"
                    )}>
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-dashed border-white/20 dark:border-slate-600">
                      <span className={cn(
                        "text-4xl md:text-5xl font-bold",
                        plan.highlighted ? "text-white" : "text-amber-600 dark:text-amber-400"
                      )}>
                        {plan.price}
                      </span>
                      <span className={cn(
                        "text-lg ml-2",
                        plan.highlighted ? "text-amber-100" : "text-slate-500 dark:text-slate-400"
                      )}>
                        {pricingData.currency}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      <p className={cn(
                        "text-sm font-semibold uppercase tracking-wide",
                        plan.highlighted ? "text-amber-100" : "text-slate-500 dark:text-slate-400"
                      )}>
                        {pricingData.includes}
                      </p>
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className={cn(
                            "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                            plan.highlighted ? "bg-white/20" : "bg-amber-500/10"
                          )}>
                            <CheckCircle className={cn(
                              "w-3.5 h-3.5",
                              plan.highlighted ? "text-white" : "text-amber-500"
                            )} />
                          </div>
                          <span className={cn(
                            "text-sm leading-relaxed",
                            plan.highlighted ? "text-white" : "text-slate-600 dark:text-slate-300"
                          )}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Extra Benefits */}
                    <div className={cn(
                      "py-4 px-4 -mx-4 mb-6 rounded-xl",
                      plan.highlighted ? "bg-white/10" : "bg-slate-50 dark:bg-slate-900"
                    )}>
                      <div className="flex items-center gap-3 text-sm">
                        <Gift className={cn(
                          "w-5 h-5",
                          plan.highlighted ? "text-white" : "text-emerald-500"
                        )} />
                        <span className={cn(
                          plan.highlighted ? "text-white" : "text-slate-700 dark:text-slate-300"
                        )}>
                          {language === "ar" 
                            ? "استشارة مجانية + زيارة موقع"
                            : language === "ru"
                            ? "Бесплатная консультация + выезд"
                            : language === "uk"
                            ? "Безкоштовна консультація + виїзд"
                            : "Free consultation + site visit"}
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/dubai-stroy/contact"
                      className={cn(
                        "flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold transition-all",
                        plan.highlighted
                          ? "bg-white text-amber-600 hover:bg-amber-50 shadow-lg"
                          : "bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-500/25 group-hover:shadow-xl"
                      )}
                    >
                      {pricingData.getQuote}
                      <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Trust Badge */}
                    <p className={cn(
                      "text-center text-xs mt-4",
                      plan.highlighted ? "text-amber-100" : "text-slate-400"
                    )}>
                      {language === "ar" 
                        ? "✓ بدون التزام • رد سريع"
                        : language === "ru"
                        ? "✓ Без обязательств • Быстрый ответ"
                        : language === "uk"
                        ? "✓ Без зобов'язань • Швидка відповідь"
                        : "✓ No obligation • Fast response"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {language === "ar" ? "لماذا تختارنا؟" : language === "ru" ? "Почему выбирают нас?" : language === "uk" ? "Чому обирають нас?" : "Why Choose Us?"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {language === "ar" 
                ? "نقدم جودة استثنائية مع أسعار تنافسية"
                : language === "ru"
                ? "Мы предлагаем исключительное качество по конкурентным ценам"
                : language === "uk"
                ? "Ми пропонуємо виняткову якість за конкурентними цінами"
                : "We offer exceptional quality at competitive prices"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: language === "ar" ? "ضمان الجودة" : language === "ru" ? "Гарантия качества" : language === "uk" ? "Гарантія якості" : "Quality Guarantee",
                desc: language === "ar" ? "ضمان شامل على جميع الأعمال" : language === "ru" ? "Полная гарантия на все работы" : language === "uk" ? "Повна гарантія на всі роботи" : "Full warranty on all work",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: Clock,
                title: language === "ar" ? "في الوقت المحدد" : language === "ru" ? "Точно в срок" : language === "uk" ? "Точно в строк" : "On Time Delivery",
                desc: language === "ar" ? "التزام صارم بالمواعيد" : language === "ru" ? "Строгое соблюдение сроков" : language === "uk" ? "Суворе дотримання термінів" : "Strict deadline adherence",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Award,
                title: language === "ar" ? "خبرة 15+ عام" : language === "ru" ? "Опыт 15+ лет" : language === "uk" ? "Досвід 15+ років" : "15+ Years Experience",
                desc: language === "ar" ? "فريق محترف ذو خبرة واسعة" : language === "ru" ? "Профессиональная опытная команда" : language === "uk" ? "Професійна досвідчена команда" : "Professional experienced team",
                color: "from-amber-500 to-amber-600",
              },
              {
                icon: FileCheck,
                title: language === "ar" ? "عقد شفاف" : language === "ru" ? "Прозрачный договор" : language === "uk" ? "Прозорий договір" : "Transparent Contract",
                desc: language === "ar" ? "لا توجد تكاليف مخفية" : language === "ru" ? "Никаких скрытых платежей" : language === "uk" ? "Жодних прихованих платежів" : "No hidden costs",
                color: "from-purple-500 to-purple-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
              >
                <div className={cn("w-14 h-14 rounded-xl bg-gradient-to-r flex items-center justify-center mb-4", item.color)}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
              <Gift className="w-4 h-4" />
              {language === "ar" ? "مضمن في السعر" : language === "ru" ? "Включено в стоимость" : language === "uk" ? "Включено у вартість" : "Included in Price"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {language === "ar" ? "ما يشمله كل باقة" : language === "ru" ? "Что входит в каждый пакет" : language === "uk" ? "Що входить у кожен пакет" : "What's Included in Every Package"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Truck,
                title: language === "ar" ? "توصيل المواد مجاناً" : language === "ru" ? "Бесплатная доставка материалов" : language === "uk" ? "Безкоштовна доставка матеріалів" : "Free Material Delivery",
              },
              {
                icon: Users,
                title: language === "ar" ? "فريق محترف" : language === "ru" ? "Профессиональная бригада" : language === "uk" ? "Професійна бригада" : "Professional Team",
              },
              {
                icon: FileCheck,
                title: language === "ar" ? "تقرير مرحلي" : language === "ru" ? "Отчёты о ходе работ" : language === "uk" ? "Звіти про хід робіт" : "Progress Reports",
              },
              {
                icon: HeadphonesIcon,
                title: language === "ar" ? "دعم على مدار الساعة" : language === "ru" ? "Поддержка 24/7" : language === "uk" ? "Підтримка 24/7" : "24/7 Support",
              },
              {
                icon: BadgeCheck,
                title: language === "ar" ? "ضمان مكتوب" : language === "ru" ? "Письменная гарантия" : language === "uk" ? "Письмова гарантія" : "Written Warranty",
              },
              {
                icon: Sparkles,
                title: language === "ar" ? "تنظيف بعد الانتهاء" : language === "ru" ? "Уборка после завершения" : language === "uk" ? "Прибирання після завершення" : "Post-Completion Cleaning",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <span className="font-medium text-slate-900 dark:text-white">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                <Percent className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  {language === "ar" ? "عرض خاص!" : language === "ru" ? "Специальное предложение!" : language === "uk" ? "Спеціальна пропозиція!" : "Special Offer!"}
                </h3>
                <p className="text-amber-100">
                  {language === "ar" 
                    ? "خصم 10% عند الحجز هذا الشهر"
                    : language === "ru"
                    ? "Скидка 10% при заказе в этом месяце"
                    : language === "uk"
                    ? "Знижка 10% при замовленні цього місяця"
                    : "10% OFF when booking this month"}
                </p>
              </div>
            </div>
            <Link
              to="/dubai-stroy/contact"
              className="flex items-center gap-2 px-8 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-amber-50 transition-all shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              {language === "ar" ? "احجز الآن" : language === "ru" ? "Забронировать" : language === "uk" ? "Забронювати" : "Book Now"}
              <ArrowIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {language === "ar" ? "خيارات الدفع المرنة" : language === "ru" ? "Гибкие варианты оплаты" : language === "uk" ? "Гнучкі варіанти оплати" : "Flexible Payment Options"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {language === "ar" 
                ? "نوفر خيارات دفع متعددة لتناسب احتياجاتك"
                : language === "ru"
                ? "Предлагаем различные варианты оплаты для вашего удобства"
                : language === "uk"
                ? "Пропонуємо різні варіанти оплати для вашої зручності"
                : "We offer various payment options for your convenience"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: language === "ar" ? "الدفع المسبق" : language === "ru" ? "Предоплата" : language === "uk" ? "Передоплата" : "Prepayment",
                percent: "30%",
                desc: language === "ar" ? "عند توقيع العقد" : language === "ru" ? "При подписании договора" : language === "uk" ? "При підписанні договору" : "Upon contract signing",
                icon: Zap,
              },
              {
                title: language === "ar" ? "المرحلة الثانية" : language === "ru" ? "Второй этап" : language === "uk" ? "Другий етап" : "Second Stage",
                percent: "40%",
                desc: language === "ar" ? "في منتصف المشروع" : language === "ru" ? "В середине проекта" : language === "uk" ? "В середині проекту" : "Mid-project milestone",
                icon: Clock,
              },
              {
                title: language === "ar" ? "الدفع النهائي" : language === "ru" ? "Финальный платёж" : language === "uk" ? "Фінальний платіж" : "Final Payment",
                percent: "30%",
                desc: language === "ar" ? "عند التسليم" : language === "ru" ? "При сдаче объекта" : language === "uk" ? "При здачі об'єкта" : "Upon completion",
                icon: BadgeCheck,
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">{item.percent}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-500/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              {language === "ar" ? "الأسئلة الشائعة" : language === "ru" ? "Частые вопросы" : language === "uk" ? "Часті питання" : "FAQ"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {language === "ar" ? "أسئلة عن الأسعار" : language === "ru" ? "Вопросы о ценах" : language === "uk" ? "Питання про ціни" : "Pricing Questions"}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: language === "ar" ? "هل السعر نهائي أم قابل للتفاوض؟" : language === "ru" ? "Цена окончательная или можно торговаться?" : language === "uk" ? "Ціна остаточна чи можна торгуватися?" : "Is the price final or negotiable?",
                a: language === "ar" ? "الأسعار المعروضة هي نقطة بداية. نقدم خصومات خاصة للمشاريع الكبيرة والعملاء المتكررين." : language === "ru" ? "Указанные цены — отправная точка. Мы предлагаем специальные скидки для крупных проектов и постоянных клиентов." : language === "uk" ? "Вказані ціни — це відправна точка. Ми пропонуємо спеціальні знижки для великих проектів та постійних клієнтів." : "Listed prices are starting points. We offer special discounts for large projects and repeat customers.",
              },
              {
                q: language === "ar" ? "ما المدة الزمنية المتوقعة للمشروع؟" : language === "ru" ? "Сколько времени занимает проект?" : language === "uk" ? "Скільки часу займає проект?" : "How long does a project take?",
                a: language === "ar" ? "يعتمد على حجم وتعقيد المشروع. نقدم جدولاً زمنياً مفصلاً في عرض السعر. متوسط تجديد الشقة 30-60 يوم." : language === "ru" ? "Зависит от размера и сложности проекта. Предоставляем детальный график в смете. Средний ремонт квартиры — 30-60 дней." : language === "uk" ? "Залежить від розміру та складності проекту. Надаємо детальний графік у кошторисі. Середній ремонт квартири — 30-60 днів." : "Depends on project size and complexity. We provide a detailed timeline in the quote. Average apartment renovation: 30-60 days.",
              },
              {
                q: language === "ar" ? "هل يشمل السعر المواد؟" : language === "ru" ? "Включены ли материалы в стоимость?" : language === "uk" ? "Чи включені матеріали у вартість?" : "Are materials included in the price?",
                a: language === "ar" ? "نعم، جميع الباقات تشمل المواد والعمالة والتوصيل. نستخدم مواد عالية الجودة من موردين موثوقين." : language === "ru" ? "Да, все пакеты включают материалы, работу и доставку. Используем качественные материалы от проверенных поставщиков." : language === "uk" ? "Так, всі пакети включають матеріали, роботу та доставку. Використовуємо якісні матеріали від перевірених постачальників." : "Yes, all packages include materials, labor, and delivery. We use high-quality materials from trusted suppliers.",
              },
              {
                q: language === "ar" ? "ماذا لو تغيرت متطلباتي أثناء العمل؟" : language === "ru" ? "Что если требования изменятся во время работы?" : language === "uk" ? "Що якщо вимоги зміняться під час роботи?" : "What if my requirements change during work?",
                a: language === "ar" ? "نتفهم أن التغييرات قد تحدث. نناقش أي تعديلات ونقدم تحديثاً شفافاً للتكلفة قبل المتابعة." : language === "ru" ? "Мы понимаем, что изменения случаются. Обсуждаем любые корректировки и предоставляем прозрачный расчёт до продолжения." : language === "uk" ? "Ми розуміємо, що зміни трапляються. Обговорюємо будь-які корективи та надаємо прозорий розрахунок до продовження." : "We understand changes happen. We discuss any adjustments and provide transparent cost updates before proceeding.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-slate-900 dark:text-white pr-4">{item.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=20')] bg-cover bg-center opacity-10" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {language === "ar" ? "هل لديك مشروع خاص؟" : language === "ru" ? "Особый проект?" : language === "uk" ? "Особливий проект?" : "Special Project?"}
              </h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                {language === "ar" 
                  ? "نقدم حلولاً مخصصة لجميع أنواع المشاريع. اتصل بنا للحصول على عرض سعر مفصل يناسب احتياجاتك."
                  : language === "ru"
                  ? "Мы предлагаем индивидуальные решения для всех типов проектов. Свяжитесь с нами для детального расчёта."
                  : language === "uk"
                  ? "Ми пропонуємо індивідуальні рішення для всіх типів проектів. Зв'яжіться з нами для детального розрахунку."
                  : "We offer custom solutions for all project types. Contact us for a detailed quote tailored to your needs."}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/dubai-stroy/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-amber-500/25"
                >
                  {pricingData.contactUs}
                  <ArrowIcon className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+380674848029"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  +380 67 484 80 29
                </a>
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
