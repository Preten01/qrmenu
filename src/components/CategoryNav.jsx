import React, { useEffect, useRef } from 'react'

/**
 * Sticky horizontal category filter navigation.
 * Auto-scrolls the active pill into view on mobile.
 */
export default function CategoryNav({ categories, activeId, onSelect }) {
  const navRef    = useRef(null)
  const activeRef = useRef(null)

  // Scroll active pill into view when it changes
  useEffect(() => {
    if (activeRef.current && navRef.current) {
      activeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [activeId])

  return (
    <nav
      className="
        category-nav
        bg-white/80 dark:bg-gray-950/80
        border-b border-gray-100 dark:border-gray-800
        px-4
      "
      aria-label="Kategori filtresi"
    >
      <div
        ref={navRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide py-3"
      >
        {/* "Tümü" pill */}
        <CategoryPill
          label="Tümü"
          emoji="🍽"
          isActive={activeId === 'all'}
          onClick={() => onSelect('all')}
          ref={activeId === 'all' ? activeRef : null}
        />

        {categories.map((cat) => (
          <CategoryPill
            key={cat.id}
            label={cat.name}
            emoji={cat.emoji}
            isActive={activeId === cat.id}
            onClick={() => onSelect(cat.id)}
            ref={activeId === cat.id ? activeRef : null}
          />
        ))}
      </div>
    </nav>
  )
}

/** Individual category pill button */
const CategoryPill = React.forwardRef(function CategoryPill(
  { label, emoji, isActive, onClick },
  ref
) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      aria-pressed={isActive}
      className={`
        flex-shrink-0 flex items-center gap-1.5
        px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-200 whitespace-nowrap
        focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500
        ${isActive
          ? 'bg-brand-500 text-white shadow-md shadow-brand-200 dark:shadow-brand-900/40 scale-[1.03]'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }
      `}
    >
      <span role="img" aria-hidden>{emoji}</span>
      {label}
    </button>
  )
})
