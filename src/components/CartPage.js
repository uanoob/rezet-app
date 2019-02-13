import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllProducts, deleteProduct } from '../store/actions';
import CartList from './CartList';

class CartPage extends Component {
  componentDidMount() {
    const { onGetAllProducts } = this.props;
    onGetAllProducts();
  }

  handleDeleteProduct = (productId) => {
    const { onDeleteProduct } = this.props;
    onDeleteProduct(productId);
  };

  render() {
    const { products } = this.props;
    return (
      <CartList
        products={products}
        handleDeleteProduct={this.handleDeleteProduct}
      />
    );
  }
}

CartPage.defaultProps = {
  products: [],
};

CartPage.propTypes = {
  onGetAllProducts: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ),
};

const mapStateToProps = state => ({
  products: state.products.products,
});

const mapDispatchToProps = {
  onGetAllProducts: getAllProducts,
  onDeleteProduct: deleteProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPage);
