import React from 'react'
import Postagens from "./Postagens";
import {connect} from "react-redux";
import axios from 'axios';

import "../../../css/Home.css";

export class Home extends React.Component {

    componentDidMount() {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.props.carregaPosts(response.data);
        });

        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            this.props.carregaUsuarios(response.data);
        });
    }

    render() {
        let postagens = this.props.todosPosts.length > 0 && this.props.todosUsuarios.length > 0 ? (
            <Postagens postagens = {this.props.todosPosts} />
        ) : (
            <div id="divCarregando">
                <h1 className = "headerCarregando">Carregando postagens...</h1>
            </div>
        );

        return (
            <div id = "divHome">
                {postagens}
            </div>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        todosUsuarios: state.usuarios,
        todosPosts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        carregaUsuarios: (usuarios) => dispatch({type: "CARREGAR_USUARIOS", usuarios}),
        carregaPosts: (posts) => dispatch({type: "CARREGAR_POSTS", posts})
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Home);
