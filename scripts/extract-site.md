# 🚀 دليل استخراج موقع منفرد للاستضافة المستقلة

## 📋 الخطوات الأساسية

### 1. إنشاء نسخة من المشروع
```bash
cp -r texafab-platform my-client-site
cd my-client-site
```

### 2. تحديد الموقع المطلوب
اختر الموقع الذي تريد استخراجه:
- `texafab` - نظام TexaFab ERP
- `fincore` - منصة FinCore Banking  
- `dubai-stroy` - موقع Dubai Stroy للبناء
- `nextrev` - موقع Next Revolution

---

## 📁 ملفات كل موقع

### TexaFab ERP
```
الملفات المطلوبة:
├── src/routes/texafab.routes.tsx
├── src/pages/
│   ├── FeaturesPage.tsx
│   ├── PricingPage.tsx
│   ├── ContactPage.tsx
│   ├── ...جميع صفحات TexaFab
├── src/components/landing/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── ...جميع مكونات Landing
├── src/lib/i18n/translations/sites/texafab/
├── public/data/
│   ├── hero.json
│   ├── features.json
│   ├── pricing.json
│   └── ...

الملفات للحذف:
├── src/pages/fincore/
├── src/pages/dubai-stroy/
├── src/pages/nextrev/
├── src/components/fincore/
├── src/components/dubai-stroy/
├── src/components/nextrev/
├── src/routes/fincore.routes.tsx
├── src/routes/dubai-stroy.routes.tsx
├── src/routes/nextrev.routes.tsx
├── public/data/dubai-stroy/
```

### FinCore Banking
```
الملفات المطلوبة:
├── src/routes/fincore.routes.tsx
├── src/pages/fincore/
├── src/components/fincore/
├── src/lib/i18n/translations/sites/fincore/

الملفات للحذف:
├── src/pages/ (باستثناء fincore)
├── src/components/landing/
├── src/components/dubai-stroy/
├── src/components/nextrev/
├── src/routes/texafab.routes.tsx
├── src/routes/dubai-stroy.routes.tsx
├── src/routes/nextrev.routes.tsx
```

### Dubai Stroy
```
الملفات المطلوبة:
├── src/routes/dubai-stroy.routes.tsx
├── src/pages/dubai-stroy/
├── src/components/dubai-stroy/
├── src/lib/i18n/translations/sites/dubai-stroy/
├── public/data/dubai-stroy/

الملفات للحذف:
├── src/pages/ (باستثناء dubai-stroy)
├── src/pages/fincore/
├── src/components/landing/
├── src/components/fincore/
├── src/components/nextrev/
├── src/routes/texafab.routes.tsx
├── src/routes/fincore.routes.tsx
├── src/routes/nextrev.routes.tsx
```

### Next Revolution
```
الملفات المطلوبة:
├── src/routes/nextrev.routes.tsx
├── src/pages/nextrev/
├── src/components/nextrev/
├── src/lib/i18n/translations/sites/nextrev/

الملفات للحذف:
├── src/pages/ (باستثناء nextrev)
├── src/pages/dubai-stroy/
├── src/pages/fincore/
├── src/components/landing/
├── src/components/dubai-stroy/
├── src/components/fincore/
├── src/routes/texafab.routes.tsx
├── src/routes/dubai-stroy.routes.tsx
├── src/routes/fincore.routes.tsx
```

---

## 🔧 تعديل App.tsx بعد الاستخراج

### مثال: TexaFab فقط
```tsx
// App.tsx المُعدّل
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// فقط صفحات TexaFab
const Home = lazy(() => import("@/components/home"));
const FeaturesPage = lazy(() => import("@/pages/FeaturesPage"));
// ... باقي الصفحات

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<FeaturesPage />} />
      {/* ... باقي المسارات */}
    </Routes>
  );
}

export default App;
```

### مثال: FinCore فقط
```tsx
// App.tsx المُعدّل
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// فقط صفحات FinCore
const FCHomePage = lazy(() => import("@/pages/fincore/FCHomePage"));
const FCFeaturesPage = lazy(() => import("@/pages/fincore/FCFeaturesPage"));
// ... باقي الصفحات

function App() {
  return (
    <Routes>
      <Route path="/" element={<FCHomePage />} />
      <Route path="/features" element={<FCFeaturesPage />} />
      {/* ... باقي المسارات */}
    </Routes>
  );
}

export default App;
```

---

## 📦 الملفات المشتركة (يجب الإبقاء عليها)

```
├── src/components/ui/           # مكونات ShadCN
├── src/lib/utils.ts             # أدوات مساعدة
├── src/index.css               # الأنماط الأساسية
├── src/styles/                  # أنماط إضافية
├── tailwind.config.js          # إعدادات Tailwind
├── vite.config.ts              # إعدادات Vite
├── tsconfig.json               # إعدادات TypeScript
├── package.json                # الاعتماديات
├── index.html                  # صفحة HTML الرئيسية
```

---

## ⚠️ ملاحظات هامة

1. **لوحة التحكم (Admin):** 
   - يمكن تضمينها أو استثناؤها حسب الحاجة
   - إذا أردت تضمينها، احتفظ بـ `src/admin/` و `src/routes/admin.routes.tsx`

2. **المكونات المشتركة:**
   - `src/components/ui/` مطلوب لجميع المواقع
   - لا تحذف هذا المجلد

3. **الترجمات:**
   - احتفظ فقط بترجمات الموقع المستخرج
   - `src/lib/i18n/translations/sites/[site-name]/`

4. **البيانات:**
   - `public/data/` للمواقع الأساسية
   - `public/data/[site-name]/` للمواقع الفرعية

5. **بعد الاستخراج:**
   ```bash
   npm install        # تثبيت الاعتماديات
   npm run dev        # تشغيل الخادم المحلي
   npm run build      # بناء للإنتاج
   ```

---

## 🎯 مثال عملي: استخراج Dubai Stroy

```bash
# 1. نسخ المشروع
cp -r texafab-platform dubai-stroy-site
cd dubai-stroy-site

# 2. حذف المجلدات غير المطلوبة
rm -rf src/pages/fincore
rm -rf src/pages/nextrev
rm -rf src/components/fincore
rm -rf src/components/nextrev
rm -rf src/components/landing
rm -rf src/routes/texafab.routes.tsx
rm -rf src/routes/fincore.routes.tsx
rm -rf src/routes/nextrev.routes.tsx
rm -rf src/lib/i18n/translations/sites/texafab
rm -rf src/lib/i18n/translations/sites/fincore
rm -rf src/lib/i18n/translations/sites/nextrev

# 3. حذف صفحات TexaFab الرئيسية
rm -f src/pages/FeaturesPage.tsx
rm -f src/pages/PricingPage.tsx
# ... وباقي صفحات TexaFab

# 4. تعديل App.tsx (يدوياً)

# 5. تعديل المسارات لتبدأ من الجذر
# مثال: /dubai-stroy -> /
#        /dubai-stroy/portfolio -> /portfolio

# 6. اختبار المشروع
npm run dev
```

---

## 📞 للمساعدة

إذا واجهت أي مشاكل في الاستخراج، يمكنك:
1. فتح issue على GitHub
2. التواصل مع فريق التطوير
3. مراجعة ملفات المسارات في `src/routes/`

---

**ملاحظة:** هذا الدليل للاستخدام اليدوي. للأتمتة الكاملة، يمكن إنشاء سكريبت Node.js أو Bash.
