import { useDispatch, useSelector } from "react-redux";
import { Add_Department } from "./Department.reducer";
import { useState } from "react";
import { Link } from "react-router-dom";

function DepartmentList() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [isLoad, setIsload] = useState(false);

  const reducerData = useSelector((state) => state.reducer2.departments);

  const distpatch = useDispatch();

  const handleDelete = () => {
    setIsload(false);
    setName("");
    setDepartment("");
  };

  const handleOnClick = () => {
    distpatch(Add_Department({ name, department }));
    setName("");
    setDepartment("");
  };

  const handleOnClick2 = () => {
    setIsload(true);
  };
  return (
    <div>
      <h3>Department List</h3>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Department Name</th>
              <th>Department Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reducerData.length > 0 ? (
              <>
                {reducerData.map((item, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.department}</td>
                        <td>
                          <button onClick={handleOnClick2}>Add</button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </>
            ) : (
              <>
                <tr>
                  <td>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={handleOnClick}>Add</button>
                    <button onClick={handleDelete}>Delete</button>
                  </td>
                </tr>
              </>
            )}

            {isLoad && (
              <>
                <tr>
                  <td>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={handleOnClick}>Add</button>
                    <button onClick={handleDelete}>Delete</button>
                  </td>
                </tr>
              </>
            )}
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
}

export default DepartmentList;
