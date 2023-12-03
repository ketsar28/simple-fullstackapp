package com.javaguides.fullstackapplication.controllers;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import com.javaguides.fullstackapplication.models.Response.ClientResponse;

@RestControllerAdvice
public class ErrorController {
    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<?> constraintError(ConstraintViolationException exception) {
        ClientResponse<?> response = ClientResponse.builder()
                .errors(exception.getMessage())
                .statusCode(HttpStatus.BAD_REQUEST)
                .build();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<?> genericError(ResponseStatusException exception) {
        ClientResponse<?> response = ClientResponse.builder()
                .errors(exception.getReason())
                .statusCode((HttpStatus) exception.getStatusCode())
                .build();
        return ResponseEntity.status(exception.getStatusCode()).body(response);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<?> handleDataIntegrityViolation(DataIntegrityViolationException exception) {
        ClientResponse<?> response = ClientResponse.builder()
                .errors(exception.getMessage())
                .statusCode(HttpStatus.BAD_REQUEST)
                .build();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(response);
    }
}
