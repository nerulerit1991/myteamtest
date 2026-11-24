<template>
  <header class="site-header">
    <a class="site-header__contact" href="#contact">Contact Us</a>

    <a class="site-header__logo" href="/" aria-label="AXSA Investment Partners, home">
      <span class="site-header__logo-mark">AXSA</span>
      <span class="site-header__logo-descriptor">INVESTMENT PARTNERS</span>
    </a>

    <nav class="site-header__nav" aria-label="Main">
      <ul class="site-header__nav-list">
        <li v-for="link in navLinks" :key="link.label">
          <a class="site-header__nav-link" :href="link.href">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Clients', href: '#clients' },
  { label: 'Our Funds', href: '#funds' },
  { label: 'Capital Introduction', href: '#capital-introduction' },
  { label: 'Insights', href: '#insights' }
]
</script>
