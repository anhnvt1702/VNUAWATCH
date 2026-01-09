// categoryApi.js
import API from "../myAxios/API";

export function getProductsByCategoryApi(params) {
  return API({
    method: "GET",
    url: `/product/get-by-category?${new URLSearchParams(params)}`,
  }).then((res) => {
    return res.data;
  }).catch((error) => {
    return error;
  });
};


export function searchProductsApi(params) {
  return API({
    method: "GET",
    url: `/product/search?${new URLSearchParams(params)}`,
  }).then(res => res.data)
    .catch(error => error);
}


