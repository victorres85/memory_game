function Modal({ closeModal, turns, level, levelUp }) {

    const changeLevel = (() => {
        levelUp(level)
        console.log(level)
    })

    return (
        <div>
            <div id="modal-container" onClick={() => closeModal(false)}>
                <div className="modal">
                    <div className="modal-content">
                        <div className="message">
                            <h1>Congratulations!!!</h1>
                            <p>You have completed the {level - 2} with {turns} turns!!</p>
                            <p>Do you wanna have a chance on the next level?</p>
                        </div>
                        <div className="buttons">
                            <button onClick={changeLevel} >YES</button>
                            <button>NO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;