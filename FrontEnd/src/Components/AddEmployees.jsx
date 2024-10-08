import { useEffect, useState } from "react";
import { CreateEmplyees, UpdateEmplyeesById } from "./api/GetEmployees";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";

function AddEmployees({ showModel, setshowModel, fetchEmployees, editEmpobj }) {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    salary: "",
    department: "",
  });

  const [editbtn, seteditbtn] = useState(false);

  useEffect(() => {
    if (editEmpobj) {
      seteditbtn(true);
      setEmployee(editEmpobj);
    } else {
      resetEmployee();
      seteditbtn(false);
    }
  }, [editEmpobj]);

  const resetEmployee = () => {
    setEmployee({
      name: "",
      email: "",
      phone: "",
      salary: "",
      department: "",
    });
  };

  const handleclose = () => {
    setshowModel(false);
    resetEmployee();
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const { success, message } = editbtn
        ? await UpdateEmplyeesById(employee, employee._id)
        : await CreateEmplyees(employee);
      toast.success(message);
      if (success) {
        toast.success(
          editbtn
            ? "Employee updated successfully!"
            : "Employee added successfully!"
        );
      } else {
        toast.error("Operation failed. Please try again.");
      }

      setshowModel(false);
      resetEmployee();
      fetchEmployees();
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };

  return (
    <div
      className={`modal fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center ${
        showModel ? "block" : "hidden"
      }`}
      tabIndex={-1}
      role="dialog"
    >
      <div className="bg-white p-8 ">
        <div className="flex justify-between mb-2">
          <h1 className="flex text-red-500 bg-black px-2 font-semibold text-xl justify-center text-center">
            {editbtn ? "Update Employee" : "Add Employee"}
          </h1>
          <button
            type="button"
            onClick={handleclose}
            className="flex text-xl mt-1 text-black bg-slate-200 border border-gray-600 px-1"
          >
            <RxCross2 />
          </button>
        </div>

        <div>
          <form onSubmit={handlesubmit}>
            <label>Name</label>
            <div>
              <input
                name="name"
                className="text-black border border-black m-1 px-3 py-1"
                type="text"
                onChange={handlechange}
                value={employee.name}
                required
                placeholder="Name"
              />
            </div>
            <label>Email</label>
            <div>
              <input
                name="email"
                className="text-black border border-black m-1 px-3 py-1"
                type="email"
                onChange={handlechange}
                value={employee.email}
                required
                placeholder="Email"
              />
            </div>
            <label>Phone</label>
            <div>
              <input
                name="phone"
                className="text-black border border-black m-1 px-3 py-1"
                type="text"
                onChange={handlechange}
                value={employee.phone}
                required
                placeholder="Phone"
              />
            </div>
            <label>Salary</label>
            <div>
              <input
                name="salary"
                className="text-black border border-black m-1 px-3 py-1"
                type="text"
                onChange={handlechange}
                value={employee.salary}
                required
                placeholder="Salary"
              />
            </div>
            <label>Department</label>
            <div>
              <input
                name="department"
                className="text-black border border-black m-1 px-3 py-1"
                type="text"
                onChange={handlechange}
                value={employee.department}
                required
                placeholder="Department"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 px-3 font-semibold text-xl rounded-md mt-1 hover:bg-blue-300"
              >
                {editbtn ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployees;
