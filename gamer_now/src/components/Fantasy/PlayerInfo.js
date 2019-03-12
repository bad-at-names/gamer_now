import React, {Component} from 'react';
import axios from 'axios';
import './PlayerInfo.css';
import ATL from '../../main_assets/overwatch_teams/ATL.svg';
import BOS from '../../main_assets/overwatch_teams/BOS.svg';
import CDH from '../../main_assets/overwatch_teams/CDH.svg';
import DAL from '../../main_assets/overwatch_teams/DAL.svg';
import FLA from '../../main_assets/overwatch_teams/FLA.svg';
import GLA from '../../main_assets/overwatch_teams/GLA.svg';
import GZC from '../../main_assets/overwatch_teams/GZC.svg';
import HOU from '../../main_assets/overwatch_teams/HOU.svg';
import HZS from '../../main_assets/overwatch_teams/HZS.svg';
import LDN from '../../main_assets/overwatch_teams/LDN.svg';
import NYE from '../../main_assets/overwatch_teams/NYE.svg';
import PAR from '../../main_assets/overwatch_teams/PAR.svg';
import PHI from '../../main_assets/overwatch_teams/PHI.svg';
import SEO from '../../main_assets/overwatch_teams/SEO.svg';
import SFS from '../../main_assets/overwatch_teams/SFS.svg';
import SHD from '../../main_assets/overwatch_teams/SHD.svg';
import TOR from '../../main_assets/overwatch_teams/TOR.svg';
import VAL from '../../main_assets/overwatch_teams/VAL.svg';
import VAN from '../../main_assets/overwatch_teams/VAN.svg';
import WAS from '../../main_assets/overwatch_teams/WAS.svg';

class PlayerInfo extends Component { 
    state = {
        players: [ ]
    }   
    componentDidMount(){
        axios.get('https://api.overwatchleague.com/stats/players')
            .then( res => {
                this.setState({
                    players: res.data.data
                })
            })
    }

    render() {
        //const { auth } = this.props;
        //if (!auth.uid) return <Redirect to='/signin' />
        const { players } =this.state;
        const playerList = players.length ? (
            players.map(player => {
                var teamLogo;
                switch(player.team) {
                    case "ATL":
                        teamLogo = ATL;
                        break;
                    case "BOS":
                        teamLogo = BOS;
                        break;
                    case "CDH":
                        teamLogo = CDH;
                        break;
                    case "DAL":
                        teamLogo = DAL;
                        break;
                    case "FLA":
                        teamLogo = FLA;
                        break;
                    case "GLA":
                        teamLogo = GLA;
                        break;
                    case "GZC":
                        teamLogo = GZC;
                        break;
                    case "HOU":
                        teamLogo = HOU;
                        break;
                    case "HZS":
                        teamLogo = HZS;
                        break;
                    case "LDN":
                        teamLogo = LDN;
                        break;
                    case "NYE":
                        teamLogo = NYE;
                        break;
                    case "PAR":
                        teamLogo = PAR;
                        break;
                    case "PHI":
                        teamLogo = PHI;
                        break;
                    case "SEO":
                        teamLogo = SEO;
                        break;
                    case "SFS":
                        teamLogo = SFS;
                        break;
                    case "SHD":
                        teamLogo = SHD;
                        break;
                    case "TOR":
                        teamLogo = TOR;
                        break;
                    case "VAL":
                        teamLogo = VAL;
                        break;
                    case "VAN":
                        teamLogo = VAN;
                        break;
                    case "WAS":
                        teamLogo = WAS;
                        break;
                }
                if (player.role === "tank") {
                    return (
                        <div key = { player.playerId } className = "player-card-blue">
                            <div className = "player-card-blue-inner">
                                <div className = "player-card-blue-front">
                                    <img src = { teamLogo } className = "team-logo" alt ="" />
                                    <h1 className="playername">{ player.name }</h1>
                                    <h2>Team: { player.team }</h2>
                                    <h2>Role: { player.role.toUpperCase() }</h2>
                                </div>
                                <div className = "player-card-blue-back">
                                    <p>Eliminations avg: { player.eliminations_avg_per_10m.toFixed(2) }</p>
                                    <p>Deaths avg: { player.deaths_avg_per_10m.toFixed(2) }</p>
                                    <p>Hero Damage avg: { player.hero_damage_avg_per_10m.toFixed(2) }</p>
                                    <p>Healing avg: { player.healing_avg_per_10m.toFixed(2) }</p>
                                    <p>Kills: { player.final_blows_avg_per_10m.toFixed(2) }</p>
                                </div>
                            </div>
                        </div>
                    )
                    
                }
                else if (player.role === "offense") {
                    return (
                        <div key = { player.playerId } className = "player-card-red">
                            <div className = "player-card-red-inner">
                                <div className = "player-card-red-front">
                                    <img src = { teamLogo } className = "team-logo" alt ="" />
                                    <h1 className="playername">{ player.name }</h1>
                                    <h2>Team: { player.team }</h2>
                                    <h2>Role: { player.role.toUpperCase() }</h2>
                                </div>
                                <div className = "player-card-red-back">
                                    <p>Eliminations avg: { player.eliminations_avg_per_10m.toFixed(2) }</p>
                                    <p>Deaths avg: { player.deaths_avg_per_10m.toFixed(2) }</p>
                                    <p>Hero Damage avg: { player.hero_damage_avg_per_10m.toFixed(2) }</p>
                                    <p>Healing avg: { player.healing_avg_per_10m.toFixed(2) }</p>
                                    <p>Kills: { player.final_blows_avg_per_10m.toFixed(2) }</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                        <div key = { player.playerId } className = "player-card-green">
                            <div className = "player-card-green-inner">
                                <div className = "player-card-green-front">
                                    <img src = { teamLogo } className = "team-logo" alt ="" />
                                    <h1 className="playername">{ player.name }</h1>
                                    <h2>Team: { player.team }</h2>
                                    <h2>Role: { player.role.toUpperCase() }</h2>
                                </div>
                                <div className = "player-card-green-back">
                                    <p>Eliminations avg: { player.eliminations_avg_per_10m.toFixed(2) }</p>
                                    <p>Deaths avg: { player.deaths_avg_per_10m.toFixed(2) }</p>
                                    <p>Hero Damage avg: { player.hero_damage_avg_per_10m.toFixed(2) }</p>
                                    <p>Healing avg: { player.healing_avg_per_10m.toFixed(2) }</p>
                                    <p>Kills: { player.final_blows_avg_per_10m.toFixed(2) }</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        ) : (
            <div> No player data</div>
        )
        return(
            <div>
                <h1 className = "playername"> PLAYER INFO </h1>
                <div className = "card-table">
                    { playerList }
                </div>
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
export default PlayerInfo;