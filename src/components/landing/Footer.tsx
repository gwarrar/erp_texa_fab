import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { t, language, dir } = useLanguage();

  const footerLinks = {
    product: [
      { labelAr: "الميزات", labelEn: "Features", href: "/features" },
      { labelAr: "سير العمل", labelEn: "Workflow", href: "/workflow" },
      { labelAr: "الأسعار", labelEn: "Pricing", href: "/pricing" },
      { labelAr: "الحلول", labelEn: "Solutions", href: "/solutions" },
    ],
    solutions: [
      { labelAr: "الكونتينرات", labelEn: "Container Tracking", href: "/container-tracking" },
      { labelAr: "إدارة الرولونات", labelEn: "Roll Management", href: "/roll-management" },
      { labelAr: "إدارة المستودعات", labelEn: "Warehouse", href: "/warehouse-management" },
      { labelAr: "إدارة الأقمشة", labelEn: "Fabrics", href: "/fabric-management" },
      { labelAr: "نقاط البيع", labelEn: "POS", href: "/pos-system" },
      { labelAr: "المتجر الإلكتروني", labelEn: "E-Commerce", href: "/ecommerce" },
      { labelAr: "إدارة العملاء", labelEn: "CRM", href: "/crm" },
      { labelAr: "تصنيع الأقمشة", labelEn: "Fabric Mfg", href: "/fabric-manufacturing" },
      { labelAr: "تصنيع الألبسة", labelEn: "Garment Mfg", href: "/garment-manufacturing" },
      { labelAr: "الذكاء الاصطناعي", labelEn: "AI Analytics", href: "/ai-analytics" },
      { labelAr: "المحاسبة", labelEn: "Accounting", href: "/accounting" },
    ],
    company: [
      { labelAr: "من نحن", labelEn: "About Us", href: "/about" },
      { labelAr: "تواصل معنا", labelEn: "Contact", href: "/contact" },
    ],
    resources: [
      { labelAr: "الأسئلة الشائعة", labelEn: "FAQ", href: "/faq" },
      { labelAr: "سياسة الخصوصية", labelEn: "Privacy Policy", href: "/privacy" },
      { labelAr: "الشروط والأحكام", labelEn: "Terms of Service", href: "/terms" },
    ],
  };

  const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-texafab-slate to-texafab-slate/95 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* CTA Section */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
              {language === "ar" ? (
                <>هل أنت جاهز لتحويل <span className="text-texafab-gold">عملياتك التجارية؟</span></>
              ) : (
                <>Ready to Transform Your <span className="text-texafab-gold">Business Operations?</span></>
              )}
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              {language === "ar" 
                ? "انضم لأكثر من 500 شركة تثق بـ ERPMAX لإدارة أعمالها"
                : "Join 500+ companies that trust ERPMAX for their business management"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="h-12 px-6 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white font-semibold shadow-lg shadow-texafab-emerald/30 rounded-xl">
                {language === "ar" ? "ابدأ تجربة مجانية" : "Start Free Trial"}
                <ArrowUpRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </Button>
              <Button variant="outline" className="h-12 px-6 border-2 border-white/30 text-white hover:bg-white/15 hover:border-white/50 hover:text-white font-semibold rounded-xl bg-transparent transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                {language === "ar" ? "احجز عرض توضيحي" : "Schedule Demo"}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-texafab-emerald to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-texafab-emerald/30">
                  <span className="text-white font-black text-xl">E</span>
                </div>
                <div>
                  <div className="flex items-baseline">
                    <span className="text-xl font-black text-texafab-emerald">ERP</span>
                    <span className="text-xl font-black text-texafab-gold">MAX</span>
                  </div>
                  <div className="text-[10px] text-gray-500 tracking-wide">{language === "ar" ? "جودة تستحق الثقة" : "Quality You Can Trust"}</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm text-sm">
                {language === "ar" 
                  ? "نظام ERP سحابي متكامل مصمم للشركات الحديثة. موثوق به من قبل أكثر من 500 شركة."
                  : "Complete cloud ERP system designed for modern enterprises. Trusted by 500+ companies."
                }
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 pt-3">
                <a href="mailto:info@erpmax.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group text-sm">
                  <Mail className="w-4 h-4 text-texafab-emerald" />
                  <span>info@erpmax.com</span>
                </a>
                <a href="tel:+966-50-000-0000" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group text-sm">
                  <Phone className="w-4 h-4 text-texafab-emerald" />
                  <span dir="ltr">+966 50 000 0000</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-texafab-emerald flex-shrink-0 mt-0.5" />
                  <span>{language === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-2 pt-3">
                {socials.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={i}
                      href={social.href} 
                      aria-label={social.label}
                      className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-texafab-emerald hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">{language === "ar" ? "المنتج" : "Product"}</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {language === "ar" ? link.labelAr : link.labelEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm">{language === "ar" ? "الحلول" : "Solutions"}</h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {language === "ar" ? link.labelAr : link.labelEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm">{language === "ar" ? "الشركة" : "Company"}</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {language === "ar" ? link.labelAr : link.labelEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm">{language === "ar" ? "الموارد" : "Resources"}</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {language === "ar" ? link.labelAr : link.labelEn}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Newsletter */}
              <div className="mt-6 p-3 bg-white/5 rounded-lg">
                <h5 className="font-semibold text-white mb-2 text-sm">{language === "ar" ? "اشترك في النشرة" : "Stay Updated"}</h5>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder={language === "ar" ? "بريدك الإلكتروني" : "Your email"}
                    className="flex-1 px-3 py-2 bg-white/10 rounded-lg text-sm text-white placeholder:text-gray-500 border border-white/10 focus:outline-none focus:border-texafab-emerald"
                  />
                  <Button size="icon" className="bg-texafab-emerald hover:bg-texafab-emerald/90 h-9 w-9">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            {language === "ar" 
              ? "© 2024 ERPMAX. جميع الحقوق محفوظة."
              : "© 2024 ERPMAX. All rights reserved."
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">
              {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">
              {language === "ar" ? "الشروط والأحكام" : "Terms of Service"}
            </Link>
            <Link to="/faq" className="text-gray-500 hover:text-white transition-colors">
              {language === "ar" ? "الأسئلة الشائعة" : "FAQ"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
