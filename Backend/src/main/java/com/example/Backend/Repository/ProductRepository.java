package com.example.Backend.Repository;

import com.example.Backend.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory_CategoryId(Long categoryId);
    List<Product> findByBrand_BrandId(Long brandId);
    Optional<Product> findByProductId(Long productId);
    @Query("""
        SELECT p FROM Product p
        WHERE (:keyword IS NULL OR LOWER(p.title) LIKE LOWER(CONCAT('%', :keyword, '%')))
          AND (:brandId IS NULL OR p.brand.brandId = :brandId)
          AND (:categoryId IS NULL OR p.category.categoryId = :categoryId)
    """)
    List<Product> searchProducts(
            @Param("keyword") String keyword,
            @Param("brandId") Long brandId,
            @Param("categoryId") Long categoryId
    );
}