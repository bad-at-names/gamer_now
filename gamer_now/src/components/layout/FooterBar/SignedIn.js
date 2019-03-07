import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions'

const SignedIn = (props) => {
    return (
        <div>
            <button className = "log-buttons" onClick={props.signOut}>Log Out</button >
            <Link className = "log-buttons" to='/'>Profile</Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedIn);