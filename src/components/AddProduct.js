import React from 'react';
import PropTypes from 'prop-types';

const AddProduct = ({ addProduct }) => (
  <div className='container mt-2'>
    <div
      className='list-group-item d-flex justify-content-between align-items-center'
      style={{ maxWidth: '680px' }}>
      <h5>Add New Product</h5>

      <button
        type='button'
        className='btn btn-outline-success'
        onClick={addProduct}>
        Add Product
      </button>
    </div>
  </div>
);

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default AddProduct;
