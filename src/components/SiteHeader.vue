<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Clients', href: '#clients' },
  { label: 'Our Funds', href: '#funds' },
  { label: 'Capital Introduction', href: '#capital-introduction' },
  { label: 'Insights', href: '#insights' }
]
</script>

<template>
  <header class="site-header" :class="{ 'site-header--menu-open': isMenuOpen }">
    <a class="btn btn--outline-sm site-header__contact" href="#contact">Contact Us</a>

    <a class="site-header__logo" href="/" aria-label="AXSA Investment Partners – Home">
      <span class="site-header__wordmark">AXSA</span>
      <span class="site-header__descriptor">Investment Partners</span>
    </a>

    <button
      class="site-header__toggle"
      type="button"
      aria-controls="primary-nav"
      :aria-expanded="isMenuOpen ? 'true' : 'false'"
      :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
      @click="toggleMenu"
    >
      <span class="site-header__toggle-bar" aria-hidden="true"></span>
      <span class="site-header__toggle-bar" aria-hidden="true"></span>
      <span class="site-header__toggle-bar" aria-hidden="true"></span>
    </button>

    <nav id="primary-nav" class="site-header__nav" aria-label="Primary">
      <ul class="site-header__nav-list">
        <li v-for="item in navItems" :key="item.label">
          <a class="site-header__nav-link" :href="item.href" @click="closeMenu">{{ item.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
