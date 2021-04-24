import { combineReducers, createStore } from 'redux'

import createCard from './reducers/createCard'
import getActiveCard from './reducers/getActiveCard'

const rootReducer = combineReducers({
  createCard,
  getActiveCard
})

const store = createStore(rootReducer);

export default store;