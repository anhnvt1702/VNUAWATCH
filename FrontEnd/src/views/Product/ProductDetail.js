import React, { useState, useEffect } from "react";
import Auth from "../../modules/Auth";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { productInfo } from "objectInfo/orderInfo";
import { getProductById } from "api/productApi";
import "font-awesome/css/font-awesome.min.css";
import { showToast, SUCCESS, ERROR } from "components/Common/CustomToast";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/actions/cartAction";
import { Button, Form } from "react-bootstrap";
import { addReview, getReviewByProductId } from "api/reviewApi";
import { reviewInfo, reviewAddInfo } from "objectInfo/reviewInfo";
import ConfirmationDialog from "utils/ConfirmDialog";
import { Rating } from "@mui/material";
import { getErrorByCode } from "redux/actions/errorMsgAction";

function ProductDetail() {
  const horizontalLineStyle = {
    height: "1px",
    backgroundColor: "#000",
    margin: "20px 0",
  };

  const { productId } = useParams();
  const [product, setProduct] = useState({ ...productInfo, quantity: 1 });
  const dispatch = useDispatch();
  const [reviews, setReviews] = useState([]);
  const [dataReview, setDataReview] = useState(reviewInfo);
  const [dataAddReview, setDataAddReview] = useState(reviewAddInfo);
  const thumbnail = product?.images?.find((img) => img.isThumbnail)?.imageUrl;
  const [selectedImage, setSelectedImage] = useState("");
  const [openConfirm, setopenConfirm] = useState(false);
  const [msgConfirm, setMsgConfirm] = useState("");
  const [typeConfirm, setTypeConfirm] = useState("");
  const resetReviewForm = () => {
    setDataAddReview(reviewAddInfo);
  };

  const averageRating =
    reviews && reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length
        ).toFixed(1)
      : 0;

  const [state, setState] = useState({
    color: "",
    size: "",
    pic: "",
    selectedSize: "",
    id: "",
    quantity: 1,
    modalShow: false,
    login: true,
  });

  useEffect(() => {
    getProductById(productId ? productId : 0)
      .then((data) => {
        setProduct({ ...data, quantity: 1 });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    getReviews();
  }, []);

  useEffect(() => {
    if (product?.images?.length > 0) {
      const thumb =
        product.images.find((img) => img.isThumbnail)?.imageUrl ||
        product.images[0].imageUrl;
      setSelectedImage(thumb);
    }
  }, [product.images]);

  const getReviews = () => {
    getReviewByProductId(productId ? productId : 0)
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onAddClicked = () => {
    setProduct({ ...product, quantity: product.quantity + 1 });
  };

  const onRemoveClicked = () => {
    if (product.quantity > 1) {
      setProduct({ ...product, quantity: product.quantity - 1 });
    }
  };

  const addToBag = () => {
    if (product.quantity <= 0) {
      showToast("Số lượng sản phẩm không hợp lệ", ERROR);
      return;
    }

    dispatch(addToCart(product));
    showToast("Thêm vào giỏ hàng thành công", SUCCESS);
  };

  const productInCart = () => {
    let available = false;
    return available;
  };

  const submitReview = async () => {
    try {
      openConfirmDialog("Bạn đồng ý gửi đánh giá", "SEND_REVIEW");
    } catch (error) {
      console.error(error);
    }
  };

  const openConfirmDialog = (msg, type) => {
    setopenConfirm(true);
    setMsgConfirm(msg);
    setTypeConfirm(type);
  };

  const handleAcceptConfirm = () => {
    setopenConfirm(false);
    if (typeConfirm === "SEND_REVIEW") {
      var dataReview_new = {
        ...dataAddReview,
        customer_Id: (Auth && Auth.getUserId()) || 0,
      };

      addReview(dataReview_new)
        .then(() => {
          showToast("Cảm ơn đã để lại đánh giá", SUCCESS);
          resetReviewForm();
          getReviews();
        })
        .catch((error) => {
          console.error("Error:", error);
          showToast("Có lỗi xảy ra khi đánh giá", ERROR);
        });
    } else if (typeConfirm === "EXIT_FORM") {
    }

    setTypeConfirm("");
  };

  function onInputChange(e, property) {
    setDataAddReview({
      ...dataAddReview,
      productId: isNaN(parseInt(productId)) ? 0 : parseInt(productId),
      [property]: e.target.value,
    });
  }

  return (
    <>
      <div className="container single_product_container">
        {product && (
          <div>
            <div className="row">
              <div className="col">
                <div className="breadcrumbs d-flex flex-row align-items-center">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        {product?.brand?.name}
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        {product?.category?.categoryName}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7">
                <div
                  className="single_product_image"
                  style={{ textAlign: "center" }}
                >
                  <div className="single_product_image text-center">
                    <img
                      src={selectedImage}
                      alt={product.title}
                      style={{
                        width: "420px",
                        height: "420px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                      }}
                    />

                    {/* thumbnails */}
                    <div className="d-flex justify-content-center mt-3 gap-2">
                      {product.images?.map((img) => (
                        <img
                          key={img.id}
                          src={img.imageUrl}
                          alt=""
                          onClick={() => setSelectedImage(img.imageUrl)}
                          style={{
                            width: "70px",
                            height: "70px",
                            objectFit: "cover",
                            cursor: "pointer",
                            borderRadius: "6px",
                            border:
                              selectedImage === img.imageUrl
                                ? "2px solid #ff084e"
                                : "1px solid #ddd",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="product_details">
                  <div className="product_details_title">
                    <h2>{product.title}</h2>
                  </div>
                  <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                    <span>
                      <span className="fa fa-truck"></span>
                    </span>
                    <span>Miễn phí vận chuyển</span>
                  </div>
                  <div className="original_price">
                    {" "}
                    {(product.price + 30000).toLocaleString("vi-VN") + " VNĐ"}
                  </div>
                  <div className="product_price">
                    {product.price.toLocaleString("vi-VN") + " VNĐ"}
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    {reviews && reviews.length > 0 ? (
                      <>
                        <Rating
                          value={Number(averageRating)}
                          precision={0.5}
                          readOnly
                        />
                        <span style={{ fontSize: "14px", color: "#555" }}>
                          ({averageRating}/5 – {reviews.length} đánh giá)
                        </span>
                      </>
                    ) : (
                      <span style={{ fontStyle: "italic", color: "#999" }}>
                        Chưa có đánh giá nào
                      </span>
                    )}
                  </div>

                  <div className="product_color">
                    <span>Số lượng sản phẩm còn lại: </span>
                    <span className="product_price">
                      {`${product.stockQuantity}`}
                    </span>
                    <span> sản phẩm </span>
                  </div>
                  <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                    <span>Số lượng:</span>
                    <div className="quantity_selector">
                      <span
                        className={
                          product.quantity > 1 ? "minus" : "minus disabled"
                        }
                        onClick={onRemoveClicked}
                      >
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </span>
                      <span id="quantity_value">
                        {product && product.quantity}
                      </span>
                      <span className="plus" onClick={onAddClicked}>
                        <span
                          className="fa fa-plus"
                          onClick={onAddClicked}
                        ></span>
                      </span>
                    </div>
                    <div
                      className="red_button product-add_to_cart_button"
                      onClick={addToBag}
                    >
                      <a href="#">Thêm vào giỏ hàng</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="product-specification mt-5">
          <h4 className="mb-3">Thông số kỹ thuật</h4>

          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <td>Series</td>
                <td>{product.specification.series}</td>
              </tr>
              <tr>
                <td>Bộ máy</td>
                <td>{product.specification.movementType}</td>
              </tr>
              <tr>
                <td>Hiển thị</td>
                <td>{product.specification.displayType}</td>
              </tr>
              <tr>
                <td>Chống nước</td>
                <td>{product.specification.waterResistance}</td>
              </tr>
              <tr>
                <td>Đường kính mặt</td>
                <td>{product.specification.caseSizeMm} mm</td>
              </tr>
              <tr>
                <td>Độ dày</td>
                <td>{product.specification.caseThicknessMm} mm</td>
              </tr>
              <tr>
                <td>Hình dạng mặt</td>
                <td>{product.specification.caseShape}</td>
              </tr>
              <tr>
                <td>Màu vỏ</td>
                <td>{product.specification.caseColor}</td>
              </tr>
              <tr>
                <td>Chất liệu vỏ</td>
                <td>{product.specification.caseMaterial}</td>
              </tr>
              <tr>
                <td>Màu mặt số</td>
                <td>{product.specification.dialColor}</td>
              </tr>
              <tr>
                <td>Kiểu mặt số</td>
                <td>{product.specification.dialStyle}</td>
              </tr>
              <tr>
                <td>Kính</td>
                <td>{product.specification.glassMaterial}</td>
              </tr>
              <tr>
                <td>Dây</td>
                <td>{product.specification.strapMaterial}</td>
              </tr>
              <tr>
                <td>Phong cách</td>
                <td>{product.specification.style}</td>
              </tr>
              <tr>
                <td>Thiết kế</td>
                <td>{product.specification.design}</td>
              </tr>
              <tr>
                <td>Tiện ích</td>
                <td>{product.specification.utilities}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <label className="comment-box-label">ĐÁNH GIÁ SẢN PHẨM</label>

        <div className="row">
          <div
            className="col-12 border p-3"
            style={{ height: "250px", overflowY: "auto", borderRadius: "10px" }}
          >
            {reviews &&
              Array.isArray(reviews) &&
              reviews.map((rv, index) => (
                <div key={rv.reviewId}>
                  {index !== 0 && <hr className="my-3" />}

                  <div className="row">
                    {/* Avatar */}
                    <div className="col-1 text-center">
                      <img
                        src={rv.customer?.avatar}
                        alt="avatar"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    {/* Nội dung */}
                    <div className="col-11">
                      {/* Tên + thời gian */}
                      <div className="d-flex justify-content-between align-items-center">
                        <strong>{rv.customer?.fullName}</strong>
                        <small className="text-muted">
                          {new Date(rv.createdAt).toLocaleString("vi-VN")}
                        </small>
                      </div>

                      {/* Rating */}
                      <Rating
                        value={rv.rating}
                        precision={1}
                        readOnly
                        size="small"
                      />

                      {/* Nội dung đánh giá */}
                      <div className="mt-1">{rv.reviewContent}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {Auth.IsValidated() && (
            <div className="col-12 mt-3 p-0">
              <Rating
                name="simple-controlled"
                value={dataAddReview.rating}
                precision={1}
                onChange={(event, newValue) => {
                  setDataAddReview({ ...dataAddReview, rating: newValue });
                }}
              />
              <Form>
                <Form.Group controlId="exampleTextarea">
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Để lại bình luận của bạn ở đây"
                    value={dataAddReview.review_Content}
                    onChange={(e) => onInputChange(e, "review_Content")}
                  />
                </Form.Group>
              </Form>

              <Button
                variant="primary"
                style={{ float: "right" }}
                onClick={submitReview}
              >
                Gửi bình luận
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="container"></div>
      <ConfirmationDialog
        messageConfirm={msgConfirm}
        openConfirm={openConfirm}
        onConfirm={handleAcceptConfirm}
        onCancelConfirm={() => {
          setopenConfirm(false);
          setTypeConfirm("");
        }}
      ></ConfirmationDialog>
    </>
  );
}

export default ProductDetail;
