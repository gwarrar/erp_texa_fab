import React, { useState, useEffect, useRef } from 'react';
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
  X,
  Upload,
  Image as ImageIcon,
  Loader2,
  Bot,
  Globe,
  Handshake,
  Tag,
  Star,
  FileText,
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
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BlogItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
  featured: boolean;
}

interface BlogData {
  pageTitle: string;
  pageSubtitle: string;
  categories: Record<string, string>;
  readMore: string;
  publishedOn: string;
  items: BlogItem[];
}

const categoryOptions = [
  { value: 'news', label: 'News', icon: Newspaper },
  { value: 'updates', label: 'Updates', icon: RefreshCw },
  { value: 'projects', label: 'Projects', icon: Globe },
  { value: 'partnerships', label: 'Partnerships', icon: Handshake },
  { value: 'ai', label: 'AI & NEXA', icon: Bot },
];

const defaultBlogItem: Omit<BlogItem, 'id'> = {
  title: '',
  excerpt: '',
  content: '',
  date: new Date().toISOString().split('T')[0],
  category: 'news',
  image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  author: 'Admin',
  featured: false,
};

export function NRBlogEditorPage() {
  const [blogData, setBlogData] = useState<Record<string, BlogData> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<BlogItem | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadBlogData();
  }, []);

  const loadBlogData = async () => {
    try {
      const response = await fetch('/data/nr-blog.json');
      if (response.ok) {
        const data = await response.json();
        setBlogData(data);
      }
    } catch (error) {
      console.error('Failed to load blog data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveBlogData = async () => {
    if (!blogData) return;
    
    setIsSaving(true);
    try {
      const response = await fetch('/api/save.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          file: 'nr-blog.json',
          data: blogData,
        }),
      });

      if (response.ok) {
        setHasChanges(false);
        alert('Blog data saved successfully!');
      } else {
        throw new Error('Failed to save');
      }
    } catch (error) {
      console.error('Failed to save blog data:', error);
      alert('Failed to save. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddItem = () => {
    setEditingItem({
      ...defaultBlogItem,
      id: `nr-${Date.now()}`,
    });
    setIsDialogOpen(true);
  };

  const handleEditItem = (item: BlogItem) => {
    setEditingItem({ ...item });
    setIsDialogOpen(true);
  };

  const handleDeleteItem = (itemId: string) => {
    if (!blogData || !confirm('Are you sure you want to delete this item?')) return;

    const updatedData = { ...blogData };
    Object.keys(updatedData).forEach((lang) => {
      updatedData[lang].items = updatedData[lang].items.filter(
        (item) => item.id !== itemId
      );
    });

    setBlogData(updatedData);
    setHasChanges(true);
  };

  const handleSaveItem = () => {
    if (!blogData || !editingItem) return;

    const updatedData = { ...blogData };
    
    // Check if item exists
    const existingIndex = updatedData[selectedLanguage].items.findIndex(
      (item) => item.id === editingItem.id
    );

    if (existingIndex >= 0) {
      // Update existing
      updatedData[selectedLanguage].items[existingIndex] = editingItem;
    } else {
      // Add new to all languages
      Object.keys(updatedData).forEach((lang) => {
        if (lang === selectedLanguage) {
          updatedData[lang].items.unshift(editingItem);
        } else {
          // Add placeholder in other languages
          updatedData[lang].items.unshift({
            ...editingItem,
            title: `[${lang.toUpperCase()}] ${editingItem.title}`,
            excerpt: `[Translate] ${editingItem.excerpt}`,
            content: `[Translate] ${editingItem.content}`,
          });
        }
      });
    }

    setBlogData(updatedData);
    setHasChanges(true);
    setIsDialogOpen(false);
    setEditingItem(null);
  };

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

      if (response.ok) {
        const data = await response.json();
        if (editingItem) {
          setEditingItem({ ...editingItem, image: data.url });
        }
      }
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const toggleFeatured = (itemId: string) => {
    if (!blogData) return;

    const updatedData = { ...blogData };
    Object.keys(updatedData).forEach((lang) => {
      updatedData[lang].items = updatedData[lang].items.map((item) =>
        item.id === itemId ? { ...item, featured: !item.featured } : item
      );
    });

    setBlogData(updatedData);
    setHasChanges(true);
  };

  const getCategoryIcon = (category: string) => {
    const option = categoryOptions.find((opt) => opt.value === category);
    return option?.icon || Tag;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400">Failed to load blog data</p>
        <Button onClick={loadBlogData} className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

  const currentLangData = blogData[selectedLanguage];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <Newspaper className="w-7 h-7 text-blue-500" />
            Next Revolution Blog Editor
          </h1>
          <p className="text-slate-400 mt-1">
            Manage news, updates, and articles for the Next Revolution website
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-32 bg-slate-800 border-slate-700">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ar">العربية</SelectItem>
              <SelectItem value="tr">Türkçe</SelectItem>
              <SelectItem value="ru">Русский</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleAddItem} className="gap-2">
            <Plus className="w-4 h-4" />
            Add Article
          </Button>
          <Button
            onClick={saveBlogData}
            disabled={!hasChanges || isSaving}
            className="gap-2 bg-emerald-600 hover:bg-emerald-500"
          >
            {isSaving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            Save Changes
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <FileText className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {currentLangData?.items?.length || 0}
                </p>
                <p className="text-sm text-slate-400">Total Articles</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {currentLangData?.items?.filter((i) => i.featured).length || 0}
                </p>
                <p className="text-sm text-slate-400">Featured</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Bot className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {currentLangData?.items?.filter((i) => i.category === 'ai').length || 0}
                </p>
                <p className="text-sm text-slate-400">AI & NEXA Articles</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/20 rounded-lg">
                <Handshake className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {currentLangData?.items?.filter((i) => i.category === 'partnerships').length || 0}
                </p>
                <p className="text-sm text-slate-400">Partnerships</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Articles List */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Articles ({selectedLanguage.toUpperCase()})</CardTitle>
          <CardDescription>
            Manage blog posts and news articles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {currentLangData?.items?.map((item) => {
              const CategoryIcon = getCategoryIcon(item.category);
              return (
                <div
                  key={item.id}
                  className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-700 rounded-lg hover:border-slate-600 transition-colors"
                >
                  {/* Image */}
                  <div className="w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {item.featured && (
                            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                          <Badge variant="outline" className="border-slate-600">
                            <CategoryIcon className="w-3 h-3 mr-1" />
                            {currentLangData.categories[item.category] || item.category}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-white line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-400 line-clamp-1 mt-1">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {item.author}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFeatured(item.id)}
                          className={item.featured ? 'text-yellow-400' : 'text-slate-400'}
                        >
                          <Star className="w-4 h-4" fill={item.featured ? 'currentColor' : 'none'} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditItem(item)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteItem(item.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {(!currentLangData?.items || currentLangData.items.length === 0) && (
              <div className="text-center py-12">
                <Newspaper className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400">No articles yet</p>
                <Button onClick={handleAddItem} className="mt-4">
                  Add First Article
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-white">
              {editingItem?.id?.startsWith('nr-') && !currentLangData?.items?.find(i => i.id === editingItem?.id)
                ? 'Add New Article'
                : 'Edit Article'}
            </DialogTitle>
            <DialogDescription>
              Fill in the article details below
            </DialogDescription>
          </DialogHeader>

          {editingItem && (
            <div className="space-y-4">
              {/* Title */}
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={editingItem.title}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, title: e.target.value })
                  }
                  className="mt-1.5 bg-slate-800 border-slate-700"
                  placeholder="Article title..."
                />
              </div>

              {/* Excerpt */}
              <div>
                <Label htmlFor="excerpt">Excerpt / Summary</Label>
                <Textarea
                  id="excerpt"
                  value={editingItem.excerpt}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, excerpt: e.target.value })
                  }
                  className="mt-1.5 bg-slate-800 border-slate-700"
                  placeholder="Brief summary..."
                  rows={2}
                />
              </div>

              {/* Content */}
              <div>
                <Label htmlFor="content">Full Content</Label>
                <Textarea
                  id="content"
                  value={editingItem.content}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, content: e.target.value })
                  }
                  className="mt-1.5 bg-slate-800 border-slate-700"
                  placeholder="Full article content..."
                  rows={6}
                />
              </div>

              {/* Category & Date */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={editingItem.category}
                    onValueChange={(value) =>
                      setEditingItem({ ...editingItem, category: value })
                    }
                  >
                    <SelectTrigger className="mt-1.5 bg-slate-800 border-slate-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          <span className="flex items-center gap-2">
                            <opt.icon className="w-4 h-4" />
                            {opt.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={editingItem.date}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, date: e.target.value })
                    }
                    className="mt-1.5 bg-slate-800 border-slate-700"
                  />
                </div>
              </div>

              {/* Author & Featured */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={editingItem.author}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, author: e.target.value })
                    }
                    className="mt-1.5 bg-slate-800 border-slate-700"
                    placeholder="Author name..."
                  />
                </div>
                <div className="flex items-center gap-3 pt-6">
                  <Switch
                    id="featured"
                    checked={editingItem.featured}
                    onCheckedChange={(checked) =>
                      setEditingItem({ ...editingItem, featured: checked })
                    }
                  />
                  <Label htmlFor="featured" className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    Featured Article
                  </Label>
                </div>
              </div>

              {/* Image */}
              <div>
                <Label>Cover Image</Label>
                <div className="mt-1.5 space-y-3">
                  {editingItem.image && (
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <img
                        src={editingItem.image}
                        alt="Cover"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex gap-3">
                    <Input
                      value={editingItem.image}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, image: e.target.value })
                      }
                      className="flex-1 bg-slate-800 border-slate-700"
                      placeholder="Image URL..."
                    />
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isUploading}
                    >
                      {isUploading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Upload className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveItem}>
              Save Article
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
