import React, { Component } from "react";
import firebase from "firebase";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import CoachCard from "./CoachCard/CoachCard";
import CoachForm from "./CoachForm/CoachForm";


class Coach extends Component {
  state = {
    coaches: []
  };

  componentDidMount() {
    var s = this.state.coaches;
    var db = firebase.firestore();
    db.collection("coaches")
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

  render() {
    //const { auth } = this.props;
    //if (!auth.uid) return <Redirect to='/signin' />
    const { coaches } = this.state;
    const coachList = coaches.length ? (
      coaches.map(coach => {
        return <CoachCard coach={coach} key={coach.email} />;
      })
    ) : (
      <h2>Loading ...</h2>
    );
    return (
      <div>
        <span> Coaches </span>
        <Link to="./coachapplication">
          <button className="sign-coach-button">Become a Coach</button>
        </Link>
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
