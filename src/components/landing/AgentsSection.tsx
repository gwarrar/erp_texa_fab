import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { 
  Handshake, 
  TrendingUp, 
  MapPin, 
  Award, 
  Users, 
  DollarSign,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

export function AgentsSection() {
  const { language, dir, t } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  const benefits = [
    {
      icon: DollarSign,
      title: language === "ar" ? "عمولة 30%" : language === "ru" ? "30% комиссия" : language === "uk" ? "30% комісія" : "30% Commission",
      desc: language === "ar" ? "احصل على 30% من كل عملية بيع" : language === "ru" ? "Получайте 30% от каждой продажи" : language === "uk" ? "Отримуйте 30% від кожного продажу" : "Earn 30% on every sale you make",
    },
    {
      icon: MapPin,
      title: language === "ar" ? "سوّق في منطقتك" : language === "ru" ? "Продавайте в вашем регионе" : language === "uk" ? "Продавайте у вашому регіоні" : "Sell in Your Area",
      desc: language === "ar" ? "كن الممثل الحصري في مدينتك" : language === "ru" ? "Станьте эксклюзивным представителем в вашем городе" : language === "uk" ? "Станьте ексклюзивним представником у вашому місті" : "Be the exclusive rep in your city",
    },
    {
      icon: Award,
      title: language === "ar" ? "تدريب ومواد مجانية" : language === "ru" ? "Бесплатное обучение и материалы" : language === "uk" ? "Безкоштовне навчання та матеріали" : "Free Training & Materials",
      desc: language === "ar" ? "نوفر لك كل ما تحتاجه للنجاح" : language === "ru" ? "Мы предоставим всё для вашего успеха" : language === "uk" ? "Ми надамо все для вашого успіху" : "We provide everything you need to succeed",
    },
    {
      icon: TrendingUp,
      title: language === "ar" ? "دخل متكرر" : language === "ru" ? "Постоянный доход" : language === "uk" ? "Постійний дохід" : "Recurring Income",
      desc: language === "ar" ? "اكسب عمولات مستمرة على التجديدات" : language === "ru" ? "Зарабатывайте на продлениях подписок" : language === "uk" ? "Заробляйте на продовженнях підписок" : "Earn on subscription renewals",
    },
  ];

  const stats = [
    { value: "30%", label: language === "ar" ? "عمولة على كل صفقة" : language === "ru" ? "Комиссия с каждой сделки" : language === "uk" ? "Комісія з кожної угоди" : "Commission Per Sale" },
    { value: "45+", label: language === "ar" ? "دولة" : language === "ru" ? "Стран" : language === "uk" ? "Країн" : "Countries" },
    { value: "0$", label: language === "ar" ? "رسوم الانضمام" : language === "ru" ? "Стоимость вступления" : language === "uk" ? "Вартість вступу" : "Joining Fee" },
    { value: "24/7", label: language === "ar" ? "دعم للشركاء" : language === "ru" ? "Поддержка партнёров" : language === "uk" ? "Підтримка партнерів" : "Partner Support" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50 dark:opacity-20" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">
            <Handshake className="w-4 h-4" />
            {language === "ar" ? "ابدأ مشروعك الخاص" : language === "ru" ? "Начните свой бизнес" : language === "uk" ? "Почніть свій бізнес" : "Start Your Own Business"}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {language === "ar" ? "كن شريكنا واكسب 30%" : language === "ru" ? "Станьте партнёром и зарабатывайте 30%" : language === "uk" ? "Станьте партнером і заробляйте 30%" : "Become Our Partner & Earn 30%"}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {language === "ar" 
              ? "سوّق نظام TexaFab في منطقتك واحصل على عمولة 30% من كل عملية بيع. نوفر لك التدريب والمواد التسويقية والدعم الكامل مجاناً!"
              : language === "ru"
              ? "Продавайте TexaFab в вашем регионе и получайте 30% комиссию с каждой продажи. Мы предоставим обучение, маркетинговые материалы и полную поддержку бесплатно!"
              : language === "uk"
              ? "Продавайте TexaFab у вашому регіоні та отримуйте 30% комісію з кожного продажу. Ми надамо навчання, маркетингові матеріали та повну підтримку безкоштовно!"
              : "Sell TexaFab in your area and earn 30% commission on every sale. We provide training, marketing materials, and full support for free!"}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700"
            >
              <div className="text-3xl md:text-4xl font-bold text-texafab-emerald dark:text-texafab-teal mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                alt="Business Partnership"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-texafab-gold to-amber-500 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">
                      {language === "ar" ? "شريكنا من دبي" : language === "ru" ? "Наш партнёр из Дубая" : language === "uk" ? "Наш партнер з Дубая" : "Our Partner from Dubai"}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {language === "ar" ? "حقق $12,000 في شهر واحد!" : language === "ru" ? "Заработал $12,000 за месяц!" : language === "uk" ? "Заробив $12,000 за місяць!" : "Earned $12,000 in one month!"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-texafab-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-texafab-emerald/20 rounded-full blur-2xl" />
          </div>

          {/* Right - Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {language === "ar" ? "لماذا تبيع TexaFab؟" : language === "ru" ? "Почему продавать TexaFab?" : language === "uk" ? "Чому продавати TexaFab?" : "Why Sell TexaFab?"}
            </h3>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-texafab-emerald/30 dark:hover:border-texafab-teal/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-texafab-emerald to-texafab-teal flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/agents-dealers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-texafab-gold to-amber-500 hover:from-amber-500 hover:to-texafab-gold text-white font-semibold rounded-xl transition-all shadow-lg shadow-amber-500/25 hover:shadow-xl"
              >
                {language === "ar" ? "قدّم طلبك الآن" : language === "ru" ? "Подать заявку" : language === "uk" ? "Подати заявку" : "Apply Now"}
                <ArrowIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/agents-dealers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition-all"
              >
                {language === "ar" ? "تعرف على المزيد" : language === "ru" ? "Узнать больше" : language === "uk" ? "Дізнатися більше" : "Learn More"}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Trust Items */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
            {[
              language === "ar" ? "✓ بدون رسوم انضمام" : language === "ru" ? "✓ Без вступительных взносов" : language === "uk" ? "✓ Без вступних внесків" : "✓ No joining fees",
              language === "ar" ? "✓ تدريب مجاني" : language === "ru" ? "✓ Бесплатное обучение" : language === "uk" ? "✓ Безкоштовне навчання" : "✓ Free training",
              language === "ar" ? "✓ مواد تسويقية" : language === "ru" ? "✓ Маркетинговые материалы" : language === "uk" ? "✓ Маркетингові матеріали" : "✓ Marketing materials",
              language === "ar" ? "✓ دعم فني 24/7" : language === "ru" ? "✓ Поддержка 24/7" : language === "uk" ? "✓ Підтримка 24/7" : "✓ 24/7 Support",
            ].map((item, index) => (
              <span key={index} className="flex items-center gap-1">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
