import React, { useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import qs from 'qs';

function RegisterForm() {

    // const navigate = useNavigate()
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    async function login(){
        let data = { "name": name.current.value,
                    "email": email.current.value,
                    "password": password.current.value }

        await axios({
            method: "POST",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: "http://localhost:4001/register",
            data: qs.stringify(data),
        })

        .then(function (response) {
            console.log(response)
        })

        .catch((error) => {
            alert(error)
        })
    }

  return (
    <form className="login-form-container">
        <input type="text" ref={name} placeholder="Full Name"></input>
        <input type="text" ref={email} id="email" placeholder="Email"></input>
        <input type="password" ref={password} id="password" placeholder="Password"></input>
        <button type="button" onClick={login}>Sign Up</button>
        <Link to={"/"}>Login Instead</Link>
    </form>
  )
}

export default RegisterForm;