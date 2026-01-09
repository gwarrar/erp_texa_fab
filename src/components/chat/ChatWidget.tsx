/**
 * Unified Chat Widget Component
 * Renders WhatsApp button or other chat widgets based on settings
 */
import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Send, Clock, ChevronRight } from 'lucide-react';
import { useChat } from './ChatProvider';
import { useLanguage } from '@/components/landing/LanguageContext';
import { cn } from '@/lib/utils';

export function ChatWidget() {
  const { settings, isLoading, isOpen, setIsOpen } = useChat();
  const { language, dir } = useLanguage();
  const [showGreeting, setShowGreeting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show greeting after delay
  useEffect(() => {
    if (!settings || !settings.is_enabled) return;
    
    const timer = setTimeout(() => {
      const greeting = language === 'ar' ? settings.greeting_message_ar : settings.greeting_message;
      if (greeting) {
        setShowGreeting(true);
      }
    }, (settings.delay_seconds || 3) * 1000 + 1000);

    return () => clearTimeout(timer);
  }, [settings, language]);

  if (isLoading || !settings || !settings.is_enabled) return null;
  if (isMobile && !settings.show_on_mobile) return null;

  // Check office hours if enabled
  if (settings.office_hours_enabled) {
    const now = new Date();
    const [startHour, startMin] = settings.office_hours_start.split(':').map(Number);
    const [endHour, endMin] = settings.office_hours_end.split(':').map(Number);
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const currentTime = currentHour * 60 + currentMin;
    const startTime = startHour * 60 + startMin;
    const endTime = endHour * 60 + endMin;
    
    const isOffline = currentTime < startTime || currentTime > endTime;
    if (isOffline && settings.chat_type !== 'whatsapp') {
      // For non-WhatsApp chats, show offline message
    }
  }

  // For Tawk.to, Crisp, Intercom - they have their own widgets
  // WhatsApp floating widget is disabled - WhatsApp contact is available on Contact page
  if (['tawkto', 'crisp', 'intercom', 'whatsapp'].includes(settings.chat_type)) {
    return null; // These providers render their own widgets or WhatsApp is on contact page
  }

  return null;
}

interface WhatsAppWidgetProps {
  settings: any;
  language: string;
  dir: string;
  showGreeting: boolean;
  setShowGreeting: (show: boolean) => void;
}

function WhatsAppWidget({ settings, language, dir, showGreeting, setShowGreeting }: WhatsAppWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');

  const positionClasses = settings.position === 'bottom-left' 
    ? 'left-4' 
    : 'right-4';

  const defaultMessage = language === 'ar' 
    ? settings.whatsapp_default_message_ar 
    : settings.whatsapp_default_message;

  const greeting = language === 'ar' 
    ? settings.greeting_message_ar 
    : settings.greeting_message;

  const handleSendMessage = () => {
    const text = message || defaultMessage || '';
    const encodedMessage = encodeURIComponent(text);
    const phoneNumber = settings.whatsapp_number?.replace(/\D/g, '');
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsExpanded(false);
    setMessage('');
  };

  const handleQuickAction = () => {
    const phoneNumber = settings.whatsapp_number?.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(defaultMessage || 'Hello!');
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div 
      className={cn('fixed bottom-4 z-50', positionClasses)}
      dir={dir}
    >
      {/* Greeting Bubble */}
      {showGreeting && !isExpanded && greeting && (
        <div 
          className={cn(
            'absolute bottom-16 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 max-w-xs',
            'animate-in fade-in slide-in-from-bottom-2 duration-300',
            settings.position === 'bottom-left' ? 'left-0' : 'right-0'
          )}
        >
          <button 
            onClick={() => setShowGreeting(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-start gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: settings.button_color }}
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-700 dark:text-slate-300">{greeting}</p>
              <button 
                onClick={() => setIsExpanded(true)}
                className="mt-2 text-sm font-medium flex items-center gap-1"
                style={{ color: settings.button_color }}
              >
                {language === 'ar' ? 'تحدث معنا' : 'Chat with us'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Expanded Chat Box */}
      {isExpanded && (
        <div 
          className={cn(
            'absolute bottom-16 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden',
            'animate-in fade-in zoom-in-95 duration-200',
            'w-80',
            settings.position === 'bottom-left' ? 'left-0' : 'right-0'
          )}
        >
          {/* Header */}
          <div 
            className="p-4 flex items-center justify-between"
            style={{ backgroundColor: settings.button_color }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">WhatsApp</h3>
                <p className="text-white/80 text-xs">
                  {language === 'ar' ? 'عادة نرد في أقل من دقيقة' : 'Usually replies instantly'}
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-white/80 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="p-4 bg-slate-50 dark:bg-slate-900 min-h-[120px]">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm max-w-[85%]">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {greeting || (language === 'ar' ? 'مرحباً! كيف يمكننا مساعدتك؟' : 'Hello! How can we help you?')}
              </p>
              <span className="text-xs text-slate-400 mt-1 block">
                {new Date().toLocaleTimeString(language === 'ar' ? 'ar-SA' : 'en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 border-t dark:border-slate-700">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={language === 'ar' ? 'اكتب رسالتك...' : 'Type your message...'}
                className="flex-1 px-3 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 dark:bg-slate-800 dark:border-slate-700"
                style={{ focusRingColor: settings.button_color }}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-105"
                style={{ backgroundColor: settings.button_color }}
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => isExpanded ? setIsExpanded(false) : handleQuickAction()}
        onContextMenu={(e) => {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }}
        className={cn(
          'w-14 h-14 rounded-full shadow-lg flex items-center justify-center',
          'transition-all duration-300 hover:scale-110',
          isExpanded && 'rotate-0'
        )}
        style={{ backgroundColor: settings.button_color }}
        title={language === 'ar' ? 'انقر للواتساب، انقر يمين للتوسيع' : 'Click for WhatsApp, right-click to expand'}
      >
        {isExpanded ? (
          <X className="w-6 h-6" style={{ color: settings.button_text_color }} />
        ) : (
          <svg viewBox="0 0 24 24" className="w-7 h-7" style={{ fill: settings.button_text_color }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        )}
      </button>
    </div>
  );
}

export default ChatWidget;
