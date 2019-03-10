import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Schedule from './Schedule';

class Fantasy extends Component { 

    render() {
        return(
            <div>
                <h1>This is the page for the fantasy league.</h1>
                <Link to = '/playerinfo'>PlayerInfo</Link>
                <Schedule />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        auth: state.firebase.auth
    }
}

//export default connect(mapStateToProps)(Fantasy);
export default Fantasy;