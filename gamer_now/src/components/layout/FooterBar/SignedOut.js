import React from 'react'
import { Link } from 'react-router-dom'

const SignedOut = () => {
    return (
        <div>
            <Link className = "log-buttons" to='/register'>Sign Up</Link>
            <Link className = "log-buttons" to='/login'>Log In</Link>
        </div>
    )
}

export default SignedOut;