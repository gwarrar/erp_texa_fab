import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { cms, type Language } from "@/lib/cms";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Calendar, Newspaper, Sparkles } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
  category?: string;
}

interface NewsData {
  title: string;
  subtitle: string;
  items: NewsItem[];
}

export function NewsSection() {
  const { t, language, dir, siteId } = useLanguage();
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const loadedRef = useRef<string | null>(null);
  const isRTL = dir === "rtl";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const cacheKey = `${siteId}-${language}`;
    if (loadedRef.current === cacheKey) return;
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

    // Try Supabase first, then fallback to JSON
    const loadNews = async () => {
      try {
        const cmsLanguage = (language === 'ar' || language === 'en' || language === 'ru') ? language : 'en';
        const supabaseData = await cms.news.getAll(siteId as any, cmsLanguage as Language);
        if (supabaseData && supabaseData.length > 0) {
          setNewsData({
            title: "Latest News",
            subtitle: "Stay updated with TexaCore",
            items: supabaseData.map((item: any) => ({
              id: item.id,
              title: item.title,
              excerpt: item.excerpt || item.content?.substring(0, 150) || '',
              date: item.published_at || item.created_at,
              image: item.image || "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
              href: `/news/${item.id}`,
              category: item.category
            }))
          });
          loadedRef.current = cacheKey;
          return;
        }
      } catch (error) {
        console.log('Supabase news fetch failed, trying JSON');
      }
      
      // Fallback to JSON
      fetch("/data/news.json")
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          const contentType = res.headers.get("content-type");
          if (!contentType || !contentType.includes("application/json")) throw new Error("Response is not JSON");
          return res.json();
        })
        .then((data) => {
          const langData = data[language] || data["en"];
          setNewsData(langData);
        })
        .catch(() => {
          setNewsData(defaultNews);
        });
    };
    
    loadNews();
  }, [language, siteId]);

  if (!newsData || !newsData.items || newsData.items.length === 0) {
    return null;
  }

  // Show only first 3 news items
  const displayedNews = newsData.items.slice(0, 3);

  const translations = {
    en: {
      title: "Latest News & Updates",
      subtitle: "Stay informed about our latest developments, features, and industry insights",
      viewAll: "View All News",
      readMore: "Read More",
      new: "New",
    },
    ar: {
      title: "آخر الأخبار والتحديثات",
      subtitle: "ابق على اطلاع بأحدث التطورات والمميزات ورؤى الصناعة",
      viewAll: "عرض جميع الأخبار",
      readMore: "اقرأ المزيد",
      new: "جديد",
    },
    tr: {
      title: "Son Haberler ve Güncellemeler",
      subtitle: "En son gelişmeler, özellikler ve sektör içgörüleri hakkında bilgi edinin",
      viewAll: "Tüm Haberleri Görüntüle",
      readMore: "Devamını Oku",
      new: "Yeni",
    },
    ru: {
      title: "Последние новости и обновления",
      subtitle: "Будьте в курсе последних разработок, функций и отраслевых новостей",
      viewAll: "Все новости",
      readMore: "Читать далее",
      new: "Новое",
    },
    uk: {
      title: "Останні новини та оновлення",
      subtitle: "Будьте в курсі останніх розробок, функцій та галузевих новин",
      viewAll: "Всі новини",
      readMore: "Читати далі",
      new: "Нове",
    },
    pl: {
      title: "Najnowsze wiadomości i aktualizacje",
      subtitle: "Bądź na bieżąco z najnowszymi zmianami, funkcjami i trendami branżowymi",
      viewAll: "Zobacz wszystkie wiadomości",
      readMore: "Czytaj więcej",
      new: "Nowe",
    },
    ro: {
      title: "Ultimele știri și actualizări",
      subtitle: "Rămâneți la curent cu cele mai recente dezvoltări, funcții și informații din industrie",
      viewAll: "Vezi toate știrile",
      readMore: "Citește mai mult",
      new: "Nou",
    },
  };

  const text = translations[language as keyof typeof translations] || translations.en;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "ar" ? "ar-EG" : language, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Check if news is recent (within last 7 days)
  const isRecent = (dateString: string) => {
    const newsDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - newsDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-texafab-emerald/10 text-texafab-emerald px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Newspaper className="w-4 h-4" />
            <span>{newsData.title || text.title}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {text.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {newsData.subtitle || text.subtitle}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayedNews.map((news, index) => (
            <Card
              key={news.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-texafab-emerald/20 to-texafab-gold/20">
                {news.image ? (
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl opacity-30">
                      {index === 0 ? "🚀" : index === 1 ? "🌍" : "🏆"}
                    </div>
                  </div>
                )}
                
                {/* New Badge */}
                {isRecent(news.date) && (
                  <Badge className="absolute top-3 right-3 bg-texafab-gold text-white">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {text.new}
                  </Badge>
                )}
              </div>

              <CardContent className="p-5">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(news.date)}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-texafab-emerald transition-colors">
                  {news.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                  {news.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  to={`/news/${news.id}`}
                  className="inline-flex items-center gap-2 text-texafab-emerald font-medium text-sm hover:gap-3 transition-all"
                >
                  {text.readMore}
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/news">
            <Button
              size="lg"
              className="bg-texafab-emerald hover:bg-texafab-emerald/90 text-white px-8 shadow-lg shadow-texafab-emerald/30"
            >
              {text.viewAll}
              <ArrowIcon className={`w-4 h-4 ${isRTL ? "mr-2" : "ml-2"}`} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
