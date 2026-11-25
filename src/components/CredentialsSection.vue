<script setup>
defineProps({
  /** @type {import('vue').PropType<import('../services/homeContent.js').Credential[]>} */
  items: { type: Array, default: () => [] },
  isLoading: { type: Boolean, default: false }
})

// Figma sizes the stat values per column: 48px default, 44px "Global", 40px "CMS101290".
const VALUE_SIZES = { licence: 'sm', reach: 'md' }

const valueSize = (id) => VALUE_SIZES[id] ?? 'lg'
</script>

<template>
  <section class="credentials" aria-labelledby="credentials-heading" :aria-busy="isLoading ? 'true' : 'false'">
    <div class="credentials__inner">
      <h2 id="credentials-heading" class="visually-hidden">Credentials</h2>

      <p v-if="isLoading" class="credentials__status" role="status">Loading credentials…</p>

      <p v-else-if="!items.length" class="credentials__status">
        Our credentials will be available here soon.
      </p>

      <dl v-else class="credentials__list">
        <div v-for="item in items" :key="item.id" class="credentials__item">
          <dt :class="['credentials__value', `credentials__value--${valueSize(item.id)}`]">
            {{ item.value }}
          </dt>
          <dd v-if="item.label" class="credentials__label">{{ item.label }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
