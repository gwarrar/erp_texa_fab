import { useState } from 'react';
import {
  Save,
  RefreshCw,
  BarChart3,
  Search,
  Facebook,
  Code,
  AlertCircle,
  CheckCircle,
  Copy,
  Eye,
  EyeOff,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAdmin } from '../../context/AdminContext';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function AnalyticsPage() {
  const { analyticsSettings, setAnalyticsSettings, saveChanges, isSaving } = useAdmin();
  const [hasChanges, setHasChanges] = useState(false);
  const [showIds, setShowIds] = useState({
    ga: false,
    fb: false,
    sc: false,
  });

  const currentSettings = analyticsSettings || {
    googleAnalyticsId: '',
    facebookPixelId: '',
    searchConsoleVerification: '',
    customScripts: [],
  };

  const handleChange = (field: string, value: string) => {
    setAnalyticsSettings({
      ...currentSettings,
      [field]: value,
    });
    setHasChanges(true);
  };

  const handleSave = async () => {
    await saveChanges();
    setHasChanges(false);
  };

  const validateGAId = (id: string) => {
    return /^G-[A-Z0-9]+$/.test(id) || /^UA-\d+-\d+$/.test(id);
  };

  const validateFBPixelId = (id: string) => {
    return /^\d{15,16}$/.test(id);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Integration</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Configure Google Analytics, Facebook Pixel, and tracking scripts
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

      {/* Info Alert */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          Changes to analytics settings will take effect immediately after saving. Make sure to test
          your tracking codes in a development environment first.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Google Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-orange-600" />
              </div>
              Google Analytics 4
            </CardTitle>
            <CardDescription>Track website visitors and behavior</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Measurement ID</Label>
              <div className="relative mt-1">
                <Input
                  type={showIds.ga ? 'text' : 'password'}
                  value={currentSettings.googleAnalyticsId || ''}
                  onChange={(e) => handleChange('googleAnalyticsId', e.target.value)}
                  placeholder="G-XXXXXXXXXX"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2"
                  onClick={() => setShowIds({ ...showIds, ga: !showIds.ga })}
                >
                  {showIds.ga ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {currentSettings.googleAnalyticsId && (
                <div className="mt-2 flex items-center gap-2">
                  {validateGAId(currentSettings.googleAnalyticsId) ? (
                    <Badge className="bg-green-100 text-green-700">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Valid Format
                    </Badge>
                  ) : (
                    <Badge className="bg-red-100 text-red-700">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      Invalid Format
                    </Badge>
                  )}
                </div>
              )}
            </div>
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
              <p className="font-medium mb-1">How to find your Measurement ID:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Go to Google Analytics</li>
                <li>Admin → Property → Data Streams</li>
                <li>Select your web stream</li>
                <li>Copy the Measurement ID (G-XXXXXXXXXX)</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Facebook Pixel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Facebook className="h-5 w-5 text-blue-600" />
              </div>
              Facebook Pixel
            </CardTitle>
            <CardDescription>Track conversions and build audiences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Pixel ID</Label>
              <div className="relative mt-1">
                <Input
                  type={showIds.fb ? 'text' : 'password'}
                  value={currentSettings.facebookPixelId || ''}
                  onChange={(e) => handleChange('facebookPixelId', e.target.value)}
                  placeholder="1234567890123456"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2"
                  onClick={() => setShowIds({ ...showIds, fb: !showIds.fb })}
                >
                  {showIds.fb ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {currentSettings.facebookPixelId && (
                <div className="mt-2 flex items-center gap-2">
                  {validateFBPixelId(currentSettings.facebookPixelId) ? (
                    <Badge className="bg-green-100 text-green-700">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Valid Format
                    </Badge>
                  ) : (
                    <Badge className="bg-red-100 text-red-700">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      Invalid Format
                    </Badge>
                  )}
                </div>
              )}
            </div>
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
              <p className="font-medium mb-1">How to find your Pixel ID:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Go to Meta Business Suite</li>
                <li>Events Manager → Data Sources</li>
                <li>Select your Pixel</li>
                <li>Copy the 15-16 digit ID</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Google Search Console */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Search className="h-5 w-5 text-green-600" />
              </div>
              Google Search Console
            </CardTitle>
            <CardDescription>Verify site ownership for search insights</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Verification Meta Tag</Label>
              <div className="relative mt-1">
                <Input
                  type={showIds.sc ? 'text' : 'password'}
                  value={currentSettings.searchConsoleVerification || ''}
                  onChange={(e) => handleChange('searchConsoleVerification', e.target.value)}
                  placeholder="google-site-verification=..."
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2"
                  onClick={() => setShowIds({ ...showIds, sc: !showIds.sc })}
                >
                  {showIds.sc ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Custom Scripts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Code className="h-5 w-5 text-purple-600" />
              </div>
              Custom Scripts
            </CardTitle>
            <CardDescription>Add custom tracking or third-party scripts</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label>Header Scripts</Label>
              <Textarea
                value={(currentSettings.customScripts || []).join('\n')}
                onChange={(e) =>
                  handleChange('customScripts', e.target.value.split('\n').filter(Boolean) as any)
                }
                placeholder="<!-- Add your custom scripts here -->"
                rows={6}
                className="mt-1 font-mono text-sm"
              />
              <p className="text-xs text-gray-500 mt-2">
                Scripts will be injected into the &lt;head&gt; tag. Use with caution.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Integration Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-orange-500" />
                <span className="font-medium">Google Analytics</span>
              </div>
              {currentSettings.googleAnalyticsId ? (
                <Badge className="bg-green-100 text-green-700">Connected</Badge>
              ) : (
                <Badge variant="secondary">Not configured</Badge>
              )}
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <Facebook className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Facebook Pixel</span>
              </div>
              {currentSettings.facebookPixelId ? (
                <Badge className="bg-green-100 text-green-700">Connected</Badge>
              ) : (
                <Badge variant="secondary">Not configured</Badge>
              )}
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-green-500" />
                <span className="font-medium">Search Console</span>
              </div>
              {currentSettings.searchConsoleVerification ? (
                <Badge className="bg-green-100 text-green-700">Verified</Badge>
              ) : (
                <Badge variant="secondary">Not verified</Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
