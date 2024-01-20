<template>
  <div class="container">
    <img  :src="urlImg" alt="No se puede visualizar"><!--v-bind se lo representa con :-->
    <label for="">{{ texto }}</label>
  </div>
</template>

<script>
export default {
    props:{
        texto:{
            type:String
        },
        urlImg:{
            type:String
        }
    }
}
</script>

<style scoped>

label{
    font-family: 'Quicksand', sans-serif;
   color: rgb(97, 3, 185);
   font-size: 30px;
}
img{
    width: 200px;
    height: 300px;
}

.container{
    display: flex;
    align-items: center;
    flex-direction: column;
    
}
</style>