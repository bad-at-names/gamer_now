import React from 'react'
import { Link } from 'react-router-dom'

const SignedOut = () => {
    return (
        <div className = "log-box">
            <Link className = "log-buttons" to='/register'>Register</Link>
            <Link className = "log-buttons" to='/login'>Log In</Link>
        </div>
    )
}

export default SignedOut;