<template>
  <div
    class="relative w-full max-h-screen p-1 home bg-content text-align-center">
    <!-- <h1 class="mb-4 text-4xl font-bold text-gray-800">Welcome to My Website</h1> -->
    <div
      class="h-[700px] flex justify-start mx-auto relative top-0 left-0 overflow-hidden">
      <Transition mode="out-in">
        <img
          :src="image_file"
          :key="image_file"
          alt=""
          class="relative left-0 h-full transition duration-700 ease-in-out" />
      </Transition>
    </div>
    <svg class="absolute top-0 w-full h-full opacity-100">
      <polyline
        points="0,0 2000,800 2000,0 0,0"
        style="fill: whitesmoke; stroke: whitesmoke; stroke-width: 5" />
    </svg>
    <p class="text-style top-10">Hello!</p>
    <p class="text-style top-20">My name is RUAN, SHAO-MING.</p>
    <p class="content-style top-[120px]">
      I'm a passionate web developer. Explore my projects, learn more about me.
    </p>
    <p class="content-style top-[190px]">Feel free to get in touch.</p>
    <svg
      class="absolute top-0 left-0 w-full h-full"
      viewBox="0 0 2000 800"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg">
      <!-- 黑色多邊形 -->
      <polygon points="650,800 2000,800 2000,200 650,800" fill="#3b6609" />
      <!-- foreignObject 內放 HTML，用來排版所有聯絡內容 -->
      <foreignObject x="1600" y="400" width="400" height="360">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          class="flex flex-col items-center justify-between w-full h-full p-6 text-white">
          <!-- 聯絡方式 -->
          <div class="space-y-1 text-xl text-center">
            <a
              href="mailto:bend06b@gmail.com"
              class="block transition-colors hover:underline hover:text-gray-300">
              bend06b@gmail.com
            </a>
            <p class="text-lg">0988-106-253</p>
          </div>

          <!-- 社群圖示 -->
          <div class="flex items-center justify-center gap-4">
            <a
              href="https://facebook.com/ben.yuan.35/"
              target="_blank"
              class="transition-transform hover:scale-110">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                class="icon-style" />
            </a>
            <a
              href="https://line.me/R/ti/p/%40YourLineID"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-transform hover:scale-110">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3670/3670089.png"
                alt="LINE"
                class="icon-style" />
            </a>
            <a
              href="https://instagram.com/…"
              target="_blank"
              class="transition-transform hover:scale-110">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                alt="Instagram"
                class="icon-style" />
            </a>
          </div>

          <!-- 下載履歷按鈕 -->
          <div class="w-full mt-4">
            <a
              href="/path/to/Your_CV.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <button
                class="flex items-center justify-center w-full py-2 space-x-2 font-medium text-black transition bg-white rounded-lg hover:bg-gray-100">
                <!-- 下載箭頭 icon (Flaticon) -->
                <span>Download CV</span>
              </button>
            </a>
          </div>
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
