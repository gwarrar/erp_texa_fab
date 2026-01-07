import React, { useState, useEffect } from 'react';
import {
  Search,
  UserPlus,
  MoreHorizontal,
  Edit,
  Trash2,
  Mail,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Eye,
  X,
  Check,
  Crown,
  Users,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { ContentManager } from '@/admin/types';
import { useI18n } from '@/lib/i18n';

const ROLES = {
  super_admin: { 
    label: { en: 'Super Admin', ar: 'المدير العام' }, 
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    icon: Crown
  },
  admin: { 
    label: { en: 'Admin', ar: 'مدير' }, 
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    icon: ShieldCheck
  },
  editor: { 
    label: { en: 'Editor', ar: 'محرر' }, 
    color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    icon: Edit
  },
  viewer: { 
    label: { en: 'Viewer', ar: 'مشاهد' }, 
    color: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400',
    icon: Eye
  },
};

const PERMISSIONS = [
  { id: 'cms_edit', label: { en: 'Edit CMS Content', ar: 'تحرير المحتوى' } },
  { id: 'pricing_edit', label: { en: 'Edit Pricing', ar: 'تحرير الأسعار' } },
  { id: 'seo_edit', label: { en: 'Edit SEO', ar: 'تحرير SEO' } },
  { id: 'analytics_view', label: { en: 'View Analytics', ar: 'عرض التحليلات' } },
  { id: 'settings_edit', label: { en: 'Edit Settings', ar: 'تحرير الإعدادات' } },
  { id: 'managers_edit', label: { en: 'Manage Team', ar: 'إدارة الفريق' } },
];

const initialManagerForm: Omit<ContentManager, 'id' | 'createdAt'> = {
  fullName: '',
  email: '',
  role: 'editor',
  permissions: ['cms_edit'],
  isActive: true,
  lastLogin: undefined,
};

export function ContentManagersPage() {
  const { t, isRTL, language } = useI18n();
  const [managers, setManagers] = useState<ContentManager[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedManager, setSelectedManager] = useState<ContentManager | null>(null);
  const [managerForm, setManagerForm] = useState(initialManagerForm);
  const [isSaving, setIsSaving] = useState(false);

  // Load managers from localStorage
  useEffect(() => {
    const savedManagers = localStorage.getItem('texacore_content_managers');
    if (savedManagers) {
      try {
        setManagers(JSON.parse(savedManagers));
      } catch (e) {
        console.error('Failed to load managers:', e);
      }
    } else {
      // Initialize with the main admin from env
      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'admin@texacore.com';
      const initialAdmin: ContentManager = {
        id: '1',
        fullName: 'Main Administrator',
        email: adminEmail,
        role: 'super_admin',
        permissions: PERMISSIONS.map(p => p.id),
        isActive: true,
        createdAt: new Date().toISOString().split('T')[0],
        lastLogin: new Date().toISOString().split('T')[0],
      };
      setManagers([initialAdmin]);
      localStorage.setItem('texacore_content_managers', JSON.stringify([initialAdmin]));
    }
  }, []);

  // Save managers to localStorage
  const saveManagers = (updatedManagers: ContentManager[]) => {
    setManagers(updatedManagers);
    localStorage.setItem('texacore_content_managers', JSON.stringify(updatedManagers));
  };

  const filteredManagers = managers.filter((manager) => {
    const matchesSearch =
      manager.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      manager.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'all' || manager.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const getRoleBadge = (role: keyof typeof ROLES) => {
    const roleData = ROLES[role];
    const Icon = roleData.icon;
    return (
      <Badge className={`${roleData.color} flex items-center gap-1`}>
        <Icon className="h-3 w-3" />
        {roleData.label[language as 'en' | 'ar'] || roleData.label.en}
      </Badge>
    );
  };

  const handleAddManager = () => {
    setIsSaving(true);
    const newManager: ContentManager = {
      ...managerForm,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    saveManagers([...managers, newManager]);
    setIsAddDialogOpen(false);
    setManagerForm(initialManagerForm);
    setIsSaving(false);
  };

  const handleEditManager = () => {
    if (!selectedManager) return;
    setIsSaving(true);
    const updatedManagers = managers.map((m) =>
      m.id === selectedManager.id ? { ...selectedManager, ...managerForm } : m
    );
    saveManagers(updatedManagers);
    setIsEditDialogOpen(false);
    setSelectedManager(null);
    setManagerForm(initialManagerForm);
    setIsSaving(false);
  };

  const handleDeleteManager = () => {
    if (!selectedManager) return;
    // Prevent deleting super admin
    if (selectedManager.role === 'super_admin') {
      alert(isRTL ? 'لا يمكن حذف المدير العام' : 'Cannot delete Super Admin');
      return;
    }
    const updatedManagers = managers.filter((m) => m.id !== selectedManager.id);
    saveManagers(updatedManagers);
    setIsDeleteDialogOpen(false);
    setSelectedManager(null);
  };

  const openEditDialog = (manager: ContentManager) => {
    setSelectedManager(manager);
    setManagerForm({
      fullName: manager.fullName,
      email: manager.email,
      role: manager.role,
      permissions: manager.permissions,
      isActive: manager.isActive,
      lastLogin: manager.lastLogin,
    });
    setIsEditDialogOpen(true);
  };

  const togglePermission = (permissionId: string) => {
    setManagerForm((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permissionId)
        ? prev.permissions.filter((p) => p !== permissionId)
        : [...prev.permissions, permissionId],
    }));
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {isRTL ? 'مدراء المحتوى' : 'Content Managers'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {isRTL 
              ? 'إدارة فريق تحرير المحتوى والصلاحيات'
              : 'Manage your content editing team and permissions'}
          </p>
        </div>
        <Button
          onClick={() => {
            setManagerForm(initialManagerForm);
            setIsAddDialogOpen(true);
          }}
          className="bg-teal-600 hover:bg-teal-700"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          {isRTL ? 'إضافة مدير' : 'Add Manager'}
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Crown className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{managers.filter(m => m.role === 'super_admin').length}</p>
                <p className="text-sm text-gray-500">{isRTL ? 'مدير عام' : 'Super Admin'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{managers.filter(m => m.role === 'admin').length}</p>
                <p className="text-sm text-gray-500">{isRTL ? 'مدراء' : 'Admins'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30">
                <Edit className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{managers.filter(m => m.role === 'editor').length}</p>
                <p className="text-sm text-gray-500">{isRTL ? 'محررين' : 'Editors'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-900/30">
                <Users className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{managers.length}</p>
                <p className="text-sm text-gray-500">{isRTL ? 'إجمالي الفريق' : 'Total Team'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder={isRTL ? 'البحث بالاسم أو البريد...' : 'Search by name or email...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder={isRTL ? 'جميع الأدوار' : 'All Roles'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{isRTL ? 'جميع الأدوار' : 'All Roles'}</SelectItem>
                <SelectItem value="super_admin">{isRTL ? 'مدير عام' : 'Super Admin'}</SelectItem>
                <SelectItem value="admin">{isRTL ? 'مدير' : 'Admin'}</SelectItem>
                <SelectItem value="editor">{isRTL ? 'محرر' : 'Editor'}</SelectItem>
                <SelectItem value="viewer">{isRTL ? 'مشاهد' : 'Viewer'}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Managers Table */}
      <Card>
        <CardContent className="p-0">
          {filteredManagers.length === 0 ? (
            <div className="text-center py-16">
              <Users className="h-16 w-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {isRTL ? 'لا يوجد مدراء' : 'No Managers Found'}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {searchQuery || roleFilter !== 'all'
                  ? isRTL ? 'لا يوجد نتائج مطابقة للبحث' : 'No managers match your search criteria.'
                  : isRTL ? 'أضف مدير محتوى جديد' : 'Add a new content manager to get started.'}
              </p>
              {!searchQuery && roleFilter === 'all' && (
                <Button
                  onClick={() => {
                    setManagerForm(initialManagerForm);
                    setIsAddDialogOpen(true);
                  }}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  {isRTL ? 'إضافة أول مدير' : 'Add First Manager'}
                </Button>
              )}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{isRTL ? 'المدير' : 'Manager'}</TableHead>
                  <TableHead>{isRTL ? 'البريد الإلكتروني' : 'Email'}</TableHead>
                  <TableHead>{isRTL ? 'الدور' : 'Role'}</TableHead>
                  <TableHead>{isRTL ? 'الصلاحيات' : 'Permissions'}</TableHead>
                  <TableHead>{isRTL ? 'الحالة' : 'Status'}</TableHead>
                  <TableHead>{isRTL ? 'آخر دخول' : 'Last Login'}</TableHead>
                  <TableHead className="w-[80px]">{isRTL ? 'إجراءات' : 'Actions'}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredManagers.map((manager) => (
                  <TableRow key={manager.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-medium">
                          {manager.fullName.charAt(0)}
                        </div>
                        <span className="font-medium">{manager.fullName}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        {manager.email}
                      </div>
                    </TableCell>
                    <TableCell>{getRoleBadge(manager.role)}</TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-500">
                        {manager.permissions.length} {isRTL ? 'صلاحية' : 'permissions'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          manager.isActive
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }
                      >
                        {manager.isActive 
                          ? (isRTL ? 'نشط' : 'Active') 
                          : (isRTL ? 'معطل' : 'Inactive')}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-500">
                      {manager.lastLogin || '-'}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>{isRTL ? 'إجراءات' : 'Actions'}</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => openEditDialog(manager)}>
                            <Edit className="h-4 w-4 mr-2" />
                            {isRTL ? 'تعديل' : 'Edit'}
                          </DropdownMenuItem>
                          {manager.role !== 'super_admin' && (
                            <DropdownMenuItem
                              className="text-red-600"
                              onClick={() => {
                                setSelectedManager(manager);
                                setIsDeleteDialogOpen(true);
                              }}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              {isRTL ? 'حذف' : 'Delete'}
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Add Manager Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{isRTL ? 'إضافة مدير محتوى جديد' : 'Add New Content Manager'}</DialogTitle>
            <DialogDescription>
              {isRTL 
                ? 'أضف عضو جديد لفريق إدارة المحتوى'
                : 'Add a new member to your content management team'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>{isRTL ? 'الاسم الكامل' : 'Full Name'}</Label>
              <Input
                value={managerForm.fullName}
                onChange={(e) => setManagerForm({ ...managerForm, fullName: e.target.value })}
                placeholder={isRTL ? 'أدخل الاسم' : 'Enter name'}
              />
            </div>
            <div className="space-y-2">
              <Label>{isRTL ? 'البريد الإلكتروني' : 'Email'}</Label>
              <Input
                type="email"
                value={managerForm.email}
                onChange={(e) => setManagerForm({ ...managerForm, email: e.target.value })}
                placeholder={isRTL ? 'أدخل البريد الإلكتروني' : 'Enter email'}
              />
            </div>
            <div className="space-y-2">
              <Label>{isRTL ? 'الدور' : 'Role'}</Label>
              <Select
                value={managerForm.role}
                onValueChange={(value: any) => setManagerForm({ ...managerForm, role: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">{isRTL ? 'مدير' : 'Admin'}</SelectItem>
                  <SelectItem value="editor">{isRTL ? 'محرر' : 'Editor'}</SelectItem>
                  <SelectItem value="viewer">{isRTL ? 'مشاهد' : 'Viewer'}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{isRTL ? 'الصلاحيات' : 'Permissions'}</Label>
              <div className="grid grid-cols-2 gap-2">
                {PERMISSIONS.map((permission) => (
                  <label
                    key={permission.id}
                    className="flex items-center gap-2 p-2 rounded border cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <input
                      type="checkbox"
                      checked={managerForm.permissions.includes(permission.id)}
                      onChange={() => togglePermission(permission.id)}
                      className="rounded"
                    />
                    <span className="text-sm">
                      {permission.label[language as 'en' | 'ar'] || permission.label.en}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              {isRTL ? 'إلغاء' : 'Cancel'}
            </Button>
            <Button onClick={handleAddManager} disabled={isSaving} className="bg-teal-600 hover:bg-teal-700">
              {isSaving ? (isRTL ? 'جاري الحفظ...' : 'Saving...') : (isRTL ? 'إضافة' : 'Add')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Manager Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{isRTL ? 'تعديل مدير المحتوى' : 'Edit Content Manager'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>{isRTL ? 'الاسم الكامل' : 'Full Name'}</Label>
              <Input
                value={managerForm.fullName}
                onChange={(e) => setManagerForm({ ...managerForm, fullName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>{isRTL ? 'البريد الإلكتروني' : 'Email'}</Label>
              <Input
                type="email"
                value={managerForm.email}
                onChange={(e) => setManagerForm({ ...managerForm, email: e.target.value })}
                disabled={selectedManager?.role === 'super_admin'}
              />
            </div>
            <div className="space-y-2">
              <Label>{isRTL ? 'الدور' : 'Role'}</Label>
              <Select
                value={managerForm.role}
                onValueChange={(value: any) => setManagerForm({ ...managerForm, role: value })}
                disabled={selectedManager?.role === 'super_admin'}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {selectedManager?.role === 'super_admin' && (
                    <SelectItem value="super_admin">{isRTL ? 'مدير عام' : 'Super Admin'}</SelectItem>
                  )}
                  <SelectItem value="admin">{isRTL ? 'مدير' : 'Admin'}</SelectItem>
                  <SelectItem value="editor">{isRTL ? 'محرر' : 'Editor'}</SelectItem>
                  <SelectItem value="viewer">{isRTL ? 'مشاهد' : 'Viewer'}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{isRTL ? 'الصلاحيات' : 'Permissions'}</Label>
              <div className="grid grid-cols-2 gap-2">
                {PERMISSIONS.map((permission) => (
                  <label
                    key={permission.id}
                    className="flex items-center gap-2 p-2 rounded border cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <input
                      type="checkbox"
                      checked={managerForm.permissions.includes(permission.id)}
                      onChange={() => togglePermission(permission.id)}
                      className="rounded"
                      disabled={selectedManager?.role === 'super_admin'}
                    />
                    <span className="text-sm">
                      {permission.label[language as 'en' | 'ar'] || permission.label.en}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={managerForm.isActive}
                onChange={(e) => setManagerForm({ ...managerForm, isActive: e.target.checked })}
                disabled={selectedManager?.role === 'super_admin'}
                className="rounded"
              />
              <Label>{isRTL ? 'الحساب نشط' : 'Account Active'}</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              {isRTL ? 'إلغاء' : 'Cancel'}
            </Button>
            <Button onClick={handleEditManager} disabled={isSaving} className="bg-teal-600 hover:bg-teal-700">
              {isSaving ? (isRTL ? 'جاري الحفظ...' : 'Saving...') : (isRTL ? 'حفظ' : 'Save')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{isRTL ? 'تأكيد الحذف' : 'Confirm Delete'}</AlertDialogTitle>
            <AlertDialogDescription>
              {isRTL
                ? `هل أنت متأكد من حذف "${selectedManager?.fullName}"؟ هذا الإجراء لا يمكن التراجع عنه.`
                : `Are you sure you want to delete "${selectedManager?.fullName}"? This action cannot be undone.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{isRTL ? 'إلغاء' : 'Cancel'}</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteManager}
              className="bg-red-600 hover:bg-red-700"
            >
              {isRTL ? 'حذف' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
