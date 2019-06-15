import React from 'react'
import Postagens from "./Postagens";
import {connect} from "react-redux";

export class Home extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <Postagens />
            </div>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        teste: state
    }
}

export default connect(mapStoreToProps)(Home);
