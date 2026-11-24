<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import CredentialsSection from '../components/CredentialsSection.vue'
import { useHomeContent } from '../composables/useHomeContent.js'

const { hero, credentials, isLoading, error, reload } = useHomeContent()
</script>

<template>
  <div class="home-page">
    <SiteHeader />
    <main>
      <HeroSection :hero="hero" :is-loading="isLoading" :error="error" @retry="reload" />
      <hr class="home-page__divider" />
      <CredentialsSection
        :credentials="credentials"
        :is-loading="isLoading"
        :error="error"
        @retry="reload"
      />
    </main>
  </div>
</template>
