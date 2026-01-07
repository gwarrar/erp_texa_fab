import React, { useState } from 'react';
import {
  Save,
  Plus,
  Trash2,
  RefreshCw,
  Building,
  Layers,
  Users,
  Globe,
  TrendingUp,
  Package,
  Zap,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAdmin } from '@/admin/context/AdminContext';
import { Badge } from '@/components/ui/badge';
import { StatCounter } from '@/admin/types';

const iconOptions = [
  { value: 'Building', label: 'Building/Company', icon: Building },
  { value: 'Layers', label: 'Layers/Rolls', icon: Layers },
  { value: 'Users', label: 'Users', icon: Users },
  { value: 'Globe', label: 'Globe/Countries', icon: Globe },
  { value: 'TrendingUp', label: 'Trending', icon: TrendingUp },
  { value: 'Package', label: 'Package', icon: Package },
  { value: 'Zap', label: 'Performance', icon: Zap },
];

export function StatsEditorPage() {
  const { stats, setStats, saveChanges, isSaving } = useAdmin();
  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = (id: string, field: keyof StatCounter, value: any) => {
    setStats(stats.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
    setHasChanges(true);
  };

  const handleLabelChange = (id: string, lang: string, value: string) => {
    setStats(
      stats.map((s) =>
        s.id === id ? { ...s, label: { ...s.label, [lang]: value } } : s
      )
    );
    setHasChanges(true);
  };

  const addStat = () => {
    const newStat: StatCounter = {
      id: Date.now().toString(),
      value: 100,
      suffix: '+',
      label: { ar: 'إحصائية جديدة', en: 'New Stat' },
      icon: 'TrendingUp',
      isAnimated: true,
      isDynamic: false,
    };
    setStats([...stats, newStat]);
    setHasChanges(true);
  };

  const deleteStat = (id: string) => {
    setStats(stats.filter((s) => s.id !== id));
    setHasChanges(true);
  };

  const handleSave = async () => {
    await saveChanges();
    setHasChanges(false);
  };

  const getIconComponent = (iconName: string) => {
    const found = iconOptions.find((i) => i.value === iconName);
    return found ? found.icon : TrendingUp;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Stats Counters Editor</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage the landing page statistics (e.g., +500 شركة، +10M رولون)
          </p>
        </div>
        <div className="flex items-center gap-3">
          {hasChanges && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
              Unsaved Changes
            </Badge>
          )}
          <Button variant="outline" onClick={addStat}>
            <Plus className="h-4 w-4 mr-2" />
            Add Stat
          </Button>
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

      {/* Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Live Preview</CardTitle>
          <CardDescription>How the stats appear on the landing page</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-8 py-8 bg-gradient-to-r from-teal-900/10 to-emerald-900/10 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-xl">
            {stats.map((stat) => {
              const IconComponent = getIconComponent(stat.icon);
              return (
                <div key={stat.id} className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <p className="text-4xl font-black text-gray-900 dark:text-white">
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label.en} | {stat.label.ar}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Stats Editor */}
      <div className="grid gap-4">
        {stats.map((stat) => {
          const IconComponent = getIconComponent(stat.icon);

          return (
            <Card key={stat.id}>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Value & Suffix */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Stat #{stats.indexOf(stat) + 1}
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-xs text-gray-500">Value</Label>
                        <Input
                          type="number"
                          value={stat.value}
                          onChange={(e) =>
                            handleChange(stat.id, 'value', parseInt(e.target.value) || 0)
                          }
                          className="text-lg font-bold"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-gray-500">Suffix</Label>
                        <Select
                          value={stat.suffix}
                          onValueChange={(v) => handleChange(stat.id, 'suffix', v)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="+">+ (Plus)</SelectItem>
                            <SelectItem value="K+">K+ (Thousands)</SelectItem>
                            <SelectItem value="M+">M+ (Millions)</SelectItem>
                            <SelectItem value="%">% (Percent)</SelectItem>
                            <SelectItem value="">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Icon Selection */}
                  <div>
                    <Label className="text-xs text-gray-500">Icon</Label>
                    <Select
                      value={stat.icon}
                      onValueChange={(v) => handleChange(stat.id, 'icon', v)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {iconOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            <div className="flex items-center gap-2">
                              <opt.icon className="h-4 w-4" />
                              {opt.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Labels */}
                  <div className="space-y-3">
                    <div>
                      <Label className="text-xs text-gray-500">Label (English)</Label>
                      <Input
                        value={stat.label.en || ''}
                        onChange={(e) => handleLabelChange(stat.id, 'en', e.target.value)}
                        placeholder="Companies"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-gray-500">Label (Arabic)</Label>
                      <Input
                        value={stat.label.ar || ''}
                        onChange={(e) => handleLabelChange(stat.id, 'ar', e.target.value)}
                        placeholder="شركة"
                        dir="rtl"
                      />
                    </div>
                  </div>

                  {/* Options & Actions */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Animated</span>
                      </div>
                      <Switch
                        checked={stat.isAnimated}
                        onCheckedChange={(v) => handleChange(stat.id, 'isAnimated', v)}
                      />
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">Dynamic (API)</span>
                      </div>
                      <Switch
                        checked={stat.isDynamic}
                        onCheckedChange={(v) => handleChange(stat.id, 'isDynamic', v)}
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteStat(stat.id)}
                      className="w-full text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Stat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State */}
      {stats.length === 0 && (
        <Card className="p-12 text-center">
          <TrendingUp className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No Stats Added
          </h3>
          <p className="text-gray-500 mb-4">
            Add statistics to showcase on your landing page
          </p>
          <Button onClick={addStat}>
            <Plus className="h-4 w-4 mr-2" />
            Add Stat
          </Button>
        </Card>
      )}
    </div>
  );
}
