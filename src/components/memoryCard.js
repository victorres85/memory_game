function Character(character) {
    return (
        <div className="col-3">
            <div className="card">

                <img className="card-img-top" src={character.image} alt="imagem" width='300' />
            </div>
        </div>
    );
}
export default Character;