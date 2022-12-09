<template lang="">
    <div class="column is-8">
        <table class="table is-striped is-hoverable ">
          <thead>

            <th> Name</th>
            <th> Rank</th>
            <th> Symbol</th>
            <!-- <th>Supply</th>
            <th>Max Supply</th> -->
            <th>Price </th>
            <th>Action </th>
        </thead>
          <tbody>
            <tr v-for=" (coin, id) in criptoCoins " :key="id">
              <td>{{coin.id}}</td>
              <td>{{coin.rank}}</td>
              <td>{{coin.symbol}}</td>
              <!-- <td>{{coin.supply}}</td>
              <td>{{coin.maxSupply}}</td> -->
              <td>{{ coin.priceUsd }}</td>
              <td><router-link to="/coins" class="button is-link is-rounded">Ver Mas</router-link></td>
            </tr>
          </tbody>
        </table>
        <nav class="pagination" role="navigation" aria-label="pagination">
      <a class="pagination-previous" @click="previousPage()">Anterior</a>
      <a class="pagination-next" @click="nextPage()">Siguiente</a>
  
</nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
          criptoCoins: [],
        //   TODO :Manejar errores de llenado de la API
          errors:[],
          limit: 15,
          offset: 0,
        }
    },
  methods: {
    async getCoins() {
      await api
        .get(`/assets?limit=${this.limit}&offset=${this.offset}`)
        .then(
          response => {
            // manejar respuesta exitosa
            this.criptoCoins = response.data.data
          }
        )
        .catch((e) => {
          this.errors.push(e)
        })
      console.log(this.criptoCoins)
    },
    nextPage() {
      this.limit+=15
      this.offset+=15
      this.getCoins()
    },
    previousPage(){
      this.limit-=15
      this.offset-=15
      this.getCoins()
    }
  },
    mounted() {  
      this.getCoins()
    }
    
}
</script>
<style lang="">
    
</style>