import React , { Component } from 'react';
import axios from 'axios';
import teamLogo from '../../layout/Frequents/teamLogo'
import '../Fantasy.css';


class UpcomingMatch extends Component {
    state = {
        matches: [ ]
    }
    componentDidMount(){
        const OverwatchLeague = require('overwatchleague');
        const OWL = new OverwatchLeague();
        OWL.getUpcomingWeek().then(response => {
            this.setState({
                matches: response.data
            })
        })
    }
    render() {
        var a, b;
        const { matches } = this.state;
        const matchList = matches.length ? (
            matches.map(match => {
                console.log(match)
                a = match.competitors[0].abbreviatedName;
                b = match.competitors[1].abbreviatedName;
                return (
                    <div className = "match-scores">
                        <h3 className = "no-break">{ a }</h3>
                        <img src = { teamLogo(a) } alt = { match.competitors[0].name } className = "schedule-teamlogo"/>
                        <h3 className = "no-break">VS</h3>
                        <img src = { teamLogo(b) } alt = { match.competitors[1].name } className = "schedule-teamlogo"/>
                        <h3 className = "no-break">{ b }</h3>
                    </div>
                )
            })
        ) : (
            <div>
                <h3 className = "playername">Loading...</h3>
            </div>
        )
    
        return( 
            <div id = 'coming-match'>
                { matchList }
            </div>
        )
    }
}

export default UpcomingMatch;