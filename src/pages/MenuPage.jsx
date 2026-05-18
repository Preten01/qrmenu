import React, { useState, useMemo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useMenu } from '../hooks/useMenu'
import { useTheme } from '../App'
import RestaurantHeader, { RestaurantHeaderSkeleton } from '../components/RestaurantHeader'
import CategoryNav from '../components/CategoryNav'
import ProductCard, { ProductCardSkeleton } from '../components/ProductCard'
import QRCodeSection from '../components/QRCodeSection'

// ─── Dark mode toggle button ──────────────────────────────────────────────────
function ThemeToggle() {
  const { dark, setDark } = useTheme()
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Tema değiştir"
      className="
        fixed top-4 right-4 z-50
        w-10 h-10 rounded-full
        bg-white/80 dark:bg-gray-800/80
        backdrop-blur-sm
        border border-gray-200 dark:border-gray-700
        flex items-center justify-center
        shadow-sm
        transition-colors
      "
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}

// ─── Skeleton loading state ───────────────────────────────────────────────────
function MenuSkeleton() {
  return (
    <div className="animate-fade-in">
      <RestaurantHeaderSkeleton />
      {/* Category nav skeleton */}
      <div className="sticky top-0 z-30 bg-white/80 dark:bg-gray-950/80 border-b border-gray-100 dark:border-gray-800 px-4 py-3 flex gap-2">
        {[80, 96, 72, 88].map((w, i) => (
          <div key={i} className={`h-9 rounded-full skeleton`} style={{ width: w }} />
        ))}
      </div>
      {/* Cards skeleton */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}

// ─── Category section ─────────────────────────────────────────────────────────
function CategorySection({ category, isVisible }) {
  if (!isVisible) return null

  return (
    <section id={`cat-${category.id}`} className="mb-8">
      {/* Category heading */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl" role="img" aria-label={category.name}>{category.emoji}</span>
        <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white">
          {category.name}
        </h2>
        <span className="ml-auto text-sm text-gray-400 dark:text-gray-500">
          {category.items.length} ürün
        </span>
      </div>

      {/* Product cards */}
      <div className="space-y-3">
        {category.items.map((item, i) => (
          <ProductCard
            key={item.id}
            item={item}
            categoryId={category.id}
            animate={i < 6}
          />
        ))}
      </div>
    </section>
  )
}

// ─── Error state ─────────────────────────────────────────────────────────────
function ErrorState({ message }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-gray-950">
      <div className="text-6xl mb-4">😔</div>
      <h1 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">
        Menü Bulunamadı
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm">{message}</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-medium transition-colors"
      >
        ← Ana Sayfaya Dön
      </Link>
    </div>
  )
}

// ─── Menu Page ────────────────────────────────────────────────────────────────

export default function MenuPage() {
  const { restaurantSlug } = useParams()
  const { menu, loading, error } = useMenu(restaurantSlug)
  const [activeCategory, setActiveCategory] = useState('all')

  // Update page title when menu loads
  useEffect(() => {
    if (menu?.restaurant) {
      document.title = `${menu.restaurant} – Menü | QRMenü`
    }
  }, [menu])

  // Compute visible categories based on filter
  const visibleCategories = useMemo(() => {
    if (!menu) return []
    if (activeCategory === 'all') return menu.categories
    return menu.categories.filter((c) => c.id === activeCategory)
  }, [menu, activeCategory])

  // Handle category selection + smooth scroll to section
  const handleCategorySelect = (id) => {
    setActiveCategory(id)
    if (id !== 'all') {
      setTimeout(() => {
        document.getElementById(`cat-${id}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 80)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (loading) return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <ThemeToggle />
      <MenuSkeleton />
    </div>
  )

  if (error || !menu) return (
    <div className="dark:bg-gray-950 transition-colors">
      <ThemeToggle />
      <ErrorState message={error || 'Bu restoran mevcut değil.'} />
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 pb-safe">
      <ThemeToggle />

      {/* Restaurant hero header */}
      <RestaurantHeader restaurant={menu} />

      {/* Sticky category nav */}
      <CategoryNav
        categories={menu.categories}
        activeId={activeCategory}
        onSelect={handleCategorySelect}
      />

      {/* Menu items */}
      <main className="max-w-2xl mx-auto px-4 pt-6">
        {visibleCategories.length === 0 ? (
          <div className="text-center py-16 text-gray-400 dark:text-gray-500">
            <div className="text-4xl mb-3">🤷</div>
            <p>Bu kategoride ürün bulunamadı.</p>
          </div>
        ) : (
          visibleCategories.map((cat) => (
            <CategorySection
              key={cat.id}
              category={cat}
              isVisible={true}
            />
          ))
        )}

        {/* QR Code share section */}
        <QRCodeSection slug={restaurantSlug} />

        {/* Back to home link */}
        <div className="text-center pb-8">
          <Link
            to="/"
            className="text-sm text-gray-400 dark:text-gray-500 hover:text-brand-500 transition-colors"
          >
            QRMenü ile oluşturuldu 🍽
          </Link>
        </div>
      </main>
    </div>
  )
}
