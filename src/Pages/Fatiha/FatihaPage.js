import React from "react";
import { useEffect, useState } from "react";
import './../../Pages/Fatiha/FatihaPage.css';
import SingleCard from './../../Pages/SingleCard';
import cover from './../../img/cover.jpg'

const cardImages = [ //must use require due to webpack to properly locate path
    {"src": require("./../../img/Fatiha-img/1.JPG"), id: 1, matched: false },
    {"src": require("./../../img/Fatiha-img/2.JPG"), id: 2, matched: false },
    {"src": require("./../../img/Fatiha-img/3.JPG"), id: 3, matched: false },
    {"src": require("./../../img/Fatiha-img/4.JPG"), id: 4, matched: false },
    {"src": require("./../../img/Fatiha-img/5.JPG"), id: 5, matched: false },
    {"src": require("./../../img/Fatiha-img/6.JPG"), id: 6, matched: false },
    {"src": require("./../../img/Fatiha-img/7.JPG"), id: 7, matched: false },
    {"src": require("./../../img/Fatiha-img/8.JPG"), id: 8, matched: false },
    {"src": require("./../../img/Fatiha-img/9.JPG"), id: 9, matched: false },
    {"src": require("./../../img/Fatiha-img/10.JPG"), id: 10, matched: false },
    {"src": require("./../../img/Fatiha-img/11.JPG"), id: 11, matched: false },
    {"src": require("./../../img/Fatiha-img/12.JPG"), id: 12, matched: false },
    {"src": require("./../../img/Fatiha-img/13.JPG"), id: 13, matched: false },
] //array for storing the ayah images 

const FatihaPage = () => {
    const [cards, setCards] = useState([]) //useState hook empty array for updating later on
    const [turns, setTurns] = useState([]) //state for recording number of turns

    //Usestates for two choices in the matching memory game
    const [choice1, setChoice1] = useState(null)
    const [choice2, setChoice2] = useState(null)

    //Usestate for disabaling card short delay after making two choices to avoid spamming
    const [disabled, SetDisabled] = useState(false)

    //shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages] //the array of cards to be shuffled
        .sort(() => Math.random() - 0.5) //randomly sorting the array to mix the card orders
        .map((card) => ({...card, id:Math.random()})) //for each card in array is mapped to a new array for the shuffled array

        setChoice1(null)
        setChoice2(null)
        setCards(shuffledCards)//updating empty card states to be the shuffled cards
        setTurns(0)//

    }

   //handle a choice
   const handleChoice = (card) =>  {
       choice1 ? setChoice2(card): setChoice1(card) //if choice1 is not null then setChoice2 or else setChoice1 (ternary operator)
   }
   //compare 2 selected cards
   useEffect(() => { //checking each time when two choices are made if the cards match
       if (choice1 && choice2) {
        SetDisabled(true)
           if (choice1.src === choice2.src) {
               setCards(prevCards => { //updating useState of new set of cards with the matched cards property to matched 
                   return prevCards.map(card => { //same card but with correctly chosen cards matched proeprty to true
                       if (card.src === choice1.src) {
                           return {...card, matched: true}
                       } else { return card}
                   })
               })
               resetTurn()
           } else {
            setTimeout(() => resetTurn(), 1000)
        }
       }

   }, [choice1, choice2]) //dependancy array, for when choices are selected this useEffect is called


   const resetTurn = () => {
       setChoice1(null)
       setChoice2(null) 
       setTurns(turns +1)
       SetDisabled(false)
   }

   const [mainCard, setmainCard] = useState(false) //useState for rendering the mainCard views conditionally

    return (
        <div>

       <button onClick={ () => {shuffleCards();setmainCard(true)}} className="BtnHome">New Game</button>
       <div className="card-grid" /*div for defining the grid attributes*/ > 
       {cards.map(card => ( //mapping through the each ayah card for displaying
         <SingleCard  
         key={card.id} 
         card={card} 
         handleChoice={handleChoice}
         flipped={card === choice1 || card === choice2 || card.matched}
         disabled={disabled}
         /> //Key ID to map through each card
       ))}
       </div>

       {
           mainCard ? //if it is true then main card views render otherwise they are hidden before hitting new game
       
       <div className="mainCARD" /*div for displaying two zoomed in choices on a seperately*/>
           {/*<img className="mainBack1" src={choice1?.src? choice1.src: cover} />
           <img className="mainBack2" src={choice2?.src? choice2.src: cover} /> */}

       </div>
       :null
       }

       </div>
      );
}
 
export default FatihaPage;