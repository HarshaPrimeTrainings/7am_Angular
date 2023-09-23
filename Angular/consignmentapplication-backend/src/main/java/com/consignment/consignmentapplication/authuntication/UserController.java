package com.consignment.consignmentapplication.authuntication;
import java.util.List;

import javax.annotation.Generated;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;


@Controller
public class UserController {

	@Autowired
	UserRepository userepo;
	
	@GetMapping("/users")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<Users>> findAllusers(){
		return new ResponseEntity<List<Users>>((List<Users>) userepo.findAll(),HttpStatus.OK);
	}
	
	
}
