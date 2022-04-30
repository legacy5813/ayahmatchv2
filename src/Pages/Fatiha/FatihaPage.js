import React from "react";
import { useEffect, useState } from "react";
import './../../Pages/Fatiha/FatihaPage.css';
import SingleCard from './../../Pages/SingleCard';
import cover from './../../img/cover.jpg'

const cardImages = [ //must use require due to webpack to properly locate path
    {ayah: "ٱلۡحَمۡدُ لِلَّهِ", translit: "All praises and thanks to Allah", id: 1, matched: false, matchID: 1 },
    {ayah: "رَبِّ ٱلۡعَٰلَمِينَ", translit: "Lord of the universe", id: 2, matched: false, matchID: 2 },
    {ayah: "ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ", translit: "The most Gracious the most Merciful", id: 3, matched: false, matchID: 3 },
    {ayah: "مَٰلِكِ يَوۡمِ ٱلدِّينِ", translit: "Master of the day of judgement", id: 4, matched: false, matchID: 4 },
    {ayah: "إِيَّاكَ نَعۡبُدُ", translit: "You alone we worship", id: 5, matched: false, matchID: 5 },
    {ayah: "وَإِيَّاكَ نَسۡتَعِينُ", translit: "You alone we ask for help", id: 6, matched: false, matchID: 6 },
    {ayah: "ٱهۡدِنَا ٱلصِّرَٰطَ", translit: "Guide us to the path", id: 7, matched: false, matchID: 7 },
    {ayah: "ٱلۡمُسۡتَقِيمَ", translit: "The straight path", id: 8, matched: false, matchID: 8 },
    {ayah: "صِرَٰطَ ٱلَّذِينَ", translit: "The path of those", id: 9, matched: false, matchID: 9 },
    {ayah: "أَنۡعَمۡتَ عَلَيۡهِمۡ", translit: "You have bestowed favours", id: 10, matched: false, matchID: 10 },
    {ayah: "غَيۡرِ ٱلۡمَغۡضُوبِ", translit: "Not those who earned your wrath", id: 11, matched: false, matchID: 11 },
    {ayah: "عَلَيۡهِمۡ", translit: "On themselves", id: 12, matched: false, matchID: 12 },
    {ayah: "وَلَا ٱلضَّآلِّينَ", translit: "And not those who go astray", id: 13, matched: false, matchID: 13 },
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
           if (choice1.matchID === choice2.matchID) {
               setCards(prevCards => { //updating useState of new set of cards with the matched cards property to matched 
                   return prevCards.map(card => { //same card but with correctly chosen cards matched proeprty to true
                       if (card.matchID === choice1.matchID) {
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
           <div className="mainBack1">
               <h2 className="main-Ayah">{choice1?.id? choice1.ayah: "1st Choice"}</h2>
               <h2 className="main-Translit">{choice1?.id? choice1.translit: ""}</h2>
           </div>
           <div className="mainBack2">
               <h2 className="main-Ayah">{choice2?.id? choice2.ayah: "2nd Choice"}</h2>
               <h2 className="main-Translit">{choice2?.id? choice2.translit: ""}</h2>
           </div>
       </div>
       :null
       }

       </div>
      );
}
 
export default FatihaPage;