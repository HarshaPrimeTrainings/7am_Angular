package com.consignment.consignmentapplication.authuntication;




import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class AuthenticationController {

	@Autowired
	UserRepository userRepo;
	
	@Autowired
	RoleRepository rolerepo;
	
	@Autowired
	PasswordEncoder pwdencoder;
	
	@Autowired
	AuthenticationManager userAuthenticationManager;
	
	@Autowired
	JwtUtils jwtutils;
	
	@PostMapping("/signin")
	public ResponseEntity<Users> signin(@RequestBody UserDto user){
		user.setPassword(pwdencoder.encode(user.getPassword()));
		Set<Roles> roleSet = new HashSet<>();
		if(user.getRoles()!=null) {
			user.getRoles().forEach(role->{
				switch (role) {
				case "admin":
					Roles adminrole =  rolerepo.findByRole(Role.ROLE_ADMIN).orElseThrow(()-> new RuntimeException(role + " Role Not found"));
					roleSet.add(adminrole);
					break;
				case "user":
					Roles userrole =  rolerepo.findByRole(Role.ROLE_USER).orElseThrow(()-> new RuntimeException(role+" Role Not found"));
					roleSet.add(userrole);
					break;
				default:
					Roles defoultrrole =  rolerepo.findByRole(Role.ROLE_USER).orElseThrow(()-> new RuntimeException(role+" Role Not found"));
					roleSet.add(defoultrrole);
					break;
				}
			});
		}
		Users siginUser = new Users();
		siginUser.setUserId(user.getUserId());
		siginUser.setUsername(user.getUsername());
		siginUser.setPassword(user.getPassword());
		siginUser.setRoles(roleSet);
		return new ResponseEntity<Users>(userRepo.save(siginUser),HttpStatus.CREATED);
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<JwtResponse> login(@RequestBody LoginDto loginUser){
		Authentication authentication =  userAuthenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUser.getUsername(), loginUser.getPassword()));
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String jwt = jwtutils.generateJwtToken(authentication);
		
		UserDeatailsImpl useredetailsimpl = (UserDeatailsImpl)authentication.getPrincipal();
		List<String> roles =    useredetailsimpl.getAuthorities().stream().map(item->item.getAuthority()).collect(Collectors.toList());
		
		JwtResponse jwtResp =  new JwtResponse(jwt, useredetailsimpl.getId(), useredetailsimpl.getUsername(), roles);
		
		return new ResponseEntity<JwtResponse>(jwtResp,HttpStatus.OK);
		
		
	} 
}
