package com.example.Backend.Repository;

import com.example.Backend.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory_CategoryId(Long categoryId);
    List<Product> findByBrand_BrandId(Long brandId);
    Optional<Product> findByProductId(Long productId);
}