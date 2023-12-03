package com.javaguides.fullstackapplication.services.impl;

import java.util.List;
import java.util.Objects;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.javaguides.fullstackapplication.entities.Employee;
import com.javaguides.fullstackapplication.models.Request.EmployeeRequest;
import com.javaguides.fullstackapplication.models.Response.EmployeeResponse;
import com.javaguides.fullstackapplication.repositories.EmployeeRepository;
import com.javaguides.fullstackapplication.services.EmployeeService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public EmployeeResponse addNewEmployee(EmployeeRequest employeeRequest) {
        if (Objects.isNull(employeeRequest)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Employee request cannot be null");
        }

        if (Objects.nonNull(employeeRequest.getId())) {
            if (Objects.isNull(employeeRequest.getFirstName())) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Firstname is required");
            } else if (Objects.isNull(employeeRequest.getLastName())) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Lastname is required");
            } else if (Objects.isNull(employeeRequest.getEmail())) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email is required");
            } else if (employeeRepository.existsByEmail(employeeRequest.getEmail())) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already exists");
            }
        }

        Employee employee = modelMapper.map(employeeRequest, Employee.class);
        employeeRepository.save(employee);
        return modelMapper.map(employee, EmployeeResponse.class);
    }

    @Override
    public EmployeeResponse getEmployeeById(String employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Employee with id " + employeeId + " not found"));
        ;
        return modelMapper.map(employee, EmployeeResponse.class);
    }

    @Override
    public EmployeeResponse changeDataOfEmployee(String employeeId, EmployeeRequest employeeRequest) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Employee with id " + employeeId + " not found"));

        employee.setEmail(employeeRequest.getEmail());
        employee.setFirstName(employeeRequest.getFirstName());
        employee.setLastName(employeeRequest.getLastName());
        employeeRepository.save(employee);
        return modelMapper.map(employee, EmployeeResponse.class);
    }

    @Override
    public void deleteEmployee(String employeeId) {
        employeeRepository.deleteById(employeeId);
    }

}
