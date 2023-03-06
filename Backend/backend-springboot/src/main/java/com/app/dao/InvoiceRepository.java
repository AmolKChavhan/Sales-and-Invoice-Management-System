package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.InvoiceEntity;

public interface InvoiceRepository extends JpaRepository<InvoiceEntity, Long> {

}
