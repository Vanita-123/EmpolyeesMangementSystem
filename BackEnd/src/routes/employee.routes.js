import express from "express"
import { CreateEmpolyee, getAllEmployee , EmployeId ,  deleteEmployeId, updateEmployeId} from "../controllers/Employe.controller.js";
const router = express.Router();
// router.get("/", (req,res)=>{
//     res.send("hello");
// })

// router.post("/", (req,res)=>{
//     res.send("hello world"); 
// })
router.post("/", CreateEmpolyee)
router.get("/", getAllEmployee)
router.get("/:id", EmployeId)
router.delete("/:id", deleteEmployeId)   
router.put("/:id", updateEmployeId)
export default router;