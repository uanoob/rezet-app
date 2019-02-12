import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import { getAllProducts } from '../store/actions';
import WelcomePage from './WelcomePage';
import CartPage from './CartPage';
import ShippingPage from './ShippingPage';

class App extends Component {
  componentDidMount() {
    const { onGetAllProducts } = this.props;
    onGetAllProducts();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/welcome" component={WelcomePage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/shipping" component={ShippingPage} />
        <Redirect to="/welcome" />
      </Switch>
    );
  }
}

App.propTypes = {
  onGetAllProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.products.products,
});

const mapDispatchToProps = {
  onGetAllProducts: getAllProducts,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
