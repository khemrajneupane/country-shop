import React from 'react'
import PropTypes from 'prop-types'

import { TableCellType } from '../../types'

import './TableCell.css'

const TableCell = ({ name, handleClickSort, asc, orderBy }: TableCellType) => {
  return (
    <th
      onClick={() => {
        handleClickSort(name)
      }}
    >
      {asc && orderBy === name ? (
        <i className="fa fa-sort-asc fa-sm" aria-hidden="true">
          {name}
        </i>
      ) : (
        <i className="fa fa-sort-desc fa-sm" aria-hidden="true">
          {name}
        </i>
      )}
    </th>
  )
}

TableCell.propTypes = {
  name: PropTypes.string.isRequired,
  handleClickSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
  orderBy: PropTypes.string.isRequired,
}

export default TableCell
