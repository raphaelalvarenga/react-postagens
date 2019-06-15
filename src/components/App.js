import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";


import Navbar from "./Navbar";
import Home from "./telas/Home/Home";
import Perfil from "./telas/Perfil/Perfil";
import Post from "./telas/Post/Post";

import rootReducer from "../store/reducers/rootReducer";

import "../css/App.css";

const store = createStore(rootReducer);

class App extends React.Component {
    render() {
        return (
            <Provider store = {store}>
                <BrowserRouter>
                    <Navbar />
                    <Route exact path = "/" component = {Home} />
                    <Route path = "/perfil" component = {Perfil} />
                    <Route path = "/post/:post_id" component = {Post} />
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;