<template>
  <nav class="sticky top-0 z-10 w-full p-4 font-mono bg-navBg h-18">
    <ul class="flex space-x-4">
      <li>
        <router-link to="/" class="mx-2 text-2xl text-text hover-effect"
          >Home</router-link
        >
      </li>
      <li>
        <router-link to="/about" class="mx-2 text-2xl text-text hover-effect"
          >About</router-link
        >
      </li>
      <li>
        <router-link to="/projects" class="mx-2 text-2xl text-text hover-effect"
          >Projects</router-link
        >
      </li>
      <li>
        <router-link to="/contact" class="mx-2 text-2xl text-text hover-effect"
          >Contact</router-link
        >
      </li>
      <li>
        <router-link to="/journey" class="mx-2 text-2xl text-text hover-effect"
          >Journey</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped>
  .hover-effect {
    position: relative;
    display: inline-block;
    padding-bottom: 4px;
    z-index: 2;
  }

  .hover-effect::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background: #98d66c;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-in-out;
  }

  .hover-effect:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
</style>
