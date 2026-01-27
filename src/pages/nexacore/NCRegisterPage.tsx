import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ShoppingCart,
  Boxes,
  BarChart3,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Building2,
  Phone,
  ArrowRight,
  ArrowLeft,
  Globe,
  Check,
  Sparkles,
  Loader2,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

// Google Icon Component
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// Apple Icon Component
const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

const translations = {
  en: {
    createAccount: "Create Account",
    startJourney: "Start your journey with NexaCore",
    fullName: "Full Name",
    companyName: "Company Name",
    email: "Email",
    phone: "Phone",
    password: "Password",
    confirmPassword: "Confirm Password",
    createFreeAccount: "Create Free Account",
    haveAccount: "Already have an account?",
    login: "Login",
    tagline: "Enterprise Business Management",
    continueWithGoogle: "Continue with Google",
    continueWithApple: "Continue with Apple",
    or: "or",
    
    // Benefits
    benefit1: "14-day free trial",
    benefit2: "No credit card required",
    benefit3: "Quick setup in minutes",
    benefit4: "24/7 support",
    
    // Features
    featureEcommerce: "Sales Management",
    featureEcommerceDesc: "Complete sales lifecycle management",
    featureInventory: "Inventory Management",
    featureInventoryDesc: "Real-time stock tracking across locations",
    featureAccounting: "Full Accounting",
    featureAccountingDesc: "Multi-currency ledger with VAT compliance",
    
    // Terms
    agreeTerms: "I agree to the",
    termsOfService: "Terms of Service",
    and: "and",
    privacyPolicy: "Privacy Policy",
    
    // Errors
    passwordsNotMatch: "Passwords do not match",
    mustAgreeTerms: "You must agree to the terms",
    emailAlreadyRegistered: "Email already registered",
    errorRegistration: "Error during registration",
    accountCreated: "Account created! Please check your email to confirm your account.",
    
    // Side content
    startFreeToday: "Start Free Today",
    joinCompanies: "Join over 10,000 companies using NexaCore to manage their business",
    testimonial: "NexaCore transformed how we manage our operations. Now we have complete visibility across all departments.",
    testimonialName: "Michael Chen",
    testimonialTitle: "CEO, Global Tech Solutions",
  },
  ar: {
    createAccount: "إنشاء حساب جديد",
    startJourney: "ابدأ رحلتك مع NexaCore",
    fullName: "الاسم الكامل",
    companyName: "اسم الشركة",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    createFreeAccount: "إنشاء حساب مجاني",
    haveAccount: "لديك حساب بالفعل؟",
    login: "تسجيل الدخول",
    tagline: "إدارة أعمال المؤسسات",
    continueWithGoogle: "المتابعة مع Google",
    continueWithApple: "المتابعة مع Apple",
    or: "أو",
    
    // Benefits
    benefit1: "14 يوم تجربة مجانية",
    benefit2: "بدون بطاقة ائتمان",
    benefit3: "إعداد سريع خلال دقائق",
    benefit4: "دعم فني 24/7",
    
    // Features
    featureEcommerce: "إدارة المبيعات",
    featureEcommerceDesc: "إدارة كاملة لدورة المبيعات",
    featureInventory: "إدارة المخزون",
    featureInventoryDesc: "تتبع المخزون في الوقت الفعلي عبر المواقع",
    featureAccounting: "محاسبة متكاملة",
    featureAccountingDesc: "دفتر أستاذ متعدد العملات مع الامتثال لـ VAT",
    
    // Terms
    agreeTerms: "أوافق على",
    termsOfService: "شروط الخدمة",
    and: "و",
    privacyPolicy: "سياسة الخصوصية",
    
    // Errors
    passwordsNotMatch: "كلمات المرور غير متطابقة",
    mustAgreeTerms: "يجب الموافقة على الشروط والأحكام",
    emailAlreadyRegistered: "البريد الإلكتروني مسجل مسبقاً",
    errorRegistration: "حدث خطأ أثناء التسجيل",
    accountCreated: "تم إنشاء حسابك بنجاح! يرجى التحقق من بريدك الإلكتروني لتأكيد الحساب.",
    
    // Side content
    startFreeToday: "ابدأ مجاناً اليوم",
    joinCompanies: "انضم لأكثر من 10,000 شركة تستخدم NexaCore لإدارة أعمالها",
    testimonial: "NexaCore غيّر طريقة إدارتنا للعمليات. الآن لدينا رؤية كاملة عبر جميع الأقسام.",
    testimonialName: "محمد أحمد",
    testimonialTitle: "المدير التنفيذي، حلول التقنية العالمية",
  },
};

export default function NCRegisterPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isRTL = language === "ar";
  const dir = isRTL ? "rtl" : "ltr";
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  
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
  const [oauthLoading, setOauthLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert(t.passwordsNotMatch);
      return;
    }
    
    if (!agreeTerms) {
      alert(t.mustAgreeTerms);
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/nexacore/login`,
          data: {
            full_name: formData.fullName,
            company_name: formData.companyName,
            phone: formData.phone,
          }
        }
      });

      if (authError) {
        alert(authError.message.includes('already') ? t.emailAlreadyRegistered : t.errorRegistration);
        return;
      }

      if (authData.user) {
        await supabase.from('users').upsert({
          id: authData.user.id,
          email: formData.email,
          full_name: formData.fullName,
          company_name: formData.companyName,
          phone: formData.phone,
          currency: 'EUR',
        });
      }

      alert(t.accountCreated);
      navigate("/nexacore/login");
    } catch (err) {
      console.error('Registration exception:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setOauthLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/nexacore/register`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      
      if (error) {
        alert(isRTL ? "حدث خطأ أثناء التسجيل بـ Google" : "Error signing up with Google");
      }
    } catch (err) {
      console.error('Google OAuth exception:', err);
    } finally {
      setOauthLoading(false);
    }
  };

  const handleAppleSignUp = async () => {
    try {
      setOauthLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'apple',
        options: {
          redirectTo: `${window.location.origin}/nexacore/register`,
        },
      });
      
      if (error) {
        alert(isRTL ? "حدث خطأ أثناء التسجيل بـ Apple" : "Error signing up with Apple");
      }
    } catch (err) {
      console.error('Apple OAuth exception:', err);
    } finally {
      setOauthLoading(false);
    }
  };

  const features = [
    {
      icon: ShoppingCart,
      title: t.featureEcommerce,
      desc: t.featureEcommerceDesc,
    },
    {
      icon: Boxes,
      title: t.featureInventory,
      desc: t.featureInventoryDesc,
    },
    {
      icon: BarChart3,
      title: t.featureAccounting,
      desc: t.featureAccountingDesc,
    },
  ];

  const benefits = [
    t.benefit1,
    t.benefit2,
    t.benefit3,
    t.benefit4,
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
  ];

  return (
    <div className={`h-screen flex ${dir === "rtl" ? "flex-row rtl" : "flex-row ltr"}`} dir={dir}>
      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-start px-8 py-6 lg:px-12 bg-white dark:bg-gray-900 overflow-y-auto">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <Link to="/nexacore" className="inline-flex items-center gap-3 mb-4">
            <div className="relative group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center drop-shadow-lg group-hover:drop-shadow-xl transition-all">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
                NexaCore
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide">{t.tagline}</span>
            </div>
          </Link>

          {/* Header */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
              {t.createAccount}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t.startJourney}
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-1 mb-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs">
                <div className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-2 mb-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignUp}
              disabled={oauthLoading}
              className="w-full h-10 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-medium transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
            >
              {oauthLoading ? (
                <Loader2 className="w-5 h-5 me-3 animate-spin" />
              ) : (
                <GoogleIcon className="w-5 h-5 me-3" />
              )}
              {t.continueWithGoogle}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={handleAppleSignUp}
              disabled={oauthLoading}
              className="w-full h-10 border-2 border-gray-200 dark:border-gray-700 hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-medium transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
            >
              {oauthLoading ? (
                <Loader2 className="w-5 h-5 me-3 animate-spin" />
              ) : (
                <AppleIcon className="w-5 h-5 me-3" />
              )}
              {t.continueWithApple}
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-gray-900 text-gray-500">
                {t.or}
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Full Name */}
            <div className="space-y-1">
              <Label htmlFor="fullName" className="text-slate-700 dark:text-gray-200 text-sm">
                {t.fullName}
              </Label>
              <div className="relative">
                <User className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder={isRTL ? "أدخل اسمك الكامل" : "Enter your full name"}
                  value={formData.fullName}
                  onChange={handleChange}
                  className="ps-9 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 text-sm rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="space-y-1">
              <Label htmlFor="companyName" className="text-slate-700 dark:text-gray-200 text-sm">
                {t.companyName}
              </Label>
              <div className="relative">
                <Building2 className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder={isRTL ? "أدخل اسم شركتك" : "Enter your company name"}
                  value={formData.companyName}
                  onChange={handleChange}
                  className="ps-9 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 text-sm rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="email" className="text-slate-700 dark:text-gray-200 text-sm">
                {t.email}
              </Label>
              <div className="relative">
                <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={isRTL ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                  value={formData.email}
                  onChange={handleChange}
                  className="ps-9 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 text-sm rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-slate-700 dark:text-gray-200 text-sm">
                {t.phone}
              </Label>
              <div className="relative">
                <Phone className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+353 1 234 5678"
                  value={formData.phone}
                  onChange={handleChange}
                  className="ps-9 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 text-sm rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <Label htmlFor="password" className="text-slate-700 dark:text-gray-200 text-sm">
                {t.password}
              </Label>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={isRTL ? "أدخل كلمة المرور" : "Enter password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="ps-9 pe-9 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 text-sm rounded-xl"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <Label htmlFor="confirmPassword" className="text-slate-700 dark:text-gray-200 text-sm">
                {t.confirmPassword}
              </Label>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder={isRTL ? "أعد كتابة كلمة المرور" : "Confirm password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="ps-9 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-blue-500 text-sm rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-2 mt-2">
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
                {t.agreeTerms}{" "}
                <Link to="/nexacore/terms" className="text-blue-600 hover:underline">
                  {t.termsOfService}
                </Link>{" "}
                {t.and}{" "}
                <Link to="/nexacore/privacy" className="text-blue-600 hover:underline">
                  {t.privacyPolicy}
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading || !agreeTerms}
              className="w-full h-10 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {t.createFreeAccount}
                  <Arrow className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </>
              )}
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="text-center mt-4 text-gray-600 dark:text-gray-400 text-sm">
            {t.haveAccount}{" "}
            <Link to="/nexacore/login" className="text-blue-600 font-semibold hover:underline">
              {t.login}
            </Link>
          </p>

          {/* Language Selector */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-gray-400" />
            <select
              value={language}
              onChange={(e) => {
                const newLang = e.target.value;
                window.location.href = `/nexacore/register?lang=${newLang}`;
              }}
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

      {/* Branding Side */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-12 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />

        <div className={`relative z-10 max-w-lg text-white ${dir === "rtl" ? "text-right" : "text-left"}`}>
          {/* Logo */}
          <div className="mb-12">
            <div className={`w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 ${dir === "rtl" ? "mr-auto ml-0" : ""}`}>
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-black mb-4">
              {t.startFreeToday}
            </h2>
            <p className="text-white/80 text-lg">
              {t.joinCompanies}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className={`flex items-start gap-4 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={dir === "rtl" ? "text-right" : "text-left"}>
                    <h3 className="font-bold mb-1 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial */}
          <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <p className="text-white/90 mb-4 leading-relaxed">
              "{t.testimonial}"
            </p>
            <div className={`flex items-center gap-3 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div className={dir === "rtl" ? "text-right" : "text-left"}>
                <div className="font-semibold">
                  {t.testimonialName}
                </div>
                <div className="text-white/60 text-sm">
                  {t.testimonialTitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
