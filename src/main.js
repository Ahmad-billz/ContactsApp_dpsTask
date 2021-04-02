import {createApp } from 'vue'
import App from './App.vue'
  
import { createWebHistory, createRouter } from "vue-router";
import ContactsList from "./components/ContactsList"
import AddContact from "./components/AddContact"

const routes = [
    {
      path: "/",
      name: "Contacts",
      component: ContactsList,
    },
    {
        path: "/add",
        name: "add",
        component: AddContact,
      }
  ];
 const router = createRouter({
    history: createWebHistory(),
    routes,
  });

createApp(App).use(router).mount('#app')