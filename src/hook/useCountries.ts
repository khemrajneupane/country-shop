import { useState, useEffect } from 'react'

import * as _ from 'lodash'
import { AppState, Countries } from '../types'
import countryList from '../redux/actions/countryAction'
import { useDispatch, useSelector } from 'react-redux'

const useCountries = (keyword: string, orderBy: string, asc: boolean) => {
  const [countries, setCountries] = useState<Countries[]>([])
  const myCountries = useSelector(
    (state: AppState) => state.country.myCountries
  )
  const dispatch = useDispatch()
  useEffect(() => {
    const loadData = async () => {
      try {
        dispatch(countryList())
      } catch (error) {
        console.log(error.name)
      }
    }
    loadData()
  }, [dispatch])

  useEffect(() => {
    let filteredData = myCountries.filter((country) => {
      return (
        country.name.toLowerCase().search(keyword.toLowerCase()) !== -1 ||
        country.nativeName.toLowerCase().search(keyword.toLowerCase()) !== -1 ||
        country.languages.some(
          (lang) => lang.iso639_1 === keyword.toLowerCase()
        ) ||
        country.region.toLowerCase().search(keyword.toLowerCase()) !== -1
      )
    })
    // Ordering
    const order = asc ? 'asc' : 'desc'
    const orderedCountries = _.orderBy(
      filteredData,
      [
        function (o) {
          switch (orderBy) {
          case 'population':
            return o.population
          case 'region':
            return o.region
          case 'language':
            return o.languages[0].name
          default:
            return o.name
          }
        },
      ],
      [order]
    )
    setCountries(orderedCountries)
  }, [orderBy, myCountries, asc, keyword])

  return countries
}

export default useCountries
