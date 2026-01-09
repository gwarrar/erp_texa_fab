import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { DSHeader } from "@/components/dubai-stroy/DSHeader";
import { DSFooter } from "@/components/dubai-stroy/DSFooter";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { SEOHead } from "@/components/seo/SEOHead";
import { CallbackWidget } from "@/components/widgets/CallbackWidget";
import { ChatProvider } from "@/components/chat/ChatProvider";
import { ChatWidget } from "@/components/chat/ChatWidget";
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  Award,
  Shield,
  Key,
  BadgeDollarSign,
  Building,
  CheckCircle,
  Star,
  Calendar,
  MapPin,
  Phone,
  ChevronRight,
  Play,
  Ruler,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  Award,
  Shield,
  Key,
  BadgeDollarSign,
  Building,
  Building2,
};

interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
  stats: {
    projects: string;
    projectsLabel: string;
    experience: string;
    experienceLabel: string;
    clients: string;
    clientsLabel: string;
  };
}

interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface FeaturesData {
  sectionTitle: string;
  sectionSubtitle: string;
  items: FeatureItem[];
}

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  area: string;
  location: string;
  duration: string;
  image: string;
  featured: boolean;
}

interface PortfolioData {
  sectionTitle: string;
  sectionSubtitle: string;
  viewAll: string;
  viewProject: string;
  items: PortfolioItem[];
}

// Default fallback data
const defaultHero: HeroData = {
  badge: "🏗️ Dubai Stroy",
  title: "Будуємо майбутнє разом",
  subtitle: "Професійне будівництво та ремонт під ключ",
  cta1: "Замовити консультацію",
  cta2: "Наші проекти",
  stats: { projects: "200+", projectsLabel: "Проектів", experience: "15+", experienceLabel: "Років досвіду", clients: "500+", clientsLabel: "Клієнтів" },
};

export default function DSHomePage() {
  const { language, dir } = useLanguage();
  useTheme();
  const [heroData, setHeroData] = useState<HeroData>(defaultHero);
  const [featuresData, setFeaturesData] = useState<FeaturesData | null>(null);
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);

  const isRTL = dir === "rtl";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    // Load data in background without blocking render
    fetch("/data/dubai-stroy/hero.json")
      .then((r) => r.json())
      .then((data) => setHeroData(data[language] || data["ru"]))
      .catch(() => {});
    
    fetch("/data/dubai-stroy/features.json")
      .then((r) => r.json())
      .then((data) => setFeaturesData(data[language] || data["ru"]))
      .catch(() => {});
    
    fetch("/data/dubai-stroy/portfolio.json")
      .then((r) => r.json())
      .then((data) => setPortfolioData(data[language] || data["ru"]))
      .catch(() => {});
  }, [language]);



  const featuredProjects = portfolioData?.items.filter((p) => p.featured).slice(0, 3) || [];

  return (
    <AnalyticsProvider>
      <ChatProvider>
        <SEOHead 
          title="Dubai Stroy - Premium Construction & Building Materials"
          description="Quality construction materials and interior solutions for your dream home."
        />
        <div className={cn("min-h-screen bg-white dark:bg-slate-950", isRTL ? "rtl" : "ltr")} dir={dir}>
          <DSHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Modern Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 pt-44 pb-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-300 text-sm font-medium mb-8">
              <Building2 className="w-4 h-4" />
              {heroData?.badge}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {heroData?.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              {heroData?.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                to="/dubai-stroy/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50"
              >
                {heroData?.cta1}
                <ArrowIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/dubai-stroy/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
              >
                <Play className="w-5 h-5" />
                {heroData?.cta2}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center sm:text-start">
                <p className="text-3xl md:text-4xl font-bold text-amber-400">{heroData?.stats.projects}</p>
                <p className="text-sm text-slate-400">{heroData?.stats.projectsLabel}</p>
              </div>
              <div className="text-center sm:text-start">
                <p className="text-3xl md:text-4xl font-bold text-amber-400">{heroData?.stats.experience}</p>
                <p className="text-sm text-slate-400">{heroData?.stats.experienceLabel}</p>
              </div>
              <div className="text-center sm:text-start">
                <p className="text-3xl md:text-4xl font-bold text-amber-400">{heroData?.stats.clients}</p>
                <p className="text-sm text-slate-400">{heroData?.stats.clientsLabel}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-amber-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {featuresData?.sectionTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {featuresData?.sectionSubtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresData?.items.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Building2;
              return (
                <div
                  key={feature.id}
                  className="group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                {portfolioData?.sectionTitle}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {portfolioData?.sectionSubtitle}
              </p>
            </div>
            <Link
              to="/dubai-stroy/portfolio"
              className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium hover:gap-3 transition-all"
            >
              {portfolioData?.viewAll}
              <ArrowIcon className="w-5 h-5" />
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/dubai-stroy/portfolio/${project.id}`}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-300 mb-3">
                    <span className="flex items-center gap-1">
                      <Ruler className="w-3.5 h-3.5" />
                      {project.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-amber-500 dark:bg-amber-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Building2, value: "150+", label: language === "ar" ? "مشروع منجز" : language === "ru" ? "Проектов выполнено" : language === "uk" ? "Проектів виконано" : "Projects Completed" },
              { icon: Award, value: "12+", label: language === "ar" ? "سنة خبرة" : language === "ru" ? "Лет опыта" : language === "uk" ? "Років досвіду" : "Years Experience" },
              { icon: Star, value: "98%", label: language === "ar" ? "رضا العملاء" : language === "ru" ? "Довольных клиентов" : language === "uk" ? "Задоволених клієнтів" : "Client Satisfaction" },
              { icon: Shield, value: "5+", label: language === "ar" ? "سنوات ضمان" : language === "ru" ? "Лет гарантии" : language === "uk" ? "Років гарантії" : "Years Warranty" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-amber-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-slate-900 dark:bg-slate-950 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Interior"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {language === "ar" ? "جاهز لبدء مشروعك؟" : language === "ru" ? "Готовы начать проект?" : language === "uk" ? "Готові почати проект?" : "Ready to Start Your Project?"}
            </h2>
            <p className="text-lg text-slate-400 mb-10">
              {language === "ar" ? "اتصل بنا اليوم للحصول على استشارة مجانية وعرض سعر مفصل لمشروعك." : language === "ru" ? "Свяжитесь с нами сегодня для бесплатной консультации и подробного расчёта вашего проекта." : language === "uk" ? "Зв'яжіться з нами сьогодні для безкоштовної консультації та детального розрахунку вашого проекту." : "Contact us today for a free consultation and detailed quote for your project."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/dubai-stroy/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-amber-500/30"
              >
                {language === "ar" ? "احصل على عرض سعر" : language === "ru" ? "Получить расчёт" : language === "uk" ? "Отримати розрахунок" : "Get Quote"}
                <ArrowIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:+380674848029"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                +380 67 484 80 29
              </a>
            </div>
          </div>
        </div>
      </section>

          <DSFooter />
          <ScrollToTop />
          <CallbackWidget />
          <ChatWidget />
        </div>
      </ChatProvider>
    </AnalyticsProvider>
  );
}
