import PokeAPI from "../api/PokeAPI"
import { useNavigate } from 'react-router-dom'
import classes from "./LoginPage.module.css"

function LoginPage(props){
  
  //router params
  const navigate = useNavigate()

  //event handler
  const handleLogin = async (evt) => {
    evt.preventDefault()

    let loginData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    }
    console.log("LOGIN INFO:", loginData)
    
    const data = await PokeAPI.login(loginData)

    if(data){
      props.setUsername(data.username)
      navigate("/") // redirects to home page
    }
  }

  return(
    <div className={classes.loginbody}>
      <h2>Login Page</h2>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/137.svg"/>
      <p>Porygon says to put your login info on this form here!</p>
      <form onSubmit={ handleLogin } method="POST">
        <label className={classes.label}>Username:</label>
        <input name="username" placeholder="enter username" />
        <br/>
        <label className={classes.label}>Password:</label>
        <input type="password" name="password" placeholder="enter password" />
        <br />
        <button type="submit" className={classes.loginbutton}>LOGIN</button>
      </form>
    </div>
  )
}

export default LoginPage;