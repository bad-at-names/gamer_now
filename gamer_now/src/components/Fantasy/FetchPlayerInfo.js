import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Fantasy extends Component {
    state = {playerId: null, teamId: null, role: null, name: null, team: null,
        eliminations_avg_per_10m: null}
        
    makeApiReq() {
        fetch('https://api.overwatchleague.com/stats/players')
        .then(results => {
            return results.json();
        }).then(data => {
            let 
        })
    }

    render() {
        return(
            <h1></h1>
        )
    }
}

export default Fantasy;