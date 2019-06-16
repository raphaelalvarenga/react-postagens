import React from "react";
import {connect} from "react-redux";
import FotoUsuario from "../../../images/usuario.png";

import "../../../css/Post.css";

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.post_id,
            autor: ""
        }
    }

    // componentDidMount() {
    //     let s = this.state;

    //     s. autor = this.props.usuarios[s.id - 1].name;

    //     this.setState(s);
    // }

    render() {
        // console.log(this.props.usuarios[this.state.id - 1].name);
        return (
            <div className="divPost">
                <div className="divAutor">
                    <img className = "imgUsuario" src={FotoUsuario} alt="foto-do-usuario"/>
                    <h3 className="headerAutor">{this.state.autor}</h3>
                </div>

                <div className="divTitulo">
                    <h4 className="headerTitulo">{this.props.posts[this.state.id - 1].title}</h4>
                </div>

                <hr />

                <div className="divTexto">
                    <p>{this.props.posts[this.state.id - 1].body}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Post);