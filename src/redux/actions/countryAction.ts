import { Dispatch } from 'react'

import { Countries, CountryActions, COUNTRY_LIST_OK } from '../../types'

function countriesList_OK(countries: Countries[]): CountryActions {
  return {
    type: COUNTRY_LIST_OK,
    payload: {
      countries,
    },
  }
}
const countryList = () => {
  return async (dispatch: Dispatch<any>) => {
    const data = await fetch(`https://restcountries.eu/rest/v2`)
    const countries = await data.json()
    dispatch(countriesList_OK(countries))
  }
}
export default countryList
