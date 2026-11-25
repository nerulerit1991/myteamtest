<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Clients', href: '#clients' },
  { label: 'Our Funds', href: '#funds' },
  { label: 'Capital Introduction', href: '#capital-introduction' },
  { label: 'Insights', href: '#insights' }
]

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function onKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <a class="btn btn--outline-sm site-header__contact" href="#contact">Contact Us</a>

      <a class="site-header__logo" href="/" aria-label="AXSA Investment Partners — home">
        <span class="site-header__logo-mark">AXSA</span>
        <span class="site-header__logo-descriptor">INVESTMENT PARTNERS</span>
      </a>

      <button
        type="button"
        class="site-header__toggle"
        aria-controls="primary-nav"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        @click="toggleMenu"
      >
        {{ isMenuOpen ? 'Close' : 'Menu' }}
      </button>

      <nav
        id="primary-nav"
        class="site-header__nav"
        :class="{ 'is-open': isMenuOpen }"
        aria-label="Primary"
      >
        <ul class="site-header__nav-list">
          <li v-for="link in navLinks" :key="link.href">
            <a class="site-header__nav-link" :href="link.href" @click="closeMenu">{{ link.label }}</a>
          </li>
          <li class="site-header__nav-item--contact">
            <a class="btn btn--outline-sm" href="#contact" @click="closeMenu">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
