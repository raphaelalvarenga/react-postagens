import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav id="navNavbar">
            <ul>
                <li className="liNavItens"><NavLink to = "/">Home</NavLink></li>
                <li className="liNavItens"><NavLink to = "/perfil">Perfil</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;