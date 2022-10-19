import classes from "./RemovePokemon.module.css"

function RemovePokemon(props){

  const removePoke = (name, pokeIndex) => {
    console.log("remove button HERE")
    // console.log(props.poketeam)
    // console.log("2nd remove button HERE")
    console.log(pokeIndex)
    const newTeam = props.poketeam.filter((pokemon, index) => 
      pokemon.name !== name || index !== pokeIndex)
    props.setPoketeam(newTeam)
    // console.log(newTeam)
  }


  return (
    <div className={classes.button}>
      <button type="button" onClick={ () => removePoke(props.name, props.index) }>Remove Pokemon</button>
    </div>
  )
}

export default RemovePokemon;