import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Send,
  MessageCircle,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterData {
  company: {
    name: string;
    slogan: string;
    description: string;
  };
  contact: {
    title: string;
    phone: string;
    email: string;
    address: string;
  };
  links: {
    title: string;
    items: { label: string; href: string }[];
  };
  services: {
    title: string;
    items: string[];
  };
  social: {
    title: string;
  };
  copyright: string;
  developedBy: string;
}

export function DSFooter() {
  const { language, dir } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const isRTL = dir === "rtl";

  useEffect(() => {
    fetch("/data/dubai-stroy/footer.json")
      .then((res) => res.json())
      .then((data) => {
        setFooterData(data[language] || data["ru"]);
      })
      .catch(console.error);
  }, [language]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!footerData) return null;

  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* CTA Section */}
      <div className="relative border-b border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {language === "ar" ? "هل لديك مشروع في ذهنك؟" : language === "ru" ? "Есть проект на примете?" : language === "uk" ? "Є проект на думці?" : "Have a project in mind?"}
              </h3>
              <p className="text-amber-100">
                {language === "ar" ? "دعنا نساعدك في تحقيقه!" : language === "ru" ? "Давайте обсудим!" : language === "uk" ? "Давайте обговоримо!" : "Let's discuss it!"}
              </p>
            </div>
            <Link
              to="/dubai-stroy/contact"
              className="flex items-center gap-2 px-8 py-4 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-colors shadow-lg"
            >
              {footerData.contact.title}
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/dubai-stroy" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">{footerData.company.name}</span>
                <p className="text-sm text-amber-400">{footerData.company.slogan}</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {footerData.company.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/dubaistroy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-sky-500 flex items-center justify-center transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/380674848029"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-green-600 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{footerData.links.title}</h4>
            <ul className="space-y-3">
              {footerData.links.items.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{footerData.services.title}</h4>
            <ul className="space-y-3">
              {footerData.services.items.map((item, index) => (
                <li key={index} className="text-slate-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{footerData.contact.title}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${footerData.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>{footerData.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>{footerData.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>{footerData.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              {footerData.copyright}
            </p>
            <div className="flex items-center gap-4">
              <p className="text-slate-500 text-sm">
                {footerData.developedBy}{" "}
                <Link to="/next-revolution" className="text-amber-400 hover:text-amber-300">
                  Next Revolution
                </Link>
              </p>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-lg bg-amber-500 hover:bg-amber-600 flex items-center justify-center transition-colors"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
