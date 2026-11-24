import { onBeforeUnmount, onMounted, ref } from 'vue'
import { fetchHomeContent } from '../services/homeContent.js'

/**
 * Loads home page content and exposes loading / error state.
 */
export function useHomeContent() {
  const hero = ref(null)
  const credentials = ref([])
  const isLoading = ref(true)
  const error = ref(null)
  let controller = null

  async function load() {
    controller?.abort()
    controller = new AbortController()
    isLoading.value = true
    error.value = null

    try {
      const content = await fetchHomeContent({ signal: controller.signal })
      hero.value = content.hero
      credentials.value = content.credentials
    } catch (err) {
      if (err?.name === 'AbortError') return
      console.error('[useHomeContent]', err)
      error.value = 'We could not load this content right now. Please try again.'
    } finally {
      isLoading.value = false
    }
  }

  onMounted(load)
  onBeforeUnmount(() => controller?.abort())

  return { hero, credentials, isLoading, error, reload: load }
}
