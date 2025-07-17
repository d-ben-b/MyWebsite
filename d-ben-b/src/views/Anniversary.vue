<template>
  <div class="container flex flex-col items-center justify-center w-full min-h-screen p-4">
    <transition name="modal" enter-active-class="transition-opacity duration-500 ease-out "
      enter-from-class="opacity-0 " enter-to-class="opacity-100 "
      leave-active-class="transition-opacity duration-200 ease-in " leave-from-class="opacity-100 "
      leave-to-class="opacity-0">
      <PhotoView :isOpen="isModalOpen" :selectedPhoto="selectedPhoto" @close="closeModal" />
    </transition>
    <div ref="scrollContainer1"
      class="flex flex-col w-full overflow-x-auto select-none scroll-container h-fit active:cursor-grabbing"
      @mousedown="startDrag($event, 1)" @mousemove="onDrag($event, 1)" @mouseleave="stopDrag" @mouseup="stopDrag">
      <!-- Rope SVG（延伸進來用 dashed 線條） -->
      <svg class=" left-0 w-[120%] h-8 z-0" viewBox="0 0 600 50" preserveAspectRatio="none">
        <path d="M0,25 C100,5 200,45 300,25 C400,5 500,45 600,25" stroke="#8B5E3C" stroke-width="6" fill="none"
          stroke-linecap="round" stroke-dasharray="6,6" />
      </svg>
      <div class="flex w-[120%] gap-4 px-4 py-2 flex-nowrap">
        <PhotoCard class="card" v-for="(photo, index) in photos" :image="photo.image" :time="photo.date"
          :title="photo.title" :key="index" @click="openModal(index, 1)" />
      </div>
    </div>
    <div ref="scrollContainer2"
      class="flex flex-col w-full h-full overflow-x-auto select-none scroll-container active:cursor-grabbing"
      @mousedown="startDrag($event, 2)" @mousemove="onDrag($event, 2)" @mouseleave="stopDrag" @mouseup="stopDrag">
      <svg class="left-0 w-[120%] h-8 z-0 flex-shrink" viewBox="0 0 600 50" preserveAspectRatio="none">
        <path d="M0,25 C100,5 200,45 300,25 C400,5 500,45 600,25" stroke="#8B5E3C" stroke-width="6" fill="none"
          stroke-linecap="round" stroke-dasharray="6,6" />
      </svg>
      <div class="flex w-[120%] gap-4 px-4 py-2 flex-nowrap ">
        <PhotoCard class="card" v-for="(photo2, index) in photos2" :image="photo2.image" :time="photo2.date"
          :title="photo2.title" :key="index" @click="openModal(index, 2)" />
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from "vue";
import PhotoCard from "@/components/PhotoCard.vue";
import PhotoView from "@/components/PhotoView.vue"
const scrollContainer1 = ref(null);
const scrollContainer2 = ref(null);
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

const containerMap = {
  1: scrollContainer1,
  2: scrollContainer2
};

const isModalOpen = ref(false);
const selectedPhotoIndex = ref(null);
const selectedPhoto = computed(() => {
  if (selectedPhotoIndex.value !== null && selectedPhotoIndex.value >= 0 && selectedPhotoIndex.value < photos.length) {
    return photos[selectedPhotoIndex.value];
  }
  else if (selectedPhotoIndex.value !== null && selectedPhotoIndex.value < 0 && Math.abs(selectedPhotoIndex.value) <= photos2.length) {
    return photos2[Math.abs(selectedPhotoIndex.value) - 1];
  }
  return null;
});

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
    desc: "At first, I was a bit nervous about joining this event because I didn’t really know everyone that well, and I was afraid I might get tricked. But once I arrived, we had so much fun together — we painted, made soap, and played some small games. I’m really glad I went to this Halloween party with you.",
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
    desc: "我記得這次聖誕節我收到一個非常令我印象深刻的禮物，那是你給我藏起來偷偷裝上蓋子的安全帽，這道我現在我還是清晰德記的尤其是我那時候還帶著搭手扶梯，想想真是太呆了，不過我也很開心當下有這麼做，畢竟這真的是很難得的經驗呢！(放棄翻譯成英文了＼（〇_ｏ）／)",
    image_files: [
      "anniversary/Chrismas/4-1.jpg",
      "anniversary/Chrismas/4-2.jpg",
      "anniversary/Chrismas/4-3.jpg",
      "anniversary/Chrismas/4-4.jpg",
    ],
  },
  {
    image: "https://picsum.photos/id/100/600/600",
    date: "2025-07-12",
    title: "City Lights",
  },
];

const photos2 = [
  {
    image: "https://picsum.photos/id/115/600/600",
    date: "2025-07-12",
    title: "City Lights",
  },
  {
    image: "https://picsum.photos/id/185/600/600",
    date: "2025-07-12",
    title: "City Lights",
  },
  {
    image: "https://picsum.photos/id/114/600/600",
    date: "2025-07-12",
    title: "City Lights",
  },
  {
    image: "https://picsum.photos/id/119/600/600",
    date: "2025-07-12",
    title: "City Lights",
  },
]

const openModal = (index, photo_number) => {
  if (photo_number === 1) {
    selectedPhotoIndex.value = index;
  }
  else if (photo_number === 2) {
    selectedPhotoIndex.value = -index - 1; // Use negative index for photos2
  }
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const startDrag = (e, id) => {
  isDragging = true;
  const container = containerMap[id].value;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
};

const onDrag = (e, id) => {
  if (!isDragging) return;
  e.preventDefault();
  const container = containerMap[id].value;
  const x = e.pageX - container.offsetLeft;
  const walk = x - startX;
  container.scrollLeft = scrollLeft - walk;
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

.scroll-container {
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;
  /* IE & Edge */
  scrollbar-width: none;
  /* Firefox */
}

.scroll-container::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera */
}
</style>
