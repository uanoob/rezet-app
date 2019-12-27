import {
  GET_ALL_PRODUCTS_START,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  UPDATE_PRODUCT_START,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
} from './types';

import BASE_URL from '../../config';

const getAllProductsStart = () => ({
  type: GET_ALL_PRODUCTS_START,
});

export const getAllProductsSuccess = data => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload: data,
});

const getAllProductsFail = error => ({
  type: GET_ALL_PRODUCTS_FAIL,
  payload: error,
});

export const getAllProducts = () => dispatch => {
  dispatch(getAllProductsStart());
  fetch(`${BASE_URL}/products/`)
    .then(response => response.json())
    .then(data => {
      dispatch(getAllProductsSuccess(data));
    })
    .catch(error => {
      dispatch(getAllProductsFail(error));
    });
};

const addProductStart = () => ({
  type: ADD_PRODUCT_START,
});

const addProductSuccess = data => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: data,
});

const addProductFail = message => ({
  type: ADD_PRODUCT_FAIL,
  payload: message,
});

export const addProduct = () => dispatch => {
  dispatch(addProductStart());
  fetch(`${BASE_URL}/products/`, {
    method: 'POST',
  })
    .then(response => response.json())
    .then(data => {
      dispatch(addProductSuccess(data));
    })
    .catch(error => {
      dispatch(addProductFail(error));
    });
};

const deleteProductStart = () => ({
  type: DELETE_PRODUCT_START,
});

const deleteProductSuccess = id => ({
  type: DELETE_PRODUCT_SUCCESS,
  meta: { id },
});

const deleteProductFail = message => ({
  type: DELETE_PRODUCT_FAIL,
  payload: message,
});

export const deleteProduct = id => dispatch => {
  dispatch(deleteProductStart());
  fetch(`${BASE_URL}/products/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(() => {
      dispatch(deleteProductSuccess(id));
    })
    .catch(error => {
      dispatch(deleteProductFail(error));
    });
};

const updateProductStart = () => ({
  type: UPDATE_PRODUCT_START,
});

const updateProductSuccess = data => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: data,
});

const updateProductFail = error => ({
  type: UPDATE_PRODUCT_FAIL,
  payload: error,
});

export const updateProduct = product => dispatch => {
  dispatch(updateProductStart());
  fetch(`${BASE_URL}/products/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...product }),
  })
    .then(response => response.json())
    .then(data => {
      dispatch(updateProductSuccess(data));
    })
    .catch(error => {
      dispatch(updateProductFail(error));
    });
};
