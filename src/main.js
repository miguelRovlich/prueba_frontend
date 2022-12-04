import "../node_modules/bulma/bulma.sass"
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
import axios from "axios"

var api = axios.create({
    // TODO: Mover a .env
    baseURL: "https://api.coincap.io/v2", 
  });
window.api = api
  
createApp(App)
    .use(router)
    .mount('#app')
