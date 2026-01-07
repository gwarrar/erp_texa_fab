import { useState } from 'react';
import {
  Save,
  RefreshCw,
  Globe,
  Check,
  X,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAdmin } from '../../context/AdminContext';
import { Badge } from '@/components/ui/badge';

export function LanguageSettingsPage() {
  const { languageSettings, setLanguageSettings, saveChanges, isSaving } = useAdmin();
  const [hasChanges, setHasChanges] = useState(false);

  if (!languageSettings) return null;

  const handleLanguageToggle = (code: string, isActive: boolean) => {
    setLanguageSettings({
      ...languageSettings,
      availableLanguages: languageSettings.availableLanguages.map((lang) =>
        lang.code === code ? { ...lang, isActive } : lang
      ),
    });
    setHasChanges(true);
  };

  const handleDefaultLanguageChange = (code: string) => {
    setLanguageSettings({
      ...languageSettings,
      defaultLanguage: code,
    });
    setHasChanges(true);
  };

  const handleNumeralsToggle = (useEnglish: boolean) => {
    setLanguageSettings({
      ...languageSettings,
      useEnglishNumerals: useEnglish,
    });
    setHasChanges(true);
  };

  const handleSave = async () => {
    await saveChanges();
    setHasChanges(false);
  };

  const activeLanguages = languageSettings.availableLanguages.filter((l) => l.isActive);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Language Settings</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage available languages and localization options
          </p>
        </div>
        <div className="flex items-center gap-3">
          {hasChanges && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
              Unsaved Changes
            </Badge>
          )}
          <Button
            onClick={handleSave}
            disabled={isSaving || !hasChanges}
            className="bg-teal-600 hover:bg-teal-700"
          >
            {isSaving ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            Save Changes
          </Button>
        </div>
      </div>

      {/* Active Languages Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-teal-500" />
            Active Languages
          </CardTitle>
          <CardDescription>
            {activeLanguages.length} of {languageSettings.availableLanguages.length} languages enabled
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {activeLanguages.map((lang) => (
              <div
                key={lang.code}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800"
              >
                <span className="text-lg">{getFlagEmoji(lang.code)}</span>
                <span className="font-medium text-teal-700 dark:text-teal-300">{lang.nativeName}</span>
                {lang.code === languageSettings.defaultLanguage && (
                  <Badge className="bg-teal-500 text-white text-[10px]">Default</Badge>
                )}
                {lang.isRTL && (
                  <ArrowLeft className="h-3 w-3 text-teal-500" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Language List */}
      <Card>
        <CardHeader>
          <CardTitle>Available Languages</CardTitle>
          <CardDescription>Toggle languages on or off for the website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {languageSettings.availableLanguages.map((lang) => (
              <div
                key={lang.code}
                className={`flex items-center justify-between p-4 rounded-xl border ${
                  lang.isActive
                    ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                    : 'bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-800 opacity-60'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{getFlagEmoji(lang.code)}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{lang.name}</h3>
                      <span className="text-gray-500">({lang.nativeName})</span>
                      {lang.isRTL && (
                        <Badge variant="outline" className="text-[10px]">
                          <ArrowLeft className="h-2 w-2 mr-1" />
                          RTL
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">Code: {lang.code.toUpperCase()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {lang.code === languageSettings.defaultLanguage ? (
                    <Badge className="bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
                      <Check className="h-3 w-3 mr-1" />
                      Default Language
                    </Badge>
                  ) : (
                    lang.isActive && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDefaultLanguageChange(lang.code)}
                      >
                        Set as Default
                      </Button>
                    )
                  )}
                  <Switch
                    checked={lang.isActive}
                    onCheckedChange={(v) => handleLanguageToggle(lang.code, v)}
                    disabled={lang.code === languageSettings.defaultLanguage}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Numeral Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Numeral Display</CardTitle>
          <CardDescription>Choose how numbers are displayed across all languages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Use English Numerals</h3>
                <p className="text-sm text-gray-500">
                  Display numbers as 0-9 instead of native numerals (e.g., ٠-٩ for Arabic)
                </p>
              </div>
              <Switch
                checked={languageSettings.useEnglishNumerals}
                onCheckedChange={handleNumeralsToggle}
              />
            </div>

            {/* Preview */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-medium text-gray-500 mb-2">English Numerals</h4>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">1,234,567</p>
                <p className="text-sm text-gray-500 mt-1">+500 Companies</p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700" dir="rtl">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Arabic Numerals</h4>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {languageSettings.useEnglishNumerals ? '1,234,567' : '١٬٢٣٤٬٥٦٧'}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {languageSettings.useEnglishNumerals ? '+500 شركة' : '+٥٠٠ شركة'}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Default Language Selector */}
      <Card>
        <CardHeader>
          <CardTitle>Default Language</CardTitle>
          <CardDescription>The language shown when a user first visits the website</CardDescription>
        </CardHeader>
        <CardContent>
          <Select
            value={languageSettings.defaultLanguage}
            onValueChange={handleDefaultLanguageChange}
          >
            <SelectTrigger className="w-full md:w-[300px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languageSettings.availableLanguages
                .filter((l) => l.isActive)
                .map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <div className="flex items-center gap-2">
                      <span>{getFlagEmoji(lang.code)}</span>
                      <span>{lang.name}</span>
                      <span className="text-gray-500">({lang.nativeName})</span>
                    </div>
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  );
}

function getFlagEmoji(code: string): string {
  const flags: Record<string, string> = {
    ar: '🇸🇦',
    en: '🇬🇧',
    ru: '🇷🇺',
    uk: '🇺🇦',
    pl: '🇵🇱',
    ro: '🇷🇴',
    tr: '🇹🇷',
    it: '🇮🇹',
  };
  return flags[code] || '🌐';
}
