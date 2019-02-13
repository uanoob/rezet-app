import React from 'react';
import PropTypes from 'prop-types';

const CartListItem = ({ product }) => (
  <li
    className="list-group-item d-flex justify-content-between align-items-center"
    style={{ maxWidth: '640px' }}
  >
    <div className="list-inline-item">
      <div className="card mb-3" style={{ maxWidth: '340px' }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={product.image} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="list-inline-item">
      <div
        className="btn-toolbar mb-3"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group mr-1" role="group" aria-label="Third group">
          <button type="button" className="btn btn-outline-info">
            +
          </button>
        </div>
        <div className="btn-group mr-1" role="group" aria-label="Third group">
          <button type="button" className="btn btn-light" disabled>
            17
          </button>
        </div>
        <div className="btn-group" role="group" aria-label="Third group">
          <button type="button" className="btn btn-outline-info">
            -
          </button>
        </div>
        <div className="btn-group mr-1" role="group" aria-label="Third group">
          <button type="button" className="btn btn-light" disabled>
            {product.price}
$
          </button>
        </div>
        <div className="btn-group mr-1" role="group" aria-label="Third group">
          <button type="button" className="btn btn-outline-danger">
            <i className="far fa-trash-alt" />
          </button>
        </div>
      </div>
    </div>
  </li>
);

CartListItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartListItem;
