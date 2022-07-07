import MemoryCards from './components/memory.js';
import { useEffect, useState } from 'react';
import './Css/style.css';

import Modal from './components/modal'
import ClosingModal from './components/closingModal'

const images = [
  { src: 'https://tse4.mm.bing.net/th?id=OIP.0djO5vYuLrvZ2dxxszlszgAAAA&pid=Api&P=0&w=173&h=173', matched: false, name: 'Abadango' },
  { src: 'https://www.freepnglogos.com/uploads/pokemon-png/pokemon-png-image-famous-anime-character-png-only-39.png', matched: false, name: 'abradolf' },
  { src: 'https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786750sbinm.png', matched: false, name: 'Adjudicator' },
  { src: 'https://purepng.com/public/uploads/thumbnail//purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786917wifb3.png', matched: false, name: 'Director' },
  { src: 'https://purepng.com/public/uploads/thumbnail//purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527785672couwq.png', matched: false, name: 'Alan' },
  { src: 'https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784345v3cml.png', matched: false, name: 'Albert' },
  { src: 'https://purepng.com/public/uploads/thumbnail//purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786867gzp7j.png', matched: false, name: 'Alexander' },
  { src: 'https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786833pqvld.png', matched: false, name: 'AlienMorty' },
  { src: 'https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786742tsjsu.png', matched: false, name: 'AlienRick' },
  { src: 'https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786781bpocq.png', matched: false, name: 'Annie' },

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
    setLevel(2)
    // setOpenOpeningModal(true)
    console.log(`Level on cardsShuffle is ${level}`)
    const images_sliced = images.slice(0, level)
    const cardsShuffled = [...images_sliced, ...images_sliced]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCollectionOfCards(cardsShuffled)
    setOpenCards(0)
    setCardOne(null)
    setCardTwo(null)
    setOpenCards(0)
    setTurns(0)
    setLevelDisplay(true)

  })

  const selectCard = (card) => {
    cardOne ? setCardTwo(card) : setCardOne(card)
  }

  function levelUp() {
    const newLevel = level + 2
    if (newLevel <= 8) {
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
      setLevelDisplay(false)

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
            <p className={`${!levelDisplay && 'hide_element'} `} id='level'>You are on level number {level - 1}</p>
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

