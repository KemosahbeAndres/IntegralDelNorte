import { createRouter, createWebHashHistory } from "vue-router";

import LoginView  from "../views/LoginView.vue"
import CoursesView from "../views/content/CoursesView.vue"
import CourseView from "../views/content/CourseView.vue"
import UserView from "../views/UserView.vue"
import SettingsView from "../views/SettingsView.vue"
import ResumeView from '../views/dashboard/ResumeView.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    alias: "/home",
    component: ResumeView,
  },
  {
    path: "/courses",
    name: "Courses",
    component: CoursesView,
    children: [
      {
        path: ":id",
        component: ()=>import("@/views/content/CourseView.vue")
      }
    ]
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: "vue-active-link"
});

export default router;
