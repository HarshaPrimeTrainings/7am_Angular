package com.consignment.consignmentapplication.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsignemntRepository extends CrudRepository<Consignment, Integer>{
	
	

}
