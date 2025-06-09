<template>
  <section
    id="contact"
    class="flex items-center justify-center w-full min-h-screen p-5 rounded-lg bg-content">
    <div class="w-full max-w-3xl">
      <h2 class="mb-6 text-3xl font-bold text-center">Contact Me</h2>

      <p class="mb-4 text-center">
        If you would like to get in touch, feel free to reach out via the
        following methods:
      </p>

      <div class="mb-6 text-center">
        <div class="mb-2">
          Email:
          <a href="mailto:your-email@example.com" class="text-blue-500"
            >your-email@example.com</a
          >
        </div>
        <div class="mb-2">
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            class="text-blue-500"
            >Your LinkedIn Profile</a
          >
        </div>
        <div class="mb-2">
          GitHub:
          <a
            href="https://github.com/your-username"
            target="_blank"
            class="text-blue-500"
            >Your GitHub Profile</a
          >
        </div>
      </div>

      <form @submit.prevent="sendMessage" class="mt-8">
        <div class="mb-4">
          <label for="name" class="block mb-2">Name:</label>
          <input
            type="text"
            id="name"
            v-model="name"
            required
            class="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div class="mb-5">
          <label for="message" class="block mb-2">Message:</label>
          <textarea
            id="message"
            v-model="message"
            required
            rows="4"
            class="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>

        <div class="flex justify-center mt-6">
          <button
            type="submit"
            class="px-6 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700">
            Send Message
          </button>
        </div>
      </form>
    </div>
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
