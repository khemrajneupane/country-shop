import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import country from './countryReducer'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    country,
  })

export default createRootReducer
