import React from 'react';
import '../css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Navbar(){
    return (
        <nav className = "ctn-navbar">
            <div className = "ctn-logo-nav">
                <div className = "burger-nav">
                    <span className = "line-1 line"></span>
                    <span className = "line-2 line"></span>
                    <span className = "line-3 line"></span>
                </div>
                <h3 className = "name"><span className = "light-name">Chor</span>deus</h3>
            </div>
            <div className = "ctn-search-nav">
                <button>Instrument<FontAwesomeIcon icon={faChevronDown} className="chevron" /></button>
                <input type = "text" placeholder = "Rechercher votre instrument ..." />
            </div>
            <div className = "ctn-info-nav">
                <button className = "little1">Tarifs</button>
                <button className = "little2">Se connecter | S'inscrire</button>   
            </div>
        </nav>
    );
}

export default Navbar;