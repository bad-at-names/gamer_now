import React, {Component} from 'react';
import PastMatch from './PastMatches/PastMatch';
import UpcomingMatch from './UpcomingMatches/UpcomingMatch';
import MatchDetails from './MatchDetails/MatchDetails';
import MyTeam from './MyTeam/MyTeam';

class Fantasy extends Component {
    state = {
        currentMatchDetail: "Loading"
    }

    showMatchDetail = (id) => {
        this.setState({
            currentMatchDetail: id
        })
        console.log(this.state)
    }

    render() {
        return(
            <div className = 'fantasy-container'>
                <PastMatch showMatchDetail = { this.showMatchDetail } className = 'past-match'/>
                <div className="fantasy-sub-container">
                    <MyTeam className = 'my-team'/>
                    <MatchDetails matchId = { this.state.currentMatchDetail } className = 'details'/>
                </div>
                <UpcomingMatch className = 'coming-match'/>
                
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