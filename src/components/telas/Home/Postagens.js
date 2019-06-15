import React from "react";
import {Link} from "react-router-dom";
import FotoUsuario from "../../../images/usuario.png"

import "../../../css/Postagens.css";

const Postagens = (props) => {
    return(
        <div>
            {
                props.postagens.map((post) => {
                    return(
                        <div key = {post.id} className = "divPostagens">
                            
                            <div className="divFotoUsuario">
                                <img className = "imgIconeUsuario" src={FotoUsuario} alt="foto-do-usuario"/>
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

export default Postagens;