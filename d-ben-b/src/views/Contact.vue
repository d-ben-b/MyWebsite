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

    <!-- Fixed contact card with custom positioning -->
    <div
      class="fixed p-4 text-white transition-all duration-300 bg-teal-600 rounded-lg shadow-xl hover:shadow-2xl w-72"
      style="right: 400px; bottom: 400px; transform: translateZ(0)">
      <!-- Contact info -->
      <div class="space-y-1 text-sm">
        <p
          ><a
            href="mailto:bend06b@gmail.com"
            class="transition-colors hover:underline hover:text-teal-200">
            bend06b@gmail.com
          </a></p
        >
        <p>0988-106-253</p>
      </div>
      <!-- Social icons -->
      <div class="flex items-center justify-center gap-3 mt-3">
        <a
          href="https://facebook.com/ben.yuan.35/"
          target="_blank"
          class="transition-transform hover:scale-110">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
            class="w-5 h-5 transition-opacity hover:opacity-80" />
        </a>
        <a
          href="https://line.me/R/ti/p/%40YourLineID"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-transform hover:scale-110">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3670/3670089.png"
            alt="LINE"
            class="w-5 h-5 transition-opacity hover:opacity-80" />
        </a>
        <a
          href="https://instagram.com/…"
          target="_blank"
          class="transition-transform hover:scale-110">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
            alt="Instagram"
            class="w-5 h-5 transition-opacity hover:opacity-80" />
        </a>
      </div>
      <!-- CV download button -->
      <div class="mt-4">
        <a href="/path/to/Your_CV.pdf" target="_blank">
          <button
            class="w-full py-2 font-medium text-teal-600 transition-all duration-300 bg-white rounded hover:bg-gray-100 hover:shadow-md hover:text-teal-800">
            Download CV
          </button>
        </a>
      </div>

      <!-- Triangle decoration pointing left -->
      <div
        class="absolute w-0 h-0 border-solid"
        style="
          border-width: 15px 25px 15px 0;
          border-color: transparent #0d9488 transparent transparent;
          left: -25px;
          top: 50%;
          transform: translateY(-50%);
        ">
      </div>
    </div>

    <!-- Keep the existing social icons div -->
    <div class="fixed flex flex-col gap-3 right-4 bottom-20">
      <a
        href="https://github.com/your-username"
        target="_blank"
        class="p-3 text-white transition bg-gray-900 rounded-md hover:bg-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16">
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        class="p-3 text-white transition bg-blue-700 rounded-md hover:bg-blue-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16">
          <path
            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      </a>
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
