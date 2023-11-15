import "./login.css"
import { Link } from "react-router-dom"

export default function login() {
  return (
    <div className="login">
        <span className="loginTitle">
            Login
        </span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="enter Your email.." />
        <label>Password</label>
        <input type="Password" className="loginInput" placeholder="enter Your Password.." />
     <button className="loginButton">
Login
     </button>
     <button className="loginRegisterButton">
     <Link  className="link" to="/register">Register</Link>
     </button>
  
      </form>
    </div>
  )
}
