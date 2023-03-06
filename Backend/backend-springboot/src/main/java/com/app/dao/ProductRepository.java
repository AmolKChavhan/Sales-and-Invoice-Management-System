package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {

}
