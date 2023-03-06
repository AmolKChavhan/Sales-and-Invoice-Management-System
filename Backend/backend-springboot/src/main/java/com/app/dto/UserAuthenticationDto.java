package com.app.dto;

public class UserAuthenticationDto {
	
	private String userName;
	private String password;
	
	public UserAuthenticationDto(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
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
		return "UserAuthenticationDto [userName=" + userName + "]";
	}
	
}
