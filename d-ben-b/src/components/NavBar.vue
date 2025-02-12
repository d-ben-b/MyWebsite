<template>
  <nav class="bg-navBg p-4 top-0 z-10 font-mono h-18 sticky w-full">
    <ul class="flex space-x-4">
      <li>
        <router-link to="/" class="text-text hover-effect text-2xl mx-2"
          >Home</router-link
        >
      </li>
      <li>
        <router-link to="/about" class="text-text hover-effect text-2xl mx-2"
          >About</router-link
        >
      </li>
      <li>
        <router-link to="/projects" class="text-text hover-effect text-2xl mx-2"
          >Projects</router-link
        >
      </li>
      <li>
        <router-link to="/contact" class="text-text hover-effect text-2xl mx-2"
          >Contact</router-link
        >
      </li>
      <li>
        <router-link to="/trip" class="text-text hover-effect text-2xl mx-2"
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
