import {
  COUNTRY_LIST_OK,
  CountryState,
  CountryActions,
  ADD_TO_BASKET_OK,
  DELETE_FROM_BASKET_OK,
} from '../../types'

const countryReducer = (
  state: CountryState = { myCountries: [], myBasket: [] },
  action: CountryActions
): CountryState => {
  switch (action.type) {
  case COUNTRY_LIST_OK:
    return { ...state, myCountries: action.payload.countries }
  case ADD_TO_BASKET_OK:
    const { country } = action.payload
    if (state.myBasket.find((value) => value.name === country.name)) {
      return state
    }
    return { ...state, myBasket: [...state.myBasket, country] }

  case DELETE_FROM_BASKET_OK:
    // eslint-disable-next-line no-redeclare
    const remainingBasketCountries = state.myBasket.filter(
      (value) => value.name !== action.payload.country.name
    )
    return { ...state, myBasket: remainingBasketCountries }

  default:
    return state
  }
}
export default countryReducer
