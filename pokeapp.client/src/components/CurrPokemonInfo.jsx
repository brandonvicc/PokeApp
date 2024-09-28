import MoveCard from "./MoveCard";

/* eslint-disable react/prop-types */
function CurrPokemonInfo({pokemon}) {
    return (<div>
        {pokemon.moves.map((move, index) => <p key={index}>{move === undefined ? "cant find move list" : <MoveCard {...move}/> }</p>)}
    </div>)
}

export default CurrPokemonInfo;