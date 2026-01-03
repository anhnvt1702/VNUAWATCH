

import API from "../../myAxios/API";

export const getBrands = () => dispatch => {
  dispatch({
    type: GET_BRANDS_BEGIN
  });
  return API({
    method: "GET",
    url: "/brands"
  })
    .then(res => {
      dispatch({
        type: GET_BRANDS_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: GET_BRANDS_FAIL,
        payload: { error }
      });
      return error;
    });
};

export const GET_BRANDS_BEGIN = "GET_BRANDS_BEGIN";
export const GET_BRANDS_SUCCESS = "GET_BRANDS_SUCCESS";
export const GET_BRANDS_FAIL = "GET_BRANDS_FAIL";
