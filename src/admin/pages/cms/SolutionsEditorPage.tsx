import React, { useState } from 'react';
import {
  Save,
  Plus,
  Trash2,
  GripVertical,
  Eye,
  EyeOff,
  RefreshCw,
  Container,
  Scroll,
  CreditCard,
  Users,
  Package,
  BarChart3,
  Truck,
  Building,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAdmin } from '@/admin/context/AdminContext';
import { Badge } from '@/components/ui/badge';
import { SolutionItem } from '@/admin/types';

const iconOptions = [
  { value: 'Container', label: 'Container', icon: Container },
  { value: 'Scroll', label: 'Scroll/Roll', icon: Scroll },
  { value: 'CreditCard', label: 'Credit Card', icon: CreditCard },
  { value: 'Users', label: 'Users', icon: Users },
  { value: 'Package', label: 'Package', icon: Package },
  { value: 'BarChart3', label: 'Analytics', icon: BarChart3 },
  { value: 'Truck', label: 'Truck', icon: Truck },
  { value: 'Building', label: 'Building', icon: Building },
];

export function SolutionsEditorPage() {
  const { solutions, setSolutions, saveChanges, isSaving } = useAdmin();
  const [hasChanges, setHasChanges] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleChange = (id: string, field: keyof SolutionItem, value: any) => {
    setSolutions(
      solutions.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
    setHasChanges(true);
  };

  const handleLabelChange = (id: string, lang: string, value: string) => {
    setSolutions(
      solutions.map((s) =>
        s.id === id ? { ...s, label: { ...s.label, [lang]: value } } : s
      )
    );
    setHasChanges(true);
  };

  const handleDescriptionChange = (id: string, lang: string, value: string) => {
    setSolutions(
      solutions.map((s) =>
        s.id === id ? { ...s, description: { ...s.description, [lang]: value } } : s
      )
    );
    setHasChanges(true);
  };

  const addSolution = () => {
    const newSolution: SolutionItem = {
      id: Date.now().toString(),
      icon: 'Package',
      label: { ar: 'حل جديد', en: 'New Solution' },
      description: { ar: 'وصف الحل', en: 'Solution description' },
      href: '/new-solution',
      isActive: true,
      order: solutions.length + 1,
    };
    setSolutions([...solutions, newSolution]);
    setEditingId(newSolution.id);
    setHasChanges(true);
  };

  const deleteSolution = (id: string) => {
    setSolutions(solutions.filter((s) => s.id !== id));
    setHasChanges(true);
  };

  const handleSave = async () => {
    await saveChanges();
    setHasChanges(false);
  };

  const getIconComponent = (iconName: string) => {
    const found = iconOptions.find((i) => i.value === iconName);
    return found ? found.icon : Package;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Solutions Menu Editor</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage the "عرض جميع الحلول" dropdown menu items
          </p>
        </div>
        <div className="flex items-center gap-3">
          {hasChanges && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
              Unsaved Changes
            </Badge>
          )}
          <Button variant="outline" onClick={addSolution}>
            <Plus className="h-4 w-4 mr-2" />
            Add Solution
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

      {/* Solutions List */}
      <div className="grid gap-4">
        {solutions.map((solution, index) => {
          const IconComponent = getIconComponent(solution.icon);
          const isEditing = editingId === solution.id;

          return (
            <Card
              key={solution.id}
              className={`transition-all ${
                isEditing ? 'ring-2 ring-teal-500' : ''
              } ${!solution.isActive ? 'opacity-60' : ''}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  {/* Drag Handle & Order */}
                  <div className="flex flex-col items-center gap-2 pt-2">
                    <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
                    <span className="text-xs text-gray-400">#{index + 1}</span>
                  </div>

                  {/* Icon Preview */}
                  <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 min-w-0">
                    {isEditing ? (
                      <div className="space-y-4">
                        {/* Icon & Link Row */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-xs text-gray-500">Icon</Label>
                            <Select
                              value={solution.icon}
                              onValueChange={(v) => handleChange(solution.id, 'icon', v)}
                            >
                              <SelectTrigger>
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
                          <div>
                            <Label className="text-xs text-gray-500">Link URL</Label>
                            <Input
                              value={solution.href}
                              onChange={(e) => handleChange(solution.id, 'href', e.target.value)}
                              placeholder="/solution-page"
                            />
                          </div>
                        </div>

                        {/* Labels */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-xs text-gray-500">Label (English)</Label>
                            <Input
                              value={solution.label.en || ''}
                              onChange={(e) => handleLabelChange(solution.id, 'en', e.target.value)}
                              placeholder="Solution Name"
                            />
                          </div>
                          <div>
                            <Label className="text-xs text-gray-500">Label (Arabic)</Label>
                            <Input
                              value={solution.label.ar || ''}
                              onChange={(e) => handleLabelChange(solution.id, 'ar', e.target.value)}
                              placeholder="اسم الحل"
                              dir="rtl"
                            />
                          </div>
                        </div>

                        {/* Descriptions */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-xs text-gray-500">Description (English)</Label>
                            <Input
                              value={solution.description.en || ''}
                              onChange={(e) =>
                                handleDescriptionChange(solution.id, 'en', e.target.value)
                              }
                              placeholder="Brief description"
                            />
                          </div>
                          <div>
                            <Label className="text-xs text-gray-500">Description (Arabic)</Label>
                            <Input
                              value={solution.description.ar || ''}
                              onChange={(e) =>
                                handleDescriptionChange(solution.id, 'ar', e.target.value)
                              }
                              placeholder="وصف مختصر"
                              dir="rtl"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {solution.label.en}
                          </h3>
                          <span className="text-gray-400">|</span>
                          <h3 className="font-semibold text-gray-900 dark:text-white" dir="rtl">
                            {solution.label.ar}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {solution.description.en}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Link: {solution.href}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800">
                      <Switch
                        checked={solution.isActive}
                        onCheckedChange={(v) => handleChange(solution.id, 'isActive', v)}
                      />
                      {solution.isActive ? (
                        <Eye className="h-4 w-4 text-green-600" />
                      ) : (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditingId(isEditing ? null : solution.id)}
                    >
                      {isEditing ? 'Done' : 'Edit'}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteSolution(solution.id)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State */}
      {solutions.length === 0 && (
        <Card className="p-12 text-center">
          <Package className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No Solutions Added
          </h3>
          <p className="text-gray-500 mb-4">
            Add your first solution to the dropdown menu
          </p>
          <Button onClick={addSolution}>
            <Plus className="h-4 w-4 mr-2" />
            Add Solution
          </Button>
        </Card>
      )}
    </div>
  );
}
