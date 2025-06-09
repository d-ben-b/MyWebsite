<template>
  <section id="projects" class="min-h-screen p-10 bg-content">
    <h1 class="mb-6 text-3xl font-bold text-gray-800">My Journey</h1>
    <div class="grid grid-cols-1 gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project.id"
        class="p-6 bg-white rounded-lg shadow-md card"
        v-show="project.id != -1">
        <h2 class="text-xl font-semibold text-gray-800">{{ project.title }}</h2>
        <img :src="project.img" alt="" class="w-auto p-6" />
        <p class="mt-2 text-gray-600">{{ project.short_description }}</p>
        <button
          @click="
            selectedProject = project;
            showModal = true;
          "
          class="inline-block px-4 py-2 mt-4 text-blue-500 transition duration-500 rounded-md hover:bg-emerald-900 hover:text-emerald-100">
          Discover More
        </button>
      </div>
    </div>
    <transition
      name="modal"
      enter-active-class="transition-opacity duration-500 ease-out "
      enter-from-class="opacity-0 "
      enter-to-class="opacity-100 "
      leave-active-class="transition-opacity duration-500 ease-in "
      leave-from-class="opacity-100 "
      leave-to-class="opacity-0">
      <ProjectModal
        v-if="showModal"
        :isVisible="showModal"
        :project="selectedProject"
        @close="showModal = false" />
    </transition>
  </section>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import ProjectModal from "../components/ProjectModal.vue";

  const showModal = ref(false);
  const selectedProject = ref([
    {
      id: 1,
      title: "元太eNote電子紙專案",
      img: "src/assets/images/Project/_MG_4683.jpg",
      description: "",
      link: "https://link-to-project-one.com",
    },
  ]);

  const projects = ref([
    {
      id: 3,
      title: "Coming Soon",
      img: "src/assets/images/Project/coming_soon.png",
      inner_img: "src/assets/images/Project/coming_soon.png",
      description:
        "A fresh project is on the horizon, promising creativity, sustainability, and groundbreaking tech insights. Check back soon for updates!",
      short_description:
        "A fresh project is on the horizon, promising creativity, sustainability, and groundbreaking tech insights. Check back soon for updates!",
      link: "",
    },
  ]);

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".card")
      .forEach((card) => observer.observe(card));
  });
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
