package com.javaguides.fullstackapplication.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.javaguides.fullstackapplication.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, String>{

    boolean existsByEmail(String email);
    
}
