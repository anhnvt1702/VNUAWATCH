package com.example.Backend.Repository;

import com.example.Backend.Entity.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {

    Optional<ProductImage> findFirstByProduct_ProductIdAndIsThumbnailTrue(Long productId);
}

