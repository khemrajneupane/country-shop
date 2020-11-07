import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import HomeIcon from '@material-ui/icons/Home'
import './oneCountry.css'

import { AppState } from '../../types'

interface Params {
  name: string
}

const OneCountry = () => {
  const { name } = useParams<Params>()
  const allCountries = useSelector(
    (state: AppState) => state.country.myCountries
  )
  const acountry = allCountries.find((country) => country.name === name)

  return (
    <div className="table container main">
      <div className="main__head">
        <strong style={{ color: 'green', fontSize: `2.5rem` }}>
          {acountry?.name}
        </strong>
      </div>
      <div className="main__table">
        <table className="table table-dark">
          <thead>
            <tr className="table-primary">
              <th>Flag</th>
              <th>NativeName</th>
              <th>Population</th>
              <th>Region</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  style={{ height: `50px`, width: `60px` }}
                  src={acountry?.flag}
                  alt={acountry?.name}
                />
              </td>
              <td>
                <strong>{acountry?.nativeName}</strong>
              </td>
              <td>
                <strong>{acountry?.population}</strong>
              </td>
              <td>
                <strong>{acountry?.region}</strong>
              </td>
              <td>${70}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/">
        <HomeIcon color="action" fontSize="large" />
      </Link>
    </div>
  )
}

export default OneCountry
