import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../App'

/** Top navigation bar for the landing page */
export default function Navbar() {
  const { dark, setDark } = useTheme()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white text-lg">
            🍽
          </div>
          <span className="font-display font-bold text-xl text-gray-900 dark:text-white">
            QRMenü
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#features" className="hover:text-brand-500 transition-colors">Özellikler</a>
          <a href="#how" className="hover:text-brand-500 transition-colors">Nasıl Çalışır</a>
          <a href="#pricing" className="hover:text-brand-500 transition-colors">Fiyatlar</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Tema değiştir"
            className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {dark ? '☀️' : '🌙'}
          </button>

          {/* Demo CTA */}
          <Link
            to="/menu/demo-cafe"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium transition-colors"
          >
            Demo Menü →
          </Link>
        </div>
      </div>
    </header>
  )
}
