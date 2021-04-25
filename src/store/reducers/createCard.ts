import { INITIAL_STATE } from '../initialState'

export default function createCard(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case 'CREATE_CARD': 
      return { ...state, data: [...state.data, action]};
    default:
      return state;
  }
}