/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner';
function MoveCard({ move }) {
    //const BASE_URL = "https://pokeapi.co/api/v2/move/";
    const [moveData, setMove] = useState(null);
    useEffect(() => {
        getMoves(move.url)
    }, [])
    return (moveData == null ? <LoadingSpinner />
        :
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{moveData.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    )

    async function getMoves(url) {
        const response = await fetch(url);
        const data = await response.json();
        setMove(data);

    }
}

export default MoveCard;