import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Pokedex from './components/PokeDex';

function App() {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemons, setPokemons] = useState(null);
    let currId = useSelector((state) => state.currentId)
    useEffect(() => {
        populatePokemon()
    }, [currId]);

    const contents = !pokemons
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <>
            <Pokedex pokemon={pokemons} />
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