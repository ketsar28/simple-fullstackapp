import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import employeeService from "../services/EmployeeService";

export default function ViewEmployeeComponent() {
  const params = useParams();
  const [employee, setEmployee] = useState({
    id: params.id,
    data: {},
  });

  useEffect(() => {
    employeeService.getEmployeeById(params.id).then((res) => {
      setEmployee({ data: res.data.data });
    });
  }, [params.id]);

  return (
    <div>
      <div className="d-flex justify-content-center flex-column gap-3 align-items-center">
        {" "}
        <h2 className="text-info">Employee Details</h2>
        <div className="card fw-semibold" style={{ width: "18rem" }}>
          <div className="card-body border border-4 border-info">
            <p className="card-text">Firstname : {employee.data.firstName}</p>
            <p className="card-text">Lastname : {employee.data.lastName}</p>
            <p className="card-text">Email : {employee.data.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
