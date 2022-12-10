import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue"
import CoinDetail from "../views/CoinDetail.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/coin/:id', name:"coin",component: CoinDetail,props:(route) =>{
      const id = route.params.id
    } },
    // { path: '/coin', component: NotFound },
    // { path: '/error:code(.*)', component: NotFound },
    // { path: '/:pathMatch(.*)*', component: NotFound }
  ];
  
  const history = createWebHistory();
  
  const router = createRouter({
    history,
    routes,
  });
  
export default router;