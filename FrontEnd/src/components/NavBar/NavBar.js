import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeCartView from "components/HomeCartView/HomeCartView";
import MobileMenu from "../MobileMenu";
import device from "../../modules/mediaQuery";
import MediaQuery from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Auth from "modules/Auth";

const NavBar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [activeclass, setActiveClass] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [keyword, setKeyword] = useState("");
  const categories = useSelector((state) => state.gShare.categories);

  const totalCartItems = useSelector((state) => state.cart.totalItems);

  const showHideModal = () => {
    setModalShow(!modalShow);
  };

  const handleMenuClicked = () => {
    setActiveClass(!activeclass);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    window.location.href = `/trang-chu/tim-kiem?keyword=${encodeURIComponent(
      keyword
    )}`;
  };

  return (
    <div className="main_nav_container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-right">
            <div className="logo_container">
              <Link to="/">
                VNUA<span> WATCH</span>
              </Link>
            </div>
            <nav className="navbar">
              <ul className="navbar_menu">
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>

                <li className="mega-drop-down">
                  <a href="#">
                    Danh mục <i className="fa fa-angle-down"></i>
                  </a>

                  <div className="mega-menu">
                    <div className="mega-menu-wrap">
                      <div className="mega-menu-content">
                        <h5></h5>
                        <ul className="stander">
                          {categories &&
                            categories.map((cate, index) => {
                              return (
                                <li key={index}>
                                  <a
                                    href={`/trang-chu/danh-muc/${cate.categoryId}`}
                                  >
                                    {cate.categoryName}
                                  </a>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {Auth && Auth.IsValidated() && (
                  <li>
                    <Link to="/trang-chu/lich-su-mua-hang">
                      Lịch sử đặt hàng
                    </Link>
                  </li>
                )}

                {/* <li>
                  <a href="contact.html">Liên hệ</a>
                </li> */}
              </ul>
              <form className="search_container" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Tìm kiếm đồng hồ..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="search_input"
                />
                <button type="submit" className="search_button">
                  <i className="fa fa-search"></i>
                </button>
              </form>

              <ul className="navbar_user">
                {/* <li>
                  <a href="#">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>
                </li> */}
                <li>
                  <a
                    href={`/trang-chu/tai-khoan/${
                      (Auth.getUserDetails() &&
                        Auth.getUserDetails().user_Id) ??
                      0
                    }`}
                  >
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="checkout">
                  <button
                    className="transparent-button"
                    onClick={() => showHideModal()}
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />

                    <span id="checkout_items" className="checkout_items">
                      {totalCartItems}
                    </span>
                  </button>
                </li>
              </ul>
              <div
                className="hamburger_container"
                onClick={() => handleMenuClicked()}
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <MediaQuery query={device.max.tabletL}>
        <MobileMenu
          activeClass={activeclass}
          onClose={() => handleMenuClicked()}
        />
      </MediaQuery>
      {modalShow ? (
        <HomeCartView
          cartitems={cartItems}
          show={modalShow}
          onHide={() => showHideModal()}
        />
      ) : null}
    </div>
  );
};

export default NavBar;
