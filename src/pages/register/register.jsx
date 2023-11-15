import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="login">
        <span className="loginTitle">
            Register
        </span>
      <form className="loginForm">
        <label>Username</label>
        <input type="text" className="loginInput" placeholder="Enter your username.." />
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Enter your email.." />
        <label>Password</label>
        <input type="Password" className="loginInput" placeholder="Enter your password.." />
     <button className="registerButton">
     <Link className="link" to="/register">Register</Link>
     </button>
     <button className="registerLoginButton">
     <Link className="link" to="/login">Login</Link>
     </button>
      </form>
    </div>
  )
}
