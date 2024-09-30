import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { GetEmplyeesById } from "./api/GetEmployees";


function EmpolyeesDetails() {
  const Navigate  =useNavigate();
const [empdetails, setempdetails] =useState({})
  const {id}= useParams();
  // console.log(id);
  const fetchEmployeeById= async()=>{
    try {
      const{data} = await await GetEmplyeesById(id);
      // console.log(data)
      setempdetails(data)
     } catch (error) {
       console.log("failed to fetch",error ) 
     }
  }
  useEffect(()=>{
  fetchEmployeeById();
  },[])
  return (
    <div className=" flex  justify-center text-center align-middle my-5 items-center mt-64 text-xl">
  {/* <h1 className="  bg-black p-2 rounded-xl text-red-600 font-semibold text-3xl">Employees Mangement System</h1> */}
  <div className="justify-center text-center  align-middle p-8 bg-zinc-300 border border-black ">

    <h2 className="bg-black text-red-500 p-1 ">Employee Details</h2>
   <div className="flex mt-3 ">
       <strong>Name :
       </strong>
    <h4>
       {empdetails.name}</h4>
   </div>
   <div className=" flex">
      <strong>  Email : </strong> 
    <h4>
    {empdetails.email}</h4>
   </div>
   <div className="flex">
       <strong>Phone : </strong>
    <h4>
    {empdetails.phone}</h4>
   </div>
   <div className="flex">
      <strong>Salary : </strong>
    <h4>
      {empdetails.salary}</h4>
   </div>
   <div className="flex">
      <strong>Department : </strong>
    <h4>
      {empdetails.department}</h4>
   </div>
  <div>
 </div>
    <button className="bg-blue-500 px-1  m-1 text-xl font-semibold rounded-md" onClick={()=>Navigate('/employees')}>
      Back
    </button>
  </div>
</div>
  )
}

export default EmpolyeesDetails
