<template>
    <div>
      <div class="tile is-parent">
          <article class="tile is-child notification is-primary">
            <p class="title has-text-centered">Bitcoin</p>
          </article>
        </div>
        <div  >
        <CoinsTable/>
        
      </div>
    </div>
  </template>
  
<script>
import CoinsTable from "../components/CoinsTable.vue"

export default {
    components:{
      CoinsTable,
    },
    data() {
        return {
          criptoCoins: [],
          errors:[]
        }
    },
  methods: {
    async getCoins() {
      await api
        .get("/assets?limit=15&offset=14")
        .then(
          response => {
            // manejar respuesta exitosa
            console.log(response.data)

            this.criptoCoins = response.data.data
          }
        )
        .catch((e) => {
          this.errors.push(e)
        })
      console.log(this.criptoCoins)
    }
  },
    mounted() {  
      this.getCoins()
    }
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
</style>
