<script setup>
defineProps({
  credentials: { type: Array, default: () => [] },
  isLoading: { type: Boolean, default: false },
  error: { type: String, default: null }
})

defineEmits(['retry'])

const SKELETON_COUNT = 4
</script>

<template>
  <section class="credentials" aria-labelledby="credentials-heading" :aria-busy="isLoading">
    <h2 id="credentials-heading" class="credentials__title">Our credentials</h2>

    <ul v-if="isLoading" class="credentials__list" aria-hidden="true">
      <li v-for="n in SKELETON_COUNT" :key="n" class="credentials__stat">
        <span class="credentials__skeleton credentials__skeleton--value"></span>
        <span class="credentials__skeleton credentials__skeleton--label"></span>
      </li>
    </ul>

    <div v-else-if="error" class="credentials__status" role="alert">
      <p>{{ error }}</p>
      <button type="button" class="credentials__retry" @click="$emit('retry')">Try again</button>
    </div>

    <p v-else-if="!credentials.length" class="credentials__status">
      No credentials to display yet.
    </p>

    <ul v-else class="credentials__list">
      <li v-for="item in credentials" :key="item.id" class="credentials__stat">
        <p :class="['credentials__value', `credentials__value--${item.id}`]">{{ item.value }}</p>
        <p v-if="item.label" class="credentials__label">{{ item.label }}</p>
      </li>
    </ul>
  </section>
</template>
