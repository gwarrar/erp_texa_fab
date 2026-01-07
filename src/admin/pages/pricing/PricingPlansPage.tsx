import React, { useState } from 'react';
import {
  Save,
  Plus,
  Trash2,
  RefreshCw,
  Star,
  DollarSign,
  TrendingUp,
  Check,
  X,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAdmin } from '@/admin/context/AdminContext';
import { Badge } from '@/components/ui/badge';
import { PricingPlan } from '@/admin/types';

export function PricingPlansPage() {
  const { pricingPlans, setPricingPlans, saveChanges, isSaving } = useAdmin();
  const [hasChanges, setHasChanges] = useState(false);
  const [activeTab, setActiveTab] = useState(pricingPlans[0]?.id || '');

  const handleChange = (id: string, field: string, value: any) => {
    setPricingPlans(
      pricingPlans.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
    setHasChanges(true);
  };

  const handlePriceChange = (id: string, field: string, value: number) => {
    setPricingPlans(
      pricingPlans.map((p) =>
        p.id === id ? { ...p, price: { ...p.price, [field]: value } } : p
      )
    );
    setHasChanges(true);
  };

  const handleNameChange = (id: string, lang: string, value: string) => {
    setPricingPlans(
      pricingPlans.map((p) =>
        p.id === id ? { ...p, name: { ...p.name, [lang]: value } } : p
      )
    );
    setHasChanges(true);
  };

  const handleROIChange = (id: string, field: string, value: string) => {
    setPricingPlans(
      pricingPlans.map((p) =>
        p.id === id ? { ...p, roi: { ...p.roi, [field]: value } } : p
      )
    );
    setHasChanges(true);
  };

  const addPlan = () => {
    const newPlan: PricingPlan = {
      id: Date.now().toString(),
      name: { ar: 'باقة جديدة', en: 'New Plan' },
      price: { monthly: 99, yearly: 990, currency: 'EUR' },
      features: [],
      roi: {
        salesIncrease: '+10%',
        customerRetention: '+15%',
        netProfit: '$5,000+',
        roi: '200%',
      },
      isPopular: false,
      isEnterprise: false,
      order: pricingPlans.length + 1,
      isActive: true,
    };
    setPricingPlans([...pricingPlans, newPlan]);
    setActiveTab(newPlan.id);
    setHasChanges(true);
  };

  const deletePlan = (id: string) => {
    setPricingPlans(pricingPlans.filter((p) => p.id !== id));
    if (activeTab === id && pricingPlans.length > 1) {
      setActiveTab(pricingPlans[0].id);
    }
    setHasChanges(true);
  };

  const handleSave = async () => {
    await saveChanges();
    setHasChanges(false);
  };

  const currentPlan = pricingPlans.find((p) => p.id === activeTab);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pricing Plans Manager</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Configure pricing tiers, features, and ROI calculations
          </p>
        </div>
        <div className="flex items-center gap-3">
          {hasChanges && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
              Unsaved Changes
            </Badge>
          )}
          <Button variant="outline" onClick={addPlan}>
            <Plus className="h-4 w-4 mr-2" />
            Add Plan
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

      {/* Preview Cards */}
      <Card>
        <CardHeader>
          <CardTitle>Live Preview</CardTitle>
          <CardDescription>How pricing cards appear on the website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 ${
                  plan.isPopular
                    ? 'bg-gradient-to-br from-teal-600 to-emerald-700 text-white'
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                } ${activeTab === plan.id ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setActiveTab(plan.id)}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-yellow-500 text-black">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className="text-center">
                  <h3 className={`text-lg font-bold ${plan.isPopular ? 'text-white' : ''}`}>
                    {plan.name.en}
                  </h3>
                  <p className={`text-sm ${plan.isPopular ? 'text-white/80' : 'text-gray-500'}`}>
                    {plan.name.ar}
                  </p>
                  <div className="mt-4">
                    <span className="text-4xl font-black">€{plan.price.monthly}</span>
                    <span className={`text-sm ${plan.isPopular ? 'text-white/70' : 'text-gray-500'}`}>
                      /month
                    </span>
                  </div>
                </div>
                <div className={`mt-4 p-3 rounded-lg ${
                  plan.isPopular ? 'bg-white/10' : 'bg-green-50 dark:bg-green-900/20'
                }`}>
                  <p className={`text-xs font-medium ${
                    plan.isPopular ? 'text-white' : 'text-green-700 dark:text-green-400'
                  }`}>
                    💰 Expected ROI: {plan.roi.roi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Plan Editor */}
      {currentPlan && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>
                Editing: {currentPlan.name.en}
                {currentPlan.isPopular && (
                  <Badge className="ml-2 bg-teal-100 text-teal-700">Popular</Badge>
                )}
              </CardTitle>
              <CardDescription>Configure plan details and pricing</CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => deletePlan(currentPlan.id)}
              className="text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Plan
            </Button>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic">
              <TabsList>
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="roi">ROI Settings</TabsTrigger>
                <TabsTrigger value="options">Options</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-6 mt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label>Plan Name (English)</Label>
                    <Input
                      value={currentPlan.name.en || ''}
                      onChange={(e) => handleNameChange(currentPlan.id, 'en', e.target.value)}
                      placeholder="Professional Plan"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Plan Name (Arabic)</Label>
                    <Input
                      value={currentPlan.name.ar || ''}
                      onChange={(e) => handleNameChange(currentPlan.id, 'ar', e.target.value)}
                      placeholder="الباقة الاحترافية"
                      dir="rtl"
                      className="mt-1"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-6 mt-6">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <Label>Monthly Price (€)</Label>
                    <Input
                      type="number"
                      value={currentPlan.price.monthly}
                      onChange={(e) =>
                        handlePriceChange(currentPlan.id, 'monthly', parseInt(e.target.value) || 0)
                      }
                      className="mt-1 text-lg font-bold"
                    />
                  </div>
                  <div>
                    <Label>Yearly Price (€)</Label>
                    <Input
                      type="number"
                      value={currentPlan.price.yearly}
                      onChange={(e) =>
                        handlePriceChange(currentPlan.id, 'yearly', parseInt(e.target.value) || 0)
                      }
                      className="mt-1 text-lg font-bold"
                    />
                  </div>
                  <div>
                    <Label>Yearly Savings</Label>
                    <div className="mt-1 p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                      <span className="text-lg font-bold text-green-600">
                        €{currentPlan.price.monthly * 12 - currentPlan.price.yearly}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">saved/year</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="roi" className="space-y-6 mt-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <Label className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      Sales Increase
                    </Label>
                    <Input
                      value={currentPlan.roi.salesIncrease}
                      onChange={(e) => handleROIChange(currentPlan.id, 'salesIncrease', e.target.value)}
                      placeholder="+35%"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-500" />
                      Customer Retention
                    </Label>
                    <Input
                      value={currentPlan.roi.customerRetention}
                      onChange={(e) =>
                        handleROIChange(currentPlan.id, 'customerRetention', e.target.value)
                      }
                      placeholder="+40%"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-emerald-500" />
                      Net Profit
                    </Label>
                    <Input
                      value={currentPlan.roi.netProfit}
                      onChange={(e) => handleROIChange(currentPlan.id, 'netProfit', e.target.value)}
                      placeholder="$39,000+"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-purple-500" />
                      ROI Percentage
                    </Label>
                    <Input
                      value={currentPlan.roi.roi}
                      onChange={(e) => handleROIChange(currentPlan.id, 'roi', e.target.value)}
                      placeholder="520%"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label>Competitive Edge (Enterprise only)</Label>
                  <Input
                    value={currentPlan.roi.competitiveEdge || ''}
                    onChange={(e) =>
                      handleROIChange(currentPlan.id, 'competitiveEdge', e.target.value)
                    }
                    placeholder="+45%"
                    className="mt-1"
                  />
                </div>
              </TabsContent>

              <TabsContent value="options" className="space-y-6 mt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <div>
                        <p className="font-medium">Mark as Popular</p>
                        <p className="text-sm text-gray-500">
                          Highlights this plan as the recommended option
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={currentPlan.isPopular}
                      onCheckedChange={(v) => handleChange(currentPlan.id, 'isPopular', v)}
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-purple-500" />
                      <div>
                        <p className="font-medium">Enterprise Plan</p>
                        <p className="text-sm text-gray-500">Shows "Contact Sales" instead of price</p>
                      </div>
                    </div>
                    <Switch
                      checked={currentPlan.isEnterprise}
                      onCheckedChange={(v) => handleChange(currentPlan.id, 'isEnterprise', v)}
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium">Active</p>
                        <p className="text-sm text-gray-500">Show this plan on the website</p>
                      </div>
                    </div>
                    <Switch
                      checked={currentPlan.isActive}
                      onCheckedChange={(v) => handleChange(currentPlan.id, 'isActive', v)}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      {/* Plan Tabs (for selecting which plan to edit) */}
      <div className="flex gap-2 flex-wrap">
        {pricingPlans.map((plan) => (
          <Button
            key={plan.id}
            variant={activeTab === plan.id ? 'default' : 'outline'}
            onClick={() => setActiveTab(plan.id)}
            className={activeTab === plan.id ? 'bg-teal-600' : ''}
          >
            {plan.name.en}
            {plan.isPopular && <Star className="h-3 w-3 ml-1 fill-current" />}
          </Button>
        ))}
      </div>
    </div>
  );
}
