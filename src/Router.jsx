import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LatestPurchasesComponent from './components/LatestPurchasesComponent'
import AppCustomers from './pages/AppCustomers'
import AppProducts from './pages/AppProducts'
import BuyProductComponent from './components/BuyProductComponent'

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/customers'>
            <AppCustomers />
        </Route>
        <Route exact path='/products'>
            <AppProducts />
        </Route>
        <Route path='/customers/:id'>
            <LatestPurchasesComponent />
        </Route>
        <Route path='/products/:id'>
            <BuyProductComponent />
        </Route>

      </Switch>
    </div>
  )
}

export default Router

