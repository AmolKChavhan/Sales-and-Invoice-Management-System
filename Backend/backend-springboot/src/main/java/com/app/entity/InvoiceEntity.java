package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "invoice_details")
public class InvoiceEntity{ 
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="sr_no", nullable=false)
	private Long srNo;
	@Column(name="total_item", nullable=false)
	private Integer totalItem;
	@Column(name="total_cost", nullable=false)
	private Double totalCost;
//	@Column(name="grand_total", nullable=false)
//	private Double grandTotal;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="user_id",nullable = false)
	private UserEntity userId;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="product_id",nullable = false)
	private ProductEntity productId;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="order_id",nullable = false)
	private InvoiceIdEntity orderId;
	public InvoiceEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public InvoiceEntity(Long srNo, Integer totalItem, Double totalCost, UserEntity userId, ProductEntity productId,
			InvoiceIdEntity orderId) {
		super();
		this.srNo = srNo;
		this.totalItem = totalItem;
		this.totalCost = totalCost;
		this.userId = userId;
		this.productId = productId;
		this.orderId = orderId;
	}
	
	
	public InvoiceEntity(Integer totalItem, Double totalCost, UserEntity userId, ProductEntity productId,
			InvoiceIdEntity orderId) {
		super();
		this.totalItem = totalItem;
		this.totalCost = totalCost;
		this.userId = userId;
		this.productId = productId;
		this.orderId = orderId;
	}
	public Long getSrNo() {
		return srNo;
	}
	public void setSrNo(Long srNo) {
		this.srNo = srNo;
	}
	public Integer getTotalItem() {
		return totalItem;
	}
	public void setTotalItem(Integer totalItem) {
		this.totalItem = totalItem;
	}
	public Double getTotalCost() {
		return totalCost;
	}
	public void setTotalCost(Double totalCost) {
		this.totalCost = totalCost;
	}
	public UserEntity getUserId() {
		return userId;
	}
	public void setUserId(UserEntity userId) {
		this.userId = userId;
	}
	public ProductEntity getProductId() {
		return productId;
	}
	public void setProductId(ProductEntity productId) {
		this.productId = productId;
	}
	public InvoiceIdEntity getOrderId() {
		return orderId;
	}
	public void setOrderId(InvoiceIdEntity orderId) {
		this.orderId = orderId;
	}
	@Override
	public String toString() {
		return "InvoiceEntity [srNo=" + srNo + ", totalItem=" + totalItem + ", totalCost=" + totalCost + ", userId="
				+ userId + ", productId=" + productId + ", orderId=" + orderId + "]";
	}
	
	
	
	
}
