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

import { STATE_STATUSES } from '../../utils/stateStatuses';

const initialState = {
  items: [],
  status: STATE_STATUSES.INIT,
  exception: {
    message: null,
    errors: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_START:
      return processReducer(state);
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        status: STATE_STATUSES.READY,
      };
    case GET_ALL_PRODUCTS_FAIL:
      return errorReducer(state, action.payload);
    case ADD_PRODUCT_START:
      return processReducer(state);
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
        status: STATE_STATUSES.READY,
      };
    case ADD_PRODUCT_FAIL:
      return errorReducer(state, action.payload);
    case DELETE_PRODUCT_START:
      return processReducer(state);
    case DELETE_PRODUCT_SUCCESS:
      const products = state.items.filter(item => item.id !== action.meta.id);
      return {
        ...state,
        items: products,
        status: STATE_STATUSES.READY,
      };
    case DELETE_PRODUCT_FAIL:
      return errorReducer(state, action.payload);
    case UPDATE_PRODUCT_START:
      return processReducer(state);
    case UPDATE_PRODUCT_SUCCESS:
      const updatedProducts = state.items.map(item => item.id === action.payload.id ? action.payload : item);
      return {
        ...state,
        items: updatedProducts,
        status: STATE_STATUSES.READY,
      };
    case UPDATE_PRODUCT_FAIL:
      return errorReducer(state, action.payload);
    default:
      return state;
  }
};

const processReducer = state => ({
  ...state,
  status: STATE_STATUSES.PENDING,
  exception: { ...initialState.exception },
});

const errorReducer = (state = initialState, exception = {}) => ({
  ...state,
  status: STATE_STATUSES.ERROR,
  exception: {
    errors: { ...exception.response.data.errors },
    message: exception.response.data.message,
  },
});
