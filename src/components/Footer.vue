<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="footer">
    <p>&copy; 2025 Symon Blazejczak. Alle rechten voorbehouden.</p>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  /* padding: 20px; */
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
