import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

// ─── Feature cards data ───────────────────────────────────────────────────────
const FEATURES = [
  { icon: '📱', title: 'Mobil Öncelikli', desc: 'Her ekran boyutunda mükemmel görünen, parmak dostu tasarım.' },
  { icon: '⚡', title: 'Hızlı Yükleme',  desc: 'Statik dosyalar sayesinde anında açılan, Cloudflare CDN destekli.' },
  { icon: '🌙', title: 'Karanlık Mod',   desc: 'Otomatik veya manuel karanlık mod, gece rahat okuma.' },
  { icon: '🏷️', title: 'Kampanya Etiketleri', desc: '"Yeni" ve "Popüler" etiketleri ile ürünlerinizi öne çıkarın.' },
  { icon: '🔗', title: 'Sosyal Medya',   desc: 'WhatsApp ve Instagram entegrasyonu ile müşterilerinize ulaşın.' },
  { icon: '🕐', title: 'Çalışma Saatleri', desc: 'Çalışma saatlerinizi menünüzde kolayca gösterin.' },
]

const STEPS = [
  { step: '01', title: 'Menünüzü Oluşturun', desc: 'JSON dosyasını düzenleyerek kategoriler ve ürünler ekleyin.' },
  { step: '02', title: 'QR Kod Alın',         desc: 'Restoranınıza ait benzersiz QR kodunuzu indirin.' },
  { step: '03', title: 'Masaya Yapıştırın',   desc: 'QR kodu masalara veya vitrine yapıştırın, hazır!' },
]

const PLANS = [
  {
    name: 'Başlangıç',
    price: 'Ücretsiz',
    period: '',
    features: ['1 Restoran', 'Sınırsız Ürün', 'QR Kod', 'WhatsApp Butonu'],
    cta: 'Hemen Başla',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₺499',
    period: '/ay',
    features: ['5 Restoran', 'Sınırsız Ürün', 'Özel Domain', 'Analytics', 'Öncelikli Destek'],
    cta: 'Pro Seç',
    highlight: true,
  },
  {
    name: 'İşletme',
    price: '₺1.499',
    period: '/ay',
    features: ['Sınırsız Restoran', 'White Label', 'API Erişimi', 'Özel Entegrasyon'],
    cta: 'İletişime Geç',
    highlight: false,
  },
]

// ─── Sections ─────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-24 text-center">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-100 dark:bg-brand-900/20 rounded-full blur-3xl opacity-60" />
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-700 text-brand-600 dark:text-brand-400 text-sm font-medium mb-6 animate-fade-in">
        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
        Türkiye'nin En Hızlı Dijital Menü Sistemi
      </div>

      <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white leading-tight mb-6 animate-slide-up">
        Restoranınız İçin<br />
        <span className="text-brand-500">Dijital Menü</span>
      </h1>

      <p className="max-w-xl mx-auto text-lg text-gray-500 dark:text-gray-400 mb-10 animate-slide-up">
        QR kod tarayın, menüyü anında görün. Kağıt bitti, müşteri bekledi — bu sorunları tarihe gömün.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in">
        <Link
          to="/menu/demo-cafe"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-lg transition-colors shadow-lg shadow-brand-200 dark:shadow-brand-900/40"
        >
          🍽 Demo Menüyü Gör
        </Link>
        <a
          href="#how"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold text-lg transition-colors"
        >
          Nasıl Çalışır?
        </a>
      </div>

      {/* Mock phone preview */}
      <div className="mt-16 flex justify-center">
        <div className="relative w-64 sm:w-72 bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl shadow-gray-300 dark:shadow-gray-900 border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Phone notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 dark:bg-black rounded-full z-10" />
          <div className="pt-10 pb-4">
            {/* Mini menu preview */}
            <div className="px-4 py-2 bg-brand-50 dark:bg-brand-900/20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-base">🍽</div>
                <div>
                  <div className="h-2.5 w-24 bg-gray-800 dark:bg-gray-100 rounded" />
                  <div className="h-2 w-16 bg-brand-400 rounded mt-1" />
                </div>
              </div>
            </div>
            {/* Category pills */}
            <div className="flex gap-2 px-3 py-2 overflow-hidden">
              {['🍔', '🍕', '🥗'].map((e, i) => (
                <div key={i} className={`flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded-full text-xs ${i === 0 ? 'bg-brand-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}>
                  {e}
                </div>
              ))}
            </div>
            {/* Mini cards */}
            {[
              { emoji: '🍔', name: 'Classic Burger', price: '320 ₺', badge: 'Popüler' },
              { emoji: '🍕', name: 'Margherita',     price: '280 ₺', badge: null },
            ].map((item, i) => (
              <div key={i} className="mx-3 mb-2 p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex gap-2.5 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xl flex-shrink-0">
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <div className="text-[11px] font-semibold text-gray-800 dark:text-gray-100 truncate">{item.name}</div>
                    {item.badge && <span className="text-[9px] bg-amber-100 text-amber-700 px-1 py-0.5 rounded-full">{item.badge}</span>}
                  </div>
                  <div className="text-[11px] text-brand-600 font-semibold mt-0.5">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-center text-gray-900 dark:text-white mb-4">
          Her Şey Dahil
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-lg mx-auto">
          Restoranınızı dijital dünyaya taşımak için ihtiyacınız olan her şey kutuda geliyor.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{f.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section id="how" className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-center text-gray-900 dark:text-white mb-4">
          3 Adımda Başlayın
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-14 max-w-lg mx-auto">
          Kurulum süreci dakikalar içinde tamamlanır, teknik bilgi gerekmez.
        </p>

        <div className="grid sm:grid-cols-3 gap-8">
          {STEPS.map((s, i) => (
            <div key={s.step} className="relative text-center">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden sm:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-gray-200 dark:bg-gray-700" />
              )}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-500 text-white font-display font-bold text-xl mb-4 shadow-lg shadow-brand-200 dark:shadow-brand-900/40">
                {s.step}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section id="pricing" className="px-4 py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-center text-gray-900 dark:text-white mb-4">
          Şeffaf Fiyatlar
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-lg mx-auto">
          Gizli ücret yok, sürpriz fatura yok. İşletmenize uygun planı seçin.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative rounded-2xl p-6 flex flex-col
                ${plan.highlight
                  ? 'bg-brand-500 text-white shadow-xl shadow-brand-200 dark:shadow-brand-900/40 scale-[1.03]'
                  : 'bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50'
                }
              `}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                  En Popüler
                </div>
              )}
              <h3 className={`font-display font-bold text-xl mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {plan.name}
              </h3>
              <div className="mb-5">
                <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlight ? 'text-brand-100' : 'text-gray-400'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="flex-1 space-y-2.5 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-brand-50' : 'text-gray-600 dark:text-gray-300'}`}>
                    <span className={plan.highlight ? 'text-brand-200' : 'text-brand-500'}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/menu/demo-cafe"
                className={`
                  text-center py-2.5 rounded-full font-semibold text-sm transition-colors
                  ${plan.highlight
                    ? 'bg-white text-brand-600 hover:bg-brand-50'
                    : 'bg-brand-500 text-white hover:bg-brand-600'
                  }
                `}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
    </MainLayout>
  )
}
