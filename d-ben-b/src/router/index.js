import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Projects from "@/views/Projects.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      routeName: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      routeName: "About",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      routeName: "Contact",
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      routeName: "Projects",
    },
  },
];

const router = createRouter({
  history: createWebHistory("/"), // Replace with your base URL
  routes,
});

export default router;
