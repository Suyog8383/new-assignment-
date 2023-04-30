import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./Employee/Employee.reducer";
import departmentReducer from "./Department/Department.reducer";

export const store = configureStore({
  reducer: {
    reducer1: employeeReducer,
    reducer2: departmentReducer,
  },
});
