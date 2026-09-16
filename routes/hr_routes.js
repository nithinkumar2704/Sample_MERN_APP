let express=require('express');
let router=express.Router();

router.get("/employees",(req,res)=>{
    res.send("Employees called");
});

router.post("/assign-task",(req,res)=>{
    res.send("Assign task method page called");
});

router.get("/tasks",(req,res)=>{
    res.send("Tasks page called");
});

router.get("/notifications",(req,res)=>{
    res.send("Notifications page called");
});
module.exports=router;