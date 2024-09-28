/* eslint-disable react/prop-types */
function CurrentPokemon({ pokemon }) {
    return pokemon ? (<>
        <h1>{pokemon?.name}!</h1>
        <div>{pokemon?.sprites?.front_default}</div>
        <img src={pokemon?.sprites?.front_default} />
    </>) : <h1>No pokemon loaded</h1>
}

export default CurrentPokemon