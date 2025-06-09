import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Projects from "@/views/Projects.vue";
import Journey from "@/views/Journey.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
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
  {
    path: "/journey",
    name: "Journey",
    component: Journey,
    menta: {
      routeName: "Journey",
    },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
