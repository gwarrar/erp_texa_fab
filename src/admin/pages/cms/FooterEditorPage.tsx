import React, { useState } from 'react';
import {
  Save,
  RefreshCw,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Plus,
  Trash2,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAdmin } from '@/admin/context/AdminContext';
import { Badge } from '@/components/ui/badge';

const socialPlatforms = [
  { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'bg-blue-600' },
  { id: 'twitter', name: 'Twitter/X', icon: Twitter, color: 'bg-black' },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700' },
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-pink-600' },
  { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'bg-red-600' },
];

export function FooterEditorPage() {
  const { contactInfo, setContactInfo, socialLinks, setSocialLinks, saveChanges, isSaving } = useAdmin();
  const [hasChanges, setHasChanges] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const currentContact = contactInfo || {
    address: { ar: 'دبلن، أيرلندا', en: 'Dublin, Ireland' },
    phone: '+353 1 234 5678',
    email: 'info@texafab.com',
    workingHours: { ar: 'الأحد - الخميس: 9 صباحاً - 6 مساءً', en: 'Sun - Thu: 9AM - 6PM' },
  };

  const handleContactChange = (field: string, value: string) => {
    setContactInfo({
      ...currentContact,
      [field]: value,
    });
    setHasChanges(true);
  };

  const handleAddressChange = (lang: string, value: string) => {
    setContactInfo({
      ...currentContact,
      address: { ...currentContact.address, [lang]: value },
    });
    setHasChanges(true);
  };

  const handleHoursChange = (lang: string, value: string) => {
    setContactInfo({
      ...currentContact,
      workingHours: { ...currentContact.workingHours, [lang]: value },
    });
    setHasChanges(true);
  };

  const handleSocialToggle = (platform: string, url: string, isActive: boolean) => {
    const existing = socialLinks.find((s) => s.platform === platform);
    if (existing) {
      setSocialLinks(
        socialLinks.map((s) =>
          s.platform === platform ? { ...s, url, isActive } : s
        )
      );
    } else {
      setSocialLinks([
        ...socialLinks,
        { id: Date.now().toString(), platform: platform as any, url, isActive },
      ]);
    }
    setHasChanges(true);
  };

  const handleSave = async () => {
    await saveChanges();
    setHasChanges(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Footer & Links Editor</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage contact information, social links, and footer content
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

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="contact">Contact Info</TabsTrigger>
          <TabsTrigger value="social">Social Links</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="contact" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-500" />
                  Company Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Address (English)</Label>
                  <Input
                    value={currentContact.address.en || ''}
                    onChange={(e) => handleAddressChange('en', e.target.value)}
                    placeholder="Dublin, Ireland"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Address (Arabic)</Label>
                  <Input
                    value={currentContact.address.ar || ''}
                    onChange={(e) => handleAddressChange('ar', e.target.value)}
                    placeholder="دبلن، أيرلندا"
                    dir="rtl"
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-green-500" />
                  Phone Number
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  value={currentContact.phone}
                  onChange={(e) => handleContactChange('phone', e.target.value)}
                  placeholder="+353 1 234 5678"
                />
              </CardContent>
            </Card>

            {/* Email */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-500" />
                  Email Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  type="email"
                  value={currentContact.email}
                  onChange={(e) => handleContactChange('email', e.target.value)}
                  placeholder="info@texafab.com"
                />
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-500" />
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Hours (English)</Label>
                  <Input
                    value={currentContact.workingHours.en || ''}
                    onChange={(e) => handleHoursChange('en', e.target.value)}
                    placeholder="Sun - Thu: 9AM - 6PM"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Hours (Arabic)</Label>
                  <Input
                    value={currentContact.workingHours.ar || ''}
                    onChange={(e) => handleHoursChange('ar', e.target.value)}
                    placeholder="الأحد - الخميس: 9 صباحاً - 6 مساءً"
                    dir="rtl"
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="social" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>Enable and configure social media profiles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {socialPlatforms.map((platform) => {
                  const existing = socialLinks.find((s) => s.platform === platform.id);
                  return (
                    <div
                      key={platform.id}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800"
                    >
                      <div className={`w-10 h-10 rounded-lg ${platform.color} flex items-center justify-center`}>
                        <platform.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <Label className="font-medium">{platform.name}</Label>
                        <Input
                          value={existing?.url || ''}
                          onChange={(e) =>
                            handleSocialToggle(platform.id, e.target.value, existing?.isActive || true)
                          }
                          placeholder={`https://${platform.id}.com/texafab`}
                          className="mt-1"
                        />
                      </div>
                      <Switch
                        checked={existing?.isActive || false}
                        onCheckedChange={(v) =>
                          handleSocialToggle(platform.id, existing?.url || '', v)
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Footer Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 text-white rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">T</span>
                      </div>
                      <span className="font-bold text-lg">TexaFab</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Complete ERP solution for textile trade management
                    </p>
                  </div>

                  {/* Contact */}
                  <div>
                    <h4 className="font-semibold mb-4">Contact</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="h-4 w-4" />
                        {currentContact.address.en}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Phone className="h-4 w-4" />
                        {currentContact.phone}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Mail className="h-4 w-4" />
                        {currentContact.email}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="h-4 w-4" />
                        {currentContact.workingHours.en}
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div>
                    <h4 className="font-semibold mb-4">Follow Us</h4>
                    <div className="flex gap-3">
                      {socialLinks
                        .filter((s) => s.isActive)
                        .map((social) => {
                          const platform = socialPlatforms.find((p) => p.id === social.platform);
                          if (!platform) return null;
                          return (
                            <a
                              key={social.id}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`w-10 h-10 rounded-lg ${platform.color} flex items-center justify-center hover:opacity-80 transition-opacity`}
                            >
                              <platform.icon className="h-5 w-5 text-white" />
                            </a>
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
                  © 2024 TexaFab by Next Revolution. All rights reserved.
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
