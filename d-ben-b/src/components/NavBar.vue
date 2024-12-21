<template>
  <nav class="bg-primary p-4 sticky top-0 z-10">
    <ul class="flex space-x-4">
      <li>
        <router-link to="/" class="text-text hover-effect font-lg"
          >Home</router-link
        >
      </li>

      <li>
        <router-link to="/about" class="text-text hover-effect font-lg"
          >About</router-link
        >
      </li>
      <li>
        <router-link to="/projects" class="text-text hover-effect font-lg"
          >Projects</router-link
        >
      </li>
      <li>
        <router-link to="/contact" class="text-text hover-effect font-lg"
          >Contact</router-link
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
    background: linear-gradient(to right, #4424d6, #a79bd9, #4424d6);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }

  .hover-effect:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
</style>
