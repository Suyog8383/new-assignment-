/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import DepartmentList from "./Components/Department/DepartmentList";
import EmployeeAdd from "./Components/Employee/EmployeeAdd";
import EmployeeList from "./Components/Employee/EmployeeList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeAdd />} />
          <Route path="employeeList" element={<EmployeeList />} />
          <Route path="departmentList" element={<DepartmentList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
