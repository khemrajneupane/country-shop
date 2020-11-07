import React from 'react'
import { Switch, Route } from 'react-router-dom'
import OneCountry from './components/oneCountry/OneCountry'

import Home from './components/pages/home/Home'
import CountryList from './components/pages/list/CountryList'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/countryList" component={CountryList} />
    <Route exact path="/country/:name" component={OneCountry} />
  </Switch>
)

export default Routes
