<template>
  <section class="credentials" aria-label="Credentials">
    <dl class="credentials__list">
      <div
        v-for="stat in stats"
        :key="stat.label"
        :class="['credentials__stat', `credentials__stat--${stat.size}`]"
      >
        <dt class="credentials__label">{{ stat.label }}</dt>
        <dd class="credentials__value">{{ stat.value }}</dd>
      </div>
    </dl>
  </section>
</template>

<script setup>
// Sizes map to the three value font sizes in the Figma frame (48 / 40 / 44px).
const stats = [
  { value: 'MAS', label: 'Licensed & regulated', size: 'lg' },
  { value: 'CMS101290', label: 'Capital Markets Services Licence', size: 'sm' },
  { value: '06', label: 'Core expertise areas', size: 'lg' },
  { value: 'Global', label: 'Accredited investors worldwide', size: 'md' }
]
</script>
