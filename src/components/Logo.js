import React from 'react';
import logo from './data/images/logo_text.png';
import "./Logo.css";
console.log(logo);

function Header() {
    return(
        <div>
            <img className="img-smoll" src={logo} alt="" />
            <img className="img-big" src={logo} alt="" />
        </div>
    )
}

export default Header;