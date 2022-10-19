import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PokeAPI from '../api/PokeAPI'
import classes from "./HomePage.module.css"
function HomePage(props){

  const renderAuthItems = () => {
    if (props.username === "") {
      return (
      <>
        <button className={classes.homebuttons}><Link to="signup">Sign Up</Link></button>
        <button className={classes.homebuttons}><Link to="login">Login to Account</Link></button>
      </>
      )
    }
  }

  return(
    <div className={classes.home}>
      <h2>Gotta catch 'em all!</h2>
      <p>Sylveon says, "Log in or sign up to start making your own Pokemon Team!"</p>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png" className={classes.homeimg}></img>
      <br/>
      { renderAuthItems() }
    </div>    
  );
}

export default HomePage;