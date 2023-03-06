package com.app.dto;

public class InvoiceProductDto {
	private Long orderId;
	private Long productId;
	public InvoiceProductDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public InvoiceProductDto(Long orderId, Long productId) {
		super();
		this.orderId = orderId;
		this.productId = productId;
	}
	public Long getOrderId() {
		return orderId;
	}
	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	@Override
	public String toString() {
		return "InvoiceProductDto [orderId=" + orderId + ", productId=" + productId + "]";
	}
	
	
}
