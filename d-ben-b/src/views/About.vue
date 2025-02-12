<template>
  <section class="about p-5 bg-content rounded-lg shadow-md h-fit relative">
    <h1 class="text-4xl font-bold text-gray-800 mb-10">About Myself</h1>
    <div class="flex items-center">
      <img :src="image(0)" alt="my profile" class="w-1/4 mr-4" />
      <div class="text-left">
        <p class="text-lg text-gray -600">
          My name is RUAN, SHAO-MING , and I am currently a student at National
          Cheng Kung University(NCKU) majoring in Electrical Engineering. I have
          a strong passion for artificial intelligence, programming, and
          technological innovation, particularly in applying these technologies
          to solve real-world problems and enhance quality of life.
          Academically, I specialize in data analysis, software development, and
          artificial intelligence. I am proficient in programming languages such
          as C/C++, Java, and Python and have conducted in-depth studies on
          artificial intelligence and IoT technologies. During my university
          years, I participated in several research projects, including AI model
          development and Website development experiences, achieving outstanding
          results in my core courses.
        </p>
      </div>
    </div>
    <div class="flex items-center">
      <div class="text-left">
        <p class="text-lg text-gray -600">
          Beyond academics, I actively engage in cross-disciplinary practices
          and community services, such as promoting STEM education in rural
          schools by teaching programming courses. I have also participated in
          cultural exchange programs that helped me develop a global
          perspective. These experiences have honed my teamwork, leadership, and
          problem-solving skills
        </p>
      </div>
      <img :src="image(1)" alt="Volunteer picture" class="w-1/4 mr-4" />
    </div>
    <div class="flex items-center">
      <img :src="image(2)" alt="my profile" class="w-1/4 mr-4" />
      <div class="text-left">
        <p class="text-lg text-gray -600">
          My goal is to combine my expertise and innovative thinking to work in
          leading technology companies like Google or NVIDIA, contributing to
          cutting-edge developments in AI and IoT. Additionally, I aspire to
          pursue entrepreneurship, leveraging AI to design games that are both
          educational and entertaining. I am confident that my technical skills,
          hands-on experiences, and continuous learning mindset will bring value
          to your team. I look forward to the opportunity to showcase my
          abilities and passion!
        </p>
      </div>
    </div>
    <h2 class="mt-4 text-xl font-semibold text-gray-700">Skills</h2>
    <ul class="list-disc list-inside ml-5 mt-2 text-gray-600">
      <li>JavaScript</li>
      <li>Vue.js</li>
      <li>HTML & CSS</li>
      <li>Node.js</li>
      <li>Python</li>
      <li>Machine learning</li>
    </ul>
    <h2 class="mt-4 text-xl font-semibold text-gray-700">Hobbies</h2>
    <p class="mt-2 text-gray-600">
      In my free time, I enjoy hiking, reading, and exploring new technologies.
    </p>
  </section>
</template>

<script setup>
  import { computed } from "vue";

  const image_files = ["MyProfile.jpg", "Volunteer.jpg", "Goal1.jpg"];
  const image = computed(() => {
    return (index) => {
      if (index < 0 || index >= image_files.length) {
        console.error(`Invalid index: ${index}`);
        return null;
      }
      return new URL(`../assets/images/${image_files[index]}`, import.meta.url)
        .href;
    };
  });
</script>
