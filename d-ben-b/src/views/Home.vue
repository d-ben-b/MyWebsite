<template>
  <section
    class="relative min-h-screen overflow-hidden font-sans text-gray-800 bg-cream">
    <!-- Hero Background with Parallax -->
    <div
      class="absolute inset-0 z-0 will-change-transform"
      :style="{ transform: `translateY(${parallaxOffset.value * 0.5}px)` }">
      <img
        :src="image_file"
        alt="Hero Background"
        class="object-cover w-full h-full opacity-30" />
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
    </div>

    <!-- Hero Section -->
    <div
      class="relative z-10 flex flex-col items-start justify-center h-screen px-6 md:px-16 scroll-fade"
      data-aos="fade-up"
      data-aos-duration="1000">
      <h1 class="mb-4 text-5xl font-extrabold tracking-tight text-gray-900">
        Hi, I'm <span class="text-primary">RUAN, SHAO-MING</span>.
      </h1>
      <p class="max-w-2xl mb-6 text-xl text-gray-700">
        A passionate web developer crafting elegant and interactive solutions.
      </p>
      <div class="flex gap-4">
        <button
          @click="scrollToCardSection"
          class="px-6 py-2 text-white transition bg-primary rounded-xl hover:bg-primary-dark">
          Explore My Work
        </button>
        <button
          class="px-6 py-2 transition border border-primary text-primary rounded-xl hover:bg-primary-light">
          Contact
        </button>
      </div>
      <div
        class="absolute top-[80vh] z-20 -translate-x-1/2 left-1/2 animate-bounce">
        <svg
          class="w-6 h-6 text-gray-600 opacity-70"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    <!-- Card Section -->
    <div
      id="card-section"
      class="scroll-mt-[100px] relative z-10 grid grid-cols-1 gap-8 px-6 pt-32 pb-20 md:px-16 md:grid-cols-3 bg-cream"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000">
      <HomeCard
        title="Projects"
        subtitle="Explore my latest works and applications."
        :image="image(1)"
        link="/projects" />
      <HomeCard
        title="Journey"
        subtitle="A timeline of growth, learning, and coding adventures."
        :image="image(2)"
        link="/journey" />
      <HomeCard
        title="About"
        subtitle="Learn who I am and what drives my passion."
        :image="image(3)"
        link="/about" />
    </div>
  </section>
</template>

<script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from "vue";
  import HomeCard from "../components/HomeCard.vue";
  import AOS from "aos";
  import "aos/dist/aos.css";

  const ImgArray = ref([
    "../assets/images/LINE_ALBUM_台東出去玩第三天_241225_1.jpg",
    "../assets/images/HOME.jpg",
    "../assets/images/LINE_ALBUM_2024714高雄出來玩_241225_1.jpg",
    "../assets/images/LINE_ALBUM_20221225大二聖誕節🎄_241225_1.jpg",
  ]);

  const imageIndex = ref(0);
  const parallaxOffset = ref(0);

  const image = (index) => {
    if (index < 0 || index >= ImgArray.value.length) return null;
    return new URL(ImgArray.value[index], import.meta.url);
  };

  const image_file = computed(() => image(imageIndex.value));

  setInterval(() => {
    imageIndex.value = (imageIndex.value + 1) % ImgArray.value.length;
  }, 5000);

  const handleScroll = () => {
    parallaxOffset.value = window.scrollY;
  };

  onMounted(() => {
    AOS.init({ once: true });
    window.addEventListener("scroll", handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  const scrollToCardSection = () => {
    const el = document.getElementById("card-section");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
</script>

<style scoped>
  .bg-cream {
    background-color: #f9f9eb;
  }
  .text-primary {
    color: #0f4229;
  }
  .bg-primary {
    background-color: #0f4229;
  }
  .bg-primary-dark {
    background-color: #09311f;
  }
  .bg-primary-light {
    background-color: #d8f3e1;
  }
  .border-primary {
    border-color: #0f4229;
  }
  .text-primary-dark {
    color: #09311f;
  }
  .font-sans {
    font-family: "Inter", "DM Sans", sans-serif;
  }
</style>
