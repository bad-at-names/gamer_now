import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Fantasy.css";
import PlayerCards from "./playerCards/playerCards";
import MyTeamSticky from "./MyTeamSticky/MyTeamSticky";

class PlayerInfo extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios.get("https://api.overwatchleague.com/stats/players").then(res => {
      this.setState({
        players: res.data.data
      });
    });
  }

  render() {
    //const { auth } = this.props;
    //if (!auth.uid) return <Redirect to='/signin' />
    const { players } = this.state;
    const playerList = players.length ? (
      players.map(player => {
        return <PlayerCards player={player} key={player.playerId} />;
      })
    ) : (
      <h2 className="playername"> Loading ... </h2>
    );
    return (
      <div>
        <MyTeamSticky />
        <Link to="./fantasy">Back</Link>
        <div className="card-table">{playerList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    auth: state.firebase.auth
  };
};

//export default connect(mapStateToProps)(Fantasy);
export default PlayerInfo;
