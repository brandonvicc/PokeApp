import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Pokedex from './components/PokeDex';
import CurrPokemonInfo from './components/CurrPokemonInfo';
import LoadingSpinner from './components/LoadingSpinner'

function App() {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemons, setPokemons] = useState(null);
    let currId = useSelector((state) => state.currentId)
    useEffect(() => {
        populatePokemon()
    }, [currId]);

    const contents = !pokemons
        ? <LoadingSpinner />
        : <>
            <Pokedex pokemon={pokemons} />
            <CurrPokemonInfo pokemon={pokemons} />
        </>


    return (
        <div>
            <h1 id="tableLabel">Pokemon</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );

    async function populatePokemon() {
        const response = await fetch(BASE_URL + currId.currentId);
        const data = await response.json();
        setPokemons(data);

    }


}

export default App;