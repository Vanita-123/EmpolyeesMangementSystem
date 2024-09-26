import mongoose from "mongoose";


const EmployeeSchema = mongoose.Schema({
//     profileimage:{
//    type:Image,
//     },
    name:{
        type :String,
        require:true,
        unique :true
    },
    email:{
        type :String,
        require:true,
        unique :true,
        lowerCase:true
    },
    phone:{
        type :Number,
        unique :true,
        require:true,
    },
    salary:{
        type :String,
        require:true
    },
    department:{
        type :String,
        require:true,
    },
    createdAt:{
        type:Date,
        default:new Date(),
    
    },
    updatedAt:{
        type:Date,
        default:new Date(),
    }
},
    {
        timestamps:true 
    }
)

const EmployeeModel =mongoose.model("EmployeeModel"  ,EmployeeSchema);

export default EmployeeModel
