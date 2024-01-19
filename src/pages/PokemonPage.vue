<template>
    <h1>Adivina el Pokemon</h1>
    <PokemonImagen :pokemonId="6" :showPokemon="true"/>
    <PokemonOpciones/>
  </template>
  
  <script>
  import PokemonImagen from "../components/PokemonImagen.vue";
  import PokemonOpciones from "../components/PokemonOpciones.vue";
  
  import obtenerPokemonsFachada from "../helpers/pokemonHelper.js";
  
  
  export default {
  components:{
      PokemonImagen,
      PokemonOpciones,
  },
  mounted(){
    console.log('Se monto el componente pokemonPage');
    this.cargaInicial()
  }, 
  methods:{
   async cargaInicial(){
    const arregloPokemons = await obtenerPokemonsFachada();
    console.log('desde componente');
    console.log(arregloPokemons);
    }
  }
  
  }
  </script>
  
  <style scoped>
  h1{
    color: rgb(171, 0, 111);
    font-family: "Baloo 2", sans-serif;
    
  }
  
  </style>