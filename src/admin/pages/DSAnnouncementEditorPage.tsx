import React, { useState, useEffect } from "react";
import { AdminSidebar } from "@/admin/components/AdminSidebar";
import { useLanguage } from "@/components/landing/LanguageContext";
import {
  Save,
  Eye,
  RefreshCw,
  Megaphone,
  Play,
  Pause,
  Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AnnouncementConfig {
  enabled: boolean;
  text: Record<string, string>;
  speed: number;
  bgColor: string;
  textColor: string;
}

const defaultAnnouncement: AnnouncementConfig = {
  enabled: true,
  text: {
    uk: "🔥 Знижка 15% на всі послуги до кінця місяця! | ⭐ Безкоштовна консультація | 📞 Телефонуйте зараз: +380 67 484 80 29",
    ru: "🔥 Скидка 15% на все услуги до конца месяца! | ⭐ Бесплатная консультация | 📞 Звоните сейчас: +380 67 484 80 29",
    en: "🔥 15% OFF all services until month end! | ⭐ Free consultation | 📞 Call now: +380 67 484 80 29",
    ar: "🔥 خصم 15% على جميع الخدمات حتى نهاية الشهر! | ⭐ استشارة مجانية | 📞 اتصل الآن: +380 67 484 80 29",
  },
  speed: 50,
  bgColor: "bg-gradient-to-r from-amber-500 to-amber-600",
  textColor: "text-white",
};

const bgColorOptions = [
  { value: "bg-gradient-to-r from-amber-500 to-amber-600", label: "Amber Gradient" },
  { value: "bg-gradient-to-r from-red-500 to-pink-500", label: "Red Gradient" },
  { value: "bg-gradient-to-r from-blue-500 to-cyan-500", label: "Blue Gradient" },
  { value: "bg-gradient-to-r from-green-500 to-emerald-500", label: "Green Gradient" },
  { value: "bg-gradient-to-r from-purple-500 to-pink-500", label: "Purple Gradient" },
  { value: "bg-slate-900", label: "Dark" },
  { value: "bg-amber-500", label: "Amber Solid" },
  { value: "bg-red-500", label: "Red Solid" },
];

export default function DSAnnouncementEditorPage() {
  const { language, dir } = useLanguage();
  const isRTL = dir === "rtl";
  const [config, setConfig] = useState<AnnouncementConfig>(defaultAnnouncement);
  const [isSaving, setIsSaving] = useState(false);
  const [previewLang, setPreviewLang] = useState(language);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    // Load from localStorage (in real app, this would be from backend)
    const saved = localStorage.getItem("ds_announcement_config");
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch {
        // Keep default
      }
    }
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Save to localStorage (in real app, save to backend/JSON file)
      localStorage.setItem("ds_announcement_config", JSON.stringify(config));
      
      setMessage({ type: "success", text: isRTL ? "تم الحفظ بنجاح!" : "Saved successfully!" });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage({ type: "error", text: isRTL ? "خطأ في الحفظ" : "Save error" });
    } finally {
      setIsSaving(false);
    }
  };

  const handleTextChange = (lang: string, value: string) => {
    setConfig({
      ...config,
      text: {
        ...config.text,
        [lang]: value,
      },
    });
  };

  // Calculate preview animation duration
  const previewText = config.text[previewLang] || config.text["ru"];
  const animationDuration = Math.max(previewText.length / config.speed * 10, 15);

  return (
    <div className={cn("flex min-h-screen bg-slate-100 dark:bg-slate-950", isRTL ? "rtl" : "ltr")} dir={dir}>
      <AdminSidebar />

      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <Megaphone className="w-7 h-7 text-amber-500" />
                {isRTL ? "شريط الإعلانات" : "Announcement Bar"}
              </h1>
              <p className="text-slate-500 mt-1">
                {isRTL ? "تحكم في شريط الإعلانات المتحرك" : "Control the scrolling announcement bar"}
              </p>
            </div>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-xl transition-all disabled:opacity-50"
            >
              {isSaving ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
              {isRTL ? "حفظ" : "Save"}
            </button>
          </div>

          {/* Message */}
          {message && (
            <div
              className={cn(
                "mb-6 p-4 rounded-xl",
                message.type === "success"
                  ? "bg-green-500/10 text-green-600 border border-green-500/30"
                  : "bg-red-500/10 text-red-600 border border-red-500/30"
              )}
            >
              {message.text}
            </div>
          )}

          {/* Preview */}
          <div className="mb-8 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <h2 className="font-semibold flex items-center gap-2">
                <Eye className="w-5 h-5" />
                {isRTL ? "معاينة" : "Preview"}
              </h2>
              <div className="flex items-center gap-2">
                {["uk", "ru", "en", "ar"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setPreviewLang(lang)}
                    className={cn(
                      "px-3 py-1 rounded-lg text-sm font-medium transition-colors",
                      previewLang === lang
                        ? "bg-amber-500 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    )}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div className={cn("overflow-hidden py-2.5", config.bgColor)}>
              {config.enabled ? (
                <div
                  className={cn("whitespace-nowrap animate-marquee-preview", config.textColor)}
                  style={{ animationDuration: `${animationDuration}s` }}
                >
                  <span className="inline-block px-4">{previewText}</span>
                  <span className="inline-block px-4">{previewText}</span>
                  <span className="inline-block px-4">{previewText}</span>
                </div>
              ) : (
                <p className={cn("text-center", config.textColor, "opacity-50")}>
                  {isRTL ? "شريط الإعلانات معطل" : "Announcement bar disabled"}
                </p>
              )}
            </div>
          </div>

          {/* Settings */}
          <div className="space-y-6">
            {/* Enable/Disable */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{isRTL ? "تفعيل الشريط" : "Enable Bar"}</h3>
                  <p className="text-sm text-slate-500">{isRTL ? "عرض أو إخفاء شريط الإعلانات" : "Show or hide the announcement bar"}</p>
                </div>
                <button
                  onClick={() => setConfig({ ...config, enabled: !config.enabled })}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all",
                    config.enabled
                      ? "bg-green-500 text-white"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  )}
                >
                  {config.enabled ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                  {config.enabled ? (isRTL ? "مفعل" : "Enabled") : (isRTL ? "معطل" : "Disabled")}
                </button>
              </div>
            </div>

            {/* Speed */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-4">{isRTL ? "سرعة التحريك" : "Animation Speed"}</h3>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={config.speed}
                  onChange={(e) => setConfig({ ...config, speed: Number(e.target.value) })}
                  className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <span className="w-16 text-center font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                  {config.speed}
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                {isRTL ? "قيمة أعلى = حركة أبطأ" : "Higher value = slower movement"}
              </p>
            </div>

            {/* Colors */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5" />
                {isRTL ? "لون الخلفية" : "Background Color"}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {bgColorOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setConfig({ ...config, bgColor: option.value })}
                    className={cn(
                      "p-3 rounded-xl border-2 transition-all",
                      config.bgColor === option.value
                        ? "border-amber-500 ring-2 ring-amber-500/30"
                        : "border-transparent hover:border-slate-300 dark:hover:border-slate-600"
                    )}
                  >
                    <div className={cn("h-8 rounded-lg mb-2", option.value)} />
                    <p className="text-xs text-center">{option.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-4">{isRTL ? "نص الإعلان" : "Announcement Text"}</h3>
              <div className="space-y-4">
                {[
                  { code: "uk", label: "Українська", flag: "🇺🇦" },
                  { code: "ru", label: "Русский", flag: "🇷🇺" },
                  { code: "en", label: "English", flag: "🇬🇧" },
                  { code: "ar", label: "العربية", flag: "🇸🇦" },
                ].map((lang) => (
                  <div key={lang.code}>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <span>{lang.flag}</span>
                      {lang.label}
                    </label>
                    <input
                      type="text"
                      value={config.text[lang.code] || ""}
                      onChange={(e) => handleTextChange(lang.code, e.target.value)}
                      placeholder={`Enter ${lang.label} text...`}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      dir={lang.code === "ar" ? "rtl" : "ltr"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Animation styles */}
      <style>{`
        @keyframes marquee-preview {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-preview {
          display: inline-flex;
          animation: marquee-preview linear infinite;
        }
      `}</style>
    </div>
  );
}
