import React from 'react'
import { Link } from 'react-router-dom'

const SignedOut = () => {
    return (
        <ul>
            <li><Link to='/register'>Sign Up</Link></li>
            <li><Link to='/login'>Log In</Link></li>
        </ul>
    )
}

export default SignedOut;