import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Add_Emp } from "./Employee.reducer";

const EmployeeAdd = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [salary, setSalary] = useState("");

  const [mainError, setMainerror] = useState("");
  const [fnameError, setFnameerror] = useState("");
  const [lnameError, setLastnameerror] = useState("");

  const departmentData = useSelector((state) => state.reducer2.departments);
  const initialVal = departmentData.length > 0 ? departmentData[0].name : "";
  const [depart, setDepart] = useState(initialVal);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    event.preventDefault();
    if (fname.length === 0 && fname.length === 0) {
      setMainerror("please enter all filed");
      return;
    } else if (fname.length <= 3) {
      setFnameerror("please enter more than 3 character");
      return;
    } else if (lname <= 3) {
      setLastnameerror("please enter more than 3 character");
      return;
    }

    dispatch(Add_Emp({ fname, lname, dob, salary, depart }));
    setFname("");
    setLname("");
    setDob("");
    setSalary("");
    setDepart("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add Employee</h3>
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            className="form-control"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="Enter First Name.."
          />
          <span>{fnameError}</span>
        </div>
        <div className="form-group">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            className="form-control"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Enter Last Name.."
          />
          <span>{lnameError}</span>
        </div>
        <div className="form-group">
          <label htmlFor="">DOB</label>
          <input
            type="date"
            className="form-control"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Salary</label>
          <input
            type="text"
            className="form-control"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter Salary.."
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Department</label>
          <br />
          <select
            style={{ width: "110px", height: "35px" }}
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
          >
            {departmentData.map((item, index) => {
              return (
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>

        <div style={{ padding: "15px" }}>
          <button className="btn btn-primary">Submit</button>
        </div>
        <div>
          <span>{mainError}</span>
        </div>
        <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
          <Link to="employeeList">
            <button className="btn btn-info">Employee List</button>
          </Link>
          <Link to="departmentList">
            <button className="btn btn-info">Department List</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default EmployeeAdd;
