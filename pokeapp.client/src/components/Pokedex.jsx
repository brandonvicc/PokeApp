/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import { incrementId, decrementId } from '../features/currentId/currentIdSlice'


function Pokedex({ pokemon }) {

    const dispatch = useDispatch()
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={pokemon?.sprites?.front_default} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button onClick={prevPokemon} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button onClick={nextPokemon} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )

    function nextPokemon() {
        dispatch(incrementId())
    }
    function prevPokemon() {
        dispatch(decrementId())
    }
}

export default Pokedex;