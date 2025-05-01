<template>
  <div
    @click="closeModal"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z--1"
    v-show="isVisible">
    <div
      class="relative w-11/12 max-w-2xl p-6 bg-white rounded-lg shadow-lg justify-items-center">
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute text-gray-500 transition duration-300 top-4 right-4 hover:text-red-500">
        &times;
      </button>
      <!-- Modal Content -->
      <h2 class="mb-4 text-2xl font-semibold text-gray-800">
        {{ project.title }}
      </h2>
      <img
        :src="project.inner_img"
        alt="Project Image"
        class="w-full mb-4 rounded-lg max-w-60" />
      <p class="overflow-y-auto text-gray-600 max-h-60">{{
        project.description
      }}</p>
      <a
        v-if="project.link"
        :href="project.link"
        target="_blank"
        class="inline-block px-4 py-2 mt-4 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600">
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
