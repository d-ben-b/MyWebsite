<template>
  <div
    class="w-[350px] h-[250px] bg-white rounded shadow-lg border border-gray-300 flex flex-col items-center pt-4 pb-96 px-4">
    <img :src="props.image" alt="" class="object-cover w-full aspect-square grow" draggable="false" />
    <div class="time">{{ time }}</div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    default: "https://picsum.photos/id/101/600/600"
  },
  time: String,
  title: String
})
</script>