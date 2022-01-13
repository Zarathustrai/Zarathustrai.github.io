import React from 'react';
import logo from './data/images/logo_text.png'; // Tell Webpack this JS file uses this image

console.log(logo);

function Header() {
    return <img src={logo} alt="Logo" />;
}

export default Header;