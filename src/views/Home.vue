<template>

<section class="hero is-link is-fullheight-with-navbar bg-image">
  <div class="hero-body">
    <p class="title">
      Cripto market App
    </p>
  </div>
</section>
        <div class="is-flex is-justify-content-center">
          
          <CoinsTable/>
        </div>
    
  </template>
  
<script>
import CoinsTable from "../components/CoinsTable.vue"

export default {
    components:{
      CoinsTable,
    },
}
</script>


<style scoped>
.title {
  font-size: 3rem;
  font-weight: 300;
  line-height: 1.2;
  margin: 1.67em 0;
}
.subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  margin: 1w.83em 1em 0.92em; 
}
.button {
    /* agregar margin top */
    margin-top: 0.5rem;
    margin-left: 0.5rem;
} 
.bg-image{
  background-image: url("../assets/im-storie-guia-para-saber-que-son-las-criptomonedas-3.jpg");
}
</style>
