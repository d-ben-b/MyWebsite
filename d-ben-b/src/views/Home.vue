<template>
  <div
    class="home p-2 bg-content min-h-screen w-full text-align-center relative">
    <!-- <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to My Website</h1> -->
    <div class="h-[800px] flex justify-start mx-auto relative top-0 left-0">
      <Transition mode="out-in">
        <img
          :src="image_file"
          :key="image_file"
          alt=""
          class="h-full left-0 transition duration-700 ease-in-out relative" />
      </Transition>
    </div>
    <svg class="absolute top-0 w-full h-full blur-sm opacity-75">
      <polyline
        points="0,0 1500,450 1500,0 0,0"
        style="fill: whitesmoke; stroke: whitesmoke; stroke-width: 5" />
    </svg>
    <p class="text-style top-10">Hello!</p>
    <p class="text-style top-20">My name is RUAN, SHAO-MING.</p>
    <p class="text-style top-[120px]">
      I'm a passionate web developer. Explore my projects, learn more about me.
    </p>
    <p class="text-style top-[190px]">Feel free to get in touch.</p>
    <div class="text-style top-[450px]">
      <a
        href="https://github.com/d-ben-b"
        target="_blank"
        rel="noopener noreferrer">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub"
          class="inline-block w-8 h-8 mr-2" />
      </a>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from "vue";

  const ImgArray = ref([
    "../assets/images/LINE_ALBUM_台東出去玩第三天_241225_1.jpg",
    "../assets/images/HOME.jpg",
    "../assets/images/LINE_ALBUM_2024714高雄出來玩_241225_1.jpg",
    "../assets/images/LINE_ALBUM_20221225大二聖誕節🎄_241225_1.jpg",
  ]);

  const imageIndex = ref(0);

  const image = (index) => {
    if (index < 0 || index >= ImgArray.value.length) {
      console.error(`Invalid index: ${index}`);
      return null;
    }
    return new URL(ImgArray.value[index], import.meta.url);
  };

  setInterval(() => {
    imageIndex.value = (imageIndex.value + 1) % ImgArray.value.length;
  }, 5000);

  const image_file = computed(() => {
    return image(imageIndex.value);
  });
</script>

<style scoped>
  .v-enter-from {
    opacity: 0;
  }
  .v-enter-to {
    opacity: 1;
  }
  .v-leave-from {
    opacity: 1;
  }
  .v-leave-to {
    opacity: 0;
  }
</style>
