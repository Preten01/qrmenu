import React from 'react'
import { Link } from 'react-router-dom'

/** Simple footer for the landing page */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 py-10 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🍽</span>
          <span className="font-display font-bold text-gray-900 dark:text-white">QRMenü</span>
        </div>

        <p className="text-sm text-gray-400 dark:text-gray-500">
          © {year} QRMenü. Tüm hakları saklıdır.
        </p>

        <nav className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-brand-500 transition-colors">Ana Sayfa</Link>
          <Link to="/menu/demo-cafe" className="hover:text-brand-500 transition-colors">Demo</Link>
        </nav>
      </div>
    </footer>
  )
}
