import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";


function EmployeesTable({ employees, pagination, fetchEmployees ,handleedit , handledelete}) {
  const { currentPage, TotalPages } = pagination;
  const pageNumbers = Array.from({ length: TotalPages }, (_, index) => index + 1);
  const headers = ['Name', 'Email', 'Phone No.', 'Salary', 'Department', 'Action'];

  const TableRow = ({ employee }) => (
    <tr>
      <td>
      <Link to={`/employees/${employee._id}`}>
                {employee.name}
              </Link>
      </td>
      <td >{employee.email}</td>
      <td>{employee.phone}</td>
      <td>{employee.salary}</td>
      <td>{employee.department}</td>
      <td>
        <button onClick={()=>{handleedit(employee)}} className="bg-green-600 text-white p-1 rounded"><CiEdit/></button>
        <button onClick={()=>{handledelete(employee)}}  className="bg-red-800 text-white p-1 rounded ml-2"><RiDeleteBin6Line/></button>
      </td>
    </tr>
  );

  const handleNextPage = () => {
    if (currentPage < TotalPages) {
      handlePage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePage(currentPage - 1);
    }
  };

  const handlePage = (page) => {
    fetchEmployees('', page, 5); 
  };

  return (
    <div>
      <table className="mt-5 border border-spacing-2 ">
        <thead>
          <tr className="bg-black text-white">
            {headers.map((header, id) => (
              <th className="text-sm p-2 font-serif" key={id}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-slate-300">
          {employees.map((emp) => (
            <TableRow key={emp._id} employee={emp} />
          ))}
        </tbody>
      </table>
      <div className="justify-between flex mt-2">
        <div>Page {currentPage} of {TotalPages}</div>
        <div>
          <button
            className="px-1  hover:text-white border   border-zinc-400 bg-slate-300 hover:bg-blue-800"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePage(page)} 
              className={`px-1 ${currentPage === page ? 'bg-blue-500 mx-1 text-white' : ''}`} 
            >
              {page}
            </button>
          ))}
          <button
            className="px-1 border border-spacing border-zinc-400 bg-slate-300 hover:bg-blue-800 hover:text-white"
            onClick={handleNextPage}
            disabled={currentPage === TotalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeesTable;
