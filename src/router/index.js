import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/containerApp.vue";
import PopupAddon from "@/components/popupAddon/popupAddon.vue";


const router = createRouter({
  history: createWebHistory('/worldofwarcraft'),
  routes: [
    {
      path: "/",  //chemin de l'url
      name: "home", //variable qui définit le nom de la route
      component: Home, //nom du composant
    },
    {
        path: "/addon",  //chemin de l'url
        name: "popupAddon", //variable qui définit le nom de la route
        component: PopupAddon, //nom du composant
      },

  ],
});

export default router;