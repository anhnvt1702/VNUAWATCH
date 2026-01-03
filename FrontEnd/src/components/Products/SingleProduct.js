import React from "react";
import jumpTo from "../../modules/Navigation";

function SingleProduct({ productItem, addToBag }) {
  if (!productItem) return null;

  const thumbnail =
    productItem?.images?.find((img) => img.isThumbnail)?.imageUrl ||
    productItem?.images?.[0]?.imageUrl ||
    "";

  return (
    <div className="product-item men">
      <div
        className="product discount product_filter"
        onClick={() =>
          jumpTo(`/trang-chu/san-pham/${productItem.productId}`)
        }
      >
        {/* IMAGE */}
        <div className="product_image">
          <img
            src={thumbnail}
            alt={productItem.title}
            className="img-fluid"
            style={{
              height: "220px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* FAVORITE */}
        <div className="favorite favorite_left">
          <i className="far fa-heart"></i>
        </div>

        {/* INFO */}
        <div className="product_info">
          <h6 className="product_name">
            <div>{productItem.title}</div>
          </h6>

          {/* BRAND */}
          <div style={{ fontSize: "12px", color: "#888" }}>
            {productItem.brand?.name}
          </div>

          {/* PRICE */}
          <div className="product_price">
            {productItem.price?.toLocaleString("vi-VN")} ₫
            <span>
              {" "}
              {(productItem.price + 30000).toLocaleString("vi-VN")} ₫
            </span>
          </div>
        </div>
      </div>

      {/* ADD TO CART */}
      <div
        className="red_button add_to_cart_button"
        onClick={() => addToBag(productItem.productId)}
      >
        <div style={{ color: "#ffffff" }}>Thêm vào giỏ hàng</div>
      </div>
    </div>
  );
}

export default SingleProduct;
