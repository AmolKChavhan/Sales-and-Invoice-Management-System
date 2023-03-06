package com.app.entity;

import javax.persistence.*;

@Entity
@Table(name = "users_details")
public class UserEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	
	@Column(name="first_name", nullable = false, length=50)
	private String firstName;
	
	@Column(name="last_name", nullable = false, length=50)
	private String lastName;
	
	@Enumerated(EnumType.STRING)
	private GenderEnum gender;
	
	@Column(nullable = false, length=255)
	private String address;
	
	@Column(name="contact_no", nullable = false,unique = true)
	private Long contactNo;
	
	@Column(name="email_id", nullable = false, length=30,unique = true)
	private String emailId;
	
	@Enumerated(EnumType.STRING)
	private RoleEnum role;
	
	@Column(name="user_name", nullable = false, length=55,unique = true)
	private String userName;
	
	@Column(nullable = false, length=12)
	private String password;

	public UserEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserEntity(Long userId, String firstName, String lastName, GenderEnum gender, String address, Long contactNo,
			String emailId, RoleEnum role, String userName, String password) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.address = address;
		this.contactNo = contactNo;
		this.emailId = emailId;
		this.role = role;
		this.userName = userName;
		this.password = password;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public GenderEnum getGender() {
		return gender;
	}

	public void setGender(GenderEnum gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getContactNo() {
		return contactNo;
	}

	public void setContactNo(Long contactNo) {
		this.contactNo = contactNo;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public RoleEnum getRole() {
		return role;
	}

	public void setRole(RoleEnum role) {
		this.role = role;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "UserEntity [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", gender="
				+ gender + ", address=" + address + ", contactNo=" + contactNo + ", emailId=" + emailId + ", role="
				+ role + ", userName=" + userName + "]";
	}

	

	
	
	
	
	
	
}
