import {
  GET_ALL_PRODUCTS_START,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
} from '../actions/types';

const initialState = {
  products: [],
  loading: false,
  loaded: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        loaded: true,
      };
    case GET_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        products: [],
        loading: false,
        loaded: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
