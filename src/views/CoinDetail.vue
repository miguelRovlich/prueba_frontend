<template>
    <div>
        <h1>Hola mundo</h1>
        <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Component
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>
    </div>
</template>
<script>
export default {


    data() {
        return {
            criptoCoins: [],
            startDate: new Date(),
            endDate: new Date(),
        }
    },
    methods: {
        async getCoinInfo(){
            await api
        .get(`/assets/${this.$route.params.id}/history?interval=d1&${this.startDate}&${this.endDate}`)
        .then(
          response => {
            // manejar respuesta exitosa
            this.criptoCoins = response.data.data
          }
        )
        .catch((e) => {
          this.errors.push(e)
        })
      console.table(this.criptoCoins)
        }
    },
    mounted() {
        

        this.startDate.setDate(this.startDate.getDate()-1 )
        this.endDate.setDate(this.endDate.getDate() -8)

        this.startDate = Math.floor(this.startDate.getTime() / 1000);
        this.endDate = Math.floor(this.endDate.getTime() / 1000);

        console.log(this.$route.params.id)
        this.getCoinInfo()
    },
}
</script>
<style lang="">
    
</style>