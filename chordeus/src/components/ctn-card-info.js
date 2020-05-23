import React from 'react';
import '../css/card-info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function CardInfo(props){
    return (
        <div className="ctn-card-info">
            <div className="ctn-card-inner">
                <span className="title-card-info">{props.title}</span>
                <p className="para-card-info">{props.info}</p>
                <button className="more">En savoir plus<FontAwesomeIcon icon={faArrowRight} className="icon"/></button>
            </div>
        </div>
    )
}

export default CardInfo