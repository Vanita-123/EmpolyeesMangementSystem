import express from "express"
import { CreateEmpolyee, getAllEmpolyee , EmployeId ,  deleteEmployeId, updateEmployeId} from "../controllers/Employe.controller.js";
const router = express.Router();
// router.get("/", (req,res)=>{
//     res.send("hello");
// })

// router.post("/", (req,res)=>{
//     res.send("hello world"); 
// })
router.post("/create", CreateEmpolyee)
router.get("/get", getAllEmpolyee)
router.get("/get/:id", EmployeId)
router.delete("/:id", deleteEmployeId)   
router.put("/:id", updateEmployeId)
export default router;