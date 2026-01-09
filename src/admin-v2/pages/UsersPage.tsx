// ===========================================
// Admin V2 - Users Management Page
// ===========================================

import React, { useState } from 'react';
import { useAdmin } from '../context/AdminStore';
import { cn } from '@/lib/utils';
import {
  Users,
  UserPlus,
  Shield,
  Edit,
  Trash2,
  MoreVertical,
  Search,
  Mail,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin' | 'editor';
  status: 'active' | 'inactive';
  lastLogin: string;
  createdAt: string;
}

export function UsersPage() {
  const { getDirection, user: currentUser } = useAdmin();
  const direction = getDirection();
  const isRTL = direction === 'rtl';

  const [searchQuery, setSearchQuery] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'editor' as User['role'] });

  // Mock users data
  const [users] = useState<User[]>([
    {
      id: '1',
      name: 'Administrator',
      email: currentUser?.email || 'admin@example.com',
      role: 'super_admin',
      status: 'active',
      lastLogin: new Date().toISOString(),
      createdAt: '2024-01-01T00:00:00Z'
    },
    {
      id: '2',
      name: 'John Editor',
      email: 'john@example.com',
      role: 'editor',
      status: 'active',
      lastLogin: '2024-12-10T10:30:00Z',
      createdAt: '2024-03-15T00:00:00Z'
    },
    {
      id: '3',
      name: 'Sarah Manager',
      email: 'sarah@example.com',
      role: 'admin',
      status: 'inactive',
      lastLogin: '2024-11-20T14:00:00Z',
      createdAt: '2024-05-20T00:00:00Z'
    }
  ]);

  const getRoleBadge = (role: User['role']) => {
    switch (role) {
      case 'super_admin':
        return <Badge className="bg-purple-500">{isRTL ? 'مدير عام' : 'Super Admin'}</Badge>;
      case 'admin':
        return <Badge className="bg-blue-500">{isRTL ? 'مدير' : 'Admin'}</Badge>;
      default:
        return <Badge variant="secondary">{isRTL ? 'محرر' : 'Editor'}</Badge>;
    }
  };

  const getStatusBadge = (status: User['status']) => {
    return status === 'active' 
      ? <Badge className="bg-emerald-500">{isRTL ? 'نشط' : 'Active'}</Badge>
      : <Badge variant="outline" className="text-gray-500">{isRTL ? 'غير نشط' : 'Inactive'}</Badge>;
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) {
      toast.error(isRTL ? 'الرجاء ملء جميع الحقول' : 'Please fill all fields');
      return;
    }
    
    toast.success(isRTL ? 'تم إرسال دعوة للمستخدم' : 'Invitation sent to user');
    setIsAddDialogOpen(false);
    setNewUser({ name: '', email: '', role: 'editor' });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Users size={28} />
            {isRTL ? 'إدارة المستخدمين' : 'User Management'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {isRTL ? 'إدارة المستخدمين وصلاحياتهم' : 'Manage users and their permissions'}
          </p>
        </div>
        
        <Button 
          className="gap-2 bg-emerald-600 hover:bg-emerald-700"
          onClick={() => setIsAddDialogOpen(true)}
        >
          <UserPlus size={18} />
          {isRTL ? 'إضافة مستخدم' : 'Add User'}
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Users size={20} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{isRTL ? 'إجمالي المستخدمين' : 'Total Users'}</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{users.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <Shield size={20} className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{isRTL ? 'المديرون' : 'Admins'}</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {users.filter(u => u.role === 'admin' || u.role === 'super_admin').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Edit size={20} className="text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{isRTL ? 'المحررون' : 'Editors'}</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {users.filter(u => u.role === 'editor').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search size={18} className={cn(
          "absolute top-1/2 -translate-y-1/2 text-gray-400",
          isRTL ? "right-3" : "left-3"
        )} />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={isRTL ? 'البحث عن مستخدم...' : 'Search users...'}
          className={cn(isRTL ? "pr-10" : "pl-10")}
        />
      </div>

      {/* Users Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className={cn(
                    "p-4 text-sm font-medium text-gray-500",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    {isRTL ? 'المستخدم' : 'User'}
                  </th>
                  <th className={cn(
                    "p-4 text-sm font-medium text-gray-500",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    {isRTL ? 'الدور' : 'Role'}
                  </th>
                  <th className={cn(
                    "p-4 text-sm font-medium text-gray-500",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    {isRTL ? 'الحالة' : 'Status'}
                  </th>
                  <th className={cn(
                    "p-4 text-sm font-medium text-gray-500",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    {isRTL ? 'آخر تسجيل دخول' : 'Last Login'}
                  </th>
                  <th className="p-4 text-sm font-medium text-gray-500 w-12"></th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                          <span className="font-bold text-emerald-600 dark:text-emerald-400">
                            {user.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">{getRoleBadge(user.role)}</td>
                    <td className="p-4">{getStatusBadge(user.status)}</td>
                    <td className="p-4">
                      <span className="text-sm text-gray-500">
                        {new Date(user.lastLogin).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="p-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align={isRTL ? 'start' : 'end'}>
                          <DropdownMenuItem className="gap-2">
                            <Edit size={14} />
                            {isRTL ? 'تعديل' : 'Edit'}
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <Mail size={14} />
                            {isRTL ? 'إرسال بريد' : 'Send Email'}
                          </DropdownMenuItem>
                          {user.role !== 'super_admin' && (
                            <DropdownMenuItem className="gap-2 text-red-500">
                              <Trash2 size={14} />
                              {isRTL ? 'حذف' : 'Delete'}
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Add User Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isRTL ? 'إضافة مستخدم جديد' : 'Add New User'}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>{isRTL ? 'الاسم' : 'Name'}</Label>
              <Input
                value={newUser.name}
                onChange={(e) => setNewUser(prev => ({ ...prev, name: e.target.value }))}
                placeholder={isRTL ? 'أدخل الاسم' : 'Enter name'}
              />
            </div>
            
            <div className="space-y-2">
              <Label>{isRTL ? 'البريد الإلكتروني' : 'Email'}</Label>
              <Input
                type="email"
                value={newUser.email}
                onChange={(e) => setNewUser(prev => ({ ...prev, email: e.target.value }))}
                placeholder={isRTL ? 'أدخل البريد الإلكتروني' : 'Enter email'}
                dir="ltr"
              />
            </div>
            
            <div className="space-y-2">
              <Label>{isRTL ? 'الدور' : 'Role'}</Label>
              <select
                value={newUser.role}
                onChange={(e) => setNewUser(prev => ({ ...prev, role: e.target.value as User['role'] }))}
                className="w-full h-10 px-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              >
                <option value="editor">{isRTL ? 'محرر' : 'Editor'}</option>
                <option value="admin">{isRTL ? 'مدير' : 'Admin'}</option>
              </select>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              {isRTL ? 'إلغاء' : 'Cancel'}
            </Button>
            <Button onClick={handleAddUser} className="bg-emerald-600 hover:bg-emerald-700">
              {isRTL ? 'إرسال دعوة' : 'Send Invitation'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
