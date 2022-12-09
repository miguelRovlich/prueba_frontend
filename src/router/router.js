import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue"
import CoinDetail from "../views/CoinDetail.vue"

const routes = [
    { path: "/", component: Home },
    { path: '/coins', component: CoinDetail, props: (route) =>{
      const id = router.params.id  
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