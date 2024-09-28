import { Link } from "react-router-dom";

function EmployeesTable({ employees, pagination , fetchEmployees}) {
  const { currentPage, TotalPages}= pagination;
  const pageno = Array.from({length :TotalPages},(_, index)=>index+1);
  const headers = ['Name', 'Email', 'Phone No.', 'Salary', 'Department', 'Action'];

  const TableRow = ({ employee }) => {
    return (
      <tr>
        <td>
          <Link to={`/employees/${employee._id}`}> 
            {employee.name} 
          </Link>
        </td>
        <td>{employee.email}</td>
        <td>{employee.phone}</td>
        <td>{employee.salary}</td> 
        <td>{employee.department}</td>
        <td>
          <button className="bg-green-600 text-white p-1 rounded">Edit</button>
          <button className="bg-red-800 text-white p-1 rounded ml-2">Delete</button>
        </td>
      </tr>
    );
  };




  const handleNextPage =()=>{
    if(currentPage<TotalPages){
      handlePage(currentPage+1)

    }
  }
    
    const handlePrevPage =()=>{
      if(currentPage>1){
        handlePage(currentPage-1)
  
      }
  

  }
  const handlePage =(currPage)=>{
    fetchEmployees(' ', currPage,5)
  }
  return (
    <div>
      <table className="mt-5 bg-slate-200 border border-spacing-2 w-full">
        <thead>
          <tr>
            {headers.map((header, id) => (
              <th className="text-sm p-2 font-serif" key={id}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <TableRow key={emp._id} employee={emp} />
          ))}
        </tbody>
      </table>
      <div className="justify-between flex mt-2">
        <div>Page{currentPage} of {TotalPages}</div>
        <div>
          <button className=" px-1 border border-spacing border-black hover:bg-blue-800" onClick={handlePrevPage} disabled={currentPage===1}>prev </button>  
          {
            pageno.map((page,id)=>{
              return(
                <button onClick={handlePage}className="px-1" key ={id}>
                {page}
                </button>
              )
            })
          }
          <button className="px-1 border border-spacing border-black hover:bg-blue-800" onClick={handleNextPage} disabled={TotalPages===currentPage}>Next</button>
        </div>
        </div>
    </div>
  );
  }

export default EmployeesTable;
