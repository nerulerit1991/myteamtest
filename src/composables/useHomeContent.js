import { onMounted, ref } from 'vue'
import { fetchHomeContent } from '../services/homeContent.js'

/**
 * Loads home page content and exposes loading / error state.
 */
export function useHomeContent() {
  const content = ref(null)
  const isLoading = ref(true)
  const error = ref(null)

  async function load() {
    isLoading.value = true
    error.value = null

    try {
      content.value = await fetchHomeContent()
    } catch (err) {
      console.error('[useHomeContent] Failed to load home content:', err)
      error.value = err instanceof Error ? err : new Error('Unable to load content.')
    } finally {
      isLoading.value = false
    }
  }

  onMounted(load)

  return { content, isLoading, error, reload: load }
}
