import React, { createContext, useContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import NotFoundPage from './pages/NotFoundPage'

// ─── Dark Mode Context ────────────────────────────────────────────────────────
export const ThemeContext = createContext(null)

export function useTheme() {
  return useContext(ThemeContext)
}

// ─── App Root ─────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu/:restaurantSlug" element={<MenuPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeContext.Provider>
  )
}
