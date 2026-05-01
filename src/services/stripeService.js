const API_BASE = import.meta.env.VITE_API_LINK || 'http://localhost:5001/mina-verde/us-central1/api'

export async function processStoneCheckout(stoneId, email, name) {
  alert(`Checkout for stone ${stoneId} — Stripe integration coming soon.\n\nFor now, contact us at hello@minaverde.com to purchase.`)
  return { url: null, stoneId }
}

export function formatPrice(cents) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents)
}