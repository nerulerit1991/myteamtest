<script setup>
const stats = [
  { value: 'MAS', label: 'Licensed & regulated', modifier: '' },
  { value: 'CMS101290', label: 'Capital Markets Services Licence', modifier: 'md' },
  { value: '06', label: 'Core expertise areas', modifier: '' },
  { value: 'Global', label: 'Accredited investors worldwide', modifier: 'lg' }
]
</script>

<template>
  <section class="credentials" aria-labelledby="credentials-heading">
    <h2 id="credentials-heading" class="visually-hidden">Credentials</h2>
    <dl class="credentials__list">
      <div v-for="stat in stats" :key="stat.value" class="credentials__item">
        <dt
          class="credentials__value"
          :class="stat.modifier && `credentials__value--${stat.modifier}`"
        >
          {{ stat.value }}
        </dt>
        <dd class="credentials__label">{{ stat.label }}</dd>
      </div>
    </dl>
  </section>
</template>
