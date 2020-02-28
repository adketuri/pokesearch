import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import pokemonReducer from './reducer/reducer';

const middleware = [thunk];

const store = createStore(pokemonReducer, applyMiddleware(...middleware));

export default store;