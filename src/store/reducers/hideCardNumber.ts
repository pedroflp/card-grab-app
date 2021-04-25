import { INITIAL_STATE } from '../initialState';

type Card = {
  cardId: number,
}

type Action = {
  type: string,
  id: number
  hideCardNumber: boolean,
}

export default function hideCardNumber(state = INITIAL_STATE, action: Action) { 
  if (action.type === 'HIDE_CARDNUMBER') {
    console.log(action);
    
    return Object.assign({}, state.data, {
      hideCardNumber: action.hideCardNumber
    })
  }
  else 
    return state
}
