import {fetchPokemonPending, fetchPokemonSuccess, fetchPokemonError} from '../src/actions/actions';

export function fetchPokemon(){
    return (dispatch, getState) => {
        dispatch(fetchPokemonPending());
        fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
        .then(res => res.json())
        .then(res => {
            if (res.error){
                throw(res.error);
            }
            dispatch(fetchPokemonSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchPokemonError(error));
        })
    }
}
