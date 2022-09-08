import { configureStore } from "@reduxjs/toolkit"
import empSlice from "./employeeSlice"
export const employee_action=empSlice.actions;
export const store= configureStore({
  reducer:{
    emp_list:empSlice.reducer
  }
})