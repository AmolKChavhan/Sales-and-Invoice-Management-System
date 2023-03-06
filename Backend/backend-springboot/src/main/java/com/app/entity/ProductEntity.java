package com.app.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "product_details")
public class ProductEntity{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long productId;
	
	@Enumerated(EnumType.STRING)
	private CategoryEnum category;
	
	@Column(name="product_name", nullable=false,length=40)
	private String productName;
	
	@Column(name="mfg_date")
	private LocalDate mfgDate;
	
	@Column(name="exp_date")
	private LocalDate expDate;
	
	@Column(name="cost_per_item", nullable=false)
	private Float costPerItem;
	
	@Column(name="total_stock", nullable=false)
	private Integer totalStock;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="company_id",nullable = false)
	private CompanyEntity companyId;

	public ProductEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductEntity(Long productId, CategoryEnum category, String productName, LocalDate mfgDate,
			LocalDate expDate, Float costPerItem, Integer totalStock, CompanyEntity companyId) {
		super();
		this.productId = productId;
		this.category = category;
		this.productName = productName;
		this.mfgDate = mfgDate;
		this.expDate = expDate;
		this.costPerItem = costPerItem;
		this.totalStock = totalStock;
		this.companyId = companyId;
	}
	

	public ProductEntity(CategoryEnum category, String productName, LocalDate mfgDate, LocalDate expDate,
			Float costPerItem, Integer totalStock, CompanyEntity companyId) {
		super();
		this.category = category;
		this.productName = productName;
		this.mfgDate = mfgDate;
		this.expDate = expDate;
		this.costPerItem = costPerItem;
		this.totalStock = totalStock;
		this.companyId = companyId;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public CategoryEnum getCategory() {
		return category;
	}

	public void setCategory(CategoryEnum category) {
		this.category = category;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public LocalDate getMfgDate() {
		return mfgDate;
	}

	public void setMfgDate(LocalDate mfgDate) {
		this.mfgDate = mfgDate;
	}

	public LocalDate getExpDate() {
		return expDate;
	}

	public void setExpDate(LocalDate expDate) {
		this.expDate = expDate;
	}

	public Float getCostPerItem() {
		return costPerItem;
	}

	public void setCostPerItem(Float costPerItem) {
		this.costPerItem = costPerItem;
	}

	public Integer getTotalStock() {
		return totalStock;
	}

	public void setTotalStock(Integer totalStock) {
		this.totalStock = totalStock;
	}

	public CompanyEntity getCompanyId() {
		return companyId;
	}

	public void setCompanyId(CompanyEntity companyId) {
		this.companyId = companyId;
	}

	@Override
	public String toString() {
		return "ProductEntity [productId=" + productId + ", category=" + category + ", productName=" + productName
				+ ", mfgDate=" + mfgDate + ", expDate=" + expDate + ", costPerItem=" + costPerItem + ", totalStock="
				+ totalStock + ", companyId=" + companyId + "]";
	}

	
}
