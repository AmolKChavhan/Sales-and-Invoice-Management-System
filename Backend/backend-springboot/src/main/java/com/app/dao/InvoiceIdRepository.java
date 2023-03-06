package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.InvoiceIdEntity;

public interface InvoiceIdRepository extends JpaRepository<InvoiceIdEntity, Long> {

}
