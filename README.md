# QRMenü — Dijital Restoran Menü Sistemi

Modern, mobil öncelikli QR menü SaaS uygulaması. Cloudflare Pages'e deploy edilmek üzere optimize edilmiştir.

## 🚀 Hızlı Başlangıç

```bash
npm install
npm run dev
```

## 📁 Klasör Yapısı

```
src/
  components/       # Yeniden kullanılabilir UI bileşenleri
    Navbar.jsx        – Ana sayfa navigasyonu
    CategoryNav.jsx   – Yapışkan kategori filtresi
    ProductCard.jsx   – Menü ürün kartı (lazy image + skeleton)
    RestaurantHeader.jsx – Restoran hero bölümü
    QRCodeSection.jsx  – QR kod paylaşım alanı
    Footer.jsx
  pages/
    HomePage.jsx      – Landing page (/  )
    MenuPage.jsx      – Menü sayfası (/menu/:slug)
    NotFoundPage.jsx  – 404
  data/
    index.js          – Slug → JSON registry (Supabase'e geçiş noktası)
    demo-cafe.json    – Demo Cafe menü verisi
    istanbul-kebap.json
  layouts/
    MainLayout.jsx    – Header + Footer sarmalayıcı
  hooks/
    useMenu.js        – Menü veri fetch hook'u
    useLazyImage.js   – IntersectionObserver ile lazy image
  App.jsx             – Router + Dark mode context
  main.jsx
  index.css           – Tailwind + özel stiller
```

## 🍽 Yeni Restoran Eklemek

1. `src/data/<slug>.json` oluşturun (demo-cafe.json şablonunu kullanın)
2. `src/data/index.js` dosyasına import edin ve registry'ye ekleyin:
   ```js
   import yeniRestoran from './yeni-restoran.json'
   const registry = { ..., 'yeni-restoran': yeniRestoran }
   ```
3. Menü URL'si: `/menu/yeni-restoran`

## 🌙 Özellikler

- ✅ Karanlık mod (sistem + manuel)
- ✅ Türkçe arayüz ve Türk Lirası formatı
- ✅ "Popüler" / "Yeni" kampanya etiketleri
- ✅ WhatsApp ve Instagram entegrasyonu
- ✅ Çalışma saatleri
- ✅ Lazy image loading + skeleton states
- ✅ Yapışkan kategori navigasyonu (mobile)
- ✅ SEO meta etiketleri
- ✅ QR kod paylaşım bölümü

## ☁️ Cloudflare Pages Deploy

1. GitHub'a push edin
2. Cloudflare Pages'de yeni proje oluşturun
3. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. `public/_redirects` dosyası SPA routing'i otomatik yönetir

## 🔄 Supabase'e Geçiş

`src/data/index.js` dosyasındaki `getMenuBySlug` fonksiyonunu Supabase sorgusuyla değiştirin:

```js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export async function getMenuBySlug(slug) {
  const { data, error } = await supabase
    .from('restaurants')
    .select('*, categories(*, items(*))')
    .eq('slug', slug)
    .single()
  if (error) return null
  return data
}
```

Bileşenler aynı veri şemasını beklediğinden başka değişiklik gerekmez.

## 📦 Bağımlılıklar

| Paket | Versiyon | Açıklama |
|-------|----------|----------|
| React | 18 | UI framework |
| React Router | 6 | Sayfa yönlendirme |
| Vite | 5 | Build tool |
| TailwindCSS | 3 | Utility-first CSS |

## 🎨 Tasarım Kararları

- **Renk paleti:** Brand orange (#f97316) — sıcak, iştah açıcı
- **Tipografi:** Playfair Display (başlıklar) + DM Sans (gövde)
- **Kartlar:** Yuvarlatılmış köşeler, hover lift animasyonu
- **Mobil:** Bottom safe area, tek elle kullanım odaklı
