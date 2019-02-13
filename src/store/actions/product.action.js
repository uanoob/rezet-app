import {
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
} from './types';

import BASE_URL from '../../config';

import { getAllProducts } from '.';

const deleteProductStart = () => ({
  type: DELETE_PRODUCT_START,
});

export const deleteProductSuccess = message => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: message,
});

const deleteProductFail = error => ({
  type: DELETE_PRODUCT_FAIL,
  payload: error,
});

export const deleteProduct = productId => (dispatch) => {
  dispatch(deleteProductStart());
  fetch(`${BASE_URL}/products/${productId}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then((data) => {
      if (data) {
        dispatch(deleteProductSuccess(data));
        dispatch(getAllProducts());
      } else {
        dispatch(deleteProductFail(data));
      }
    })
    .catch((error) => {
      dispatch(deleteProductFail(error));
    });
};
