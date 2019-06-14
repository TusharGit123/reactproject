import React from 'react'
import '../Navbar/navbar.scss';
import logo from '../../../Assets/images/logo.png';

const Navbar = () => {
    return (
        <React.Fragment>
          <nav className="navbar">
            <img src={logo} alt="city tour logo"/>
            <ul className="nav-links">
            <li>
                <a href="/" className="nav-link">
                    home
                </a>
            </li>
            <li>
                <a href="/" className="nav-link">
                     about
                </a>
            </li>
            <li>
                <a href="/" className="nav-link active">
                     tours
                </a>
            </li>
            </ul>
          </nav>
        </React.Fragment>
    )
}

export default Navbar
