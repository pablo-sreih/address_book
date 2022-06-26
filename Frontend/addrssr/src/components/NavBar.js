import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/logos/addrssr.png"

const NavBar = () => {
    return(
        <div className="Nav-Div">
            <img src={image} alt=""></img>
            <div className="links">
                <Link to={"/contacts"}>Contacts</Link>
                <Link to={"/add-contact"}>Add Contacts</Link>
                <Link to={"/"} onClick={() => {localStorage.clear()}}>Logout</Link>
            </div>
        </div>
    )
}

export default NavBar;