import React from 'react'
import Postagens from "./Postagens";

export class Home extends React.Component {

    componentDidMount() {
        console.log("O componente home carregou");
    }

    render() {
        return (
            <div>
                <Postagens />
            </div>
        )
    }
}

export default Home;
