import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CartListItem from './CartListItem';

const CartList = ({ products }) => {
  let total = 0;
  return (
    <div className='container mt-2'>
      <ul className='list-group'>
        {products.map(product => {
          total += product.price * product.quantity;
          return <CartListItem key={product.id} product={product} />;
        })}
      </ul>
      <div
        className='list-group-item d-flex justify-content-between align-items-center'
        style={{ maxWidth: '680px' }}>
        {`Total: ${total} $`}

        <NavLink to='/shipping' type='button' className='btn btn-outline-success'>
          Buy
        </NavLink>
      </div>
    </div>
  );
};

CartList.defaultProps = {
  products: [],
};

CartList.propTypes = {
  products: PropTypes.array,
};

export default CartList;
