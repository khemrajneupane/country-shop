import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../types'

const Basket = () => {
  const myBasket = useSelector((state: AppState) => state.country.myBasket)
  return (
    <div>
      {myBasket.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        `You have ${myBasket.length} items`
      )}
    </div>
  )
}

export default Basket
