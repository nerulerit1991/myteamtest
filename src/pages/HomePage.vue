<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import CredentialsSection from '../components/CredentialsSection.vue'
import { useHomeContent } from '../composables/useHomeContent.js'

const { content, isLoading, error, reload } = useHomeContent()
</script>

<template>
  <div class="home-page">
    <SiteHeader />

    <main>
      <div v-if="error" class="home-page__error" role="alert">
        <span>We couldn't load the latest content. Please try again.</span>
        <button type="button" class="btn btn--outline-sm" @click="reload">Retry</button>
      </div>

      <HeroSection :content="content?.hero ?? null" :is-loading="isLoading" />
      <hr class="divider" />
      <CredentialsSection :items="content?.credentials ?? []" :is-loading="isLoading" />
    </main>
  </div>
</template>
