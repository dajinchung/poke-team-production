import PokeAPI from "../api/PokeAPI"
import { useNavigate } from 'react-router-dom'
import classes from "./SignUpPage.module.css"

function SignUpPage(props){
  
  //router params
  const navigate = useNavigate()

  //event handler
  const handleSignUp = async (evt) => {
    evt.preventDefault()

    let signUpData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    }
    console.log("SIGN UP INFO:", signUpData)
    const data = await PokeAPI.signUp(signUpData)

    if(data){
      navigate("/login") // redirects to home page
    }
  }

  return(
    <div className={classes.signupbody}>
      <h2>Sign Up Page</h2>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/101.svg"></img>
      <p>Voltorb said, "Can't make a team if you're not signed up!"</p>
      <form onSubmit={ handleSignUp } method="POST">
        <label className={classes.signuplabel}>Username:</label>
        <input name="username" placeholder="enter username" />
        <br/>
        <label className={classes.signuplabel}>Password:</label>
        <input type="password" name="password" placeholder="create a password" />
        <br />
        <button type="submit" className={classes.signupbutton}>Sign Up!</button>
      </form>
    </div>
  )
}

export default SignUpPage;