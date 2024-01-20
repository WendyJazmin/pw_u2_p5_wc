<template>
  <div class="container" v-if="mostrarJuego">
    <h1>Casino Pokemon</h1>
    <h2>Puntaje: {{ puntaje }}</h2>
    <h2>Intento: {{ intento }}</h2>

    <div class="imagenes-container">
      <Imagen class="imagen1" :texto="texto1" :urlImg="url1"/>
      <Imagen class="imagen2" :texto="texto2" :urlImg="url2"/>
      <Imagen class="imagen3" :texto="texto3" :urlImg="url3"/>
    </div>

    <div class="button-container">
      <button @click="jugar">Jugar</button>
    </div>
  </div>

  <div class="mensaje1" v-if="mostrarPerdedor">
    <h1>Haz utilizado tus 5 intentos</h1>
    <h1>el juego ha terminado, intentalo nuevamente</h1>
    <button class="nuevoJuego" @click="reiniciar">Nuevo Juego</button>
  </div>

  <div class="mensaje2" v-if="mostrarGanador">
    <h1>Puntaje: {{ puntaje }}</h1>
    <h1>Felicitaciones has ganado un premio de $10.000,00</h1>
    <button class="nuevoJuego" @click="reiniciar">Nuevo Juego</button>
  </div>
</template>

<script>
import Imagen from './components/Imagen.vue';
//import Contador from "./components/Contador.vue";
//import Calculadora from "./components/Calculadora.vue";
//import Pregunta from "./components/Pregunta.vue";

//import PokemonPage from "./pages/PokemonPage.vue";



export default {
  name: "App",
  components: {
    Imagen
    //Contador,
   // Calculadora,
    //Pregunta,
    //PokemonPage,
  },
  data(){
    return{
      puntaje:0,
    intento:0,
    url1:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    url2:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    url3:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
    texto1:"XXXXXX",
    texto2:"XXXXXX",
    texto3:"XXXXXX",
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
    this.texto1="XXXXXX",
    this.texto2="XXXXXX",
    this.texto3="XXXXXX",
    this.mostrarGanador=false,
    this.mostrarPerdedor=false,
    this.mostrarJuego=true
  },
},
};
</script>

<style>

div {
  font-family: "Baloo 2", sans-serif;
}

.container {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  justify-content: center;
  place-items: center;

}

h1 {
  grid-column: span 4;
}

h2 {
  grid-column: span 2;
}

.button-container {
  grid-column: span 4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  
}

.imagenes-container {
  display: flex;
  margin: auto;
  gap: 100px; /* Espaciado entre imágenes */
}

.nuevoJuego{
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  
}

.mensaje1 {
  color: rgb(255, 0, 76);
  text-align: center;
  align-items: center;
  padding: auto;
  margin-top: 200px;
 
}

.mensaje2 {
  color: rgb(74, 38, 255);
  text-align: center;
 padding: auto;
 margin-top: 200px;
}
</style>