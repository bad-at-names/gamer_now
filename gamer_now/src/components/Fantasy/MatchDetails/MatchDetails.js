import React, { Component } from 'react';
import axios from 'axios';
import teamLogo from '../../layout/Frequents/teamLogo';
import './MatchDetails.css';


class MatchDetails extends Component {
    render(){
        if (this.props.matchId === "Loading"){
            return(
                <div>
                    {console.log(this.props.matchId)}
                    wow
                </div>
            )
        }
        else {
            const mapsPlayed = this.props.matchId.games;
            var mapName;
            const mapList = mapsPlayed.length ? (
                mapsPlayed.map(maps => {
                    mapName = maps.name
                    return (
                        <div>
                            {console.log(maps)}
                            { maps.attributes.mapScore.team1 } {maps.attributes.map ? maps.attributes.map : (maps.attributes.mapGuid === "0x0800000000000871" ? "rialto" : "busan")} { maps.attributes.mapScore.team2 }
                        </div>
                    )
                })
            ) : (
                <div>
                    Loading ...
                </div>
            )
        
        return(
            <div className = "">
                {this.props.matchId.competitors[0].name} { this.props.matchId.scores[0].value } VS { this.props.matchId.scores[0].value } {this.props.matchId.competitors[1].name}
                { mapList }
            </div>
        )
        }
    }
}

export default MatchDetails;