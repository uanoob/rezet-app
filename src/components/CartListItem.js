import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProduct, updateProduct } from '../store/products/actions';

const CartListItem = ({ product, deleteProduct, updateProduct }) => {
  const increase = product => ({ ...product, quantity: product.quantity + 1 });
  const decrease = product => ({ ...product, quantity: product.quantity - 1 });

  return (
    <li
      className='list-group-item d-flex justify-content-between align-items-center'
      style={{ maxWidth: '680px' }}>
      <div className='list-inline-item'>
        <div className='card mb-3' style={{ maxWidth: '340px' }}>
          <div className='row no-gutters'>
            <div className='col-md-4'>
              <img src={product.image} className='card-img' alt='...' />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title'>{product.title}</h5>
                <p className='card-text'>{product.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='list-inline-item'>
        <div className='btn-toolbar mb-3' role='toolbar' aria-label='Toolbar with button groups'>
          <div className='btn-group mr-1' role='group' aria-label='Third group'>
            <button
              type='button'
              className='btn btn-outline-info'
              onClick={() => updateProduct(increase(product))}
              disabled={product.quantity >= 100}>
              +
            </button>
          </div>
          <div className='btn-group mr-1' role='group' aria-label='Third group'>
            <button type='button' className='btn btn-light' disabled>
              {product.quantity}
            </button>
          </div>
          <div className='btn-group' role='group' aria-label='Third group'>
            <button
              type='button'
              className='btn btn-outline-info'
              onClick={() => updateProduct(decrease(product))}
              disabled={product.quantity <= 0}>
              -
            </button>
          </div>
          <div className='btn-group mr-1' role='group' aria-label='Third group'>
            <button type='button' className='btn btn-light' disabled>
              {(product.price * product.quantity).toFixed(2)}$
            </button>
          </div>
          <div className='btn-group mr-1' role='group' aria-label='Third group'>
            <button
              type='button'
              className='btn btn-outline-danger'
              onClick={() => deleteProduct(product.id)}>
              <i className='far fa-trash-alt' />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

CartListItem.propTypes = {
  product: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  deleteProduct,
  updateProduct,
};

export default connect(null, mapDispatchToProps)(CartListItem);
