package com.example.Backend.Service.Impl;

import com.example.Backend.Entity.Brand;
import com.example.Backend.Repository.BrandRepository;
import com.example.Backend.Service.BrandService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BrandServiceImpl implements BrandService {

    private final BrandRepository brandRepository;

    public BrandServiceImpl(BrandRepository brandRepository) {
        this.brandRepository = brandRepository;
    }

    @Override
    public List<Brand> getAllBrands() {
        return brandRepository.findAll();
    }

    @Override
    public Optional<Brand> getBrandById(Long brandId) {
        return brandRepository.findById(brandId);
    }

    @Override
    public Brand createBrand(Brand brand) {
        if (brandRepository.existsByName(brand.getName())) {
            throw new RuntimeException("Brand đã tồn tại");
        }
        return brandRepository.save(brand);
    }

    @Override
    public Brand updateBrand(Long brandId, Brand brand) {
        Brand existingBrand = brandRepository.findById(brandId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy brand"));

        existingBrand.setName(brand.getName());
        existingBrand.setOrigin(brand.getOrigin());

        return brandRepository.save(existingBrand);
    }

    @Override
    public void deleteBrand(Long brandId) {
        if (!brandRepository.existsById(brandId)) {
            throw new RuntimeException("Không tìm thấy brand");
        }
        brandRepository.deleteById(brandId);
    }
}
