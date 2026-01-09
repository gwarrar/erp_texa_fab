import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { useSiteData, FooterContent } from "@/hooks/useSiteData";
import { cms, type Language } from "@/lib/cms";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { t, language, dir, siteId } = useLanguage();
  const [contactInfo, setContactInfo] = useState<any>(null);
  const loadedRef = useRef<string | null>(null);
  
  // Load footer content from CMS
  const { data: cmsFooter } = useSiteData<FooterContent>('footer', language);
  
  // Load contact info from Supabase (with deduplication)
  useEffect(() => {
    const cacheKey = `${siteId}-${language}`;
    if (loadedRef.current === cacheKey) return;
    
    const loadContactInfo = async () => {
      try {
        const cmsLanguage = (language === 'ar' || language === 'en' || language === 'ru') ? language : 'en';
        const data = await cms.contact.get(siteId as any, cmsLanguage as Language);
        if (data) {
          setContactInfo(data);
          loadedRef.current = cacheKey;
        }
      } catch (error) {
        console.log('Using default contact info');
      }
    };
    loadContactInfo();
  }, [language, siteId]);

  const footerLinks = {
    product: [
      { labelKey: "nav.features", href: "/features" },
      { labelKey: "nav.workflow", href: "/workflow" },
      { labelKey: "nav.pricing", href: "/pricing" },
      { labelKey: "nav.solutions", href: "/solutions" },
    ],
    solutions: [
      { labelKey: "solutions.containerTracking", href: "/container-tracking" },
      { labelKey: "solutions.rollManagement", href: "/roll-management" },
      { labelKey: "solutions.warehouseManagement", href: "/warehouse-management" },
      { labelKey: "solutions.fabricManagement", href: "/fabric-management" },
      { labelKey: "solutions.posSystem", href: "/pos-system" },
      { labelKey: "solutions.ecommerce", href: "/ecommerce" },
      { labelKey: "solutions.crm", href: "/crm" },
      { labelKey: "solutions.fabricManufacturing", href: "/fabric-manufacturing" },
      { labelKey: "solutions.garmentManufacturing", href: "/garment-manufacturing" },
      { labelKey: "solutions.aiAnalytics", href: "/ai-analytics" },
      { labelKey: "solutions.accounting", href: "/accounting" },
    ],
    company: [
      { labelKey: "footer.about", href: "/about" },
      { labelKey: "nav.contact", href: "/contact" },
    ],
    resources: [
      { labelKey: "footer.news", href: "/news" },
      { labelKey: "footer.faq", href: "/faq" },
      { labelKey: "footer.privacy", href: "/privacy" },
      { labelKey: "footer.terms", href: "/terms" },
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
              {t("footer.transformBusiness")}
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              {t("footer.trustCompanies")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="h-12 px-6 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white font-semibold shadow-lg shadow-texafab-emerald/30 rounded-xl">
                {t("cta.button")}
                <ArrowUpRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </Button>
              <Button variant="outline" className="h-12 px-6 border-2 border-white/30 text-white hover:bg-white/15 hover:border-white/50 hover:text-white font-semibold rounded-xl bg-transparent transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                {t("footer.schedulDemo")}
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
                  <div className="text-[10px] text-gray-500 tracking-wide">{t("hero.tagline")}</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm text-sm">
                {t("footer.description")}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 pt-3">
                <a href={`mailto:${contactInfo?.email || 'info@erpmax.app'}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group text-sm">
                  <Mail className="w-4 h-4 text-texafab-emerald" />
                  <span>{contactInfo?.email || 'info@erpmax.app'}</span>
                </a>
                <a href={`tel:${contactInfo?.phone || '+353830813305'}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group text-sm">
                  <Phone className="w-4 h-4 text-texafab-emerald" />
                  <span dir="ltr">{contactInfo?.phone || '+353 83 081 3305'}</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-texafab-emerald flex-shrink-0 mt-0.5" />
                  <span>{contactInfo?.address || t("footer.location")}</span>
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
              <h4 className="font-bold text-white mb-4 text-sm">{t("footer.product")}</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm">{t("footer.solutions")}</h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm">{t("footer.company")}</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm">{t("footer.resources")}</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {t(link.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Newsletter */}
              <div className="mt-6 p-3 bg-white/5 rounded-lg">
                <h5 className="font-semibold text-white mb-2 text-sm">{t("footer.newsletter")}</h5>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder={t("footer.emailPlaceholder")}
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

        {/* Next Revolution Credit */}
        <div className="py-6 border-t border-white/10">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              {t("footer.developedBy")}{" "}
              <Link 
                to="/next-revolution" 
                className="text-texafab-emerald hover:text-texafab-gold font-semibold transition-colors inline-flex items-center gap-1"
              >
                Next Revolution
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </p>
            <p className="text-gray-500 text-xs">
              {t("footer.nextRevolutionTagline")}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            {t("footer.rights")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">
              {t("footer.terms")}
            </Link>
            <Link to="/faq" className="text-gray-500 hover:text-white transition-colors">
              {t("footer.faq")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
