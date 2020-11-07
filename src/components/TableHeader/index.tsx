import React from 'react'
import PropTypes from 'prop-types'

import TableCell from '../TableCell'
import { TableHeaderType } from '../../types'

import './TableHeader.css'

const TableHeader = ({ handleClickSort, asc, orderBy }: TableHeaderType) => {
  const tableHeaderName = ['flag', 'name', 'language', 'population', 'region']
  return (
    <thead className="thead-light">
      <tr className="table-success">
        {tableHeaderName.map((name) => {
          return (
            <TableCell
              key={name}
              name={name}
              handleClickSort={handleClickSort}
              orderBy={orderBy}
              asc={asc}
            />
          )
        })}
        <th scope="col"></th>
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  handleClickSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
  orderBy: PropTypes.string.isRequired,
}

export default TableHeader
