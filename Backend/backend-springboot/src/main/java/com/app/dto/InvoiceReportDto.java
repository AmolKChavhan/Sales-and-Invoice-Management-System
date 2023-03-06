package com.app.dto;

import java.time.LocalDate;

public class InvoiceReportDto {

	private Long orderId;
	private LocalDate orderDate;
	private String firstName;
	public InvoiceReportDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public InvoiceReportDto(Long orderId, LocalDate orderDate, String firstName) {
		super();
		this.orderId = orderId;
		this.orderDate = orderDate;
		this.firstName = firstName;
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
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	@Override
	public String toString() {
		return "InvoiceReportDto [orderId=" + orderId + ", orderDate=" + orderDate + ", firstName=" + firstName + "]";
	}
	
	
}
