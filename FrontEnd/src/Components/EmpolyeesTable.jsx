import { Link } from "react-router-dom"

function EmpolyeesTable({employees,pagination}) {
  const data =['Name' ,'Email' ,'PhoneNo.'  ,'Department'  ,'Action']
  const Tablerow =({employees})=>{
    return(
        <div>
            <tr>
                <td>
                    <Link to ={`/employees/id`}>
              <td>{employees.name}</td>
                    </Link>
                </td>
              <td>{employees.email}</td>
              <td>{employees.phone}</td>
              <td>{employees.department}</td>
              <tr>
              <td><button className="bg-green-600 " >{"edit"}</button></td>
              <td><button className="bg-red-800">{"del"}</button></td>
              </tr>
            </tr>
        </div>
    )
  } 
  
  return (
    <div>
    <table className=" m-2 bg-slate-200 boder border-spacing-2  ">
<thead>
    {/* <tr className=" flex space-x-9 px-4"> */}
    <tr>
   {data.map((thead, id) =>{
       return(
           <th className="text-xm p-2 font-serif" key ={id}> {thead}
        </th>
    )
})}

</tr>
</thead>
<tbody>
    {
        employees.map((emp ,id)=>{

            <Tablerow key ={id} employees={emp}/>
        })
    }
    </tbody>


</table>      
    </div>
  )
}

export default EmpolyeesTable
