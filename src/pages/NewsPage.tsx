import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  Newspaper, 
  Sparkles,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  User
} from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  image: string;
  href: string;
  category?: string;
  author?: string;
  readTime?: string;
}

interface NewsData {
  title: string;
  subtitle: string;
  items: NewsItem[];
}

const translations = {
  en: {
    pageTitle: "News & Updates",
    pageSubtitle: "Stay informed about our latest developments, features, and industry insights",
    readMore: "Read More",
    new: "New",
    backToNews: "Back to News",
    shareArticle: "Share Article",
    copied: "Copied!",
    relatedArticles: "Related Articles",
    noNews: "No news articles available at the moment.",
    latestNews: "Latest News",
    allCategories: "All Categories",
    readTime: "min read",
    by: "By",
  },
  ar: {
    pageTitle: "الأخبار والتحديثات",
    pageSubtitle: "ابق على اطلاع بأحدث التطورات والمميزات ورؤى الصناعة",
    readMore: "اقرأ المزيد",
    new: "جديد",
    backToNews: "العودة للأخبار",
    shareArticle: "مشاركة المقال",
    copied: "تم النسخ!",
    relatedArticles: "مقالات ذات صلة",
    noNews: "لا توجد أخبار متاحة حالياً.",
    latestNews: "آخر الأخبار",
    allCategories: "جميع الفئات",
    readTime: "دقيقة للقراءة",
    by: "بواسطة",
  },
  tr: {
    pageTitle: "Haberler ve Güncellemeler",
    pageSubtitle: "En son gelişmeler, özellikler ve sektör içgörüleri hakkında bilgi edinin",
    readMore: "Devamını Oku",
    new: "Yeni",
    backToNews: "Haberlere Dön",
    shareArticle: "Makaleyi Paylaş",
    copied: "Kopyalandı!",
    relatedArticles: "İlgili Makaleler",
    noNews: "Şu anda haber mevcut değil.",
    latestNews: "Son Haberler",
    allCategories: "Tüm Kategoriler",
    readTime: "dk okuma",
    by: "Yazan",
  },
  ru: {
    pageTitle: "Новости и обновления",
    pageSubtitle: "Будьте в курсе последних разработок, функций и отраслевых новостей",
    readMore: "Читать далее",
    new: "Новое",
    backToNews: "Вернуться к новостям",
    shareArticle: "Поделиться статьей",
    copied: "Скопировано!",
    relatedArticles: "Похожие статьи",
    noNews: "На данный момент нет новостей.",
    latestNews: "Последние новости",
    allCategories: "Все категории",
    readTime: "мин чтения",
    by: "Автор",
  },
  uk: {
    pageTitle: "Новини та оновлення",
    pageSubtitle: "Будьте в курсі останніх розробок, функцій та галузевих новин",
    readMore: "Читати далі",
    new: "Нове",
    backToNews: "Повернутися до новин",
    shareArticle: "Поділитися статтею",
    copied: "Скопійовано!",
    relatedArticles: "Схожі статті",
    noNews: "Наразі немає новин.",
    latestNews: "Останні новини",
    allCategories: "Всі категорії",
    readTime: "хв читання",
    by: "Автор",
  },
  pl: {
    pageTitle: "Wiadomości i aktualizacje",
    pageSubtitle: "Bądź na bieżąco z najnowszymi zmianami, funkcjami i trendami branżowymi",
    readMore: "Czytaj więcej",
    new: "Nowe",
    backToNews: "Powrót do wiadomości",
    shareArticle: "Udostępnij artykuł",
    copied: "Skopiowano!",
    relatedArticles: "Powiązane artykuły",
    noNews: "Brak dostępnych wiadomości.",
    latestNews: "Najnowsze wiadomości",
    allCategories: "Wszystkie kategorie",
    readTime: "min czytania",
    by: "Autor",
  },
  ro: {
    pageTitle: "Știri și actualizări",
    pageSubtitle: "Rămâneți la curent cu cele mai recente dezvoltări, funcții și informații din industrie",
    readMore: "Citește mai mult",
    new: "Nou",
    backToNews: "Înapoi la știri",
    shareArticle: "Distribuie articolul",
    copied: "Copiat!",
    relatedArticles: "Articole conexe",
    noNews: "Nu sunt disponibile știri momentan.",
    latestNews: "Ultimele știri",
    allCategories: "Toate categoriile",
    readTime: "min citire",
    by: "De",
  },
};

// News List Component
function NewsList() {
  const { language, dir } = useLanguage();
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const isRTL = dir === "rtl";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const text = translations[language as keyof typeof translations] || translations.en;

  useEffect(() => {
    setLoading(true);
    
    // Default news data as fallback
    const defaultNews: NewsData = {
      title: "Latest News",
      subtitle: "Stay updated with TexaCore",
      items: [
        {
          id: "1",
          title: language === "ar" ? "إصدار TexaCore 3.0" : "TexaCore 3.0 Released",
          excerpt: language === "ar" 
            ? "تحديث رئيسي مع تحليلات مدعومة بالذكاء الاصطناعي وتكامل RFID محسّن." 
            : "Major update with new AI-powered analytics and improved RFID integration.",
          date: "2025-01-20",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
          href: "/news/1"
        },
        {
          id: "2",
          title: language === "ar" ? "التوسع إلى جنوب شرق آسيا" : "Expanding to Southeast Asia",
          excerpt: language === "ar"
            ? "TexaCore يعلن عن شراكات جديدة في أسواق فيتنام وتايلاند."
            : "TexaCore announces new partnerships in Vietnam and Thailand markets.",
          date: "2025-01-18",
          image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
          href: "/news/2"
        },
        {
          id: "3",
          title: language === "ar" ? "تجديد شهادة ISO 27001" : "ISO 27001 Certification Renewed",
          excerpt: language === "ar"
            ? "التزامنا بالأمان مستمر مع تجديد الشهادة."
            : "Our commitment to security continues with renewed certification.",
          date: "2025-01-15",
          image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
          href: "/news/3"
        }
      ]
    };
    
    fetch("/data/news.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Response is not JSON");
        }
        return res.json();
      })
      .then((data) => {
        const langData = data[language] || data["en"];
        setNewsData(langData);
        setLoading(false);
      })
      .catch(() => {
        // Silently use default data on fetch failure
        setNewsData(defaultNews);
        setLoading(false);
      });
  }, [language]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "ar" ? "ar-EG" : language, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isRecent = (dateString: string) => {
    const newsDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - newsDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-texafab-emerald"></div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-texafab-slate to-texafab-slate/95 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-texafab-emerald/20 text-texafab-emerald px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Newspaper className="w-4 h-4" />
            <span>{text.latestNews}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            {text.pageTitle}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {text.pageSubtitle}
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {newsData && newsData.items && newsData.items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.items.map((news, index) => (
                <Card
                  key={news.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-texafab-emerald/20 to-texafab-gold/20">
                    {news.image ? (
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-8xl opacity-30">
                          {index % 3 === 0 ? "🚀" : index % 3 === 1 ? "🌍" : "🏆"}
                        </div>
                      </div>
                    )}
                    
                    {isRecent(news.date) && (
                      <Badge className="absolute top-4 right-4 bg-texafab-gold text-white">
                        <Sparkles className="w-3 h-3 mr-1" />
                        {text.new}
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(news.date)}
                      </span>
                      {news.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {news.readTime} {text.readTime}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-texafab-emerald transition-colors">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                      {news.excerpt}
                    </p>

                    <Link
                      to={`/news/${news.id}`}
                      className="inline-flex items-center gap-2 text-texafab-emerald font-semibold hover:gap-3 transition-all"
                    >
                      {text.readMore}
                      <ArrowIcon className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">{text.noNews}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

// Single News Article Component
function NewsArticle({ articleId }: { articleId: string }) {
  const { language, dir } = useLanguage();
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const isRTL = dir === "rtl";
  const BackIcon = isRTL ? ChevronRight : ChevronLeft;
  const text = translations[language as keyof typeof translations] || translations.en;

  useEffect(() => {
    setLoading(true);
    
    // Default news data as fallback
    const defaultNews: NewsData = {
      title: "Latest News",
      subtitle: "Stay updated with TexaCore",
      items: [
        {
          id: "1",
          title: language === "ar" ? "إصدار TexaCore 3.0" : "TexaCore 3.0 Released",
          excerpt: language === "ar" 
            ? "تحديث رئيسي مع تحليلات مدعومة بالذكاء الاصطناعي وتكامل RFID محسّن." 
            : "Major update with new AI-powered analytics and improved RFID integration.",
          date: "2025-01-20",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
          href: "/news/1"
        },
        {
          id: "2",
          title: language === "ar" ? "التوسع إلى جنوب شرق آسيا" : "Expanding to Southeast Asia",
          excerpt: language === "ar"
            ? "TexaCore يعلن عن شراكات جديدة في أسواق فيتنام وتايلاند."
            : "TexaCore announces new partnerships in Vietnam and Thailand markets.",
          date: "2025-01-18",
          image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
          href: "/news/2"
        },
        {
          id: "3",
          title: language === "ar" ? "تجديد شهادة ISO 27001" : "ISO 27001 Certification Renewed",
          excerpt: language === "ar"
            ? "التزامنا بالأمان مستمر مع تجديد الشهادة."
            : "Our commitment to security continues with renewed certification.",
          date: "2025-01-15",
          image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
          href: "/news/3"
        }
      ]
    };
    
    fetch("/data/news.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Response is not JSON");
        }
        return res.json();
      })
      .then((data) => {
        const langData = data[language] || data["en"];
        setNewsData(langData);
        const foundArticle = langData.items.find((item: NewsItem) => item.id === articleId);
        setArticle(foundArticle || null);
        setLoading(false);
      })
      .catch(() => {
        // Silently use default data on fetch failure
        setNewsData(defaultNews);
        const foundArticle = defaultNews.items.find((item: NewsItem) => item.id === articleId);
        setArticle(foundArticle || null);
        setLoading(false);
      });
  }, [language, articleId]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "ar" ? "ar-EG" : language, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article?.title || "";
    
    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, "_blank");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, "_blank");
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-texafab-emerald"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Newspaper className="w-16 h-16 text-gray-300 mb-4" />
        <p className="text-gray-500 text-lg mb-4">Article not found</p>
        <Link to="/news">
          <Button className="bg-texafab-emerald hover:bg-texafab-emerald/90">
            <BackIcon className="w-4 h-4 mr-2" />
            {text.backToNews}
          </Button>
        </Link>
      </div>
    );
  }

  // Get related articles (other articles except current)
  const relatedArticles = newsData?.items.filter(item => item.id !== articleId).slice(0, 3) || [];

  return (
    <>
      {/* Article Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-texafab-slate to-texafab-slate/95 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <BackIcon className="w-4 h-4" />
            {text.backToNews}
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </span>
              {article.author && (
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {text.by} {article.author}
                </span>
              )}
              {article.readTime && (
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime} {text.readTime}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              {article.title}
            </h1>

            <p className="text-xl text-gray-400">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            {article.image && (
              <div className="rounded-2xl overflow-hidden shadow-xl mb-10 -mt-20 relative z-20">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            )}

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-10 pb-10 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 font-medium flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                {text.shareArticle}:
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare("facebook")}
                  className="rounded-full"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare("twitter")}
                  className="rounded-full"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare("linkedin")}
                  className="rounded-full"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare("copy")}
                  className="rounded-full"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {article.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {article.excerpt}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 mt-6 italic">
                    Full article content coming soon...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {text.relatedArticles}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedArticles.map((news, index) => (
                <Card
                  key={news.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900"
                >
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-texafab-emerald/20 to-texafab-gold/20">
                    {news.image ? (
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-5xl opacity-30">
                          {index % 3 === 0 ? "🚀" : index % 3 === 1 ? "🌍" : "🏆"}
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-500 mb-2">{formatDate(news.date)}</p>
                    <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-texafab-emerald transition-colors">
                      {news.title}
                    </h3>
                    <Link
                      to={`/news/${news.id}`}
                      className="inline-flex items-center gap-1 text-texafab-emerald text-sm font-medium mt-3"
                    >
                      {text.readMore}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

// Main News Page Component
export default function NewsPage() {
  const { id } = useParams<{ id?: string }>();
  const { dir } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" dir={dir}>
      <Header />
      
      {id ? <NewsArticle articleId={id} /> : <NewsList />}
      
      <Footer />
    </div>
  );
}
