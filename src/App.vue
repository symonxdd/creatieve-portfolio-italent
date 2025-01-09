<script setup>
import { RouterLink, RouterView } from 'vue-router'

import NavBar from "./components/NavBar.vue";
import Voorstelling from "./components/Voorstelling.vue";
import Activiteiten from "./components/Activiteiten.vue";
import Selectie from "./components/Selectie.vue";
import Eindreflectie from "./components/Eindreflectie.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div id="app">
    <NavBar />
    <Voorstelling />
    <Activiteiten />
    <Selectie />
    <Eindreflectie />
    <Footer />
  </div>
</template>

<style scoped>
body {
  padding-top: 100px;
}
</style>
