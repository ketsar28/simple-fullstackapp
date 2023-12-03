import React, { useState, useEffect } from "react";
import { InputField } from "./InputField";
import employeeService from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateEmployeeComponent() {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  
  const navigate = useNavigate();
  const params = useParams();

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, firstName: value }));
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, lastName: value }));
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, email: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let employeeData = {
      id: formData.id,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };

    // Lakukan sesuatu dengan formData, seperti mengirimnya ke backend
    console.log(JSON.stringify(employeeData));

    employeeService
      .updateEmployee(employeeData, employeeData.id)
      .then((res) => {
        console.log(res.data);
        navigate("/employees");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleCancel = () => {
    console.log("Button cancel clicked");
    navigate("/employees");
  };

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, id: params.id }));
    employeeService.getEmployeeById(params.id).then((res) => {
      let employee = res.data;
      console.log(employee.data);
      setFormData({
        id: employee.data.id,
        firstName: employee.data.firstName,
        lastName: employee.data.lastName,
        email: employee.data.email,
      });
    });
  }, [params.id]);

  return (
    <div className="container-form d-flex justify-content-center flex-column align-items-center">
      <h2 className="text-success fw-bold">Update Employee</h2>
      <div className="container-field w-50">
        <form onSubmit={handleSubmit}>
          <InputField
            label="Firstname"
            id="inputFirstName"
            type="text"
            placeholder="Enter firstname"
            value={formData.firstName}
            onChange={handleFirstNameChange}
          />

          <InputField
            label="Lastname"
            id="inputLastName"
            type="text"
            placeholder="Enter lastname"
            value={formData.lastName}
            onChange={handleLastNameChange}
          />

          <InputField
            label="Email"
            id="inputEmail"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleEmailChange}
          />

          <div className="container-button d-flex gap-3">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
