import { INITIAL_STATE } from '../initialState';

export default function getActiveCard(state = INITIAL_STATE, action: any) {  
  if (action.type === 'ACTIVE_CARD') {
    console.log(`Cartao ativo: ${action.id}`)
   return { activeCard: action.id }
  } else {
    return state
  }
}
