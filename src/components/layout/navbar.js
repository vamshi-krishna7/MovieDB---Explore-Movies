import React, { useState } from 'react';
import '../../app.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [nav, showNav] = useState(false)

    const toggleNavHandler = () => {
        showNav(!nav)
    }
    
    return (
        <nav className="navbar">
            <div className="navbar-header">
                <h1><Link to="/" className="logo">MovieDB</Link></h1>
                <div className="navbar-toggle-icon" onClick={toggleNavHandler}>
                    <div className="icon-ln-1"/>
                    <div className="icon-ln-2"/>
                </div>
            </div>
            <hr></hr> 
            <div className={`nav-list-container ${nav === true ? 'show-nav' : null}`}>
                <ul className={`nav-list ${nav === true ? 'show-nav-list': null}` }>
                    <li className="nav-link-items" onClick={toggleNavHandler}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link-items" onClick={toggleNavHandler}>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="nav-link-items" onClick={toggleNavHandler}>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;