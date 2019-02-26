import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="">
            <div className="container">
                <Link to='/' className="logo">GAMERnow</Link>
            </div>
        </nav>
    )
}

export default Navbar