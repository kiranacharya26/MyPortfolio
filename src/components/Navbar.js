import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-container">
            <ul className="nav-items">
                <li><Link to ='/hero'>Home</Link></li>
                <li><Link to ='/about'>About</Link></li>
                <li><Link to ='/projects'>Projects</Link></li>
                <li><Link to ='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
