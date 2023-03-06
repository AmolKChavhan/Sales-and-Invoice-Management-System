package com.app.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "invoice_order")
public class InvoiceIdEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long orderId;
	private LocalDate orderDate;
	public InvoiceIdEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public InvoiceIdEntity(Long orderId, LocalDate orderDate) {
		super();
		this.orderId = orderId;
		this.orderDate = orderDate;
	}
	public Long getOrderId() {
		return orderId;
	}
	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}
	public LocalDate getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}
	@Override
	public String toString() {
		return "InvoiceIdEntity [orderId=" + orderId + ", orderDate=" + orderDate + "]";
	}
	
	
}
