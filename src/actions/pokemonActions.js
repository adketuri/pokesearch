/** Action Types */
export const GET_POKEMON_SUCCESS = 'POKEMON/GET_SUCCESS'
export const GET_POKEMON_LOADING = 'POKEMON/GET_LOADING'
export const GET_POKEMON_ERROR = 'POKEMON/GET_ERROR'

/** Action creators */
export function getPokemon(pokemon) {
    return {
        type: GET_POKEMON_SUCCESS,
        payload: pokemon
    }
}

export function getPokemonLoading() {
    return {
        type: GET_POKEMON_LOADING,
    }
}

export function getPokemonError(error) {
    return {
        type: GET_POKEMON_ERROR,
        payload: error
    }
}