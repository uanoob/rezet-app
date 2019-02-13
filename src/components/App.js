import React from 'react';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import Layout from '../hoc/layout';
import WelcomePage from './WelcomePage';
import CartPage from './CartPage';
import ShippingPage from './ShippingPage';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/shipping" component={ShippingPage} />
      <Redirect to="/" />
    </Switch>
  </Layout>
);

export default withRouter(App);
