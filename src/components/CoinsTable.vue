<template lang="">
    <div class="">
        <table class="table is-striped is-hoverable is-fullwidth">
          <thead>

            <th> Name</th>
            <th> Rank</th>
            <th> Symbol</th>
            <th>Supply</th>
            <th>Max Supply</th>
            <th>Price </th>
        </thead>
          <tbody>
            <tr v-for=" (coin, id) in criptoCoins " :key="index">
              <td>{{coin.id}}</td>
              <td>{{coin.rank}}</td>
              <td>{{coin.symbol}}</td>
              <td>{{coin.supply}}</td>
              <td>{{coin.maxSupply}}</td>
              <td>{{ coin.priceUsd }}</td>
              <td><button class="button is-info">Ver Mas</button></td>
            </tr>
          </tbody>
        </table>
    </div>
</template>
<script>
export default {
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
<style lang="">
    
</style>