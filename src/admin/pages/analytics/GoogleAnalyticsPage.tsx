import React, { useState, useEffect } from "react";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  Clock,
  Globe,
  Monitor,
  Smartphone,
  Tablet,
  ArrowUpRight,
  RefreshCw,
  Calendar,
  ExternalLink,
  Settings,
  AlertCircle,
  CheckCircle,
  Copy,
  Save,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnalyticsSettings {
  measurementId: string;
  enabled: boolean;
  trackPageViews: boolean;
  trackEvents: boolean;
  anonymizeIp: boolean;
}

const defaultSettings: AnalyticsSettings = {
  measurementId: "",
  enabled: false,
  trackPageViews: true,
  trackEvents: true,
  anonymizeIp: true,
};

// Mock data for demonstration
const mockAnalyticsData = {
  overview: {
    visitors: { value: 12847, change: 12.5 },
    pageViews: { value: 45892, change: 8.3 },
    avgSessionDuration: { value: "3m 42s", change: -2.1 },
    bounceRate: { value: "42.3%", change: -5.7 },
  },
  topPages: [
    { path: "/", title: "Home", views: 15234, avgTime: "2m 15s" },
    { path: "/features", title: "Features", views: 8921, avgTime: "4m 32s" },
    { path: "/pricing", title: "Pricing", views: 6543, avgTime: "3m 18s" },
    { path: "/contact", title: "Contact", views: 4321, avgTime: "1m 45s" },
    { path: "/agents-dealers", title: "Agents Program", views: 3210, avgTime: "5m 12s" },
  ],
  trafficSources: [
    { source: "Organic Search", sessions: 5432, percentage: 42 },
    { source: "Direct", sessions: 3876, percentage: 30 },
    { source: "Social Media", sessions: 2154, percentage: 17 },
    { source: "Referral", sessions: 987, percentage: 8 },
    { source: "Email", sessions: 398, percentage: 3 },
  ],
  devices: [
    { type: "Desktop", sessions: 7234, percentage: 56, icon: Monitor },
    { type: "Mobile", sessions: 4521, percentage: 35, icon: Smartphone },
    { type: "Tablet", sessions: 1092, percentage: 9, icon: Tablet },
  ],
  countries: [
    { country: "United States", flag: "🇺🇸", sessions: 4521 },
    { country: "Ukraine", flag: "🇺🇦", sessions: 2876 },
    { country: "Germany", flag: "🇩🇪", sessions: 1543 },
    { country: "United Kingdom", flag: "🇬🇧", sessions: 1234 },
    { country: "Poland", flag: "🇵🇱", sessions: 987 },
    { country: "UAE", flag: "🇦🇪", sessions: 876 },
    { country: "Saudi Arabia", flag: "🇸🇦", sessions: 654 },
  ],
  weeklyData: [
    { day: "Mon", visitors: 1234, pageViews: 4521 },
    { day: "Tue", visitors: 1456, pageViews: 5234 },
    { day: "Wed", visitors: 1678, pageViews: 6012 },
    { day: "Thu", visitors: 1890, pageViews: 6543 },
    { day: "Fri", visitors: 2012, pageViews: 7234 },
    { day: "Sat", visitors: 1543, pageViews: 5876 },
    { day: "Sun", visitors: 1234, pageViews: 4521 },
  ],
};

export default function GoogleAnalyticsPage() {
  const [settings, setSettings] = useState<AnalyticsSettings>(defaultSettings);
  const [activeTab, setActiveTab] = useState<"overview" | "settings">("overview");
  const [dateRange, setDateRange] = useState("7d");
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Load settings from localStorage
    try {
      const savedData = localStorage.getItem("texacore_admin_data");
      if (savedData) {
        const parsed = JSON.parse(savedData);
        if (parsed.analyticsSettings) {
          setSettings({ ...defaultSettings, ...parsed.analyticsSettings });
        }
      }
    } catch (e) {
      console.error("Error loading analytics settings:", e);
    }
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    setSaved(false);

    try {
      const existingData = localStorage.getItem("texacore_admin_data");
      const parsed = existingData ? JSON.parse(existingData) : {};

      const updatedData = {
        ...parsed,
        analyticsSettings: settings,
      };

      localStorage.setItem("texacore_admin_data", JSON.stringify(updatedData));
      window.dispatchEvent(new Event("storage"));

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e) {
      console.error("Error saving analytics settings:", e);
    } finally {
      setIsSaving(false);
    }
  };

  const copyTrackingCode = () => {
    const code = `<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${settings.measurementId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${settings.measurementId}'${settings.anonymizeIp ? ", { 'anonymize_ip': true }" : ""});
</script>`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const StatCard = ({ title, value, change, icon: Icon }: { title: string; value: string | number; change: number; icon: React.ElementType }) => (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className={cn(
          "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full",
          change >= 0 ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
        )}>
          {change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {Math.abs(change)}%
        </div>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{title}</p>
      <p className="text-2xl font-bold text-slate-900 dark:text-white">{value.toLocaleString()}</p>
    </Card>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            Google Analytics
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Monitor website traffic and user behavior
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Tabs */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeTab === "overview"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeTab === "settings"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              Settings
            </button>
          </div>
        </div>
      </div>

      {activeTab === "overview" ? (
        <>
          {/* Connection Status */}
          {!settings.measurementId && (
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 flex items-center gap-4">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <div className="flex-1">
                <p className="font-medium text-amber-800 dark:text-amber-200">Google Analytics not configured</p>
                <p className="text-sm text-amber-600 dark:text-amber-400">Go to Settings tab to add your Measurement ID</p>
              </div>
              <Button variant="outline" onClick={() => setActiveTab("settings")} className="gap-2">
                <Settings className="w-4 h-4" />
                Configure
              </Button>
            </div>
          )}

          {/* Date Range Selector */}
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-slate-400" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="12m">Last 12 months</option>
            </select>
            <Button variant="ghost" size="sm" className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
          </div>

          {/* Overview Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Visitors"
              value={mockAnalyticsData.overview.visitors.value}
              change={mockAnalyticsData.overview.visitors.change}
              icon={Users}
            />
            <StatCard
              title="Page Views"
              value={mockAnalyticsData.overview.pageViews.value}
              change={mockAnalyticsData.overview.pageViews.change}
              icon={Eye}
            />
            <StatCard
              title="Avg. Session Duration"
              value={mockAnalyticsData.overview.avgSessionDuration.value}
              change={mockAnalyticsData.overview.avgSessionDuration.change}
              icon={Clock}
            />
            <StatCard
              title="Bounce Rate"
              value={mockAnalyticsData.overview.bounceRate.value}
              change={mockAnalyticsData.overview.bounceRate.change}
              icon={ArrowUpRight}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Traffic Chart */}
            <Card className="p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Weekly Traffic</h3>
              <div className="h-[200px] flex items-end justify-between gap-2">
                {mockAnalyticsData.weeklyData.map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex flex-col gap-1">
                      <div
                        className="w-full bg-blue-500 rounded-t"
                        style={{ height: `${(day.pageViews / 8000) * 150}px` }}
                      />
                      <div
                        className="w-full bg-emerald-500 rounded-b"
                        style={{ height: `${(day.visitors / 2500) * 50}px` }}
                      />
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{day.day}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-blue-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Page Views</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-emerald-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Visitors</span>
                </div>
              </div>
            </Card>

            {/* Top Pages */}
            <Card className="p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Top Pages</h3>
              <div className="space-y-3">
                {mockAnalyticsData.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{page.title}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{page.path}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900 dark:text-white">{page.views.toLocaleString()}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{page.avgTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Traffic Sources */}
            <Card className="p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Traffic Sources</h3>
              <div className="space-y-4">
                {mockAnalyticsData.trafficSources.map((source, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{source.source}</span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{source.percentage}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Devices & Countries */}
            <Card className="p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Devices</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {mockAnalyticsData.devices.map((device, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                    <device.icon className="w-6 h-6 mx-auto mb-2 text-slate-600 dark:text-slate-400" />
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{device.percentage}%</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{device.type}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Top Countries</h3>
              <div className="space-y-2">
                {mockAnalyticsData.countries.slice(0, 5).map((country, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{country.flag}</span>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{country.country}</span>
                    </div>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">{country.sessions.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </>
      ) : (
        /* Settings Tab */
        <div className="max-w-2xl space-y-6">
          {/* GA Connection */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Google Analytics Configuration</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Connect your Google Analytics 4 property</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Enable/Disable */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Enable Analytics</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Track visitor data on all websites</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.enabled}
                    onChange={(e) => setSettings({ ...settings, enabled: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                </label>
              </div>

              {/* Measurement ID */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Measurement ID (GA4)
                </label>
                <input
                  type="text"
                  value={settings.measurementId}
                  onChange={(e) => setSettings({ ...settings, measurementId: e.target.value })}
                  placeholder="G-XXXXXXXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 font-mono"
                />
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  Find this in your{" "}
                  <a
                    href="https://analytics.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-1"
                  >
                    Google Analytics account <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>
          </Card>

          {/* Tracking Options */}
          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Tracking Options</h3>
            <div className="space-y-4">
              {[
                {
                  key: "trackPageViews",
                  label: "Track Page Views",
                  desc: "Automatically track page views and navigation",
                },
                {
                  key: "trackEvents",
                  label: "Track Events",
                  desc: "Track button clicks, form submissions, and interactions",
                },
                {
                  key: "anonymizeIp",
                  label: "Anonymize IP Addresses",
                  desc: "Comply with GDPR by anonymizing visitor IPs",
                },
              ].map((option) => (
                <div key={option.key} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{option.label}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{option.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings[option.key as keyof AnalyticsSettings] as boolean}
                      onChange={(e) => setSettings({ ...settings, [option.key]: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                  </label>
                </div>
              ))}
            </div>
          </Card>

          {/* Tracking Code */}
          {settings.measurementId && (
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white">Tracking Code</h3>
                <Button variant="outline" size="sm" onClick={copyTrackingCode} className="gap-2">
                  {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy Code"}
                </Button>
              </div>
              <pre className="p-4 rounded-xl bg-slate-900 text-slate-100 text-xs overflow-x-auto">
{`<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${settings.measurementId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${settings.measurementId}'${settings.anonymizeIp ? ", { 'anonymize_ip': true }" : ""});
</script>`}
              </pre>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Add this code to your index.html before the closing &lt;/head&gt; tag
              </p>
            </Card>
          )}

          {/* Save Button */}
          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              disabled={isSaving}
              className={cn("gap-2", saved && "bg-green-500 hover:bg-green-600")}
            >
              {isSaving ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : saved ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              {saved ? "Saved!" : "Save Settings"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
