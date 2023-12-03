package com.javaguides.fullstackapplication.services;

import java.util.List;

import com.javaguides.fullstackapplication.entities.Employee;
import com.javaguides.fullstackapplication.models.Request.EmployeeRequest;
import com.javaguides.fullstackapplication.models.Response.EmployeeResponse;

public interface EmployeeService {

    List<Employee> getAllEmployees();

    EmployeeResponse addNewEmployee(EmployeeRequest employeeRequest);

    EmployeeResponse getEmployeeById(String employeeId);

    EmployeeResponse changeDataOfEmployee(String employeeId, EmployeeRequest employeeRequest);

    void deleteEmployee(String employeeId);

}
