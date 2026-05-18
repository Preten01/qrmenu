import React, { useState } from 'react'

/**
 * QR code placeholder section shown at the bottom of the menu.
 * In production, replace the placeholder with a real QR library
 * like `qrcode.react`.
 */
export default function QRCodeSection({ slug }) {
  const [copied, setCopied] = useState(false)
  const menuUrl = `${window.location.origin}/menu/${slug}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(menuUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const el = document.createElement('input')
      el.value = menuUrl
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section className="mx-4 mt-8 mb-6 p-6 rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 text-white text-center">
      <h2 className="font-display font-bold text-xl mb-2">Bu Menüyü Paylaş</h2>
      <p className="text-brand-100 text-sm mb-5">
        QR kodu okutun veya bağlantıyı paylaşın
      </p>

      {/* QR Code placeholder — swap with <QRCodeSVG> from qrcode.react */}
      <div className="inline-flex flex-col items-center gap-3">
        <div className="
          w-36 h-36 bg-white rounded-2xl
          flex items-center justify-center
          shadow-lg shadow-brand-900/30
        ">
          <div className="text-center">
            <div className="text-4xl mb-1">📱</div>
            <div className="text-[10px] text-gray-400 font-mono px-2 leading-tight">
              QR KOD
            </div>
          </div>
        </div>

        {/* URL copy button */}
        <button
          onClick={handleCopy}
          className="
            flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/20 hover:bg-white/30
            backdrop-blur-sm
            text-sm font-medium
            transition-all duration-200
          "
        >
          {copied ? '✅ Kopyalandı!' : '🔗 Bağlantıyı Kopyala'}
        </button>

        <p className="text-brand-200 text-xs max-w-[200px] break-all font-mono">
          {menuUrl}
        </p>
      </div>
    </section>
  )
}
