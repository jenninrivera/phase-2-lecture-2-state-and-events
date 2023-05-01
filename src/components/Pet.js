function Pet({pet}){
    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            {false ? (
            <button className="favorite-button active">★</button>
            ) : (
            <button className="favorite-button">☆</button>
            )}
            <h4>{pet.name}</h4>
            <button className="primary">Adopt</button>
        </li>
    )
}

export default Pet;