import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};
export const EmployeeSlice = createSlice({
  name: "employess",
  initialState,
  reducers: {
    Add_Emp: (state, action) => {
      state.employees.push(action.payload);
    },
    Delete_Emp: (state, action) => {
      state.employees.splice(action.payload, 1);
    },
    Update_Emp: (state, action) => {
      state.employees[action.payload.index] = action.payload.data;
    },
  },
});

export const { Add_Emp, Delete_Emp, Update_Emp } = EmployeeSlice.actions;
export default EmployeeSlice.reducer;
