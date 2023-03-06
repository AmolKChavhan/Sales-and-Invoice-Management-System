package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.CompanyEntity;



public interface CompanyRepository extends JpaRepository<CompanyEntity, Long>  {
	
}
