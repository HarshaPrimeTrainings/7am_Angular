package com.consignment.consignmentapplication.authuntication;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Roles, Integer>{

	Optional<Roles> findByRole(Role role);

}
