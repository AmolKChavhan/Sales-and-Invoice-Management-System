package com.app.service;

import java.util.List;

import com.app.dto.InvoiceDto;
import com.app.dto.InvoiceReportDto;
import com.app.dto.ProductDto;
import com.app.entity.CompanyEntity;
import com.app.entity.InvoiceEntity;
import com.app.entity.InvoiceIdEntity;
import com.app.entity.ProductEntity;
import com.app.entity.UserEntity;

public interface IUsersService {
	
	UserEntity authenticateUser(String userName, String password);	

	//USER SERVICE METHOD STARTS
		List<UserEntity> getUsers();
		UserEntity addUser(UserEntity transientUser);
		UserEntity getUserData(Long uId);
		UserEntity updateUser(UserEntity user);
		String deleteUser(Long uId);
		//USER SERVICE METHOD ENDS
		
		
		//COMPANY SERVICE METHOD STARTS
		CompanyEntity addCompany(CompanyEntity transientComp);
		List<CompanyEntity> getCompanys();
		CompanyEntity getCompanyData(Long uId);
		CompanyEntity updateCompany(CompanyEntity company);
		String deleteCompany(Long uId);
		//COMPANY SERVICE METHOD ENDS
		
		
		//PRODUCT SERVICE METHOD STARTS
		ProductEntity addProduct(ProductDto transientProduct);
		List<ProductEntity> getProducts();
		ProductEntity getProductData(Long pId);
		ProductEntity updateProduct(ProductDto company);
		String deleteProduct(Long uId);
		//PRODUCT SERVICE METHOD ENDS
		
		
		//INVOICE ID SERVICE METHOD STARTS
		InvoiceIdEntity addInvoiceId();//generate orderID
		String deleteInvoiceId(Long oId);
		//INVOICE ID SERVICE METHOD ENDSS
		
		
		
		//INVOICE SERVICE METHOD STARTS
		String addInvoice(InvoiceDto invoice);//add products for particular orderId
		List<ProductEntity> getInvoiceProduct(Long orderId);//get all products for orderId as input to method
		String deleteInvoice(Long srNo);//delete all invoice row for particular orderId
		String deleteProductOfInvoice(Long productId,Long orderId);//delete specific product from invoice table
		List<InvoiceReportDto> getAllInvoiceReport();
		//INVOICE SERVICE METHOD ENDS
		
		//INVOICE REPORT METHOD STARTS
		List<InvoiceEntity> getInvoiceReport(Long oId);
		Double getGrandTotal(Long oId);
		//INVOICE REPORT MMETHOD ENDS
}
