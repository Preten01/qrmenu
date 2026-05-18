import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/** Layout wrapper for marketing/landing pages */
export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
