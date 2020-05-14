import React from 'react';
import './App.css';

function Navbar(){
    return (
        <div className = "ctn-navbar">
            <div className = "ctn-logo-nav">
                <div className = "burger-nav">
                    <span className = "line-1 line"></span>
                    <span className = "line-2 line"></span>
                    <span className = "line-3 line"></span>
                </div>
                <h3 className = "name"><span className = "light-name">Chor</span>deus</h3>
            </div>
            <div className = "ctn-search-nav">
                <button>Instrument</button>
                <input type = "text" placeholder = "Rechercher votre instrument ..."></input>
            </div>
            <div className = "ctn-info-nav">
                <button>Tarifs</button>
                <button>Se connecter | S'inscrire</button>   
            </div>
        </div>
    );
}

export default Navbar;