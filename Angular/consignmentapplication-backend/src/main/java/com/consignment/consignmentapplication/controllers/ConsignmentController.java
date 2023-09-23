package com.consignment.consignmentapplication.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.consignment.consignmentapplication.dao.ConsignemntRepository;
import com.consignment.consignmentapplication.dao.Consignment;


@CrossOrigin(origins = "*",allowedHeaders = "*")
@PreAuthorize("hasRole('ROLE_USER')")
@RestController
public class ConsignmentController {

	@Autowired
	ConsignemntRepository repo;
	
	@GetMapping("/consigments")
	public List<Consignment> getAllConsignemtns(){
		return (List<Consignment>) repo.findAll();
	}
	
	@PostMapping("/consignemnt")
	public Consignment saveConsignment(@RequestBody Consignment consignemnt) {
		return repo.save(consignemnt);
	}
	
	@PutMapping("/consignment/{id}")
	public Consignment updateConsignemt(@PathVariable Integer id,@RequestBody Consignment consignment ) {
		
		Consignment exiting = repo.findById(id)
				.orElseThrow(()-> new RuntimeException("Consignemtn bot found "+ id));
	
		exiting.setConsignmentStatus(consignment.getConsignmentStatus()!=null?consignment.getConsignmentStatus():exiting.getConsignmentStatus());
		exiting.setConstanmecatogery(consignment.getConstanmecatogery()!=null?consignment.getConstanmecatogery():exiting.getConstanmecatogery());
		exiting.setDeleveryPartner(consignment.getDeleveryPartner()!=null?consignment.getDeleveryPartner():exiting.getDeleveryPartner());
	repo.save(exiting);
	return exiting;
	}
	
	@GetMapping("/consignment/{id}")
	public Consignment getConsignemtnById(@PathVariable Integer id) {

		return repo.findById(id)
				.orElseThrow(()-> new RuntimeException("Consignemtn bot found "+ id));
	}
	
	
	@DeleteMapping("/consignment/{id}")
	public String delteConsignemtn(@PathVariable Integer id) {
		repo.deleteById(id);
		return "Consignemnt Deleted "+ id;
	}
	
	
	
	
	
	
	
	
	
	
	
}
