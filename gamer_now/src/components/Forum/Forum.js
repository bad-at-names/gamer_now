import React, {Component} from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Forum extends Component {
    render() {
        //const { auth } = this.props;
        //if (!auth.uid) return <Redirect to='/signin' />
        return(
            <h1>This is the page for the Forums.</h1>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        auth: state.firebase.auth
    }
}

//export default connect(mapStateToProps)(Forum);
export default Forum;