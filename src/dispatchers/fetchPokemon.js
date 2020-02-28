import { getPokemonLoading, getPokemon, getPokemonError } from "../actions/pokemonActions"


export function fetchPokemon(id){
    return (dispatch) => {
        dispatch(getPokemonLoading());
        fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        .then(res => res.json())
        .then(res => {
            if (res.error){
                throw(res.error);
            }
            dispatch(getPokemon(res))
            return res;
        })
        .catch(error => {
            dispatch(getPokemonError("Error fetching pokemon"));
        });
    }
}