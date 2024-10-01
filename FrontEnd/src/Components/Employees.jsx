import { useEffect, useState } from "react"
import EmpolyeesTable from "./EmpolyeesTable"
import { DeleteEmplyeesById, GetEmplyees } from "./api/GetEmployees"
import AddEmployees from "./AddEmployees"
import { IoIosSearch } from "react-icons/io";
import toast from "react-hot-toast";
function Employees(){
  const[editEmpobj , seteditEmpobj] =useState(null)
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
// console.log("json",data);
        
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
      // console.log(empObj)
      
    }
    const handleedit =(empObj)=>{
      setshowModel(true)
      seteditEmpobj(empObj)
      // console.log("EditObject" ,empObj)
    }
    const handledelete = async(emp)=>{
      try {
        const {success, message} = await DeleteEmplyeesById(emp._id)
       if(success){
          toast.success("success" ,success)
         }
         else{
         toast.success( "Sucessfully! deleted " ,message)
           }
      }        catch(error){
        toast.error(error)
      }
    }
    const handleSearch=(e)=>{
      const term  = e.target.value;
      fetchEmployees(term);
    }
    return (
        <div className=" flex  justify-center text-center align-middle my-24 items-center">
        <div>
        <h1 className="  bg-black p-2 rounded-xl text-red-600 font-semibold text-3xl">Employees Mangement System</h1>
     <br/>
     <div className=" border-zinc-400 border p-1 rounded-xm border-spacing-2">
      <div className="justify-between flex">
        <button className="bg-blue-500 rounded-sm text-xl font-sans px-1" onClick={handleAddEmployee}>Add</button>
        <div className="flex border   border-black" >
        <input className=" " type="text" onChange={handleSearch} placeholder="Search Employees" />
        <IoIosSearch className=" text-3xl text-black bg-zinc-400 "/>
        </div>
      </div>
     <EmpolyeesTable
     handleedit={handleedit}
     handledelete={handledelete}
     fetchEmployees={fetchEmployees}
     employees={Employeesdata.employees}
     pagination={Employeesdata.pagination}
     />
     <AddEmployees
     editEmpobj ={editEmpobj}
     fetchEmployees={fetchEmployees}
      showModel={showModel}
       setshowModel={setshowModel}
     />
     </div>
     </div>
      </div>
  )
}

export default Employees

