import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import employeeService from "../services/EmployeeService";
import { InputField } from "./InputField";

export default function CreateEmployeeComponent() {
  const [formData, setFormData] = useState({
    // // step 2
    // id: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const navigate = useNavigate();
  // // step 3
  // const params = useParams();

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    // console.log("data firstname : ", value);
    setFormData((prevData) => ({ ...prevData, firstName: value }));
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    // console.log("data lastname : ", value);
    setFormData((prevData) => ({ ...prevData, lastName: value }));
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    // console.log("data email : ", value);
    setFormData((prevData) => ({ ...prevData, email: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan formData, seperti mengirimnya ke backend
    let employeeData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };
    console.log(JSON.stringify(employeeData));

    employeeService
      .addNewEmployee(employeeData)
      .then((res) => {
        console.log(res.data);
        navigate("/employees");
      })
      .catch((reason) => {
        console.log(reason.message);
      });

    // if (formData.id === -1) {
    //   employeeService
    //     .addNewEmployee(employeeData)
    //     .then((res) => {
    //       console.log(res.data);
    //       navigate("/employees");
    //     })
    //     .catch((reason) => {
    //       console.log(reason.message);
    //     });
    // } else {
    //   employeeService
    //     .updateEmployee(employeeData, params.id)
    //     .then((res) => {
    //       console.log(res.data);
    //       navigate("/employees");
    //     })
    //     .catch((reason) => {
    //       console.log(reason.message);
    //     });
    // }
  };

  const handleCancel = () => {
    console.log("Button cancel clicked");
    navigate("/employees");
  };

  // // step 4
  // useEffect(() => {
  //   if (formData.id === -1) {
  //     return;
  //   } else {
  //     setFormData((prevData) => ({ ...prevData, id: params.id }));
  //     employeeService.getEmployeeById(params.id).then((res) => {
  //       let employee = res.data;
  //       console.log(employee.data);
  //       setFormData({
  //         id: employee.data.id,
  //         firstName: employee.data.firstName,
  //         lastName: employee.data.lastName,
  //         email: employee.data.email,
  //       });
  //     });
  //   }
  // }, [formData.id, params.id]);

  return (
    <div className="container-form d-flex justify-content-center flex-column align-items-center">
      <h2 className="text-success fw-bold">Add Employee</h2>
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
