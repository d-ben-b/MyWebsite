import { createApp } from "vue";
import router from "./router";
import axios from "axios";
import App from "./App.vue";
import "@/assets/tailwind.css";

const app = createApp(App);
axios.defaults.baseURL = "https://your-base-url.com";

app.config.globalProperties.$axios = axios;

app.use(router);

app.mount("#app");
