import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NewPostForm from "./NewPost/NewPostForm";
import firebase from "firebase";

class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],

        };
    }
    componentDidMount() {
        var s = this.state.posts;
        var db = firebase.firestore();
        db.collection("posts")
            .orderBy("title", "asc")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    s.push(doc.data());
                });

                this.setState({
                    posts: s
                });

                console.log(this.state.posts);
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        //const { auth } = this.props;
        //if (!auth.uid) return <Redirect to='/signin' />
        
        return (
            <div>
                {/* <NewPostForm /> */}

            </div>);
    }
}

const mapStateToProps = state => {
    //console.log(state);
    return {
        auth: state.firebase.auth
    };
};

//export default connect(mapStateToProps)(Forum);
export default Forum;
