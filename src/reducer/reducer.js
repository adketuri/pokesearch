import {
    FETCH_POKEMON_PENDING,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_ERROR
} from '../actions/actions'

const INITIAL_STATE = {
    pending: false,
    pokemon: null,
    error: null
}

function pokemonReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POKEMON_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pending: false,
                pokemon: action.pokemon
            }
        case FETCH_POKEMON_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getPokemon = state => state.pokemon;
export const getPending = state => state.pending;
export const getError = state => state.error;

export default pokemonReducer;