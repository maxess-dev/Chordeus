import React from 'react';
import '../css/card-info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function CardInfo(props){
    const ctnCard = {
        backgroundColor: props.bgColor
    }

    const buttonMargin = {
        marginTop: props.marginTop,
        color: props.color
    }
    
    return (
        <div className="ctn-card-info" style={ctnCard}>
            <div className="ctn-card-inner">
                <span className="title-card-info">{props.title}</span>
                <p className="para-card-info">{props.info}</p>
                <button className="more" style={buttonMargin}>En savoir plus<FontAwesomeIcon icon={faArrowRight} className="icon"/></button>
            </div>
        </div>
    )
}

export default CardInfo