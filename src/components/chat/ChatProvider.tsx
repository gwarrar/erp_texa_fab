/**
 * Chat Provider Component
 * Loads and manages chat widgets (WhatsApp, Tawk.to, Crisp, Intercom)
 */
import { useState, useEffect, createContext, useContext } from 'react';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/components/landing/LanguageContext';

interface ChatSettings {
  id: string;
  site_id: string;
  chat_type: 'none' | 'whatsapp' | 'tawkto' | 'crisp' | 'intercom' | 'custom';
  is_enabled: boolean;
  position: 'bottom-left' | 'bottom-right';
  show_on_mobile: boolean;
  delay_seconds: number;
  tawkto_property_id?: string;
  tawkto_widget_id?: string;
  whatsapp_number?: string;
  whatsapp_default_message?: string;
  whatsapp_default_message_ar?: string;
  crisp_website_id?: string;
  intercom_app_id?: string;
  custom_script?: string;
  button_color: string;
  button_text_color: string;
  greeting_message?: string;
  greeting_message_ar?: string;
  office_hours_enabled: boolean;
  office_hours_start: string;
  office_hours_end: string;
  office_hours_timezone: string;
  offline_message?: string;
  offline_message_ar?: string;
}

interface ChatContextType {
  settings: ChatSettings | null;
  isLoading: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  openChat: () => void;
  closeChat: () => void;
}

const defaultSettings: ChatSettings = {
  id: '',
  site_id: '',
  chat_type: 'none',
  is_enabled: false,
  position: 'bottom-right',
  show_on_mobile: true,
  delay_seconds: 3,
  button_color: '#25D366',
  button_text_color: '#ffffff',
  office_hours_enabled: false,
  office_hours_start: '09:00',
  office_hours_end: '18:00',
  office_hours_timezone: 'UTC',
};

const ChatContext = createContext<ChatContextType>({
  settings: null,
  isLoading: true,
  isOpen: false,
  setIsOpen: () => {},
  openChat: () => {},
  closeChat: () => {},
});

export const useChat = () => useContext(ChatContext);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const { siteId, language } = useLanguage();
  const [settings, setSettings] = useState<ChatSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  // Load chat settings from Supabase
  useEffect(() => {
    const loadSettings = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('chat_settings')
          .select('*')
          .eq('site_id', siteId)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error loading chat settings:', error);
        }

        if (data) {
          setSettings(data as ChatSettings);
        } else {
          setSettings(defaultSettings);
        }
      } catch (err) {
        console.error('Chat settings error:', err);
        setSettings(defaultSettings);
      } finally {
        setIsLoading(false);
      }
    };

    loadSettings();
  }, [siteId]);

  // Load chat scripts based on type
  useEffect(() => {
    if (!settings || !settings.is_enabled || scriptsLoaded) return;

    const timer = setTimeout(() => {
      try {
        switch (settings.chat_type) {
          case 'tawkto':
            if (settings.tawkto_property_id && settings.tawkto_widget_id) {
              loadTawkTo(settings);
            }
            break;
          case 'crisp':
            if (settings.crisp_website_id) {
              loadCrisp(settings);
            }
            break;
          case 'intercom':
            if (settings.intercom_app_id) {
              loadIntercom(settings);
            }
            break;
          case 'custom':
            if (settings.custom_script) {
              loadCustomScript(settings);
            }
            break;
          // WhatsApp doesn't need script loading
        }
      } catch (error) {
        console.warn('Error loading chat script:', error);
      }
      setScriptsLoaded(true);
    }, settings.delay_seconds * 1000);

    return () => clearTimeout(timer);
  }, [settings, scriptsLoaded]);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);

  return (
    <ChatContext.Provider value={{ settings, isLoading, isOpen, setIsOpen, openChat, closeChat }}>
      {children}
    </ChatContext.Provider>
  );
}

// Load Tawk.to Script
function loadTawkTo(settings: ChatSettings) {
  if (!settings.tawkto_property_id || !settings.tawkto_widget_id) return;
  if (typeof window === 'undefined') return;
  
  // Check if Tawk is already loaded
  if ((window as any).Tawk_API && (window as any).Tawk_API.onLoaded) return;

  // Initialize Tawk.to API before script loads
  (window as any).Tawk_API = (window as any).Tawk_API || {};
  (window as any).Tawk_LoadStart = new Date();

  // Create and load script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://embed.tawk.to/${settings.tawkto_property_id}/${settings.tawkto_widget_id}`;
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');
  
  // Handle script errors
  script.onerror = () => {
    console.warn('Failed to load Tawk.to script');
  };
  
  document.head.appendChild(script);
}

// Load Crisp Script
function loadCrisp(settings: ChatSettings) {
  if (!settings.crisp_website_id) return;
  if (typeof window === 'undefined' || (window as any).$crisp) return;

  (window as any).$crisp = [];
  (window as any).CRISP_WEBSITE_ID = settings.crisp_website_id;

  const script = document.createElement('script');
  script.src = 'https://client.crisp.chat/l.js';
  script.async = true;
  document.head.appendChild(script);
}

// Load Intercom Script
function loadIntercom(settings: ChatSettings) {
  if (!settings.intercom_app_id) return;
  if (typeof window === 'undefined' || (window as any).Intercom) return;

  (window as any).intercomSettings = {
    app_id: settings.intercom_app_id,
  };

  const script = document.createElement('script');
  script.innerHTML = `
    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${settings.intercom_app_id}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
  `;
  document.head.appendChild(script);
}

// Load Custom Script
function loadCustomScript(settings: ChatSettings) {
  if (!settings.custom_script) return;

  try {
    const script = document.createElement('script');
    script.innerHTML = settings.custom_script;
    document.body.appendChild(script);
  } catch (error) {
    console.error('Error loading custom chat script:', error);
  }
}

export default ChatProvider;
