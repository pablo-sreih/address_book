import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/logos/addrssr.png"

const NavBar = () => {
    return(
        <div className="Nav-Div">
            <img src={image} alt=""></img>
            <div className="links">
                <a>Add Contacts</a>
                <a>Logout</a>
            </div>
        </div>
    )
}

export default NavBar;