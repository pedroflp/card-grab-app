import { INITIAL_STATE } from '../initialState';

export default function getActiveCard(state = INITIAL_STATE, action: any) { 
  if (action.type === 'ACTIVE_CARD') {
    console.log(state);
    
   return { activeCard: action.id, ...state.data }
  } else {
    return state
  }
}
