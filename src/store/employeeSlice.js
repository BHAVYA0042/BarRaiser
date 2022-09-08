import {createSlice} from "@reduxjs/toolkit";
const employee_initial={
  data:[],
  filteredData:[],
  filterApplied:false
}
const empSlice=createSlice({
  name:'employee',
  initialState:employee_initial,
  reducers:{
    populateData(state,action){
      state.data=action.payload;
    },
    filterData(state,action){
      state.filterApplied=true;
      console.log(action.payload);
      const fName=action.payload.firstName;
      console.log(fName);
      const lName=action.payload.lastName;
      const addr=action.payload.address;
      const desig=action.payload.designation;

        if (fName.length>0 && lName.length>0 && addr.length>0 && desig!=null){
        console.log("sabme");
        state.filteredData=state.data.filter(emp=>{
          return emp.first_name===fName  && emp.last_name===lName && emp.address===addr && emp.designation===desig
        })
        console.log("data populated");
      }
      else{
        if(fName.length>0){
          console.log("in area");
          if(lName.length>0 || addr.length>0 || desig!=null){
            state.filteredData=state.data.filter(emp=>{
              return emp.first_name===fName && (emp.last_name===lName || emp.address===addr || emp.designation===desig)
            })
          }
          else{
            state.filteredData=state.data.filter(emp=>{
              return emp.first_name===fName
            })
          }
        }
        if(lName.length>0){
          console.log("in lName");
          if(addr.length>0 || fName.length>0 || desig!=null){
            state.filteredData=state.data.filter(emp=>{
              return emp.last_name===lName && (emp.first_name===fName || emp.address===addr || emp.designation===desig)
            })
          }
          else{
            state.filteredData=state.data.filter(emp=>{
              return emp.last_name===lName
            })
          }
        }
        if(addr.length>0){
          console.log("in addr");
          if(fName.length>0 || desig!=null || lName.length>0){
            state.filteredData=state.data.filter(emp=>{
              return emp.address===addr && (emp.first_name===fName || emp.last_name===lName || emp.designation===desig)
            })
          }
          else{
            state.filteredData=state.data.filter(emp=>{
              return emp.address===addr
            })
          }
        }
        if(desig!=null){
          console.log("in desig");
          if(fName.length>0 || addr.length>0 || lName.length>0){
            state.filteredData=state.data.filter(emp=>{
              return emp.designation===desig && (emp.first_name===fName || emp.last_name===lName || emp.address===addr)
            })
          }
          else{
            state.filteredData=state.data.filter(emp=>{
              return emp.designation===desig
            })
          }
        }
      }
    },  
    removeFilter(state){
      state.filteredData=[];
      state.filterApplied=false;
  }

  }
})

export default empSlice;