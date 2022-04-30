import React from 'react'
import cover from './../img/cover.jpg'

import './../Pages/SingleCard.css'

const SingleCard = ({card, handleChoice, flipped, disabled}) => {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
        
    }

    const checkID = () => {
        console.log(card.id)
    }

    return (  
    <div className="card" /*div for card element for styling*/>
        <div className={flipped ? "flipped" : ""} /*sub div for front and back of each ayah card*/>
            <div className='front' onClick={checkID}>
            <h2 className='front-ayah'>{card.ayah}</h2>
            <h2 className='front-translit'>{card.translit}</h2> 
            </div>
            <img 
            className="back" src={cover} 
            onClick={handleClick} 
            alt="card back error" /*back img for each mapped card*/ />
        </div>
    </div>
    );  
}
 
export default SingleCard;