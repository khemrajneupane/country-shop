import React from 'react'
import PropTypes from 'prop-types'

import TableHeader from '../TableHeader'
import TableRow from '../TableRow'
import { MainTableType } from '../../types'

import './MainTable.css'
import { useDispatch } from 'react-redux'
import { addCountryToBasket } from '../../redux/actions/basketAction'

const MainTable = ({
  countries,
  handleClickSort,
  asc,
  orderBy,
}: MainTableType) => {
  const dispatch = useDispatch()
  return (
    <table className="table table-sm table-hover">
      <TableHeader
        handleClickSort={handleClickSort}
        asc={asc}
        orderBy={orderBy}
      />
      <tbody>
        {countries.map((data) => {
          return (
            <TableRow
              key={data.name}
              imgUrl={data.flag}
              countryName={data.name}
              languages={data.languages}
              population={data.population}
              region={data.region}
              addCountryToBasket={() => dispatch(addCountryToBasket(data))}
            />
          )
        })}
      </tbody>
    </table>
  )
}

MainTable.propTypes = {
  countries: PropTypes.array.isRequired,
  handleClickSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
  orderBy: PropTypes.string.isRequired,
}

export default MainTable
