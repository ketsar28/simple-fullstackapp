/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-success text-light">
          <div className="container mx-5">
            <h2>Companies</h2>
            <ul
              className="d-flex gap-3 me-auto mb-2 mb-lg-0"
              style={{ listStyleType: "none" }}
            >
              <li className="">
                <Link
                  className="text-decoration-none text-light fw-semibold"
                  aria-current="page"
                  to={`/`}
                  about="Show Employees"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  className="text-decoration-none text-light fw-semibold"
                  to="/employee"
                  about="Add Employee"
                >
                  Add Employee
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderComponent;
