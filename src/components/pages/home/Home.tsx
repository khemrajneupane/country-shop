import React, { useState, useCallback } from 'react'
import MainTable from '../../MainTable'
import useCountries from '../../../hook/useCountries'
import MyDrawer from '../drawer/Drawer'

const AllCountriesView = () => {
  const [orderBy, setOrderBy] = useState<string>('')
  const [asc, setAsc] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<string>('')
  const countries = useCountries(keyword, orderBy, asc)

  const handleClickSort = useCallback(
    (orderBy: string): void => {
      setOrderBy(orderBy)
      setAsc(!asc)
    },
    [asc]
  )

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setKeyword(e.target.value)
    },
    []
  )
  return (
    <div>
      <MyDrawer keyword={keyword} handleChange={handleSearchChange} />
      <MainTable
        countries={countries}
        handleClickSort={handleClickSort}
        orderBy={orderBy}
        asc={asc}
      />
    </div>
  )
}
export default AllCountriesView
