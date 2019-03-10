import React , { Component } from 'react';
import axios from 'axios';


class Schedule extends Component {

    render() {
        const OverwatchLeague = require('overwatchleague');
        const OWL = new OverwatchLeague();
     

        return(
            <div>
                {         OWL.findTeamName(4410).then(response => {
                    console.log(response.data);
                }) }
            </div>
        )
    }
}

export default Schedule;