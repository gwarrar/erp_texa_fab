import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useLanguage } from "@/components/landing/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
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
  Coins,
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

export default function RegisterPage() {
  const { language, dir, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
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
  
  // Social login state
  const [showCompleteProfile, setShowCompleteProfile] = useState(false);
  const [socialProvider, setSocialProvider] = useState<'google' | 'apple' | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [socialProfileData, setSocialProfileData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    currency: "EUR",
  });

  // Handle OAuth callback
  useEffect(() => {
    const handleOAuthCallback = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (session?.user) {
        // Check if this is a new OAuth user that needs profile completion
        const { data: userProfile } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .single();
        
        // If user has no company_name or phone, show complete profile dialog
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

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const provider = session.user.app_metadata?.provider;
        if (provider === 'google' || provider === 'apple') {
          // Check if profile needs completion
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
            // Profile complete, redirect to dashboard
            navigate('/');
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
      alert(getText({ ar: "كلمات المرور غير متطابقة", en: "Passwords do not match", ru: "Пароли не совпадают", uk: "Паролі не співпадають", ro: "Parolele nu se potrivesc", pl: "Hasła nie są zgodne", it: "Le password non corrispondono", tr: "Şifreler eşleşmiyor" }));
      return;
    }
    
    if (!agreeTerms) {
      alert(getText({ ar: "يجب الموافقة على الشروط والأحكام", en: "You must agree to the terms", ru: "Вы должны согласиться с условиями", uk: "Ви повинні погодитися з умовами", ro: "Trebuie să acceptați termenii", pl: "Musisz zaakceptować warunki", it: "Devi accettare i termini", tr: "Şartları kabul etmelisiniz" }));
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Sign up with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/login`,
          data: {
            full_name: formData.fullName,
            company_name: formData.companyName,
            phone: formData.phone,
          }
        }
      });

      if (authError) {
        console.error('Signup error:', authError);
        alert(getText({
          ar: authError.message.includes('already') ? "البريد الإلكتروني مسجل مسبقاً" : "حدث خطأ أثناء التسجيل",
          en: authError.message.includes('already') ? "Email already registered" : "Error during registration",
          ru: authError.message.includes('already') ? "Email уже зарегистрирован" : "Ошибка при регистрации",
          uk: authError.message.includes('already') ? "Email вже зареєстровано" : "Помилка при реєстрації",
          ro: authError.message.includes('already') ? "Email-ul este deja înregistrat" : "Eroare la înregistrare",
          pl: authError.message.includes('already') ? "Email już zarejestrowany" : "Błąd podczas rejestracji",
          it: authError.message.includes('already') ? "Email già registrata" : "Errore durante la registrazione",
          tr: authError.message.includes('already') ? "E-posta zaten kayıtlı" : "Kayıt sırasında hata oluştu"
        }));
        return;
      }

      // If user was created, update their profile
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

      // Show confirmation email message
      alert(getText({
        ar: "تم إنشاء حسابك بنجاح! يرجى التحقق من بريدك الإلكتروني لتأكيد الحساب.",
        en: "Account created! Please check your email to confirm your account.",
        ru: "Аккаунт создан! Проверьте электронную почту для подтверждения.",
        uk: "Обліковий запис створено! Перевірте електронну пошту для підтвердження.",
        ro: "Cont creat! Verificați emailul pentru confirmare.",
        pl: "Konto utworzone! Sprawdź email w celu potwierdzenia.",
        it: "Account creato! Controlla l'email per confermare.",
        tr: "Hesap oluşturuldu! Onay için e-postanızı kontrol edin."
      }));
      
      navigate("/login");
    } catch (err) {
      console.error('Registration exception:', err);
      alert(getText({
        ar: "حدث خطأ غير متوقع",
        en: "An unexpected error occurred",
        ru: "Произошла непредвиденная ошибка",
        uk: "Сталася неочікувана помилка",
        ro: "A apărut o eroare neașteptată",
        pl: "Wystąpił nieoczekiwany błąd",
        it: "Si è verificato un errore imprevisto",
        tr: "Beklenmeyen bir hata oluştu"
      }));
    } finally {
      setIsLoading(false);
    }
  };

  // Social login handlers - Real OAuth with Supabase
  const handleGoogleSignUp = async () => {
    try {
      setOauthLoading(true);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/register`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      
      if (error) {
        console.error('Google OAuth error:', error);
        alert(getText({
          ar: "حدث خطأ أثناء التسجيل بـ Google. يرجى المحاولة مرة أخرى.",
          en: "Error signing up with Google. Please try again.",
          ru: "Ошибка при регистрации через Google. Попробуйте снова.",
          uk: "Помилка при реєстрації через Google. Спробуйте ще раз.",
          ro: "Eroare la înregistrarea cu Google. Încercați din nou.",
          pl: "Błąd podczas rejestracji przez Google. Spróbuj ponownie.",
          it: "Errore durante la registrazione con Google. Riprova.",
          tr: "Google ile kayıt olurken hata oluştu. Tekrar deneyin."
        }));
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
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'apple',
        options: {
          redirectTo: `${window.location.origin}/register`,
        },
      });
      
      if (error) {
        console.error('Apple OAuth error:', error);
        alert(getText({
          ar: "حدث خطأ أثناء التسجيل بـ Apple. يرجى المحاولة مرة أخرى.",
          en: "Error signing up with Apple. Please try again.",
          ru: "Ошибка при регистрации через Apple. Попробуйте снова.",
          uk: "Помилка при реєстрації через Apple. Спробуйте ще раз.",
          ro: "Eroare la înregistrarea cu Apple. Încercați din nou.",
          pl: "Błąd podczas rejestracji przez Apple. Spróbuj ponownie.",
          it: "Errore durante la registrazione con Apple. Riprova.",
          tr: "Apple ile kayıt olurken hata oluştu. Tekrar deneyin."
        }));
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
      // Update user profile in database
      const { error: updateError } = await supabase
        .from('users')
        .update({
          full_name: socialProfileData.fullName,
          company_name: socialProfileData.companyName,
          phone: socialProfileData.phone,
          currency: socialProfileData.currency,
          updated_at: new Date().toISOString(),
        })
        .eq('id', currentUserId);

      if (updateError) {
        console.error('Profile update error:', updateError);
        alert(getText({
          ar: "حدث خطأ أثناء حفظ البيانات. يرجى المحاولة مرة أخرى.",
          en: "Error saving profile data. Please try again.",
          ru: "Ошибка при сохранении данных профиля. Попробуйте снова.",
          uk: "Помилка при збереженні даних профілю. Спробуйте ще раз.",
          ro: "Eroare la salvarea datelor profilului. Încercați din nou.",
          pl: "Błąd podczas zapisywania danych profilu. Spróbuj ponownie.",
          it: "Errore durante il salvataggio del profilo. Riprova.",
          tr: "Profil verileri kaydedilirken hata oluştu. Tekrar deneyin."
        }));
        return;
      }

      // Also update user metadata in auth
      await supabase.auth.updateUser({
        data: {
          full_name: socialProfileData.fullName,
          company_name: socialProfileData.companyName,
          phone: socialProfileData.phone,
          currency: socialProfileData.currency,
        }
      });

      setShowCompleteProfile(false);
      alert(getText({
        ar: "تم إنشاء حسابك بنجاح! مرحباً بك في TexaCore",
        en: "Your account has been created successfully! Welcome to TexaCore",
        ru: "Ваш аккаунт успешно создан! Добро пожаловать в TexaCore",
        uk: "Ваш обліковий запис успішно створено! Ласкаво просимо до TexaCore",
        ro: "Contul dvs. a fost creat cu succes! Bine ați venit în TexaCore",
        pl: "Twoje konto zostało pomyślnie utworzone! Witamy w TexaCore",
        it: "Il tuo account è stato creato con successo! Benvenuto in TexaCore",
        tr: "Hesabınız başarıyla oluşturuldu! TexaCore'a hoş geldiniz"
      }));
      
      // Redirect to home/dashboard
      navigate("/");
    } catch (err) {
      console.error('Complete registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: ShoppingCart,
      title: { ar: "متجر إلكتروني مجاني", en: "Free E-commerce Store", ru: "Бесплатный интернет-магазин", uk: "Безкоштовний інтернет-магазин", ro: "Magazin online gratuit", pl: "Darmowy sklep internetowy", it: "Negozio online gratuito", tr: "Ücretsiz e-ticaret mağazası" },
      desc: { ar: "بدون رسوم تصميم أو تشغيل إضافية", en: "No design or setup fees", ru: "Без дизайна и платы за настройку", uk: "Без дизайну та плати за налаштування", ro: "Fără taxe de design sau configurare", pl: "Bez opłat za projektowanie lub konfigurację", it: "Nessun costo di design o configurazione", tr: "Tasarım veya kurulum ücreti yok" },
    },
    {
      icon: Boxes,
      title: { ar: "إدارة المخزون", en: "Inventory Management", ru: "Управление запасами", uk: "Управління запасами", ro: "Managementul stocurilor", pl: "Zarządzanie zapasami", it: "Gestione inventario", tr: "Stok yönetimi" },
      desc: { ar: "تتبع الرولونات والألوان بدقة", en: "Precise roll and color tracking", ru: "Точное отслеживание рулонов и цветов", uk: "Точне відстеження рулонів та кольорів", ro: "Urmărire precisă a rolelor și culorilor", pl: "Precyzyjne śledzenie rolek i kolorów", it: "Tracciamento preciso di rotoli e colori", tr: "Hassas rulo ve renk takibi" },
    },
    {
      icon: Calculator,
      title: { ar: "محاسبة متكاملة", en: "Full Accounting", ru: "Полная бухгалтерия", uk: "Повна бухгалтерія", ro: "Contabilitate completă", pl: "Pełna księgowość", it: "Contabilità completa", tr: "Tam muhasebe" },
      desc: { ar: "إدارة مالية شاملة", en: "Complete financial management", ru: "Полное финансовое управление", uk: "Повне фінансове управління", ro: "Management financiar complet", pl: "Kompleksowe zarządzanie finansami", it: "Gestione finanziaria completa", tr: "Tam finansal yönetim" },
    },
  ];

  const getText = (translations: Record<string, string>) => {
    return translations[language] || translations.en;
  };

  const benefits = [
    { ar: "14 يوم تجربة مجانية", en: "14-day free trial", ru: "14-дневная бесплатная пробная версия", uk: "14-денний безкоштовний пробний період", ro: "14 zile de probă gratuită", pl: "14-dniowy bezpłatny okres próbny", it: "14 giorni di prova gratuita", tr: "14 günlük ücretsiz deneme" },
    { ar: "بدون بطاقة ائتمان", en: "No credit card required", ru: "Без кредитной карты", uk: "Без кредитної картки", ro: "Fără card de credit", pl: "Bez karty kredytowej", it: "Nessuna carta di credito richiesta", tr: "Kredi kartı gerekmez" },
    { ar: "إعداد سريع خلال دقائق", en: "Quick setup in minutes", ru: "Быстрая настройка за минуты", uk: "Швидке налаштування за хвилини", ro: "Configurare rapidă în minute", pl: "Szybka konfiguracja w minuty", it: "Configurazione rapida in minuti", tr: "Dakikalar içinde hızlı kurulum" },
    { ar: "دعم فني 24/7", en: "24/7 support", ru: "Поддержка 24/7", uk: "Підтримка 24/7", ro: "Suport 24/7", pl: "Wsparcie 24/7", it: "Supporto 24/7", tr: "7/24 destek" },
  ];

  const pageText = {
    createAccount: { ar: "إنشاء حساب جديد", en: "Create Account", ru: "Создать аккаунт", uk: "Створити обліковий запис", ro: "Crează cont", pl: "Utwórz konto", it: "Crea account", tr: "Hesap Oluştur" },
    startJourney: { ar: "ابدأ رحلتك مع نظام TexaCore", en: "Start your journey with TexaCore", ru: "Начните свой путь с TexaCore", uk: "Почніть свій шлях з TexaCore", ro: "Începe-ți călătoria cu TexaCore", pl: "Rozpocznij swoją podróż z TexaCore", it: "Inizia il tuo viaggio con TexaCore", tr: "TexaCore ile yolculuğunuza başlayın" },
    fullName: { ar: "الاسم الكامل", en: "Full Name", ru: "Полное имя", uk: "Повне ім'я", ro: "Nume complet", pl: "Pełne imię", it: "Nome completo", tr: "Ad Soyad" },
    companyName: { ar: "اسم الشركة", en: "Company Name", ru: "Название компании", uk: "Назва компанії", ro: "Numele companiei", pl: "Nazwa firmy", it: "Nome azienda", tr: "Şirket Adı" },
    email: { ar: "البريد الإلكتروني", en: "Email", ru: "Электронная почта", uk: "Електронна пошта", ro: "Email", pl: "E-mail", it: "Email", tr: "E-posta" },
    phone: { ar: "رقم الهاتف", en: "Phone", ru: "Телефон", uk: "Телефон", ro: "Telefon", pl: "Telefon", it: "Telefono", tr: "Telefon" },
    password: { ar: "كلمة المرور", en: "Password", ru: "Пароль", uk: "Пароль", ro: "Parolă", pl: "Hasło", it: "Password", tr: "Şifre" },
    confirmPassword: { ar: "تأكيد كلمة المرور", en: "Confirm Password", ru: "Подтвердите пароль", uk: "Підтвердіть пароль", ro: "Confirmă parola", pl: "Potwierdź hasło", it: "Conferma password", tr: "Şifreyi Onayla" },
    agreeTerms: { ar: "أوافق على الشروط والأحكام وسياسة الخصوصية", en: "I agree to the Terms and Privacy Policy", ru: "Я согласен с Условиями и Политикой конфиденциальности", uk: "Я погоджуюсь з Умовами та Політикою конфіденційності", ro: "Sunt de acord cu Termenii și Politica de confidențialitate", pl: "Zgadzam się z Warunkami i Polityką prywatności", it: "Accetto i Termini e la Privacy Policy", tr: "Şartları ve Gizlilik Politikasını kabul ediyorum" },
    createFreeAccount: { ar: "إنشاء حساب مجاني", en: "Create Free Account", ru: "Создать бесплатный аккаунт", uk: "Створити безкоштовний обліковий запис", ro: "Crează cont gratuit", pl: "Utwórz darmowe konto", it: "Crea account gratuito", tr: "Ücretsiz Hesap Oluştur" },
    haveAccount: { ar: "لديك حساب بالفعل؟", en: "Already have an account?", ru: "Уже есть аккаунт?", uk: "Вже є обліковий запис?", ro: "Ai deja un cont?", pl: "Masz już konto?", it: "Hai già un account?", tr: "Zaten hesabınız var mı?" },
    login: { ar: "تسجيل الدخول", en: "Login", ru: "Войти", uk: "Увійти", ro: "Conectare", pl: "Zaloguj się", it: "Accedi", tr: "Giriş Yap" },
    tagline: { ar: "الخيار الأول في أوروبا والخليج", en: "#1 Choice in Europe & Gulf", ru: "Выбор №1 в Европе и Персидском заливе", uk: "Вибір №1 в Європі та Перській затоці", ro: "Alegerea #1 în Europa și Golf", pl: "Wybór nr 1 w Europie i Zatoce", it: "Scelta #1 in Europa e Golfo", tr: "Avrupa ve Körfez'de #1 Tercih" },
    continueWithGoogle: { ar: "المتابعة مع Google", en: "Continue with Google", ru: "Продолжить с Google", uk: "Продовжити з Google", ro: "Continuă cu Google", pl: "Kontynuuj z Google", it: "Continua con Google", tr: "Google ile devam et" },
    continueWithApple: { ar: "المتابعة مع Apple", en: "Continue with Apple", ru: "Продолжить с Apple", uk: "Продовжити з Apple", ro: "Continuă cu Apple", pl: "Kontynuuj z Apple", it: "Continua con Apple", tr: "Apple ile devam et" },
    or: { ar: "أو", en: "or", ru: "или", uk: "або", ro: "sau", pl: "lub", it: "o", tr: "veya" },
    completeProfile: { ar: "أكمل ملفك الشخصي", en: "Complete Your Profile", ru: "Заполните профиль", uk: "Заповніть профіль", ro: "Completează profilul", pl: "Uzupełnij profil", it: "Completa il profilo", tr: "Profilinizi tamamlayın" },
    currency: { ar: "العملة", en: "Currency", ru: "Валюта", uk: "Валюта", ro: "Moneda", pl: "Waluta", it: "Valuta", tr: "Para birimi" },
    completeRegistration: { ar: "إنهاء التسجيل", en: "Complete Registration", ru: "Завершить регистрацию", uk: "Завершити реєстрацію", ro: "Finalizează înregistrarea", pl: "Zakończ rejestrację", it: "Completa registrazione", tr: "Kaydı tamamla" }
  };

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
    <div className={`h-screen flex ${dir === "rtl" ? "flex-row rtl" : "flex-row ltr"}`} dir={dir}>
      {/* Form Side - Left in LTR, Right in RTL */}
      <div className="flex-1 flex flex-col justify-start px-8 py-6 lg:px-12 bg-white dark:bg-gray-900 overflow-y-auto">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-3 mb-4">
            <div className="relative group">
              {/* TexaCore Logo - Hexagon with Thread */}
              <svg width="44" height="44" viewBox="0 0 44 44" className="drop-shadow-lg group-hover:drop-shadow-xl transition-all">
                {/* Hexagon Background */}
                <defs>
                  <linearGradient id="registerHexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#047857" />
                    <stop offset="100%" stopColor="#0d9488" />
                  </linearGradient>
                  <linearGradient id="registerThreadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                {/* Hexagon Shape */}
                <polygon 
                  points="22,2 40,12 40,32 22,42 4,32 4,12" 
                  fill="url(#registerHexGradient)"
                  className="group-hover:filter group-hover:brightness-110 transition-all"
                />
                {/* Thread/Fabric Wave */}
                <path 
                  d="M12,22 Q17,14 22,22 T32,22" 
                  stroke="url(#registerThreadGradient)" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeLinecap="round"
                />
                {/* Core Dot */}
                <circle cx="22" cy="22" r="4" fill="white" opacity="0.95"/>
              </svg>
              <div className="absolute -inset-1 bg-texafab-emerald/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline" dir="ltr">
                <span className="text-xl font-black text-texafab-emerald tracking-tight">Texa</span>
                <span className="text-xl font-black text-texafab-gold tracking-tight">Core</span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide">{getText(pageText.tagline)}</span>
            </div>
          </Link>

          {/* Header */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-texafab-slate dark:text-white mb-1">
              {getText(pageText.createAccount)}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {getText(pageText.startJourney)}
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-1 mb-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs">
                <div className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  {(benefit as any)[language] || benefit.en}
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
              className="w-full h-10 border-2 border-gray-200 dark:border-gray-700 hover:border-texafab-emerald hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-medium transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
            >
              {oauthLoading ? (
                <Loader2 className="w-5 h-5 me-3 animate-spin" />
              ) : (
                <GoogleIcon className="w-5 h-5 me-3" />
              )}
              {getText(pageText.continueWithGoogle)}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={handleAppleSignUp}
              disabled={oauthLoading}
              className="w-full h-10 border-2 border-gray-200 dark:border-gray-700 hover:border-texafab-slate hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-medium transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
            >
              {oauthLoading ? (
                <Loader2 className="w-5 h-5 me-3 animate-spin" />
              ) : (
                <AppleIcon className="w-5 h-5 me-3" />
              )}
              {getText(pageText.continueWithApple)}
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-gray-900 text-gray-500">
                {getText(pageText.or)}
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Full Name */}
            <div className="space-y-1">
              <Label htmlFor="fullName" className="text-texafab-slate dark:text-gray-200 text-sm">
                {getText(pageText.fullName)}
              </Label>
              <div className="relative">
                <User className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder={getText({ ar: "أدخل اسمك الكامل", en: "Enter your full name", ru: "Введите ваше полное имя", uk: "Введіть ваше повне ім'я", ro: "Introduceți numele complet", pl: "Wprowadź pełne imię", it: "Inserisci il nome completo", tr: "Adınızı ve soyadınızı girin" })}
                  value={formData.fullName}
                  onChange={handleChange}
                  className="ps-9 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald text-sm"
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="space-y-1">
              <Label htmlFor="companyName" className="text-texafab-slate dark:text-gray-200 text-sm">
                {getText(pageText.companyName)}
              </Label>
              <div className="relative">
                <Building2 className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder={getText({ ar: "أدخل اسم شركتك", en: "Enter your company name", ru: "Введите название компании", uk: "Введіть назву компанії", ro: "Introduceți numele companiei", pl: "Wprowadź nazwę firmy", it: "Inserisci il nome dell'azienda", tr: "Şirket adınızı girin" })}
                  value={formData.companyName}
                  onChange={handleChange}
                  className="ps-9 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald text-sm"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="email" className="text-texafab-slate dark:text-gray-200 text-sm">
                {getText(pageText.email)}
              </Label>
              <div className="relative">
                <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={getText({ ar: "أدخل بريدك الإلكتروني", en: "Enter your email", ru: "Введите ваш email", uk: "Введіть вашу електронну пошту", ro: "Introduceți emailul", pl: "Wprowadź email", it: "Inserisci la tua email", tr: "E-postanızı girin" })}
                  value={formData.email}
                  onChange={handleChange}
                  className="ps-9 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald text-sm"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-texafab-slate dark:text-gray-200 text-sm">
                {getText(pageText.phone)}
              </Label>
              <div className="relative">
                <Phone className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+353 XX XXX XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="ps-9 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald text-sm"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <Label htmlFor="password" className="text-texafab-slate dark:text-gray-200 text-sm">
                {getText(pageText.password)}
              </Label>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={getText({ ar: "أدخل كلمة المرور", en: "Enter password", ru: "Введите пароль", uk: "Введіть пароль", ro: "Introduceți parola", pl: "Wprowadź hasło", it: "Inserisci la password", tr: "Şifrenizi girin" })}
                  value={formData.password}
                  onChange={handleChange}
                  className="ps-9 pe-9 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald text-sm"
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
              <Label htmlFor="confirmPassword" className="text-texafab-slate dark:text-gray-200 text-sm">
                {getText(pageText.confirmPassword)}
              </Label>
              <div className="relative">
                <Lock className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder={getText({ ar: "أعد كتابة كلمة المرور", en: "Confirm password", ru: "Подтвердите пароль", uk: "Підтвердіть пароль", ro: "Confirmați parola", pl: "Potwierdź hasło", it: "Conferma la password", tr: "Şifrenizi onaylayın" })}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="ps-9 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald text-sm"
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
                {getText({ ar: "أوافق على", en: "I agree to the", ru: "Я согласен с", uk: "Я погоджуюсь з", ro: "Sunt de acord cu", pl: "Zgadzam się z", it: "Accetto i", tr: "Kabul ediyorum" })}{" "}
                <Link to="/terms" className="text-texafab-emerald hover:underline">
                  {getText({ ar: "شروط الخدمة", en: "Terms of Service", ru: "Условиями использования", uk: "Умовами використання", ro: "Termenii serviciului", pl: "Warunkami korzystania", it: "Termini di servizio", tr: "Hizmet Şartları" })}
                </Link>{" "}
                {getText({ ar: "و", en: "and", ru: "и", uk: "та", ro: "și", pl: "i", it: "e", tr: "ve" })}{" "}
                <Link to="/privacy" className="text-texafab-emerald hover:underline">
                  {getText({ ar: "سياسة الخصوصية", en: "Privacy Policy", ru: "Политикой конфиденциальности", uk: "Політикою конфіденційності", ro: "Politica de confidențialitate", pl: "Polityką prywatności", it: "Privacy Policy", tr: "Gizlilik Politikası" })}
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading || !agreeTerms}
              className="w-full h-10 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white font-semibold rounded-xl disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {getText(pageText.createFreeAccount)}
                  <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
                </>
              )}
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="text-center mt-4 text-gray-600 dark:text-gray-400 text-sm">
            {getText(pageText.haveAccount)}{" "}
            <Link to="/login" className="text-texafab-emerald font-semibold hover:underline">
              {getText(pageText.login)}
            </Link>
          </p>

          {/* Language Selector */}
          <div className="mt-4 flex items-center justify-center gap-2">
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

      {/* Branding Side - Right in LTR, Left in RTL */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-texafab-emerald via-teal-600 to-teal-700 p-12 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-texafab-gold/10 rounded-full blur-3xl" />

        <div className={`relative z-10 max-w-lg text-white ${dir === "rtl" ? "text-right" : "text-left"}`}>
          {/* Logo */}
          <div className="mb-12">
            <svg width="64" height="64" viewBox="0 0 44 44" className={`drop-shadow-xl mb-6 ${dir === "rtl" ? "mr-auto ml-0" : ""}`}>
              <defs>
                <linearGradient id="registerSideHexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="registerSideThreadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <polygon 
                points="22,2 40,12 40,32 22,42 4,32 4,12" 
                fill="url(#registerSideHexGradient)"
              />
              <path 
                d="M12,22 Q17,14 22,22 T32,22" 
                stroke="url(#registerSideThreadGradient)" 
                strokeWidth="3" 
                fill="none" 
                strokeLinecap="round"
              />
              <circle cx="22" cy="22" r="4" fill="white" opacity="0.95"/>
            </svg>
            <h2 className="text-4xl font-black mb-4">
              {getText({ ar: "ابدأ مجاناً اليوم", en: "Start Free Today", ru: "Начните бесплатно сегодня", uk: "Почніть безкоштовно сьогодні", ro: "Începe gratuit astăzi", pl: "Zacznij za darmo dziś", it: "Inizia gratis oggi", tr: "Bugün ücretsiz başlayın" })}
            </h2>
            <p className="text-white/80 text-lg">
              {getText({ 
                ar: "انضم لأكثر من 500 شركة تستخدم TexaCore لإدارة أعمالها",
                en: "Join over 500 companies using TexaCore to manage their business",
                ru: "Присоединяйтесь к более чем 500 компаниям, использующим TexaCore",
                uk: "Приєднуйтесь до понад 500 компаній, які використовують TexaCore",
                ro: "Alăturați-vă celor peste 500 de companii care folosesc TexaCore",
                pl: "Dołącz do ponad 500 firm korzystających z TexaCore",
                it: "Unisciti a oltre 500 aziende che utilizzano TexaCore",
                tr: "TexaCore kullanan 500'den fazla şirkete katılın"
              })}
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
                      {getText(feature.title)}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {getText(feature.desc)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial */}
          <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <p className="text-white/90 mb-4 leading-relaxed">
              "{getText({
                ar: "نظام TexaCore غيّر طريقة إدارتنا للمخزون. الآن نتتبع كل رولون بدقة تامة.",
                en: "TexaCore changed how we manage inventory. Now we track every roll with complete precision.",
                ru: "TexaCore изменил наш подход к управлению запасами. Теперь мы отслеживаем каждый рулон с полной точностью.",
                uk: "TexaCore змінив наш підхід до управління запасами. Тепер ми відстежуємо кожен рулон з повною точністю.",
                ro: "TexaCore a schimbat modul în care gestionăm inventarul. Acum urmărim fiecare rolă cu precizie completă.",
                pl: "TexaCore zmienił sposób zarządzania zapasami. Teraz śledzimy każdą rolę z pełną precyzją.",
                it: "TexaCore ha cambiato il modo in cui gestiamo l'inventario. Ora tracciamo ogni rotolo con precisione completa.",
                tr: "TexaCore envanter yönetimimizi değiştirdi. Artık her ruloyu tam hassasiyetle takip ediyoruz."
              })}"
            </p>
            <div className={`flex items-center gap-3 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div className={dir === "rtl" ? "text-right" : "text-left"}>
                <div className="font-semibold">
                  {getText({ ar: "باتريك أوسوليفان", en: "Patrick O'Sullivan", ru: "Патрик О'Салливан", uk: "Патрік О'Салліван", ro: "Patrick O'Sullivan", pl: "Patrick O'Sullivan", it: "Patrick O'Sullivan", tr: "Patrick O'Sullivan" })}
                </div>
                <div className="text-white/60 text-sm">
                  {getText({ ar: "المدير التنفيذي، دبلن تكستايل المحدودة", en: "CEO, Dublin Textiles Ltd.", ru: "Генеральный директор, Dublin Textiles Ltd.", uk: "Генеральний директор, Dublin Textiles Ltd.", ro: "CEO, Dublin Textiles Ltd.", pl: "Dyrektor generalny, Dublin Textiles Ltd.", it: "CEO, Dublin Textiles Ltd.", tr: "CEO, Dublin Textiles Ltd." })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Profile Modal for Social Login */}
      <Dialog open={showCompleteProfile} onOpenChange={setShowCompleteProfile}>
        <DialogContent className="sm:max-w-md" dir={dir}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-texafab-slate dark:text-white flex items-center gap-3">
              {socialProvider === 'google' && <GoogleIcon className="w-6 h-6" />}
              {socialProvider === 'apple' && <AppleIcon className="w-6 h-6" />}
              {getText(pageText.completeProfile)}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="socialFullName" className="text-texafab-slate dark:text-gray-200">
                {getText(pageText.fullName)}
              </Label>
              <div className="relative">
                <User className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="socialFullName"
                  name="fullName"
                  type="text"
                  placeholder={getText({ ar: "أدخل اسمك الكامل", en: "Enter your full name", ru: "Введите ваше полное имя", uk: "Введіть ваше повне ім'я", ro: "Introduceți numele complet", pl: "Wprowadź pełne imię", it: "Inserisci il nome completo", tr: "Adınızı ve soyadınızı girin" })}
                  value={socialProfileData.fullName}
                  onChange={handleSocialProfileChange}
                  className="ps-10 h-11 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald"
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="socialCompanyName" className="text-texafab-slate dark:text-gray-200">
                {getText(pageText.companyName)}
              </Label>
              <div className="relative">
                <Building2 className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="socialCompanyName"
                  name="companyName"
                  type="text"
                  placeholder={getText({ ar: "أدخل اسم شركتك", en: "Enter your company name", ru: "Введите название компании", uk: "Введіть назву компанії", ro: "Introduceți numele companiei", pl: "Wprowadź nazwę firmy", it: "Inserisci il nome dell'azienda", tr: "Şirket adınızı girin" })}
                  value={socialProfileData.companyName}
                  onChange={handleSocialProfileChange}
                  className="ps-10 h-11 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="socialPhone" className="text-texafab-slate dark:text-gray-200">
                {getText(pageText.phone)}
              </Label>
              <div className="relative">
                <Phone className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="socialPhone"
                  name="phone"
                  type="tel"
                  placeholder="+353 XX XXX XXXX"
                  value={socialProfileData.phone}
                  onChange={handleSocialProfileChange}
                  className="ps-10 h-11 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald"
                  required
                />
              </div>
            </div>

            {/* Currency */}
            <div className="space-y-2">
              <Label htmlFor="socialCurrency" className="text-texafab-slate dark:text-gray-200">
                {getText(pageText.currency)}
              </Label>
              <div className="relative">
                <Select
                  value={socialProfileData.currency}
                  onValueChange={(value) => setSocialProfileData({ ...socialProfileData, currency: value })}
                >
                  <SelectTrigger className="h-11 ps-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-texafab-emerald">
                    <Coins className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <SelectValue placeholder={getText({ ar: "اختر العملة", en: "Select currency", ru: "Выберите валюту", uk: "Виберіть валюту", ro: "Selectați moneda", pl: "Wybierz walutę", it: "Seleziona valuta", tr: "Para birimi seçin" })} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EUR">🇪🇺 EUR - Euro</SelectItem>
                    <SelectItem value="USD">🇺🇸 USD - US Dollar</SelectItem>
                    <SelectItem value="GBP">🇬🇧 GBP - British Pound</SelectItem>
                    <SelectItem value="AED">🇦🇪 AED - UAE Dirham</SelectItem>
                    <SelectItem value="SAR">🇸🇦 SAR - Saudi Riyal</SelectItem>
                    <SelectItem value="TRY">🇹🇷 TRY - Turkish Lira</SelectItem>
                    <SelectItem value="PLN">🇵🇱 PLN - Polish Złoty</SelectItem>
                    <SelectItem value="RON">🇷🇴 RON - Romanian Leu</SelectItem>
                    <SelectItem value="UAH">🇺🇦 UAH - Ukrainian Hryvnia</SelectItem>
                    <SelectItem value="RUB">🇷🇺 RUB - Russian Ruble</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Button
            onClick={handleCompleteRegistration}
            disabled={isLoading || !socialProfileData.fullName || !socialProfileData.companyName || !socialProfileData.phone}
            className="w-full h-12 bg-texafab-emerald hover:bg-texafab-emerald/90 text-white font-semibold rounded-xl disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                {getText(pageText.completeRegistration)}
                <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180 me-2" : "ms-2"}`} />
              </>
            )}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
