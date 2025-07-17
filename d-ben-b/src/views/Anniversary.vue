<template>
  <div ref="scrollContainer"
    class="container relative flex w-full min-h-screen overflow-x-auto select-none active:cursor-grabbing"
    @mousedown="startDrag" @mousemove="onDrag" @mouseleave="stopDrag" @mouseup="stopDrag">
    <!-- Rope SVG（延伸進來用 dashed 線條） -->
    <transition name="modal" enter-active-class="transition-opacity duration-500 ease-out "
      enter-from-class="opacity-0 " enter-to-class="opacity-100 "
      leave-active-class="transition-opacity duration-200 ease-in " leave-from-class="opacity-100 "
      leave-to-class="opacity-0">
      <PhotoView :isOpen="isModalOpen" :selectedPhoto="selectedPhoto" @close="closeModal" />
    </transition>
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
    desc: "this is the first time we met, and it was a very special day for us. we went to many places, and we had a lot of fun together. we also took a lot of photos to remember this day.",
    image_files: [
      "anniversary/first/1-1.jpg",
      "anniversary/first/1-2.jpg",
      "anniversary/first/1-3.jpg",
      "anniversary/first/1-4.jpg",
      "anniversary/first/1-5.jpg",
      "anniversary/first/1-6.jpg",
      "anniversary/first/1-7.jpg",
      "anniversary/first/1-8.jpg",
    ],
  },
  {
    image: "anniversary/Anping/2-0.jpg",
    date: "2022-09-11",
    title: "Anping",
    desc: "Anping is a place we visited together, the most memorable part was we go to Anping Tree House, and we took a lot of photos there. we also went to the Anping Port to see TSUM TSUM. I am very happy to be with you on this day, and I hope we can go to more places together in the future.",
    image_files: [
      "anniversary/Anping/2-1.jpg",
      "anniversary/Anping/2-2.jpg",
      "anniversary/Anping/2-3.jpg",
      "anniversary/Anping/2-4.jpg",
    ],
  },
  {
    image: "anniversary/Helloween/3-0.jpg",
    date: "2022-10-28",
    title: "Helloween",
    desc: "",
    image_files: [
      "anniversary/Helloween/3-1.jpg",
      "anniversary/Helloween/3-2.jpg",
      "anniversary/Helloween/3-3.jpg",
      "anniversary/Helloween/3-4.jpg",
    ],
  },
  {
    image: "anniversary/Chrismas/4-0.jpg",
    date: "2022-12-25",
    title: "Chrismas",
    desc: "",
    image_files: [
      "anniversary/Chrismas/4-1.jpg",
      "anniversary/Chrismas/4-2.jpg",
      "anniversary/Chrismas/4-3.jpg",
      "anniversary/Chrismas/4-4.jpg",
    ],
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
