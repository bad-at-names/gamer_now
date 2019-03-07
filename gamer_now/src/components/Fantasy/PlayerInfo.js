import React, {Component} from 'react';
import axios from 'axios';
import './PlayerInfo.css';

class PlayerInfo extends Component { 
    state = {
        players: [ ]
    }   
    componentDidMount(){
        axios.get('https://api.overwatchleague.com/stats/players')
            .then( res => {
                console.log(res);
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
                if (player.role == "tank") {
                    return (
                        <div key = { player.playerId } className = "player-card-blue">
                            <div className = "player-info">
                                <h1 className="playername">{ player.name }</h1>
                                <h2>Team: { player.team }</h2>
                                <h2>Role: { player.role.toUpperCase() }</h2>
                                <p>Eliminations avg: { player.eliminations_avg_per_10m.toFixed(2) }</p>
                                <p>Deaths avg: { player.deaths_avg_per_10m.toFixed(2) }</p>
                                <p>Hero Damage avg: { player.hero_damage_avg_per_10m.toFixed(2) }</p>
                                <p>Healing avg: { player.healing_avg_per_10m.toFixed(2) }</p>
                                <p>Kills: { player.final_blows_avg_per_10m.toFixed(2) }</p>
                            </div>
                        </div>
                    )
                }
                else if (player.role == "offense") {
                    return (
                        <div key = { player.playerId } className = "player-card-red">
                            <div className = "player-info">
                                <h1 className="playername">{ player.name }</h1>
                                <h2>Team: { player.team }</h2>
                                <h2>Role: { player.role.toUpperCase() }</h2>
                                <p>Eliminations avg: { player.eliminations_avg_per_10m.toFixed(2) }</p>
                                <p>Deaths avg: { player.deaths_avg_per_10m.toFixed(2) }</p>
                                <p>Hero Damage avg: { player.hero_damage_avg_per_10m.toFixed(2) }</p>
                                <p>Healing avg: { player.healing_avg_per_10m.toFixed(2) }</p>
                                <p>Kills: { player.final_blows_avg_per_10m.toFixed(2) }</p>
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                        <div key = { player.playerId } className = "player-card-green">
                            <div className = "player-info">
                                <h1 className="playername">{ player.name }</h1>
                                <h2>Team: { player.team }</h2>
                                <h2>Role: { player.role.toUpperCase() }</h2>
                                <p>Eliminations avg: { player.eliminations_avg_per_10m.toFixed(2) }</p>
                                <p>Deaths avg: { player.deaths_avg_per_10m.toFixed(2) }</p>
                                <p>Hero Damage avg: { player.hero_damage_avg_per_10m.toFixed(2) }</p>
                                <p>Healing avg: { player.healing_avg_per_10m.toFixed(2) }</p>
                                <p>Kills: { player.final_blows_avg_per_10m.toFixed(2) }</p>
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
                <h1> PLAYER INFO </h1>
                <div className = "card-table">{ playerList }</div>
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