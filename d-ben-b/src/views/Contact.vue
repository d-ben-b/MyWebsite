<template>
  <section
    class="min-h-[90vh] p-10 rounded-lg shadow-md about bg-content overflow-hidden">
    <div class="w-full max-w-3xl">
      <h1 class="mb-10 text-4xl font-bold text-gray-800">Contact Me</h1>
      <p class="mb-4 text-center">
        If you would like to get in touch, feel free to reach out via the
        following methods:
      </p>

      <div class="mb-6 text-center">
        <div class="mb-2">
          Email:
          <a :href="`mailto:${emailData}`" class="text-blue-500">{{
            emailData
          }}</a>
        </div>
        <div class="mb-2">
          LinkedIn:
          <a :href="`${linkedInData}`" target="_blank" class="text-blue-500"
            >LinkedIn Profile</a
          >
        </div>
        <div class="mb-2">
          GitHub:
          <a :href="`${githubData}`" target="_blank" class="text-blue-500"
            >GitHub Profile</a
          >
        </div>
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
          maxlength="500"
          class="w-full p-2 border border-gray-300 rounded resize-none"></textarea>
      </div>

      <div class="flex justify-center mt-6">
        <button
          type="submit"
          class="px-6 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700">
          Send Message
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
  import { ref } from "vue";
  import { data } from "../assets/data";

  const name = ref("");
  const message = ref("");
  const showBubble = ref(true);
  const emailData = data.email;
  const githubData = data.github;
  const linkedInData = data.linkedin;

  const sendMessage = () => {
    // Logic to handle sending the message (e.g., API call)
    console.log(`Name: ${name.value}, Message: ${message.value}`);
    // Reset form fields
    name.value = "";
    message.value = "";
  };
</script>

<style scoped></style>
