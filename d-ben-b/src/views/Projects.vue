<template>
  <section id="projects" class="p-10 bg-content min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">My Projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold text-gray-800">{{ project.title }}</h2>
        <p class="text-gray-600 mt-2">{{ project.description }}</p>
        <a
          :href="project.link"
          target="_blank"
          class="text-blue-500 mt-4 inline-block"
          >View Project</a
        >
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from "vue";

  const projects = ref([
    {
      id: 1,
      title: "Project One",
      description: "A brief description of Project One.",
      link: "https://link-to-project-one.com",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of Project Two.",
      link: "https://link-to-project-two.com",
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of Project Three.",
      link: "https://link-to-project-three.com",
    },
  ]);
</script>

<style scoped></style>
