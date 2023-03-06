package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.InvoiceDto;
import com.app.dto.InvoiceProductDto;
import com.app.dto.InvoiceReportDto;
import com.app.dto.ProductDto;
import com.app.dto.UserAuthenticationDto;
import com.app.entity.CompanyEntity;
import com.app.entity.InvoiceEntity;
import com.app.entity.InvoiceIdEntity;
import com.app.entity.ProductEntity;
import com.app.entity.UserEntity;
import com.app.service.IUsersService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins="http://localhost:3000")
public class Controller {

	@Autowired
	private IUsersService userService;
	
	@PostMapping("/signin")
	public UserEntity autUser(@RequestBody UserAuthenticationDto loginUser) {
		
		UserEntity user = userService.authenticateUser(loginUser.getUserName(), loginUser.getPassword());
		return user;
	}
	
	//==================================================================================//
		//*******************  USER CRUD OPERATIONS START  *********************************//
		@GetMapping
		public List<UserEntity> getAllUsers(){
			System.out.println("Inside getAllUsers controller method");
			return userService.getUsers();
		}
		
		@PostMapping("/addUser")
		public UserEntity addUser(@RequestBody UserEntity user) {
			System.out.println("Inside addUser controller Method");
			return userService.addUser(user);
		}
		
		@GetMapping("/getUser/{uId}")
		public UserEntity getUserDetails(@PathVariable Long uId) {
			System.out.println("Inside getUserDetails controller method");
			return userService.getUserData(uId);
		}
		
		@PutMapping("/updateUser")
		public UserEntity updateUserDetails(@RequestBody UserEntity user) {
			System.out.println("Inside updateUserDetails");
			return userService.updateUser(user);
		}
		
		@DeleteMapping("/deleteUser/{uId}")
		public String deleteUserDetails(@PathVariable Long uId) {
			System.out.println("Inside deleteUserDetails controller method ");
			
			return userService.deleteUser(uId);
		}
		//*******************  USER CURD OPERATION FINISH  *********************************//
		//==================================================================================//
	//-------------------------------------------------------------------------------------------------------
		
		
		//==================================================================================//
		//*******************  COMPANY CRUD OPERATIONS START  *********************************//
		
		@PostMapping("/addCompany")
		public CompanyEntity addCompany(@RequestBody CompanyEntity company) {
			System.out.println("Inside addCompany controller Method");
			return userService.addCompany(company);
		}
		
		@GetMapping("/getAllCompany")
		public List<CompanyEntity> getAllCompany(){
			System.out.println("Inside getAllCompany controller method");
			return userService.getCompanys();
		}
		
		@GetMapping("/getCompany/{cId}")
		public CompanyEntity getCompanyDetails(@PathVariable Long cId) {
			System.out.println("Inside getCompanyDetails controller method");
			return userService.getCompanyData(cId);
		}
		
		@PutMapping("/updateCompany")
		public CompanyEntity updateCompanyDetails(@RequestBody CompanyEntity company) {
			System.out.println("Inside updateCompanyDetails");
			return userService.updateCompany(company);
		}
		
		@DeleteMapping("/deleteCompany/{cId}")
		public String deleteCompanyDetails(@PathVariable Long cId) {
			System.out.println("Inside deleteCompanyDetails controller method ");
			return userService.deleteCompany(cId);
		}	
		//*******************  COMPANY CURD OPERATION FINISH  ******************************//
		//==================================================================================//
	//-------------------------------------------------------------------------------------------------------
		
		
		//==================================================================================//
		//*******************  PRODUCT CRUD OPERATIONS START  *********************************//
		@PostMapping("/addProduct")
		public ProductEntity addProduct(@RequestBody ProductDto product) {
			System.out.println("Inside addProduct controller Method");
			return userService.addProduct(product);
		}
		
		@GetMapping("/getAllProduct")
		public List<ProductEntity> getAllProduct(){
			System.out.println("Inside getAllProduct controller method");
			return userService.getProducts();
		}
		
		@GetMapping("/getProduct/{pId}")
		public ProductEntity getProductDetails(@PathVariable Long pId) {
			System.out.println("Inside getProductDetails controller method");
			return userService.getProductData(pId);
		}
		@PutMapping("/updateProduct/{pid}")
		public ProductEntity updateProductDetails(@RequestBody ProductDto product,@PathVariable long pid) {
			System.out.println("Inside updateProductDetails");
			return userService.updateProduct(product);
		}
		
		@DeleteMapping("/deleteProduct/{pId}")
		public String deleteProductDetails(@PathVariable Long pId) {
			System.out.println("Inside deleteProductDetails controller method ");
			return userService.deleteProduct(pId);
		}
		
		//*******************  PRODUCT CURD OPERATION FINISH  ******************************//
		//==================================================================================//
		
		
		//==================================================================================//
		//*******************  INVOICE Order Id CURD OPERATIONS START  *********************************//
		
		@PostMapping("/addInvoiceId")
		public InvoiceIdEntity addInvoiceId() {
			System.out.println("inside controller add invoice id method");
			
			return userService.addInvoiceId();
		}
		
		@DeleteMapping("/deleteInvoiceId/{oId}")
		public String deleteInvoiceId(@PathVariable Long oId) {
			
			return userService.deleteInvoiceId(oId);
		}
		
		//*******************  INVOICE Order Id CURD OPERATION FINISH  ******************************//
		//==================================================================================//
		
		
		//==================================================================================//
		//*******************  INVOICE CRUD OPERATIONS START  *********************************//
		
		@PostMapping("/addInvoice")
		public String addInvoice(@RequestBody InvoiceDto invoice ) {
			
			System.out.println(invoice);
			try {
				return userService.addInvoice(invoice);
			} catch (Exception e) {
				return "Invoice added unsuccessfull";
			}
		}
		
		@GetMapping("/getInvoiceProduct/{oId}")
		public List<ProductEntity> getInvoiceProduct(@PathVariable Long oId){
			
			return userService.getInvoiceProduct(oId);
		}
		
		@DeleteMapping("/deleteInvoiceProduct")
		public String deleteInvoiceProduct(@RequestBody InvoiceProductDto product) {
			
			return userService.deleteProductOfInvoice(product.getProductId(), product.getOrderId());
		}
		
		
		//*******************  INVOICE CURD OPERATION FINISH  ******************************//
		//==================================================================================//
		
		//==================================================================================//
		//*******************  RECEIPT OPERATIONS START  *********************************//
		
		@GetMapping("/getAllInvoiceReport")
		public List<InvoiceReportDto> getAllinvoiceReport() {
			
			return userService.getAllInvoiceReport();
		}
		
		@GetMapping("/getInvoiceReport/{oId}")
		public List<InvoiceEntity> getInvoiceReport(@PathVariable Long oId){
			
			return userService.getInvoiceReport(oId);
		}
		
		@GetMapping("/getGrandTotal/{oId}")
		public Double getGrandTotal(@PathVariable Long oId) {
			return userService.getGrandTotal(oId);
		}
		//*******************  RECEIPT OPERATION FINISH  ******************************//
		//==================================================================================//
}
