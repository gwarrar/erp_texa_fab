/**
 * Callback Widget Component
 * Shows a popup after X seconds offering to call the user back
 * Integrates with n8n webhook for automation
 */
import { useState, useEffect } from 'react';
import { X, Phone, Loader2, CheckCircle, PhoneCall } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useLanguage, type SiteId } from '@/components/landing/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trackEvent } from '@/components/analytics/AnalyticsProvider';

interface WidgetSettings {
  is_enabled: boolean;
  delay_seconds: number;
  n8n_webhook_url?: string;
  message_en: string;
  message_ar: string;
  button_color: string;
  button_text_color: string;
  position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}

const defaultSettings: WidgetSettings = {
  is_enabled: true,
  delay_seconds: 30,
  message_en: "Need help? We'll call you back in 30 seconds!",
  message_ar: 'تحتاج مساعدة؟ سنتصل بك خلال 30 ثانية!',
  button_color: '#10b981',
  button_text_color: '#ffffff',
  position: 'bottom-left',
};

export function CallbackWidget() {
  // Widget is disabled - return null immediately
  return null;
  
  const { siteId, language, dir } = useLanguage();
  const [settings, setSettings] = useState<WidgetSettings>(defaultSettings);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Load widget settings
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const { data, error } = await supabase
          .from('widget_settings')
          .select('*')
          .eq('site_id', siteId)
          .eq('widget_type', 'callback')
          .single();

        if (data && !error) {
          setSettings(data as WidgetSettings);
        }
      } catch (err) {
        console.log('Using default widget settings');
      }
    };

    loadSettings();
  }, [siteId]);

  // Show widget after delay
  useEffect(() => {
    if (!settings.is_enabled) return;

    // Check if user already dismissed or submitted
    const dismissed = sessionStorage.getItem(`callback_dismissed_${siteId}`);
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, settings.delay_seconds * 1000);

    return () => clearTimeout(timer);
  }, [settings, siteId]);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem(`callback_dismissed_${siteId}`, 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber.trim()) {
      setError(language === 'ar' ? 'الرجاء إدخال رقم الهاتف' : 'Please enter your phone number');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Save to Supabase
      const { error: dbError } = await supabase
        .from('callback_requests')
        .insert({
          site_id: siteId,
          phone_number: phoneNumber,
          name: name || null,
          status: 'pending',
        });

      if (dbError) {
        console.error('Database error:', dbError);
      }

      // Send to n8n webhook if configured
      if (settings.n8n_webhook_url) {
        try {
          await fetch(settings.n8n_webhook_url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              site_id: siteId,
              phone_number: phoneNumber,
              name: name,
              language: language,
              timestamp: new Date().toISOString(),
              source: window.location.href,
            }),
          });
        } catch (webhookError) {
          console.error('Webhook error:', webhookError);
        }
      }

      setIsSuccess(true);
      sessionStorage.setItem(`callback_dismissed_${siteId}`, 'true');

      // Track callback request event
      trackEvent('callback_request', {
        phone_number: phoneNumber,
        site_id: siteId,
        event_category: 'lead',
      });

      // Close after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);

    } catch (err) {
      setError(language === 'ar' ? 'حدث خطأ، يرجى المحاولة مرة أخرى' : 'An error occurred, please try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible || !settings.is_enabled) return null;

  const message = language === 'ar' ? settings.message_ar : settings.message_en;
  
  const positionClasses = {
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
  };

  return (
    <div 
      className={`fixed ${positionClasses[settings.position]} z-50`}
      dir={dir}
    >
      {/* Minimized Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 animate-bounce"
          style={{ 
            backgroundColor: settings.button_color,
            color: settings.button_text_color,
          }}
        >
          <PhoneCall className="w-5 h-5" />
          <span className="font-medium text-sm">
            {language === 'ar' ? 'اتصل بي' : 'Call Me Back'}
          </span>
        </button>
      )}

      {/* Expanded Form */}
      {isOpen && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-5 w-80 animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: settings.button_color }}
              >
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                  {language === 'ar' ? 'اتصال سريع' : 'Quick Callback'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {language === 'ar' ? 'خلال 30 ثانية' : 'Within 30 seconds'}
                </p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Message */}
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
            {message}
          </p>

          {isSuccess ? (
            // Success State
            <div className="text-center py-4">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <p className="text-green-600 dark:text-green-400 font-medium">
                {language === 'ar' ? 'تم استلام طلبك! سنتصل بك قريباً' : 'Request received! We will call you shortly'}
              </p>
            </div>
          ) : (
            // Form
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="text"
                placeholder={language === 'ar' ? 'الاسم (اختياري)' : 'Name (optional)'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
              />
              <Input
                type="tel"
                placeholder={language === 'ar' ? 'رقم الهاتف *' : 'Phone Number *'}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="w-full"
                dir="ltr"
              />
              
              {error && (
                <p className="text-red-500 text-xs">{error}</p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                style={{ 
                  backgroundColor: settings.button_color,
                  color: settings.button_text_color,
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    {language === 'ar' ? 'جاري الإرسال...' : 'Submitting...'}
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4 mr-2" />
                    {language === 'ar' ? 'اتصل بي الآن' : 'Call Me Now'}
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-slate-400">
                {language === 'ar' 
                  ? 'بالضغط على الزر، أنت توافق على سياسة الخصوصية'
                  : 'By clicking, you agree to our Privacy Policy'}
              </p>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
