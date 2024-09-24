import React from 'react';
import logo from "../../../public/footer_logo.svg"
import './Footer.scss';

function Footer () {
    return (
        <footer className="footer_container">
            <div className="footer_container_logo">
                <img src={logo} alt="footer_logo" />
            </div>
            <div className="footer_container_text">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;