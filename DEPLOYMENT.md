# TexaCore Deployment Guide for Hostinger

## 🚀 النشر على Hostinger

### الخطوة 1: بناء المشروع

```bash
npm run build
```

سيتم إنشاء مجلد `dist/` يحتوي على الملفات الجاهزة للنشر.

### الخطوة 2: تحضير الملفات

بعد البناء، تأكد من وجود:
- مجلد `dist/` - ملفات React المبنية
- مجلد `public/api/` - ملفات PHP للـ API
- مجلد `public/data/` - ملفات JSON للبيانات
- ملف `public/.htaccess` - إعدادات Apache

### الخطوة 3: رفع الملفات على Hostinger

1. افتح File Manager في لوحة تحكم Hostinger
2. انتقل إلى مجلد `public_html`
3. ارفع **جميع محتويات** مجلد `dist/`
4. ارفع مجلد `api/` من `public/api/`
5. ارفع مجلد `data/` من `public/data/`
6. ارفع ملف `.htaccess` من `public/.htaccess`

### الهيكل النهائي على السيرفر:

```
public_html/
├── index.html          ← من dist/
├── assets/             ← من dist/assets/
├── .htaccess           ← من public/.htaccess
├── api/
│   ├── config.php      ← إعدادات API
│   ├── auth.php        ← مصادقة الأدمن
│   ├── save.php        ← حفظ البيانات
│   ├── upload.php      ← رفع الصور
│   └── delete-image.php
├── data/
│   ├── hero.json
│   ├── features.json
│   ├── testimonials.json
│   ├── pricing.json
│   ├── faq.json
│   ├── footer.json
│   ├── settings.json
│   ├── trust.json
│   ├── stats.json
│   ├── solutions.json
│   ├── pages.json
│   └── news.json
└── uploads/
    └── images/         ← للصور المرفوعة
```

### الخطوة 4: إعداد كلمة سر الأدمن

**مهم جداً:** قبل النشر، قم بتغيير كلمة السر في ملف `api/config.php`:

```php
define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD_HASH', password_hash('كلمة_السر_الجديدة', PASSWORD_DEFAULT));
define('JWT_SECRET', 'مفتاح_سري_طويل_وعشوائي');
```

لإنشاء كلمة سر مشفرة:
1. افتح أي أداة PHP عبر الإنترنت
2. نفذ: `echo password_hash('كلمة_السر', PASSWORD_DEFAULT);`
3. انسخ النتيجة إلى `ADMIN_PASSWORD_HASH`

### الخطوة 5: صلاحيات المجلدات

تأكد من صلاحيات الكتابة على:
- `data/` → 755 أو 775
- `uploads/` → 755 أو 775
- `uploads/images/` → 755 أو 775

في Hostinger File Manager:
1. انقر بزر الماوس الأيمن على المجلد
2. اختر "Permissions"
3. اضبط على 755

---

## 🔐 الوصول لتسجيل الدخول

**رابط لوحة التحكم:**
```
https://your-domain.com/admin/login
```

**بيانات الدخول الافتراضية (في وضع التطوير):**
- اسم المستخدم: `admin`
- كلمة السر: `admin`

**في الإنتاج:**
استخدم البيانات المحددة في `config.php`

---

## 📝 ملاحظات مهمة

### حول الأمان:
1. **لا تنس** تغيير كلمة السر قبل النشر
2. **لا تشارك** ملف `config.php`
3. ملف `.htaccess` يحمي `config.php` تلقائياً

### حول التعديلات:
- التعديلات من لوحة التحكم تُحفظ في ملفات JSON
- الموقع يقرأ من ملفات JSON مباشرة
- لا حاجة لقاعدة بيانات خارجية

### حول الصور:
- الصور تُرفع إلى `uploads/images/`
- الحجم الأقصى: 5 ميجابايت
- الأنواع المسموحة: JPG, PNG, GIF, WebP, SVG

---

## 🛠️ استكشاف الأخطاء

### المشكلة: صفحات 404
**الحل:** تأكد من رفع ملف `.htaccess` بشكل صحيح

### المشكلة: API لا يعمل
**الحل:** 
1. تأكد من دعم PHP 7.4+ على استضافتك
2. تحقق من صلاحيات مجلد `data/`

### المشكلة: الصور لا تُرفع
**الحل:**
1. تحقق من صلاحيات مجلد `uploads/images/`
2. تأكد من إعدادات `upload_max_filesize` في PHP

### المشكلة: تسجيل الدخول لا يعمل
**الحل:**
1. تأكد من كلمة السر في `config.php`
2. امسح cache المتصفح

---

## 📞 الدعم

للمساعدة في النشر أو أي مشاكل تقنية، تواصل مع:
- فريق Next Revolution للتطوير
