import { GET_POKEMON_LOADING, GET_POKEMON_SUCCESS, GET_POKEMON_ERROR } from "../actions/pokemonActions";

const DEFAULT_STATE = {
    loading: false,
    pokemon: null,
    error: null,
}

export default function pokemonReducer(state = DEFAULT_STATE, action) {
    switch(action.type){
        case GET_POKEMON_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemon: action.payload
            }
        case GET_POKEMON_LOADING:
            return {
                ...state,
                loading: true,
                pokemon: null,
            }
        case GET_POKEMON_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}