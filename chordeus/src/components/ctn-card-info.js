import React from 'react';
import '../css/card-info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import guitar from '../img/guitar.png';
import drums from '../img/drums.png';
import synth from '../img/synth.png';

function CardInfo(props){
    const ctnCard = {
        backgroundColor: props.bgColor,
        marginLeft: props.marginLeft
    }

    const buttonMargin = {
        marginTop: props.marginTop,
        color: props.color
    }

    return (
        <div className="ctn-card-info" style={ctnCard}>
            <img src={guitar} alt="Guitar" className="guitar"/>
            <div className="ctn-card-inner">
                <span className="title-card-info">{props.title}</span>
                <p className="para-card-info">{props.info}</p>
                <button className="more" style={buttonMargin}>En savoir plus<FontAwesomeIcon icon={faArrowRight} className="icon"/></button>
            </div>
        </div>
    )
}

export default CardInfo