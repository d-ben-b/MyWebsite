<template>
  <NavBar />
  <div id="app" class="content">
    <router-view class="font-mono" />
  </div>
  <Footer />
</template>

<script setup>
  import NavBar from "./components/NavBar.vue";
  import Footer from "./components/Footer.vue";
</script>

<style scoped>
  #app {
    position: relative;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .content {
    transition: all 0.5s;
  }
</style>
