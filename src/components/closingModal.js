

function ClosingModal({ closeClosingModal }) {

    return (
        <div>
            <div id="modal-container" onClick={() => closeClosingModal(false)}>
                <div className="modal">
                    <div className="message">

                        <h1>Congratulations you completed all levels!!!</h1>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ClosingModal;