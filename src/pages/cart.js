import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllProducts, addProduct } from '../store/products/actions';
import CartList from '../components/CartList';
import AddProduct from '../components/AddProduct';

const Cart = ({ getAllProducts, addProduct, products }) => {
  useEffect(() => getAllProducts(), []);

  return (
    <Fragment>
      <AddProduct addProduct={addProduct} />
      <CartList products={products} />
    </Fragment>
  );
};

Cart.defaultProps = {
  products: [],
};

Cart.propTypes = {
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  products: state.products.items,
});

const mapDispatchToProps = {
  addProduct,
  getAllProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
