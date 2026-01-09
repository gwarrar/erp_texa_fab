import React, { useState } from "react";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getText, contactPageTranslations as t } from "@/lib/translations/pages";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Building2,
  Globe,
  CheckCircle2,
  Calendar,
  PlayCircle,
  Loader2
} from "lucide-react";

// WhatsApp and Telegram icons
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

function ContactContent() {
  const { language, dir } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const offices = [
    {
      city: getText(t.dublin, language),
      type: getText(t.headquarters, language),
      address: "123 Tech Quarter, Dublin 2",
      phone: "+353 83 081 3305",
      email: "hq@erpmax.app"
    },
    {
      city: getText(t.berlin, language),
      type: getText(t.europeOffice, language),
      address: "Alexanderplatz 5, 10178 Berlin",
      phone: "+353 83 081 3305",
      email: "europe@erpmax.app"
    },
    {
      city: getText(t.riyadh, language),
      type: getText(t.gulfOffice, language),
      address: getText(t.riyadhAddress, language),
      phone: "+353 83 081 3305",
      email: "gulf@erpmax.app"
    },
    {
      city: getText(t.dubai, language),
      type: getText(t.supportCenter, language),
      address: "Dubai Internet City, Building 12",
      phone: "+353 83 081 3305",
      email: "support@erpmax.app"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: getText(t.callUs, language),
      desc: getText(t.callUsDesc, language),
      value: "+353 83 081 3305",
      action: "tel:+353830813305",
      color: "texafab-emerald"
    },
    {
      icon: Mail,
      title: getText(t.emailUs, language),
      desc: getText(t.emailUsDesc, language),
      value: "info@erpmax.app",
      action: "mailto:info@erpmax.app",
      color: "texafab-emerald"
    },
    {
      icon: MessageCircle,
      title: getText(t.liveChat, language),
      desc: getText(t.liveChatDesc, language),
      value: getText(t.startChat, language),
      action: "#",
      color: "texafab-emerald"
    },
    {
      icon: WhatsAppIcon,
      title: language === "ar" ? "واتساب" : "WhatsApp",
      desc: language === "ar" ? "تواصل معنا مباشرة عبر واتساب" : "Chat with us directly on WhatsApp",
      value: "+353 83 081 3305",
      action: "https://wa.me/353830813305?text=" + encodeURIComponent(language === "ar" ? "مرحباً، أريد الاستفسار عن نظام TexaCore ERP" : "Hello, I want to inquire about TexaCore ERP system"),
      color: "green-500",
      isCustomIcon: true
    },
    {
      icon: TelegramIcon,
      title: language === "ar" ? "تليغرام" : "Telegram",
      desc: language === "ar" ? "تواصل معنا عبر تليغرام" : "Reach us on Telegram",
      value: "@texacore_support",
      action: "https://t.me/texacore_support",
      color: "blue-500",
      isCustomIcon: true
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 ${dir === "rtl" ? "rtl" : "ltr"}`} dir={dir}>
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D948808_1px,transparent_1px),linear-gradient(to_bottom,#0D948808_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-texafab-emerald/10 text-texafab-emerald text-sm font-semibold mb-6">
              <MessageCircle className="w-4 h-4" />
              {getText(t.badge, language)}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-texafab-slate mb-6 leading-tight">
              {getText(t.heroTitle1, language)} <span className="text-texafab-emerald">{getText(t.heroTitle2, language)}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {getText(t.heroDescription, language)}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, i) => (
              <a 
                href={method.action} 
                key={i}
                target={method.action.startsWith("http") ? "_blank" : undefined}
                rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Card className={`p-6 text-center hover:shadow-lg transition-all cursor-pointer ${
                  method.color === "green-500" 
                    ? "hover:border-green-500/30" 
                    : method.color === "blue-500"
                    ? "hover:border-blue-500/30"
                    : "hover:border-texafab-emerald/30"
                }`}>
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    method.color === "green-500" 
                      ? "bg-green-500/10 text-green-500" 
                      : method.color === "blue-500"
                      ? "bg-blue-500/10 text-blue-500"
                      : "bg-texafab-emerald/10 text-texafab-emerald"
                  }`}>
                    {method.isCustomIcon ? (
                      <method.icon />
                    ) : (
                      <method.icon className="w-7 h-7" />
                    )}
                  </div>
                  <h3 className="font-bold text-texafab-slate dark:text-white mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {method.desc}
                  </p>
                  <p 
                    dir="ltr"
                    className={`font-semibold text-center ${
                    method.color === "green-500" 
                      ? "text-green-500" 
                      : method.color === "blue-500"
                      ? "text-blue-500"
                      : "text-texafab-emerald"
                  }`}>{method.value}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-texafab-slate mb-6">
                {language === "ar" ? "أرسل لنا رسالة" : "Send Us a Message"}
              </h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-texafab-slate mb-2">
                    {getText(t.thankYou, language)}
                  </h3>
                  <p className="text-gray-600">
                    {getText(t.messageReceived, language)}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {getText(t.firstName, language)}
                      </label>
                      <Input placeholder={language === "ar" ? "أحمد" : "John"} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {getText(t.lastName, language)}
                      </label>
                      <Input placeholder={language === "ar" ? "محمد" : "Doe"} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {getText(t.email, language)}
                    </label>
                    <Input type="email" placeholder="email@company.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {getText(t.phone, language)}
                    </label>
                    <Input type="tel" placeholder="+353 83 081 3305" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {getText(t.companyName, language)}
                    </label>
                    <Input placeholder={language === "ar" ? "شركة الأقمشة" : "Fabric Company"} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {getText(t.howHelp, language)}
                    </label>
                    <Textarea 
                      placeholder={getText(t.writeMessage, language)}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white rounded-xl">
                    <Send className="w-4 h-4 me-2" />
                    {getText(t.send, language)}
                  </Button>
                </form>
              )}
            </Card>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-texafab-slate dark:text-white mb-4">
                  {getText(t.contactInfo, language)}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {getText(t.availability, language)}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-texafab-emerald/10 dark:bg-texafab-teal/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-texafab-emerald dark:text-texafab-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-texafab-slate dark:text-white">
                      {getText(t.businessHours, language)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {getText(t.businessHoursValue, language)}
                    </p>
                    <p className="text-gray-600">
                      {getText(t.techSupport, language)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-texafab-emerald/10 dark:bg-texafab-teal/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-texafab-emerald dark:text-texafab-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-texafab-slate dark:text-white">
                      {getText(t.languages, language)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {getText(t.languagesList, language)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80"
                  alt="Map"
                  className="w-full h-48 object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texafab-slate mb-4">
              {getText(t.ourOffices, language)}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {offices.map((office, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-texafab-emerald/10 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-texafab-emerald" />
                </div>
                <h3 className="font-bold text-texafab-slate">{office.city}</h3>
                <p className="text-sm text-texafab-emerald mb-3">{office.type}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span dir="ltr">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Section */}
      <section className="py-20 bg-gradient-to-br from-texafab-slate to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6">
                  <PlayCircle className="w-4 h-4" />
                  {getText(t.freeDemoBadge, language)}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {getText(t.bookDemoTitle, language)}
                </h2>
                <p className="text-white/80 mb-6">
                  {getText(t.bookDemoDesc, language)}
                </p>
                <ul className="space-y-3">
                  {[
                    getText(t.demoBullet1, language),
                    getText(t.demoBullet2, language),
                    getText(t.demoBullet3, language),
                    getText(t.demoBullet4, language),
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-texafab-emerald" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="p-6 bg-white">
                <h3 className="text-xl font-bold text-texafab-slate mb-4">
                  {getText(t.scheduleDemoFormTitle, language)}
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {getText(t.fullName, language)}
                    </label>
                    <Input placeholder={language === "ar" ? "أحمد محمد" : "John Doe"} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {getText(t.email, language)}
                    </label>
                    <Input type="email" placeholder="email@company.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {getText(t.phone, language)}
                    </label>
                    <Input type="tel" placeholder="+353 83 081 3305" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {getText(t.companyName, language)}
                    </label>
                    <Input placeholder={language === "ar" ? "شركة الأقمشة" : "Textile Co."} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {getText(t.preferredTime, language)}
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={getText(t.selectTime, language)} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">{getText(t.timeMorning, language)}</SelectItem>
                        <SelectItem value="afternoon">{getText(t.timeAfternoon, language)}</SelectItem>
                        <SelectItem value="evening">{getText(t.timeEvening, language)}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full h-12 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white rounded-xl font-semibold">
                    <Calendar className="w-4 h-4 me-2" />
                    {getText(t.bookDemoBtn, language)}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return <ContactContent />;
}
