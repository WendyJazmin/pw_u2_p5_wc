<template>
 
 <h1>ADIVINA EL POKEMON</h1>
    <PokemonImagen/>
    <PokemonOpciones/>
</template>
 
<script>
import PokemonImagen from "./components/PokemonImagen.vue";
import PokemonOpciones from "./components/PokemonOpciones.vue";
export default {
  name: "App",
  components: {
   PokemonImagen,
    PokemonOpciones
  },
  methods: {
    calcularValor(){
      return 5+5*10;
    },
  }
};
</script>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>