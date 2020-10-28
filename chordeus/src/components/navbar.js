import React from 'react';
import '../css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'

function Navbar(){
    return (
        <nav className = "ctn-navbar">
            <div className = "ctn-home">
                <div className = "ctn-burger-menu">
                    <span className = "line"></span>
                    <span className = "line"></span>
                    <span className = "line"></span>
                </div>
                <div className = "ctn-logo">
                    <a href="#"><h3><span>Chor</span>deus</h3></a>
                </div>
            </div>
            <div className = "ctn-searchbar">
                <div className = "ctn-button-dropdown">
                    <button>Instrument<FontAwesomeIcon icon={faChevronDown} className="chevron"/></button>
                    <div className = "dropdown-menu-instrument">
                        <ul>
                            <li>Piano 🎹</li>
                            <li>Guitare 🎸</li>
                            <li>Batterie 🥁</li>
                            <li>Saxophone 🎷</li>
                        </ul>
                    </div>
                </div>
                <div className = "relative-input">
                    <input type="text"></input>
                    <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
                </div>
            </div>
                {/*<button>Instrument</button>*/}
        </nav>
    );
}

export default Navbar;