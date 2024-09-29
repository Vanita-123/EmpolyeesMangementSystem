import { useState } from "react"
import { CreateEmplyees } from "./api/GetEmployees"

function AddEmployees({ showModel ,setshowModel, fetchEmployees}) {
  const [employee, setEmployee] = useState({
 name:'', email:'', phone:'', salary:'', department:' '})
  const handleclose =()=>{
     setshowModel(!showModel)
  }
  const resetEmployee =()=>{
    setEmployee({    name:'', email:'', phone:'', salary:'', department:' '})
  }
  const handlechange=(e)=>{

    const {name, value}= e.target;
   setEmployee ({...employee, [name]:value})
  }

  const handlesubmit = async(e)=>{
    e.preventDefault();
    console.log(employee)
    try {
     const {success, message} = await CreateEmplyees(employee);
     console.log(success,message)
     if(success){
          console.log("sucess" ,success)
       }
        else{
          console.log( "error" ,message)
        }
        setshowModel(false)
        resetEmployee();
        fetchEmployees();

    } catch (error) {
      console.log(error) 
    }
  }

    return (
      <div
        className={`modal fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center ${
        // className={`modal fixed inset-0  bg-opacity-75 flex justify-center items-center ${
          showModel ? 'block' : 'hidden'
        }`}
        tabIndex={-1}
        role="dialog"
      >
<div className="bg-white p-8 " >

 <div className="flex justify-between mb-2">

  <h1  className="flex text-red-500 bg-black px-2 font-semibold text-xl justify-center text-center"> Add Employees </h1>
     <button type="button" onClick={handleclose} className=" flex  text-xl text-black bg-slate-200  border border-gray-600 px-1">X</button>
 </div>

<div>

<form onSubmit={handlesubmit}>

  <label >Name</label>
  <div> 
  <input name="name"  className="text-black border border-black m-1 px-3 py-1" type="text" onChange={handlechange} value={employee.name}  required placeholder=" name" />
</div>
  <label htmlFor="">email</label>
  <div>
  <input name="email" className="text-black border border-black m-1 px-3 py-1" type="email" onChange={handlechange}  value={employee.email} required  placeholder=" email" />
  </div>
  <label htmlFor="">Phone</label>
  
  
  <div>
  <input name="phone" className="text-black border border-black m-1 px-3 py-1" type="text" onChange={handlechange} value={employee.phone} required  placeholder=" Phone" />
  </div>
  <label htmlFor="">Salary</label> 
  <div>
  <input name ="salary" className="text-black border border-black m-1 px-3 py-1" type="text" onChange={handlechange} value={employee.salary} required  placeholder=" Salary" />
  </div> 
  <label>Department</label>
  <div>
  <input name ="department" className="text-black border border-black m-1 px-3 py-1" type="text" onChange={handlechange} value={employee.departmenty} required  placeholder=" Department" />
  </div>

<div>
  <button onClick={handleclose} type= "submit" className="bg-blue-600 px-3 font-semibold text-xl rounded-md mt-1">Save</button>
</div>
</form>
  </div>    
</div>
      </div>
    );
  }
  
  export default AddEmployees;
  