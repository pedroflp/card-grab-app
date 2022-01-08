import { generateUuid } from '../../../utils/generateId';
import { INITIAL_STATE } from '../../initialState'

type Card= {
  id: string,
  number: number,
  hideNumber: boolean,
}

export default function card(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case 'CREATE_CARD': 
      return {...state, cards: [...state.cards, 
        { 
          id: generateUuid(),
          name: action.name, 
          username: action.username, 
          number: action.number,
          hideNumber: false,
          style: action.style,
        }
      ]};

    case 'DELETE_CARD':
      return {
        cards: state.cards.filter((card: Card) => card.id !== action.card.id)
      }

    case 'HIDENUM_CARD':   
      return {
        cards: [ 
          state.cards.find((card: Card) => {
            if (card.id === action.card.id) {
              card.hideNumber = !card.hideNumber

              return card
            }
            else return card
          })
       ] 
      }

    default:
      return state;
  }
}

