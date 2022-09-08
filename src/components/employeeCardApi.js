import React, { useCallback, useEffect,useState } from 'react';
import classes from "./employeeCard.module.css";
const EmployeeCardApi = (props) => {
  const [actualDetail,setActualDetail]=useState({});

  const getDetail=useCallback( async function(){
    try{
      const response=await fetch(props.data);
      if(!response.ok){
        throw new Error("Something is wrong");
      }else{
        const data=await response.json();
        const ob=data[0]

        Object.keys(ob).forEach(function(key){
          var val=ob[key];
          delete ob[key];
          key = key.replaceAll('_',' ');
          key=key.replace(/\b\w/g, x => x.toUpperCase());
          ob[key]=val;
        });
        console.log(ob);
        setActualDetail(ob)
      } 
    }catch(error){
      console.log("Some error occured.");
    }
  },[props.data] )
  useEffect(()=>{
    getDetail()
  },[getDetail])

  console.log(actualDetail);
  return (
    <div className={classes.tab}>
    <table>
    <tr>
      <th><h4>Field</h4></th>
      <th><h4>Value</h4></th>
    </tr>
      {Object.keys(actualDetail).map(index=> (
        <tr>
          <td><p>{index}</p></td>
          <td><p>{actualDetail[index]?.toString()}</p></td>
        </tr>
      ))}
    </table>
    </div>
  );
};

export default EmployeeCardApi;