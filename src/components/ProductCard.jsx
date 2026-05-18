import React, { useState } from 'react'
import { useLazyImage } from '../hooks/useLazyImage'

/** Badge colors by type */
const BADGE_STYLES = {
  'Popüler': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  'Yeni':    'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
}

/**
 * Formats a price in Turkish Lira.
 * e.g. 1250 → "1.250 ₺"
 */
function formatPrice(amount) {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/** Placeholder when no image is provided */
function ImagePlaceholder({ emoji = '🍽', name }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
      <span className="text-4xl" role="img" aria-label={name}>{emoji}</span>
    </div>
  )
}

/** Lazy-loaded product image */
function ProductImage({ src, name, emoji }) {
  const { imgRef, loaded, error } = useLazyImage(src)

  if (!src || error) {
    return <ImagePlaceholder emoji={emoji} name={name} />
  }

  return (
    <div ref={imgRef} className="w-full h-full">
      {loaded ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover loaded"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full skeleton" />
      )}
    </div>
  )
}

/** Category emoji mapping for placeholder images */
const CATEGORY_EMOJI = {
  burgers:   '🍔',
  pizzas:    '🍕',
  salads:    '🥗',
  drinks:    '🥤',
  desserts:  '🍰',
  kebaps:    '🍢',
  mezes:     '🫙',
  icecekler: '🥛',
}

/**
 * Menu item product card.
 * Renders skeleton while image loads.
 */
export default function ProductCard({ item, categoryId, animate = true }) {
  const emoji = CATEGORY_EMOJI[categoryId] || '🍽'
  const badgeStyle = BADGE_STYLES[item.badge]

  return (
    <article
      className={`
        group relative flex gap-4 p-4 rounded-2xl
        bg-white dark:bg-gray-800/60
        border border-gray-100 dark:border-gray-700/50
        hover:shadow-lg hover:shadow-gray-200/60 dark:hover:shadow-gray-900/60
        hover:-translate-y-0.5
        transition-all duration-300
        ${animate ? 'animate-slide-up' : ''}
        ${!item.available ? 'opacity-60' : ''}
      `}
    >
      {/* Image */}
      <div className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
        <ProductImage src={item.image} name={item.name} emoji={emoji} />

        {/* Badge */}
        {item.badge && (
          <span className={`
            absolute top-1.5 left-1.5
            text-[10px] font-semibold px-1.5 py-0.5 rounded-full
            ${badgeStyle}
          `}>
            {item.badge}
          </span>
        )}

        {/* Unavailable overlay */}
        {!item.available && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white text-xs font-semibold">Tükendi</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
        <div>
          <h3 className="font-display font-semibold text-gray-900 dark:text-white text-base leading-tight">
            {item.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold text-brand-600 dark:text-brand-400 text-lg">
            {formatPrice(item.price)}
          </span>
          {/* Optional: add to cart placeholder */}
          <button
            aria-label={`${item.name} ekle`}
            disabled={!item.available}
            className="
              w-8 h-8 rounded-full flex items-center justify-center
              bg-brand-50 dark:bg-brand-900/30
              text-brand-500 dark:text-brand-400
              hover:bg-brand-100 dark:hover:bg-brand-900/60
              disabled:opacity-40 disabled:cursor-not-allowed
              transition-colors text-lg font-light leading-none
            "
          >
            +
          </button>
        </div>
      </div>
    </article>
  )
}

/** Skeleton placeholder while loading */
export function ProductCardSkeleton() {
  return (
    <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50">
      <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl skeleton" />
      <div className="flex-1 py-1 space-y-2">
        <div className="h-5 w-3/4 rounded skeleton" />
        <div className="h-4 w-full rounded skeleton" />
        <div className="h-4 w-2/3 rounded skeleton" />
        <div className="mt-3 h-6 w-20 rounded skeleton" />
      </div>
    </div>
  )
}
