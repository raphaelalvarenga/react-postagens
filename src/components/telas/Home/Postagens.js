import React from "react";
import {Link} from "react-router-dom";
import FotoUsuario from "../../../images/usuario.png"
import {connect} from "react-redux";

import "../../../css/Postagens.css";

const Postagens = (props) => {
    return(
        <div>
            {
                props.postagens.posts.map((post) => {
                    return(
                        <div key = {post.id} className = "divPostagens">
                            <div className="divFotoUsuario">
                                <div>
                                    <img className = "imgIconeUsuario" src={FotoUsuario} alt="foto-do-usuario"/>
                                </div>
                                <div>
                                    Nome do Usuário
                                </div>
                            </div>

                            <div className="divInfoPost">
                                <div>
                                    <h3 className = "headerPost"><Link to = {`/post/${post.id}`}>{post.title}</Link></h3>
                                </div>
                                
                                <hr />

                                <div>
                                    <p className = "parPostTexto">{post.body}</p>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Postagens);