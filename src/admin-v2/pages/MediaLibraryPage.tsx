// ===========================================
// Admin V2 - Media Library Page
// ===========================================

import React, { useState, useEffect, useCallback } from 'react';
import { useAdmin } from '../context/AdminStore';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { 
  Upload, 
  Loader2, 
  Search, 
  Grid, 
  List, 
  Trash2, 
  Download, 
  Copy,
  Image as ImageIcon,
  Video,
  File,
  X,
  Check,
  FolderOpen
} from 'lucide-react';
import { toast } from 'sonner';

interface MediaFile {
  name: string;
  url: string;
  type: 'image' | 'video' | 'document';
  size: number;
  uploadedAt: string;
}

export function MediaLibraryPage() {
  const { 
    currentSite,
    uploadFile,
    deleteFile,
    isLoading,
    getDirection,
    t
  } = useAdmin();

  const direction = getDirection();
  const isRTL = direction === 'rtl';

  // State
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<MediaFile | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<MediaFile | null>(null);
  const [dragOver, setDragOver] = useState(false);

  // Load files (mock data for now - in production, fetch from server)
  useEffect(() => {
    // In production, this would fetch from the server
    const mockFiles: MediaFile[] = [
      { name: 'hero-banner.jpg', url: '/images/hero-banner.jpg', type: 'image', size: 245000, uploadedAt: '2024-01-15' },
      { name: 'feature-1.png', url: '/images/feature-1.png', type: 'image', size: 125000, uploadedAt: '2024-01-14' },
      { name: 'logo.svg', url: '/images/logo.svg', type: 'image', size: 15000, uploadedAt: '2024-01-10' },
      { name: 'product-demo.mp4', url: '/videos/demo.mp4', type: 'video', size: 15000000, uploadedAt: '2024-01-08' },
    ];
    setFiles(mockFiles);
  }, [currentSite]);

  // Filter files by search term
  const filteredFiles = files.filter(file => 
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle file upload
  const handleUpload = async (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;

    setIsUploading(true);
    
    for (const file of Array.from(fileList)) {
      const url = await uploadFile(file, 'media');
      if (url) {
        const newFile: MediaFile = {
          name: file.name,
          url,
          type: file.type.startsWith('video/') ? 'video' : file.type.startsWith('image/') ? 'image' : 'document',
          size: file.size,
          uploadedAt: new Date().toISOString().split('T')[0]
        };
        setFiles(prev => [newFile, ...prev]);
      }
    }
    
    setIsUploading(false);
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleUpload(e.dataTransfer.files);
  };

  // Handle delete
  const handleDelete = async (file: MediaFile) => {
    const success = await deleteFile(file.url);
    if (success) {
      setFiles(prev => prev.filter(f => f.url !== file.url));
      setDeleteConfirm(null);
    }
  };

  // Copy URL to clipboard
  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success(isRTL ? 'تم نسخ الرابط' : 'URL copied');
  };

  // Format file size
  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  // Get file icon
  const FileIcon = ({ type }: { type: string }) => {
    switch (type) {
      case 'image': return <ImageIcon size={24} />;
      case 'video': return <Video size={24} />;
      default: return <File size={24} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {isRTL ? 'مكتبة الوسائط' : 'Media Library'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {files.length} {isRTL ? 'ملف' : 'files'}
          </p>
        </div>
        <label className="cursor-pointer">
          <input
            type="file"
            multiple
            accept="image/*,video/*"
            className="hidden"
            onChange={(e) => handleUpload(e.target.files)}
          />
          <Button asChild disabled={isUploading}>
            <span>
              {isUploading ? (
                <Loader2 size={16} className="mr-2 animate-spin" />
              ) : (
                <Upload size={16} className="mr-2" />
              )}
              {isRTL ? 'رفع ملفات' : 'Upload Files'}
            </span>
          </Button>
        </label>
      </div>

      {/* Upload Drop Zone */}
      <Card 
        className={cn(
          "border-2 border-dashed transition-colors",
          dragOver ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20" : "border-gray-300 dark:border-gray-600"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <CardContent className="py-8">
          <div className="text-center">
            <FolderOpen className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {isRTL ? 'اسحب الملفات وأفلتها هنا أو' : 'Drag and drop files here or'}
            </p>
            <label className="cursor-pointer">
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                className="hidden"
                onChange={(e) => handleUpload(e.target.files)}
              />
              <span className="text-emerald-600 hover:text-emerald-700 cursor-pointer">
                {isRTL ? 'اختر من الجهاز' : 'browse from device'}
              </span>
            </label>
            <p className="mt-1 text-xs text-gray-500">
              {isRTL ? 'PNG, JPG, GIF, MP4 حتى 50MB' : 'PNG, JPG, GIF, MP4 up to 50MB'}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Search and View Toggle */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className={cn("absolute top-1/2 -translate-y-1/2 text-gray-400", isRTL ? "right-3" : "left-3")} size={18} />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={isRTL ? 'بحث عن ملف...' : 'Search files...'}
            className={cn(isRTL ? "pr-10" : "pl-10")}
          />
        </div>
        <div className="flex gap-2">
          <Button 
            variant={viewMode === 'grid' ? 'default' : 'outline'} 
            size="icon"
            onClick={() => setViewMode('grid')}
          >
            <Grid size={18} />
          </Button>
          <Button 
            variant={viewMode === 'list' ? 'default' : 'outline'} 
            size="icon"
            onClick={() => setViewMode('list')}
          >
            <List size={18} />
          </Button>
        </div>
      </div>

      {/* Files Grid/List */}
      {filteredFiles.length === 0 ? (
        <Card className="p-12 text-center">
          <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-4 text-gray-500">
            {searchTerm 
              ? (isRTL ? 'لا توجد نتائج' : 'No results found')
              : (isRTL ? 'لا توجد ملفات' : 'No files yet')
            }
          </p>
        </Card>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredFiles.map((file) => (
            <Card 
              key={file.url}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
              onClick={() => setSelectedFile(file)}
            >
              <div className="aspect-square bg-gray-100 dark:bg-gray-800 relative">
                {file.type === 'image' ? (
                  <img 
                    src={file.url} 
                    alt={file.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23666"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FileIcon type={file.type} />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button size="icon" variant="secondary" onClick={(e) => { e.stopPropagation(); copyUrl(file.url); }}>
                    <Copy size={14} />
                  </Button>
                  <Button size="icon" variant="secondary" onClick={(e) => { e.stopPropagation(); setDeleteConfirm(file); }}>
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
              <CardContent className="p-2">
                <p className="text-xs font-medium truncate">{file.name}</p>
                <p className="text-xs text-gray-500">{formatSize(file.size)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <div className="divide-y dark:divide-gray-700">
            {filteredFiles.map((file) => (
              <div 
                key={file.url}
                className="p-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                onClick={() => setSelectedFile(file)}
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center flex-shrink-0">
                  {file.type === 'image' ? (
                    <img src={file.url} alt={file.name} className="w-full h-full object-cover rounded" />
                  ) : (
                    <FileIcon type={file.type} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{file.name}</p>
                  <p className="text-sm text-gray-500">{formatSize(file.size)} • {file.uploadedAt}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" onClick={(e) => { e.stopPropagation(); copyUrl(file.url); }}>
                    <Copy size={16} />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={(e) => { e.stopPropagation(); setDeleteConfirm(file); }}>
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* File Preview Dialog */}
      <Dialog open={!!selectedFile} onOpenChange={() => setSelectedFile(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedFile?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {selectedFile?.type === 'image' ? (
              <img src={selectedFile.url} alt={selectedFile.name} className="max-h-96 mx-auto rounded-lg" />
            ) : selectedFile?.type === 'video' ? (
              <video src={selectedFile.url} controls className="max-h-96 mx-auto rounded-lg" />
            ) : (
              <div className="h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                <FileIcon type={selectedFile?.type || 'document'} />
              </div>
            )}
            <div className="flex items-center gap-2">
              <Input value={selectedFile?.url || ''} readOnly dir="ltr" />
              <Button onClick={() => copyUrl(selectedFile?.url || '')}>
                <Copy size={16} />
              </Button>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{formatSize(selectedFile?.size || 0)}</span>
              <span>{selectedFile?.uploadedAt}</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isRTL ? 'تأكيد الحذف' : 'Confirm Delete'}</DialogTitle>
            <DialogDescription>
              {isRTL 
                ? `هل أنت متأكد من حذف "${deleteConfirm?.name}"؟`
                : `Are you sure you want to delete "${deleteConfirm?.name}"?`
              }
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirm(null)}>
              {isRTL ? 'إلغاء' : 'Cancel'}
            </Button>
            <Button variant="destructive" onClick={() => deleteConfirm && handleDelete(deleteConfirm)}>
              {isRTL ? 'حذف' : 'Delete'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
