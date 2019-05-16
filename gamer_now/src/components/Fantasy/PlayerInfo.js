import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import axios from 'axios';
import './Fantasy.css';
import PlayerCards from './playerCards/playerCards';
import MyTeamSticky from './MyTeamSticky/MyTeamSticky';

class PlayerInfo extends Component {
	state = {
		players: []
	};

	componentDidMount() {
		axios.get('https://api.overwatchleague.com/stats/players').then(res => {
			this.setState({
				players: res.data.data
			});
		});
	}

	render() {
		var user = firebase.auth().currentUser;
		if (!user) {
			return <Redirect to="./login" />;
		}
		const { players } = this.state;
		const playerList = players.length ? (
			players.map(player => {
				return <PlayerCards player={player} key={player.playerId} />;
			})
		) : (
			<h2 className="playername"> Loading ... </h2>
		);
		return (
			<div className="pinfo-super-container">
				<MyTeamSticky />
				<div className="card-table">{playerList}</div>
			</div>
		);
	}
}

export default PlayerInfo;
