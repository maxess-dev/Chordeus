import React from 'react';
import Navbar from './navbar.js'
import logo from '../img/chordette.png'
import '../css/homepage.css'

function Home() {
    return (
        <main>
            <Navbar />
            <section className = "ctn-layout-1">
                <div className = "cta-landing">
                    <h1>Lancez-vous <br/> dans la musique !</h1>
                    <h3>Acheter, vendre vos instruments d'occasions <br/> en quelques clics !</h3>
                    <div className = "cta-register">
                        <button>Acheter</button>
                        <button>Vendre</button>
                    </div>
                </div>
                <div className = "ctn-img">
                    <img src={ logo } alt="Image of chordeus"/>
                </div>  
            </section>
            <section className = "ctn-layout-2">
 
            </section>
            <section className = "ctn-layout-3">
 
            </section>
            <section className = "ctn-layout-4">
 
            </section>
        </main>
        
    );
    
  }

export default Home;