import React from 'react'
import PropTypes from 'prop-types'

import { FlagType } from '../../types'

import './Flag.css'

const Flag = ({ imgUrl }: FlagType) => {
  return (
    
      <img src={imgUrl} alt="countryimg" />
      
  )
}
Flag.propTypes = {
  imgUrl: PropTypes.string.isRequired,
}

export default Flag
