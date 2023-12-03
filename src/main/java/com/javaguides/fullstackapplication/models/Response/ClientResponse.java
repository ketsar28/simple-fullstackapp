package com.javaguides.fullstackapplication.models.Response;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

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
public class ClientResponse<T> {
    private T data;
    private String errors;
    private HttpStatus statusCode;

    @JsonProperty("data")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public T getData() {
        return data;
    }

    @JsonProperty("errors")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public String getErrors() {
        return errors;
    }

    @JsonProperty("statusCode")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public HttpStatus getStatusCode() {
        return statusCode;
    }
}
