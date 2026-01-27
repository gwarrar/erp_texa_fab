import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MCLogo } from "@/components/medcore/MCLogo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  Stethoscope,
  Activity,
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
  Loader2,
  Shield,
  Calendar,
  Pill,
  Users,
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
    startJourney: "Start your journey with MedCore Healthcare System",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    institutionName: "Institution Name",
    institutionNamePlaceholder: "Hospital, Clinic, or Practice name",
    email: "Email Address",
    emailPlaceholder: "Enter your email",
    phone: "Phone Number",
    phonePlaceholder: "Enter your phone number",
    password: "Password",
    passwordPlaceholder: "Create a password",
    confirmPassword: "Confirm Password",
    confirmPasswordPlaceholder: "Confirm your password",
    agreeTerms: "I agree to the Terms of Service and Privacy Policy",
    createFreeAccount: "Create Free Account",
    haveAccount: "Already have an account?",
    login: "Sign In",
    or: "or continue with",
    continueWithGoogle: "Continue with Google",
    continueWithApple: "Continue with Apple",
    slogan: "#1 Choice in Europe & UK",
    heroTitle: "MedCore - First Healthcare ERP",
    heroSubtitle: "The world's first system designed specifically for healthcare institutions",
    featureEmr: "Electronic Medical Records",
    featureEmrDesc: "Complete patient records management",
    featureScheduling: "Smart Scheduling",
    featureSchedulingDesc: "AI-powered appointment management",
    featureSecurity: "HIPAA Compliant",
    featureSecurityDesc: "Enterprise-grade security",
    benefit1: "14-day free trial",
    benefit2: "No credit card required",
    benefit3: "Quick setup in minutes",
    benefit4: "24/7 support",
    institutions: "Institutions",
    countries: "Countries",
    uptime: "Uptime",
    passwordsNotMatch: "Passwords do not match",
    agreeToTerms: "You must agree to the terms",
    emailAlreadyRegistered: "Email already registered",
    registrationError: "Error during registration",
    accountCreated: "Account created! Please check your email to confirm your account.",
    completeProfile: "Complete Your Profile",
    currency: "Currency",
    completeRegistration: "Complete Registration",
    googleError: "Error signing up with Google",
    appleError: "Error signing up with Apple",
    profileSaveError: "Error saving profile data",
    accountSuccess: "Your account has been created successfully! Welcome to MedCore",
  },
  ar: {
    createAccount: "إنشاء حساب جديد",
    startJourney: "ابدأ رحلتك مع نظام ميد كور للرعاية الصحية",
    fullName: "الاسم الكامل",
    fullNamePlaceholder: "أدخل اسمك الكامل",
    institutionName: "اسم المؤسسة",
    institutionNamePlaceholder: "مستشفى، عيادة، أو مركز طبي",
    email: "البريد الإلكتروني",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    phone: "رقم الهاتف",
    phonePlaceholder: "أدخل رقم هاتفك",
    password: "كلمة المرور",
    passwordPlaceholder: "أنشئ كلمة مرور",
    confirmPassword: "تأكيد كلمة المرور",
    confirmPasswordPlaceholder: "أكد كلمة المرور",
    agreeTerms: "أوافق على شروط الخدمة وسياسة الخصوصية",
    createFreeAccount: "إنشاء حساب مجاني",
    haveAccount: "لديك حساب بالفعل؟",
    login: "تسجيل الدخول",
    or: "أو تابع باستخدام",
    continueWithGoogle: "المتابعة بواسطة Google",
    continueWithApple: "المتابعة بواسطة Apple",
    slogan: "الخيار الأول في أوروبا والمملكة المتحدة",
    heroTitle: "ميد كور - أول نظام ERP للرعاية الصحية",
    heroSubtitle: "أول نظام عالمي مصمم خصيصاً للمؤسسات الصحية",
    featureEmr: "السجلات الطبية الإلكترونية",
    featureEmrDesc: "إدارة كاملة لسجلات المرضى",
    featureScheduling: "جدولة ذكية",
    featureSchedulingDesc: "إدارة المواعيد بالذكاء الاصطناعي",
    featureSecurity: "متوافق مع HIPAA",
    featureSecurityDesc: "أمان على مستوى المؤسسات",
    benefit1: "14 يوم تجربة مجانية",
    benefit2: "بدون بطاقة ائتمان",
    benefit3: "إعداد سريع خلال دقائق",
    benefit4: "دعم فني 24/7",
    institutions: "مؤسسة صحية",
    countries: "دولة",
    uptime: "وقت التشغيل",
    passwordsNotMatch: "كلمات المرور غير متطابقة",
    agreeToTerms: "يجب الموافقة على الشروط والأحكام",
    emailAlreadyRegistered: "البريد الإلكتروني مسجل مسبقاً",
    registrationError: "حدث خطأ أثناء التسجيل",
    accountCreated: "تم إنشاء حسابك بنجاح! يرجى التحقق من بريدك الإلكتروني لتأكيد الحساب.",
    completeProfile: "أكمل ملفك الشخصي",
    currency: "العملة",
    completeRegistration: "إنهاء التسجيل",
    googleError: "حدث خطأ أثناء التسجيل بـ Google",
    appleError: "حدث خطأ أثناء التسجيل بـ Apple",
    profileSaveError: "حدث خطأ أثناء حفظ البيانات",
    accountSuccess: "تم إنشاء حسابك بنجاح! مرحباً بك في ميد كور",
  },
  tr: {
    createAccount: "Hesap Oluştur",
    startJourney: "MedCore Sağlık Sistemi ile yolculuğunuza başlayın",
    fullName: "Ad Soyad",
    fullNamePlaceholder: "Adınızı ve soyadınızı girin",
    institutionName: "Kurum Adı",
    institutionNamePlaceholder: "Hastane, Klinik veya Muayenehane adı",
    email: "E-posta Adresi",
    emailPlaceholder: "E-postanızı girin",
    phone: "Telefon Numarası",
    phonePlaceholder: "Telefon numaranızı girin",
    password: "Şifre",
    passwordPlaceholder: "Bir şifre oluşturun",
    confirmPassword: "Şifreyi Onayla",
    confirmPasswordPlaceholder: "Şifrenizi onaylayın",
    agreeTerms: "Hizmet Şartlarını ve Gizlilik Politikasını kabul ediyorum",
    createFreeAccount: "Ücretsiz Hesap Oluştur",
    haveAccount: "Zaten hesabınız var mı?",
    login: "Giriş Yap",
    or: "veya şununla devam et",
    continueWithGoogle: "Google ile devam et",
    continueWithApple: "Apple ile devam et",
    slogan: "Avrupa ve İngiltere'de #1 Tercih",
    heroTitle: "MedCore - İlk Sağlık ERP'si",
    heroSubtitle: "Sağlık kuruluşları için özel olarak tasarlanmış ilk sistem",
    featureEmr: "Elektronik Sağlık Kayıtları",
    featureEmrDesc: "Tam hasta kayıtları yönetimi",
    featureScheduling: "Akıllı Planlama",
    featureSchedulingDesc: "Yapay zeka destekli randevu yönetimi",
    featureSecurity: "HIPAA Uyumlu",
    featureSecurityDesc: "Kurumsal düzeyde güvenlik",
    benefit1: "14 günlük ücretsiz deneme",
    benefit2: "Kredi kartı gerekmez",
    benefit3: "Dakikalar içinde hızlı kurulum",
    benefit4: "7/24 destek",
    institutions: "Kurum",
    countries: "Ülke",
    uptime: "Çalışma Süresi",
    passwordsNotMatch: "Şifreler eşleşmiyor",
    agreeToTerms: "Şartları kabul etmelisiniz",
    emailAlreadyRegistered: "E-posta zaten kayıtlı",
    registrationError: "Kayıt sırasında hata",
    accountCreated: "Hesap oluşturuldu! Onay için e-postanızı kontrol edin.",
    completeProfile: "Profilinizi tamamlayın",
    currency: "Para birimi",
    completeRegistration: "Kaydı tamamla",
    googleError: "Google ile kayıt hatası",
    appleError: "Apple ile kayıt hatası",
    profileSaveError: "Profil verileri kaydedilirken hata",
    accountSuccess: "Hesabınız başarıyla oluşturuldu! MedCore'a hoş geldiniz",
  },
};

export default function MCRegisterPage() {
  const { language, dir, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    institutionName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);
  
  // Social login state
  const [showCompleteProfile, setShowCompleteProfile] = useState(false);
  const [socialProvider, setSocialProvider] = useState<'google' | 'apple' | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [socialProfileData, setSocialProfileData] = useState({
    fullName: "",
    institutionName: "",
    phone: "",
    currency: "EUR",
  });

  const t = translations[language as keyof typeof translations] || translations.en;

  // Handle OAuth callback
  useEffect(() => {
    const handleOAuthCallback = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (session?.user) {
        const { data: userProfile } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .single();
        
        if (!userProfile?.company_name || !userProfile?.phone) {
          const provider = session.user.app_metadata?.provider;
          if (provider === 'google' || provider === 'apple') {
            setSocialProvider(provider as 'google' | 'apple');
            setCurrentUserId(session.user.id);
            setSocialProfileData(prev => ({
              ...prev,
              fullName: session.user.user_metadata?.full_name || session.user.user_metadata?.name || '',
            }));
            setShowCompleteProfile(true);
          }
        }
      }
    };

    handleOAuthCallback();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const provider = session.user.app_metadata?.provider;
        if (provider === 'google' || provider === 'apple') {
          const { data: userProfile } = await supabase
            .from('users')
            .select('*')
            .eq('id', session.user.id)
            .single();
          
          if (!userProfile?.company_name || !userProfile?.phone) {
            setSocialProvider(provider as 'google' | 'apple');
            setCurrentUserId(session.user.id);
            setSocialProfileData(prev => ({
              ...prev,
              fullName: session.user.user_metadata?.full_name || session.user.user_metadata?.name || '',
            }));
            setShowCompleteProfile(true);
          } else {
            navigate('/medcore');
          }
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

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
      alert(t.agreeToTerms);
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/medcore/login`,
          data: {
            full_name: formData.fullName,
            company_name: formData.institutionName,
            phone: formData.phone,
          }
        }
      });

      if (authError) {
        console.error('Signup error:', authError);
        alert(authError.message.includes('already') ? t.emailAlreadyRegistered : t.registrationError);
        return;
      }

      if (authData.user) {
        await supabase.from('users').upsert({
          id: authData.user.id,
          email: formData.email,
          full_name: formData.fullName,
          company_name: formData.institutionName,
          phone: formData.phone,
          currency: 'EUR',
        });
      }

      alert(t.accountCreated);
      navigate("/medcore/login");
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
          redirectTo: `${window.location.origin}/medcore/register`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      
      if (error) {
        console.error('Google OAuth error:', error);
        alert(t.googleError);
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
          redirectTo: `${window.location.origin}/medcore/register`,
        },
      });
      
      if (error) {
        console.error('Apple OAuth error:', error);
        alert(t.appleError);
      }
    } catch (err) {
      console.error('Apple OAuth exception:', err);
    } finally {
      setOauthLoading(false);
    }
  };

  const handleSocialProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSocialProfileData({ ...socialProfileData, [e.target.name]: e.target.value });
  };

  const handleCompleteRegistration = async () => {
    if (!currentUserId) return;
    
    setIsLoading(true);
    try {
      const { error: updateError } = await supabase
        .from('users')
        .update({
          full_name: socialProfileData.fullName,
          company_name: socialProfileData.institutionName,
          phone: socialProfileData.phone,
          currency: socialProfileData.currency,
          updated_at: new Date().toISOString(),
        })
        .eq('id', currentUserId);

      if (updateError) {
        console.error('Profile update error:', updateError);
        alert(t.profileSaveError);
        return;
      }

      await supabase.auth.updateUser({
        data: {
          full_name: socialProfileData.fullName,
          company_name: socialProfileData.institutionName,
          phone: socialProfileData.phone,
          currency: socialProfileData.currency,
        }
      });

      setShowCompleteProfile(false);
      alert(t.accountSuccess);
      navigate("/medcore");
    } catch (err) {
      console.error('Complete registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: Heart,
      title: t.featureEmr,
      desc: t.featureEmrDesc,
    },
    {
      icon: Calendar,
      title: t.featureScheduling,
      desc: t.featureSchedulingDesc,
    },
    {
      icon: Shield,
      title: t.featureSecurity,
      desc: t.featureSecurityDesc,
    },
  ];

  const benefits = [t.benefit1, t.benefit2, t.benefit3, t.benefit4];

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
    { code: "tr", name: "Türkçe" },
  ];

  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen flex ${dir === "rtl" ? "flex-row rtl" : "flex-row ltr"}`} dir={dir}>
      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-start px-8 py-6 lg:px-12 bg-white dark:bg-slate-900 overflow-y-auto">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <Link to="/medcore" className="inline-flex items-center gap-3 mb-4">
            <MCLogo className="h-11 w-auto" showText={false} animated={false} />
            <div className="flex flex-col">
              <div className="flex items-baseline" dir="ltr">
                <span className="text-xl font-black text-emerald-600 tracking-tight">Med</span>
                <span className="text-xl font-black text-red-500 tracking-tight">Core</span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">{t.slogan}</span>
            </div>
          </Link>

          {/* Header */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
              {t.createAccount}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {t.startJourney}
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-1 mb-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs">
                <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-slate-600 dark:text-slate-400">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-2 mb-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignUp}
              disabled={oauthLoading || isLoading}
              className="w-full h-10 border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-all duration-200 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white disabled:opacity-50"
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
              disabled={oauthLoading || isLoading}
              className="w-full h-10 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-all duration-200 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white disabled:opacity-50"
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
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-slate-900 text-slate-500">
                {t.or}
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Full Name */}
            <div className="space-y-1">
              <Label htmlFor="fullName" className="text-slate-700 dark:text-slate-200 text-sm">
                {t.fullName}
              </Label>
              <div className="relative">
                <User className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder={t.fullNamePlaceholder}
                  value={formData.fullName}
                  onChange={handleChange}
                  className="ps-9 h-10 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            {/* Institution Name */}
            <div className="space-y-1">
              <Label htmlFor="institutionName" className="text-slate-700 dark:text-slate-200 text-sm">
                {t.institutionName}
              </Label>
              <div className="relative">
                <Building2 className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="institutionName"
                  name="institutionName"
                  type="text"
                  placeholder={t.institutionNamePlaceholder}
                  value={formData.institutionName}
                  onChange={handleChange}
                  className="ps-9 h-10 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="email" className="text-slate-700 dark:text-slate-200 text-sm">
                {t.email}
              </Label>
              <div className="relative">
                <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  className="ps-9 h-10 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-slate-700 dark:text-slate-200 text-sm">
                {t.phone}
              </Label>
              <div className="relative">
                <Phone className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  value={formData.phone}
                  onChange={handleChange}
                  className="ps-9 h-10 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <Label htmlFor="password" className="text-slate-700 dark:text-slate-200 text-sm">
                {t.password}
              </Label>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t.passwordPlaceholder}
                  value={formData.password}
                  onChange={handleChange}
                  className="ps-9 pe-9 h-10 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <Label htmlFor="confirmPassword" className="text-slate-700 dark:text-slate-200 text-sm">
                {t.confirmPassword}
              </Label>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={t.confirmPasswordPlaceholder}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="ps-9 pe-9 h-10 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-2 py-2">
              <Checkbox
                id="terms"
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                className="mt-0.5 border-slate-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
              />
              <label
                htmlFor="terms"
                className="text-xs text-slate-600 dark:text-slate-400 cursor-pointer leading-tight"
              >
                {t.agreeTerms}
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {t.createFreeAccount}
                  <Arrow className={`w-4 h-4 ${dir === "rtl" ? "me-2" : "ms-2"}`} />
                </>
              )}
            </Button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-4 text-slate-600 dark:text-slate-400 text-sm">
            {t.haveAccount}{" "}
            <Link to="/medcore/login" className="text-emerald-600 font-semibold hover:underline">
              {t.login}
            </Link>
          </p>

          {/* Language Selector */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-slate-400" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="text-sm text-slate-500 bg-transparent border-none cursor-pointer focus:outline-none"
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
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 p-12 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        
        {/* Heartbeat Line Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-1/2 left-0 w-full h-32 opacity-10" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path
              d="M0,50 L200,50 L220,20 L240,80 L260,30 L280,70 L300,50 L500,50 L520,10 L540,90 L560,20 L580,80 L600,50 L800,50 L820,15 L840,85 L860,25 L880,75 L900,50 L1200,50"
              stroke="white"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className={`relative z-10 max-w-lg text-white ${dir === "rtl" ? "text-right" : "text-left"}`}>
          {/* Logo */}
          <div className="mb-12">
            <div className={`w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 ${dir === "rtl" ? "mr-auto ml-0" : ""}`}>
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-black mb-4">
              {t.heroTitle}
            </h2>
            <p className="text-white/80 text-lg">
              {t.heroSubtitle}
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

          {/* Stats */}
          <div className={`mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/20 ${dir === "rtl" ? "text-center" : ""}`}>
            <div>
              <div className="text-3xl font-black">500+</div>
              <div className="text-white/70 text-sm">
                {t.institutions}
              </div>
            </div>
            <div>
              <div className="text-3xl font-black">25+</div>
              <div className="text-white/70 text-sm">
                {t.countries}
              </div>
            </div>
            <div>
              <div className="text-3xl font-black">99.9%</div>
              <div className="text-white/70 text-sm">
                {t.uptime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Profile Dialog */}
      <Dialog open={showCompleteProfile} onOpenChange={setShowCompleteProfile}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">
              {t.completeProfile}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="socialFullName">{t.fullName}</Label>
              <Input
                id="socialFullName"
                name="fullName"
                value={socialProfileData.fullName}
                onChange={handleSocialProfileChange}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="socialInstitutionName">{t.institutionName}</Label>
              <Input
                id="socialInstitutionName"
                name="institutionName"
                value={socialProfileData.institutionName}
                onChange={handleSocialProfileChange}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="socialPhone">{t.phone}</Label>
              <Input
                id="socialPhone"
                name="phone"
                value={socialProfileData.phone}
                onChange={handleSocialProfileChange}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="socialCurrency">{t.currency}</Label>
              <Select
                value={socialProfileData.currency}
                onValueChange={(value) => setSocialProfileData(prev => ({ ...prev, currency: value }))}
              >
                <SelectTrigger className="h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="GBP">GBP - British Pound</SelectItem>
                  <SelectItem value="AED">AED - UAE Dirham</SelectItem>
                  <SelectItem value="SAR">SAR - Saudi Riyal</SelectItem>
                  <SelectItem value="TRY">TRY - Turkish Lira</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={handleCompleteRegistration}
              disabled={isLoading}
              className="w-full h-11 bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-700 hover:to-teal-600 text-white font-semibold rounded-xl"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                t.completeRegistration
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
