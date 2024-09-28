import EmployeeModel from "../models/Employee.model.js";

// import EmployeeModel from "../models/Employee.model";
 export const CreateEmpolyee =async (req, res)=>{
    const body = req.body;
    const emp= new EmployeeModel(body); 
    await emp.save();
    res.status(201).json({message:"Employees created Successfully!",
        Employee:{
            _id:emp.id,
            name:emp.name,
            email:emp.email,
            phone:emp.phone,
            salary:emp.salary,
            department:emp.department,
        }
    })
//  console.log(req.body);
//  res.send("got it")
    try {
        res.status(500).json({message :"Internal server Error"})
    } catch (error) {
        
    }
}    
  
export const getAllEmployee = async (req, res) => {
    try {
      let { page, limit, search } = req.query;
      page = parseInt(page) || 1;
      limit = parseInt(limit) || 5; 
      const skip = (page - 1) * limit;
      let searchCriteria = {};
  
      if (search) {
        searchCriteria = {
          name: {
            $regex: search,
            $options: "i"
          }
        };
      }
  
      const totalEmployees = await EmployeeModel.countDocuments(searchCriteria);
      const emps = await EmployeeModel.find(searchCriteria) 
        .skip(skip)
        .limit(limit)
        .sort({ updated: -1 });
  
      const totalPages = Math.ceil(totalEmployees / limit);
      res.status(200).json({
        message: "Get all employees successfully!",
        success: true, // Added success indicator
        data: {
          employees: emps,
          pagination: { 
            TotalEmployees: totalEmployees, // Fixed typo
            currentPage: page,
            TotalPages: totalPages, 
            pageSize: limit
          }
        } 
      });
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ message: "Internal server error", success: false });
    }
  };
  

export const EmployeId =async (req, res)=>{
    try {
        const {id} =req.params;
    // const body = req.body;
    const emps=  await EmployeeModel.findOne({_id:id}); 
    res.status(201).json({message:"get employee details", data:emps        
    })
} catch (error) {
        res.status(500).json({message :"Internal server Error" })
        
    }
}    



export const deleteEmployeId =async (req, res)=>{
    try {
        const {id} =req.params;
    const emp=  await EmployeeModel.findByIdAndDelete({_id: id}); 
    res.status(200).json({message:"Delete employee ", data:emp     
    })
} catch (error) {
        res.status(500).json({message :"Internal server Error" })
        
    }
}    




export const updateEmployeId =async (req, res)=>{
    try {
        const {name, email, phone, salary, department } =req.body;
        const {id} =req.params;
        let UpdateData ={
            name ,email, phone, salary , department, updatedAt :new Date()
        }
    const upadteemploye=  await EmployeeModel.findByIdAndUpdate(id, UpdateData,{new:true}); 
    res.status(200).json({message:"Update employee suceesfully " ,data:upadteemploye
    })
    if(!upadteemploye){
      return res.status(404).json({message :"Employee not found"})
    }
} catch (error) {
    console.log(error)
        res.status(500).json({message :"Internal server Error" })
        
    }
}    
