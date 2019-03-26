import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PastMatch from './PastMatches/PastMatch';
import UpcomingMatch from './UpcomingMatches/UpcomingMatch';
import MyTeam from './MyTeam/MyTeam';

class Fantasy extends Component { 

    render() {
        return(
            <div id = 'fantasy-main'>
                <PastMatch id = 'past-match'/>
                <div id = 'details'>
                    iuyhioyhjoij
                </div>
                <MyTeam id = 'my-team'/>
                <UpcomingMatch id = 'coming-match'/>
                
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