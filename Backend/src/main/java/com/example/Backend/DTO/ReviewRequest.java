package com.example.Backend.DTO;

public class ReviewRequest {

    private Long customer_Id;
    private Long productId;
    private Integer rating;
    private String review_Content;

    public Long getCustomer_Id() {
        return customer_Id;
    }

    public void setCustomer_Id(Long customer_Id) {
        this.customer_Id = customer_Id;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getReview_Content() {
        return review_Content;
    }

    public void setReview_Content(String review_Content) {
        this.review_Content = review_Content;
    }
}
