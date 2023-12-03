import React, { useState, useEffect } from "react";
import employeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

export default function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const addEmployee = () => {
    navigate("/employee");
  };

  const updateEmployee = (id) => {
    navigate(`/employee/${id}`);
  };

  const viewEmployee = (id) => {
    navigate(`/view-employee/${id}`)
  }

  const deleteEmployee = (id) => {
    employeeService
      .deleteEmployee(id)
      .then((res) => {
        employeeService.getEmployees().then((response) => {
          setEmployees(response.data.data);
          console.log(response.data);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    employeeService.getEmployees().then((response) => {
      setEmployees(response.data.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-center">Employee List</h2>

      <button
        className="btn btn-success my-3 fw-semibold"
        onClick={addEmployee}
      >
        Add New Employee
      </button>

      <div className="row">
        <table className="table table-striped table-bordered table-success">
          <thead>
            <tr className="text-center">
              <th className="fw-bold">Employee Id</th>
              <th className="fw-bold">First Name</th>
              <th className="fw-bold">Last Name</th>
              <th className="fw-bold">Email</th>
              <th className="fw-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td className="d-flex justify-content-evenly">
                  <button
                    onClick={() => updateEmployee(employee.id)}
                    className="btn btn-warning fw-semibold"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteEmployee(employee.id)}
                    className="btn btn-danger fw-semibold"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => viewEmployee(employee.id)}
                    className="btn btn-info fw-semibold"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
