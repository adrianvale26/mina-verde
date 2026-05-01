import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSEO } from './useSEO'
import { seoConfig } from '../config/seo'

export function useRouteSEO() {
  const route = useRoute()
  const routeName = computed(() => route.name)

  const meta = computed(() => {
    const config = seoConfig[routeName.value] || seoConfig.home
    return config
  })

  useSEO(meta.value)
}
