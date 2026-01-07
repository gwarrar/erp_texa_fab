import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { NRHeader } from "@/components/nextrev/NRHeader";
import { NRFooter } from "@/components/nextrev/NRFooter";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { 
  ArrowRight, ArrowLeft, Calendar, User, Tag, Share2,
  ChevronLeft, ChevronRight, Loader2, Bot, Newspaper
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

export default function NRBlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, dir } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [post, setPost] = useState<BlogItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const isRTL = dir === "rtl";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const BackIcon = isRTL ? ChevronRight : ChevronLeft;

  useEffect(() => {
    fetch("/data/nr-blog.json")
      .then((res) => res.json())
      .then((data) => {
        const langData = data[language] || data["en"];
        setBlogData(langData);
        const foundPost = langData.items.find((item: BlogItem) => item.id === id);
        setPost(foundPost || null);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load blog data:", err);
        setIsLoading(false);
      });
  }, [language, id]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === "ar" ? "ar-SA" : language === "tr" ? "tr-TR" : language === "ru" ? "ru-RU" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const getRelatedPosts = () => {
    if (!blogData || !post) return [];
    return blogData.items
      .filter(item => item.id !== post.id && item.category === post.category)
      .slice(0, 3);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (!post || !blogData) {
    return (
      <div className={`min-h-screen bg-slate-950 text-white ${isRTL ? "rtl" : "ltr"}`} dir={dir}>
        <NRHeader />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-800 flex items-center justify-center">
              <Newspaper className="w-10 h-10 text-slate-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4">
              {language === "ar" ? "المقال غير موجود" : "Post Not Found"}
            </h1>
            <p className="text-slate-400 mb-8">
              {language === "ar" ? "لم نتمكن من العثور على المقال المطلوب" : "We couldn't find the requested article"}
            </p>
            <Link
              to="/next-revolution/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
            >
              <BackIcon className="w-5 h-5" />
              {language === "ar" ? "العودة للأخبار" : "Back to News"}
            </Link>
          </div>
        </div>
        <NRFooter />
      </div>
    );
  }

  const relatedPosts = getRelatedPosts();

  return (
    <div className={`min-h-screen bg-slate-950 text-white ${isRTL ? "rtl" : "ltr"}`} dir={dir}>
      <NRHeader />
      
      {/* Hero Image */}
      <section className="pt-24 relative">
        <div className="aspect-[21/9] max-h-[500px] overflow-hidden relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </div>
      </section>

      {/* Article Content */}
      <section className="relative -mt-32 pb-20">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/next-revolution/blog"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors"
            >
              <BackIcon className="w-5 h-5" />
              {language === "ar" ? "العودة للأخبار" : "Back to News"}
            </Link>

            {/* Article Header */}
            <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 md:p-12">
              {/* Category & Date */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                  <Tag className="w-4 h-4" />
                  {blogData.categories[post.category as keyof typeof blogData.categories]}
                </span>
                <span className="flex items-center gap-2 text-slate-400">
                  <Calendar className="w-4 h-4" />
                  {blogData.publishedOn} {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-2 text-slate-400">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-slate-700 mb-8" />

              {/* Content */}
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                  {post.content}
                </p>
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-slate-700">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400">
                      {language === "ar" ? "شارك المقال:" : "Share this article:"}
                    </span>
                    <button
                      onClick={() => navigator.clipboard.writeText(window.location.href)}
                      className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <Share2 className="w-5 h-5 text-slate-300" />
                    </button>
                  </div>
                  <Link
                    to="/next-revolution/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
                  >
                    {language === "ar" ? "تواصل معنا" : "Contact Us"}
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-4xl mx-auto mt-16">
              <h2 className="text-2xl font-bold text-white mb-8">
                {language === "ar" ? "مقالات ذات صلة" : "Related Articles"}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/next-revolution/blog/${item.id}`}
                    className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-2">
                        {formatDate(item.date)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <NRFooter />
      <ScrollToTop />
    </div>
  );
}
