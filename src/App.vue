<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ContactHeader from './components/contact/ContactHeader.vue'
</script>

<template>
  <contact-header></contact-header>
  <div class="content">
    <RouterView />
  </div>
</template>
