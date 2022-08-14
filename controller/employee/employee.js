
import {executeQuery} from "../../config/db";

const getEmployee= async (req,res)=>{
    try{
        let employeeData= await executeQuery("select *from employee",[]);
        res.send(employeeData)
    }catch(err){
        res.status(500).json(err)
    }
  
};
///////////////////////////////////////////////////////////////////
const getEmployeeId=async (req,res)=>{
    let id=req.query.id
    try{
        let employeeData=await executeQuery(
            `select *from employee where idemployee=${id}`,
            []);
            res.status(200).json(employeeData)

    }catch(err){
        res.status(500).json(err)
    }
}
////////////////////////////////////////////////////////////////////
const deleteEmployeeId=async (req,res)=>{
    let id=req.query.id
    try{
        let employeeData=await executeQuery(
            "delete from employee where idemployee=?",
            [id]);
            res.status(200).json(employeeData)
    }catch(err){
        res.status(500).json(err)
    }
}

///////////////////////////////////////////////////////////////
const createEmployee=async (req,res)=>{
    console.log(req.body)
    let name=req.body.name;
    let course=req.body.course;
    try{
        let employeeData=await executeQuery(
            "insert into employee(name,course) values(?,?)",
            [name,course]
        );
         employeeData=await executeQuery(
            `select * from employee where idemployee= ${employeeData.insertId}`

        );
        res.status(200).json(employeeData)
    }catch(err){
        res.status(400).json(err)
    }
   };

   ////////////////////////////////////////////////////////////////////

   const updateEmployee=async (req,res)=>{
    let id=req.query.id
    const{name,course}=req.body;
    try{
        let employeeData=await executeQuery(
          "select * from employee where idemployee=?",
          [id]
        );
        if(employeeData.length>0){
        employeeData =await executeQuery(
            "update employee set name=?,course=? where idemployee=?",
            [name,course,id]
        );
        res.status(200).json(employeeData)
        } else{
           res.status(400).json(`employee not found on this id=${id}`)
        }  
        } catch(err){
            res.status(500).json(err)
    }

   };
   
   /////////////////////////////////////////////////////////////////////
   
export {getEmployee,getEmployeeId ,deleteEmployeeId,createEmployee ,updateEmployee}

