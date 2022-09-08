import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EmployeeCardApi from './employeeCardApi';
import classes from "./employeeCard.module.css"
const EmployeeData = () => {
  const params=useParams()
  const mainList=useSelector(state=>state.emp_list.data);
  let detailAvailable=false;
  let url;
  var empData=[];
  empData=mainList.filter(employee=>{
    return employee.id===params.employeeId
  })
  try {
    if('details' in empData[0]){
      detailAvailable=true;
      url=empData[0].details;

    }else{
      console.log("we do not haev details");
      throw new Error("We do not have details")
    }
  } catch (error) {
    console.log(error.message);
  }
  console.log(detailAvailable);

  return (
    <div className={classes.detail}>
      <h1>This is the employee detail page</h1>
      <h1>{params.employeeId}</h1>
      {detailAvailable===true ?<EmployeeCardApi data={url}/>:
      <h1>We do not have details for this employee.</h1>
      }
    </div>
  );
};

export default EmployeeData;