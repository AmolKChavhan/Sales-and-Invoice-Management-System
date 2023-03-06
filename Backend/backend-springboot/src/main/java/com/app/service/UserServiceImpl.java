package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.CompanyRepository;
import com.app.dao.InvoiceIdRepository;
import com.app.dao.InvoiceProductRepository;
import com.app.dao.InvoiceRepository;
import com.app.dao.ProductRepository;
import com.app.dao.UserRepository;
import com.app.dto.InvoiceDto;
import com.app.dto.InvoiceReportDto;
import com.app.dto.ProductDto;
import com.app.entity.CompanyEntity;
import com.app.entity.InvoiceEntity;
import com.app.entity.InvoiceIdEntity;
import com.app.entity.ProductEntity;
import com.app.entity.UserEntity;


@Service
@Transactional
public class UserServiceImpl implements IUsersService {
	
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private CompanyRepository compRepo;
	@Autowired
	private ProductRepository proRepo;
	@Autowired
	private InvoiceRepository invRepo;
	@Autowired
	private InvoiceIdRepository invIdRepo;
	@Autowired
	private InvoiceProductRepository invProRepo;
	
	@Override
	public UserEntity authenticateUser(String userName, String password) {
		Optional<UserEntity> optional = userRepo.findByUserNameAndPassword(userName, password);
		System.out.println(optional);
		
		return optional.orElseThrow(()-> new RuntimeException("User not found"));
	}
	
	//==================================================================================//
			//*******************  USER SERVICE START  *********************************//
		@Override
		public List<UserEntity> getUsers() {
			return userRepo.findAll();
		}

		@Override
		public UserEntity addUser(UserEntity transientUser) {
			return userRepo.save(transientUser);
		}

		@Override
		public UserEntity getUserData(Long uId) {
			return userRepo.findById(uId).orElseThrow(()->new ResourceNotFoundException("*****  User Not Found !!!"));
		}

		@Override
		public UserEntity updateUser(UserEntity user) {
			UserEntity detachedUser=userRepo.findById(user.getUserId()).orElseThrow(()->new ResourceNotFoundException("*****  User Not Found !!!"));
			return userRepo.save(user);
		}

		@Override
		public String deleteUser(Long uId) {
			String mesg = "Deleting User details failed !!!!!";
			if(userRepo.existsById(uId)) {
				userRepo.deleteById(uId);
				mesg="User deleted Successfully";
			}
			return mesg;
		}
		//*******************  USER SERVICE ENDS  ******************************************//
		//==================================================================================//
		
		
		//==================================================================================//
		//*******************  COMPANY SERVICE START  **************************************//
		
		@Override
		public CompanyEntity addCompany(CompanyEntity transientComp) {
			return compRepo.save(transientComp);
		}

		@Override
		public CompanyEntity getCompanyData(Long uId) {
			return compRepo.findById(uId).orElseThrow(()->new ResourceNotFoundException("*****  Company Not Found !!!"));
		}

		@Override
		public List<CompanyEntity> getCompanys() {
			return compRepo.findAll();
		}

		@Override
		public CompanyEntity updateCompany(CompanyEntity company) {
			CompanyEntity detachedCompany=compRepo.findById(company.getCompanyId()).orElseThrow(()->new ResourceNotFoundException("*****  Company Not Found !!!"));
			return compRepo.save(company);
		}

		@Override
		public String deleteCompany(Long uId) {
			String mesg = "Deleting Company details failed !!!!!";
			if(compRepo.existsById(uId)) {
				compRepo.deleteById(uId);
				mesg="Company deleted Successfully";
			}
			return mesg;
		}	
		//*******************  COMPANY SERVICE ENDS  **************************************//
		//==================================================================================//
		//==================================================================================//
		//*******************  PRODUCT SERVICE START  **************************************//

		@Override
		public ProductEntity addProduct(ProductDto product) {
			CompanyEntity companyDetail = compRepo.findById(product.getCompanyId()).
					orElseThrow(()->new ResourceNotFoundException("*****  Company Not Found !!!"));
		
			ProductEntity transientProduct=new ProductEntity(
						product.getCategory(),product.getProductName(),product.getMfgDate(),product.getExpDate(),
						product.getCostPerItem(),product.getTotalStock(),companyDetail);
			
			return proRepo.save(transientProduct);
		}

		@Override
		public List<ProductEntity> getProducts() {
			return proRepo.findAll();
		}

		@Override
		public ProductEntity getProductData(Long pId) {
			
			return proRepo.findById(pId).orElseThrow(()->new ResourceNotFoundException("***** Product Not Found !!!"));
		}

		@Override
		public ProductEntity updateProduct(ProductDto company) {
			CompanyEntity companyDetail= compRepo.findById(company.getCompanyId()).
					orElseThrow(()->new ResourceNotFoundException("***** Company Not Found !!!"));
			
			return null;
		}

		@Override
		public String deleteProduct(Long uId) {
			String mesg = "Deleting Company details failed !!!!!";
			if(proRepo.existsById(uId)) {
				proRepo.deleteById(uId);
				mesg="Company deleted Successfully";
			}
			return mesg;
		}
		//*******************  PRODUCT SERVICE ENDS  **************************************//
		//==================================================================================//
		
		//==================================================================================//
		//*******************  INVOICE ID SERVICE START  **************************************//
		
		@Override
		public InvoiceIdEntity addInvoiceId() {
			System.out.println("inside addINvoiceID service method before save");
			InvoiceIdEntity transientEnvoiceIdEntity = new InvoiceIdEntity();
			transientEnvoiceIdEntity.setOrderDate(LocalDate.now());
			return invIdRepo.save(transientEnvoiceIdEntity);
		}
		
		@Override
		public String deleteInvoiceId(Long oId) {
			List<InvoiceEntity> list = invProRepo.getInvoiceEntity(oId);
			for(int i=0;i<list.size();i++) {
				System.out.println(list.get(i).getSrNo());
				deleteInvoice(list.get(i).getSrNo());
			}
			invIdRepo.deleteById(oId);
			return "deleting orderid successful";
		}

		//*******************  INVOICE ID SERVICE ENDS  **************************************//
		//==================================================================================//
		
		
		
		//==================================================================================//
		//*******************  INVOICE SERVICE START  **************************************//
		
		
		@Override
		public String addInvoice(InvoiceDto invoice) {
			
				System.out.println("inside invoice service method");
				ProductEntity product = proRepo.findById(invoice.getProductId()).
						orElseThrow(()->new ResourceNotFoundException("*****Product Not Found !!!"));
				UserEntity user = userRepo.findById(invoice.getUserId()).
						orElseThrow(()->new ResourceNotFoundException("*****User Not Found !!!"));
				InvoiceIdEntity invoiceId = invIdRepo.findById(invoice.getOrderId()).
						orElseThrow(()->new ResourceNotFoundException("*****OrderId Not Found !!!"));
				Double totalCost = (double) (product.getCostPerItem()*invoice.getTotalItem());
				InvoiceEntity generateInvoice = 
						new InvoiceEntity(invoice.getTotalItem(),totalCost, user, product, invoiceId);
				System.out.println(generateInvoice);
				invRepo.save(generateInvoice);
				return "Invoice added successfully  in service impl";
			
		}


		@Override
		public List<ProductEntity> getInvoiceProduct(Long orderId) {
			List<ProductEntity> invoiceProductList = new ArrayList<>();
			List<InvoiceEntity> list = invProRepo.getInvoiceEntity(orderId);
			System.out.println("List of product id "+list);
			for(int i=0;i<list.size();i++) {
				System.out.println(list.get(i).getProductId());
				invoiceProductList.add(list.get(i).getProductId());
			}
			System.out.println("Below arraylist data");
			for(ProductEntity p:invoiceProductList) {
				System.out.println(p);
			}
			return invoiceProductList;
		}

		@Override
		public String deleteInvoice(Long srNo) {
			invRepo.deleteById(srNo);
			return "Deleted Successfull";
		}

		@Override
		public String deleteProductOfInvoice(Long productId,Long orderId) {
			InvoiceEntity product = invProRepo.getInvoiceProduct(productId,orderId);
			System.out.println("product to be deleted : "+product);
			deleteInvoice(product.getSrNo());
			return "testing successfull";
		}

		@Override
		public List<InvoiceReportDto> getAllInvoiceReport() {
			List<Long> product = invProRepo.getAllInvRep();
			List<InvoiceReportDto> invoiceList = new ArrayList<>();
			for(int i=0;i<product.size();i++) {
				
				System.out.println(product.get(i));
				System.out.println("ORDER ID AND DATE =>"+ invIdRepo.findById(product.get(i)));
				List<String> invoiceUser =  invProRepo.getInvoiceUser(product.get(i));
				System.out.println("NAME OF USER=> "+invoiceUser.get(0));
				
				Long orderId = product.get(i);
				LocalDate orderDate = invIdRepo.findById(product.get(i)).get().getOrderDate();
				String userName = invoiceUser.get(0);
				InvoiceReportDto invoiceReport = new InvoiceReportDto(orderId, orderDate, userName);
				invoiceList.add(invoiceReport);
				System.out.println("********** Printing Details ***********");
				System.out.println("Order Id   : "+orderId);
				System.out.println("Order Date : "+orderDate);
				System.out.println("User Name  : "+userName);
				System.out.println("Invoice Rep: "+invoiceReport);
				System.out.println("********** Printing Details ***********");
			}
			System.out.println(invoiceList);
			return invoiceList;
		}
		
		//*******************  INVOICE SERVICE ENDS  **************************************//
		//==================================================================================//
		
		//==================================================================================//
		//*******************  INVOICE REPORT START  **************************************//
		
		@Override
		public List<InvoiceEntity> getInvoiceReport(Long oId) {
			
			return invProRepo.getInvoiceEntity(oId);
		}

		@Override
		public Double getGrandTotal(Long oId) {
			
			return invProRepo.grandTotal(oId);
		}
		

		//==================================================================================//
		//*******************  INVOICE REPORT ENDS  **************************************//
}
