# بن وحكاية — Café Website

موقع كافيه عصري ومتجاوب: **React 19 + Vite + Tailwind CSS v4 + Framer Motion + Lucide**.

## التشغيل

```bash
npm install
npm run dev      # بيئة التطوير  → http://localhost:5173
npm run build    # نسخة الإنتاج في مجلد dist
npm run preview  # معاينة نسخة الإنتاج
```

يتطلب Node.js 18 أو أحدث.

## الهيكل

```
src/
├── components/
│   ├── layout/    Navbar (إخفاء ذكي + شريط تقدم) · MobileMenu · Footer
│   ├── sections/  Hero (Parallax) · About · Menu/ (تصفية) · Gallery · Testimonials · Reservation
│   └── ui/        Button · Container · Reveal · SectionTitle
├── data/          menu.js · links.js · testimonials.js
├── lib/utils.js   دالة cn()
├── App.jsx · main.jsx · index.css (ألوان الثيم والخطوط)
public/img/        صور SVG مؤقتة — استبدلها بصورك الحقيقية (WebP/AVIF)
```

## التخصيص

- **الألوان والخطوط:** بلوك `@theme` في `src/index.css`.
- **القائمة:** عدّل `src/data/menu.js` (الأصناف والتصنيفات والأسعار والصور).
- **الاسم والبيانات:** ابحث عن "بن وحكاية" في `Navbar` و`Footer` و`index.html`.
- **نموذج الحجز:** اربطه بخدمة حقيقية داخل `onSubmit` في `Reservation.jsx`.
- **اللغة الإنجليزية:** غيّر `dir="rtl" lang="ar"` في `index.html` وبدّل النصوص.
