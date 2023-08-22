import {useState} from 'react'

function Pet({pet}){

    const [favorite, setFavorite] = useState(false)

    const buttonClass = favorite ? "favorite-button active" : "favorite-button"
    const star = favorite ? '★' : '☆'

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            <button className={buttonClass}onClick={() => setFavorite(!favorite)}>{star}</button>
            <h4>{pet.name}</h4>
        </li>
    )
}

export default Pet;
