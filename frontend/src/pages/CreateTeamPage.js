import { useEffect, useState } from 'react';
import PokeAPI from '../api/PokeAPI';
import PokemonList from '../components/PokemonList';
import RemovePokemon from '../components/RemovePokemon';
import classes from "./CreateTeamPage.module.css"

function CreateTeamPage(props){
  
  // states
  const [pokemonData, setPokemonData] = useState([])
  const [poketeam, setPoketeam] = useState([])
  const [teamName, setTeamName] = useState("")
  //event handler
  const loadPokemon = async () => {
    const filteredPokemonData = await PokeAPI.getAllPokemon()
      // set a data variable, wait for load pokemon to load...then call API here.
      // console.log(filteredPokemonData)
      // console.log(data)
      //if data within API call exists then return the values of that data and set it as the current value.
       setPokemonData(filteredPokemonData)
  }

  const loadTeam = async () => {
    const teamNameData = await PokeAPI.getTeamName()
    setTeamName(teamNameData)
  }


// effects
  useEffect(() => {
    loadPokemon()
    loadTeam()
  }, [props.username])
  
            
  return (
    <div>
      <div className={classes.teamheader}>
      <button onClick={ loadTeam }>Generate Team Name Here!</button>
      <h4> Current Team Name:</h4>
        <h2>{ teamName }</h2>
      {
        poketeam?.length > 0 && <h4> Your Team: </h4>
      }
      </div>
      <div className={classes.team}>
        {
          poketeam?.map((pokemon, index) => (
            <div className={classes.teamcard} key={pokemon.name}>
              {
                //this ternary operator is here because i can't get rid of the first empty element in array
                pokemon.name?.length > 0 && 
                <div>
                  <h2 className={classes.pokename}>
                    {pokemon.name.toString().charAt(0).toUpperCase() + pokemon.name.toString().slice(1)}
                  </h2>
                  <div className={classes.sprite}>
                    <img src={pokemon.sprite}></img>
                  </div>
                  <RemovePokemon className={classes.rembutton} poketeam={poketeam} setPoketeam={setPoketeam} name={pokemon.name} index={index}/>
                </div>  
              }
            </div>
          ))
        }
      </div>
      <hr />
      <h3 className={classes.choosepoketitle}>Choose your Pokemon!</h3>
      <div className={classes.pokelistmain}>
          <PokemonList 
            poketeam={poketeam} 
            setPoketeam={setPoketeam} 
            pokemonData={ pokemonData } />
      </div>
    </div>
  );
}
export default CreateTeamPage;