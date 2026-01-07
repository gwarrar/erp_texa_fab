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
  Calendar,
  Tag,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
  featured: boolean;
}

interface NewsData {
  sectionTitle: string;
  sectionSubtitle: string;
  readMore: string;
  viewAll: string;
  categories: Record<string, string>;
  items: NewsItem[];
}

// Default news data
const defaultNews: NewsData = {
  sectionTitle: "Новини",
  sectionSubtitle: "Останні оновлення та новини компанії",
  readMore: "Детальніше",
  viewAll: "Всі новини",
  categories: { all: "Всі", company: "Компанія", projects: "Проекти", tips: "Поради" },
  items: [],
};

export default function DSNewsPage() {
  const { language, dir } = useLanguage();
  useTheme();
  const [newsData, setNewsData] = useState<NewsData>(defaultNews);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const isRTL = dir === "rtl";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    fetch("/data/dubai-stroy/news.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data[language] || data["ru"]))
      .catch(() => {});
  }, [language]);

  const filteredNews = newsData.items.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === "ar" ? "ar-SA" : language === "ru" ? "ru-RU" : language === "uk" ? "uk-UA" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
              {newsData.sectionTitle}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {newsData.sectionSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 sticky top-28 md:top-32 z-30 backdrop-blur-xl bg-white/90 dark:bg-slate-950/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(newsData.categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  selectedCategory === key
                    ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {selectedCategory === "all" && newsData.items.filter(n => n.featured).length > 0 && (
        <section className="py-12 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            {newsData.items.filter(n => n.featured).slice(0, 1).map((item) => (
              <Link
                key={item.id}
                to={`/dubai-stroy/news/${item.id}`}
                className="group grid md:grid-cols-2 gap-8 bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden"
              >
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium rounded-full">
                      {newsData.categories[item.category]}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium">
                    {newsData.readMore}
                    <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          {filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <Link
                  key={item.id}
                  to={`/dubai-stroy/news/${item.id}`}
                  className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">
                        {newsData.categories[item.category]}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 flex-1">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <span className="flex items-center gap-1 text-sm text-slate-500">
                        <Calendar className="w-4 h-4" />
                        {formatDate(item.date)}
                      </span>
                      <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 text-sm font-medium">
                        {newsData.readMore}
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Tag className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500">
                {language === "ar"
                  ? "لا توجد أخبار في هذه الفئة"
                  : language === "ru"
                  ? "Нет новостей в этой категории"
                  : language === "uk"
                  ? "Немає новин у цій категорії"
                  : "No news in this category"}
              </p>
            </div>
          )}
        </div>
      </section>

      <DSFooter />
      <ScrollToTop />
    </div>
  );
}
