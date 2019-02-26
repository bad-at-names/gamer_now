import React from 'react'
import { Link } from 'react-router-dom'

const SignedOut = () => {
    return (
        <ul>
            <li><Link to='/'>Sign Up</Link></li>
            <li><Link to='/'>Log In</Link></li>
        </ul>
    )
}

export default SignedOut