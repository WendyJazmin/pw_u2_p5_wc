<!--todo componente siempre tiene-->
<!--shorcut <vue+tab-->
<template>
<div>
  <h2>{{ titulo }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <button @click="sumar()">+1</button>
  <button @click="restar()">-1</button>
</div>
</template>

<script>
export default {
  /*props:["titulo","valor"],*/

  /**otra forma de declarar un props */
  props: {
    titulo:String,
    valor: {
      type: Number,
      required: false,
      default: 100,
      validator(value){
        if(value>0){
          console.log('ERROR!!!')
        }
        return value>0
      },
    },
  },

  data() {
    return {
      counter: this.valor
    };
  },


  methods: {
    obtenerCuadrado() {
      console.log("Se calcula el cuadrado");
      return this.counter * this.counter;
    },

   /* calcularValor(){
      return 5+5*10;
    },*/

    sumar(){
      return this.counter++;
    },

    restar(){
      return this.counter--;
    }
  },
  computed:{
    obtenerCuadradoComputado() {
      console.log("Se calcula el cuadrado computado");
      return this.counter * this.counter;
    },
  },
};
</script>

<style >
  button{
    background-color:rgb(137, 94, 236) ;
    border-radius: 5px;
    border: 2px solid black;
    color: white;
    cursor: pointer;
    margin: 0px 5px; 
    padding: 5px 15px;

  }

  button:hover{
    background: rgb(87, 139, 235);
  }

  h2{
    
    font-family: cursive;
    color: blue;
  }

  p{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   
  }

</style>