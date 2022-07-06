

// import back_image from 'https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825630i21e1.png';

let back_image = 'https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825630i21e1.png'

const MemoryCards = ({ card, selectCard, turn, clickable, level }) => {


    const cardSection = () => {
        if (!clickable) {
            selectCard(card)
        }
    }

    return (
        <div className='cards'>
            <div className={` ${turn ? 'turn' : ''}`}>
                <div>
                    <img className='card-front' src={card.src} alt="card front"></img>
                </div>
                <div>
                    <img className='card-back' onClick={cardSection} src={back_image} alt="card back"></img>
                </div>

            </div>
        </div >


    )

}

export default MemoryCards;
