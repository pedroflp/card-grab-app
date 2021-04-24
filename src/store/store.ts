import { createStore } from "redux";

import CardsReducer from './reducers/createCard';
import reducers from './store'

const store = createStore(reducers);

export default store;