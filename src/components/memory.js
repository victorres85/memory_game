

import back_image from '../img/javascript.svg';

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
