import React from "react";
import RegisterForm from "../components/RegisterForm"
import image from "../assets/images/logos/addrssr.png"

const RegisterPage = () => {
    return(
        <div className="BG">
            <div className="login-container">
                <img src={image}></img>
                <RegisterForm/>
            </div>
        </div>
    )
}

export default RegisterPage;