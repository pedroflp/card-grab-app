type Card = {
  cardId: number
  hideCardNumber: boolean,
}

export const toggleViewNumberCard = (cardId:number, hideCardNumber:boolean) => {
  return {
    type: 'HIDE_CARDNUMBER',
    cardId,
    hideCardNumber,
  }
}