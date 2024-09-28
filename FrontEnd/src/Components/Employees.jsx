import { useEffect, useState } from "react"
import EmpolyeesTable from "./EmpolyeesTable"
import { GetEmplyees } from "./api/GetEmployees"
import AddEmployees from "./AddEmployees"
function Employees(){
  const [showModel, setshowModel] =useState(false)
 const [Employeesdata, setEmployeesdata] =useState({

    "employees":[],
    "pagination":{
        "TotalEmpolyes":0, 
        "currentPage":1,    
        "TotalPages":   1, 
        "pageSize":5 
    }
 })
  const fetchEmployees= async(search ='',page =1, limit=5 )=>{
    try {
const {data} = await GetEmplyees(search, page,limit)

setEmployeesdata(data);
console.log("json",data);
        
      } catch (error) {
        console.log ("error" ,error)
      }
      
    } 
    // console.log("data", Employeesdata)
    useEffect(()=>{
        fetchEmployees();
    },[])

    const handleAddEmployee =()=>{
      setshowModel(true)
      console.log("hello")
    }
    return (
        <div className=" flex  justify-center text-center align-middle my-5 items-center">
        <div>
        <h1 className="  bg-black p-2 rounded-xl text-red-600 font-semibold text-3xl">Employees Mangement System</h1>
     <br/>
     <div className=" border-zinc-400 border p-1 rounded-xm border-spacing-2">
      <div className="justify-between flex">
        <button className="bg-blue-500 rounded-sm text-xl font-sans px-1" onClick={handleAddEmployee}>Add</button>
        <input className="border border-spacing-2 rounded-xl px-1 border-zinc-700" type="text" placeholder="Search Employees" />
      </div>
     <EmpolyeesTable
     fetchEmployees={fetchEmployees}
     employees={Employeesdata.employees}
     pagination={Employeesdata.pagination}
     />
     <AddEmployees showModel={showModel}/>
     </div>
     </div>
      </div>
  )
}

export default Employees

