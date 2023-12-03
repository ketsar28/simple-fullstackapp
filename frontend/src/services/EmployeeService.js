/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const EMPLOYEE_BASE_URL = "http://localhost:8080/api/employees";
class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_BASE_URL);
  }

  addNewEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_URL, employee);
  }

  getEmployeeById(id) {
    return axios.get(EMPLOYEE_BASE_URL + "/" + id);
  }
  updateEmployee(employee, id) {
    return axios.put(EMPLOYEE_BASE_URL + "/" + id, employee);
  }

  deleteEmployee(id) {
    return axios.delete(EMPLOYEE_BASE_URL + "/" + id);
  }
}

export default new EmployeeService();
