import React from 'react';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import Layout from '../hoc/layout';
import Welcome from '../pages/welcome';
import Cart from '../pages/cart';
import Shipping from '../pages/shipping';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/cart" component={Cart} />
      <Route path="/shipping" component={Shipping} />
      <Redirect to="/" />
    </Switch>
  </Layout>
);

export default withRouter(App);
