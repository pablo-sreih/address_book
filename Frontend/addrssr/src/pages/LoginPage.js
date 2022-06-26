import React from "react";
import LoginForm from "../components/LoginForm"
import image from "../assets/images/logos/addrssr.png"

const LoginPage = () => {
    return(
        <div className="BG">
            <div className="login-container">
                <img src={image}></img>
                <LoginForm/>
            </div>
        </div>
    )
}

export default LoginPage;