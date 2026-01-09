/**
 * Media Library Page
 * Upload, manage, and organize images and files with compression
 */
import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Upload, Image, Search, Trash2, Download, Copy, Check, 
  RefreshCw, Grid, List, FolderOpen, X, FileImage, 
  Film, FileText, File, ZoomIn, ChevronLeft, ChevronRight,
  ImageOff, Loader2
} from 'lucide-react';
import { useAdmin } from '@/admin-v2/context/AdminStore';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface MediaItem {
  id: string;
  site_id: string;
  url: string;
  alt_text: string;
  file_name: string;
  file_type: string;
  file_size: number;
  folder: string;
  width?: number;
  height?: number;
  created_at: string;
}

const folders = [
  { id: 'all', label: 'All Files', icon: FolderOpen },
  { id: 'images', label: 'Images', icon: Image },
  { id: 'hero', label: 'Hero Banners', icon: FileImage },
  { id: 'products', label: 'Products', icon: FileImage },
  { id: 'team', label: 'Team', icon: FileImage },
  { id: 'logos', label: 'Logos', icon: FileImage },
  { id: 'videos', label: 'Videos', icon: Film },
  { id: 'documents', label: 'Documents', icon: FileText },
];

export function MediaLibraryPage() {
  const { currentSite } = useAdmin();
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolder, setSelectedFolder] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!currentSite) return;
    loadMedia();
  }, [currentSite]);

  useEffect(() => {
    filterMedia();
  }, [mediaItems, searchQuery, selectedFolder]);

  const loadMedia = async () => {
    setIsLoading(true);
    setError('');

    try {
      const { data, error } = await supabase
        .from('media')
        .select('*')
        .eq('site_id', currentSite)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMediaItems(data || []);
    } catch (err: any) {
      console.error('Error loading media:', err);
      setError(err.message || 'Failed to load media');
    } finally {
      setIsLoading(false);
    }
  };

  const filterMedia = () => {
    let items = mediaItems;

    // Filter by folder
    if (selectedFolder !== 'all') {
      items = items.filter(item => 
        item.folder === selectedFolder || 
        (selectedFolder === 'images' && item.file_type.startsWith('image/'))
      );
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.file_name.toLowerCase().includes(query) ||
        item.alt_text?.toLowerCase().includes(query)
      );
    }

    setFilteredItems(items);
  };

  const handleFileSelect = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setUploadProgress(0);
    setError('');
    setSuccess('');

    const totalFiles = files.length;
    let uploaded = 0;

    try {
      for (const file of Array.from(files)) {
        // Validate file
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (file.size > maxSize) {
          setError(`File ${file.name} is too large. Max size is 10MB.`);
          continue;
        }

        // Compress image if needed
        let processedFile = file;
        if (file.type.startsWith('image/') && !file.type.includes('svg')) {
          processedFile = await compressImage(file);
        }

        // Upload to Supabase Storage
        const fileName = `${currentSite}/${selectedFolder === 'all' ? 'images' : selectedFolder}/${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('media')
          .upload(fileName, processedFile, {
            cacheControl: '3600',
            upsert: false,
          });

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: urlData } = supabase.storage
          .from('media')
          .getPublicUrl(fileName);

        // Get image dimensions if applicable
        let width, height;
        if (file.type.startsWith('image/')) {
          const dimensions = await getImageDimensions(processedFile);
          width = dimensions.width;
          height = dimensions.height;
        }

        // Save to database
        const { error: dbError } = await supabase
          .from('media')
          .insert({
            site_id: currentSite,
            url: urlData.publicUrl,
            file_name: file.name,
            file_type: file.type,
            file_size: processedFile.size,
            folder: selectedFolder === 'all' ? 'images' : selectedFolder,
            width,
            height,
            alt_text: file.name.split('.')[0].replace(/[-_]/g, ' '),
          });

        if (dbError) throw dbError;

        uploaded++;
        setUploadProgress(Math.round((uploaded / totalFiles) * 100));
      }

      setSuccess(`Successfully uploaded ${uploaded} file(s)`);
      loadMedia();
    } catch (err: any) {
      console.error('Upload error:', err);
      setError(err.message || 'Failed to upload file');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const compressImage = async (file: File): Promise<File> => {
    return new Promise((resolve) => {
      const img = document.createElement('img');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;

      img.onload = () => {
        // Calculate new dimensions (max 1920px)
        let { width, height } = img;
        const maxDim = 1920;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = (height / width) * maxDim;
            width = maxDim;
          } else {
            width = (width / height) * maxDim;
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;

        // Draw and compress
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(new File([blob], file.name, { type: 'image/jpeg' }));
            } else {
              resolve(file);
            }
          },
          'image/jpeg',
          0.85
        );
      };

      img.src = URL.createObjectURL(file);
    });
  };

  const getImageDimensions = (file: File): Promise<{ width: number; height: number }> => {
    return new Promise((resolve) => {
      const img = document.createElement('img');
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = () => {
        resolve({ width: 0, height: 0 });
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const handleDelete = async (item: MediaItem) => {
    if (!confirm(`Delete ${item.file_name}?`)) return;

    try {
      // Delete from storage
      const path = item.url.split('/storage/v1/object/public/media/')[1];
      if (path) {
        await supabase.storage.from('media').remove([path]);
      }

      // Delete from database
      const { error } = await supabase
        .from('media')
        .delete()
        .eq('id', item.id);

      if (error) throw error;

      setSuccess('File deleted successfully');
      loadMedia();
      setSelectedItem(null);
    } catch (err: any) {
      setError(err.message || 'Failed to delete file');
    }
  };

  const copyToClipboard = async (url: string, id: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return Image;
    if (type.startsWith('video/')) return Film;
    if (type.includes('pdf')) return FileText;
    return File;
  };

  // Drag and drop handlers
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dropZoneRef.current?.classList.add('border-emerald-500', 'bg-emerald-50');
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dropZoneRef.current?.classList.remove('border-emerald-500', 'bg-emerald-50');
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dropZoneRef.current?.classList.remove('border-emerald-500', 'bg-emerald-50');
    handleFileSelect(e.dataTransfer.files);
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Image className="w-6 h-6" />
            Media Library
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Upload and manage images for {currentSite}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={loadMedia} disabled={isLoading}>
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button onClick={() => fileInputRef.current?.click()} disabled={isUploading}>
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,video/*,.pdf,.doc,.docx"
            onChange={(e) => handleFileSelect(e.target.files)}
            className="hidden"
          />
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="mb-4 bg-green-50 border-green-200">
          <Check className="w-4 h-4 text-green-600" />
          <AlertDescription className="text-green-700">{success}</AlertDescription>
        </Alert>
      )}

      {/* Upload Zone */}
      <div
        ref={dropZoneRef}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 mb-6 text-center transition-colors"
      >
        {isUploading ? (
          <div className="space-y-3">
            <Loader2 className="w-10 h-10 mx-auto text-emerald-500 animate-spin" />
            <p className="text-slate-600 dark:text-slate-400">
              Uploading... {uploadProgress}%
            </p>
            <div className="w-48 mx-auto h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        ) : (
          <>
            <Upload className="w-10 h-10 mx-auto text-slate-400 mb-3" />
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Drag and drop files here, or click to browse
            </p>
            <p className="text-xs text-slate-400">
              Supports images, videos, and documents (max 10MB each)
            </p>
          </>
        )}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search files..."
            className="pl-10"
          />
        </div>
        <Select value={selectedFolder} onValueChange={setSelectedFolder}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {folders.map((folder) => (
              <SelectItem key={folder.id} value={folder.id}>
                {folder.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex border rounded-lg">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className="rounded-r-none"
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('list')}
            className="rounded-l-none"
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
        <span>{filteredItems.length} files</span>
        <span>•</span>
        <span>{formatFileSize(filteredItems.reduce((acc, item) => acc + (item.file_size || 0), 0))} total</span>
      </div>

      {/* Media Grid/List */}
      {isLoading ? (
        <div className="text-center py-12">
          <Loader2 className="w-8 h-8 mx-auto text-emerald-500 animate-spin" />
          <p className="mt-2 text-slate-500">Loading media...</p>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <ImageOff className="w-12 h-12 mx-auto text-slate-300 mb-3" />
          <p className="text-slate-500">No media files found</p>
          <p className="text-sm text-slate-400">Upload some files to get started</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredItems.map((item) => {
            const FileIcon = getFileIcon(item.file_type);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-emerald-500 transition-all"
              >
                {item.file_type.startsWith('image/') ? (
                  <img
                    src={item.url}
                    alt={item.alt_text || item.file_name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FileIcon className="w-12 h-12 text-slate-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button size="sm" variant="secondary" onClick={(e) => { e.stopPropagation(); copyToClipboard(item.url, item.id); }}>
                    {copiedId === item.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                  <Button size="sm" variant="secondary" onClick={(e) => { e.stopPropagation(); window.open(item.url, '_blank'); }}>
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-xs truncate">{item.file_name}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="border rounded-lg divide-y dark:divide-slate-700">
          {filteredItems.map((item) => {
            const FileIcon = getFileIcon(item.file_type);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
              >
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                  {item.file_type.startsWith('image/') ? (
                    <img src={item.url} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FileIcon className="w-6 h-6 text-slate-400" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900 dark:text-white truncate">{item.file_name}</p>
                  <p className="text-sm text-slate-500">
                    {formatFileSize(item.file_size)} • {item.width && item.height ? `${item.width}×${item.height}` : item.file_type}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); copyToClipboard(item.url, item.id); }}>
                    {copiedId === item.id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); handleDelete(item); }}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedItem.file_name}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                  {selectedItem.file_type.startsWith('image/') ? (
                    <img 
                      src={selectedItem.url} 
                      alt={selectedItem.alt_text} 
                      className="w-full h-auto"
                    />
                  ) : (
                    <div className="aspect-video flex items-center justify-center">
                      {React.createElement(getFileIcon(selectedItem.file_type), { className: 'w-16 h-16 text-slate-400' })}
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <div>
                    <Label>File URL</Label>
                    <div className="flex gap-2 mt-1">
                      <Input value={selectedItem.url} readOnly className="text-sm" />
                      <Button onClick={() => copyToClipboard(selectedItem.url, selectedItem.id)}>
                        {copiedId === selectedItem.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <Label className="text-slate-500">Size</Label>
                      <p>{formatFileSize(selectedItem.file_size)}</p>
                    </div>
                    <div>
                      <Label className="text-slate-500">Type</Label>
                      <p>{selectedItem.file_type}</p>
                    </div>
                    {selectedItem.width && (
                      <>
                        <div>
                          <Label className="text-slate-500">Dimensions</Label>
                          <p>{selectedItem.width} × {selectedItem.height}px</p>
                        </div>
                      </>
                    )}
                    <div>
                      <Label className="text-slate-500">Folder</Label>
                      <p className="capitalize">{selectedItem.folder}</p>
                    </div>
                  </div>
                  <div>
                    <Label>Alt Text</Label>
                    <Input 
                      value={selectedItem.alt_text || ''} 
                      placeholder="Describe this image..."
                      className="mt-1"
                      onChange={async (e) => {
                        const newAlt = e.target.value;
                        setSelectedItem({ ...selectedItem, alt_text: newAlt });
                        await supabase
                          .from('media')
                          .update({ alt_text: newAlt })
                          .eq('id', selectedItem.id);
                      }}
                    />
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" onClick={() => window.open(selectedItem.url, '_blank')}>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="destructive" onClick={() => handleDelete(selectedItem)}>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MediaLibraryPage;
