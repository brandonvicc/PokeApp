import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { incrementId, decrementId } from './features/currentId/currentIdSlice'
import './App.css';
import CurrentPokemon from './components/CurrentPokemon'

function App() {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemons, setPokemons] = useState(null);
    const dispatch = useDispatch()
    let currId = useSelector((state) => state.currentId)
    useEffect(() => {
        populatePokemon()
    }, [currId]);

    const contents = !pokemons
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        //: <table className="table table-striped" aria-labelledby="tableLabel">
        //    <thead>
        //        <tr>
        //            <th>Name</th>
        //        </tr>
        //    </thead>
        //    <tbody>
        //        {pokemons.map(pokemon =>
        //            <tr key={pokemon.name}>
        //            </tr>
        //        )}
        //    </tbody>
        //</table>;
        : <>
            <CurrentPokemon pokemon={pokemons} />
            <button onClick={nextPokemon}>Next Pokemon</button>
            <button onClick={prevPokemon}>Previous Pokemon</button>
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

    function nextPokemon() {
        dispatch(incrementId())
    }
    function prevPokemon() {
        dispatch(decrementId())
    }
}

export default App;