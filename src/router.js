import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/home';
import Cart from './pages/cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  );
}
