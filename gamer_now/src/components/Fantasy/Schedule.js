import React , { Component } from 'react';
import axios from 'axios';
import teamLogo from '../../main_assets/overwatch_teams/teamLogo'


class Schedule extends Component {
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
                    <div>
                        { match.id }
                        <br></br>
                        { console.log(match.scores) }
                        <img src = { teamLogo(a) } alt ="" /> VS <img src = { teamLogo(b) } alt  ="" />
                        <br></br>
                        { ascore }   { bscore }
                    </div>
                )
            })
        ) : (
            <div> Hey How you doing? </div>
        )

        return(
            <div>
                {/* {console.log(this.state)} */}
                { matchList }
            </div>
        )
    }
}

export default Schedule;