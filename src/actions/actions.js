/** Action Typeps */
export const FETCH_POKEMON_PENDING = 'GET_POKEMON'
export const FETCH_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS'
export const FETCH_POKEMON_ERROR = 'GET_POKEMON_SUCCESS'


/** Action creators */
export function fetchPokemonPending() {
    return {
        type:FETCH_POKEMON_PENDING,
    }
}

export function fetchPokemonSuccess(pokemon) {
    return {
        type:FETCH_POKEMON_SUCCESS,
        pokemon: pokemon
    }
}

export function fetchPokemonError(error) {
    return {
        type: FETCH_POKEMON_ERROR,
        error: error
    }
}