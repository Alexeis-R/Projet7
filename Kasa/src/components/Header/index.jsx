import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.jpg';
import './Header.scss';

function Header () {
    return (
        <header className="header_container">
            <div className="header_container_logo">
                <img src={logo} alt="'header_logo" />
            </div>
            <div className="header_container_nav_links">
                <ul>
                    <li>
                        <Link to ='/'>Accueil</Link>
                    </li>
                    <li>
                        <Link to ='/about'>A Propos</Link>
                    </li>
                </ul>
            </div>
            
        </header>
    );
};

export default Header;
