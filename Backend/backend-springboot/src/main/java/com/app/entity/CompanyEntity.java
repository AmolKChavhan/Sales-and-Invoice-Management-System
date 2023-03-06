package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "company_details")
public class CompanyEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long companyId;
	
	@Column(name="company_name", nullable=false,length=20,unique=true)
	private String companyName;
	
	@Column(name="company_details", nullable=false,length=200)
	private String companyDetails;
	
	@Column(nullable = false,unique=true,length=50)
	private String email;
	
	@Column(name="company_contact",nullable = false,unique=true)
	private Long companyContact;
	
	@Column(nullable=false,length=50)
	private String address;

	public CompanyEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CompanyEntity(Long companyId, String companyName, String companyDetails, String email, Long companyContact,
			String address) {
		super();
		this.companyId = companyId;
		this.companyName = companyName;
		this.companyDetails = companyDetails;
		this.email = email;
		this.companyContact = companyContact;
		this.address = address;
	}

	public Long getCompanyId() {
		return companyId;
	}

	public void setCompanyId(Long companyId) {
		this.companyId = companyId;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCompanyDetails() {
		return companyDetails;
	}

	public void setCompanyDetails(String companyDetails) {
		this.companyDetails = companyDetails;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getCompanyContact() {
		return companyContact;
	}

	public void setCompanyContact(Long companyContact) {
		this.companyContact = companyContact;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "CompanyEntity [companyId=" + companyId + ", companyName=" + companyName + ", companyDetails="
				+ companyDetails + ", email=" + email + ", companyContact=" + companyContact + ", address=" + address
				+ "]";
	}

	
	
}
