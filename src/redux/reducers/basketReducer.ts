import { ADD_TO_BASKET_OK, CountryActions, CountryState } from '../../types'

const basketReducer = (
  state: CountryState = { myBasket: [], myCountries: [] },
  action: CountryActions
): CountryState => {
  switch (action.type) {
  case ADD_TO_BASKET_OK:
    const { country } = action.payload
    if (state.myBasket.find((value) => value.name === country.name)) {
      return state
    }
    return { ...state, myBasket: [...state.myBasket, country] }

  default:
    return state
  }
}
export default basketReducer
