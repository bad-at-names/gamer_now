import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase";
import "./NewPost.css";

class NewPostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            username: "",
            password: ""
           
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log(this.state);
    };
    handleSubmit = e => {
        var success = true;
        var user = firebase.auth().currentUser;
        var credentials = firebase.auth.EmailAuthProvider.credential(
            this.state.username,
            this.state.password
        );
        e.preventDefault();
        if (user) {
            user.reauthenticateAndRetrieveDataWithCredential(credentials)
                .then(() => {
                    var db = firebase.firestore();
                    db.collection("posts")
                        .doc(this.state.username)
                        .set({
                            title: this.state.title,
                            email: this.state.username,
                            content: this.state.content,
                        });
                })
                .catch(error => {
                    if (error === null) {
                        success = false;
                    }
                });
        } else {
            alert("You need to login first.");
        }
        if (success) {
            this.setState({
                success: true
            });
        }
    };

    render() {
        if (!this.state.success) {
            return (
                <div className="coach-form-super-container">
                    <form
                        className="coach-form-container"
                        onSubmit={this.handleSubmit}
                    >
                        <div>
                            <input
                                type="text"
                                name=""
                                id="Title"
                                className="cred-inputs"
                                placeholder="Title"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                       
                        <div>
                            <textarea
                                name=""
                                id="Content"
                                className="dsc-inputs"
                                placeholder="Content"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name=""
                                id="username"
                                className="cred-inputs"
                                placeholder="Username"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name=""
                                id="password"
                                className="cred-inputs"
                                placeholder="Password"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        
                        <div>
                            <button className="coach-form-button">
                                Post
                            </button>
                        </div>
                    </form>
                </div>
            );
        } else {
            return <Redirect to="./Forum" />;
        }
    }
}

export default NewPostForm;
