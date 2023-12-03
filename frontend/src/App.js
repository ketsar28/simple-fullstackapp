/* eslint-disable no-unused-vars */
import "./App.css";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="container p-5">
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/employees" element={<ListEmployeeComponent />} />

          {/*step 1*/}
          <Route
            path="/employee"
            element={<CreateEmployeeComponent />}
          />
          <Route
            path="/employee/:id"
            element={<UpdateEmployeeComponent />}
          />
          <Route
            path="/view-employee/:id"
            element={<ViewEmployeeComponent />}
          />
        </Routes>
      </div>
      <FooterComponent />
    </Router>
  );
}

export default App;
