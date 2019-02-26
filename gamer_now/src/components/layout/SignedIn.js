import React from 'react'
import { Link } from 'react-router-dom'

const SignedIn = () => {
    return (
        <ul>
            <li><Link to='/'>Log Out</Link></li>
            <li><Link to='/'>Profile></Link></li>
        </ul>
    )
}

export default SignedIn