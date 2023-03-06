package com.app.dto;

public class InvoiceDto {
	private Long orderId;
	private Integer totalItem;
	private Long userId;
	private Long productId;
	public InvoiceDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public InvoiceDto(Long orderId, Integer totalItem, Long userId, Long productId) {
		super();
		this.orderId = orderId;
		this.totalItem = totalItem;
		
		this.userId = userId;
		this.productId = productId;
	}
	public Long getOrderId() {
		return orderId;
	}
	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}
	public Integer getTotalItem() {
		return totalItem;
	}
	public void setTotalItem(Integer totalItem) {
		this.totalItem = totalItem;
	}
	
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	@Override
	public String toString() {
		return "InvoiceDto [orderId=" + orderId + ", totalItem=" + totalItem + ", userId="
				+ userId + ", productId=" + productId + "]";
	}
	
	
	
}
