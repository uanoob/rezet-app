import React from 'react';
import PropTypes from 'prop-types';
import CartListItem from './CartListItem';

const CartList = ({ products }) => (
  <div className="container mt-2">
    <ul className="list-group">
      {products.map(product => (
        <CartListItem key={product.id} product={product} />
      ))}
    </ul>
    <div
      className="list-group-item d-flex justify-content-between align-items-center"
      style={{ maxWidth: '640px' }}
    >
      Total: 1235$
      <button type="button" className="btn btn-outline-success">
        Buy
      </button>
    </div>
  </div>
);

CartList.defaultProps = {
  products: [],
};

CartList.propTypes = {
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

export default CartList;
