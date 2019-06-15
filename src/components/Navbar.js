import React from "react";
import {NavLink} from "react-router-dom";

import "../css/Navbar.css";

const Navbar = () => {
    return(
        <nav id="navNavbar">
            <ul>
                <li className="liNavItens"><NavLink to = "/">Home</NavLink></li>
                <li className="liNavItens"><NavLink to = "/perfil">Perfil</NavLink></li>
            </ul>

            <div id="divLogout">
                <NavLink to = "/">Sair</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;