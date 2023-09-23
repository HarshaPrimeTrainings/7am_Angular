package com.consignment.consignmentapplication.dao;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Consignment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer consignmentId;
	private String constanmecatogery;
	private String deleveryPartner;
	private String consignmentStatus;
	
	
	public Integer getConsignmentId() {
		return consignmentId;
	}
	public void setConsignmentId(Integer consignmentId) {
		this.consignmentId = consignmentId;
	}
	public String getConstanmecatogery() {
		return constanmecatogery;
	}
	public void setConstanmecatogery(String constanmecatogery) {
		this.constanmecatogery = constanmecatogery;
	}
	public String getDeleveryPartner() {
		return deleveryPartner;
	}
	public void setDeleveryPartner(String deleveryPartner) {
		this.deleveryPartner = deleveryPartner;
	}
	public String getConsignmentStatus() {
		return consignmentStatus;
	}
	public void setConsignmentStatus(String consignmentStatus) {
		this.consignmentStatus = consignmentStatus;
	}
	
	
	
	
}
