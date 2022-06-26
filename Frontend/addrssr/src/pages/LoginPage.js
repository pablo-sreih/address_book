import React from "react";
import LoginForm from "../components/LoginForm"
import image from "../assets/images/logos/addrssr.png"

const Login = () => {
    return(
        <div className="BG">
            <div className="login-container">
                <img src={image}></img>
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login;