<template>
    <div>
        <div>POKEMON</div>
      <div class="container">
        <p for="id" type="id: "><input v-model="id" @keyup.enter="buscarPokemon" type="text" id="id"></p>
      </div>
  
      <form class="formulario" v-if="booleano===true  && id!==''" action="https://mipai.com/procesarEtudiante" method="POST" >
        
          <p for="name" type="name:"><input v-model="nombre" type="text" id="name" /></p>
  
          <p for="weight" type="weight:"><input v-model="peso" type="text" id="weight" /></p>
    
          <p for="baseExperience" type="baseExperience:"> <input v-model="base" type="text" id="baseExperience"></p>
        
      </form>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        id: '',
        nombre:null,
        peso:null,
        base:null,
       
       booleano:false
      };
    },

    watch:{
        ver(){
            
           this.buscarPokemon();
           
        },
    },
    methods: {
      async buscarPokemon() {
  
        
          const {name,weight,base_experience} = await fetch('https://pokeapi.co/api/v2/pokemon/'+this.id).then(respuesta=>respuesta.json());
  
        this.nombre = name;
        this.peso=weight;
        this.base=base_experience;
  
       
          this.booleano=true;
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

  p:before{

content: attr(type);
display: block;/*se muestre el bloque completo*/
margin:5px 2px ;
font-size: 16px;
color: #6a14b1;
font-weight: bold;
}
  </style>
  