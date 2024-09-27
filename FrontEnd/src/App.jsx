import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Employees from "./Components/Employees"
import EmployeesDetails from "./Components/EmpolyeesDetails"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Navigate to = "employees"/>} />
        <Route path ="/employees" element = {<Employees/>} />
        <Route path ="/employees/id" element = {<EmployeesDetails/>} />
         {/* <h1>hello</h1> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
