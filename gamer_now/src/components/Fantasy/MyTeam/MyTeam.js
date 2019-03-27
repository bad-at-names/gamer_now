import React, {Component} from 'react';
import './MyTeam.css';
import EmptyPlayerSlot from '../../../main_assets/emptyPlayerSlot.png';

class MyTeam extends Component {
    
    
    render(){
        return(
            <div className = "my-team-container">
                <img src={ EmptyPlayerSlot } alt="" className="player-slot"/>
                <img src={ EmptyPlayerSlot } alt="" className="player-slot"/>
                <img src={ EmptyPlayerSlot } alt="" className="player-slot"/>
                <img src={ EmptyPlayerSlot } alt="" className="player-slot"/>
                <img src={ EmptyPlayerSlot } alt="" className="player-slot"/>
                <img src={ EmptyPlayerSlot } alt="" className="player-slot"/>
            </div>
        )
    }
}

export default MyTeam;