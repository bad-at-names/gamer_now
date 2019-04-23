import React, { Component } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import CoachCard from "./CoachCard/CoachCard";
import CoachForm from "./CoachForm/CoachForm";
import "./Coach.css";

import searchIcon from "../../main_assets/game_logos/search_icon.png";
import G0 from "../../main_assets/game_logos/game0.png";
import G1 from "../../main_assets/game_logos/game1.png";
import G2 from "../../main_assets/game_logos/game2.png";
import N from "../../main_assets/game_logos/none.png";

class Coach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coaches: [],
      search: "",
      gameFilter: ""
    };
  }

  componentDidMount() {
    var s = this.state.coaches;
    var db = firebase.firestore();
    db.collection("coaches")
      .orderBy("name", "asc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          s.push(doc.data());
        });

        this.setState({
          coaches: s
        });

        console.log(this.state.coaches);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleCheck = e => {
    this.setState({
      gameFilter: e.target.value
    });
  };

  sortByName = () => {
    var s = this.state.coaches;
    this.setState({
      coaches: s.sort((a, b) =>
        a.name.toLowercase > b.name.toLowercase
          ? 1
          : b.name.toLowercase > a.name.toLowercase
          ? -1
          : 0
      )
    });
  };

  sortByRate = () => {
    var s = this.state.coaches;
    this.setState({
      coaches: s.sort((a, b) => a.rate - b.rate)
    });
  };

  handleSearch = e => {
    this.setState({
      search: new RegExp(".*" + e.target.value + ".*", "i")
    });
    console.log(this.state);
  };

  render() {
    //const { auth } = this.props;
    //if (!auth.uid) return <Redirect to='/signin' />
    const { coaches } = this.state;
    const coachList = coaches.length ? (
      coaches.map(coach => {
        if (
          coach.name.match(this.state.search) &&
          (coach.game === this.state.gameFilter || this.state.gameFilter === "")
        ) {
          return <CoachCard coach={coach} key={coach.email} />;
        }
      })
    ) : (
      <h2>Loading ...</h2>
    );
    return (
      <div className="coach-container">
        <div className="top-bar">
          <h2> Coaches </h2>
          <div className="search-bar-container">
            <img src={searchIcon} className="search-icon" alt="" />
            <input
              type="text"
              name="search"
              id="search"
              className="search-bar"
              placeholder="Search"
              onChange={this.handleSearch}
            />
          </div>
          <span className="filters">Filters:</span>
          <label className="game-label" htmlFor="dota">
            <input
              type="radio"
              value="dota"
              name="game"
              id="dota"
              label="dota"
              onChange={this.handleCheck}
              className="game"
            />
            <img src={G0} className="game-image" alt="" />
          </label>
          <label className="game-label" htmlFor="overwatch">
            <input
              type="radio"
              value="overwatch"
              name="game"
              id="overwatch"
              label="overwatch"
              onChange={this.handleCheck}
              className="game"
            />
            <img src={G1} className="game-image1" alt="" />
          </label>
          <label className="game-label" htmlFor="csgo">
            <input
              type="radio"
              value="csgo"
              name="game"
              id="csgo"
              label="csgo"
              onChange={this.handleCheck}
              className="game"
            />
            <img src={G2} className="game-image1" alt="" />
          </label>
          <label className="game-label" htmlFor="None">
            <input
              type="radio"
              value=""
              name="game"
              id="None"
              label="None"
              onChange={this.handleCheck}
              className="game"
            />
            <img src={N} className="game-image1" alt="" />
          </label>
          <span className="filters">Sort By:</span>
          <label className="sort-label" htmlFor="sortrate">
            <input
              type="radio"
              value="rate"
              name="sorter"
              id="sortrate"
              label="sortrate"
              className="sorter"
              onChange={this.sortByRate}
            />
            <span>Rate</span>
          </label>
          <label className="sort-label" htmlFor="sortname">
            <input
              type="radio"
              value="name"
              name="sorter"
              id="sortname"
              label="sortname"
              className="sorter"
              onChange={this.sortByName}
            />
            <span>Name</span>
          </label>
          <span className="sign-coach-button">
            <Link to="./coachapplication">Become a Coach</Link>
          </span>
        </div>
        {coachList}
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

//export default connect(mapStateToProps)(Coach);
export default Coach;
