

import {
  GET_BRANDS_BEGIN,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAIL
} from "../actions/BrandAction";

const initialState = {
  loading: false,
  brands: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BRANDS_BEGIN:
      return {
        loading: true,
        error: null
      };
    case GET_BRANDS_SUCCESS:
      return {
        loading: false,
        BRANDs: action.payload.data.BRANDs
      };
    case GET_BRANDS_FAIL:
      return {
        loading: false,
        error: action.payload.error.response.data
      };
    default:
      return state;
  }
};
