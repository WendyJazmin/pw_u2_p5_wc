<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selecciono',pokemon.id)">{{pokemon.nombre}}</li>
    
    </ul>
  </div>
</template>

<script>
export default {

  props:{
    pokemons:{
      type:Array,
      required:true
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  background-color: rgb(204, 194, 255);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 250px;
  margin-bottom: 10px;
  cursor: pointer;
  color: rgb(80, 0, 154);
}

li:hover{
    background-color: rgba(0, 0, 0, 0.1);
}

.options-container{
    display: flex;
    justify-content: center;
}

</style>