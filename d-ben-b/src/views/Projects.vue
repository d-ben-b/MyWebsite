<template>
  <section id="projects" class="min-h-screen p-10 bg-content">
    <h1 class="mb-6 text-3xl font-bold text-gray-800">Innovation in Action</h1>
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
  import { useRouter } from "vue-router";
  import ProjectModal from "./ProjectModal.vue";

  const router = useRouter();
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
      id: 1,
      title: "元太eNote電子紙專案",
      img: "src/assets/images/Project/_MG_4683.jpg",
      inner_img: "src/assets/images/Project/_MG_4994.jpg",
      short_description:
        "I believe electronic paper, as a form of green technology, holds the potential to enhance information access while reducing resource waste. Through the interdisciplinary opportunities provided by NCKU, I have been able to apply my technical skills to sustainable innovation. This experience has strengthened my commitment to the SDGs and inspired me to contribute actively through design and development. Looking forward, I hope to continue improving technologies like e-paper and use my expertise to address both environmental and societal needs.",
      description: `This project marked my first step into web development. Built solely with HTML, CSS, and JavaScript, it may not be the most advanced among my works, but it played a significant role in paving the way for my growth and success.
  I deeply resonate with the United Nations Sustainable Development Goals (SDGs), especially in promoting environmentally friendly technologies . Among them, electronic paper stands out for its reusability and low energy consumption—qualities that make it both innovative and sustainable. Inspired by the animated newspapers in Harry Potter, I envision its potential to revolutionize how we interact with digital content.
  At National Cheng Kung University (NCKU), I have had the opportunity to apply my skills in app design and web development to explore this technology further. This hands-on experience has enriched my understanding of both system-level design and user experience challenges. While current limitations—such as slow refresh rates and screen ghosting—still hinder widespread adoption, I remain optimistic about the future of e-paper and its potential to contribute meaningfully to sustainable innovation.`,
      link: "https://eink-demo-etvn.vercel.app",
    },
    {
      id: 2,
      title: "2024年AI台南數位城市治理黑客松",
      img: "src/assets/images/Project/IMG_0959.png",
      short_description:
        "In 2024, we joined the AI Tainan Digital City Governance Hackathon and built a web platform to replace Excel-based communication in the Health Bureau. I developed the frontend using Vue.js and integrated it with a Flask backend. Our role-based system featured form validation, version control, and task tracking to improve collaboration and prevent data overwrites. We earned the Best Popularity Award and gained hands-on experience in optimizing government workflows with full-stack web technologies.",
      description: `In 2024, we participated in the AI Tainan Digital City Governance Hackathon and developed a platform to help the Health Bureau improve the efficiency of information dissemination. Through interviews with staff and volunteers, we discovered that their original communication workflow heavily relied on Excel files. This often led to errors, accidental data overwrites, and difficulty tracking changes—especially when multiple people edited the same sheet.
    To address these issues, we designed a role-based web platform where each user could log in with defined permissions. Instead of editing shared Excel files, users submitted or updated data through structured forms that automatically validated inputs and logged every change. All records were stored in a centralized database with version control and timestamps, ensuring traceability and preventing accidental overwrites. We also added a task-tracking and commenting system to replace scattered email communication, enabling more efficient collaboration across departments.
    I was responsible for building the frontend using Vue.js, while also integrating it with a Flask backend. This was my first full-stack web development project, and it taught me how to apply technology to streamline real-world government workflows. Our project was well-received by public sector stakeholders and earned us the Best Popularity Award in the competition.`,
      link: "",
    },
    {
      id: 3,
      title: "Sparkful Hack to the Top AI 金融創新黑客松",
      img: "src/assets/images/Project/LINE_ALBUM_SPARKFUL AI金融黑客松_250430_1.jpg",
      inner_img:
        "src/assets/images/Project/LINE_ALBUM_SPARKFUL AI金融黑客松_250430_2.jpg",
      short_description:
        "In 2025, our team was selected as a finalist among 200+ teams in the Sparkful Hackathon. I built the frontend with Vue.js and implemented the backend using Django. We retrained YOLOv11n on the UECFOOD256 dataset for food recognition, integrating AI, health scoring, and financial incentives into a full-stack web platform.",
      description: `In 2025, our team was selected as a finalist from over 200 teams to compete in the Sparkful Hackathon. Although we did not place in the final rankings, the experience was immensely rewarding—we gained hands-on experience with new technologies and had the opportunity to connect with other talented participants from diverse backgrounds.
    In this project, my teammate led the financial mechanism and UI design, while I was responsible for the technical implementation. I built the frontend using Vue.js, and for the backend, I took on the challenge of learning Django, becoming familiar with its MVT architecture and successfully completing full-stack integration.
    For the AI component, we used YOLOv11n as our core food recognition model. Recognizing the limitations of standard pre-trained models, we retrained it using the UECFOOD256 dataset to improve food classification performance. The final product was a web platform built with Django + Vue + YOLOv11n + UECFOOD256, integrating food recognition, health analysis, and financial incentives via RESTful APIs.
    This project provided a valuable opportunity to explore full-stack development and real-world AI deployment in a collaborative, interdisciplinary setting.
    `,
      link: "https://sparkful-frontend.vercel.app",
    },
    {
      id: 4,
      title: "裕珍馨員工訓練平台",
      img: "src/assets/images/Project/YJS.png",
      short_description:
        "This was the first collaborative project I participated in at NCKU. I was responsible for Modules 2 and 6. Although the project was ultimately not completed due to academic commitments and exam schedules, it was still a valuable learning experience. Throughout the process, I learned how to coordinate frontend-backend integration and effectively communicate with teammates and the project manager to align on design and project direction.",
      description: "",
      link: "",
    },
    {
      id: 3,
      title: "未完待續",
      description:
        "Explored the innovative potential of electronic paper to enhance daily life and promote sustainability, inspired by its reusability and cutting-edge design, reminiscent of Harry Potter's animated newspapers.",
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
