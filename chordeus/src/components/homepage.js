import React from 'react';
import Navbar from './navbar.js';
import CardInstrument from './ctn-card-instruments.js';
import CardInfo from './ctn-card-info.js';
import imgLogo from '../img/chordette.png';
import { ReactComponent as Wave } from '../svg/wave.svg';
import '../css/homepage.css';

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
                    <img src={ imgLogo } alt="Girl with instruments"/>
                </div>
                <Wave className = "wave" />  
            </section>
            <section className = "ctn-layout-2">
                <div className="infostrument">
                    <h2>Trouve l'instrument idéal</h2>
                    <h3>parmi des centaines d'annonces</h3>
                </div>
                <div className = "ctn-card-instrument">
                    <div className = "ctn-card-instrument-inner">
                        <CardInstrument price="120,00 $" brand="Epiphone" state="Très bon état"/>
                        <CardInstrument price="120,00 $" brand="Epiphone" state="Très bon état"/>
                        <CardInstrument price="120,00 $" brand="Epiphone" state="Très bon état"/>
                        <CardInstrument price="120,00 $" brand="Epiphone" state="Très bon état"/>
                    </div>
                </div>
            </section>
            <section className = "ctn-layout-3">
                <Wave className = "wave2" /> 
                <div className = "card-info-service">
                    <CardInfo title="Fiable" info="Notre politique de mise en vente impose aux vendeurs de publier une vidéo démontrant la qualité de leurs intruments."/>
                    <CardInfo title="Fiable" info="Notre politique de mise en vente impose aux vendeurs de publier une vidéo démontrant la qualité de leurs intruments."/>
                    <CardInfo title="Fiable" info="Notre politique de mise en vente impose aux vendeurs de publier une vidéo démontrant la qualité de leurs intruments."/>
                </div>        
            </section>
        </main>
        
    );
    
  }

export default Home;