import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Button from '@material-ui/core/Button'
import PermScanWifiIcon from '@material-ui/icons/PermScanWifi'
import Flag from '../Flag'
import { AppState, TableRowType } from '../../types'

import './TableRow.css'

const TableRow = ({
  imgUrl,
  countryName,
  languages,
  population,
  region,
  addCountryToBasket,
}: TableRowType) => {
  const myBasket = useSelector((state: AppState) => state.country.myBasket)
  const trTdStyle = myBasket.find((names) => names.name === countryName)
    ? `td2`
    : `td1`
  const colorNfontSize = myBasket.find((names) => names.name === countryName)
  return (
    <tr>
      <td className={trTdStyle}>
        <Flag imgUrl={imgUrl} />
      </td>
      <td className={trTdStyle}>
        {countryName}
        <Link to={`/country/${countryName}`}>
          <PermScanWifiIcon />
        </Link>
      </td>
      <td className={trTdStyle}>{languages.map((m) => `${m.name}\n`)}</td>
      <td className={trTdStyle}>{population}</td>
      <td className={trTdStyle}>{region}</td>
      <td className={trTdStyle}>
        <Button onClick={addCountryToBasket} color="primary">
          <AddShoppingCartIcon
            fontSize={colorNfontSize ? `small` : `large`}
            color={colorNfontSize ? `disabled` : `primary`}
          />
        </Button>
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
}

export default TableRow
