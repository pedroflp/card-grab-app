import { combineReducers, createStore } from 'redux';

import cards from './cards/reducer/card'

export const rootReducer = combineReducers({
  cards: cards,
})

const store = createStore(rootReducer);

export default store;