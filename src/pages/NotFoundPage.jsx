import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-gray-950">
      <div className="text-8xl mb-6">🍽</div>
      <h1 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-3">
        404
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm">
        Aradığınız sayfa mevcut değil. Menü linkinizi kontrol edin veya ana sayfaya dönün.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-medium transition-colors"
      >
        ← Ana Sayfaya Dön
      </Link>
    </div>
  )
}
