package com.app.dto;

public class GetUserDto {
	private Long id;

	public GetUserDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public GetUserDto(Long id) {
		super();
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "GetUserDto [id=" + id + "]";
	}
	
}
