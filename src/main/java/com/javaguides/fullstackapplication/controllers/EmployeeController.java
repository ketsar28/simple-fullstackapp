package com.javaguides.fullstackapplication.controllers;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpHeaders;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javaguides.fullstackapplication.models.Request.EmployeeRequest;
import com.javaguides.fullstackapplication.models.Response.ClientResponse;
import com.javaguides.fullstackapplication.services.EmployeeService;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/employees")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<?> getAllEmployees() {
        ClientResponse<?> response = ClientResponse.builder()
                .data(employeeService.getAllEmployees())
                .build();
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<?> addNewEmployee(@Valid @RequestBody EmployeeRequest employeeRequest) {
        ClientResponse<?> response = ClientResponse.builder()
                .data(employeeService.addNewEmployee(employeeRequest))
                .build();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable("id") String employeeId) {
        ClientResponse<?> response = ClientResponse.builder()
                .data(employeeService.getEmployeeById(employeeId))
                .build();
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> changeDataOfEmployee(@PathVariable("id") String employeeId,
            @RequestBody EmployeeRequest employeeRequest) {

        ClientResponse<?> response = ClientResponse.builder()
                .data(employeeService.changeDataOfEmployee(employeeId, employeeRequest))
                .build();
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") String employeeId) {
        employeeService.deleteEmployee(employeeId);
        ClientResponse<?> response = ClientResponse.builder()
        .data("employee with id " + employeeId + " has been deleted")
        .build();

        return ResponseEntity.ok(response);
    }
}
