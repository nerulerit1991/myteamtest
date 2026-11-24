<script setup>
import heroFacade from '../assets/images/hero-facade.svg'

defineProps({
  hero: { type: Object, default: null },
  isLoading: { type: Boolean, default: false },
  error: { type: String, default: null }
})

defineEmits(['retry'])
</script>

<template>
  <section class="hero" aria-labelledby="hero-heading" :aria-busy="isLoading">
    <img class="hero__image" :src="heroFacade" alt="Facade of a modern office building" />
    <div class="hero__scrim" aria-hidden="true"></div>

    <div class="hero__content">
      <template v-if="isLoading">
        <h1 id="hero-heading" class="hero__sr-only">Loading</h1>
        <span class="hero__skeleton hero__skeleton--eyebrow" aria-hidden="true"></span>
        <span class="hero__skeleton hero__skeleton--headline" aria-hidden="true"></span>
        <span class="hero__skeleton hero__skeleton--subhead" aria-hidden="true"></span>
        <span class="hero__skeleton hero__skeleton--actions" aria-hidden="true"></span>
      </template>

      <template v-else-if="error || !hero">
        <h1 id="hero-heading" class="hero__headline">AXSA Investment Partners</h1>
        <p class="hero__status" role="alert">
          {{ error || 'Content is not available yet.' }}
        </p>
        <div class="hero__actions">
          <button type="button" class="btn btn--secondary" @click="$emit('retry')">Try again</button>
        </div>
      </template>

      <template v-else>
        <p v-if="hero.eyebrow" class="hero__eyebrow">{{ hero.eyebrow }}</p>
        <h1 id="hero-heading" class="hero__headline">{{ hero.headline }}</h1>
        <p v-if="hero.subhead" class="hero__subhead">{{ hero.subhead }}</p>
        <div v-if="hero.actions.length" class="hero__actions">
          <a
            v-for="action in hero.actions"
            :key="action.label"
            :class="['btn', `btn--${action.variant}`]"
            :href="action.href"
          >
            {{ action.label }}
          </a>
        </div>
      </template>
    </div>
  </section>
</template>
