<template>
  <div class="home-page">
    <SiteHeader />
    <main class="home-page__main">
      <HeroSection />
      <hr class="home-page__divider" />
      <CredentialsSection />
    </main>
  </div>
</template>

<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import CredentialsSection from '../components/CredentialsSection.vue'
</script>
