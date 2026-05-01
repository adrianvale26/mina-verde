export const isDevelopment = import.meta.env.DEV

export function getApiUrl() {
  return import.meta.env.VITE_API_LINK || 'http://localhost:5001/mina-verde/us-central1/api'
}
