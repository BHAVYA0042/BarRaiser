import React, { useCallback, useEffect} from 'react';
import { employee_action } from '../store/main';
import {useDispatch} from "react-redux";



const GetData = () => {
  // const [employeeData,setEmployeeData]=useState([]);
  const dispatch=useDispatch();


  const getList=useCallback(async function(){
    try{
      const response=await fetch("https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees");
      if(!response.ok){
        throw new Error("Something is wrong");
      }else{
        const data=await response.json();
        console.log(data);

        dispatch(employee_action.populateData(data));
      } 
      // setIsLoading(false);
    }catch(error){
      console.log("Some error occured.");
    }
  },[dispatch])
  useEffect(()=>{
    getList()
  },[getList])



  // async function getList(){
  //   try{
  //     const response=await fetch("https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees");
  //     if(!response.ok){
  //       throw new Error("Something is wrong");
  //     }else{
  //       const data=await response.json();
  //       console.log(data);
  //       // setEmployeeData(data);
  //       dispatch(employee_action.populateData(data));
  //       const managerEmpData=data.map((emp)=>{
  //         return{
  //           emp_id:emp.id,
  //           manager_id:emp.manager_id
  //       }
  //     })
  //     console.log(managerEmpData);
  //     var managers=data.map((emp)=>{
  //       return emp.manager_id
  //   })
  //   var managerSet=new Set();
  //   managers.map(item=>managerSet.add(item))
  //   console.log(managerSet);
        
  //       //   const new_data=data.results.map((item)=>{
  //       //     return{
  //       //       key:Math.floor(Math.random()*100),
  //       //       heading:item.heading,
  //       //       video:item.video,
  //       //       tags:item.tags
  //       //     }
  //       //   })
  //       //   setApi_Data(new_data);
  //     } 
  //     // setIsLoading(false);
  //   }catch(error){
  //     console.log("Some error occured.");
  //   }
  

  // } 


  return (
    <div>
    {/* <JobTable data={employeeData}/> */}
    </div>
  );
};

export default GetData;