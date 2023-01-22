import { createRouter, createWebHashHistory } from 'vue-router'
import KeyboardView from '../views/KeyboardView.vue'
import ContactView from '../views/ContactView.vue'
import DirectoryView from "@/views/DirectoryView.vue";
import FormView from "@/views/FormView.vue";

const routes = [
  {
    path: '/directory',
    name: 'Directory',
    component: DirectoryView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/keyboard',
    name: 'Keyboard',
    component: KeyboardView
  },
  {
    path: '/form',
    name: 'Form',
    component: FormView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
