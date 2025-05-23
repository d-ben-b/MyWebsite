<template>
  <div class="flex flex-col items-center content bg-content">
    <NavBar />
    <outerLink />
    <Transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath" class="font-mono" />
    </Transition>
    <Footer />
  </div>
</template>

<script setup>
  import NavBar from "./components/NavBar.vue";
  import Footer from "./components/Footer.vue";
  import outerLink from "./components/outerLink.vue";
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
  /* 淡入淡出過渡 */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
