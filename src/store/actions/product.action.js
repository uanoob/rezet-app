import {
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DECREASE_PRODUCT_START,
  DECREASE_PRODUCT_SUCCESS,
  DECREASE_PRODUCT_FAIL,
} from './types';

import BASE_URL from '../../config';

import { getAllProducts } from '.';

const deleteProductStart = () => ({
  type: DELETE_PRODUCT_START,
});

const deleteProductSuccess = message => ({
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

const decreaseProductStart = () => ({
  type: DECREASE_PRODUCT_START,
});

const decreaseProductSuccess = message => ({
  type: DECREASE_PRODUCT_SUCCESS,
  payload: message,
});

const decreaseProductFail = error => ({
  type: DECREASE_PRODUCT_FAIL,
  payload: error,
});

export const decreaseProduct = (productId, nextQuantity) => (dispatch) => {
  dispatch(decreaseProductStart());
  const sendData = {
    quantity: nextQuantity,
  };
  fetch(`${BASE_URL}/products/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendData),
  })
    .then(response => response.json())
    .then((data) => {
      if (data) {
        dispatch(decreaseProductSuccess(data));
        dispatch(getAllProducts());
      } else {
        dispatch(decreaseProductFail(data));
      }
    })
    .catch((error) => {
      dispatch(decreaseProductFail(error));
    });
};
