import { combineReducers, createStore } from 'redux'

import createCard from './reducers/createCard'
import getActiveCard from './reducers/getActiveCard'
import deleteCard from './reducers/deleteCard'
import hideCardNumber from './reducers/hideCardNumber'

const rootReducer = combineReducers({
  createCard,
  getActiveCard,
  deleteCard,
  hideCardNumber
})

const store = createStore(rootReducer);

export default store;