import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import pokemonReducer from './reducers/pokemonReducers';

const middleware = [thunk];

const store = createStore(pokemonReducer, applyMiddleware(...middleware));

export default store;