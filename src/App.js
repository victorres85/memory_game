import MemoryCards from './components/memory.js';
import { useEffect, useState } from 'react';
import './Css/style.css';
import Abadango from "../src/img/Abadango.jpeg";
import abradolf from "../src/img/abradolf.jpeg";
import Adjudicator from "../src/img/Adjudicator.jpeg";
import Director from "../src/img/AgencyDirector.jpeg";
import Alan from "../src/img/Alan.jpeg";
import Albert from "../src/img/Albert.jpeg";
import Alexander from "../src/img/Alexander.jpeg";
import AlienMorty from "../src/img/AlienMorty.jpeg";
import AlienRick from "../src/img/AlienRick.jpeg";
import Annie from "../src/img/Annie.jpeg";
import AntsJonson from "../src/img/AntsJonson.jpeg";
import Beth from "../src/img/Beth.jpeg";
import Jerry from "../src/img/Jerry.jpeg";
import morty from "../src/img/morty.jpeg";
import ricky from "../src/img/ricky.jpeg";
import summer from "../src/img/summer.jpeg";
import Modal from './components/modal'
import ClosingModal from './components/closingModal'

const images = [
  { src: Abadango, matched: false, name: 'Abadango' },
  { src: abradolf, matched: false, name: 'abradolf' },
  { src: Adjudicator, matched: false, name: 'Adjudicator' },
  { src: Director, matched: false, name: 'Director' },
  { src: Alan, matched: false, name: 'Alan' },
  { src: Albert, matched: false, name: 'Albert' },
  { src: Alexander, matched: false, name: 'Alexander' },
  { src: AlienMorty, matched: false, name: 'AlienMorty' },
  { src: AlienRick, matched: false, name: 'AlienRick' },
  { src: Annie, matched: false, name: 'Annie' },
  { src: AntsJonson, matched: false, name: 'AntsJonson' },
  { src: Beth, matched: false, name: 'Beth' },
  { src: Jerry, matched: false, name: 'Jerry' },
  { src: morty, matched: false, name: 'morty' },
  { src: ricky, matched: false, name: 'ricky' },
  { src: summer, matched: false, name: 'summer' },
];


function App() {
  const [collectionOfCards, setCollectionOfCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  const [clickable, setClickable] = useState(false);
  const [openCards, setOpenCards] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [level, setLevel] = useState(2)
  const [openClosingModal, setOpenClosingModal] = useState(false)
  const [levelDisplay, setLevelDisplay] = useState(false)





  const cardsShuffle = (() => {
    // setOpenOpeningModal(true)
    console.log(`Level on cardsShuffle is ${level}`)
    const images_sliced = images.slice(0, level)
    const cardsShuffled = [...images_sliced, ...images_sliced]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setLevel(2)
    setCollectionOfCards(cardsShuffled)
    setOpenCards(0)
    setCardOne(null)
    setCardTwo(null)
    setOpenCards(0)
    setTurns(0)
    setLevel(2)
    setLevelDisplay(true)

  })

  const selectCard = (card) => {
    cardOne ? setCardTwo(card) : setCardOne(card)
  }

  function levelUp() {
    const newLevel = level + 2
    if (newLevel <= 4) {
      setLevel(newLevel)
      console.log(`Level on cardsShuffle is ${newLevel}`)
      const images_sliced = images.slice(0, newLevel)
      const cardsShuffled = [...images_sliced, ...images_sliced]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }))

      setCollectionOfCards(cardsShuffled)
      setOpenCards(0)
      setCardOne(null)
      setCardTwo(null)
      setOpenCards(0)
      setTurns(0)
    } else {
      setOpenClosingModal(true)
    }
  }




  useEffect(() => {
    if (cardOne && cardTwo) {
      setClickable(true)

      if (cardOne.src === cardTwo.src) {
        setCollectionOfCards(Collection => {
          return Collection.map(card => {
            if (card.src === cardOne.src) {
              setOpenCards(openCards + 1)

              if (openCards === level - 1) {
                console.log('All the cards have been opened')
                setOpenModal(true)
                console.log(`current Level is ${level}`)
                console.log(`there are ${level} opened cards`)
              } else {
                console.log('keep playing')
                console.log(`current Level is ${level}`)
                console.log(`there are ${level} opened cards`)
              }
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        iniciateTurn()
      }
      else {
        setTimeout(() => iniciateTurn(), 1000)
      }
    }

  }, [cardOne, cardTwo, collectionOfCards, level, openCards, openModal])



  const iniciateTurn = () => {

    setCardOne(null)
    setCardTwo(null)
    setTurns(Turn => Turn + 1)
    setClickable(false)
    console.log()
  }


  return (
    <div className="App">
      <header className="App-header">

      </header>
      <section>
        <div className='header'>
          <div className='text_blocks'>
            <p className={`${!levelDisplay && 'hide_element'} `} id='level'>You are on level number {level === 0 ? level - 2 : 1}</p>
            <p className={`${!levelDisplay && 'hide_element'} `} id='turns'>Number of trials {turns}</p>

          </div>
          <h3 className={`${levelDisplay && 'hide_element'} `}>Let's see if you have a good memory!</h3 >
          <button className='startButton' onClick={cardsShuffle}>Start</button>
        </div>
        <div className='card-frame'>
          <div className='card-grid'>
            {collectionOfCards.map((card) => (
              <div className='card'>
                <MemoryCards
                  key={card.id}
                  card={card}
                  selectCard={selectCard}
                  turn={card === cardOne || card === cardTwo || card.matched}
                  clickable={clickable}
                />
              </div>
            ))}
          </div>
        </div>


        < div >
          {openModal && < Modal
            closeModal={setOpenModal}
            turns={turns}
            level={level}
            levelUp={levelUp} />}
        </div >
        < div >
          {openClosingModal && < ClosingModal
            closeClosingModal={setOpenClosingModal}
          // newName={nameChangeHandler}
          // name={name}
          // onSubmit={onSubmit}
          />}
        </div >
      </section >

    </div >
  );
}

export default App;

