import React from 'react'
import cover from './../img/cover.jpg'

import './../Pages/SingleCard.css'

const SingleCard = ({card, handleChoice, flipped, disabled}) => {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
        
    }

    return (  
    <div className="card" /*div for card element for styling*/>
        <div className={flipped ? "flipped" : ""} /*sub div for front and back of each ayah card*/>
            <img className="front" src={card.src} alt="card front error" /*each mapped ayah card image*/ /> 
            <img 
            className="back" src={cover} 
            onClick={handleClick} 
            alt="card back error" /*back img for each mapped card*/ />
        </div>
    </div>
    );  
}
 
export default SingleCard;