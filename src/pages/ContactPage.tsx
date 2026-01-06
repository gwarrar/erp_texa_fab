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

function ContactContent() {
  const { language, dir } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const offices = [
    {
      city: getText(t.dublin, language),
      type: getText(t.headquarters, language),
      address: "123 Tech Quarter, Dublin 2",
      phone: "+353 1 555 0100",
      email: "hq@texacore.app"
    },
    {
      city: getText(t.berlin, language),
      type: getText(t.europeOffice, language),
      address: "Alexanderplatz 5, 10178 Berlin",
      phone: "+49 30 555 0200",
      email: "europe@texacore.app"
    },
    {
      city: getText(t.riyadh, language),
      type: getText(t.gulfOffice, language),
      address: getText(t.riyadhAddress, language),
      phone: "+966 11 555 0300",
      email: "gulf@texacore.app"
    },
    {
      city: getText(t.dubai, language),
      type: getText(t.supportCenter, language),
      address: "Dubai Internet City, Building 12",
      phone: "+971 4 555 0400",
      email: "support@texacore.app"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: getText(t.callUs, language),
      desc: getText(t.callUsDesc, language),
      value: "+966 50 000 0000",
      action: "tel:+966500000000"
    },
    {
      icon: Mail,
      title: getText(t.emailUs, language),
      desc: getText(t.emailUsDesc, language),
      value: "info@texacore.app",
      action: "mailto:info@texacore.app"
    },
    {
      icon: MessageCircle,
      title: getText(t.liveChat, language),
      desc: getText(t.liveChatDesc, language),
      value: getText(t.startChat, language),
      action: "#"
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
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, i) => (
              <a href={method.action} key={i}>
                <Card className="p-6 text-center hover:shadow-lg transition-all hover:border-texafab-emerald/30 cursor-pointer">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-texafab-emerald/10 flex items-center justify-center">
                    <method.icon className="w-7 h-7 text-texafab-emerald" />
                  </div>
                  <h3 className="font-bold text-texafab-slate mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {method.desc}
                  </p>
                  <p className="text-texafab-emerald font-semibold">{method.value}</p>
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
                    <Input type="tel" placeholder="+966 50 000 0000" />
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
                    <Input type="tel" placeholder="+966 50 000 0000" />
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
