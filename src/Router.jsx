import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LatestPurchasesComponent from './components/LatestPurchasesComponent'
import AppCustomers from './pages/AppCustomers'
import AppProducts from './pages/AppProducts'

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/customers'>
            <AppCustomers />
        </Route>
        <Route path='/products'>
            <AppProducts />
        </Route>
        <Route path='/customers/:id'>
            <LatestPurchasesComponent />
        </Route>
      </Switch>
    </div>
  )
}

export default Router

