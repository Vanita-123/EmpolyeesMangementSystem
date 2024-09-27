// import { useEffect, useState } from "react"
// import EmpolyeesTable from "./EmpolyeesTable"
// import { GetEmployees } from "./api/GetEmployees"
// // import axios from 'axios'
// function Employees() {
//  const [Employeesdata, setEmployeesdata] =useState({

//     "Employees":[],
//     "pagination":{
//         "TotalEmpolyes":0,
//         "currentPage":1,    
//         "TotalPages":   1, 
//         "pageSize":5 
//     }
//  })
//   const fetchEmployees= async(search ='',page =1, limit=5 )=>{
//     try {
//         //   const data = await GetEmplyoees(search,page,limit)
//           const data = await GetEmplyoees(search,page,limit)
//           console.log(data);

//     } catch (error) {
//         console.log(error)
//     }

//   } 
//     useEffect(()=>{
//         fetchEmployees
//     },[])
//     return (
//         <div className=" flex  justify-center text-center align-middle my-5 items-center">
//         <div>
//         <h1 className="  bg-black p-2 rounded-xl text-red-600 font-semibold text-3xl">Employees Mangement System</h1>
//      <br/>
//      <div className=" border-zinc-400 border p-1 rounded-xm border-spacing-2">
//       <div className="justify-between flex">
//         <button className="bg-blue-500 rounded-sm text-xl font-sans px-1">Add</button>
//         <input className="border border-spacing-2 rounded-xl px-1 border-zinc-700" type="text" placeholder="Search Employees" />
//       </div>
//      <EmpolyeesTable/>
//      </div>
//      </div>
//       </div>
//   )
// }

// export default Employees













import { useEffect, useState } from "react";
import EmployeesTable from "./EmpolyeesTable";
import { GetEmployees } from "./api/GetEmployees";

function Employees() {
  const [employeesData, setEmployeesData] = useState({
    Employees: [],
    pagination: {
      TotalEmployees: 0,
      currentPage: 1,
      TotalPages: 1,
      pageSize: 5,
    },
  });

  const fetchEmployees = async (search = '', page = 1, limit = 5) => {
    try {
      const {data} = await GetEmployees(search, page, limit);
      console.log(data);

      // Update the state with fetched employee data
    //   setEmployeesData({
    //     Employees: data.employees || [],
    //     pagination: {
    //       TotalEmployees: data.totalEmployees || 0,
    //       currentPage: page,
    //       TotalPages: Math.ceil(data.totalEmployees / limit),
    //       pageSize: limit,
    //     },
    //   });
    setEmployeesData(data)
    } catch (error) {
      console.log(error);
    }
  };

  console.log('employees data' , employeesData)
  useEffect(() => {
    fetchEmployees(); // Call the fetchEmployees function on component mount
  }, []);

  return (
    <div className="flex justify-center text-center align-middle my-5 items-center">
      <div>
        <h1 className="bg-black p-2 rounded-xl text-red-600 font-semibold text-3xl">
          Employees Management System
        </h1>
        <br />
        <div className="border-zinc-400 border p-1 rounded-xm border-spacing-2">
          <div className="justify-between flex">
            <button className="bg-blue-500 rounded-sm text-xl font-sans px-1">
              Add
            </button>
            <input
              className="border border-spacing-2 rounded-xl px-1 border-zinc-700"
              type="text"
              placeholder="Search Employees"
              // Implement search functionality
              onChange={(e) => fetchEmployees(e.target.value, 1, employeesData.pagination.pageSize)}
            />
          </div>
          {/* Pass employees data to EmployeesTable */}
          <EmployeesTable employees={employeesData.Employees} />
        </div>
      </div>
    </div>
  );
}

export default Employees;

