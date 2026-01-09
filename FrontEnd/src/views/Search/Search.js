import React, { useState, useEffect } from "react";
import SingleProduct from "../../components/Products/SingleProduct";
import LoginRegister from "../../components/LoginRegisterModal";
import Pagination from "components/Common/Pagination";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "redux/actions/cartAction";
import { searchProductsApi } from "api/categoryApi";
import { showToast, SUCCESS } from "components/Common/CustomToast";

function Search() {
  const location = useLocation();
  const dispatch = useDispatch();

  const allcodes = useSelector((state) => state.AllcodeReducer.data);

  const query = new URLSearchParams(location.search);
  const keyword = query.get("keyword") || "";

  const [allProducts, setAllProducts] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [listOptions, setListOptions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState("");

  const startIndex = (currentPage - 1) * parseInt(itemsPerPage);
  const endIndex = startIndex + parseInt(itemsPerPage);

  useEffect(() => {
    if (keyword) {
      fetchProducts();
    }
  }, [keyword]);

  useEffect(() => {
    if (allcodes && allcodes.length > 0) {
      let options = allcodes.filter(
        (item) => item.cdName === "COMMON" && item.cdType === "ROWPERPAGE"
      );
      options = options.sort((a, b) => a.lstodr - b.lstodr);

      setListOptions(options);
      setItemsPerPage(options[0]?.cdVal || 5);
    }
  }, [allcodes]);

  const fetchProducts = async () => {
    try {
      const params = {
        keyword,
      };

      const data = await searchProductsApi(params);
      setAllProducts(data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const addToBag = (product) => {
    dispatch(addToCart(product));
    showToast("Thêm vào giỏ hàng thành công", SUCCESS);
  };

  return (
    <div className="container product_section_container">
      <div className="row">
        <div className="col product_section clearfix">
          <div className="breadcrumbs d-flex flex-row align-items-center">
            <ul>
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li className="active">
                <a href="#">
                  <i className="fa fa-angle-right"></i>
                  Tìm kiếm: "{keyword}"
                </a>
              </li>
            </ul>
          </div>

          <div className="row">
            {allProducts && allProducts.length > 0
              ? allProducts.slice(startIndex, endIndex).map((item, index) => (
                  <div className="col-lg-3 col-sm-6" key={index}>
                    <SingleProduct
                      productItem={item}
                      addToBag={() => addToBag(item)}
                    />
                  </div>
                ))
              : "Không tìm thấy sản phẩm"}
          </div>

          {allProducts && allProducts.length > 0 && (
            <Pagination
              itemsPerPage={itemsPerPage}
              data={allProducts}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
