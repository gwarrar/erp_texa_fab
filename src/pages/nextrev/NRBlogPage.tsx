import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { NRHeader } from "@/components/nextrev/NRHeader";
import { NRFooter } from "@/components/nextrev/NRFooter";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { 
  ArrowRight, ArrowLeft, Calendar, User, Tag, Search,
  Sparkles, Cpu, Globe, Handshake, RefreshCw, Newspaper,
  ChevronRight, Loader2, Bot
} from "lucide-react";

interface BlogItem {
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

interface BlogData {
  pageTitle: string;
  pageSubtitle: string;
  categories: {
    all: string;
    news: string;
    updates: string;
    projects: string;
    partnerships: string;
    ai: string;
  };
  readMore: string;
  publishedOn: string;
  items: BlogItem[];
}

const categoryIcons: Record<string, React.ElementType> = {
  news: Newspaper,
  updates: RefreshCw,
  projects: Globe,
  partnerships: Handshake,
  ai: Bot,
};

export default function NRBlogPage() {
  const { language, dir } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const isRTL = dir === "rtl";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    fetch("/data/nr-blog.json")
      .then((res) => res.json())
      .then((data) => {
        const langData = data[language] || data["en"];
        setBlogData(langData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load blog data:", err);
        setIsLoading(false);
      });
  }, [language]);

  const filteredItems = blogData?.items.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];

  const featuredItems = filteredItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === "ar" ? "ar-SA" : language === "tr" ? "tr-TR" : language === "ru" ? "ru-RU" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-slate-400">Failed to load blog data</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-slate-950 text-white ${isRTL ? "rtl" : "ltr"}`} dir={dir}>
      <NRHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {blogData.pageSubtitle}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-slate-300 bg-clip-text text-transparent">
              {blogData.pageTitle}
            </h1>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto mt-8">
              <Search className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 ${isRTL ? "right-4" : "left-4"}`} />
              <input
                type="text"
                placeholder={language === "ar" ? "ابحث في الأخبار..." : "Search news..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors ${isRTL ? "pr-12 pl-4" : "pl-12 pr-4"}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-slate-950 border-y border-slate-800 sticky top-20 z-30 backdrop-blur-xl bg-slate-950/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(blogData.categories).map(([key, label]) => {
              const Icon = categoryIcons[key] || Tag;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                    selectedCategory === key
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                      : "bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  {key !== "all" && <Icon className="w-4 h-4" />}
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredItems.length > 0 && (
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              {language === "ar" ? "مميز" : "Featured"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredItems.map((item) => {
                const CategoryIcon = categoryIcons[item.category] || Tag;
                return (
                  <Link
                    key={item.id}
                    to={`/next-revolution/blog/${item.id}`}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium">
                          <CategoryIcon className="w-3 h-3" />
                          {blogData.categories[item.category as keyof typeof blogData.categories]}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-400 text-xs">
                          <Calendar className="w-3 h-3" />
                          {formatDate(item.date)}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-blue-400 font-medium text-sm">
                        {blogData.readMore}
                        <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4">
          {regularItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularItems.map((item) => {
                const CategoryIcon = categoryIcons[item.category] || Tag;
                return (
                  <Link
                    key={item.id}
                    to={`/next-revolution/blog/${item.id}`}
                    className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-700/50 rounded-lg text-slate-300 text-xs font-medium">
                          <CategoryIcon className="w-3 h-3" />
                          {blogData.categories[item.category as keyof typeof blogData.categories]}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-slate-500">
                          <User className="w-4 h-4" />
                          {item.author}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Calendar className="w-4 h-4" />
                          {formatDate(item.date)}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800 flex items-center justify-center">
                <Newspaper className="w-8 h-8 text-slate-500" />
              </div>
              <p className="text-slate-400">
                {language === "ar" ? "لا توجد أخبار في هذه الفئة" : "No news found in this category"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* NEXA AI Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              {language === "ar" ? "قريباً" : "Coming Soon"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === "ar" ? "نيكسا - وكيل الذكاء الاصطناعي" : "NEXA - AI Agent"}
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              {language === "ar" 
                ? "وكيل الذكاء الاصطناعي المتطور من نكست ريفوليوشن. مصمم لتحويل سير العمل في المؤسسات وتقديم حلول ذكية للأعمال."
                : "Next Revolution's advanced AI agent. Designed to transform enterprise workflows and deliver intelligent business solutions."
              }
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Cpu, title: language === "ar" ? "استدلال متقدم" : "Advanced Reasoning", desc: language === "ar" ? "قدرات تفكير عميقة" : "Deep thinking capabilities" },
                { icon: Globe, title: language === "ar" ? "متعدد اللغات" : "Multilingual", desc: language === "ar" ? "دعم 20+ لغة" : "20+ languages supported" },
                { icon: Sparkles, title: language === "ar" ? "تكامل مؤسسي" : "Enterprise Integration", desc: language === "ar" ? "اتصال سلس بأنظمتك" : "Seamless connection to your systems" },
              ].map((feature, i) => (
                <div key={i} className="p-6 bg-slate-800/30 border border-slate-700 rounded-xl">
                  <feature.icon className="w-10 h-10 text-purple-400 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NRFooter />
      <ScrollToTop />
    </div>
  );
}
