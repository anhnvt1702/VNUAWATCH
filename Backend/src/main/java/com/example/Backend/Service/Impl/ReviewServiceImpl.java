package com.example.Backend.Service.Impl;

import com.example.Backend.DTO.ReviewRequest;
import com.example.Backend.Entity.Product;
import com.example.Backend.Entity.Review;
import com.example.Backend.Entity.User;
import com.example.Backend.Repository.ProductRepository;
import com.example.Backend.Repository.ReviewRepository;
import com.example.Backend.Repository.UserRepository;
import com.example.Backend.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private final ReviewRepository reviewRepository;
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @Override
    public List<Review> findAll() {
        return reviewRepository.findAll();
    }

    @Override
    public Optional<Review> findById(Long id) {
        return reviewRepository.findById(id);
    }

    @Override
    public Review save(Review review) {
        return reviewRepository.save(review);
    }

    @Override
    public void deleteById(Long id) {
        reviewRepository.deleteById(id);
    }

    @Override
    public List<Review> getReviewsByProductId(Long productId) {
        return reviewRepository.findByProduct_ProductId(productId);
    }

    @Override
    public Review createReview(ReviewRequest request) {

        Review review = new Review();

        review.setProduct(
                productRepository.getReferenceById(request.getProductId())
        );

        review.setCustomer(
                userRepository.getReferenceById(request.getCustomer_Id())
        );

        review.setRating(request.getRating());
        review.setReviewContent(request.getReview_Content());
        review.setCreatedAt(LocalDateTime.now());

        return reviewRepository.save(review);
    }
}
