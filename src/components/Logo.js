import React from 'react';
import logo from './data/images/logo_text.png';
import "./Logo.css";
console.log(logo);

function Header() {
    return(
        <div>
            <img className="logo"/>
        </div>
    )
}

export default Header;