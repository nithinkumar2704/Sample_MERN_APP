let express=require('express');
let mongoose=require('mongoose');
let hrroutes=require('./routes/hr_routes');
let emproutes=require('./routes/emp_routes');
let app=express();
//connect with out mongodb hrmanagement database
mongoose.connect("mongodb://localhost:27017/hrmanagement").then(
    ()=>console.log("Connected to MongoDB")
).catch((err) =>console.log(err));
app.use(express.json()); 
app.use("/api/hr",hrroutes);  //calling 
//localhost:3000/api/hr/employees
app.use("/api/emp",emproutes);  //calling 
//run the server in port 3000
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});


