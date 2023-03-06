package com.app.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.entity.InvoiceEntity;

@Repository
public class InvoiceProductRepository {
	@Autowired
	private EntityManager mgr;
	
	public List<InvoiceEntity> getInvoiceEntity(Long orderId) {
		System.out.println("inside getInvoiceEntity method of InvoiceProductRepository");
		String jpql = "select i from InvoiceEntity i where i.orderId.orderId=:oId";
		return mgr.createQuery(jpql, InvoiceEntity.class).setParameter("oId", orderId).getResultList();
	}
	
	public InvoiceEntity getInvoiceProduct(Long productId,Long orderID) {
		System.out.println("inside getInvoiceProduct method of InvoiceProductRepository");
		String jpql = "select i from InvoiceEntity i where i.productId.productId=:pId and i.orderId.orderId=:oId";
		return mgr.createQuery(jpql, InvoiceEntity.class).setParameter("pId", productId).setParameter("oId", orderID).getSingleResult();
	}
	
	public List<Long> getAllInvRep() {
		System.out.println("inside getAllInvRep method of InvoiceProductRepository");
		String jpql = "select distinct (i.orderId.orderId) from InvoiceEntity i";
		return mgr.createQuery(jpql,Long.class).getResultList();
	}
	
	public List<String> getInvoiceUser(Long orderId) {
		System.out.println("inside getInvoiceUser method of InvoiceProductRepository");
		String jpql = "select i.userId.firstName from InvoiceEntity i where i.orderId.orderId=:oId";
		return mgr.createQuery(jpql,String.class).setParameter("oId", orderId).getResultList();
	}
	
	public Double grandTotal(Long orderId) {
		System.out.println("inside grandTotal method of InvoiceProductRepository");
		String jpql = "select sum(i.totalCost) from InvoiceEntity i where i.orderId.orderId=:oId";
		return mgr.createQuery(jpql,Double.class).setParameter("oId", orderId).getSingleResult();
	}
}
