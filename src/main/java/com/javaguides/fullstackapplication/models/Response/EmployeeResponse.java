package com.javaguides.fullstackapplication.models.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class EmployeeResponse {
    private String id;
    private String firstName;
    private String lastName;
    private String email;
}
