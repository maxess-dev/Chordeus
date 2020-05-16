import React from 'react';
import '../css/card-instruments.css';
import imgLogo from '../img/chordette.png';


function CardInstrument(props){
    return(
        <div className = "card-instrument">
            <div className = 'img-instrument'>
                <img src={imgLogo} alt=""/>
            </div>
            <div className = "price-instrument">
                <h4>{props.price}</h4>
            </div>
            <div className = "brand-instrument">
                <h4 className="font-brand-little">{props.brand}</h4>
            </div>
            <div className = "state-instrument">
                <h4>{props.state}</h4>
            </div>
        </div>
    )
}

export default CardInstrument;