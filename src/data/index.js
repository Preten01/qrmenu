/**
 * Menu Registry
 * 
 * Maps restaurant slugs to their JSON data.
 * To add a new restaurant:
 *   1. Create src/data/<slug>.json
 *   2. Import it here and add to the registry
 * 
 * Future Supabase migration:
 *   Replace this with a fetch call to your Supabase REST API
 *   and keep the same data shape.
 */

import demoCafe from './demo-cafe.json'
import istanbulKebap from './istanbul-kebap.json'

/** @type {Record<string, object>} */
const registry = {
  'demo-cafe': demoCafe,
  'istanbul-kebap': istanbulKebap,
}

/**
 * Fetch restaurant menu by slug.
 * Returns null if not found.
 * @param {string} slug
 * @returns {Promise<object|null>}
 */
export async function getMenuBySlug(slug) {
  // Simulate async fetch (swap with Supabase call later)
  await new Promise((r) => setTimeout(r, 300))
  return registry[slug] ?? null
}

/**
 * Get all available restaurant slugs.
 * @returns {string[]}
 */
export function getAllSlugs() {
  return Object.keys(registry)
}

export default registry
