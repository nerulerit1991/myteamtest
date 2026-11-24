<script setup>
import heroFacade from '../assets/images/hero-facade.svg'
</script>

<template>
  <section class="hero" aria-labelledby="hero-headline">
    <img class="hero__photo" :src="heroFacade" alt="" aria-hidden="true" />
    <div class="hero__scrim" aria-hidden="true"></div>

    <div class="hero__copy">
      <p class="hero__eyebrow">
        <span class="hero__eyebrow-term">Direct</span> ·
        <span class="hero__eyebrow-term">Innovative</span> ·
        <span class="hero__eyebrow-term">Future-Focused</span>
      </p>
      <h1 id="hero-headline" class="hero__headline">Your Partner in Modern Investing.</h1>
      <p class="hero__subhead">
        AXSA is an independent investment management firm serving clients globally. We provide
        end-to-end investment services to
      </p>
      <div class="hero__actions">
        <a class="btn btn--primary" href="#expertise">Explore Our Expertise</a>
        <a class="btn btn--secondary" href="#contact">Speak With Us</a>
      </div>
    </div>
  </section>
</template>
