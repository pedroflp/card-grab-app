import { INITIAL_STATE } from '../../initialState'

export default function card(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case 'CREATE_CARD': 
      return {...state, cards: [...state.cards, 
        { 
          name: action.name, 
          username: action.username, 
          number: action.number,
          hideNumber: false,
        }
      ]};

    case 'DELETE_CARD':
      return {
        activeCard: {}, 
        cards: state.cards.filter(card => card.number !== action.card.number)
      }

    case 'HIDENUM_CARD':   
      return {
        activeCard: {},
        cards: state.cards.filter(card => {
          if (card.number === action.card.number) {
            card.hideNumber = !card.hideNumber

            return {card}
          }
          else return {card}
        })
      }

    case 'ACTIVE_CARD':
      return {...state, activeCard: action.card}

    default:
      return state;
  }
}

