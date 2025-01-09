<template>
  <nav class="navbar">
    <div class="navbar-left">
      <!-- PXL Logo -->
      <img src="@/assets/pxl-logo.png" alt="PXL Logo" class="pxl-logo" />
      <!-- Titel -->
      <h1 class="navbar-title">I-Talent Creatieve Portfolio</h1>
    </div>
    <ul class="navbar-links">
      <li @click="scrollTo('voorstelling')">Voorstelling</li>
      <li @click="scrollTo('activiteiten')">Activiteiten</li>
      <li @click="scrollTo('selectie')">Selectie</li>
      <li @click="scrollTo('eindreflectie')">Eindreflectie</li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    scrollTo(section) {
      document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #2c3e50;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-sizing: border-box;
  max-width: 100%;
  overflow: hidden;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.pxl-logo {
  height: 30px; /* Pas de grootte van het logo aan */
}

.navbar-title {
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
}

.navbar-links {
  list-style: none;
  display: flex;
  justify-content: center; /* Dit centreert de links horizontaal */
  gap: 20px;
  flex-grow: 1; /* Zorgt ervoor dat de links naar het midden worden geduwd */
}

.navbar-links li {
  cursor: pointer;
  transition: color 0.3s;
}

.navbar-links li:hover {
  color: #3498db;
}

body {
  padding-top: 60px; /* Zorg ervoor dat de inhoud niet achter de navbar komt */
  margin: 0;
}
</style>
