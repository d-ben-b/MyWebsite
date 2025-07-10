<template>
  <div
    ref="scrollContainer"
    class="container flex w-full min-h-screen overflow-x-auto select-none active:cursor-grabbing"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseleave="stopDrag"
    @mouseup="stopDrag">
    <div class="flex gap-4 px-4 py-2 flex-nowrap"
      ><PhotoCard
        v-for="(photo, index) in photos"
        :image="photo.image"
        :time="photo.date"
        :title="photo.title"
        :key="index"
    /></div>
  </div>
</template>

<script setup>
  import { ref, computed } from "vue";
  import PhotoCard from "@/components/PhotoCard.vue";
  const scrollContainer = ref(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const image_files = [];
  const photos = [
    {
      image: "https://picsum.photos/id/1011/600/600",
      date: "2025-07-10",
      title: "Ocean Breeze",
    },
    {
      image: "https://picsum.photos/id/13/600/600",
      date: "2025-07-11",
      title: "Mountain Trail",
    },
    {
      image: "https://picsum.photos/id/5/600/600",
      date: "2025-07-12",
      title: "City Lights",
    },
    {
      image: "https://picsum.photos/id/51/600/600",
      date: "2025-07-12",
      title: "City Lights",
    },
    {
      image: "https://picsum.photos/id/115/600/600",
      date: "2025-07-12",
      title: "City Lights",
    },
    {
      image: "https://picsum.photos/id/255/600/600",
      date: "2025-07-12",
      title: "City Lights",
    },
  ];

  const image = computed(() => {
    return (index) => {
      if (index < 0 || index >= image_files.length) {
        console.error(`Invalid index: ${index}`);
        return null;
      }
      return new URL(`../assets/images/${image_files[index]}`, import.meta.url);
    };
  });

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
