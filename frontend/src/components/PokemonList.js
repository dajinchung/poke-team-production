import PokeAPI from "../api/PokeAPI"
import { useState, useEffect } from 'react'
import classes from "./PokemonList.module.css"
import apiHelpers from "../api/apiHelpers"
import Cookie from "js-cookie"

const PokemonList = (props) => {
  // const [pokeTeam, updatePoketeam] = useState(null)
  // console.log(props)
  // const {pokemonData} = props
  
  const sendToTeam = (name, sprite) => {
 
    if (name?.length > 0) {
      const updatePoketeam = [
          //copy current poketeam state
        ...props.poketeam, 
        {
          // adding new pokemon name
          name: name,
          // with their sprite
          sprite: sprite
        }
      ]
      // updating state
      props.setPoketeam(updatePoketeam) 
    }
  }

  // console.log(props.pokeTeam)
  useEffect(() => {
    sendToTeam()
  }, [])

  return (
    <div>
      <ul className={classes.list}>
        {props.pokemonData?.map((pokemon) => (
           <div key={pokemon.namePokemon} className={classes.column}>
             <div className={classes.card}>
              <h2 key={pokemon.namePokemon}>
                {pokemon.namePokemon.toString().charAt(0).toUpperCase() + pokemon.namePokemon.toString().slice(1)}
              </h2>
              <img src={pokemon.spritePokemon}></img>
              <div className={classes.flavortext}>{pokemon.descriptionPokemon}</div>
              <button type="submit" onClick={() => sendToTeam(pokemon.namePokemon, pokemon.spritePokemon)}>Add to Team</button>
           </div>
         </div>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList;