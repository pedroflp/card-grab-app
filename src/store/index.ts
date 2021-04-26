import { combineReducers, createStore } from 'redux';

import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import persistStore from 'redux-persist/es/persistStore';

import createCard from './reducers/createCard'
import getActiveCard from './reducers/getActiveCard'
import deleteCard from './reducers/deleteCard'
import hideCardNumber from './reducers/hideCardNumber'

export const rootReducer = combineReducers({
  createCardReducer: createCard,
  getActiveCard,
  deleteCard,
  hideCardNumber

})

const persistedConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['createReducer']
}

const persistedReducer = persistReducer(persistedConfig, rootReducer)

const store = createStore(rootReducer);

// export const persistedStore = persistStore(store);

export default store;