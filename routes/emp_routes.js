let express=require('express');
let router=express.Router();

router.post("/register",(req,res)=>{
    let data=req.body;
    res.send(data.name);
})
router.post("/login",(req,res)=>{
    res.send("Login page called");
})
router.get("/viewtasks",(req,res)=>{
    res.send("View tasks page called");
})
router.get("/viewtodo",(req,res)=>{
    res.send("View todo page called");
})
router.patch("/updateprofile",(req,res)=>{
    res.send("Update profile page called");
});

module.exports=router;