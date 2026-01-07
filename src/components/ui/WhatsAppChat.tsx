import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppChatProps {
  phoneNumber?: string;
  defaultMessage?: string;
  position?: "left" | "right";
  showOnMobile?: boolean;
  welcomeMessage?: string;
  agentName?: string;
  agentAvatar?: string;
  accentColor?: string;
}

export function WhatsAppChat({
  phoneNumber = "380674848029",
  defaultMessage = "",
  position = "right",
  showOnMobile = true,
  welcomeMessage = "Hi! How can we help you today?",
  agentName = "Support Team",
  agentAvatar,
  accentColor = "#25D366",
}: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);
  const [isVisible, setIsVisible] = useState(true);
  const [settings, setSettings] = useState<{
    enabled: boolean;
    chatType: "whatsapp" | "tawk" | "both" | "none";
    phoneNumber: string;
    welcomeMessage: string;
    agentName: string;
    position: "left" | "right";
    showOnMobile: boolean;
  } | null>(null);

  // Load settings from localStorage
  useEffect(() => {
    const loadSettings = () => {
      try {
        const savedData = localStorage.getItem("texacore_admin_data");
        if (savedData) {
          const parsed = JSON.parse(savedData);
          if (parsed.chatSettings) {
            setSettings(parsed.chatSettings);
          }
        }
      } catch (e) {
        console.error("Error loading chat settings:", e);
      }
    };

    loadSettings();
    window.addEventListener("storage", loadSettings);
    return () => window.removeEventListener("storage", loadSettings);
  }, []);

  // Check if WhatsApp should be shown
  const shouldShow = settings 
    ? settings.enabled && (settings.chatType === "whatsapp" || settings.chatType === "both")
    : true;

  const actualPhoneNumber = settings?.phoneNumber || phoneNumber;
  const actualWelcomeMessage = settings?.welcomeMessage || welcomeMessage;
  const actualAgentName = settings?.agentName || agentName;
  const actualPosition = settings?.position || position;
  const actualShowOnMobile = settings?.showOnMobile ?? showOnMobile;

  // Handle scroll to hide/show button
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSendMessage = () => {
    const cleanPhone = actualPhoneNumber.replace(/[^0-9]/g, "");
    const encodedMessage = encodeURIComponent(message || actualWelcomeMessage);
    window.open(`https://wa.me/${cleanPhone}?text=${encodedMessage}`, "_blank");
    setIsOpen(false);
  };

  if (!shouldShow) return null;

  return (
    <>
      {/* Chat Widget */}
      <div
        className={cn(
          "fixed z-50 transition-all duration-300",
          actualPosition === "right" ? "right-4 md:right-6" : "left-4 md:left-6",
          "bottom-4 md:bottom-6",
          !actualShowOnMobile && "hidden md:block",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        )}
      >
        {/* Chat Popup */}
        {isOpen && (
          <div
            className={cn(
              "absolute bottom-20 w-80 md:w-96 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300",
              actualPosition === "right" ? "right-0" : "left-0"
            )}
          >
            {/* Header */}
            <div
              className="p-4 text-white"
              style={{ backgroundColor: accentColor }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {agentAvatar ? (
                    <img
                      src={agentAvatar}
                      alt={actualAgentName}
                      className="w-10 h-10 rounded-full border-2 border-white/20"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{actualAgentName}</p>
                    <p className="text-xs text-white/80 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Online
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 min-h-[120px]">
              {/* Welcome Message Bubble */}
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-[80%]">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {actualWelcomeMessage}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Just now</p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 text-slate-900 dark:text-white placeholder:text-slate-400"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95"
                  style={{ backgroundColor: accentColor }}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-center text-slate-400 mt-2">
                Powered by WhatsApp
              </p>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95",
            isOpen ? "rotate-90" : "rotate-0"
          )}
          style={{ backgroundColor: accentColor }}
        >
          {isOpen ? (
            <X className="w-6 h-6 md:w-7 md:h-7 text-white" />
          ) : (
            <svg
              className="w-7 h-7 md:w-8 md:h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          )}
        </button>

        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        )}
      </div>
    </>
  );
}

export default WhatsAppChat;
