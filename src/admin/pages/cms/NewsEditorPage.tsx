import React, { useState, useRef } from 'react';
import {
  Save,
  Plus,
  Trash2,
  RefreshCw,
  Newspaper,
  Pin,
  Eye,
  EyeOff,
  Edit,
  Calendar,
  User,
  Megaphone,
  X,
  Upload,
  Image as ImageIcon,
  Loader2,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAdmin } from '@/admin/context/AdminContext';
import { Badge } from '@/components/ui/badge';
import { NewsItem } from '@/admin/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const newsTypeOptions = [
  { value: 'news', label: 'News', icon: Newspaper },
  { value: 'update', label: 'Update', icon: RefreshCw },
  { value: 'promotion', label: 'Promotion', icon: Megaphone },
  { value: 'announcement', label: 'Announcement', icon: Megaphone },
];

const initialNewsForm: Omit<NewsItem, 'id' | 'createdAt' | 'updatedAt'> = {
  title: { ar: '', en: '' },
  content: { ar: '', en: '' },
  excerpt: { ar: '', en: '' },
  type: 'news',
  isPublished: false,
  isPinned: false,
  publishedAt: new Date().toISOString(),
  author: 'Admin',
};

export function NewsEditorPage() {
  const { newsItems, setNewsItems, announcementBar, setAnnouncementBar, saveChanges, isSaving } = useAdmin();
  const [hasChanges, setHasChanges] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [newsForm, setNewsForm] = useState(initialNewsForm);
  const [activeTab, setActiveTab] = useState('news');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (result.success) {
        setNewsForm({ ...newsForm, image: result.url });
        setHasChanges(true);
      } else {
        alert('Failed to upload image: ' + result.message);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = () => {
    setNewsForm({ ...newsForm, image: undefined });
    setHasChanges(true);
  };

  const handleAddNews = async () => {
    const newNews: NewsItem = {
      id: Date.now().toString(),
      ...newsForm,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setNewsItems([...newsItems, newNews]);
    setIsDialogOpen(false);
    setNewsForm(initialNewsForm);
    setHasChanges(true);
  };

  const handleEditNews = async () => {
    if (!editingNews) return;
    setNewsItems(
      newsItems.map((n) =>
        n.id === editingNews.id
          ? { ...n, ...newsForm, updatedAt: new Date().toISOString() }
          : n
      )
    );
    setIsDialogOpen(false);
    setEditingNews(null);
    setNewsForm(initialNewsForm);
    setHasChanges(true);
  };

  const handleDeleteNews = (id: string) => {
    setNewsItems(newsItems.filter((n) => n.id !== id));
    setHasChanges(true);
  };

  const togglePublish = (id: string) => {
    setNewsItems(
      newsItems.map((n) =>
        n.id === id ? { ...n, isPublished: !n.isPublished, updatedAt: new Date().toISOString() } : n
      )
    );
    setHasChanges(true);
  };

  const togglePin = (id: string) => {
    setNewsItems(
      newsItems.map((n) =>
        n.id === id ? { ...n, isPinned: !n.isPinned, updatedAt: new Date().toISOString() } : n
      )
    );
    setHasChanges(true);
  };

  const openEditDialog = (news: NewsItem) => {
    setEditingNews(news);
    setNewsForm({
      title: news.title,
      content: news.content,
      excerpt: news.excerpt,
      type: news.type,
      isPublished: news.isPublished,
      isPinned: news.isPinned,
      publishedAt: news.publishedAt,
      author: news.author,
      image: news.image,
    });
    setIsDialogOpen(true);
  };

  const handleSave = async () => {
    await saveChanges();
    setHasChanges(false);
  };

  const handleAnnouncementChange = (field: string, value: any) => {
    if (!announcementBar) return;
    setAnnouncementBar({ ...announcementBar, [field]: value });
    setHasChanges(true);
  };

  const handleAnnouncementTextChange = (lang: string, value: string) => {
    if (!announcementBar) return;
    setAnnouncementBar({
      ...announcementBar,
      text: { ...announcementBar.text, [lang]: value },
    });
    setHasChanges(true);
  };

  const handleAnnouncementLinkTextChange = (lang: string, value: string) => {
    if (!announcementBar) return;
    setAnnouncementBar({
      ...announcementBar,
      linkText: { ...announcementBar.linkText, [lang]: value },
    });
    setHasChanges(true);
  };

  const getTypeBadge = (type: string) => {
    const styles = {
      news: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      update: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      promotion: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      announcement: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    };
    return styles[type as keyof typeof styles] || styles.news;
  };

  const NewsFormFields = () => (
    <div className="grid gap-4 py-4">
      <div className="space-y-2">
        <Label>Type</Label>
        <Select
          value={newsForm.type}
          onValueChange={(value: NewsItem['type']) => setNewsForm({ ...newsForm, type: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {newsTypeOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <Tabs defaultValue="en" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="en">English</TabsTrigger>
          <TabsTrigger value="ar">العربية</TabsTrigger>
        </TabsList>
        <TabsContent value="en" className="space-y-4">
          <div className="space-y-2">
            <Label>Title (English)</Label>
            <Input
              value={newsForm.title.en}
              onChange={(e) =>
                setNewsForm({
                  ...newsForm,
                  title: { ...newsForm.title, en: e.target.value },
                })
              }
              placeholder="Enter title"
            />
          </div>
          <div className="space-y-2">
            <Label>Excerpt (English)</Label>
            <Input
              value={newsForm.excerpt.en}
              onChange={(e) =>
                setNewsForm({
                  ...newsForm,
                  excerpt: { ...newsForm.excerpt, en: e.target.value },
                })
              }
              placeholder="Short description"
            />
          </div>
          <div className="space-y-2">
            <Label>Content (English)</Label>
            <Textarea
              value={newsForm.content.en}
              onChange={(e) =>
                setNewsForm({
                  ...newsForm,
                  content: { ...newsForm.content, en: e.target.value },
                })
              }
              placeholder="Full content"
              rows={5}
            />
          </div>
        </TabsContent>
        <TabsContent value="ar" className="space-y-4">
          <div className="space-y-2">
            <Label>العنوان (بالعربية)</Label>
            <Input
              value={newsForm.title.ar}
              onChange={(e) =>
                setNewsForm({
                  ...newsForm,
                  title: { ...newsForm.title, ar: e.target.value },
                })
              }
              placeholder="أدخل العنوان"
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label>المقتطف (بالعربية)</Label>
            <Input
              value={newsForm.excerpt.ar}
              onChange={(e) =>
                setNewsForm({
                  ...newsForm,
                  excerpt: { ...newsForm.excerpt, ar: e.target.value },
                })
              }
              placeholder="وصف قصير"
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label>المحتوى (بالعربية)</Label>
            <Textarea
              value={newsForm.content.ar}
              onChange={(e) =>
                setNewsForm({
                  ...newsForm,
                  content: { ...newsForm.content, ar: e.target.value },
                })
              }
              placeholder="المحتوى الكامل"
              rows={5}
              dir="rtl"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="space-y-2">
        <Label>Featured Image</Label>
        <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-4">
          {newsForm.image ? (
            <div className="relative">
              <img 
                src={newsForm.image} 
                alt="Preview" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={removeImage}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div 
              className="flex flex-col items-center justify-center h-32 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              {isUploading ? (
                <>
                  <Loader2 className="h-8 w-8 text-gray-400 animate-spin mb-2" />
                  <p className="text-sm text-gray-500">Uploading...</p>
                </>
              ) : (
                <>
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Click to upload image</p>
                  <p className="text-xs text-gray-400">PNG, JPG, WebP up to 5MB</p>
                </>
              )}
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Switch
            checked={newsForm.isPublished}
            onCheckedChange={(checked) => setNewsForm({ ...newsForm, isPublished: checked })}
          />
          <Label>Published</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch
            checked={newsForm.isPinned}
            onCheckedChange={(checked) => setNewsForm({ ...newsForm, isPinned: checked })}
          />
          <Label>Pinned</Label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">News & Announcements</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage news, updates, and the announcement bar
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => window.location.reload()}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700"
            onClick={handleSave}
            disabled={isSaving || !hasChanges}
          >
            <Save className="h-4 w-4 mr-2" />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="news">
            <Newspaper className="h-4 w-4 mr-2" />
            News & Updates
          </TabsTrigger>
          <TabsTrigger value="announcement">
            <Megaphone className="h-4 w-4 mr-2" />
            Announcement Bar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="news" className="space-y-4">
          {/* Add News Button */}
          <div className="flex justify-end">
            <Button
              onClick={() => {
                setEditingNews(null);
                setNewsForm(initialNewsForm);
                setIsDialogOpen(true);
              }}
              className="bg-teal-600 hover:bg-teal-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add News
            </Button>
          </div>

          {/* News List */}
          <div className="grid gap-4">
            {newsItems.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <Newspaper className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No news yet
                  </h3>
                  <p className="text-gray-500">Add your first news or update</p>
                </CardContent>
              </Card>
            ) : (
              newsItems
                .sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0))
                .map((news) => (
                  <Card key={news.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {news.isPinned && (
                              <Pin className="h-4 w-4 text-orange-500" />
                            )}
                            <Badge className={getTypeBadge(news.type)}>{news.type}</Badge>
                            <Badge variant={news.isPublished ? 'default' : 'secondary'}>
                              {news.isPublished ? 'Published' : 'Draft'}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-lg">{news.title.en}</h3>
                          <p className="text-sm text-gray-500 mt-1">{news.excerpt.en}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {news.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(news.publishedAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => togglePin(news.id)}
                            title={news.isPinned ? 'Unpin' : 'Pin'}
                          >
                            <Pin className={`h-4 w-4 ${news.isPinned ? 'text-orange-500' : ''}`} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => togglePublish(news.id)}
                            title={news.isPublished ? 'Unpublish' : 'Publish'}
                          >
                            {news.isPublished ? (
                              <Eye className="h-4 w-4 text-green-500" />
                            ) : (
                              <EyeOff className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openEditDialog(news)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteNews(news.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="announcement" className="space-y-4">
          {announcementBar && (
            <Card>
              <CardHeader>
                <CardTitle>Announcement Bar Settings</CardTitle>
                <CardDescription>
                  Configure the top announcement bar shown on the website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Preview */}
                <div
                  className="p-3 rounded-lg text-center text-sm font-medium"
                  style={{
                    backgroundColor: announcementBar.backgroundColor,
                    color: announcementBar.textColor,
                  }}
                >
                  {announcementBar.text.en}{' '}
                  {announcementBar.linkText?.en && (
                    <span className="underline ml-2">{announcementBar.linkText.en}</span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Switch
                    checked={announcementBar.isActive}
                    onCheckedChange={(checked) => handleAnnouncementChange('isActive', checked)}
                  />
                  <Label>Enable Announcement Bar</Label>
                </div>

                <Tabs defaultValue="en" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="en">English</TabsTrigger>
                    <TabsTrigger value="ar">العربية</TabsTrigger>
                  </TabsList>
                  <TabsContent value="en" className="space-y-4">
                    <div className="space-y-2">
                      <Label>Announcement Text (English)</Label>
                      <Input
                        value={announcementBar.text.en}
                        onChange={(e) => handleAnnouncementTextChange('en', e.target.value)}
                        placeholder="Enter announcement text"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Link Text (English)</Label>
                      <Input
                        value={announcementBar.linkText?.en || ''}
                        onChange={(e) => handleAnnouncementLinkTextChange('en', e.target.value)}
                        placeholder="e.g., Learn More"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="ar" className="space-y-4">
                    <div className="space-y-2">
                      <Label>نص الإعلان (بالعربية)</Label>
                      <Input
                        value={announcementBar.text.ar}
                        onChange={(e) => handleAnnouncementTextChange('ar', e.target.value)}
                        placeholder="أدخل نص الإعلان"
                        dir="rtl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>نص الرابط (بالعربية)</Label>
                      <Input
                        value={announcementBar.linkText?.ar || ''}
                        onChange={(e) => handleAnnouncementLinkTextChange('ar', e.target.value)}
                        placeholder="مثال: اعرف المزيد"
                        dir="rtl"
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-2">
                  <Label>Link URL</Label>
                  <Input
                    value={announcementBar.link || ''}
                    onChange={(e) => handleAnnouncementChange('link', e.target.value)}
                    placeholder="/pricing or https://..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Background Color</Label>
                    <div className="flex gap-2">
                      <Input
                        type="color"
                        value={announcementBar.backgroundColor}
                        onChange={(e) => handleAnnouncementChange('backgroundColor', e.target.value)}
                        className="w-16 h-10 p-1"
                      />
                      <Input
                        value={announcementBar.backgroundColor}
                        onChange={(e) => handleAnnouncementChange('backgroundColor', e.target.value)}
                        placeholder="#047857"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Text Color</Label>
                    <div className="flex gap-2">
                      <Input
                        type="color"
                        value={announcementBar.textColor}
                        onChange={(e) => handleAnnouncementChange('textColor', e.target.value)}
                        className="w-16 h-10 p-1"
                      />
                      <Input
                        value={announcementBar.textColor}
                        onChange={(e) => handleAnnouncementChange('textColor', e.target.value)}
                        placeholder="#ffffff"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* News Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingNews ? 'Edit News' : 'Add News'}</DialogTitle>
            <DialogDescription>
              {editingNews ? 'Update this news item' : 'Create a new news or update'}
            </DialogDescription>
          </DialogHeader>
          <NewsFormFields />
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-teal-600 hover:bg-teal-700"
              onClick={editingNews ? handleEditNews : handleAddNews}
              disabled={!newsForm.title.en}
            >
              {editingNews ? 'Save Changes' : 'Add News'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
