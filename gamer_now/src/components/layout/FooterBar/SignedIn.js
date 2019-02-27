import React from 'react';
import { Link } from 'react-router-dom';

const SignedIn = () => {
    return (
        <div>
            <li><Link to='/'>Log Out</Link></li>
            <li><Link to='/'>Profile</Link></li>
        </div>
    )
}

export default SignedIn;