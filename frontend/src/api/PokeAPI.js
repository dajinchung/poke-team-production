import axios from 'axios'
import apiHelpers from './apiHelpers'

const PokeAPI = { }
const BASE_URL = "https://pokeapi.co/api/v2/"
const DJANGO_URL = "http://localhost:8000/poke_team/"
const TEAM_URL = "https://random-word-form.herokuapp.com/"
// const tryCatchFetch = async (axiosCall) => {
//   try{
//     const response = await axiosCall() //returns promise (tell us if we succeeded or failed), wait for promise to resolve
//     return response.data
//   }
//   catch (e){
//     console.error("tryCatchFetch LOOKIE LOOKIE:", e)
//     return null
//   }
// }
//helper function, passing in a function 'axiosCall()'

//authentication api methods
PokeAPI.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${DJANGO_URL}login/`, loginData, apiHelpers.getCsrfConfig())
  )
}

PokeAPI.logout = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${DJANGO_URL}logout/`, null, apiHelpers.getCsrfConfig())
  )
}

PokeAPI.signUp = async (signUpData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${DJANGO_URL}users/`, signUpData, apiHelpers.getCsrfConfig())
  )
}




// pokemon api methods
PokeAPI.getAllPokemon = async () => {
  const allPokemon = await axios.get(`${BASE_URL}pokemon?limit=151&offset=0`, apiHelpers.getCsrfConfig())
  let pokemonData = []
  for(let pokemon of allPokemon.data.results){
      let pokemonObject = {}

      const detailedPokemon = await axios.get(pokemon.url)

      const namePokemon = detailedPokemon.data.name
      const spritePokemon = detailedPokemon.data.sprites.front_default
      const descriptionPokemon = await axios.get(detailedPokemon.data.species.url)
      // console.log(detailedPokemon.data.id)
      
      pokemonObject["namePokemon"] = namePokemon
      pokemonObject["spritePokemon"] = spritePokemon
      pokemonObject["descriptionPokemon"] = descriptionPokemon.data.flavor_text_entries[1].flavor_text
      
      pokemonData.push(pokemonObject)
      // console.log(detailedPokemon.data.name)
      // console.log(spritePokemon)
      // console.log(descriptionPokemon.data.flavor_text_entries[1].flavor_text)
    }
  return pokemonData
}

PokeAPI.savePokemon = async (pokeData) => {
  const data = await axios.create(`${DJANGO_URL}pokemons/`, pokeData, apiHelpers.getCsrfConfig())
  return data
}



// team name api methods
PokeAPI.getTeamName = async () => {
  const teamAdj = await axios.get(`${TEAM_URL}random/adjective`)
    // console.log(teamAdj.data)
  const teamNoun = await axios.get(`${TEAM_URL}random/noun`)
    // console.log(teamNoun.data)

  const capAdj = teamAdj.data.toString().charAt(0).toUpperCase() + teamAdj.data.toString().slice(1);


 const capNoun = teamNoun.data.toString().charAt(0).toUpperCase() + teamNoun.data.toString().slice(1);



  const teamName = ("Team " + capAdj + " " + capNoun)
  // console.log(typeof teamNoun.data)
  return teamName
}

// PokeAPI.saveTeam


export default PokeAPI;