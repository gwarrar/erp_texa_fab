import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ICLogo } from "@/components/inducore/ICLogo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Factory,
  Cog,
  BarChart3,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Building2,
  ArrowRight,
  ArrowLeft,
  Globe,
  Check,
  Loader2,
  Shield,
  Package,
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
    startJourney: "Start your journey with InduCore Manufacturing ERP",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    companyName: "Company Name",
    companyNamePlaceholder: "Factory, Plant, or Company name",
    email: "Email Address",
    emailPlaceholder: "Enter your email",
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
    slogan: "#1 in European Manufacturing",
    heroTitle: "InduCore - Manufacturing ERP",
    heroSubtitle: "The complete manufacturing management system for modern factories",
    featureProduction: "Production Management",
    featureProductionDesc: "Complete production lifecycle control",
    featureInventory: "Smart Inventory",
    featureInventoryDesc: "Real-time stock tracking and forecasting",
    featureSecurity: "Enterprise Security",
    featureSecurityDesc: "ISO 27001 compliant infrastructure",
    benefit1: "14-day free trial",
    benefit2: "No credit card required",
    benefit3: "Quick setup in minutes",
    benefit4: "24/7 support",
    factories: "Factories",
    countries: "Countries",
    uptime: "Uptime",
    passwordMismatch: "Passwords do not match",
    termsRequired: "You must agree to the terms",
    registrationError: "Error during registration",
    googleError: "Error signing up with Google",
    appleError: "Error signing up with Apple",
    verifyEmail: "Please check your email to verify your account",
    industry: "Industry",
    selectIndustry: "Select your industry",
    automotive: "Automotive",
    electronics: "Electronics",
    machinery: "Machinery & Equipment",
    metalworking: "Metal Working",
    plastics: "Plastics & Rubber",
    textiles: "Textiles & Apparel",
    food: "Food & Beverage",
    pharma: "Pharmaceuticals",
    chemicals: "Chemicals",
    other: "Other",
  },
  ar: {
    createAccount: "إنشاء حساب",
    startJourney: "ابدأ رحلتك مع نظام إندو كور للتصنيع",
    fullName: "الاسم الكامل",
    fullNamePlaceholder: "أدخل اسمك الكامل",
    companyName: "اسم الشركة",
    companyNamePlaceholder: "اسم المصنع أو المنشأة أو الشركة",
    email: "البريد الإلكتروني",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
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
    slogan: "الأول في التصنيع الأوروبي",
    heroTitle: "إندو كور - نظام تصنيع ERP",
    heroSubtitle: "النظام المتكامل لإدارة التصنيع للمصانع الحديثة",
    featureProduction: "إدارة الإنتاج",
    featureProductionDesc: "تحكم كامل في دورة حياة الإنتاج",
    featureInventory: "مخزون ذكي",
    featureInventoryDesc: "تتبع المخزون في الوقت الفعلي والتنبؤ",
    featureSecurity: "أمان المؤسسات",
    featureSecurityDesc: "بنية تحتية متوافقة مع ISO 27001",
    benefit1: "تجربة مجانية 14 يوماً",
    benefit2: "لا تحتاج بطاقة ائتمان",
    benefit3: "إعداد سريع في دقائق",
    benefit4: "دعم 24/7",
    factories: "مصنع",
    countries: "دولة",
    uptime: "وقت التشغيل",
    passwordMismatch: "كلمات المرور غير متطابقة",
    termsRequired: "يجب الموافقة على الشروط",
    registrationError: "حدث خطأ أثناء التسجيل",
    googleError: "حدث خطأ أثناء التسجيل بـ Google",
    appleError: "حدث خطأ أثناء التسجيل بـ Apple",
    verifyEmail: "يرجى التحقق من بريدك الإلكتروني لتفعيل حسابك",
    industry: "الصناعة",
    selectIndustry: "اختر صناعتك",
    automotive: "السيارات",
    electronics: "الإلكترونيات",
    machinery: "الآلات والمعدات",
    metalworking: "الأعمال المعدنية",
    plastics: "البلاستيك والمطاط",
    textiles: "المنسوجات والملابس",
    food: "الأغذية والمشروبات",
    pharma: "الأدوية",
    chemicals: "الكيماويات",
    other: "أخرى",
  },
  tr: {
    createAccount: "Hesap Oluştur",
    startJourney: "InduCore Üretim ERP ile yolculuğunuza başlayın",
    fullName: "Ad Soyad",
    fullNamePlaceholder: "Adınızı ve soyadınızı girin",
    companyName: "Şirket Adı",
    companyNamePlaceholder: "Fabrika, Tesis veya Şirket adı",
    email: "E-posta Adresi",
    emailPlaceholder: "E-postanızı girin",
    password: "Şifre",
    passwordPlaceholder: "Bir şifre oluşturun",
    confirmPassword: "Şifre Onayı",
    confirmPasswordPlaceholder: "Şifrenizi onaylayın",
    agreeTerms: "Hizmet Şartları ve Gizlilik Politikasını kabul ediyorum",
    createFreeAccount: "Ücretsiz Hesap Oluştur",
    haveAccount: "Zaten hesabınız var mı?",
    login: "Giriş Yap",
    or: "veya şununla devam et",
    continueWithGoogle: "Google ile devam et",
    continueWithApple: "Apple ile devam et",
    slogan: "Avrupa Üretiminde #1",
    heroTitle: "InduCore - Üretim ERP'si",
    heroSubtitle: "Modern fabrikalar için eksiksiz üretim yönetim sistemi",
    featureProduction: "Üretim Yönetimi",
    featureProductionDesc: "Tam üretim yaşam döngüsü kontrolü",
    featureInventory: "Akıllı Envanter",
    featureInventoryDesc: "Gerçek zamanlı stok takibi ve tahmin",
    featureSecurity: "Kurumsal Güvenlik",
    featureSecurityDesc: "ISO 27001 uyumlu altyapı",
    benefit1: "14 gün ücretsiz deneme",
    benefit2: "Kredi kartı gerekmez",
    benefit3: "Dakikalar içinde kurulum",
    benefit4: "7/24 destek",
    factories: "Fabrika",
    countries: "Ülke",
    uptime: "Çalışma Süresi",
    passwordMismatch: "Şifreler eşleşmiyor",
    termsRequired: "Şartları kabul etmelisiniz",
    registrationError: "Kayıt sırasında hata",
    googleError: "Google ile kayıt hatası",
    appleError: "Apple ile kayıt hatası",
    verifyEmail: "Hesabınızı doğrulamak için e-postanızı kontrol edin",
    industry: "Sektör",
    selectIndustry: "Sektörünüzü seçin",
    automotive: "Otomotiv",
    electronics: "Elektronik",
    machinery: "Makine ve Ekipman",
    metalworking: "Metal İşleme",
    plastics: "Plastik ve Kauçuk",
    textiles: "Tekstil ve Giyim",
    food: "Gıda ve İçecek",
    pharma: "İlaç",
    chemicals: "Kimyasallar",
    other: "Diğer",
  },
  de: {
    createAccount: "Konto erstellen",
    startJourney: "Starten Sie Ihre Reise mit InduCore Manufacturing ERP",
    fullName: "Vollständiger Name",
    fullNamePlaceholder: "Geben Sie Ihren Namen ein",
    companyName: "Firmenname",
    companyNamePlaceholder: "Fabrik, Werk oder Firmenname",
    email: "E-Mail-Adresse",
    emailPlaceholder: "Geben Sie Ihre E-Mail ein",
    password: "Passwort",
    passwordPlaceholder: "Erstellen Sie ein Passwort",
    confirmPassword: "Passwort bestätigen",
    confirmPasswordPlaceholder: "Bestätigen Sie Ihr Passwort",
    agreeTerms: "Ich stimme den Nutzungsbedingungen und Datenschutzrichtlinien zu",
    createFreeAccount: "Kostenloses Konto erstellen",
    haveAccount: "Haben Sie bereits ein Konto?",
    login: "Anmelden",
    or: "oder fortfahren mit",
    continueWithGoogle: "Mit Google fortfahren",
    continueWithApple: "Mit Apple fortfahren",
    slogan: "#1 in europäischer Fertigung",
    heroTitle: "InduCore - Fertigungs-ERP",
    heroSubtitle: "Das komplette Fertigungsmanagementsystem für moderne Fabriken",
    featureProduction: "Produktionsmanagement",
    featureProductionDesc: "Vollständige Kontrolle des Produktionslebenszyklus",
    featureInventory: "Smart Inventory",
    featureInventoryDesc: "Echtzeit-Bestandsverfolgung und Prognose",
    featureSecurity: "Enterprise-Sicherheit",
    featureSecurityDesc: "ISO 27001 konforme Infrastruktur",
    benefit1: "14 Tage kostenlos testen",
    benefit2: "Keine Kreditkarte erforderlich",
    benefit3: "Schnelle Einrichtung in Minuten",
    benefit4: "24/7 Support",
    factories: "Fabriken",
    countries: "Länder",
    uptime: "Verfügbarkeit",
    passwordMismatch: "Passwörter stimmen nicht überein",
    termsRequired: "Sie müssen den Bedingungen zustimmen",
    registrationError: "Fehler bei der Registrierung",
    googleError: "Fehler bei Google-Registrierung",
    appleError: "Fehler bei Apple-Registrierung",
    verifyEmail: "Bitte überprüfen Sie Ihre E-Mail zur Bestätigung",
    industry: "Branche",
    selectIndustry: "Wählen Sie Ihre Branche",
    automotive: "Automobilindustrie",
    electronics: "Elektronik",
    machinery: "Maschinenbau",
    metalworking: "Metallverarbeitung",
    plastics: "Kunststoff & Gummi",
    textiles: "Textil & Bekleidung",
    food: "Lebensmittel & Getränke",
    pharma: "Pharmazie",
    chemicals: "Chemie",
    other: "Sonstige",
  },
  ru: {
    createAccount: "Создать аккаунт",
    startJourney: "Начните путь с InduCore ERP для производства",
    fullName: "Полное имя",
    fullNamePlaceholder: "Введите ваше имя",
    companyName: "Название компании",
    companyNamePlaceholder: "Завод, фабрика или компания",
    email: "Email",
    emailPlaceholder: "Введите email",
    password: "Пароль",
    passwordPlaceholder: "Создайте пароль",
    confirmPassword: "Подтвердите пароль",
    confirmPasswordPlaceholder: "Подтвердите пароль",
    agreeTerms: "Я согласен с Условиями использования и Политикой конфиденциальности",
    createFreeAccount: "Создать бесплатный аккаунт",
    haveAccount: "Уже есть аккаунт?",
    login: "Войти",
    or: "или продолжить с",
    continueWithGoogle: "Продолжить с Google",
    continueWithApple: "Продолжить с Apple",
    slogan: "#1 в европейском производстве",
    heroTitle: "InduCore - ERP для производства",
    heroSubtitle: "Полная система управления производством для современных заводов",
    featureProduction: "Управление производством",
    featureProductionDesc: "Полный контроль жизненного цикла производства",
    featureInventory: "Умный склад",
    featureInventoryDesc: "Отслеживание запасов в реальном времени",
    featureSecurity: "Корпоративная безопасность",
    featureSecurityDesc: "Инфраструктура соответствует ISO 27001",
    benefit1: "14 дней бесплатно",
    benefit2: "Без кредитной карты",
    benefit3: "Быстрая настройка",
    benefit4: "Поддержка 24/7",
    factories: "Заводов",
    countries: "Стран",
    uptime: "Аптайм",
    passwordMismatch: "Пароли не совпадают",
    termsRequired: "Необходимо принять условия",
    registrationError: "Ошибка регистрации",
    googleError: "Ошибка регистрации через Google",
    appleError: "Ошибка регистрации через Apple",
    verifyEmail: "Проверьте почту для подтверждения",
    industry: "Отрасль",
    selectIndustry: "Выберите отрасль",
    automotive: "Автомобильная",
    electronics: "Электроника",
    machinery: "Машиностроение",
    metalworking: "Металлообработка",
    plastics: "Пластик и резина",
    textiles: "Текстиль и одежда",
    food: "Продукты питания",
    pharma: "Фармацевтика",
    chemicals: "Химия",
    other: "Другое",
  },
  pl: {
    createAccount: "Utwórz konto",
    startJourney: "Rozpocznij swoją podróż z InduCore Manufacturing ERP",
    fullName: "Imię i nazwisko",
    fullNamePlaceholder: "Wprowadź swoje imię i nazwisko",
    companyName: "Nazwa firmy",
    companyNamePlaceholder: "Fabryka, zakład lub firma",
    email: "Adres e-mail",
    emailPlaceholder: "Wprowadź swój e-mail",
    password: "Hasło",
    passwordPlaceholder: "Utwórz hasło",
    confirmPassword: "Potwierdź hasło",
    confirmPasswordPlaceholder: "Potwierdź hasło",
    agreeTerms: "Zgadzam się z Warunkami usługi i Polityką prywatności",
    createFreeAccount: "Utwórz darmowe konto",
    haveAccount: "Masz już konto?",
    login: "Zaloguj się",
    or: "lub kontynuuj z",
    continueWithGoogle: "Kontynuuj z Google",
    continueWithApple: "Kontynuuj z Apple",
    slogan: "#1 w europejskiej produkcji",
    heroTitle: "InduCore - ERP produkcyjny",
    heroSubtitle: "Kompletny system zarządzania produkcją dla nowoczesnych fabryk",
    featureProduction: "Zarządzanie produkcją",
    featureProductionDesc: "Pełna kontrola cyklu życia produkcji",
    featureInventory: "Inteligentne magazyny",
    featureInventoryDesc: "Śledzenie zapasów w czasie rzeczywistym",
    featureSecurity: "Bezpieczeństwo korporacyjne",
    featureSecurityDesc: "Infrastruktura zgodna z ISO 27001",
    benefit1: "14 dni za darmo",
    benefit2: "Bez karty kredytowej",
    benefit3: "Szybka konfiguracja",
    benefit4: "Wsparcie 24/7",
    factories: "Fabryk",
    countries: "Krajów",
    uptime: "Dostępność",
    passwordMismatch: "Hasła nie pasują",
    termsRequired: "Musisz zaakceptować warunki",
    registrationError: "Błąd rejestracji",
    googleError: "Błąd rejestracji przez Google",
    appleError: "Błąd rejestracji przez Apple",
    verifyEmail: "Sprawdź email, aby zweryfikować konto",
    industry: "Branża",
    selectIndustry: "Wybierz branżę",
    automotive: "Motoryzacja",
    electronics: "Elektronika",
    machinery: "Maszyny i urządzenia",
    metalworking: "Obróbka metali",
    plastics: "Tworzywa sztuczne",
    textiles: "Tekstylia i odzież",
    food: "Żywność i napoje",
    pharma: "Farmaceutyka",
    chemicals: "Chemia",
    other: "Inne",
  },
  ro: {
    createAccount: "Creează cont",
    startJourney: "Începe călătoria ta cu InduCore Manufacturing ERP",
    fullName: "Nume complet",
    fullNamePlaceholder: "Introduceți numele complet",
    companyName: "Numele companiei",
    companyNamePlaceholder: "Fabrică, uzină sau companie",
    email: "Adresa de e-mail",
    emailPlaceholder: "Introduceți e-mailul",
    password: "Parolă",
    passwordPlaceholder: "Creați o parolă",
    confirmPassword: "Confirmați parola",
    confirmPasswordPlaceholder: "Confirmați parola",
    agreeTerms: "Sunt de acord cu Termenii și Politica de confidențialitate",
    createFreeAccount: "Creează cont gratuit",
    haveAccount: "Ai deja un cont?",
    login: "Conectare",
    or: "sau continuă cu",
    continueWithGoogle: "Continuă cu Google",
    continueWithApple: "Continuă cu Apple",
    slogan: "#1 în producția europeană",
    heroTitle: "InduCore - ERP de producție",
    heroSubtitle: "Sistemul complet de management al producției pentru fabrici moderne",
    featureProduction: "Managementul producției",
    featureProductionDesc: "Control complet al ciclului de viață al producției",
    featureInventory: "Inventar inteligent",
    featureInventoryDesc: "Urmărirea stocurilor în timp real",
    featureSecurity: "Securitate enterprise",
    featureSecurityDesc: "Infrastructură conformă ISO 27001",
    benefit1: "14 zile gratuit",
    benefit2: "Fără card de credit",
    benefit3: "Configurare rapidă",
    benefit4: "Suport 24/7",
    factories: "Fabrici",
    countries: "Țări",
    uptime: "Disponibilitate",
    passwordMismatch: "Parolele nu se potrivesc",
    termsRequired: "Trebuie să accepți termenii",
    registrationError: "Eroare la înregistrare",
    googleError: "Eroare la înregistrarea cu Google",
    appleError: "Eroare la înregistrarea cu Apple",
    verifyEmail: "Verificați e-mailul pentru confirmare",
    industry: "Industrie",
    selectIndustry: "Selectați industria",
    automotive: "Automotive",
    electronics: "Electronică",
    machinery: "Mașini și echipamente",
    metalworking: "Prelucrarea metalelor",
    plastics: "Plastic și cauciuc",
    textiles: "Textile și îmbrăcăminte",
    food: "Alimente și băuturi",
    pharma: "Farmaceutice",
    chemicals: "Chimicale",
    other: "Altele",
  },
};

export default function ICRegisterPage() {
  const { language, dir, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [industry, setIndustry] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);

  const t = translations[language as keyof typeof translations] || translations.en;

  // Check for existing session
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/inducore');
      }
    };
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate('/inducore');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert(t.passwordMismatch);
      return;
    }

    if (!agreeTerms) {
      alert(t.termsRequired);
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            company_name: companyName,
            industry: industry,
          },
          emailRedirectTo: `${window.location.origin}/inducore`,
        },
      });

      if (error) {
        console.error('Registration error:', error);
        alert(t.registrationError);
        return;
      }

      alert(t.verifyEmail);
      navigate('/inducore/login');
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
          redirectTo: `${window.location.origin}/inducore/register`,
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
          redirectTo: `${window.location.origin}/inducore/register`,
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

  const features = [
    {
      icon: Factory,
      title: t.featureProduction,
      desc: t.featureProductionDesc,
    },
    {
      icon: Package,
      title: t.featureInventory,
      desc: t.featureInventoryDesc,
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
    { code: "de", name: "Deutsch" },
    { code: "ru", name: "Русский" },
    { code: "pl", name: "Polski" },
    { code: "ro", name: "Română" },
  ];

  const industries = [
    { value: "automotive", label: t.automotive },
    { value: "electronics", label: t.electronics },
    { value: "machinery", label: t.machinery },
    { value: "metalworking", label: t.metalworking },
    { value: "plastics", label: t.plastics },
    { value: "textiles", label: t.textiles },
    { value: "food", label: t.food },
    { value: "pharma", label: t.pharma },
    { value: "chemicals", label: t.chemicals },
    { value: "other", label: t.other },
  ];

  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen flex ${dir === "rtl" ? "flex-row rtl" : "flex-row ltr"}`} dir={dir}>
      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center px-8 py-6 lg:px-12 bg-white dark:bg-slate-900 overflow-y-auto">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <Link to="/inducore" className="inline-flex items-center gap-3 mb-6">
            <ICLogo className="h-11 w-auto" showText={false} animated={false} />
            <div className="flex flex-col">
              <div className="flex items-baseline" dir="ltr">
                <span className="text-xl font-black text-red-800 tracking-tight">Indu</span>
                <span className="text-xl font-black text-slate-700 dark:text-slate-300 tracking-tight">Core</span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">{t.slogan}</span>
            </div>
          </Link>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
              {t.createAccount}
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              {t.startJourney}
            </p>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap gap-3 mb-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-full"
              >
                <Check className="w-3 h-3 text-red-600" />
                {benefit}
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-slate-700 dark:text-slate-200">
                {t.fullName}
              </Label>
              <div className="relative">
                <User className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder={t.fullNamePlaceholder}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="ps-10 h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-slate-700 dark:text-slate-200">
                {t.companyName}
              </Label>
              <div className="relative">
                <Building2 className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  id="companyName"
                  type="text"
                  placeholder={t.companyNamePlaceholder}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="ps-10 h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>
            </div>

            {/* Industry */}
            <div className="space-y-2">
              <Label className="text-slate-700 dark:text-slate-200">
                {t.industry}
              </Label>
              <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger className="h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <SelectValue placeholder={t.selectIndustry} />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((ind) => (
                    <SelectItem key={ind.value} value={ind.value}>
                      {ind.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 dark:text-slate-200">
                {t.email}
              </Label>
              <div className="relative">
                <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ps-10 h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700 dark:text-slate-200">
                {t.password}
              </Label>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t.passwordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="ps-10 pe-10 h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-red-500 focus:ring-red-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-slate-700 dark:text-slate-200">
                {t.confirmPassword}
              </Label>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={t.confirmPasswordPlaceholder}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="ps-10 pe-10 h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-red-500 focus:ring-red-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                className="mt-1 border-slate-300 data-[state=checked]:bg-red-800 data-[state=checked]:border-red-800"
              />
              <label
                htmlFor="terms"
                className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer"
              >
                {t.agreeTerms}
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-red-800 to-red-700 hover:from-red-900 hover:to-red-800 text-white font-semibold rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300"
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

          {/* Divider */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-slate-900 text-slate-500">
                {t.or}
              </span>
            </div>
          </div>

          {/* Social Sign Up Buttons */}
          <div className="space-y-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignUp}
              disabled={oauthLoading || isLoading}
              className="w-full h-11 border-2 border-slate-200 dark:border-slate-700 hover:border-red-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-all duration-200 text-slate-700 dark:text-slate-200"
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
              className="w-full h-11 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-all duration-200 text-slate-700 dark:text-slate-200"
            >
              {oauthLoading ? (
                <Loader2 className="w-5 h-5 me-3 animate-spin" />
              ) : (
                <AppleIcon className="w-5 h-5 me-3" />
              )}
              {t.continueWithApple}
            </Button>
          </div>

          {/* Login Link */}
          <p className="text-center mt-5 text-slate-600 dark:text-slate-400">
            {t.haveAccount}{" "}
            <Link to="/inducore/login" className="text-red-700 font-semibold hover:underline">
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
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-red-800 via-red-900 to-slate-900 p-12 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

        {/* Gear Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Cog className="absolute top-20 right-20 w-32 h-32 text-white/5 animate-spin" style={{ animationDuration: '20s' }} />
          <Cog className="absolute bottom-20 left-20 w-24 h-24 text-white/5 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        </div>

        <div className={`relative z-10 max-w-lg text-white ${dir === "rtl" ? "text-right" : "text-left"}`}>
          {/* Logo */}
          <div className="mb-12">
            <div className={`w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 ${dir === "rtl" ? "mr-auto ml-0" : ""}`}>
              <Factory className="w-8 h-8 text-white" />
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
              <div className="text-3xl font-black">300+</div>
              <div className="text-white/70 text-sm">
                {t.factories}
              </div>
            </div>
            <div>
              <div className="text-3xl font-black">18+</div>
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
    </div>
  );
}
