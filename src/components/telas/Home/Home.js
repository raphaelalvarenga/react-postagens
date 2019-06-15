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
        })
    }

    render() {
        let postagens = this.props.todosPosts.posts.length > 0 ? (
            <Postagens postagens = {this.props.todosPosts} />
        ) : (
            <h1>Carregando postagens...</h1>
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
        todosPosts: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        carregaPosts: (posts) => dispatch({type: "CARREGAR_POSTS", posts})
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Home);
