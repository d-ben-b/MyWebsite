<template>
  <div v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center transition-opacity bg-black bg-opacity-75"
    @click="closeModal">
    <div class="relative max-w-4xl p-6 mx-auto overflow-hidden bg-white rounded-lg shadow-xl" @click.stop>
      <!-- Clothespin SVG - consistent with PhotoCard -->
      <svg class="absolute transform -translate-x-1/2 w-14 h-14 -top-6 left-1/2" viewBox="0 0 64 64" fill="none">
        <rect x="28" y="0" width="8" height="32" rx="2" fill="#6B7280" />
        <rect x="20" y="4" width="24" height="6" rx="1" fill="#4B5563" transform="rotate(45 20 4)" />
        <circle cx="32" cy="16" r="2" fill="white" />
      </svg>

      <!-- Close button -->
      <button @click="closeModal" class="absolute text-gray-500 transition-colors top-4 right-4 hover:text-gray-800">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Photo content -->
      <div class="flex flex-col items-center mt-4">
        <img v-if="selectedPhoto" :src="selectedPhoto.image" alt="" class="max-h-[70vh] object-contain" />
        <div class="mt-4 text-xl font-semibold text-center">{{ selectedPhoto?.title }}</div>
        <div class="mt-2 text-gray-600">{{ selectedPhoto?.date }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  selectedPhoto: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>