export const toggleViewNumberCard = (id: number, hideCardNumber: boolean) => {
  return {
    type: 'HIDE_CARDNUMBER',
    id,
    hideCardNumber,
  }
}