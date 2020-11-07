import {
  ADD_TO_BASKET_OK,
  Countries,
  CountryActions,
  DELETE_FROM_BASKET_OK,
} from '../../types'

export const addCountryToBasket = (country: Countries): CountryActions => {
  return {
    type: ADD_TO_BASKET_OK,
    payload: {
      country,
    },
  }
}

export const deleteFromBasket = (country: Countries): CountryActions => {
  return {
    type: DELETE_FROM_BASKET_OK,
    payload: {
      country,
    },
  }
}
