import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../dispatchers/fetchPokemon";
import Stats from './stats'


export default () => {

    const dispatch = useDispatch();
    const [query, setQuery] = React.useState('');
    const pokemon = useSelector(state => state.pokemon);
    const loading = useSelector(state => state.loading);

    React.useEffect(()=>{
        dispatch(fetchPokemon('pikachu'));
    }, [dispatch]);

    return(
        <div>
            <h1>Search Pokemon</h1>
            <div>   
                <input disabled={loading} value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button disabled={loading || query.length === 0} onClick={() => dispatch(fetchPokemon(query.toLowerCase()))}>search</button>
            </div>
            <div>{loading && 'Loading...'}</div>
            <Stats pokemon={pokemon} />
        </div>
    );
}