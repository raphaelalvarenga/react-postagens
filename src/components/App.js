import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./telas/Home/Home";
import Perfil from "./telas/Perfil/Perfil";

import "../css/App.css";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Route exact path = "/" component = {Home} />
                <Route path = "/perfil" component = {Perfil} />
            </BrowserRouter>
        )
    }
}

export default App;