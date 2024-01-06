<template>
    <img src="https://media1.tenor.com/m/nSeXvWhdjPEAAAAC/pochacco-happy.gif" 
    alt="no se puede visualizar"/>

    <div class="dark"></div>

    <div class="container">
        <input v-model="pregunta" type="text"/>
        <p>Recuerda que debes terminar con el signo de interrogacion</p>

        <h2>{{pregunta}}</h2>
        <h1>SI, NO......</h1>   
    </div>

</template>

<script>
export default {

    data(){
        return{

            pregunta: "voy a ser millonario",
        };
    },

/*declarando un observador */
    watch:{
        pregunta(value, oldvalue){/*el nombre del metodo tiene que tener el mismo nombre de la propiedad reactiva */
            /**este metodo debe recibir 2 argumentos */
            console.log(value);/**value: es el valor de la caja de texto */
             console.log(oldvalue);

             if(!value.includes("?"))return;
             
             //Consumo del API
             this.consumirAPI()
        },
    },

    methods:{
        async consumirAPI(){/**cuando se tiene await, el metodo siempre debe tener la pal */
           const {answer,image}= await fetch('https://yesno.wtf/api').then(respuesta=>respuesta.json())/*ELEMENTO DE APERTUR es el URL del API (en Fetch) */ 
            console.log(answer);
            console.log(image);

        }
    }

};

</script>

<!-- scoped para que solo aplique al componente-->
<style scoped>
.dark,img{
    height: 100vh;/**para que ocupe todo el ancho y alto de la pagina web*/
    width:  100vw;
    max-height: 100%;
    max-width: 100%;
    position: fixed;/*este estilo hace como una marca de agua, se coloca atras */
    top: 0px;/*v a a empezar desde la posicion0 desde arriba */
    left:0px;
}

.dark{
    background-color: rgba(0,0,0,0.5);

}

input{
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;/*NO SE PINTE EL BORDE */
}

.container{
    position: relative;
}
input:focus{
    outline: none;
}
p{
    color: azure;
    font-size: 20px;
    margin-top: 10px;
}

h1,h2{
    color:rgb(227, 211, 251);
}

h2{
    margin-top: 150px;
}
</style>