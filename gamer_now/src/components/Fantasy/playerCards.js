import React from 'react';
import './PlayerInfo.css';
import teamLogo from '../../main_assets/overwatch_teams/teamLogo';

const PlayerCards = (props) => {
    var c, ci, cf, cb;
    const player = { props };
    if (props.player.role === "tank"){
        c = "player-card-blue";
        ci = "player-card-blue-inner";
        cf = "player-card-blue-front";
        cb = "player-card-blue-back";
    } else if (props.player.role === "offense") {
        c = "player-card-red";
        ci = "player-card-red-inner";
        cf = "player-card-red-front";
        cb = "player-card-red-back";
    } else {
        c = "player-card-green";
        ci = "player-card-green-inner";
        cf = "player-card-green-front";
        cb = "player-card-green-back";
    }
    return (
        <div key = { props.player.playerId } className = { c }>
            <div className = { ci }>
                <div className = { cf }>
                    <img src = { teamLogo(props.player.team) } className = "team-logo" alt ="" />
                    <h1 className="playername">{ props.player.name }</h1>
                    <h2>Team: { props.player.team }</h2>
                    <h2>Role: { props.player.role.toUpperCase() }</h2>
                </div>
                <div className = { cb }>
                    <h1 className="playername">{ props.player.name }</h1>
                    <p>Eliminations avg: { props.player.eliminations_avg_per_10m.toFixed(2) }</p>
                    <p>Deaths avg: { props.player.deaths_avg_per_10m.toFixed(2) }</p>
                    <p>Hero Damage avg: { props.player.hero_damage_avg_per_10m.toFixed(2) }</p>
                    <p>Healing avg: { props.player.healing_avg_per_10m.toFixed(2) }</p>
                    <p>Kills: { props.player.final_blows_avg_per_10m.toFixed(2) }</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerCards;