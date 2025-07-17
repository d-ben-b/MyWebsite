<template>
  <div ref="scrollContainer"
    class="container relative flex w-full min-h-screen overflow-x-auto select-none active:cursor-grabbing"
    @mousedown="startDrag" @mousemove="onDrag" @mouseleave="stopDrag" @mouseup="stopDrag">
    <!-- Rope SVG（延伸進來用 dashed 線條） -->
    <PhotoView :isOpen="isModalOpen" :selectedPhoto="selectedPhoto" @close="closeModal" />
    <svg class="absolute top-[15px] left-0 w-[120%] h-8 z-0" viewBox="0 0 600 50" preserveAspectRatio="none">
      <path d="M0,25 C100,5 200,45 300,25 C400,5 500,45 600,25" stroke="#8B5E3C" stroke-width="6" fill="none"
        stroke-linecap="round" stroke-dasharray="6,6" />
    </svg>
    <div class="flex gap-4 px-4 py-2 flex-nowrap top-[38px] absolute ">
      <PhotoCard class="card" v-for="(photo, index) in photos" :image="photo.image" :time="photo.date"
        :title="photo.title" :key="index" @click="openModal(index)" />
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PhotoCard from "@/components/PhotoCard.vue";
import PhotoView from "@/components/PhotoView.vue"
const scrollContainer = ref(null);
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

const isModalOpen = ref(false);
const selectedPhotoIndex = ref(null);
const selectedPhoto = computed(() => {
  if (selectedPhotoIndex.value !== null) {
    return photos[selectedPhotoIndex.value];
  }
  return null;
});

const image_files = [];
const photos = [
  {
    image: "anniversary/first/1-0.jpg",
    date: "2022-08-30",
    title: "Dating for the first time",
  },
  {
    image: "anniversary/Anping/2-0.jpg",
    date: "2022-09-11",
    title: "Anping",
  },
  {
    image: "anniversary/Helloween/3-0.jpg",
    date: "2022-10-28",
    title: "Helloween",
  },
  {
    image: "anniversary/Chrismas/4-0.jpg",
    date: "2022-12-25",
    title: "Chrismas",
  },
  {
    image: "https://picsum.photos/id/115/600/600",
    date: "2025-07-12",
    title: "City Lights",
  },
];

const openModal = (index) => {
  selectedPhotoIndex.value = index;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const startDrag = (e) => {
  isDragging = true;
  startX = e.pageX - scrollContainer.value.offsetLeft;
  scrollLeft = scrollContainer.value.scrollLeft;
};

const onDrag = (e) => {
  if (!isDragging) return;
  e.preventDefault(); // 防止文字選取
  const x = e.pageX - scrollContainer.value.offsetLeft;
  const walk = x - startX;
  scrollContainer.value.scrollLeft = scrollLeft - walk;
};

const stopDrag = () => {
  isDragging = false;
};
</script>

<style scoped>
.card {
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>
