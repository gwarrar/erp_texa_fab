import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Calculator,
  Boxes,
  Zap,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Building2,
  Phone,
  ArrowRight,
  Globe,
  Check,
  ShoppingCart,
} from "lucide-react";

export default function RegisterPage() {
  const { language, dir, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert(language === "ar" ? "كلمات المرور غير متطابقة" : "Passwords do not match");
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 1500);
  };

  const features = [
    {
      icon: ShoppingCart,
      titleAr: "متجر إلكتروني مجاني",
      titleEn: "Free E-commerce Store",
      descAr: "بدون رسوم تصميم أو تشغيل إضافية",
      descEn: "No design or setup fees",
    },
    {
      icon: Boxes,
      titleAr: "إدارة المخزون",
      titleEn: "Inventory Management",
      descAr: "تتبع الرولونات والألوان بدقة",
      descEn: "Precise roll and color tracking",
    },
    {
      icon: Calculator,
      titleAr: "محاسبة متكاملة",
      titleEn: "Full Accounting",
      descAr: "إدارة مالية شاملة",
      descEn: "Complete financial management",
    },
  ];

  const benefits = [
    { ar: "14 يوم تجربة مجانية", en: "14-day free trial" },
    { ar: "بدون بطاقة ائتمان", en: "No credit card required" },
    { ar: "إعداد سريع خلال دقائق", en: "Quick setup in minutes" },
    { ar: "دعم فني 24/7", en: "24/7 support" },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
    { code: "ru", name: "Русский" },
    { code: "uk", name: "Українська" },
    { code: "tr", name: "Türkçe" },
    { code: "ro", name: "Română" },
    { code: "pl", name: "Polski" },
    { code: "it", name: "Italiano" },
  ];

  return (
    <div className="min-h-screen flex" dir={dir}>
      {/* Left Side - Register Form */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 lg:px-16 bg-white dark:bg-gray-900 overflow-y-auto">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-texafab-emerald to-teal-600 flex items-center justify-center">
              <span className="text-white font-black text-lg">E</span>
            </div>
            <span className="text-2xl font-black text-texafab-slate dark:text-white">
              ERP<span className="text-texafab-emerald">MAX</span>
            </span>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-texafab-slate dark:text-white mb-2">
              {language === "ar" ? "إنشاء حساب جديد" : "Create Account"}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {language === "ar"
                ? "ابدأ رحلتك مع نظام ERPMAX"
                : "Start your journey with ERPMAX"}
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-2 mb-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  {language === "ar" ? benefit.ar : benefit.en}
                </span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-texafab-slate dark:text-gray-200">
                {language === "ar" ? "الاسم الكامل" : "Full Name"}
              </Label>
              <div className="relative">
                <User className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder={language === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"}
                  value={formData.fullName}
                  onChange={handleChange}
                  className="ps-10 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald"
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-texafab-slate dark:text-gray-200">
                {language === "ar" ? "اسم الشركة" : "Company Name"}
              </Label>
              <div className="relative">
                <Building2 className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder={language === "ar" ? "أدخل اسم شركتك" : "Enter your company name"}
                  value={formData.companyName}
                  onChange={handleChange}
                  className="ps-10 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-texafab-slate dark:text-gray-200">
                {language === "ar" ? "البريد الإلكتروني" : "Email Address"}
              </Label>
              <div className="relative">
                <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={language === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                  value={formData.email}
                  onChange={handleChange}
                  className="ps-10 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-texafab-slate dark:text-gray-200">
                {language === "ar" ? "رقم الهاتف" : "Phone Number"}
              </Label>
              <div className="relative">
                <Phone className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={language === "ar" ? "+966 5XX XXX XXXX" : "+1 XXX XXX XXXX"}
                  value={formData.phone}
                  onChange={handleChange}
                  className="ps-10 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-texafab-slate dark:text-gray-200">
                {language === "ar" ? "كلمة المرور" : "Password"}
              </Label>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={language === "ar" ? "أدخل كلمة المرور" : "Enter password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="ps-10 pe-10 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-texafab-slate dark:text-gray-200">
                {language === "ar" ? "تأكيد كلمة المرور" : "Confirm Password"}
              </Label>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder={language === "ar" ? "أعد كتابة كلمة المرور" : "Confirm password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="ps-10 h-12 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald"
                  required
                />
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                className="mt-1"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
              >
                {language === "ar" ? (
                  <>
                    أوافق على{" "}
                    <Link to="/terms" className="text-texafab-emerald hover:underline">
                      شروط الخدمة
                    </Link>{" "}
                    و{" "}
                    <Link to="/privacy" className="text-texafab-emerald hover:underline">
                      سياسة الخصوصية
                    </Link>
                  </>
                ) : (
                  <>
                    I agree to the{" "}
                    <Link to="/terms" className="text-texafab-emerald hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-texafab-emerald hover:underline">
                      Privacy Policy
                    </Link>
                  </>
                )}
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading || !agreeTerms}
              className="w-full h-12 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white font-semibold rounded-xl disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {language === "ar" ? "إنشاء حساب" : "Create Account"}
                  <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </>
              )}
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
            {language === "ar" ? "لديك حساب بالفعل؟" : "Already have an account?"}{" "}
            <Link to="/login" className="text-texafab-emerald font-semibold hover:underline">
              {language === "ar" ? "تسجيل الدخول" : "Sign In"}
            </Link>
          </p>

          {/* Language Selector */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-gray-400" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="text-sm text-gray-500 bg-transparent border-none cursor-pointer focus:outline-none"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-texafab-emerald via-teal-600 to-teal-700 p-12 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-texafab-gold/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-lg text-white">
          {/* Logo */}
          <div className="mb-12">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <span className="text-3xl font-black">E</span>
            </div>
            <h2 className="text-4xl font-black mb-4">
              {language === "ar" ? "ابدأ مجاناً اليوم" : "Start Free Today"}
            </h2>
            <p className="text-white/80 text-lg">
              {language === "ar"
                ? "انضم لأكثر من 500 شركة تستخدم ERPMAX لإدارة أعمالها"
                : "Join over 500 companies using ERPMAX to manage their business"}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">
                      {language === "ar" ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {language === "ar" ? feature.descAr : feature.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial */}
          <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <p className="text-white/90 mb-4 leading-relaxed">
              {language === "ar"
                ? '"نظام ERPMAX غيّر طريقة إدارتنا للمخزون. الآن نتتبع كل رولون بدقة تامة."'
                : '"ERPMAX changed how we manage inventory. Now we track every roll with complete precision."'}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold">
                  {language === "ar" ? "أحمد محمد" : "Ahmed Mohamed"}
                </div>
                <div className="text-white/60 text-sm">
                  {language === "ar" ? "مدير شركة النسيج المتحدة" : "CEO, United Textile Co."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
