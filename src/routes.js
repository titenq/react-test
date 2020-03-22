import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Product from './pages/product';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products/:id" component={Product} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
