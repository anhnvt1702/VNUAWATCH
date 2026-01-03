package com.example.Backend.Service;
import com.example.Backend.Entity.Brand;

import java.util.List;
import java.util.Optional;

public interface BrandService {

    List<Brand> getAllBrands();

    Optional<Brand> getBrandById(Long brandId);

    Brand createBrand(Brand brand);

    Brand updateBrand(Long brandId, Brand brand);

    void deleteBrand(Long brandId);
}
