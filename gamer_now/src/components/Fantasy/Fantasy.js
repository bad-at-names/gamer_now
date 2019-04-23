import React, { Component } from "react";
import PastMatch from "./PastMatches/PastMatch";
import UpcomingMatch from "./UpcomingMatches/UpcomingMatch";
import { Link } from "react-router-dom";
import Leaderboard from "./Leaderboard/Leaderboard";
import MatchDetails from "./MatchDetails/MatchDetails";
import MyTeam from "./MyTeam/MyTeam";

class Fantasy extends Component {
  state = {
    currentMatchDetail: "Loading"
  };

  showMatchDetail = id => {
    this.setState({
      currentMatchDetail: id
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="fantasy-container">
        <div className="fantasy-sub-container">
          <Link to="./leaderboard" className="leaderboard-button">
            <h2>Leaderboards</h2>
          </Link>
          <PastMatch
            showMatchDetail={this.showMatchDetail}
            className="past-match"
          />
        </div>
        <div className="fantasy-sub-container">
          <MyTeam className="my-team" />
          <MatchDetails
            matchId={this.state.currentMatchDetail}
            className="details"
          />
        </div>
        <UpcomingMatch className="coming-match" />
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
export default Fantasy;
