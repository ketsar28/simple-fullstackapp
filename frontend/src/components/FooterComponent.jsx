/* eslint-disable react/style-prop-object */
import React, { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
      <div className="position-fixed bottom-0 w-100">
        <footer className="bg-body-tertiary text-center text-lg-start">
          <div
            className="text-center p-3"
            style={{ backgroundColor: ` rgba(0, 0, 0, 0.05) ` }}
          >
            All Rights Reserved © 2023 Copyright{" "}
            <a
              className="text-danger fw-bold text-decoration-none"
              href="https://instagram.com/ketsar28/"
            >
              {" "}
              KetsarAli{" "}
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
