<template>
  <section id="contact" class="p-5 bg-content rounded-lg min-h-screen">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
    <p>
      If you would like to get in touch, feel free to reach out via the
      following methods:
    </p>
    <ul class="list-none p-0">
      <li>
        Email:
        <a href="mailto:your-email@example.com" class="text-blue-500"
          >your-email@example.com</a
        >
      </li>
      <li>
        LinkedIn:
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          class="text-blue-500"
          >Your LinkedIn Profile</a
        >
      </li>
      <li>
        GitHub:
        <a
          href="https://github.com/your-username"
          target="_blank"
          class="text-blue-500"
          >Your GitHub Profile</a
        >
      </li>
    </ul>
    <form @submit.prevent="sendMessage" class="mt-5">
      <div class="mb-4">
        <label for="name" class="block mb-1">Name:</label>
        <input
          type="text"
          id="name"
          v-model="name"
          required
          class="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div class="mb-4">
        <label for="message" class="block mb-1">Message:</label>
        <textarea
          id="message"
          v-model="message"
          required
          class="w-full p-2 border border-gray-300 rounded"></textarea>
      </div>
      <button
        type="submit"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Send Message
      </button>
    </form>
  </section>
</template>

<script setup>
  import { ref } from "vue";

  const name = ref("");
  const message = ref("");

  const sendMessage = () => {
    // Logic to handle sending the message (e.g., API call)
    console.log(`Name: ${name.value}, Message: ${message.value}`);
    // Reset form fields
    name.value = "";
    message.value = "";
  };
</script>
