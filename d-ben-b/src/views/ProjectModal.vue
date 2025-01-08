<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    v-show="isVisible">
    <div class="bg-white rounded-lg p-6 w-11/12 max-w-2xl relative">
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition duration-300">
        &times;
      </button>
      <!-- Modal Content -->
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">
        {{ project.title }}
      </h2>
      <img
        :src="project.img"
        alt="Project Image"
        class="w-full rounded-lg mb-4" />
      <p class="text-gray-600">{{ project.description }}</p>
      <a
        :href="project.link"
        target="_blank"
        class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        View Project
      </a>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from "vue";

  const props = defineProps({
    isVisible: Boolean,
    project: Object,
  });

  const emit = defineEmits(["close"]);

  const closeModal = () => {
    emit("close");
  };
</script>

<style scoped>
  /* Optional additional styles */
</style>
