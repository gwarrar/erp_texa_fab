import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { useTheme } from "@/components/landing/ThemeContext";
import { FCLogo } from "@/components/fincore/FCLogo";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Shield,
  CheckCircle2,
  User,
  Phone,
  Building2,
  Globe,
  Sparkles,
} from "lucide-react";

const translations = {
  en: {
    pageTitle: "Start Your Free Trial",
    heroTitle: "Start Free Today! 🚀",
    subtitle: "Get started with FinCore and transform your financial operations",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    email: "Email Address",
    emailPlaceholder: "Enter your email",
    phone: "Phone Number",
    phonePlaceholder: "+1 234 567 8900",
    companyName: "Company Name",
    companyNamePlaceholder: "Your company name",
    country: "Country",
    countryPlaceholder: "Select your country",
    password: "Password",
    passwordPlaceholder: "Create a strong password",
    confirmPassword: "Confirm Password",
    confirmPasswordPlaceholder: "Confirm your password",
    agreeToTerms: "I agree to the",
    termsOfService: "Terms of Service",
    and: "and",
    privacyPolicy: "Privacy Policy",
    createAccount: "Create Free Account",
    alreadyHaveAccount: "Already have an account?",
    loginNow: "Sign In",
    secureSignup: "Your data is protected with enterprise-grade security",
    feature1: "14-day free trial",
    feature2: "No credit card required",
    feature3: "Full access to all features",
    feature4: "Free onboarding support",
    slogan: "The Core of Finance • The Soul of Tech",
    freeTrial: "Free Trial",
    freeTrialDesc: "14 days of unlimited access",
  },
  ar: {
    pageTitle: "ابدأ تجربتك المجانية",
    heroTitle: "ابدأ مجاناً اليوم! 🚀",
    subtitle: "ابدأ مع FinCore وحوّل عملياتك المالية",
    fullName: "الاسم الكامل",
    fullNamePlaceholder: "أدخل اسمك الكامل",
    email: "البريد الإلكتروني",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    phone: "رقم الهاتف",
    phonePlaceholder: "+966 50 123 4567",
    companyName: "اسم الشركة",
    companyNamePlaceholder: "اسم شركتك",
    country: "الدولة",
    countryPlaceholder: "اختر دولتك",
    password: "كلمة المرور",
    passwordPlaceholder: "أنشئ كلمة مرور قوية",
    confirmPassword: "تأكيد كلمة المرور",
    confirmPasswordPlaceholder: "أعد كتابة كلمة المرور",
    agreeToTerms: "أوافق على",
    termsOfService: "شروط الخدمة",
    and: "و",
    privacyPolicy: "سياسة الخصوصية",
    createAccount: "إنشاء حساب مجاني",
    alreadyHaveAccount: "لديك حساب بالفعل؟",
    loginNow: "تسجيل الدخول",
    secureSignup: "بياناتك محمية بأمان مؤسسي",
    feature1: "تجربة مجانية 14 يوم",
    feature2: "بدون بطاقة ائتمان",
    feature3: "وصول كامل لجميع الميزات",
    feature4: "دعم مجاني للإعداد",
    slogan: "جوهر المال • روح التقنية",
    freeTrial: "تجربة مجانية",
    freeTrialDesc: "14 يوم وصول غير محدود",
  },
  tr: {
    pageTitle: "Ücretsiz Denemenizi Başlatın",
    heroTitle: "Bugün Ücretsiz Başlayın! 🚀",
    subtitle: "FinCore ile başlayın ve finansal operasyonlarınızı dönüştürün",
    fullName: "Tam Ad",
    fullNamePlaceholder: "Tam adınızı girin",
    email: "E-posta Adresi",
    emailPlaceholder: "E-postanızı girin",
    phone: "Telefon Numarası",
    phonePlaceholder: "+90 532 123 4567",
    companyName: "Şirket Adı",
    companyNamePlaceholder: "Şirketinizin adı",
    country: "Ülke",
    countryPlaceholder: "Ülkenizi seçin",
    password: "Şifre",
    passwordPlaceholder: "Güçlü bir şifre oluşturun",
    confirmPassword: "Şifreyi Onayla",
    confirmPasswordPlaceholder: "Şifrenizi onaylayın",
    agreeToTerms: "Kabul ediyorum",
    termsOfService: "Kullanım Şartları",
    and: "ve",
    privacyPolicy: "Gizlilik Politikası",
    createAccount: "Ücretsiz Hesap Oluştur",
    alreadyHaveAccount: "Zaten hesabınız var mı?",
    loginNow: "Giriş Yap",
    secureSignup: "Verileriniz kurumsal güvenlikle korunmaktadır",
    feature1: "14 gün ücretsiz deneme",
    feature2: "Kredi kartı gerekmez",
    feature3: "Tüm özelliklere tam erişim",
    feature4: "Ücretsiz kurulum desteği",
    slogan: "Finansın Özü • Teknolojinin Ruhu",
    freeTrial: "Ücretsiz Deneme",
    freeTrialDesc: "14 gün sınırsız erişim",
  },
};

const countries = [
  { code: "SA", name: "Saudi Arabia", nameAr: "السعودية" },
  { code: "AE", name: "UAE", nameAr: "الإمارات" },
  { code: "TR", name: "Turkey", nameAr: "تركيا" },
  { code: "EG", name: "Egypt", nameAr: "مصر" },
  { code: "JO", name: "Jordan", nameAr: "الأردن" },
  { code: "KW", name: "Kuwait", nameAr: "الكويت" },
  { code: "QA", name: "Qatar", nameAr: "قطر" },
  { code: "BH", name: "Bahrain", nameAr: "البحرين" },
  { code: "OM", name: "Oman", nameAr: "عمان" },
  { code: "LB", name: "Lebanon", nameAr: "لبنان" },
  { code: "IQ", name: "Iraq", nameAr: "العراق" },
  { code: "US", name: "United States", nameAr: "أمريكا" },
  { code: "UK", name: "United Kingdom", nameAr: "بريطانيا" },
  { code: "DE", name: "Germany", nameAr: "ألمانيا" },
  { code: "FR", name: "France", nameAr: "فرنسا" },
];

const FCRegisterPage: React.FC = () => {
  const { language, dir } = useLanguage();
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const t = translations[language as keyof typeof translations] || translations.en;
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Connect to your backend API
    // const response = await fetch('YOUR_BACKEND_URL/api/auth/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle response and redirect
    }, 2000);
  };

  return (
    <div
      className={`min-h-screen flex ${
        theme === "dark" ? "bg-slate-950" : "bg-slate-50"
      }`}
      dir={dir}
    >
      {/* Left Side - Branding */}
      <div className="hidden lg:flex w-5/12 bg-gradient-to-br from-[#0D9488] via-[#10B981] to-[#0D9488] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute top-40 left-40 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 border border-white rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Large Logo Icon */}
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl">
              <span className="text-5xl font-bold text-white">F</span>
            </div>

            <h2 className="text-4xl font-bold mb-4">FinCore</h2>
            <p className="text-lg text-white/80 mb-12">{t.slogan}</p>

            {/* Free Trial Badge */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-amber-300" />
                <span className="text-xl font-bold">{t.freeTrial}</span>
              </div>
              <p className="text-white/80">{t.freeTrialDesc}</p>
            </div>

            {/* Features */}
            <div className="space-y-4 text-start max-w-xs mx-auto">
              {[t.feature1, t.feature2, t.feature3, t.feature4].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-7/12 flex flex-col justify-center p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-lg mx-auto w-full">
          {/* Logo */}
          <Link to="/fincore" className="inline-block mb-6">
            <FCLogo size="md" showSlogan />
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {t.heroTitle}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleRegister}
            className="space-y-5"
          >
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t.fullName}
                </label>
                <div className="relative">
                  <User className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t.fullNamePlaceholder}
                    className="w-full ps-12 pe-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t.email}
                </label>
                <div className="relative">
                  <Mail className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    className="w-full ps-12 pe-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Phone & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t.phone}
                </label>
                <div className="relative">
                  <Phone className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.phonePlaceholder}
                    className="w-full ps-12 pe-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t.companyName}
                </label>
                <div className="relative">
                  <Building2 className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder={t.companyNamePlaceholder}
                    className="w-full ps-12 pe-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t.country}
              </label>
              <div className="relative">
                <Globe className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full ps-12 pe-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all appearance-none"
                  required
                >
                  <option value="">{t.countryPlaceholder}</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {language === "ar" ? country.nameAr : country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Password & Confirm */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t.password}
                </label>
                <div className="relative">
                  <Lock className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder={t.passwordPlaceholder}
                    className="w-full ps-12 pe-12 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute end-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t.confirmPassword}
                </label>
                <div className="relative">
                  <Lock className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder={t.confirmPasswordPlaceholder}
                    className="w-full ps-12 pe-12 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute end-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded border-slate-300 dark:border-slate-600 text-[#0D9488] focus:ring-[#0D9488]"
                required
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {t.agreeToTerms}{" "}
                <a href="#" className="text-[#0D9488] hover:underline">
                  {t.termsOfService}
                </a>{" "}
                {t.and}{" "}
                <a href="#" className="text-[#0D9488] hover:underline">
                  {t.privacyPolicy}
                </a>
              </span>
            </label>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading || !acceptTerms}
              className="w-full py-6 bg-gradient-to-r from-[#0D9488] to-[#10B981] hover:from-[#0D9488]/90 hover:to-[#10B981]/90 text-white font-semibold rounded-xl shadow-lg shadow-[#0D9488]/20 transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {t.createAccount}
                  <Arrow className="w-5 h-5 ms-2" />
                </>
              )}
            </Button>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Shield className="w-4 h-4 text-emerald-500" />
              {t.secureSignup}
            </div>

            {/* Login Link */}
            <p className="text-center text-slate-600 dark:text-slate-400">
              {t.alreadyHaveAccount}{" "}
              <Link
                to="/fincore/login"
                className="text-[#0D9488] hover:text-[#0D9488]/80 font-semibold"
              >
                {t.loginNow}
              </Link>
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default FCRegisterPage;
