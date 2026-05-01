import { useHead } from '@vueuse/head'

export function useSEO(meta = {}) {
  const baseUrl = 'https://minaverde.com'
  const defaults = {
    title: 'Mina Verde — Colombian Emeralds',
    description: 'Hand-selected Colombian emeralds, graded by GIA.',
    image: '/og-default.jpg',
    url: baseUrl,
    type: 'website',
    robots: 'index, follow'
  }
  const merged = { ...defaults, ...meta }
  useHead({
    title: merged.title,
    meta: [
      { name: 'description', content: merged.description },
      { property: 'og:title', content: merged.title },
      { property: 'og:description', content: merged.description },
      { property: 'og:image', content: merged.image },
      { property: 'og:type', content: merged.type },
      { name: 'twitter:card', content: 'summary_large_image' },
    ]
  })
}
