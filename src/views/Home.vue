<template>
    <div>
        <h1>a</h1>
    </div>
</template>
<script>


export default {
    data() {
        return {
            // TODO: Mover a .env
            url:"https://api.coincap.io/v2/assets/",
        }
    },    
    methods: {
        getCoins(){
            api.get("/assets/").then(
                function (response) {
    // manejar respuesta exitosa
    console.log(response.data);
  }
            )
        }
    },
    mounted(){
        this.getCoins()
    }
}
</script>
<style lang="">
    
</style>