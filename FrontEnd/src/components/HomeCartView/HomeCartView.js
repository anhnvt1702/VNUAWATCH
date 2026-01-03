import React from "react";
import { Modal } from "react-bootstrap";
import "./style.css";
import jumpTo from "../../modules/Navigation";
import { useDispatch } from "react-redux";
import { removeFromCart, changeCartItemQty } from "redux/actions/cartAction";
import { FaPlus, FaMinus } from "react-icons/fa";

function HomeCartView(props) {
  const { cartitems } = props;
  const dispatch = useDispatch();

  const totalPrice = cartitems?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const goToCheckout = () => {
    jumpTo("/trang-chu/check-out");
  };

  const removeCartItem = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <Modal {...props} className="right">
      <Modal.Header closeButton>
        <Modal.Title>Giỏ hàng của bạn</Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body-content">
        {Array.isArray(cartitems) &&
          cartitems.map((product) => {
            const thumbnail =
              product?.images?.find((img) => img.isThumbnail)?.imageUrl ||
              product?.images?.[0]?.imageUrl;

            return (
              <div key={product.productId} className="basket--item">
                {/* IMAGE */}
                <div className="basket--item--img">
                  <img src={thumbnail} alt={product.title} />
                </div>

                {/* DETAILS */}
                <div className="basket--item--details">
                  <div className="basket--item--title">
                    {product.title}
                  </div>

                  <div className="basket--item--price">
                    Giá:{" "}
                    <span>
                      {product.price.toLocaleString("vi-VN")} ₫
                    </span>
                  </div>

                  {/* QUANTITY */}
                  <div className="basket--item--quantity">
                    <button
                      className="qty-btn"
                      onClick={() =>
                        product.quantity === 1
                          ? dispatch(removeFromCart(product))
                          : dispatch(
                              changeCartItemQty(product.productId, -1)
                            )
                      }
                    >
                      <FaMinus size={14} />
                    </button>

                    <span className="qty-value">{product.quantity}</span>

                    <button
                      className="qty-btn"
                      onClick={() =>
                        dispatch(
                          changeCartItemQty(product.productId, +1)
                        )
                      }
                    >
                      <FaPlus size={14} />
                    </button>
                  </div>
                </div>

                {/* REMOVE */}
                <span
                  onClick={() => removeCartItem(product)}
                  style={{
                    marginLeft: "auto",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  ✕
                </span>
              </div>
            );
          })}

        {Array.isArray(cartitems) && cartitems.length > 0 && (
          <div className="total--price-container">
            <h3 style={{ textAlign: "center" }}>
              Tổng tiền:{" "}
              <span style={{ color: "#FE4C50" }}>
                {totalPrice.toLocaleString("vi-VN")} ₫
              </span>
            </h3>

            <button
              className="btn btn-wide log-btn"
              style={{ marginTop: 20 }}
              onClick={goToCheckout}
            >
              THANH TOÁN
            </button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default HomeCartView;
