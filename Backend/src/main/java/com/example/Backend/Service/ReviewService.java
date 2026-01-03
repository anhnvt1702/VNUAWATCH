package com.example.Backend.Service;

import com.example.Backend.DTO.ReviewRequest;
import com.example.Backend.Entity.Review;
import java.util.List;
import java.util.Optional;

public interface ReviewService {
    List<Review> findAll();
    Optional<Review> findById(Long id);
    Review save(Review review);
    void deleteById(Long id);
    List<Review> getReviewsByProductId(Long productId);
    Review createReview(ReviewRequest request);
}