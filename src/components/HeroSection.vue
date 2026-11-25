<script setup>
import { ref } from 'vue'
// Stand-in for the Figma fill "Photo / Hero Facade" (1440x620). Replace with the raster export when available.
import heroFacade from '../assets/images/hero-facade.svg'

// If the image fails to load, the hero falls back to the solid #0A0A0B background.
const isImageAvailable = ref(true)

defineProps({
  /** @type {import('vue').PropType<import('../services/homeContent.js').HeroContent | null>} */
  content: { type: Object, default: null },
  isLoading: { type: Boolean, default: false }
})
</script>

<template>
  <section class="hero" aria-labelledby="hero-headline" :aria-busy="isLoading ? 'true' : 'false'">
    <img
      v-if="isImageAvailable"
      class="hero__image"
      @error="isImageAvailable = false"
      :src="heroFacade"
      alt="Modern glass and stone office building facade"
      width="1440"
      height="620"
    />
    <div class="hero__scrim" aria-hidden="true"></div>

    <div class="hero__inner">
      <div v-if="isLoading || !content" class="hero__copy">
        <span class="hero__skeleton hero__skeleton--eyebrow" aria-hidden="true"></span>
        <h1 id="hero-headline" class="visually-hidden">Loading AXSA Investment Partners</h1>
        <span class="hero__skeleton hero__skeleton--headline" aria-hidden="true"></span>
        <span class="hero__skeleton hero__skeleton--subhead" aria-hidden="true"></span>
      </div>

      <div v-else class="hero__copy">
        <p v-if="content.eyebrow" class="hero__eyebrow">{{ content.eyebrow }}</p>
        <h1 id="hero-headline" class="hero__headline">{{ content.headline }}</h1>
        <p v-if="content.subhead" class="hero__subhead">{{ content.subhead }}</p>
        <div class="hero__actions">
          <a
            v-if="content.primaryCta.label"
            class="btn btn--primary"
            :href="content.primaryCta.href"
          >
            {{ content.primaryCta.label }}
          </a>
          <a
            v-if="content.secondaryCta.label"
            class="btn btn--secondary"
            :href="content.secondaryCta.href"
          >
            {{ content.secondaryCta.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
