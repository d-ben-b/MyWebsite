<template>
  <div class="content flex flex-col items-center">
    <NavBar />
    <router-view class="font-mono" />
    <Footer />
  </div>
</template>

<script setup>
  import NavBar from "./components/NavBar.vue";
  import Footer from "./components/Footer.vue";
</script>

<style scoped>
  .content {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    transition: all 0.5s;
  }
</style>
