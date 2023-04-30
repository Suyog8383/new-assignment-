import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete_Emp, Update_Emp } from "./Employee.reducer";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [salary, setSalary] = useState("");
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");

  const departmentData = useSelector((state) => state.reducer2.departments);
  const initialVal = departmentData.length > 0 ? departmentData[0].name : "";
  const [depart, setDepart] = useState(initialVal);

  const employeeData = useSelector((state) => state.reducer1.employees);
  const dispatch = useDispatch();

  const handleEdit = (item, index) => {
    setFname(item.fname);
    setLname(item.lname);
    setDob(item.dob);
    setSalary(item.salary);
    setDepart(item.depart);
    setEditing(index);
  };
  const handleDelete = (index) => {
    dispatch(Delete_Emp(index));
  };
  const handleSave = () => {
    dispatch(
      Update_Emp({
        index: editing,
        data: {
          fname: fname,
          lname: lname,
          dob: dob,
          salary: salary,
          depart: depart,
        },
      })
    );
    setFname("");
    setLname("");
    setDepart("");
    setDob("");
    setSalary("");
    setEditing(null);
  };

  const handleSearch = employeeData.filter((item) => {
    return item.fname.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <label htmlFor="">Search:</label>
      <input
        type="text"
        placeholder="Enter First Name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>Salary</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {handleSearch.map((item, index) => {
              return (
                <>
                  <tr>
                    {editing === index ? (
                      <>
                        <th>
                          <input
                            type="text"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                          />
                        </th>
                        <th>
                          <input
                            type="text"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                          />
                        </th>
                        <th>
                          <input
                            type="text"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                          />
                        </th>
                        <th>
                          <input
                            type="text"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                          />
                        </th>
                        <th>
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
                        </th>
                        <th>
                          <button onClick={handleSave}>Save</button>
                        </th>
                      </>
                    ) : (
                      <>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.dob}</td>
                        <td>{item.salary}</td>
                        <td>{item.depart}</td>
                        <td>
                          <button onClick={() => handleEdit(item, index)}>
                            Edit
                          </button>
                        </td>
                        <td>
                          <button onClick={() => handleDelete(index)}>
                            Delete
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                </>
              );
            })}
            <tr></tr>
          </tbody>
        </table>
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-info">Employee Add</button>
        </Link>
      </div>
    </div>
  );
};
export default EmployeeList;
