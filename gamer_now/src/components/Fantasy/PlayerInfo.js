import React, {Component} from 'react';
import axios from 'axios';
import './PlayerInfo.css';
import PlayerCards from './playerCards';

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
                return(
                    <PlayerCards player = { player } />
                )    
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