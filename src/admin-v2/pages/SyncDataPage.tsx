/**
 * Data Sync Page
 * Sync data from JSON files to Supabase
 */
import { useState } from 'react';
import { 
  RefreshCw, Database, CheckCircle, XCircle, 
  AlertTriangle, Play, Loader2, FileJson, ArrowRight
} from 'lucide-react';
import { useAdmin } from '@/admin-v2/context/AdminStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { seedAllData, seedSiteData } from '@/lib/seedData';

interface SyncResult {
  success: boolean;
  site: string;
  type: string;
  message: string;
  count?: number;
}

const sites = [
  { id: 'texafab', name: 'TexaFab', icon: '🧵', color: 'bg-emerald-500' },
  { id: 'fincore', name: 'FinCore', icon: '🏦', color: 'bg-blue-500' },
  { id: 'dubai-stroy', name: 'Dubai Stroy', icon: '🏗️', color: 'bg-amber-500' },
  { id: 'nextrev', name: 'NextRev', icon: '🚀', color: 'bg-purple-500' },
];

const contentTypes = [
  { id: 'hero', label: 'Hero Section', icon: '🎯' },
  { id: 'features', label: 'Features', icon: '⭐' },
  { id: 'pricing', label: 'Pricing Plans', icon: '💰' },
  { id: 'testimonials', label: 'Testimonials', icon: '💬' },
  { id: 'solutions', label: 'Solutions', icon: '🔧' },
];

export function SyncDataPage() {
  const { language } = useAdmin();
  const isRTL = language === 'ar';
  
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncingAll, setSyncingAll] = useState(false);
  const [currentSite, setCurrentSite] = useState<string | null>(null);
  const [results, setResults] = useState<SyncResult[]>([]);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  const handleSyncAll = async () => {
    setIsSyncing(true);
    setSyncingAll(true);
    setResults([]);
    setError('');
    setProgress(0);

    try {
      const allResults = await seedAllData();
      setResults(allResults);
      setProgress(100);
    } catch (err: any) {
      setError(err.message || 'Sync failed');
    } finally {
      setIsSyncing(false);
      setSyncingAll(false);
    }
  };

  const handleSyncSite = async (siteId: string) => {
    setIsSyncing(true);
    setCurrentSite(siteId);
    setResults([]);
    setError('');

    try {
      const siteResults = await seedSiteData(siteId as any);
      setResults(siteResults);
    } catch (err: any) {
      setError(err.message || 'Sync failed');
    } finally {
      setIsSyncing(false);
      setCurrentSite(null);
    }
  };

  const successCount = results.filter(r => r.success).length;
  const failCount = results.filter(r => !r.success).length;

  return (
    <div className="p-6 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Database className="w-6 h-6" />
          {isRTL ? 'مزامنة البيانات' : 'Data Sync'}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          {isRTL 
            ? 'مزامنة البيانات من ملفات JSON إلى قاعدة بيانات Supabase' 
            : 'Sync data from JSON files to Supabase database'}
        </p>
      </div>

      {/* Warning */}
      <Alert className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-200">
        <AlertTriangle className="w-4 h-4 text-amber-600" />
        <AlertDescription className="text-amber-700 dark:text-amber-400">
          {isRTL 
            ? 'تحذير: ستستبدل هذه العملية البيانات الموجودة في Supabase بالبيانات من ملفات JSON.'
            : 'Warning: This will replace existing data in Supabase with data from JSON files.'}
        </AlertDescription>
      </Alert>

      {/* Sync All Button */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="w-5 h-5" />
            {isRTL ? 'مزامنة جميع المواقع' : 'Sync All Sites'}
          </CardTitle>
          <CardDescription>
            {isRTL 
              ? 'مزامنة جميع البيانات من جميع المواقع دفعة واحدة'
              : 'Sync all data from all sites at once'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={handleSyncAll} 
            disabled={isSyncing}
            className="w-full md:w-auto"
            size="lg"
          >
            {syncingAll ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {isRTL ? 'جاري المزامنة...' : 'Syncing...'}
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                {isRTL ? 'بدء المزامنة الكاملة' : 'Start Full Sync'}
              </>
            )}
          </Button>

          {syncingAll && (
            <div className="mt-4">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-slate-500 mt-2">{progress}%</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Individual Sites */}
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <FileJson className="w-5 h-5" />
        {isRTL ? 'مزامنة موقع محدد' : 'Sync Individual Site'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {sites.map((site) => (
          <Card key={site.id} className="overflow-hidden">
            <div className={`h-1 ${site.color}`} />
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{site.icon}</span>
                  <div>
                    <h3 className="font-medium">{site.name}</h3>
                    <p className="text-sm text-slate-500">{site.id}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => handleSyncSite(site.id)}
                  disabled={isSyncing}
                >
                  {currentSite === site.id ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4 mr-1" />
                      {isRTL ? 'مزامنة' : 'Sync'}
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Error Display */}
      {error && (
        <Alert variant="destructive" className="mb-6">
          <XCircle className="w-4 h-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Results */}
      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{isRTL ? 'نتائج المزامنة' : 'Sync Results'}</span>
              <div className="flex gap-2">
                <Badge variant="default" className="bg-green-500">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {successCount} {isRTL ? 'نجح' : 'Success'}
                </Badge>
                {failCount > 0 && (
                  <Badge variant="destructive">
                    <XCircle className="w-3 h-3 mr-1" />
                    {failCount} {isRTL ? 'فشل' : 'Failed'}
                  </Badge>
                )}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {results.map((result, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    result.success 
                      ? 'bg-green-50 dark:bg-green-900/20' 
                      : 'bg-red-50 dark:bg-red-900/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {result.success ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <div>
                      <span className="font-medium">{result.site}</span>
                      <span className="text-slate-400 mx-2">/</span>
                      <span className="text-slate-600 dark:text-slate-300">{result.type}</span>
                    </div>
                  </div>
                  <div className="text-sm text-slate-500">
                    {result.count !== undefined && (
                      <Badge variant="outline" className="mr-2">
                        {result.count} items
                      </Badge>
                    )}
                    {!result.success && (
                      <span className="text-red-500">{result.message}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Content Types Legend */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-base">
            {isRTL ? 'أنواع المحتوى التي سيتم مزامنتها' : 'Content Types to be Synced'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {contentTypes.map((type) => (
              <Badge key={type.id} variant="outline" className="py-1.5 px-3">
                <span className="mr-1">{type.icon}</span>
                {type.label}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SyncDataPage;
