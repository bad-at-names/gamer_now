import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './MyTeam.css';
import EmptyPlayerSlot from '../../../main_assets/emptyPlayerSlot.png';

class MyTeam extends Component {
    state = {
        
    }
    render(){
        return(
            <div className = "my-team-container">
                <Link to = '/playerinfo'>
                    <img src={ EmptyPlayerSlot } alt="" className="player-slot"/>
                </Link>
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