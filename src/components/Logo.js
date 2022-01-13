import React from 'react';
import logo from './data/images/logo_text.png';

console.log(logo);

function Header() {
    return <img src={logo} alt="Logo" />;
}

export default Header;