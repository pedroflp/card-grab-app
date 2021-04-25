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
  if (action.type === 'HIDE_CARDNUMBER') 
    return state.data.map(({ cardId }: Card) => {
      if (cardId === action.id) {
      return { data: [{ ...state.data, hideCardNumber: action.hideCardNumber}]};
    } else {
      return state;
    }
  })
  else 
    return state
  }


// if (action.type === 'HIDE_CARDNUMBER') {
//   state.data.filter(({ cardId }: Card) => {
//     if (cardId === action.id) {

//       action.hideNumber = !action.hideNumber;
//       console.log(action.hideNumber);

//       return { data: [{ ...state.data, hideNumber: action.hideNumber}]};
//     } else {
//       return state;
//     }
//   })
// } else {
//   return state;
// }