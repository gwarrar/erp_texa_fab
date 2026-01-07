import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { DSHeader } from "@/components/dubai-stroy/DSHeader";
import { DSFooter } from "@/components/dubai-stroy/DSFooter";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import {
  Building2,
  Home,
  Building,
  Hammer,
  MapPin,
  Ruler,
  Clock,
  ArrowRight,
  ArrowLeft,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
  categories: {
    all: string;
    apartments: string;
    houses: string;
    commercial: string;
    renovation: string;
  };
  items: PortfolioItem[];
}

const categoryIcons: Record<string, React.ElementType> = {
  apartments: Building2,
  houses: Home,
  commercial: Building,
  renovation: Hammer,
};

// Default data to prevent loading state
const defaultPortfolio: PortfolioData = {
  sectionTitle: "Наші проекти",
  sectionSubtitle: "Перегляньте наші реалізовані роботи",
  viewAll: "Переглянути всі",
  viewProject: "Детальніше",
  categories: { all: "Всі", apartments: "Квартири", houses: "Будинки", commercial: "Комерція", renovation: "Ремонт" },
  items: [],
};

export default function DSPortfolioPage() {
  const { language, dir } = useLanguage();
  useTheme();
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultPortfolio);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const isRTL = dir === "rtl";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    fetch("/data/dubai-stroy/portfolio.json")
      .then((res) => res.json())
      .then((data) => setPortfolioData(data[language] || data["ru"]))
      .catch(() => {});
  }, [language]);

  const filteredItems = portfolioData.items.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={cn("min-h-screen bg-white dark:bg-slate-950", isRTL ? "rtl" : "ltr")} dir={dir}>
      <DSHeader />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              {portfolioData.sectionTitle}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              {portfolioData.sectionSubtitle}
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className={cn(
                "absolute top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400",
                isRTL ? "right-4" : "left-4"
              )} />
              <input
                type="text"
                placeholder={language === "ar" ? "ابحث في المشاريع..." : language === "ru" ? "Поиск проектов..." : language === "uk" ? "Пошук проектів..." : "Search projects..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                  "w-full py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors",
                  isRTL ? "pr-12 pl-4" : "pl-12 pr-4"
                )}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 sticky top-28 md:top-32 z-30 backdrop-blur-xl bg-white/90 dark:bg-slate-950/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(portfolioData.categories).map(([key, label]) => {
              const Icon = categoryIcons[key] || Building2;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all",
                    selectedCategory === key
                      ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  )}
                >
                  {key !== "all" && <Icon className="w-4 h-4" />}
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((project) => {
                const CategoryIcon = categoryIcons[project.category] || Building2;
                return (
                  <div
                    key={project.id}
                    className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300">
                          <CategoryIcon className="w-4 h-4 text-amber-500" />
                          {portfolioData.categories[project.category as keyof typeof portfolioData.categories]}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1.5 bg-amber-500 text-white text-xs font-semibold rounded-lg">
                            ⭐ {language === "ar" ? "مميز" : language === "ru" ? "Избранное" : language === "uk" ? "Вибране" : "Featured"}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                        {project.description}
                      </p>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <Ruler className="w-4 h-4" />
                          {project.area}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {project.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <Building2 className="w-10 h-10 text-slate-400" />
              </div>
              <p className="text-slate-500 dark:text-slate-400">
                {language === "ar" ? "لا توجد مشاريع في هذه الفئة" : language === "ru" ? "Нет проектов в этой категории" : language === "uk" ? "Немає проектів у цій категорії" : "No projects in this category"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-500 dark:bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {language === "ar" ? "هل أعجبتك أعمالنا؟" : language === "ru" ? "Понравились наши работы?" : language === "uk" ? "Сподобались наші роботи?" : "Like Our Work?"}
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            {language === "ar" 
              ? "دعنا نساعدك في تحقيق مشروع أحلامك. اتصل بنا اليوم للحصول على استشارة مجانية."
              : language === "ru"
              ? "Давайте поможем воплотить ваш проект мечты. Свяжитесь с нами для бесплатной консультации."
              : language === "uk"
              ? "Давайте допоможемо втілити ваш проект мрії. Зв'яжіться з нами для безкоштовної консультації."
              : "Let us help you achieve your dream project. Contact us today for a free consultation."}
          </p>
          <Link
            to="/dubai-stroy/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-colors shadow-lg"
          >
            {language === "ar" ? "ابدأ مشروعك" : language === "ru" ? "Начать проект" : language === "uk" ? "Почати проект" : "Start Your Project"}
            <ArrowIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <DSFooter />
      <ScrollToTop />
    </div>
  );
}
