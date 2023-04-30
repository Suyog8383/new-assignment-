import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departments: [],
};

export const DepartmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    Add_Department: (state, action) => {
      state.departments.push(action.payload);
    },
  },
});

export const { Add_Department } = DepartmentSlice.actions;
export default DepartmentSlice.reducer;
