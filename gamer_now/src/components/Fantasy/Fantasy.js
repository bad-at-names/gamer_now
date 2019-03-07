import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';

class Fantasy extends Component {
    // state = {
    //     players: [ {playerId: 'asd', teamId: null, role: null, name: null, team: null,
    //     eliminations_avg_per_10m: null} ]
    // }

    render() {
        //const { auth } = this.props;
        //if (!auth.uid) return <Redirect to='/signin' />
        return(
            <div>
                <h1>This is the page for the fantasy league.</h1>
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