import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions'

const SignedIn = (props) => {
    props.signOut()
    return (
        <div>
            <li><a onClick={props.signOut}>Log Out</a ></li>
            <li><Link to='/'>Profile</Link></li>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedIn);