import React, { useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import qs from 'qs';

function LoginForm() {

    const navigate = useNavigate()
    const email = useRef(null)
    const password = useRef(null)

    async function login(){
        let data = { "email": email.current.value, "password": password.current.value }

        await axios({ 
            method: "POST",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: "http://localhost:4001/login",
            data: qs.stringify(data),
        })

        .then(function (response) {
            localStorage.setItem("id", response.data["_id"])
            console.log(response.data["_id"])
            navigate("/")
        })

        .catch((error) => {
            alert("User Not Found")
        })
    }

  return (
    <form className="login-form-container">
        <input type="text" ref={email} id="email" placeholder="Email"></input>
        <input type="password" ref={password} id="password" placeholder="Password"></input>
        <a>Forgot Password?</a>
        <button type="button" onClick={login}>Login</button>
        <Link to={"/register"}>Create Account</Link>
    </form>
  )
}

export default LoginForm;