import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllProducts } from '../store/actions';
import CartList from './CartList';

class CartPage extends Component {
  componentDidMount() {
    const { onGetAllProducts } = this.props;
    onGetAllProducts();
  }

  render() {
    const { products } = this.props;
    return <CartList products={products} />;
  }
}

CartPage.defaultProps = {
  products: [],
};

CartPage.propTypes = {
  onGetAllProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ),
};

const mapStateToProps = state => ({
  products: state.products.products,
});

const mapDispatchToProps = {
  onGetAllProducts: getAllProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPage);
