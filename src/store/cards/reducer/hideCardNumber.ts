import { INITIAL_STATE } from '../initialState';

export default function hideCardNumber(state = INITIAL_STATE, action: any) { 
  if (action.type === 'HIDE_CARDNUMBER') {  
    Object.assign(state.data);
    if (state.activeCard === action.cardId) {
      return {
        ...state,
        data: {
          ...state.data,
            hideCardNumber: action.hideCardNumber
          }
        }
      }
    } else {
      return state
    }
  }
  
