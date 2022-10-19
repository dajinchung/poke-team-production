import { Link, useNavigate } from "react-router-dom";
import PokeAPI from "../api/PokeAPI";
import classes from "./MainHeader.module.css"

function MainHeader(props) {
  const navigate = useNavigate()
  // helpers
  const doLogout = async () => {
    const data = await PokeAPI.logout()
    if (data) {
      props.setUsername("")
      navigate("/")
    }
  }
  // render
  const renderAuthItems = () => {
    if (props.username === "") {
      return (
        <>
          &nbsp;|&nbsp;
          <Link to="/login">Login</Link>
          &nbsp;|&nbsp;
          <Link to="/signup">Sign Up</Link>
        </>
      )
    }
    else {
    return (
      <>
        &nbsp;|&nbsp;
        <Link to="/" onClick={ doLogout } >Log out</Link>
        &nbsp;|&nbsp;
        <Link to="create-team"> Create Team</Link>
      </>
    )
    }
  }

  return (
    <div id="header" className={classes.header}>
      <div id="header-title">
        <h1>{ props.title }</h1>
      </div>
      <div id="header-menu">
        <Link to="/">Home</Link>
        { renderAuthItems() }
      </div>
    </div>
  )
}

export default MainHeader; 