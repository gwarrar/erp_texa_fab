import React from "react";
import { useLanguage } from "./LanguageContext";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageSquare } from "lucide-react";

export function Testimonials() {
  const { dir, language } = useLanguage();

  const testimonials = [
    {
      textAr: "TexaCore غيّر طريقة تتبعنا للرولونات والأمتار بشكل كامل. الآن نعرف بالضبط كم متر تبقى في كل رولون.",
      textEn: "TexaCore completely changed how we track rolls and meters. Now we know exactly how many meters remain in each roll.",
      author: language === "ar" ? "هانز مولر" : "Hans Müller",
      roleAr: "مدير العمليات",
      roleEn: "Operations Director",
      company: "TextilHaus Berlin",
      country: language === "ar" ? "ألمانيا" : "Germany",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
    {
      textAr: "النظام الوحيد الذي يفهم طبيعة تجارة الأقمشة. من الألوان إلى القص - كل شيء مغطى.",
      textEn: "The only system that understands the fabric trade. From colors to cutting - everything is covered.",
      author: language === "ar" ? "أحمد الشمري" : "Ahmed Al-Shamri",
      roleAr: "الرئيس التنفيذي",
      roleEn: "CEO",
      company: language === "ar" ? "مجموعة الشمري للأقمشة" : "Al-Shamri Fabrics Group",
      country: language === "ar" ? "السعودية" : "Saudi Arabia",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      textAr: "التكامل مع أنظمتنا الأوروبية كان سلساً. فريق الدعم يفهم صناعة الأقمشة بعمق.",
      textEn: "Integration with our European systems was seamless. The support team deeply understands the fabric industry.",
      author: language === "ar" ? "ماري أوكونور" : "Mary O'Connor",
      roleAr: "مديرة المشتريات",
      roleEn: "Procurement Manager",
      company: "Irish Textile Co.",
      country: language === "ar" ? "أيرلندا" : "Ireland",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      textAr: "وفرنا 20% من وقت الجرد بفضل نظام الباركود المتقدم. كل رولون له هويته الفريدة.",
      textEn: "We saved 20% of inventory time thanks to the advanced barcode system. Every roll has its unique identity.",
      author: language === "ar" ? "محمد الراشد" : "Mohammed Al-Rashid",
      roleAr: "مدير المستودعات",
      roleEn: "Warehouse Manager",
      company: language === "ar" ? "شركة الإمارات للأقمشة" : "Emirates Fabrics Co.",
      country: language === "ar" ? "الإمارات" : "UAE",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
    {
      textAr: "أخيراً نظام يحسب الهدر بدقة. قللنا الفاقد بنسبة 15% في أول ثلاثة أشهر.",
      textEn: "Finally a system that calculates waste accurately. We reduced loss by 15% in the first three months.",
      author: language === "ar" ? "توماس كوفالسكي" : "Tomasz Kowalski",
      roleAr: "مدير الإنتاج",
      roleEn: "Production Manager",
      company: "PolTex Industries",
      country: language === "ar" ? "بولندا" : "Poland",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
  ];

  return (
    <section className="py-20 bg-texafab-cream relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-texafab-emerald/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-texafab-gold/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-4">
            <MessageSquare className="w-4 h-4" />
            {language === "ar" ? "آراء العملاء" : "Client Testimonials"}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight text-texafab-slate">
            {language === "ar" ? "قصص نجاح عملائنا" : "Client Success Stories"}
          </h2>
          <p className="text-lg text-texafab-slate/70 max-w-2xl mx-auto">
            {language === "ar" 
              ? "اكتشف كيف حوّلت الشركات الرائدة عملياتها مع TexaCore"
              : "See how leading companies have transformed their operations with TexaCore"
            }
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel 
            opts={{ align: "start", loop: true, direction: dir === "rtl" ? "rtl" : "ltr" }} 
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <Card className="bg-white shadow-lg border-texafab-slate/10 h-full hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col h-full relative">
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-texafab-emerald/10 flex items-center justify-center">
                        <Quote className="w-5 h-5 text-texafab-emerald" />
                      </div>
                      
                      {/* Rating */}
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-texafab-gold text-texafab-gold" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-base md:text-lg leading-relaxed mb-6 flex-1 font-light text-texafab-slate">
                        "{language === "ar" ? item.textAr : item.textEn}"
                      </blockquote>
                      
                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t border-texafab-slate/10">
                        <img 
                          src={item.avatar} 
                          alt={item.author}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-texafab-emerald/20"
                        />
                        <div>
                          <div className="font-bold text-texafab-slate">{item.author}</div>
                          <div className="text-xs text-texafab-slate/60">{language === "ar" ? item.roleAr : item.roleEn}</div>
                          <div className="text-xs text-texafab-emerald font-medium">{item.company}</div>
                          <div className="text-xs text-texafab-slate/50">{item.country}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-texafab-emerald text-white border-texafab-emerald hover:bg-texafab-emerald/90 h-10 w-10" />
              <CarouselNext className="static translate-y-0 bg-texafab-emerald text-white border-texafab-emerald hover:bg-texafab-emerald/90 h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
