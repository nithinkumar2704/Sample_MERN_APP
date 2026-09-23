let express=require('express');
let router=express.Router();
let bcrypt=require('bcrypt');
let {users}=require('../models/users');
router.post("/register",async (req,res)=>{
    let data=req.body;
    data.password=await bcrypt.hash(data.password,10);
    let newuser=new users(data);
    let result=await newuser.save();
    res.send(result);
})
router.post("/login",async (req,res)=>{
    let user=await users.findOne({email:req.body.email}); //collecting mail from postman and checking in database
    if(user){
        let passmatch=await bcrypt.compare(req.body.password,user.password);
if(passmatch){
    res.send("Login Successfully");
}else{
    res.send("Incorrect Passwordd");
}
    }else{
        res.send("Invalid Email");
    }
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