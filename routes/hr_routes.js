let express=require('express');
let router=express.Router();
let {users}=require('../models/users');

router.get("/employees",async (req,res)=>{
    let result=await users.find();
    result.password=undefined;
    res.send(result);
});
//open postman and choose get method and type http://localhost:3000/api/hr/employees to see the result

router.delete("/deleteEMP/:id",async(req,res)=>{
    let result= await users.findByIdAndDelete(req.params.id);  //param is used to get the id from the url
    if(result){
        res.send("Employee deleted successfully");
    }
});
router.post("/assigntask",(req,res)=>{
    res.send("Assign task method page called");
});

router.get("/tasks",(req,res)=>{
    res.send("Tasks page called");
});

router.get("/notifications",(req,res)=>{
    res.send("Notifications page called");
});
module.exports=router;