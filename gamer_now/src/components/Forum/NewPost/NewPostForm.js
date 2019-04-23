import React, { Component } from "react";
import firebase from "./firebase";

class NewPostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        };
    }

    render() {
        return <div />;
    }
}
