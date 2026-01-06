import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe,
  MapPin,
  Building2,
  Users,
  Award,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export function GlobalPresence() {
  const { language, dir } = useLanguage();

  const regions = [
    {
      titleAr: "أوروبا",
      titleEn: "Europe",
      countriesAr: ["ألمانيا", "أيرلندا", "بولندا", "فرنسا", "إيطاليا"],
      countriesEn: ["Germany", "Ireland", "Poland", "France", "Italy"],
      companies: "200+",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80"
    },
    {
      titleAr: "الخليج العربي",
      titleEn: "Gulf Region",
      countriesAr: ["السعودية", "الإمارات", "قطر", "الكويت"],
      countriesEn: ["Saudi Arabia", "UAE", "Qatar", "Kuwait"],
      companies: "150+",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80"
    },
    {
      titleAr: "آسيا",
      titleEn: "Asia",
      countriesAr: ["تركيا", "الهند", "باكستان", "بنغلاديش"],
      countriesEn: ["Turkey", "India", "Pakistan", "Bangladesh"],
      companies: "100+",
      image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80"
    },
    {
      titleAr: "أفريقيا",
      titleEn: "Africa",
      countriesAr: ["مصر", "المغرب", "تونس", "نيجيريا"],
      countriesEn: ["Egypt", "Morocco", "Tunisia", "Nigeria"],
      companies: "50+",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80"
    }
  ];

  const achievementsBase = [
    {
      icon: Award,
      valueAr: "#1",
      valueEn: "#1",
      labelAr: "في صناعة الأقمشة",
      labelEn: "In Fabric Industry"
    },
    {
      icon: Users,
      valueAr: "+10,000",
      valueEn: "+10,000",
      labelAr: "مستخدم نشط",
      labelEn: "Active Users"
    },
    {
      icon: Globe,
      valueAr: "+50",
      valueEn: "+50",
      labelAr: "دولة",
      labelEn: "Countries"
    },
    {
      icon: Building2,
      valueAr: "+500",
      valueEn: "+500",
      labelAr: "شركة حول العالم",
      labelEn: "Companies Worldwide"
    }
  ];

  // Reverse for RTL to display correctly (right to left)
  const achievements = dir === "rtl" ? [...achievementsBase].reverse() : achievementsBase;

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 dark:bg-texafab-teal/20 text-texafab-emerald dark:text-texafab-teal text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" />
            {language === "ar" ? "حضور عالمي" : "Global Presence"}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-texafab-slate dark:text-white mb-6 leading-tight">
            {language === "ar" ? (
              <>الاختيار الأول لشركات الأقمشة <span className="text-texafab-emerald">عالمياً</span></>
            ) : (
              <>The First Choice for Fabric Companies <span className="text-texafab-emerald">Worldwide</span></>
            )}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {language === "ar"
              ? "من ألمانيا إلى السعودية، نخدم شركات الأقمشة في أكثر من 50 دولة حول العالم."
              : "From Germany to Saudi Arabia, we serve fabric companies in over 50 countries worldwide."
            }
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, i) => (
            <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-texafab-emerald/10 dark:bg-texafab-teal/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-texafab-emerald dark:text-texafab-teal" />
              </div>
              <div className="text-3xl font-black text-texafab-slate dark:text-white mb-1">
                {language === "ar" ? item.valueAr : item.valueEn}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {language === "ar" ? item.labelAr : item.labelEn}
              </div>
            </Card>
          ))}
        </div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regions.map((region, i) => (
            <Card key={i} className="overflow-hidden group hover:shadow-xl transition-all bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={region.image} 
                  alt={language === "ar" ? region.titleAr : region.titleEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-texafab-slate/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">{language === "ar" ? region.titleAr : region.titleEn}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Building2 className="w-4 h-4" />
                    {region.companies} {language === "ar" ? "شركة" : "companies"}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {(language === "ar" ? region.countriesAr : region.countriesEn).map((country, j) => (
                    <span key={j} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-texafab-emerald via-teal-600 to-texafab-emerald rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {language === "ar" 
              ? "انضم لأكبر شبكة من شركات الأقمشة في العالم"
              : "Join the World's Largest Network of Fabric Companies"
            }
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {language === "ar"
              ? "اكتشف لماذا اختارت الشركات الرائدة في أوروبا والخليج TexaCore"
              : "Discover why leading companies in Europe and the Gulf chose TexaCore"
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/industries">
              <Button className="h-12 px-6 bg-white text-texafab-emerald hover:bg-white/90 font-semibold rounded-xl">
                {language === "ar" ? "اكتشف القطاعات" : "Explore Industries"}
                <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="h-12 px-6 border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl">
                {language === "ar" ? "تواصل معنا" : "Contact Us"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
