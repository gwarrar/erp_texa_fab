import React, { useState, useEffect } from "react";
import { 
  MessageCircle, 
  Save, 
  RefreshCw,
  Phone,
  User,
  MapPin,
  Smartphone,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Settings,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ChatSettings {
  enabled: boolean;
  chatType: "whatsapp" | "tawk" | "both" | "none";
  phoneNumber: string;
  welcomeMessage: string;
  agentName: string;
  position: "left" | "right";
  showOnMobile: boolean;
  accentColor: string;
}

const defaultSettings: ChatSettings = {
  enabled: true,
  chatType: "whatsapp",
  phoneNumber: "380674848029",
  welcomeMessage: "Hi! How can we help you today?",
  agentName: "Support Team",
  position: "right",
  showOnMobile: true,
  accentColor: "#25D366",
};

export default function ChatSettingsPage() {
  const [settings, setSettings] = useState<ChatSettings>(defaultSettings);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    // Load settings from localStorage
    try {
      const savedData = localStorage.getItem("texacore_admin_data");
      if (savedData) {
        const parsed = JSON.parse(savedData);
        if (parsed.chatSettings) {
          setSettings({ ...defaultSettings, ...parsed.chatSettings });
        }
      }
    } catch (e) {
      console.error("Error loading chat settings:", e);
    }
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    setSaved(false);

    try {
      // Get existing data
      const existingData = localStorage.getItem("texacore_admin_data");
      const parsed = existingData ? JSON.parse(existingData) : {};
      
      // Update with new settings
      const updatedData = {
        ...parsed,
        chatSettings: settings,
      };

      // Save to localStorage
      localStorage.setItem("texacore_admin_data", JSON.stringify(updatedData));
      
      // Trigger storage event for other components
      window.dispatchEvent(new Event("storage"));

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e) {
      console.error("Error saving chat settings:", e);
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    setSettings(defaultSettings);
  };

  const chatTypeOptions = [
    { value: "whatsapp", label: "WhatsApp Only", icon: "🟢" },
    { value: "tawk", label: "Tawk.to Only", icon: "💬" },
    { value: "both", label: "Both", icon: "📱" },
    { value: "none", label: "Disabled", icon: "🚫" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            Chat Settings
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Configure WhatsApp and Tawk.to chat widgets for all websites
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={handleReset}
            className="gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Reset
          </Button>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className={cn(
              "gap-2",
              saved && "bg-green-500 hover:bg-green-600"
            )}
          >
            {isSaving ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : saved ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {saved ? "Saved!" : "Save Changes"}
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Settings Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Enable/Disable */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Chat Widget Status</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Enable or disable chat across all sites</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.enabled}
                  onChange={(e) => setSettings({ ...settings, enabled: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </div>

            {/* Chat Type Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                Chat Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {chatTypeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSettings({ ...settings, chatType: option.value as ChatSettings["chatType"] })}
                    className={cn(
                      "p-4 rounded-xl border-2 transition-all text-center",
                      settings.chatType === option.value
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                    )}
                  >
                    <span className="text-2xl mb-2 block">{option.icon}</span>
                    <span className={cn(
                      "text-sm font-medium",
                      settings.chatType === option.value
                        ? "text-green-700 dark:text-green-400"
                        : "text-slate-600 dark:text-slate-400"
                    )}>
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* WhatsApp Settings */}
          {(settings.chatType === "whatsapp" || settings.chatType === "both") && (
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">WhatsApp Settings</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Configure your WhatsApp chat widget</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number (International format, no + or spaces)
                  </label>
                  <input
                    type="text"
                    value={settings.phoneNumber}
                    onChange={(e) => setSettings({ ...settings, phoneNumber: e.target.value.replace(/[^0-9]/g, "") })}
                    placeholder="380674848029"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                  />
                </div>

                {/* Agent Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Agent/Team Name
                  </label>
                  <input
                    type="text"
                    value={settings.agentName}
                    onChange={(e) => setSettings({ ...settings, agentName: e.target.value })}
                    placeholder="Support Team"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                  />
                </div>

                {/* Welcome Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Welcome Message
                  </label>
                  <textarea
                    value={settings.welcomeMessage}
                    onChange={(e) => setSettings({ ...settings, welcomeMessage: e.target.value })}
                    placeholder="Hi! How can we help you today?"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 resize-none"
                  />
                </div>

                {/* Accent Color */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <Palette className="w-4 h-4 inline mr-2" />
                    Accent Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={settings.accentColor}
                      onChange={(e) => setSettings({ ...settings, accentColor: e.target.value })}
                      className="w-12 h-12 rounded-xl cursor-pointer border-0 p-0"
                    />
                    <input
                      type="text"
                      value={settings.accentColor}
                      onChange={(e) => setSettings({ ...settings, accentColor: e.target.value })}
                      className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 font-mono"
                    />
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Display Options */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Display Options</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Configure widget position and visibility</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Position */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Widget Position
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "left", label: "Bottom Left" },
                    { value: "right", label: "Bottom Right" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSettings({ ...settings, position: option.value as "left" | "right" })}
                      className={cn(
                        "p-4 rounded-xl border-2 transition-all",
                        settings.position === option.value
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                          : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                      )}
                    >
                      <span className={cn(
                        "text-sm font-medium",
                        settings.position === option.value
                          ? "text-blue-700 dark:text-blue-400"
                          : "text-slate-600 dark:text-slate-400"
                      )}>
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Visibility */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Show on Mobile</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Display widget on mobile devices</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.showOnMobile}
                    onChange={(e) => setSettings({ ...settings, showOnMobile: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>
          </Card>
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-slate-900 dark:text-white">Preview</h3>
              <button
                onClick={() => setPreviewOpen(!previewOpen)}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                {previewOpen ? "Close Preview" : "Open Preview"}
              </button>
            </div>

            {/* Mini Preview */}
            <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-4 min-h-[300px] overflow-hidden">
              {/* Fake page content */}
              <div className="space-y-2 mb-8">
                <div className="h-3 w-3/4 bg-slate-300 dark:bg-slate-700 rounded" />
                <div className="h-3 w-1/2 bg-slate-300 dark:bg-slate-700 rounded" />
                <div className="h-3 w-5/6 bg-slate-300 dark:bg-slate-700 rounded" />
              </div>

              {/* Preview Chat Button */}
              <div
                className={cn(
                  "absolute bottom-4",
                  settings.position === "right" ? "right-4" : "left-4"
                )}
              >
                {previewOpen && (
                  <div className={cn(
                    "absolute bottom-14 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-3 border border-slate-200 dark:border-slate-700",
                    settings.position === "right" ? "right-0" : "left-0"
                  )}>
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100 dark:border-slate-700" style={{ backgroundColor: settings.accentColor, marginTop: -12, marginLeft: -12, marginRight: -12, padding: 8, borderRadius: "12px 12px 0 0" }}>
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <MessageCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs font-medium text-white">{settings.agentName}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">{settings.welcomeMessage}</p>
                  </div>
                )}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                  style={{ backgroundColor: settings.accentColor }}
                  onClick={() => setPreviewOpen(!previewOpen)}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Status Info */}
            <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center gap-2 mb-2">
                {settings.enabled ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                )}
                <span className={cn(
                  "text-sm font-medium",
                  settings.enabled ? "text-green-700 dark:text-green-400" : "text-amber-700 dark:text-amber-400"
                )}>
                  {settings.enabled ? "Chat is Active" : "Chat is Disabled"}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {settings.chatType === "whatsapp" && "WhatsApp widget will appear on all pages"}
                {settings.chatType === "tawk" && "Tawk.to widget will appear on all pages"}
                {settings.chatType === "both" && "Both widgets will appear on all pages"}
                {settings.chatType === "none" && "No chat widgets will be shown"}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
