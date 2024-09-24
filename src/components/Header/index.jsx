import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/logo.jpg';
import './Header.scss';

function Header () {
    return (
        <header className="header_container">
            <div className="header_container_logo">
                <img src={logo} alt="'header_logo" />
            </div>
            <nav className="header_container_nav_links">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'active' : '')}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'active' : '')}>
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
            
        </header>
    );
};

export default Header;
