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
  MapPin,
  Ruler,
  Clock,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Share2,
  Phone,
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
  gallery: string[];
  featured: boolean;
}

interface PortfolioData {
  sectionTitle: string;
  sectionSubtitle: string;
  viewAll: string;
  viewProject: string;
  categories: Record<string, string>;
  items: PortfolioItem[];
}

// Default data
const defaultPortfolio: PortfolioData = {
  sectionTitle: "Наші проекти",
  sectionSubtitle: "Перегляньте наші реалізовані роботи",
  viewAll: "Повернутися до портфоліо",
  viewProject: "Детальніше",
  categories: {},
  items: [],
};

export default function DSProjectDetailPage() {
  const { id } = useParams();
  const { language, dir } = useLanguage();
  useTheme();
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultPortfolio);
  const [project, setProject] = useState<PortfolioItem | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const isRTL = dir === "rtl";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const PrevIcon = isRTL ? ChevronRight : ChevronLeft;
  const NextIcon = isRTL ? ChevronLeft : ChevronRight;

  useEffect(() => {
    fetch("/data/dubai-stroy/portfolio.json")
      .then((res) => res.json())
      .then((data) => {
        const langData = data[language] || data["ru"];
        setPortfolioData(langData);
        const foundProject = langData.items.find((item: PortfolioItem) => item.id === id);
        setProject(foundProject || null);
      })
      .catch(() => {});
  }, [language, id]);

  const allImages = project ? [project.image, ...(project.gallery || [])] : [];

  const handlePrevImage = () => {
    setActiveImage((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImage((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };



  if (!project) {
    return (
      <div className={cn("min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white", isRTL ? "rtl" : "ltr")} dir={dir}>
        <DSHeader />
        <div className="pt-40 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language === "ar" ? "المشروع غير موجود" : language === "ru" ? "Проект не найден" : language === "uk" ? "Проект не знайдено" : "Project not found"}
          </h1>
          <Link to="/dubai-stroy/portfolio" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700">
            <ArrowIcon className="w-5 h-5 rotate-180" />
            {portfolioData.viewAll}
          </Link>
        </div>
        <DSFooter />
      </div>
    );
  }

  // Find related projects
  const relatedProjects = portfolioData.items
    .filter((item) => item.id !== project.id && item.category === project.category)
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
            <Link to="/dubai-stroy/portfolio" className="hover:text-amber-600">
              {portfolioData.sectionTitle}
            </Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white">{project.title}</span>
          </div>
        </div>
      </section>

      {/* Project Header */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium rounded-full mb-3">
                {portfolioData.categories[project.category]}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-3 bg-white dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <Link
                to="/dubai-stroy/contact"
                className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all"
              >
                {language === "ar" ? "طلب مشابه" : language === "ru" ? "Заказать похожий" : language === "uk" ? "Замовити подібний" : "Request Similar"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Main Image */}
            <div className="aspect-video rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
              <img
                src={allImages[activeImage]}
                alt={`${project.title} - ${activeImage + 1}`}
                className="w-full h-full object-cover"
              />
              
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                  >
                    <PrevIcon className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                  >
                    <NextIcon className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={cn(
                      "flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all",
                      activeImage === index
                        ? "border-amber-500 ring-2 ring-amber-500/30"
                        : "border-transparent opacity-70 hover:opacity-100"
                    )}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">
                {language === "ar" ? "عن المشروع" : language === "ru" ? "О проекте" : language === "uk" ? "Про проект" : "About the Project"}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-6">
                  {language === "ar" ? "تفاصيل المشروع" : language === "ru" ? "Детали проекта" : language === "uk" ? "Деталі проекту" : "Project Details"}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">
                        {language === "ar" ? "الموقع" : language === "ru" ? "Локация" : language === "uk" ? "Локація" : "Location"}
                      </p>
                      <p className="font-semibold">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <Ruler className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">
                        {language === "ar" ? "المساحة" : language === "ru" ? "Площадь" : language === "uk" ? "Площа" : "Area"}
                      </p>
                      <p className="font-semibold">{project.area}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">
                        {language === "ar" ? "المدة" : language === "ru" ? "Срок" : language === "uk" ? "Термін" : "Duration"}
                      </p>
                      <p className="font-semibold">{project.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-500 mb-4">
                    {language === "ar" ? "هل ترغب بمشروع مشابه؟" : language === "ru" ? "Хотите похожий проект?" : language === "uk" ? "Хочете схожий проект?" : "Want a similar project?"}
                  </p>
                  <Link
                    to="/dubai-stroy/contact"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    {language === "ar" ? "تواصل معنا" : language === "ru" ? "Связаться" : language === "uk" ? "Зв'язатися" : "Contact Us"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                {language === "ar" ? "مشاريع مشابهة" : language === "ru" ? "Похожие проекты" : language === "uk" ? "Схожі проекти" : "Related Projects"}
              </h2>
              <Link
                to="/dubai-stroy/portfolio"
                className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-2"
              >
                {portfolioData.viewAll}
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((item) => (
                <Link
                  key={item.id}
                  to={`/dubai-stroy/portfolio/${item.id}`}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm">{item.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <DSFooter />
      <ScrollToTop />
    </div>
  );
}
