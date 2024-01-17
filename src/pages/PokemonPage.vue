<template>
    <h1>Adivina el Pokemon</h1>
    <PokemonImagen :pokemonId="6" :showPokemon="true"/>
    <PokemonOpciones/>
  </template>
  
  <script>
  import PokemonImagen from "../components/PokemonImagen.vue";
  import PokemonOpciones from "../components/PokemonOpciones.vue";
  
  import obtenerIdPokemonsFachada from "../helpers/pokemonHelper.js";
  obtenerIdPokemonsFachada()
  
  export default {
  components:{
      PokemonImagen,
      PokemonOpciones,
  },
  
  
  }
  </script>
  
  <style scoped>
  h1{
    color: rgb(171, 0, 111);
    font-family: "Baloo 2", sans-serif;
    
  }
  
  </style>