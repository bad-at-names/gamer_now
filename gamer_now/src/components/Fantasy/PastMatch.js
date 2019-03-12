import React , { Component } from 'react';
import axios from 'axios';
import teamLogo from '../../main_assets/overwatch_teams/teamLogo'
import './ScheduleBars.css';


class PastMatch extends Component {
    state = {
        matches: [ ]
    }
    componentDidMount(){
        const OverwatchLeague = require('overwatchleague');
        const OWL = new OverwatchLeague();
        OWL.getConcludedWeek().then(response => {
            this.setState({
                matches: response.data
            })
        })
    }
    render() {
        var a, b, ascore, bscore;
        const { matches } = this.state;
        const matchList = matches.length ? (
            matches.map(match => {
                a = match.competitors[0].abbreviatedName;
                b = match.competitors[1].abbreviatedName;
                ascore = match.scores[0].value;
                bscore = match.scores[1].value;
                return (
                    <div className = "match-scores">
                        { console.log(match.scores) }
                        <h3 className = "no-break">{ a } { ascore }</h3>
                        <img src = { teamLogo(a) } alt = "" className = "schedule-teamlogo"/>
                        <h3 className = "no-break">VS</h3>
                        <img src = { teamLogo(b) } alt = "" className = "schedule-teamlogo"/>
                        <h3 className = "no-break">{ bscore } { b }</h3>
                    </div>
                )
            })
        ) : (
            <div>
                <h3>Loading ... </h3>
            </div>
        )

        return(
            <div>
                {/* {console.log(this.state)} */}
                { matchList }
            </div>
        )
    }
}

export default PastMatch;