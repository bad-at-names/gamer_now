import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import MakePlayerTable from "../Fantasy/adminControls/MakePlayerTable";
import UpdateUserScore from "../Fantasy/adminControls/updateUserScore";
import CoachCard from "./CoachCard/CoachCard";

class Coach extends Component {
  render() {
    //const { auth } = this.props;
    //if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div>
        {/* <MakePlayerTable /> */}
        {/* <UpdateUserScore /> */}
        <CoachCard/>
        
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
