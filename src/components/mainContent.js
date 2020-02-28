import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchPokemon } from "../fetchPokemon";

export default () => {

    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon);
    const pending = useSelector(state => state.pending);
    React.useEffect(() => {
        dispatch(fetchPokemon());
    }, []);

    if (pending) return <div>loading</div>

    return(
        <div>
            <h1>Pokemon</h1>
            <div>{pokemon && pokemon.name}</div>
        </div>
    );
}