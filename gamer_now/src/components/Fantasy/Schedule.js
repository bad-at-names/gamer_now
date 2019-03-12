import React , { Component } from 'react';
import axios from 'axios';


class Schedule extends Component {
    state = {
        match1: [ ],
        match2: [ ],
        match3: [ ],
        match4: [ ],
        match5: [ ],
        match6: [ ]
    }
    componentDidMount(){
        const OverwatchLeague = require('overwatchleague');
        const OWL = new OverwatchLeague();
        OWL.getConcludedWeek().then(response => {
            this.setState({
                match1: response.data[8]
            })
            console.log(response.data[9]);
            console.log(response.data[10]);
            console.log(response.data[11]);
            console.log(response.data[12]);
            console.log(response.data[13]);
        })
    }
    render() {
        // const { matches } = this.state;
        // const matchList = matches.List
        return(
            <div>
                { console.log(this.state.match1) }
            </div>
        )
    }
}

export default Schedule;