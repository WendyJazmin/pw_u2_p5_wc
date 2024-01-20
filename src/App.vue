<template>
  <PokemonPage />
  
</template>

<script>
import Imagen from './components/Imagen.vue';
//import Contador from "./components/Contador.vue";
//import Calculadora from "./components/Calculadora.vue";
//import Pregunta from "./components/Pregunta.vue";

import PokemonPage from "./pages/PokemonPage.vue";



export default {
  name: "App",
  components: {
    //Imagen,
    //Contador,
   // Calculadora,
    //Pregunta,
    PokemonPage,
  },
  data(){
    return{
      puntaje:0,
    intento:0,
    url1:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    url2:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    url3:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
    texto1:"XXXXXXX",
    texto2:"XXXXXXX",
    texto3:"XXXXXXX",
    mostrarGanador:false,
    mostrarPerdedor:false,
    mostrarJuego:true
    }  
  },

  methods:{
    async jugar(){
     
      //instancia 1
      const data1 = await this.consumirAPI();
      this.texto1 = data1.answer;
      this.url1 = data1.image;

      //instancia 2
      const data2 = await this.consumirAPI();
      this.texto2 = data2.answer;
      this.url2 = data2.image;

      //instancia 3
      const data3 = await this.consumirAPI();
      this.texto3 = data3.answer;
      this.url3 = data3.image;

      this.evaluarResultado();
    },
    async consumirAPI(){
      return await fetch("https://yesno.wtf/api").then(r=>r.json());
    }, 
     evaluarResultado(){
        this.intento++;

        if(this.texto1==="yes" && this.texto2==="yes" && this.texto3==="yes"){
          this.puntaje+=5;
        }else if (
          (this.texto1==="yes" && this.texto2==="yes") || 
          (this.texto1==="yes" && this.texto3==="yes") ||
          (this.texto2==="yes" && this.texto3==="yes") 
        ){
          this.puntaje=this.puntaje+2;
        }else if(
          this.texto1==="yes" ||
          this.texto2==="yes" ||
          this.texto3==="yes"
        ){
          this.puntaje+=1;
        }

        if(this.puntaje>=10){
          this.mostrarGanador=true;
          this.mostrarPerdedor=false;
          this.mostrarJuego=false;
        }
        
        
        if(this.intento===5){
          this.mostrarPerdedor=true;
          this.mostrarGanador=false;
          this.mostrarJuego=false;
        }


  }, reiniciar(){
    this.puntaje=0,
    this.intento=0,
    this.url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    this.url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    this.url3="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
    this.texto1="XXXXXXX",
    this.texto2="XXXXXXX",
    this.texto3="XXXXXXX",
    this.mostrarGanador=false,
    this.mostrarPerdedor=false,
    this.mostrarJuego=true
  },
},
};
</script>

<style>

.container{
 grid-template-columns:  repeat(4,200px);
 display: grid;
 justify-content: center;
 align-content: center;
}

h1{
  grid-column: span 4;
}

h2{
  grid-column: span 2;
}

.mensaje1{
  color: rgb(255, 0, 76);
}

.mensaje2{

  
  color: rgb(51, 0, 255);
}
</style>