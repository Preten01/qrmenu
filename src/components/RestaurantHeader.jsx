import React from 'react'

/** WhatsApp SVG icon */
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

/** Instagram SVG icon */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

/** Clock icon */
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  )
}

/** Map pin icon */
function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

/**
 * Restaurant hero header shown at the top of the menu page.
 * Displays logo, name, tagline, hours, address, and social links.
 */
export default function RestaurantHeader({ restaurant }) {
  const {
    name, tagline, logo, address, phone,
    whatsapp, instagram, openingHours,
  } = restaurant

  return (
    <header className="bg-gradient-to-b from-brand-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 pt-8 pb-6">
      <div className="max-w-2xl mx-auto">
        {/* Logo + Name */}
        <div className="flex items-center gap-4 mb-4">
          {logo ? (
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-16 h-16 rounded-2xl object-cover shadow-md"
            />
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-3xl shadow-md">
              🍽
            </div>
          )}

          <div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white leading-tight">
              {name}
            </h1>
            {tagline && (
              <p className="text-brand-600 dark:text-brand-400 font-medium text-sm mt-0.5">
                {tagline}
              </p>
            )}
          </div>
        </div>

        {/* Address */}
        {address && (
          <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <MapPinIcon />
            <span>{address}</span>
          </div>
        )}

        {/* Opening hours */}
        {openingHours?.length > 0 && (
          <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <ClockIcon />
            <div className="space-y-0.5">
              {openingHours.map((h, i) => (
                <div key={i}>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{h.days}:</span>{' '}
                  {h.hours}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Social / Contact buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 px-4 py-2 rounded-full
                bg-[#25D366] hover:bg-[#1ebe5d]
                text-white text-sm font-medium
                transition-colors shadow-sm
              "
              aria-label="WhatsApp ile iletişim"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          )}

          {instagram && (
            <a
              href={`https://instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 px-4 py-2 rounded-full
                bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400
                hover:opacity-90
                text-white text-sm font-medium
                transition-opacity shadow-sm
              "
              aria-label="Instagram sayfamızı takip edin"
            >
              <InstagramIcon />
              @{instagram}
            </a>
          )}

          {phone && (
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="
                flex items-center gap-2 px-4 py-2 rounded-full
                bg-gray-100 dark:bg-gray-800
                hover:bg-gray-200 dark:hover:bg-gray-700
                text-gray-700 dark:text-gray-300 text-sm font-medium
                transition-colors
              "
              aria-label={`Bizi ara: ${phone}`}
            >
              📞 {phone}
            </a>
          )}
        </div>
      </div>
    </header>
  )
}

/** Skeleton for RestaurantHeader */
export function RestaurantHeaderSkeleton() {
  return (
    <header className="bg-gradient-to-b from-brand-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 pt-8 pb-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl skeleton" />
          <div className="space-y-2">
            <div className="h-7 w-48 rounded skeleton" />
            <div className="h-4 w-32 rounded skeleton" />
          </div>
        </div>
        <div className="h-4 w-64 rounded skeleton mb-2" />
        <div className="h-4 w-48 rounded skeleton mb-4" />
        <div className="flex gap-2">
          <div className="h-9 w-32 rounded-full skeleton" />
          <div className="h-9 w-36 rounded-full skeleton" />
        </div>
      </div>
    </header>
  )
}
