const obtenerIdPokemons=()=>{
    const pokemons1 = getRandomInt(600)
    const pokemons2 = getRandomInt(600)
    const pokemons3 = getRandomInt(600)
    const pokemons4 = getRandomInt(600)
    const pokemonsArr=[pokemons1,pokemons2,pokemons3,pokemons4];
    console.log(pokemonsArr);
}

const obtenerNombresPokemons=(arreglo)=>{
    const nombre1= consumirAPI(arreglo[0]);
    const nombre2= consumirAPI(arreglo[0]);
    const nombre3= consumirAPI(arreglo[0]);
    const nombre4= consumirAPI(arreglo[0]);
    
}

function consumirAPI(id){
    return "nombre"
}
const obtenerIpPokemonsFachada=()=>{
    obtenerIdPokemons()
}

function obtenerAleatorio(max){
    return Math.floor(Math.random()*max)
}

export default obtenerIpPokemonsFachada