<template>
  <div class="relative w-full h-[85vh] p-1 home bg-content text-align-left">
    <div
      class="h-[700px] flex justify-start mx-auto relative top-0 left-0 overflow-hidden">
      <Transition mode="out-in">
        <img
          :src="image_file"
          :key="image_file"
          alt=""
          class="relative left-0 h-full overflow-hidden transition duration-700 ease-in-out" />
      </Transition>
    </div>
    <p class="text-style top-[100px]">Hello!</p>
    <p class="text-style top-[130px]">My name is RUAN, SHAO-MING.</p>
    <p class="content-style top-[200px]"> I'm a passionate web developer. </p>
    <p class="content-style top-[230px]"
      >Explore my projects, learn more about me.</p
    >
    <p class="content-style top-[260px]">Feel free to get in touch.</p>
    <svg
      class="absolute top-0 left-0 w-full h-full"
      viewBox="0 0 2000 800"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg">
      <polygon points="650,800 2000,800 2000,200 650,800" fill="#3b6609" />
      <!-- foreignObject 內放 HTML，用來排版所有聯絡內容 -->
      <foreignObject x="1350" y="600" width="600" height="200">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style="
            font-family: monospace;
            color: white;
            font-size: 20px;
            text-align: right;
          ">
          <p style="margin: 0"
            >"Code is like humor. When you have to explain it,</p
          >
          <p style="margin: 0">it’s bad." – Cory House</p>
        </div>
      </foreignObject>
    </svg>
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
