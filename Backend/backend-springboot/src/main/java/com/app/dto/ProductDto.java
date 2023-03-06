package com.app.dto;

import java.time.LocalDate;

import com.app.entity.CategoryEnum;

public class ProductDto {

	private CategoryEnum category;
	private String productName;
	private LocalDate mfgDate;
	private LocalDate expDate;
	private Float costPerItem;
	private Integer totalStock;
	private Long companyId;
	public ProductDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ProductDto(CategoryEnum category, String productName, LocalDate mfgDate, LocalDate expDate,
			Float costPerItem, Integer totalStock, Long companyId) {
		super();
		this.category = category;
		this.productName = productName;
		this.mfgDate = mfgDate;
		this.expDate = expDate;
		this.costPerItem = costPerItem;
		this.totalStock = totalStock;
		this.companyId = companyId;
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
	public Long getCompanyId() {
		return companyId;
	}
	public void setCompanyId(Long companyId) {
		this.companyId = companyId;
	}
	@Override
	public String toString() {
		return "ProductDto [category=" + category + ", productName=" + productName + ", mfgDate=" + mfgDate
				+ ", expDate=" + expDate + ", costPerItem=" + costPerItem + ", totalStock=" + totalStock
				+ ", companyId=" + companyId + "]";
	}
	
	
	
	
}
