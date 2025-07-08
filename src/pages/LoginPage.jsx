import React, { useState } from "react";
import "./Loginpage.css";
import { Link } from 'react-router-dom'
const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log("email and password", email, password)

    const handleSubmit = async () => {
        const response = await fetch("")
    }
  return (
    <div className="man">
    <div id="main4">
        <div>
            <h1>Login</h1>

            <div id="inputbox">
                <input type="email" placeholder="School ID" id="user" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            </div>
            <div id="inputbox">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="pass" required></input>
            </div>
            <div id="remember-for">
                <label>
                    <input  type="checkbox"  required></input>Remember me
                </label>
                <a href="/">Forget Password?</a>
            </div>
            <button type="submit" id="btn">Login</button>
            <div id="register">
                <p>Don't have an account?<Link to={"/register"}> Register</Link></p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default LoginPage;
