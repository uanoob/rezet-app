import {
  GET_ALL_PRODUCTS_START,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
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

export const getAllProducts = () => (dispatch) => {
  dispatch(getAllProductsStart());
  fetch(`${BASE_URL}/products/`)
    .then(response => response.json())
    .then((data) => {
      if (data) {
        dispatch(getAllProductsSuccess(data));
      } else {
        dispatch(getAllProductsFail(data));
      }
    })
    .catch((error) => {
      dispatch(getAllProductsFail(error));
    });
};
