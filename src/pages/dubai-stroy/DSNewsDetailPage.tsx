import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
  Share2,
  Facebook,
  Linkedin,
  Copy,
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

// Default data
const defaultNews: NewsData = {
  sectionTitle: "Новини",
  sectionSubtitle: "Останні новини та оновлення",
  readMore: "Детальніше",
  viewAll: "Повернутися до новин",
  categories: {},
  items: [],
};

export default function DSNewsDetailPage() {
  const { id } = useParams();
  const { language, dir } = useLanguage();
  useTheme();
  const [newsData, setNewsData] = useState<NewsData>(defaultNews);
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [copied, setCopied] = useState(false);

  const isRTL = dir === "rtl";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    fetch("/data/dubai-stroy/news.json")
      .then((res) => res.json())
      .then((data) => {
        const langData = data[language] || data["ru"];
        setNewsData(langData);
        const foundArticle = langData.items.find((item: NewsItem) => item.id === id);
        setArticle(foundArticle || null);
      })
      .catch(() => {});
  }, [language, id]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === "ar" ? "ar-SA" : language === "ru" ? "ru-RU" : language === "uk" ? "uk-UA" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };



  if (!article) {
    return (
      <div className={cn("min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white", isRTL ? "rtl" : "ltr")} dir={dir}>
        <DSHeader />
        <div className="pt-40 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language === "ar" ? "المقال غير موجود" : language === "ru" ? "Статья не найдена" : language === "uk" ? "Стаття не знайдена" : "Article not found"}
          </h1>
          <Link to="/dubai-stroy/news" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700">
            <ArrowIcon className="w-5 h-5 rotate-180" />
            {newsData.viewAll}
          </Link>
        </div>
        <DSFooter />
      </div>
    );
  }

  // Find related articles
  const relatedArticles = newsData.items
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  return (
    <div
      className={cn(
        "min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors",
        isRTL ? "rtl" : "ltr"
      )}
      dir={dir}
    >
      <DSHeader />

      {/* Breadcrumb */}
      <section className="pt-36 pb-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/dubai-stroy" className="hover:text-amber-600">
              {language === "ar" ? "الرئيسية" : language === "ru" ? "Главная" : language === "uk" ? "Головна" : "Home"}
            </Link>
            <span>/</span>
            <Link to="/dubai-stroy/news" className="hover:text-amber-600">
              {newsData.sectionTitle}
            </Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white line-clamp-1">{article.title}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium rounded-full">
              {newsData.categories[article.category]}
            </span>
            <span className="flex items-center gap-1 text-sm text-slate-500">
              <Calendar className="w-4 h-4" />
              {formatDate(article.date)}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-semibold">
                {article.author.charAt(0)}
              </div>
              <span className="text-slate-600 dark:text-slate-400">{article.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="aspect-video rounded-2xl overflow-hidden -mt-4 relative z-10 shadow-2xl">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            {/* Main Content */}
            <article className="lg:col-span-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-8 space-y-4">
                  {article.content.split(". ").map((sentence, index) => (
                    <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {sentence.trim()}{sentence.trim() && !sentence.endsWith(".") ? "." : ""}
                    </p>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                <p className="text-sm font-medium text-slate-500 mb-4">
                  {language === "ar" ? "شارك هذا المقال" : language === "ru" ? "Поделиться статьёй" : language === "uk" ? "Поділитися статтею" : "Share this article"}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-700 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                      copied
                        ? "bg-green-500 text-white"
                        : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                    )}
                  >
                    <Copy className="w-4 h-4" />
                    {copied
                      ? (language === "ar" ? "تم النسخ!" : language === "ru" ? "Скопировано!" : language === "uk" ? "Скопійовано!" : "Copied!")
                      : (language === "ar" ? "نسخ الرابط" : language === "ru" ? "Копировать ссылку" : language === "uk" ? "Копіювати посилання" : "Copy Link")}
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">
                    {language === "ar" ? "مقالات أخرى" : language === "ru" ? "Другие статьи" : language === "uk" ? "Інші статті" : "More Articles"}
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map((item) => (
                      <Link
                        key={item.id}
                        to={`/dubai-stroy/news/${item.id}`}
                        className="group flex gap-4"
                      >
                        <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium line-clamp-2 group-hover:text-amber-600 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1">
                            {formatDate(item.date)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/dubai-stroy/news"
                    className="w-full flex items-center justify-center gap-2 mt-6 py-3 bg-amber-500/10 hover:bg-amber-500 text-amber-600 hover:text-white font-medium rounded-xl transition-all"
                  >
                    {newsData.viewAll}
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <DSFooter />
      <ScrollToTop />
    </div>
  );
}
