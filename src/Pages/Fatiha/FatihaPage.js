import React from "react";
import { useEffect, useState } from "react";
import './../../Pages/Fatiha/FatihaPage.css';
import SingleCard from './../../Pages/SingleCard';
import cover from './../../img/cover.jpg';
import Alert from 'react-bootstrap/Alert';

const clueEnglish = [
    {clue: "All praises and thanks to Allah"},
    {clue: "Lord of the universe"},
    {clue: "The most Gracious the most Merciful"},
    {clue: "Master of the day of judgement"},
    {clue: "You alone we worship"},
    {clue: "You alone we ask for help"},
    {clue: "Guide us to the path"},
    {clue: "The straight path"},
    {clue: "The path of those"},
    {clue: "You have bestowed favours"},
    {clue: "Not those who earned your wrath"},
    {clue: "On themselves"},
    {clue: "And not those who go astray"}
]

const clueArabic = [
    {clue: "lilahi al-hamdu"},
    {clue: "al-'alamina rabbi"},
    {clue: "ar-rahim ar-rahmani"},
    {clue: "al-dini yawmi maliki"},
    {clue: "na'budu iyyaka"},
    {clue: "nasta'inu wa-iyyaka"},
    {clue: "al-sirata ih'dina"},
    {clue: "al-mus'taqima"},
    {clue: "alladhina sirata"},
    {clue: "alayhim an'amta"},
    {clue: "al-maghdubi ghayri"},
    {clue: "alayhim"},
    {clue: "al-dalina wala"},
]

const cardArabic = [ //must use require due to webpack to properly locate path
    {ayah: "ٱلۡحَمۡدُ لِلَّهِ", translit: "lilahi al-hamdu", id: 1, matched: false, matchID: 1, clue: clueEnglish[0].clue},
    {ayah: "رَبِّ ٱلۡعَٰلَمِينَ", translit: "al-'alamina rabbi", id: 2, matched: false, matchID: 2, clue: clueEnglish[1].clue },
    {ayah: "ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ", translit: "ar-rahim ar-rahmani", id: 3, matched: false, matchID: 3, clue: clueEnglish[2].clue },
    {ayah: "مَٰلِكِ يَوۡمِ ٱلدِّينِ", translit: "al-dini yawmi maliki", id: 4, matched: false, matchID: 4, clue: clueEnglish[3].clue },
    {ayah: "إِيَّاكَ نَعۡبُدُ", translit: "na'budu iyyaka", id: 5, matched: false, matchID: 5, clue: clueEnglish[4].clue },
    {ayah: "وَإِيَّاكَ نَسۡتَعِينُ", translit: "nasta'inu wa-iyyaka", id: 6, matched: false, matchID: 6, clue: clueEnglish[5].clue },
    {ayah: "ٱهۡدِنَا ٱلصِّرَٰطَ", translit: "al-sirata ih'dina", id: 7, matched: false, matchID: 7, clue: clueEnglish[6].clue },
    {ayah: "ٱلۡمُسۡتَقِيمَ", translit: "al-mus'taqima", id: 8, matched: false, matchID: 8, clue: clueEnglish[7].clue },
    {ayah: "صِرَٰطَ ٱلَّذِينَ", translit: "alladhina sirata", id: 9, matched: false, matchID: 9, clue: clueEnglish[8].clue },
    {ayah: "أَنۡعَمۡتَ عَلَيۡهِمۡ", translit: "alayhim an'amta", id: 10, matched: false, matchID: 10, clue: clueEnglish[9].clue },
    {ayah: "غَيۡرِ ٱلۡمَغۡضُوبِ", translit: "al-maghdubi ghayri", id: 11, matched: false, matchID: 11, clue: clueEnglish[10].clue },
    {ayah: "عَلَيۡهِمۡ", translit: "alayhim", id: 12, matched: false, matchID: 12, clue: clueEnglish[11].clue },
    {ayah: "وَلَا ٱلضَّآلِّينَ", translit: "al-dalina wala", id: 13, matched: false, matchID: 13, clue: clueEnglish[12].clue },
] //array for storing the ayahs in arabic 

const cardEnglish = [ //must use require due to webpack to properly locate path
    {ayah: "All praises and thanks to Allah", translit: "", id: 1, matched: false, matchID: 1, clue: clueArabic[0].clue },
    {ayah: "Lord of the universe", translit: "", id: 2, matched: false, matchID: 2, clue: clueArabic[1].clue },
    {ayah: "The most Gracious the most Merciful", translit: "", id: 3, matched: false, matchID: 3, clue: clueArabic[2].clue },
    {ayah: "Master of the day of judgement", translit: "", id: 4, matched: false, matchID: 4, clue: clueArabic[3].clue },
    {ayah: "You alone we worship", translit: "", id: 5, matched: false, matchID: 5, clue: clueArabic[4].clue },
    {ayah: "You alone we ask for help", translit: "", id: 6, matched: false, matchID: 6, clue: clueArabic[5].clue },
    {ayah: "Guide us to the path", translit: "", id: 7, matched: false, matchID: 7, clue: clueArabic[6].clue },
    {ayah: "The straight path", translit: "", id: 8, matched: false, matchID: 8, clue: clueArabic[7].clue },
    {ayah: "The path of those", translit: "", id: 9, matched: false, matchID: 9, clue: clueArabic[8].clue },
    {ayah: "You have bestowed favours", translit: "", id: 10, matched: false, matchID: 10, clue: clueArabic[9].clue },
    {ayah: "Not those who earned your wrath", translit: "", id: 11, matched: false, matchID: 11, clue: clueArabic[10].clue },
    {ayah: "On themselves", translit: "", id: 12, matched: false, matchID: 12, clue: clueArabic[11].clue },
    {ayah: "And not those who go astray", translit: "", id: 13, matched: false, matchID: 13, clue: clueArabic[12].clue },
] //array for storing the ayahs in english

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
        const shuffledCards = [...cardArabic, ...cardEnglish] //the array of cards to be shuffled
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
    if (choice1 && !choice2) {
        setAlert(true)
        setTimeout(() => setAlert(false), 2000)

    }
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
            setTimeout(() => resetTurn(), 3000)
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
   const [alert, setAlert] = useState(false) //useState for rendering alerts on card choices/statuses

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
           <h2 className="score">Turns: {turns} </h2>
       </div>
       :null
       }

       {
       
           alert ? 
           <Alert variant="warning" className="Alert">Clue: {choice1.clue}</Alert>
           :null
        }

 

       </div>
      );
}
 
export default FatihaPage;