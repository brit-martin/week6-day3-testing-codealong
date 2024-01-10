import axios from 'axios'
export async function getNumPokemon(n){
   let result = await axios.get('https://pokeapi.co/api/v2/pokemon')
   return result.data.results[n -1]
}
console.log(await getNumPokemon(5))