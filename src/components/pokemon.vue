<template>
    <div>
      <div class="container">
        <label for="id">id:</label>
        <input v-model="id" @keyup.enter="buscarPokemon" type="text" id="id" />
      </div>
  
      <form class="formulario" v-if="pokemonData" >
        <div class="input-container">
          <label for="name">Name:</label>
          <input v-model="pokemonData.name" type="text" id="name" disabled />
        </div>
  
        <div class="container">
          <label for="weight">Weight:</label>
          <input v-model="pokemonData.weight" type="text" id="weight" disabled />
        </div>
  
        <div class="container">
          <label for="baseExperience">Base Experience:</label>
          <input v-model="pokemonData.base_experience" type="text" id="baseExperience" disabled />
        </div>
      </form>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        id: '',
        pokemonData: null,
      };
    },
    methods: {
      async buscarPokemon() {
  
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'+this.id;
  
        
          const response = await fetch(apiUrl);
  
          const data = await response.json();
  
          this.pokemonData = {
            name: data.name,
            weight: data.weight,
            base_experience: data.base_experience,
          };
        
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-bottom: 10px;
  }
  
  .formulario {
    display: flex;
    flex-direction: column;
  }
  </style>
  