import React from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Globe,
  Building2,
  Store,
  Factory,
  Truck,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Users,
  Award,
  TrendingUp
} from "lucide-react";

function IndustriesContent() {
  const { language, dir } = useLanguage();

  const regions = [
    {
      titleAr: "أوروبا",
      titleEn: "Europe",
      countries: language === "ar" 
        ? ["ألمانيا", "أيرلندا", "بولندا", "فرنسا", "إيطاليا", "هولندا", "بلجيكا", "النمسا"]
        : ["Germany", "Ireland", "Poland", "France", "Italy", "Netherlands", "Belgium", "Austria"],
      descAr: "الاختيار الأول للشركات الأوروبية الكبرى في صناعة الأقمشة والنسيج",
      descEn: "The first choice for major European companies in the fabric and textile industry",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80",
      stats: { companies: "200+", growth: "+45%" }
    },
    {
      titleAr: "دول الخليج",
      titleEn: "Gulf Region",
      countries: language === "ar"
        ? ["السعودية", "الإمارات", "قطر", "الكويت", "البحرين", "عُمان"]
        : ["Saudi Arabia", "UAE", "Qatar", "Kuwait", "Bahrain", "Oman"],
      descAr: "الحل المفضل لتجار الأقمشة في الخليج العربي مع دعم كامل للعربية",
      descEn: "The preferred solution for fabric traders in the Arabian Gulf with full Arabic support",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
      stats: { companies: "150+", growth: "+60%" }
    },
    {
      titleAr: "آسيا",
      titleEn: "Asia",
      countries: language === "ar"
        ? ["تركيا", "الهند", "باكستان", "بنغلاديش", "الصين", "فيتنام"]
        : ["Turkey", "India", "Pakistan", "Bangladesh", "China", "Vietnam"],
      descAr: "نظام متكامل لمصانع النسيج ومصدري الأقمشة في آسيا",
      descEn: "Integrated system for textile factories and fabric exporters in Asia",
      image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
      stats: { companies: "100+", growth: "+80%" }
    },
    {
      titleAr: "أفريقيا",
      titleEn: "Africa",
      countries: language === "ar"
        ? ["مصر", "المغرب", "تونس", "نيجيريا", "جنوب أفريقيا"]
        : ["Egypt", "Morocco", "Tunisia", "Nigeria", "South Africa"],
      descAr: "دعم متنامي لقطاع النسيج الأفريقي المتطور",
      descEn: "Growing support for the developing African textile sector",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
      stats: { companies: "50+", growth: "+120%" }
    }
  ];

  const industries = [
    {
      icon: Store,
      titleAr: "تجارة التجزئة",
      titleEn: "Retail Trade",
      descAr: "محلات بيع الأقمشة والمفروشات مع نظام نقاط بيع متطور",
      descEn: "Fabric and furnishing stores with advanced POS system",
      features: language === "ar"
        ? ["نقاط بيع سريعة", "إدارة العملاء", "برامج الولاء", "تقارير المبيعات"]
        : ["Fast POS", "Customer management", "Loyalty programs", "Sales reports"]
    },
    {
      icon: Building2,
      titleAr: "تجارة الجملة",
      titleEn: "Wholesale Trade",
      descAr: "شركات توزيع الأقمشة والموردين الرئيسيين",
      descEn: "Fabric distribution companies and major suppliers",
      features: language === "ar"
        ? ["إدارة الموزعين", "أسعار الجملة", "التوصيل والشحن", "الائتمان والتقسيط"]
        : ["Distributor management", "Wholesale pricing", "Delivery & shipping", "Credit & installments"]
    },
    {
      icon: Factory,
      titleAr: "المصانع",
      titleEn: "Factories",
      descAr: "مصانع النسيج والغزل والصباغة",
      descEn: "Textile, spinning, and dyeing factories",
      features: language === "ar"
        ? ["تتبع الإنتاج", "إدارة الخامات", "مراقبة الجودة", "تكاليف التصنيع"]
        : ["Production tracking", "Raw material management", "Quality control", "Manufacturing costs"]
    },
    {
      icon: Truck,
      titleAr: "الاستيراد والتصدير",
      titleEn: "Import & Export",
      descAr: "شركات استيراد وتصدير الأقمشة الدولية",
      descEn: "International fabric import and export companies",
      features: language === "ar"
        ? ["تتبع الشحنات", "إدارة الجمارك", "العملات المتعددة", "الوثائق التجارية"]
        : ["Shipment tracking", "Customs management", "Multi-currency", "Trade documents"]
    },
    {
      icon: ShoppingBag,
      titleAr: "التجارة الإلكترونية",
      titleEn: "E-Commerce",
      descAr: "متاجر الأقمشة الإلكترونية والبيع عبر الإنترنت",
      descEn: "Online fabric stores and e-commerce platforms",
      features: language === "ar"
        ? ["تكامل المتاجر", "إدارة الطلبات", "معالجة الدفع", "تتبع الشحن"]
        : ["Store integration", "Order management", "Payment processing", "Shipping tracking"]
    },
    {
      icon: Users,
      titleAr: "التفصيل والأتيليهات",
      titleEn: "Tailoring & Ateliers",
      descAr: "مشاغل الخياطة والأتيليهات الراقية",
      descEn: "Tailoring workshops and high-end ateliers",
      features: language === "ar"
        ? ["حجوزات العملاء", "إدارة المقاسات", "تتبع الطلبات", "جدولة المواعيد"]
        : ["Customer bookings", "Size management", "Order tracking", "Appointment scheduling"]
    }
  ];

  const testimonials = [
    {
      quoteAr: "ERPMAX غير طريقة عملنا بالكامل. أصبحنا نتتبع كل رولون بدقة متناهية.",
      quoteEn: "ERPMAX completely changed our way of working. We now track every roll with extreme precision.",
      authorAr: "هانز مولر",
      authorEn: "Hans Müller",
      roleAr: "مدير العمليات - TextilHaus Berlin",
      roleEn: "Operations Manager - TextilHaus Berlin",
      country: language === "ar" ? "ألمانيا" : "Germany"
    },
    {
      quoteAr: "النظام الوحيد الذي يفهم طبيعة تجارة الأقمشة بالمتر والرولون.",
      quoteEn: "The only system that understands the nature of fabric trade by meter and roll.",
      authorAr: "أحمد الشمري",
      authorEn: "Ahmed Al-Shamri",
      roleAr: "المدير التنفيذي - مجموعة الشمري للأقمشة",
      roleEn: "CEO - Al-Shamri Fabrics Group",
      country: language === "ar" ? "السعودية" : "Saudi Arabia"
    },
    {
      quoteAr: "التكامل مع أنظمتنا الأوروبية كان سلساً جداً. فريق الدعم ممتاز.",
      quoteEn: "Integration with our European systems was very smooth. Excellent support team.",
      authorAr: "ماري أوكونور",
      authorEn: "Mary O'Connor",
      roleAr: "مديرة المشتريات - Irish Textile Co.",
      roleEn: "Procurement Manager - Irish Textile Co.",
      country: language === "ar" ? "أيرلندا" : "Ireland"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" dir={dir}>
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D948808_1px,transparent_1px),linear-gradient(to_bottom,#0D948808_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              {language === "ar" ? "حضور عالمي" : "Global Presence"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {language === "ar" ? (
                <>الاختيار الأول <span className="text-texafab-emerald">عالمياً</span></>
              ) : (
                <>The First Choice <span className="text-texafab-emerald">Worldwide</span></>
              )}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {language === "ar"
                ? "من ألمانيا إلى السعودية، نخدم شركات الأقمشة حول العالم بنظام ERP المتخصص الأول من نوعه."
                : "From Germany to Saudi Arabia, we serve fabric companies worldwide with the first specialized ERP system of its kind."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-12 bg-texafab-slate">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-white mb-2">500+</div>
              <div className="text-gray-400">{language === "ar" ? "شركة حول العالم" : "Companies Worldwide"}</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">50+</div>
              <div className="text-gray-400">{language === "ar" ? "دولة" : "Countries"}</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">10M+</div>
              <div className="text-gray-400">{language === "ar" ? "رولون متتبع" : "Rolls Tracked"}</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">99.9%</div>
              <div className="text-gray-400">{language === "ar" ? "وقت التشغيل" : "Uptime"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "تغطية عالمية شاملة" : "Comprehensive Global Coverage"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "ar"
                ? "نخدم شركات الأقمشة في جميع القارات بدعم محلي متكامل"
                : "We serve fabric companies on all continents with integrated local support"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img src={region.image} alt={language === "ar" ? region.titleAr : region.titleEn} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-texafab-slate/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{language === "ar" ? region.titleAr : region.titleEn}</h3>
                    <div className="flex gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {region.stats.companies} {language === "ar" ? "شركة" : "companies"}
                      </span>
                      <span className="flex items-center gap-1 text-green-400">
                        <TrendingUp className="w-4 h-4" />
                        {region.stats.growth}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{language === "ar" ? region.descAr : region.descEn}</p>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country, j) => (
                      <span key={j} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "الصناعات التي نخدمها" : "Industries We Serve"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "ar"
                ? "حلول مخصصة لكل قطاع في صناعة الأقمشة"
                : "Customized solutions for every sector in the fabric industry"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-texafab-emerald/10 flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-texafab-emerald" />
                </div>
                <h3 className="text-xl font-bold text-texafab-slate mb-2">
                  {language === "ar" ? industry.titleAr : industry.titleEn}
                </h3>
                <p className="text-gray-600 mb-4">{language === "ar" ? industry.descAr : industry.descEn}</p>
                <ul className="space-y-2">
                  {industry.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-texafab-emerald" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {language === "ar" ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1,2,3,4,5].map(n => (
                    <Award key={n} className="w-4 h-4 fill-texafab-gold text-texafab-gold" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{language === "ar" ? item.quoteAr : item.quoteEn}"
                </blockquote>
                <div>
                  <div className="font-bold text-texafab-slate">{language === "ar" ? item.authorAr : item.authorEn}</div>
                  <div className="text-sm text-gray-500">{language === "ar" ? item.roleAr : item.roleEn}</div>
                  <div className="text-sm text-texafab-emerald mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.country}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function IndustriesPage() {
  return <IndustriesContent />;
}
