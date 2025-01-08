<template>
  <section id="projects" class="p-10 bg-content min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Innovation in Action</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white p-6 rounded-lg shadow-md card"
        v-show="project.id != -1">
        <h2 class="text-xl font-semibold text-gray-800">{{ project.title }}</h2>
        <img :src="project.img" alt="" class="w-auto p-6" />
        <p class="text-gray-600 mt-2">{{ project.description }}</p>
        <button
          @click="
            selectedProject = project;
            showModal = true;
          "
          class="transition duration-500 text-blue-500 mt-4 inline-block hover:bg-emerald-900 px-4 py-2 rounded-md hover:text-emerald-100">
          Discover More
        </button>
      </div>
    </div>
    <transition
      name="modal"
      enter-active-class=" transition-opacity duration-500 ease-out"
      enter-from-class="opacity-0 "
      enter-to-class="opacity-100 "
      leave-active-class=" transition-opacity duration-500 ease-in"
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
  import { useRouter } from "vue-router";
  import ProjectModal from "./ProjectModal.vue";

  const router = useRouter();
  const showModal = ref(false);
  const selectedProject = ref([
    {
      id: 1,
      title: "元太eNote電子紙專案",
      img: "src/assets/images/Project/_MG_4683.jpg",
      description:
        "Explored the innovative potential of electronic paper to enhance daily life and promote sustainability, inspired by its reusability and cutting-edge design, reminiscent of Harry Potter's animated newspapers.",
      link: "https://link-to-project-one.com",
    },
  ]);

  const projects = ref([
    {
      id: 1,
      title: "元太eNote電子紙專案",
      img: "src/assets/images/Project/_MG_4683.jpg",
      description:
        "Explored the innovative potential of electronic paper to enhance daily life and promote sustainability, inspired by its reusability and cutting-edge design, reminiscent of Harry Potter's animated newspapers.",
      link: "https://link-to-project-one.com",
    },
    {
      id: 2,
      title: "2024年AI台南數位城市治理黑客松",
      img: "src/assets/images/Project/IMG_0959.png",
      description:
        "In 2024, we joined the AI Tainan Digital City Governance Hackathon and developed a platform to help the Health Bureau efficiently disseminate information. This was my first website built with Vue.js and Flask, where I learned about optimizing government workflows and platform design.",
      link: "https://link-to-project-two.com",
    },
    {
      id: 3,
      title: "未完待續",
      description: "",
      link: "https://link-to-project-three.com",
    },
    {
      id: -1,
      title: "裕珍馨員工訓練平台",
      description: "",
      link: "https://link-to-project-three.com",
    },
  ]);

  const viewPage = (id) => {
    router.push(`/projects/${id}`);
  };

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
