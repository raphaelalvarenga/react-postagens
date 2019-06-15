import React from "react";
import {Link} from "react-router-dom";

import "../../../css/Postagens.css";

const Postagens = (props) => {
    return(
        <div>
            {
                props.postagens.posts.map((post) => {
                    return(
                        <div key = {post.id} className = "divPostagens">
                            <div>
                                <h3 className = "headerPost"><Link to = {`/post/${post.id}`}>{post.title}</Link></h3>
                            </div>

                            <div>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Postagens;